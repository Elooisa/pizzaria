import logo from './assets/react.svg'

const Inicio = () => {

    return (
        <>
             <h2>Página de Inicio</h2>
             <p>Aula de reactJS</p>
             <input type="text" id="texto"/>
             <input type="button" id="botao"
                value="CLIQUE AQUI"
                onClick={()=>alert('Olá Mundo')}
                />
        </>
    )
}

export default Inicio