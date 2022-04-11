import {useState} from 'react'

function Condicional(){
  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()


  function enviarEmail(e){
    e.preventDefault()
    setUserEmail(email)
    console.log(userEmail)
  }

  function limparEmail(e){
    setUserEmail('')
  }
  
  return(
    <div>
      <h2>Cadastre seu e-mail</h2>
      <form>
        <input type='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)}/>
      </form>
      <button type ='submit' onClick={enviarEmail}>Enviar</button>
      {userEmail && (
        <div>
          <p>O email do usuário é: {userEmail}</p>
          <button onClick={limparEmail}>Limpar e-mail</button>
        </div>
      )}
      {!userEmail && (
        <div>
          <p>Preencha seu email: {userEmail}</p>
        </div>
      )}
    </div>
  )
}

export default Condicional