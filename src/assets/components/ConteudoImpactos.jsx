import image4 from '../img/image4.png';
import image7 from '../img/image7.png';

export default function ConteudoImpactos() {

    return (
        <>
            <div class="grid-container">
                <section class="impactos">
                    <div class="row">
                        <div class="texto">
                            <h3>IMPACTOS</h3>
                            <p>O descarte inadequado de resíduos tem um impacto negativo significativo no meio ambiente, na saúde pública e na economia. </p>
                            <p>A poluição do solo, da água e do ar, o aumento do volume de lixo nos aterros sanitários, a contaminação de alimentos e a proliferação de doenças são apenas alguns exemplos dos problemas causados pelo descarte inadequado de resíduos.</p>
                        </div>
                        <div class="imagem">
                            <img src={image7} alt="poluição" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="imagem">
                            <img src={image4} alt="ilustração cidade sustentável" />
                        </div>
                        <div class="texto">
                            <p>Para combater tais problemas, nossa coleta seletiva inteligente busca promover fatores como: a redução da quantidade de lixo enviada para os aterros sanitários, a diminuição da poluição do meio ambiente e da emissão de gases, a geração de empregos na área de reciclagem, economia de recursos naturais e maior praticidade.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}