import {useEffect, useState} from 'react'

import Input from '../Formulario/Input'
import Select from '../Formulario/Select'
import Submit from '../Formulario/Submit'
import styles from './Formulario.module.css'

function Formulario({handleSubmit, btnText, projectData}){

  const [cat, setCat] = useState([])
  const [project, setProject] = useState(projectData || {})
  
  useEffect(() => {
    fetch("http://localhost:5000/cat",{
      methood: "GET",
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => (resp.json()))
      .then((data) =>{
        setCat(data)
      })
      .catch(err => console.log(err))
  }, [])

  const submit = (e =>{
    e.preventDefault()
    handleSubmit(project)
    //console.log(project)
    }
  )
  
  function handleChange(e){
    setProject({...project, [e.target.name]:e.target.value})
    console.log(project)
  }

  function handleCategory(e){
    setProject({...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
    }
  })
  }
  return(
    <form onSubmit={submit} className={styles.form}>
      <div>
        <Input
        type='text'
        text='Nome do Projeto'
        name='name'
        placeholder='Insira o nome do Projeto'
        handleOnChange={handleChange}
        value={project.name ? project.name: '' }
        />
      </div>
      <div>
      <Input
        type='number'
        text='Orçamento'
        name='budget'
        placeholder='Insira o Orçamento'
        handleOnChange={handleChange}
        value={project.budget ? project.budget: '' }
        />
      </div>
      <div>
        <Select 
          name='category_id'
          text='Selecione:'
          options={cat}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id: ''}
        />
      </div>
      <div>
        <Submit
          text={btnText}
        />
      </div>
    </form>
  )
}

export default Formulario