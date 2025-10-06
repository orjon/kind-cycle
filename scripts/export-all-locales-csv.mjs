#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(raw)
}

// Returns ordered array of { key, value } preserving traversal order
function flattenToPairs(obj, parentKey = '', pairs = []) {
  Object.entries(obj).forEach(([key, value]) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      flattenToPairs(value, newKey, pairs)
    } else {
      pairs.push({ key: newKey, value })
    }
  })
  return pairs
}

function csvEscape(value) {
  if (value == null) return ''
  const str = String(value)
  const needsQuotes = /[",\n\r]/.test(str)
  const escaped = str.replace(/"/g, '""')
  return needsQuotes ? `"${escaped}"` : escaped
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function writeCsv(rows, header, outPath) {
  const lines = [header.join(',')]
  rows.forEach((cols) => {
    lines.push(cols.map(csvEscape).join(','))
  })
  fs.writeFileSync(outPath, lines.join('\n'), 'utf8')
}

function scanLocales(dirPath) {
  const entries = fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith('.json'))
    .map((f) => ({
      code: path.basename(f, '.json'),
      file: path.join(dirPath, f)
    }))

  // Prioritise 'en' first, then others alphabetically by code
  const hasEn = entries.some((e) => e.code === 'en')
  const others = entries
    .filter((e) => e.code !== 'en')
    .sort((a, b) => a.code.localeCompare(b.code))
  const ordered = hasEn
    ? [entries.find((e) => e.code === 'en'), ...others]
    : others
  return ordered
}

function main() {
  const [inDir, outPath] = process.argv.slice(2)
  if (!inDir || !outPath) {
    console.error(
      'Usage: node scripts/export-all-locales-csv.mjs <input_dir> <output.csv>'
    )
    process.exit(1)
  }

  const locales = scanLocales(inDir)
  if (locales.length === 0) {
    console.error('No locale JSON files found in directory:', inDir)
    process.exit(1)
  }

  // Build ordered key list: base from 'en' (or first), then append any unseen keys from others in their order
  const codeToMap = new Map()
  const keyOrder = []
  const seenKeys = new Set()

  locales.forEach(({ code, file }, idx) => {
    const json = readJson(file)
    const pairs = flattenToPairs(json)
    const map = new Map(pairs.map((p) => [p.key, p.value]))
    codeToMap.set(code, map)

    pairs.forEach(({ key }) => {
      if (!seenKeys.has(key)) {
        seenKeys.add(key)
        keyOrder.push(key)
      }
    })
  })

  const header = ['key', ...locales.map((l) => l.code)]
  const rows = keyOrder.map((key) => {
    const cols = [key]
    locales.forEach(({ code }) => {
      const value = codeToMap.get(code)?.get(key)
      cols.push(value == null ? '' : String(value))
    })
    return cols
  })

  ensureDir(outPath)
  writeCsv(rows, header, outPath)
  console.log(`Wrote CSV: ${outPath}`)
}

main()
