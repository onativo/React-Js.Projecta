import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer(){
  return(
    (<footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li><FaFacebook/></li>
        <li><FaLinkedin/></li>
        <li><FaInstagram/></li>
      </ul>
      <p className={styles.copy_right}><span>Calculadora de Custos 2022</span> &copy;</p>
      <p className={styles.p}>Developed by M. Vinicios Nativo</p>
    </footer>)
  )
}

export default Footer