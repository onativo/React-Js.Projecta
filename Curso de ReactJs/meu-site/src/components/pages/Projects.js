import Message from "../layouts/Message"
import { useLocation } from "react-router-dom"
import styles from './Projects.module.css'
import Container from '../layouts/Container.js'
import LinkButton from "../layouts/LinkButton"
import ProjectCard from "../Projetos/ProjectCard"
import { useState, useEffect } from "react"
import Loading from "../layouts/Loading"

function Projects(){

  const [removeLoading, setRemoveLoading] = useState(false)

  const [projects, setProjects] = useState([])

  const [projectMessage, setProjectMessage] = useState()

  const location = useLocation()
  let message = ''
  if(location.state){
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
          setProjects(data)
          setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    },500)
  }, [])
  
  function removerProjeto(id){
    return (
      fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((resp) => resp.json())
    .then(() => {
      setProjects(projects.filter((project) => project.id !== id))
      setProjectMessage('Projeto removido com sucesso!')
    })
    .catch((err) => console.log(err))
    )
  }

  return(
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to='/NovoProjeto' text='Criar projeto'/>
      </div>
      {message && <Message type='success' msg={message}/>}
      {projectMessage && <Message type='success' msg={projectMessage}/>}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              budget={project.budget}
              name={project.name}
              id={project.id}
              category={project?.category?.name}
              key={project.id}
              handleRemove={removerProjeto}
            />
          ))}
          {!removeLoading && <Loading/>}
          {removeLoading && projects.length === 0 && (
            <p>Sem projetos cadastrados</p>
          )}
      </Container>
    </div>
  )
}

export default Projects