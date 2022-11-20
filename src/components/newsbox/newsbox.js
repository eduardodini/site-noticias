import React from 'react';

const NewsBox = () => {
    return(
        <div
            style={{
                border: '1px solid red',
                margin: 10,
                padding: 10,
                display: 'flex-box',
                backgroundColor:'green'
            }}
        >

            <div 
                style={{
                    margin: 10,
                    backgroundColor:'red'
                }}
                >
                <h2>'Guerreiros da oração' provocam tsunami bolsonarista nas igrejas evangélicas</h2>
            </div>

            <div 
                style={{
                    margin: 10,
                    backgroundColor:'blue'
                }}
                >
                <p>"Como guerreiros da oração", alertava a apóstola Valnice Milhomens, fiéis não poderiam "fechar os olhos" para o que aconteceria neste domingo (2) de ir às urnas escolher o novo presidente da nação. "Temos que ativar todas as armas espirituais em direção a estas eleições." 
                Ela está com o cabelo armado por escova e uma camisa com as cores do Brasil. Sobre o coração repousa o miolo azul da bandeira e a diretriz: "Ore pelo Brasil".
                A onda verde-amarela que coloriu cultos neste fim de semana é um termômetro para a força de Jair Bolsonaro (PL) nas igrejas evangélicas. Trajes com a cor da flâmula nacional, tanto em pastores quanto nos fiéis, eram a declaração de voto que bastava. 
                Nas redes sociais, sem as amarras de uma legislação eleitoral que proíbe o uso do púlpito para defender candidatos, líderes e influencers evangélicos abraçaram o bolsonarismo sem timidez.</p>
            </div>
</div>
    )
}

export default NewsBox;