import {con} from './connection.js'


export async function novoUsuario (usuario){
const comando =`
insert into tb_usuario (nm_usuario , ds_email , ds_senha )
		values(  ? , ? , ? )
`
const [resposta] = await con.query (comando, [usuario.nome ,usuario.email , usuario.senha])
usuario.id = resposta.insertId   
return usuario
}

export async function login ( email , senha ){
    const comando =
    `select id_usuario 		id,
        nm_usuario		    nome,
        ds_email			email
        from tb_usuario
        where ds_email 		    = ?
        and ds_senha			= ? `

 const [linha] = await con.query (comando, [email , senha])
 return linha[0]
}


export async function alterarimagem (imagem , id){
    const comando =
    `   UPDATE tb_anuncio
        SET img_anuncio     = ?
        WHERE id_anuncio    = ?`

    const [resposta] = await con.query (comando, [imagem , id])
    return resposta.affectedRows;
}


