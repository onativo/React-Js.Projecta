import styles from './ProjetoCadastrado.module.css'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import ProjectCard from '../Projetos/ProjectCard'
import Loading from '../layouts/Loading'
import Container from '../layouts/Container'
import Formulario from '../Projetos/Formulario'
import Message from '../layouts/Message'



function ProjetoCadastrado(){

  const {id} = useParams()
  console.log(id)
  
  const [projeto, setProjeto] = useState([])

  const [showProjetoForm, setShowProjetoForm] = useState(false)

  const [message, setMessage] = useState()
  const [type, setType] = useState()

  useEffect (() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`,{
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
        setProjeto(data)
      })
      .catch((err) => console.log(err))
    }, 500)
  },[id])

  function editPost(projeto){
    //budget validation
    if(projeto.budget < projeto.custo){
      setMessage('Orçamento não pode ser menor que o custo do projeto')
      setType('err')
      return false
    }
    fetch(`http://localhost:5000/projects/${projeto.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projeto),
    }).then((resp) => resp.json())
    .then((data) => {
      setProjeto(data)
      setShowProjetoForm(false)
      setMessage('Projeto atulizado!')
      setType('success')
      //mensagem
    })
      .catch()
  }


  function toggleProjetoForm(){
    setShowProjetoForm(!showProjetoForm)
  }
  return(
    <>
      {projeto.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} msg = {message}/>}
            <div className={styles.details_container}>
              <h1>Projeto: {projeto.name} </h1>
              <button className={styles.btn} onClick={toggleProjetoForm}>
                {!showProjetoForm ? 'Editar' : 'Fechar'}
                </button>
                {!showProjetoForm ? (
                  <div className={styles.project_info}>
                    <p>
                      <span> Categoria: </span>{projeto.category.name}
                    </p>
                    <p>
                      <span> Budget: </span>R$ {projeto.budget}
                    </p>
                    <p>
                      <span> Total Utilizado: </span>R$ {projeto.custo}
                    </p>
                  </div>
                ) : (
                  <div className={styles.project_info}>
                    <Formulario handleSubmit={editPost} btnText={'Concluido'} projectData={projeto}/>
                  </div>)} 
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default ProjetoCadastrado