import styles from './ProjetoCadastrado.module.css'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import ProjectCard from '../Projetos/ProjectCard'
import Loading from '../layouts/Loading'
import Container from '../layouts/Container'
import Formulario from '../Projetos/Formulario'
import Message from '../layouts/Message'
import ServiceForm from '../Servicos/ServiceForm'
import {parse, v4 as uuidv4} from 'uuid'
import ServiceCard from '../Servicos/ServiceCard'

function ProjetoCadastrado(){

  const {id} = useParams()
  console.log(id)
  
  const [projeto, setProjeto] = useState([])
  const [showProjetoForm, setShowProjetoForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [message, setMessage] = useState()
  const [type, setType] = useState()
  const [servicos, setServicos] = useState([])

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
        setServicos(data.servicos)
      })
      .catch((err) => console.log(err))
    }, 500)
  },[id])

  function editPost(projeto){
    setMessage('')
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
  function toggleServiceForm(){
    setShowServiceForm(!showServiceForm)
  }

  function removeService(id, custo){
    setMessage('')

    const servicesUpdated = projeto.servicos.filter(
      (service) => service.id !== id
    )

    const projectUpdated = projeto

    projectUpdated.servicos = servicesUpdated
    projectUpdated.custo = parseFloat(projectUpdated.custo) - parseFloat(custo)

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(projectUpdated)
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProjeto(projectUpdated)
      setServicos(servicesUpdated)
      setMessage('Serviço removido com sucesso')
    })
    .catch((err) => console.log(err)) 
  }

  function createService(projeto){ 
    setMessage('')
    const lastService = projeto.servicos[projeto.servicos.length -1]
    lastService.id = uuidv4()
    const lastServiceCusto = lastService.custo
    const newCusto = parseFloat(projeto.custo) + parseFloat(lastServiceCusto)

    if(newCusto > parseFloat(projeto.budget)) {
    setMessage('Passou do orçamento.')
    setType('error')
    projeto.servicos.pop() 
    return false
    }
    
    //atualiza o custo do projeto
    projeto.custo = newCusto

    //atualiza o projeto
    fetch(`http://localhost:5000/projects/${projeto.id}`, {
    method: "PATCH",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(projeto)
    })
      .then(
        ((resp) => resp.json())
      )
      .then((data) => {
        setShowServiceForm(false)
      })
      .catch(err => console.log(err))
  }

  return(
    <>
      {projeto.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} msg = {message}/>}
            <div className={styles.details_container}>
              <h1>{projeto.name} </h1>
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
            <div className={styles.service_form_container}>
              <h2>Adicione um serviço:</h2>
              <button className={styles.btn} onClick={toggleServiceForm}>
                  {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
              </button>
              <div className={styles.project_info}>
                {showServiceForm && (
                  <ServiceForm 
                    handleSubmit={createService}
                    textBtn='Adicionar Serviço'
                    projectData={projeto}
                  />
                )}
              </div>
            </div>
              <h2>Serviços</h2>
              <Container customClass="start">
                {servicos.length > 0 && servicos.map((service) => (
                  <ServiceCard
                    id = {service.id}
                    name = {service.name}
                    custo = {service.custo}
                    description = {service.description}
                    key = {servicos.id}
                    handleRemove = {removeService}
                  />
                ))
                  
                }{servicos.length == 0 && <p>Não há serviços cadastrados</p>}
              </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default ProjetoCadastrado