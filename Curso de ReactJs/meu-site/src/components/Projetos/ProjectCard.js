import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function ProjectCard({id, name, budget, category, handleRemove}){
  
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }
  return(
    <div className={styles.project_card}>
      <h4>{name}</h4>
        <p>
          <span>Orçamento: R$ {budget}</span>
        </p>
      <p className={styles.category_text}>
        <span className={`${styles[category]}`}></span>{category}
      </p>
    <div className={styles.project_card_actions}>
      <Link to={`/projects/${id}`}>
        <BsPencil/> Editar projeto
      </Link>
      <button onClick={remove}>
        <BsFillTrashFill /> Remover projeto
      </button>
    </div>
    </div>
  )
}

export default ProjectCard
