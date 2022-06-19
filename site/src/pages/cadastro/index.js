import { Link,useNavigate } from "react-router-dom";
import './index.scss'
import { useState } from 'react';
import { cadastro , enviarimage} from '../../api/usuarioapi.js';
import storage from 'local-storage'



export default function Cadastro() {
    document.title = 'Cadastro'

const  [ nome , setnome ] = useState ('');
const  [ email , setemail ] = useState ('');
const  [ senha , setsenha ] = useState ('');
const  [erro ,seterro]= useState('')


const navigate = useNavigate() 


async function entrarclick(){
    try {
        const novocadastro = await cadastro (nome , email , senha)

        storage('usuario-logado', novocadastro)    
        navigate('/usuario')
    } catch (err) {
        if(err.response.status === 401){
            seterro(err.response.data.erro)
        }
    }
}


    return(
        <div className="mae-cadastro">
        <div className="cabeçalho">
            <img src="/assets/image/logo1.svg" className="log" alt=""/>
            <div className="btns">
            <Link style= {{textDecoration: "none"}} className="btn1" to="/">
               <p className="text"> INICIO</p>
            </Link>
            <Link style={{textDecoration: "none"}} className="btn" to="/login">
                <p className="text"> LOGIN</p>
             </Link>
             </div>
        </div>
        <div className="body">
            <div className="faixa">
                <h1 className="text">CADASTRO</h1>
            <div className="org">
                <div  className="caixas">
                    <p>NOME</p>
                    <input className="te" type="text"  value={nome} onChange={e => setnome(e.target.value)}/>
                    <p>E-MAIL</p>
                    <input className="te" type="text"   value={email} onChange={e => setemail(e.target.value)} />
                    <p>SENHA</p>
                    <input className="te-2"type="text"  value={senha} onChange={e => setsenha(e.target.value)}/>
                </div>
            
            <div className="caixa-2">
                
                <button className='btnp' onClick={entrarclick}>
                    PRONTO
                </button>
                
                <div className="erro">
                    {erro}
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>
   
    );   
}