import {useEffect, useState} from 'react'

import Input from '../Formulario/Input'
import Select from '../Formulario/Select'
import Submit from '../Formulario/Submit'
import styles from './Formulario.module.css'

function Formulario({btnText}){

  const [cat, setCat] = useState([])
  
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

  return(
    <form className={styles.form}>
      <div>
        <Input
        type='text'
        text='Nome do Projeto'
        name='name'
        placeholder='Insira o nome do Projeto'
        />
      </div>
      <div>
      <Input
        type='number'
        text='Orçamento'
        name='budget'
        placeholder='Insira o Orçamento'
        />
      </div>
      <div>
        <Select 
          name='category_id'
          text='Selecione uma categoria:'
          options={cat}
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