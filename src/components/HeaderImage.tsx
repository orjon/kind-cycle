import '../styles/components/HeaderImage.scss'

type HeaderImageProps = {
  filename: string
  path: string
  altText: string
}

const HeaderImage = ({ filename, path, altText = '' }: HeaderImageProps) => {
  return (
    <div className='HeaderImage'>
      <div className='image-container'>
        <img src={`${path}${filename}.webp`} alt={altText} />
      </div>
    </div>
  )
}

export default HeaderImage
