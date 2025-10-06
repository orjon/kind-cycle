#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(raw)
}

function flattenObject(obj, parentKey = '', result = {}) {
  Object.entries(obj).forEach(([key, value]) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      flattenObject(value, newKey, result)
    } else {
      result[newKey] = value
    }
  })
  return result
}

function csvEscape(value) {
  if (value == null) return ''
  const str = String(value)
  const needsQuotes = /[",\n\r]/.test(str)
  const escaped = str.replace(/"/g, '""')
  return needsQuotes ? `"${escaped}"` : escaped
}

function writeCsv(map, outPath, header = ['key', 'value']) {
  const lines = [header.join(',')]
  Object.keys(map)
    .sort()
    .forEach((k) => {
      lines.push(`${csvEscape(k)},${csvEscape(map[k])}`)
    })
  const csv = lines.join('\n')
  fs.writeFileSync(outPath, csv, 'utf8')
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function main() {
  const [inPath, outPath] = process.argv.slice(2)
  if (!inPath || !outPath) {
    console.error(
      'Usage: node scripts/export-locale-csv.mjs <input.json> <output.csv>'
    )
    process.exit(1)
  }
  const json = readJson(inPath)
  const flat = flattenObject(json)
  ensureDir(outPath)
  writeCsv(flat, outPath, ['key', path.basename(inPath, path.extname(inPath))])
  console.log(`Wrote CSV: ${outPath}`)
}

main()
