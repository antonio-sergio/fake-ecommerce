import React from 'react';

export default function NabBar() {
  return (
    <>
      <nav className="d-flex flex-column  ">
        <div className="d-flex bg-black justify-content-between ">
          <div className="rule-building bg-black text-light ps-5 d-flex align-items-center ">
            <span className="text-uppercase border-end d-flex"><i className="bi bi-question-circle-fill fs-5 mt-1 "></i> <a className="ms-1 m-2" href="/">ajuda</a> </span>
            <a className="text-uppercase ms-2" href="/">frete grátis a partir de r$149,00*</a>
          </div>

          <div className="box-phones pt-2">
            <button>
              <table className="">
                <tbody>
                  <tr >
                    <td className="ms-0 border-end"><a className=" ps-4" href="/">Telefones</a>   </td>
                    <td className=" ms-3 me-5"><i className="bi bi-whatsapp ms-1"></i><a className="ms-2" href="/"> (16) 99319-1201</a> </td>
                  </tr>
                  <tr className="">
                    <td className="ms-4">são paulo</td>
                    <td className="">(11) 3136-0691</td>
                  </tr>
                  <tr className="">
                    <td className="ms-4">rio de janeiro</td>
                    <td className="">(21) 3005-2192</td>
                  </tr>
                  <tr className="">
                    <td className="ms-4">belo horizonte</td>
                    <td className="">(31)2626-1369</td>
                  </tr>
                  <tr className="">
                    <td className="ms-4">franca</td>
                    <td className=""> (16) 3600-9894</td>
                  </tr>
                </tbody>

              </table>
            </button>
          </div>
        </div>

        <div>
          <div className="d-flex align-items-center">
            <div>
              <img src="https://img.irroba.com.br/filters:format(webp):fill(fff):quality(95)/lojalaro/catalog/logos/logotipo-laroche-v2.jpg" alt="logo laroche" />
            </div>
            <div className="d-flex">
              <div>
                <div class="dropdown ">
                  <div>
                    <a class="btn line bg-white text-black text-uppercase" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      calçados masculinos
                    </a>
                  </div>

                  <ul class="dropdown-menu  " aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item " href="/">lançamentos</a></li>
                    <li><a class="dropdown-item " href="/">mule masculino</a></li>
                    <li><a class="dropdown-item " href="/">slip on masculino</a></li>
                    <li><a class="dropdown-item " href="/">chinelo masculino</a></li>
                    <li><a class="dropdown-item " href="/">coturno masculino</a></li>
                    <li><a class="dropdown-item " href="/">sapatenis masculino</a></li>
                    <li><a class="dropdown-item " href="/">mocassim masculino</a></li>
                    <li><a class="dropdown-item " href="/">tênis casual masculino</a></li>
                    <li><a class="dropdown-item " href="/">sapato social masculino</a></li>
                    <li><a class="dropdown-item " href="/">sapatenis botinha (cano alto)</a></li>
                    <li><a class="dropdown-item " href="/">sapato confortável masculino</a></li>

                  </ul>
                </div>
              </div>
              <div>
                <div class="dropdown ">
                  <div>
                    <a class="btn bg-white text-black line text-uppercase" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      calçados infantis
                    </a>
                  </div>
                  <ul class="dropdown-menu text-black" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item " href="/">linha baby - do 17 ao 26</a></li>
                    <li><a class="dropdown-item " href="/">slip on infantil</a></li>
                    <li><a class="dropdown-item " href="/">tênis infantil</a></li>
                    <li><a class="dropdown-item " href="/">babuche infantil</a></li>
                    <li><a class="dropdown-item " href="/">sandália infantil</a></li>
                    <li><a class="dropdown-item " href="/">mocassim infantil</a></li>
                    <li><a class="dropdown-item " href="/">sapatenis infantil</a></li>
                    <li><a class="dropdown-item " href="/">botinhas infantil masculina</a></li>
                    <li><a class="dropdown-item " href="/">tal pai, tal filho</a></li>
                    
                  </ul>
                </div>
              </div>
              <div>
                <div class="dropdown ">
                  <div>
                    <a class="btn bg-white text-black line text-uppercase" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      acessórios
                    </a>
                  </div>
                  <ul class="dropdown-menu text-black" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item " href="/">short</a></li>
                    <li><a class="dropdown-item " href="/">meias</a></li>
                    <li><a class="dropdown-item " href="/">cintos</a></li>
                    <li><a class="dropdown-item " href="/">carteiras</a></li>
                    <li><a class="dropdown-item " href="/">moletom</a></li>
                    <li><a class="dropdown-item " href="/">camisetas</a></li>
                    <li><a class="dropdown-item " href="/">capa para notebook</a></li>
                    
                  </ul>
                </div>
              </div>
              <div>
                <div class="dropdown ">
                  <div>
                    <a class="btn bg-white text-black line text-uppercase" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      combos
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="dropdown ">
                  <div>
                    <a class="btn bg-white text-black line text-uppercase" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      envio imediato
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="dropdown ">
                  <div>
                    <a class="btn bg-white text-black line text-uppercase" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      outlet
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
            <div></div>
          </div>
          <div>
            {/* ultimo */}
          </div>
        </div>
      </nav>
    </>
  )
}
