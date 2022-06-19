import { con } from "./connection.js";

export async function inseriranuncio (anuncio){
const comando =` insert into tb_anuncio (id_usuario ,  nm_anuncio , ds_telefone , ds_valor , ds_tipo , ds_descricao )
                                values ( ? , ? , ? , ? , ? , ? ) `
const [resposta] = await con.query (comando, [anuncio.usuario ,anuncio.nome ,anuncio.telefone, anuncio.valor,  anuncio.tipo,  anuncio.descricao ])
anuncio.id = resposta.insertId   
return anuncio
}


export async function alteraranuncio (id , anuncio){
const comando =`
update tb_anuncio
set nm_anuncio      = ?,
	ds_valor        = ?,
	ds_tipo	        = ?,
	ds_telefone     = ?,
    ds_descricao    = ?
where id_anuncio    = ?   
`
const [resposta] = await con.query (comando, [anuncio.nome ,  anuncio.valor , anuncio.tipo , anuncio.telefone , anuncio.descricao , id    ])
return resposta.affectedRows
}

export async function removeranuncio(id) {
    const comando =
        `DELETE FROM tb_anuncio
                WHERE id_anuncio = ? `;

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function buscarporid ( id ){
    const comando = `
    SELECT  id_anuncio			id,
	        nm_anuncio			nome,
            ds_valor		    tipo,
            ds_telefone	        telefone,
            ds_descricao	    descricao,
            img_anuncio         imagem,
            ds_valor            valor
            FROM tb_anuncio
        WHERE id_usuario like ? `

    const [linhas] = await con.query  (comando , [`%${id}%`])
    return linhas

}

export async function buscarporidanuncio ( id ){
    const comando = `
    SELECT  id_anuncio			id,
	        nm_anuncio			nome,
            ds_valor		    tipo,
            ds_telefone	        telefone,
            ds_descricao	    descricao,
            img_anuncio         imagem,
            ds_valor            valor
            FROM tb_anuncio
        WHERE id_anuncio  ? `

    const [linhas] = await con.query  (comando , [id] )
    return linhas[0]
}

export async function buscarportipo ( tipo ){
    const comando = `
    SELECT  id_anuncio			id,
	        nm_anuncio			nome,
            ds_valor		    valor,
            ds_telefone	        telefone,
            ds_descricao	    descricao,
            ds_tpo              tipo   
            FROM tb_anuncio
        WHERE ds_tipo like ? `

    const [linhas] = await con.query  (comando , [`%${tipo}%`])
    return linhas [0 , 1 , 2 , 3 ]
}



export async function alterarimagem (imagem , id){
    const comando =
    `   UPDATE tb_anuncio
        SET img_anuncio     = ?
        WHERE id_anuncio    = ?`

    const [resposta] = await con.query (comando, [imagem , id])
    return resposta.affectedRows;
}


