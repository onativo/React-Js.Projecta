import styles from './Frases.module.css'

function Frases(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente com frase ;)</p>
        </div>
    );
}

export default Frases