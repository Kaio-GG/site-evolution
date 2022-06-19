import './index.scss';
import {Link} from 'react-router-dom';
import React from 'react';



export default function Index () {
    document.title = 'Evolution site'
    return(
        <div className='mt-i'>
            <div className="mae">
        <div className="cabeçalho">
            <img src="/assets/image/logo1.svg" className="log" alt=""/>
            
            <div className="btns">
          
              <Link  className="btn1" style={{textDecoration:'none'}} to="/cadastro">
                 CADASTRO
              </Link> 
              <Link className="btn2" style={{textDecoration:'none'}} to="/login">
                LOGIN
             </Link> 
        </div>
    </div>
        <div className="card">
          
            CONSOLES
        </div>
        <div className="faixa-1">
            <div className="anuncio">
                <img className="imag" src="/assets/image/console-exe1.png" alt=""/>
                <div className="ali">
                <div className="quad">
                <p> Preço:  <br/>
                   2.374,90 </p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="/anuncio">Nintendo Switch </Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-2">
                <img className="imag" src='/assets/image/console-exe1.png' alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço: <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="/anuncio">Nintendo Switch </Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-2">
                <img className="imag" src='/assets/image/console-exe1.png' alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço: <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="/anuncio">Nintendo Switch </Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-5">
                <img className="imag" src='/assets/image/console-exe1.png' alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço: <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="/anuncio">Nintendo Switch </Link> 
                </div>
                </div>
            </div>
        </div>


        <div className="card-2">       
            CELULARES
        </div>
        <div className="faixa-2">
            <div className="anuncio">
                <img className="imag" src='/assets/image/celular-exe.svg' alt="" />
                <div className="ali">
                <div className="quad">
                    <p> Preço: <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="/anuncio">LG velvet </Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-2">
                <img className="imag" src='/assets/image/celular-exe.svg' alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="anuncio">LG velvet</Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-2">
                <img className="imag" src='/assets/image/celular-exe.svg' alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço: <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="/anuncio">LG velvet</Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-5">
                <img className="imag" src='/assets/image/celular-exe.svg' alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço: <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="/anuncio">LG velvet </Link> 
                </div>
                </div>
            </div>
        </div>  
        <div className="card-2">       
            NOTEBOOK
        </div>
        <div className="faixa-3">
            <div className="anuncio">
                <img className="imag" src='/assets/image/notebook-exe.svg' alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço: <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="/anuncio">Acer Aspire 3 A315 </Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-2">
                <img className="imag" src='/assets/image/notebook-exe.svg' alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="/anuncio">Acer Aspire 3 A315</Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-2">
                <img className="imag" src='/assets/image/notebook-exe.svg' alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço: <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="/anuncio">Acer Aspire 3 A315</Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-5">
                <img className="imag" src='/assets/image/notebook-exe.svg'alt="" />
                <div className="ali">
                <div className="quad">
                    <p> Preço: <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="/anuncio">Acer Aspire 3 A315 </Link> 
                </div>
                </div>
            </div>

        </div>
        <div className="card-3">       
           PRODUTOS QUE TALVEZ VOCÊ GOSTE
        </div>
        <div className="faixa-3">
            <div className="anuncio">
                <img className="imag" src='/assets/image/notebook-exe.svg' alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço: <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="/anuncio">Acer Aspire 3 A315</Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-2">
                <img className="imag" src='/assets/image/TELEVISAO.png'alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço:  <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="/anuncio">Acer Aspire 3 A315</Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-2">
                <img className="imag" src= '/assets/image/console-exe.svg' alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço:  <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="/anuncio">Acer Aspire 3 A315 </Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-5">
                <img className="imag" src='/assets/image/notebook-exe.svg' alt="" />
                <div className="ali">
                <div className="quad">
                <p> Preço:  <br/>
                      2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration:'none'}} to="/anuncio">Acer Aspire 3 A315</Link> 
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
    
}