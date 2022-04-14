import Formulario from '../Projetos/Formulario'
import styles from './NovoProjeto.module.css'

function NovoProjeto({}){
  return(
    <div className={styles.novo_projeto}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para adicionar serviços.</p>
      <Formulario btnText='Criar Projeto'/>
    </div>
  )
}

export default NovoProjeto