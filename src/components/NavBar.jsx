import React from 'react';
import { Link } from 'react-router-dom';

export default function NabBar() {
  return (
    <>
      <nav className="d-flex flex-column navbar-principal">
        <div className="d-flex bg-black justify-content-between">
          <div className="rule-building bg-black text-light ps-5 d-flex align-items-center ms-4">
            <span className="text-uppercase border-end d-flex"><i className="bi bi-question-circle-fill fs-5 mt-1 "></i> <a className="ms-1 m-2" href="/">ajuda</a> </span>
            <a className="text-uppercase ms-2" href="/">frete grátis a partir de r$149,00*</a>
          </div>

          <div className="box-phones pt-2">
            <button>
              <table className="">
                <tbody>
                  <tr >
                    <td className="ms-0 border-end"><a className=" ps-4" href="/">Telefones</a>   </td>
                    
                    <td className=" "><i className="bi bi-whatsapp ms-1"></i><a className="ms-2" href="https://api.whatsapp.com/send?phone=5516993191201"> (16) 99319-1201</a> </td>
                  </tr>
                  <tr className="">
                    <td className="ms-4">são paulo</td>
                    <td className="ps-3">(11) 3136-0691</td>
                  </tr>
                  <tr className="">
                    <td className="ms-4">rio de janeiro</td>
                    <td className="ps-3">(21) 3005-2192</td>
                  </tr>
                  <tr className="">
                    <td className="ms-4">belo horizonte</td>
                    <td className="ps-3">(31)2626-1369</td>
                  </tr>
                  <tr className="">
                    <td className="ms-4">franca</td>
                    <td className="ps-3"> (16) 3600-9894</td>
                  </tr>
                </tbody>

              </table>
            </button>
          </div>
        </div>

        <div className="navbar-menu container">
          <div className="d-flex align-items-center justify-content-between mb-1">
            <div className="">
              <a href="/"><img src="https://img.irroba.com.br/filters:format(webp):fill(fff):quality(95)/lojalaro/catalog/logos/logotipo-laroche-v2.jpg" alt="logo laroche" /></a>
            </div>
            <div className="d-flex container">
              <div>
                <div className="dropdown">
                  <div>
                    <Link className="btn line bg-white text-black text-uppercase" to="/products" role="button" id="dropdownMenuLink" aria-expanded="false">
                      todos os produtos
                    </Link>
                  </div>

                  <ul className="dropdown-menu  " aria-labelledby="dropdownMenuLink">
                    <li><Link className="dropdown-item " to="/products">lançamentos</Link></li>
                    <li><a className="dropdown-item " href="/">vestuário</a></li>
                    <li><a className="dropdown-item " href="/">calçados</a></li>
                    <li><a className="dropdown-item " href="/">informática</a></li>
                    {/* <li><a className="dropdown-item " href="/">coturno masculino</a></li>
                    <li><a className="dropdown-item " href="/">sapatenis masculino</a></li>
                    <li><a className="dropdown-item " href="/">mocassim masculino</a></li>
                    <li><a className="dropdown-item " href="/">tênis casual masculino</a></li>
                    <li><a className="dropdown-item " href="/">sapato social masculino</a></li>
                    <li><a className="dropdown-item " href="/">sapatenis botinha (cano alto)</a></li>
                    <li><a className="dropdown-item " href="/">sapato confortável masculino</a></li> */}

                  </ul>
                </div>
              </div>
              <div>
                <div className="dropdown">
                  <div className="">
                    <Link className="btn bg-white text-black line text-uppercase" to="/mensclothing" role="button" id="dropdownMenuLink" aria-expanded="false">
                      masculino
                    </Link>
                  </div>
                  <ul className="dropdown-menu text-black" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item " href="/">tênis</a></li>
                    <li><a className="dropdown-item " href="/">chuteiras</a></li>
                    <li><a className="dropdown-item " href="/">sapatênis</a></li>
                    <li><a className="dropdown-item " href="/">botas</a></li>
                    {/* <li><a className="dropdown-item " href="/">sandália infantil</a></li>
                    <li><a className="dropdown-item " href="/">mocassim infantil</a></li>
                    <li><a className="dropdown-item " href="/">sapatenis infantil</a></li>
                    <li><a className="dropdown-item " href="/">botinhas infantil masculina</a></li>
                    <li><a className="dropdown-item " href="/">tal pai, tal filho</a></li> */}
                    
                  </ul>
                </div>
              </div>
              <div>
                <div className="dropdown ">
                  <div>
                    <Link className="btn bg-white text-black line text-uppercase" to="/womensclothing" role="button" id="dropdownMenuLink"  aria-expanded="false">
                      feminino
                    </Link>
                  </div>
                  <ul className="dropdown-menu text-black" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item " href="/">shorts</a></li>
                    <li><a className="dropdown-item " href="/">calças</a></li>
                    <li><a className="dropdown-item " href="/">bolsas</a></li>
                    <li><a className="dropdown-item " href="/">jaquetas</a></li>
                    <li><a className="dropdown-item " href="/">moletom</a></li>
                    {/* <li><a className="dropdown-item " href="/">camisetas</a></li>
                    <li><a className="dropdown-item " href="/">capa para notebook</a></li> */}
                    
                  </ul>
                </div>
              </div>
              <div>
                <div className="dropdown ">
                  <div>
                    <a className="btn bg-white text-black line text-uppercase" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      informática
                    </a>
                  </div>
                  <ul className="dropdown-menu text-black" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item " href="/">monitores</a></li>
                    <li><a className="dropdown-item " href="/">teclados</a></li>
                    <li><a className="dropdown-item " href="/">placas de video</a></li>
                    <li><a className="dropdown-item " href="/">processadores</a></li>
                    <li><a className="dropdown-item " href="/">armazenamento</a></li>
                    {/* <li><a className="dropdown-item " href="/">camisetas</a></li>
                    <li><a className="dropdown-item " href="/">capa para notebook</a></li> */}
                    
                  </ul>
                </div>
              </div>
              <div>
                <div className="dropdown ">
                  <div>
                    <a className="btn bg-white text-black line text-uppercase" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      envio imediato
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="dropdown ">
                  <div>
                    <a className="btn bg-white text-black line text-uppercase" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      outlet
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="d-flex fs-4 ms-3 ps-5">
              <div><i className="bi bi-search"></i></div>
              <div><i className="bi bi-person ms-2"></i></div>
              <div><i className="bi bi-briefcase ms-2"></i></div>
            </div>
          </div>
          
        </div>
      </nav>
    </>
  )
}
