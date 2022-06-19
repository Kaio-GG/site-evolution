import storage from 'local-storage'
import './index.scss'
import { Link ,useNavigate } from 'react-router-dom'
import  { useState } from 'react';
import { login } from '../../api/usuarioapi.js';





export default  function Index() {
    document.title = 'Login'

    const [ email , setemail ] = useState ('');
    const [ senha , setsenha ] = useState ('');
    const [ erro , seterro ] = useState ('');

    const navigate = useNavigate()


async function entrarclick(){
    try { 
    const r = await login (email ,senha)

        storage('usuario-logado', r)
            
        navigate('/usuario')
    }catch (err) {
        if(err.response.status === 401){
            seterro(err.response.data.erro)
        }
    }
}


    return(
        <div className="mt">
            <div className="mae">
        <div className="cabeçalho">
            <img src='/assets/image/logo1.svg' className="log" alt=""/>
            <div className='btns'>
            <Link style={{textDecoration: 'none'}} className="btn1" to="/">
               <p className="text"> INICIO</p>
            </Link>
            <Link style={{textDecoration: 'none'}} className="btn1" to="/cadastro">
                 <p className="text">CADASTRO</p> 
        </Link >
        </div>
        </div>
        <div className="body">
        <div className="faixa">
            <h1>FAÇA SEU LOGIN</h1>
            <div className="linha">
            <div className="tex">
               <p className='tex'>
                E-MAIL
                </p>
               <input className="te" type="text" placeholder='informe seu e-mail'   value={email} onChange={e => setemail(e.target.value)}/> 
            </div>
            <div className="tex-2"> 
               
                <p className='tex'>
                SENHA
                </p>
                <input className="te-2" type="password" placeholder='***'  value={senha} onChange={e => setsenha(e.target.value)}/>
              </div>
            </div>
            <div>
                {erro}
            </div>
           < button  className="btn-2" onClick={entrarclick} >PRONTO</button>
        </div>
       
    </div>
    </div>
</div>
);
}
