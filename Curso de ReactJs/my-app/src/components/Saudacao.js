function Saudacao({nome}){
  function geraSaudacao(algumNome){
    return `Olá, ${algumNome}! Tudo bem?`
  }

  return(
    <>
      {nome && <p>{geraSaudacao(nome)}</p>}
    </>
  )
}

export default Saudacao