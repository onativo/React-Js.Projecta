import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
  return(
  <footer>
    <ul className={styles.social_list}>
      <li className={styles.social_list.li}>
        <FaFacebook />
      </li>
      <li className={styles.social_list.li}>
        <FaInstagram />
      </li>
      <li className={styles.social_list.li}>
        <FaTwitter />
      </li>
    </ul>
    <p className={styles.p}>Nossas redes sociais</p>
  </footer>
  
  )

}

export default Footer