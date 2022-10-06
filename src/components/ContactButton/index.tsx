import WhatsappIcon from '/public/images/whatsapp-icon-mobile.svg'

export default function ContactButton() {
  return (
    <a
      href='https://wa.me/5547997536595'
      target='_blank'
      className='whatsappbutton'
      rel='noreferrer'
    >
      <WhatsappIcon />
    </a>
  )
}
