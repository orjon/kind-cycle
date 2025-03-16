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
    import(`${path}${filename}.webp`)
      .then((image) => {
        setImage(image.default)
      })
      .catch((err) =>
        console.error(`Failed to load image for ${filename}:`, err)
      )
  }, [filename])

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
