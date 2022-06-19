import axios from 'axios'
const api =axios.create({
    baseURL:'http://localhost:5000'
})


export async function login (email, senha ){
    const r = await api.post ('/usuario/login' , {email:email,senha:senha})
    return r.data
}

export async function cadastro (nome , email, senha){
    const r = await api.post ('/usuario' ,{nome:nome,email:email,senha:senha})
    return r.data
}

export async function enviarimage(id , imagem){
    const formData= new FormData()
    formData.append('capa', imagem) 
     
    const resposta = await api.put(`/usuario/${id}/capa`, formData , {headers : {"Content-Type":"multipart/form-data"}})
    
return resposta.status
}