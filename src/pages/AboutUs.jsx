import React, { Component } from "react";

export default function AboutUs() {
    return (
        <div>
            <h1 className='display-6 text-center pb-5'>Loja de Sapatos Online da Calçados Laroche</h1>
            <div className="d-flex container " >
                <div className="col">
                    <img src="https://img.irroba.com.br/lojalaro/catalog/assessoria/banners/2022/01-jan/02-seg/laroche.jpg" className="" alt="..." />
                </div>
                <div className="col about-p pt-1 text-justify">
                    <p className="">
                        Desde sua fundação em 1996, a Laroche mantém em Franca, interior do estado de São Paulo, uma estrutura
                        estabelecida para ser referência em sapatos masculinos e calçar o homem contemporâneo em todos os estilos.
                    </p>
                    <p className="">
                        qui na Laroche você encontra diversas opções de sapatos masculinos em couro com os melhores preços e as melhores condições.
                        O <b>sapatenis masculino </b> é um ótimo exemplo de calçado confortável e perfeito para qualquer ocasião.
                    </p>
                    <p>
                        Com transparência e trabalho de equipe, a gestão empresarial da Laroche está focada na melhoria contínua e no aprimoramento
                        do processo produtivo, visando à modernização do design em todas as linhas de produtos. Uma empresa inovadora, competitiva e
                        consciente da responsabilidade de se manter em constante evolução para atender o mercado de moda com toda excelência.
                    </p>
                </div>
            </div>
            <div className="container  text-justify ">
                <h3 className="pt-2 pb-2">Sapatos da Moda</h3>
                <p className="about-p">
                    Outra linha de grande destaque de nossa coleção é a linha de <b>botas masculinas</b> que são muito confortáveis e macias. Nesta linha contamos com produtos em várias cores e em vários modelos, algumas linhas apresentam estilos mais rock enquanto outros apresentam um estilo mais clássico e conservador. O importante é frisar que todos eles contam com uma palmilha super confortável e o couro macio que só a Laroche pode selecionar para você.
                </p>
                <p className="about-p">
                    Não deixe de conferir a linha de <b> sapato mocassim masculino</b> e conhecer cada um dos modelos da nova coleção. Temos mocassim, dockside e drive
                    com ótimos preços e entrega rápida para todo Brasil.
                </p>
                <p className="about-p">
                    Não podemos nos esquecer do <b>sapato social masculino</b>  que é um dos produtos mais famosos da cidade de Franca (conhecida como a capital do calçado masculino).
                    Desde nossa fundação produzimos o clássico sapato social em couro com linhas modernas e sendo renovados a cada nova coleção.
                </p>
            </div>
            <div className="container  text-justify ">
                <h3 className="pt-2 pb-2">Venha comprar sapatos online!</h3>
                <p className="about-p">
                    Então agora você já sabe que na hora de comprar sapatos online é só procurar pela Calçados Laroche! Indique para seus amigos e familiares, será um enorme prazer lhe atender.
                </p>

            </div>
        </div>
    )

}