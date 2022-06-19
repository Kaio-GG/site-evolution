import axios from "axios";
const api =axios.create({
    baseURL:'http://localhost:5000'
})


export async function novoanuncio(usuario , nome , valor , tipo, contato , descricao ){
const resposta = await api.post ('/anuncio/publicar',  {
    usuario:usuario,
    nome: nome,
    valor:valor,
    tipo:tipo,
    telefone: contato,
    descricao: descricao
})  
return resposta.data
}

export async function enviarimage(id , imagem){
const formData= new FormData()
formData.append('capa', imagem) 
 
const resposta = await api.put (`/anuncio/${id}/capa`, formData , {
    headers : {
        "Content-Type":"multipart/form-data"
    },
})

return resposta.status
}

export async function alteraranuncio(id , usuario , nome , valor , tipo, contato , descricao ){
const resposta = await api.put (`/anuncio/${id}`,  {
        usuario:usuario,
        nome: nome,
        valor:valor,
        tipo:tipo,
        telefone: contato,
        descricao: descricao
})  
return resposta.data
}

export async function listarAnuncioId(id){
    const resposta = await api.get (`/anuncio/buscar/${id}`)
    return resposta.data
} 


export async function deletaranuncio(id){
    const resposta = await api.delete (`/anuncio/${id}`)
    return resposta.status 
}

export async function buscarPorId(id){
    const resposta = await api.get (`/anuncio/buscar/anuncio/${id}`)
    return resposta.data
}

export function buscarImagem(imagem){
    return `${api.getUri()}/${imagem}`
}
export async function buscarPorTipo(tipo){
    const resposta = await api.get (`/anuncio/tipo/${tipo}`)
    return resposta.data
}



