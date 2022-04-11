import Button from "./eventos/Button"

function Evento({numero}){
    function meuEvento(){
        console.log(`Primeiro evento`)
    }
    function segundoEvento() {
        console.log('Segundo evento')
    }
    return(
        <>
            <p>Clique para ativar</p>
            <Button event={meuEvento} text='Ativar'/>
            <br></br>
            <Button event={segundoEvento} text='Ativar'/>
        </>
    )
}

export default Evento