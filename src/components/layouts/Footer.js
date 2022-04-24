import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer(){
  return(
    (<footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li><a href='https://www.facebook.com/1nativo' target='_blank'><FaFacebook/></a></li>
        <li><a href='https://www.linkedin.com/in/onativo/' target='_blank'><FaLinkedin/></a></li>
        <li><a href='https://www.instagram.com/onativo/' target='_blank'><FaInstagram/></a></li>
      </ul>
      <p className={styles.copy_right}><span>Projecta 2022</span> &copy;</p>
      <p className={styles.p}>Developed by M. Vinicios Nativo</p>
    </footer>)
  )
}

export default Footer