
import { Link } from 'react-router-dom'

export default function MenuNav(){
    
    return(
        <>
            <div class="grid-container">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/contato">Fale Conosco</Link></li>
                        <li><Link to="/impactos">Impactos</Link></li>
                        <li><Link to="/funcionamento">Como Funciona</Link></li>
                        <li><Link to="/coleta">Pontos de Coleta</Link></li>
                        <li><Link to="/login">Dados</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}