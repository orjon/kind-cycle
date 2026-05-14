import { trackEventGoogle } from '../utils/analytics-google'
import { ClickEvent } from '../types'
import '../styles/components/QRCode.scss'

type QRCodeProps = {
  filename: string
  path: string
  link: string
  altText: string
}

const QRCode = ({ filename, path, link, altText }: QRCodeProps) => {
  const trackClick = () => {
    trackEventGoogle(ClickEvent.qrCode, {
      qr_code: filename,
      on_page: window.location.href
    })
  }

  return (
    <div className='QRCode'>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        onClick={trackClick}
      >
        <div className='image-container'>
          <img src={`${path}${filename}.webp`} alt={altText} />
        </div>
      </a>
    </div>
  )
}

export default QRCode
