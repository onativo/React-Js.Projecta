import Formulario from '../Projetos/Formulario'
import styles from './NovoProjeto.module.css'
import {useNavigate} from 'react-router-dom'

function NovoProjeto({}){

  const navigate = useNavigate()

  function createPost(project){
    //inicia custos e serviços
    project.custo = 0
    project.servicos = []

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        'Content-type': 'application/json;charset=utf-8'},
      body: JSON.stringify(project)
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      navigate('/projects', {state: {message: 'Projeto criado com sucesso!!'}})
    })
    .catch(err => console.log(err))
  }

  return(
    <div className={styles.novo_projeto}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para adicionar serviços.</p>
      <Formulario handleSubmit={createPost} btnText='Criar Projeto'/>
    </div>
  )
}

export default NovoProjeto