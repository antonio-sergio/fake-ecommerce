import React from "react";

export default function Footer() {
    return (
        <nav className="navbar navbar-expand-lg bg-light  d-flex flex-column ">
            <div className="w-100  news ">
                <div className="pb-3 pt-3  d-flex justify-content-center ">
                    <form className="d-flex text-light align-items-center " role="search">
                        <span className="text-light w-100 fs-3"><i className="bi bi-envelope-fill pe-2"></i>RECEBA NOVIDADES</span>
                        <input className="ms-2 border-0 bg-light p-2" type="search" placeholder="Digite seu e-mail" aria-label="Search" />
                        <button className="p-2 bg-dark text-light border border-0" type="submit">Enviar</button>
                    </form>
                </div>


                <div className="form-check pb-4 d-flex d-flex justify-content-center">
                    <span className="">Aceito Receber E-mails e Novidades</span>
                    <input className="form-check-input ms-1 " type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" >
                    </label>
                </div>
            </div>
            <div className="d-flex flex-row w-100 container justify-content-start align-items-start footer-links pt-4">
                <div className="list-group border-end pe-5">
                    <a href="/" className="list-group-item list-group-item-action border border-0 fw-bold pb-3">INSTITUCIONAL</a>
                    <a href="/" className="list-group-item list-group-item-action border-0">Sobre a Calçados Laroche</a>
                    <a href="/" className="list-group-item list-group-item-action border-0">Regras da Loja Online</a>
                    <a href="/" className="list-group-item list-group-item-action border-0">Politica de Trocas e Devoluções</a>
                    <a href="/" className="list-group-item list-group-item-action border-0">Segurança e Privacidade</a>
                    <a href="/" className="list-group-item list-group-item-action border-0">Prazo de Entrega</a>
                    <a href="/" className="list-group-item list-group-item-action border-0">Como Comprar</a>
                    <a href="/" className="list-group-item list-group-item-action border-0">Programa de Afiliados Laroche</a>
                    <a href="/" className="list-group-item list-group-item-action border-0">Área do Afiliado</a>
                </div>

                <div className="list-group border-end pe-5 ps-3">
                    <a href="/" className="list-group-item list-group-item-action border border-0 fw-bold pb-3">MINHA CONTA</a>
                    <a href="/" className="list-group-item list-group-item-action border-0">Entre em Contato</a>
                    <a href="/" className="list-group-item list-group-item-action border-0">Meus Dados</a>
                    <a href="/" className="list-group-item list-group-item-action border-0">Meus Pedidos</a>
                    <a href="/" className="list-group-item list-group-item-action border-0">Rastrear Encomenda</a>
                    <a href="/" className="list-group-item list-group-item-action border-0">Mapa do Site</a>
                </div>

                <div className="list-group border-end pe-5 contact ps-3">
                    <a href="/" className="list-group-item list-group-item-action border border-0 fw-bold pb-3">FALE CONOSCO</a>
                    <a href="/" className="list-group-item list-group-item-action border-0"><i className="bi bi-envelope-fill pe-2"></i>help@lojalaroche.com.br</a>
                    <a href="/" className="list-group-item list-group-item-action border-0 d-flex flex-col"><span><i className="bi bi-file-spreadsheet-fill pe-2"></i></span> <span>Rua Vol. Leônidas Morgan De Aguiar, 300 -<br/> Galpão II <br/>Distrito Industrial - Franca - SP <br/>CEP: 14406067</span></a>
                    <a href="/" className="list-group-item list-group-item-action border-0"><i className="bi bi-telephone-fill pe-2"></i>Envie sua mensagem!</a>
                    <a href="/" className="list-group-item list-group-item-action border-0"><i className="bi bi-whatsapp pe-2"></i>(16) 99319-1201</a>
                    <a href="/" className="list-group-item list-group-item-action border-0 ps-4 pt-2"><b>Horário de Atendimento:</b> Dias úteis das 8 às<br/>17hs. Sábados das 9 às 14hs.</a>
                </div>

                <div className="list-group ps-3">
                    <a href="/" className="list-group-item list-group-item-action border border-0 fw-bold pb-3">REDES SOCIAIS</a>
                    <div className="d-flex justify-content-between social-media">
                        <a href="/"><i className="bi bi-facebook"></i></a>
                        <a href="/"><i className="bi bi-twitter"></i></a>
                        <a href="/"><i className="bi bi-instagram"></i></a>
                        <a href="/"><i className="bi bi-youtube"></i></a>
                        <a href="/"><i className="bi bi-pinterest"></i></a>
                    </div>
                </div>
            </div>

        </nav>
    )
}