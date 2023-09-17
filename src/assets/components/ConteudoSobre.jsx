import image5 from '../img/image5.png';

export default function ConteudoSobre() {

    return (
        <>
            <div class="grid-container">
                <section class="sobre">
                    <div class="texto">
                        <h3>SOBRE NÓS</h3>
                        <p> A Longest Wave Tech é a mais nova empresa de tecnologia que se preocupa com o que será do mundo amanhã. Nossas soluções se baseiam em tornar nosso meio um lugar melhor de se viver.</p>
                        <p> Sendo assim, temos como objetivo implementar um sistema de coleta seletiva inteligente que seja efetivo, ou seja, que contribua para a redução do tempo de coleta e para aumento da
                            conscientização sobre a reciclagem na cidade de São Paulo.</p>
                    </div>
                    <div class="imagem">
                        <img src={image5} alt="" />
                    </div>
                </section>
            </div>
        </>
    )
}