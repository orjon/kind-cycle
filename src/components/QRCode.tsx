import '../styles/components/QRCode.scss'

type QRCodeProps = {
  filename: string
  path: string
  link: string
  altText: string
}

const QRCode = ({ filename, path, link, altText }: QRCodeProps) => {
  return (
    <div className='QRCode'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <div className='image-container'>
          <img src={`${path}${filename}.webp`} alt={altText} />
        </div>
      </a>
    </div>
  )
}

export default QRCode
