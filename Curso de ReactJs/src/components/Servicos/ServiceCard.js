import { BsFillTrashFill } from 'react-icons/bs'
import styles from '../Projetos/ProjectCard.module.css'

function ServiceCard({id, name, custo, description, handleRemove}){

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id, custo)
  }


  
  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Custo total: </span>R$ {custo}
      </p>
      <p>
        <span>Descrição:</span> {description}
      </p>
      <div className={styles.project_card_actions}>
        <button className={styles.btn} onClick={remove}>
          <BsFillTrashFill/>Excluir
        </button>
      </div>
    </div>
  )
}

export default ServiceCard