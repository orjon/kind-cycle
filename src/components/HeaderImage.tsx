import { useEffect, useState } from 'react'

import '../styles/components/HeaderImage.scss'

type HeaderImageProps = {
  filename: string
  path: string
  altText: string
}

const HeaderImage = ({ filename, path, altText = '' }: HeaderImageProps) => {
  const [image, setImage] = useState<string>('')

  useEffect(() => {
    const imagePath = `../assets/${path}${filename}.webp`

    try {
      import(/* @vite-ignore */ imagePath)
        .then((module) => {
          setImage(module.default)
        })
        .catch((err) => {
          console.error(`Failed to load image: ${imagePath}`, err)
        })
    } catch (err) {
      console.error(`Import error for: ${imagePath}`, err)
    }
  }, [filename, path])

  return (
    <div className='HeaderImage'>
      {image && (
        <div className='image-container'>
          <img src={image} alt={altText} />
        </div>
      )}
    </div>
  )
}

export default HeaderImage
