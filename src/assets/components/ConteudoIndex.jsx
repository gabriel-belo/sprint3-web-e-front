import { Link } from 'react-router-dom'
import Button from './Botao';

export default function ConteudoIndex() {

    return (
        <>
            <div class="grid-container">
                <section class="home">
                    <div class="texto-home">
                        <h4>REDUZIR REUTILIZAR</h4>
                        <h1>RECICLAR</h1>
                        <p> Bem-vindo ao nosso site de reciclagem inteligente! Aqui você encontrará informações valiosas sobre como podemos cuidar do nosso planeta através da reciclagem.</p>
                        <Button><Link to="/sobre">Saiba Mais</Link></Button>
                    </div>
                    <div class="imagem"></div>
                </section>
            </div>
        </>
    )
}