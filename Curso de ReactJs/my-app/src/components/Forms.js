import {useState} from 'react'


function Forms(){
    function cadUser(e){
        e.preventDefault()
        console.log('Usuário cadastrado')
        console.log(`Usuario: '${name}' foi cadastrado com senha: '${password}'`)
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <>
            <h1>Formulário:</h1>
            <form className='form' onSubmit={cadUser}>
                <div>
                    <label htmlFor='name'> Nome: </label>
                    <input type='text'
                        id='name'
                        name='name'
                        onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='password'> Senha: </label>
                    <input type='password'
                        id='password'
                        name = 'password'
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type='submit' value ='Cadastrar'/>
                </div>
            </form>
        </>
    )
}

export default Forms