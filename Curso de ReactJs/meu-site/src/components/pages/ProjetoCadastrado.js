import styles from './ProjetoCadastrado.module.css'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import ProjectCard from '../Projetos/ProjectCard'

function ProjetoCadastrado(){

  const {id} = useParams()
  console.log(id)
  
  const [projeto, setProjeto] = useState([])

  useEffect (() => {
    fetch(`http://localhost:5000/projects/${id}`,{
      method: "GET",
      headers: {'Content-Type': 'application/json',
    },
      })
      .then((resp) => resp.json())
      .then((data) => {
        setProjeto(data)
      })
      .catch((err) => console.log(err))
  },id)

  return(
    <p>{projeto.name}</p>
  )
}

export default ProjetoCadastrado