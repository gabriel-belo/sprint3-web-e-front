import logo from '../img/lwtlogo_1.png';

export default function Cabecalho() {

    return (
        <>
            <div class="grid-container">
                <header>
                    <img id="logo" src={logo} alt="logo Longest Wave Tech"></img>
                    <h1>Longest Wave Tech</h1>
                </header>
            </div>
        </>
    )
}