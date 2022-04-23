import { useState } from 'react'
import Input from '../Formulario/Input'
import Submit from '../Formulario/Submit'
import styles from '../Projetos/Formulario.module.css'

function ServiceForm ({handleSubmit, textBtn, projectData}) {
  
  const [service, setService] = useState()

  function submit(e){
    e.preventDefault()
    projectData.servicos.push(service)
    handleSubmit(projectData)
  }
  
  function handleChange(e){
    setService({ ...service, [e.target.name]: e.target.value})
  }

  return(
    <form onSubmit={submit} className={styles.form}>
      <Input
      type='text'
      text='Nome do serviço'
      name='name'
      placeholder='Insira o nome do serviço'
      handleOnChange={handleChange}
      />
      <Input
      type='number'
      text='Custo do serviço'
      name='custo'
      placeholder='Insira o custo do serviço'
      handleOnChange={handleChange}
      />
      <Input
      type='text'
      text='Descrição do serviço'
      name='description'
      placeholder='Detalhes do serviço'
      handleOnChange={handleChange}
      />
      <div>
        <Submit style="margin-top: 5px;" text={textBtn}/>
      </div>
    </form>
  )
}

export default ServiceForm