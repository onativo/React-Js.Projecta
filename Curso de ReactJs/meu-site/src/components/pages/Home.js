import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton'

function Home(){
  return(
    <section className={styles.home_container}>
      <h1>Bem vindo à <span>Calcualdora de Custos</span></h1>
      <p>Começe gerenciando seus projetos com nossa ajuda!</p>
      <LinkButton to='/NovoProjeto' text='Criar projeto'/>
      <img src={savings} alt='Custos'/>
    </section>
  )
}

export default Home