//IMAGES
import InstagramLogo from '../public/images/instagramlogo.svg'
import FacebookLogo from '../public/images/facebooklogo.svg'
import LinkedinLogo from '../public/images/linkedinlogo.svg'

//FOOTER
export default function Footer() {
  return (
    <footer>
      <div className="social-media">
        <InstagramLogo />
        <FacebookLogo />
        <LinkedinLogo />
      </div>
      <p>Que Barbada &copy;</p>
      <p>CNPJ 00.000.000/0000-00</p>
    </footer>
  )
}
