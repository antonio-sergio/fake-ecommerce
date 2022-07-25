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
            <div className="d-flex flex-row w-100 container justify-content-between align-items-start footer-links pt-4">
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
                    <a href="/" className="list-group-item list-group-item-action border-0 d-flex flex-col"><span><i className="bi bi-file-spreadsheet-fill pe-2"></i></span> <span>Rua Vol. Leônidas Morgan De Aguiar, 300 -<br /> Galpão II <br />Distrito Industrial - Franca - SP <br />CEP: 14406067</span></a>
                    <a href="/" className="list-group-item list-group-item-action border-0"><i className="bi bi-telephone-fill pe-2"></i>Envie sua mensagem!</a>
                    <a href="/" className="list-group-item list-group-item-action border-0"><i className="bi bi-whatsapp pe-2"></i>(16) 99319-1201</a>
                    <a href="/" className="list-group-item list-group-item-action border-0 ps-4 pt-2"><b>Horário de Atendimento:</b> Dias úteis das 8 às<br />17hs. Sábados das 9 às 14hs.</a>
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

            <div className="d-flex  mt-5 justify-content-between container align-items-start">
                <div className="list-group ">
                    <span className="pb-3">Formas de Pagamento</span>
                    <img src="https://img.irroba.com.br/filters:format(webp):fill(transparent):quality(95)/lojalaro/catalog/assessoria/informacoes/new-payment-method-foot.png" alt="bandeiras dos metódos de pagamentos aceito pela loja" />
                </div>
                <div className="list-group footer-img google-safe-browsing">
                    <span className="pb-3">Site Seguro - Compre com Segurança</span>
                    <img src="https://cdn.irroba.com.br/static/catalog/image/footer_seals/google_safe_browsing_foot.png" alt="logo do google safe browsing" />
                </div>
                <div className="list-group footer-img">
                    <span className="pb-3">Entrega</span>
                    <img src="https://cdn.irroba.com.br/static/catalog/image/footer_seals/correios_foot.png" alt="logo do correios" />
                </div>
            </div>
            <span className="text-center security-site-ads pt-3"><b>Site seguro com criptografia SSL e Blindado contra roubo de informações e clonagem de cartão</b></span>

            <div className="d-flex container pt-5">
                <div className="list-group footer-nav-links">
                    <a href="/" className="list-group-item border-0 fw-bold">Calçados Masculinos</a>
                    <a href="/" className="list-group-item border-0">Lançamentos</a>
                    <a href="/" className="list-group-item border-0">Mule masculino</a>
                    <a href="/" className="list-group-item border-0">Slip On masculino</a>
                    <a href="/" className="list-group-item border-0">Chinelo Masculino</a>
                    <a href="/" className="list-group-item border-0">Coturno Masculino</a>
                    <a href="/" className="list-group-item border-0">Botas Masculinas</a>
                    <a href="/" className="list-group-item border-0">Bota de Couro Masculina</a>
                    <a href="/" className="list-group-item border-0">Sapatenis Masculino</a>
                    <a href="/" className="list-group-item border-0">Sapatenis Masculino Couro</a>
                    <a href="/" className="list-group-item border-0">Mocassim Masculino</a>
                </div>
                <div className="list-group footer-nav-links">
                    <a href="/" className="list-group-item border-0">Dockside Masculino</a>
                    <a href="/" className="list-group-item border-0">Mocassim Driver Masculino</a>
                    <a href="/" className="list-group-item border-0">Tênis Casual Masculino</a>
                    <a href="/" className="list-group-item border-0">Sapato Social Masculino</a>
                    <a href="/" className="list-group-item border-0">Sapato Masculino Casual</a>
                    <a href="/" className="list-group-item border-0">Sapatenis Botinha (Cano Alto)</a>
                    <a href="/" className="list-group-item border-0">Sapato Confortável Masculino</a>
                    <a href="/" className="list-group-item border-0 fw-bold">Calçados Infantis</a>
                    <a href="/" className="list-group-item border-0">Linha Baby - do 17 ao 26</a>
                    <a href="/" className="list-group-item border-0">Slip On Infantil</a>
                    <a href="/" className="list-group-item border-0">Tênis Infantil</a>
                </div>
                <div className="list-group footer-nav-links">
                    <a href="/" className="list-group-item border-0">Babuche Infantil</a>
                    <a href="/" className="list-group-item border-0">Sandália Infantil</a>
                    <a href="/" className="list-group-item border-0">Mocassim Infantil</a>
                    <a href="/" className="list-group-item border-0">Sapatenis Infantil</a>
                    <a href="/" className="list-group-item border-0">Botinhas Infantil Masculina</a>
                    <a href="/" className="list-group-item border-0">Tal pai, Tal filho</a>
                    <a href="/" className="list-group-item border-0 fw-bold">Calçados Femininos</a>
                    <a href="/" className="list-group-item border-0 fw-bold">Acessórios</a>
                    <a href="/" className="list-group-item border-0">Short</a>
                    <a href="/" className="list-group-item border-0">Meias</a>
                    <a href="/" className="list-group-item border-0">Cintos</a>
                </div>
                <div className="list-group footer-nav-links">
                    <a href="/" className="list-group-item border-0">Carteiras</a>
                    <a href="/" className="list-group-item border-0">Moletom</a>
                    <a href="/" className="list-group-item border-0">Camisetas</a>
                    <a href="/" className="list-group-item border-0">Capa para Notebook</a>
                    <a href="/" className="list-group-item border-0 fw-bold">Combos</a>
                    <a href="/" className="list-group-item border-0 fw-bold">Bermuda + Chinelo</a>
                    <a href="/" className="list-group-item border-0 fw-bold">Semana do Consumidor</a>
                    <a href="/" className="list-group-item border-0 fw-bold">Envio Imediato</a>
                    <a href="/" className="list-group-item border-0 fw-bold">Compre &amp; Ganhe</a>
                    <a href="/" className="list-group-item border-0 fw-bold">Outlet</a>
                    <a href="/" className="list-group-item border-0 fw-bold">Black Friday</a>
                </div>
            </div>

            <div className="d-flex w-100 container copyright justify-content-between pt-3">
                <div>
                    <i class="bi bi-c-circle"></i>Calçados Laroche 2022 <br />
                    Todos os direitos reservados. Conheça nossa política de privacidade <br />
                    LR FOOTWEAR INDÚSTRIA E COMÉRCIO DE CALÇADOS EIRELI - CNPJ: 32.233.138/0001-27 / Franca - SP
                </div>
                <div>
                    <i class="bi bi-cart3"></i>Plataforma: IRROBA ecom.
                </div>
            </div>
        
        </nav>
    )
}