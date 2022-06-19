import storage from 'local-storage'
import { Link , useNavigate} from "react-router-dom"
import './index.scss'
import  { useEffect, useState } from 'react';
import { listarAnuncioId } from '../../api/anuncio.js'



export default function Index (){
    document.title = 'Menu do usuario'
    const [usuario , setusuario]= useState('')
    const [anuncio, setanuncio] =useState([])


    const navigate = useNavigate()
    useEffect(()=>{
        if(!storage('usuario-logado')){
            navigate('/')
        }else{
            const usuarioLogado = storage('usuario-logado')
            
            setusuario(usuarioLogado.nome)
        }
    },[])

    function sairclick (){
        storage.remove('usuario-logado')
        navigate('/')
    }

    function editaranuncio(id){
        navigate(`/alterar/${id}`)
    }


    async function carregaranuncios(id){
        const resp = await listarAnuncioId(id) 
        console.log(resp)
        setanuncio(resp)
    }
    useEffect(() => {
        const usuarioLogado = storage('usuario-logado')
        carregaranuncios(usuarioLogado.id)
    },[])


    return(
        <div className="mae-usuario">
        <div className="cabeçalho">
            <div className="cbl_org">
            <div className="tl-1">
                {usuario}
            <div className="linha"></div>
            </div>
            </div>
            <div className="btns">
              <Link  className="btn1" style={{textDecoration: 'none'}} to="/publicar">
                PUBLICAR PRODUTO
              </Link> 
              <Link  className="btn2" style={{textDecoration: 'none'}} to="/">
                INICIO
            </Link>
            <Link style={{textDecoration: 'none'}} className="btn2" to="/" onClick={sairclick}>
               <p className="text"> SAIR </p>
            </Link> 
            </div>
    </div>
    <div className="body">




        <div className="tl">
           MEUS PRODUTOS
            <div className="linha"></div>
        </div>

        <div className="faixa-1">
        {anuncio.map(item => 
            <div className="anuncio">
            <img className="imag" src={item.imagem} alt=""/>
            <div className="ali">
            <div className="quad">
                <p> Preço: <br/>
                    {item.valor}</p>
            </div>
            <div className="quad-2">
                <p className="a1"  onClick={() => editaranuncio(item.id)}>{item.nome}</p> 
            </div>
            </div>
        </div>
            )}
        
           </div>
    </div>
    </div>
    );
}