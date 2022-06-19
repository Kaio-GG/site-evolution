import { Link , useParams } from "react-router-dom";
import './index.scss'
import { useEffect, useState } from 'react';
import { novoanuncio , enviarimage, alteraranuncio ,deletaranuncio , buscarPorId ,buscarImagem} from "../../api/anuncio.js";
import storage from 'local-storage'


export default function Index() {

document.title = 'Publicar'

    const [nome ,setnome ]=useState('')
    const [valor , setvalor ]=useState(0)
    const [tipo ,settipo ]=useState('')
    const [contato ,setcontato ]=useState('')
    const [descricao , setdescricao ]=useState('')
    const [image ,setimage ]=useState()
    const [id , setid] =useState(0)

const {idParam} = useParams();

useEffect(() => {
if(idParam){
    carregaranuncios()
}

},[])


 async function carregaranuncios (){
const resposta = await buscarPorId(idParam)
setnome(resposta.nome)
setcontato(resposta.telefone)
setdescricao(resposta.descricao)
setvalor(resposta.valor)
settipo(resposta.tipo)
setid(resposta.id)
setimage(resposta.imagem)
 }



async function salvarclick(){
    try {
        if(!image)
            throw new Error ('campo da imagem obrigatorio')
        const usuario = storage('usuario-logado').id
        if (id === 0) {   
        const anuncio = await novoanuncio(usuario , nome, valor , tipo , contato , descricao )
        await enviarimage(anuncio.id , image)
        setid(anuncio.id)       
        alert('anuncio publicado') 
        }else{
            await alteraranuncio(usuario , nome, valor , tipo , contato , descricao)
            if(typeof(image) == 'object')
            await enviarimage(id , image)
        }
        } catch (err) {
        if(err.response)
            alert(err.response.data.erro)
        else
            alert(err.message)
        }
    }




function escolherimagem(){
    document.getElementById('imagecapa').click()
}

function mostrarimagem (){
    if(typeof (image) == 'object' ){
    return URL.createObjectURL(image)
}else{
    return buscarImagem(image)
}
}


function novoclick() {
    setid(0)
    setnome('')
    setcontato('')
    setdescricao('')
    setimage()
    settipo('')
    setvalor(0)
}

async function removeranuncios(id){
    await deletaranuncio (id)
    novoclick()
}







return(
        <div className="mae-publicar">
        <div className="cabeçalho">
            <img src="../../assets/image/logo1.svg" className="log" alt=""/>
            <div className="btns">
              <Link  className="btn1" style={{textDecoration: 'none'}} to="/">
                 INICIO
              </Link> 
              <Link 
               className="btn2" style={{textDecoration: 'none'}} to="/usuario">
                HOME
             </Link> 
        </div>
    </div>
    <div className="body">
        <div className="faixa">
        <div className="org">
        <h1 className="text">Coloque uma foto do seu produto</h1>
        <button className="btn-f1" type="submit"  onClick={escolherimagem} >TROCAR FOTO</button>
        <p className="text">Atenção essa foto será publica </p>
        <h3 className="text">Telefone para contato :</h3>
        <input className="te" type="text" value={contato} onChange={e => setcontato(e.target.value)}/>
        </div>
        <div className="quad">
           {!image &&  
          <p> TROQUE A FOTO </p>
           }
           {image &&
          <img src={mostrarimagem()} alt="" className="imagem" />
           }
          <input type='file' id='imagecapa' onChange={e=>setimage (e.target.files[0])}/>
        </div>
        </div>
        <div className="faixa-2">
            <div>   
                <h3>Digite o nome do produto:</h3>
                <input className="te-2" type="text" value={nome} onChange={e => setnome(e.target.value)}/>
                <h3>Digite o valor do produto:</h3>
                <input className="te-2" type="text"  value={valor} onChange={e => setvalor(e.target.value)}/>
                <h3>Qual o tipo do seu Produto</h3>
                <input className="te-2" type="text"  value={tipo} onChange={e => settipo(e.target.value)}/>
            </div>
            <div className="org-2">
                <h3>Coloque a descrição do produto:</h3>
                <textarea className="te-3" type="text" value={descricao} onChange={e => setdescricao(e.target.value)}/>
                <div>
                </div>
                <button className="btn-f1" onClick={salvarclick}> { id ===0  ? 'SALVAR' : 'ALTERAR'}</button> 


                {id !== 0 &&
                <button className="btn-f1" onClick={() =>  removeranuncios(id)}>  DELETAR  </button>
                }


                <button className="btn-f1" onClick={novoclick}> NOVO </button>
            </div>
        </div>
    </div>

</div>  
    )
}