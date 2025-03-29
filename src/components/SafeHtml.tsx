import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/SafeHtml.scss'

interface SafeHtmlProps {
  html: string
  className?: string
}

export const SafeHtml: React.FC<SafeHtmlProps> = ({ html, className }) => {
  // Create a temporary div to parse the HTML
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = html

  // Convert the HTML to React elements
  const convertToReact = (node: Node): React.ReactNode => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element
      const children = Array.from(element.childNodes).map(convertToReact)

      // Handle specific elements
      if (element.tagName === 'A') {
        const href = element.getAttribute('href') || ''
        return (
          <Link to={href} className={element.className}>
            {children}
          </Link>
        )
      }

      if (element.tagName === 'SPAN') {
        return <span className={element.className}>{children}</span>
      }

      if (element.tagName === 'BR') {
        return <br />
      }

      // Default case for other elements
      return React.createElement(
        element.tagName.toLowerCase(),
        { className: element.className },
        children
      )
    }

    return null
  }

  return (
    <div className={`safe-html ${className || ''}`}>
      {Array.from(tempDiv.childNodes).map((node, index) => (
        <React.Fragment key={index}>{convertToReact(node)}</React.Fragment>
      ))}
    </div>
  )
}
