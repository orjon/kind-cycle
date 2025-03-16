import { useEffect, useState } from 'react'

import '../styles/components/HeaderImage.scss'

type HeaderImageProps = {
  filename: string
  path: string
  altText: string
}

const HeaderImage = ({ filename, path, altText = '' }: HeaderImageProps) => {
  const [imageSrc, setImageSrc] = useState('')

  useEffect(() => {
    // Using URL constructor with import.meta.url (Vite specific)
    try {
      const imageUrl = new URL(`${path}${filename}.webp`, import.meta.url).href
      setImageSrc(imageUrl)
    } catch (err) {
      console.error('Failed to load image:', err)
    }
  }, [filename, path])

  return imageSrc ? <img src={imageSrc} alt={altText} /> : <div>Loading...</div>
}

export default HeaderImage
