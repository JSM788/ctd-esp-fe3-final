import x from "./styles/Footer.module.css"
import { useDentistStates } from "./utils/global.context";
const Footer = () => {
  const { state } = useDentistStates();

  return (
    <footer className={`${x.footer} ${state.theme === 'dark' ? 'dark-footer' : ''}`}>
      <div className={x.logo}>
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt="DH-logo" />
      </div>
      <div className={x.redes}>
        <img src="../../public/images/ico-facebook.png" alt="facebook" />
        <img src="../../public/images/ico-instagram.png" alt="instagram" />
        <img src="../../public/images/ico-whatsapp.png" alt="whatsapp" />
        <img src="../../public/images/ico-tiktok.png" alt="tiktok" />
      </div>
    </footer>
  )
}

export default Footer
