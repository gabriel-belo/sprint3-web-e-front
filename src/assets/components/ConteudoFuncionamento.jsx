import image6 from '../img/image6.png';

export default function ConteudoFuncionamento() {

    return (
        <>
            <div class="grid-container">
                <section class="funcionamento">
                    <div class="texto">
                        <h3>COMO FUNCIONA?</h3>
                        <p>  As lixeiras inteligentes são conectadas a uma rede de sensores para monitorar seu nível de enchimento. Isso permite que os serviços de limpeza sejam alertados quando a lixeira estiver cheia e precisar ser esvaziada. Dessa forma, a coleta de lixo pode ser planejada com mais eficiência, economizando tempo e recursos.</p>
                        <p>  Em resumo, utilizamos tecnologia para tornar o processo de descarte de lixo mais eficiente e higiênico, como também e reduzir o tempo e o esforço necessários para sua manutenção.</p>
                    </div>
                    <div class="imagem"><img src={image6} alt="lixeira inteligente" /></div>
                </section>
            </div>
        </>
    )
}