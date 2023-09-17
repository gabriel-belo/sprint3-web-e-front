import image2 from '../img/image2.png';

export default function ConteudoContato() {

    return (
        <>
            <div class="grid-container">
                <section class="contato">
                    <div class="texto">
                        <h3>FALE CONOSCO!</h3>
                        <p>Se quer conversar com nosso atendimento para tirar dúvidas sobre o conteúdo, fale com:</p>
                        <p>Atendimento Longest Wave Tech: </p>
                        <p>9XXXX-XXXX</p>
                    </div>
                    <div class="imagem">
                        <img src={image2} alt="" />
                    </div>
                </section>
            </div>
        </>
    )
}