import Item from "./Item";

function List (){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Bagucci" ano_lancamento={2012}/>
                <Item marca="Cacucci" ano_lancamento={2015}/>
                <Item />
            </ul>
        </>
    );
}

export default List