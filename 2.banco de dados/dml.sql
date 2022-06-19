use site;

insert into tb_usuario(nm_usuario, ds_telefone ,ds_email , ds_senha )
		values(  'adm','11 957478957', 'admin@gmail.com', '1234' );
        
        
-- CSU01:: efetuar login
select id_usuario 		id,
       nm_usuario		nome,
       ds_email			email,
       img_usuario
  from tb_usuario;
 where ds_email 		= 'admin@gmail.com'
   and ds_senha			= '1234';
     
     
 insert into tb_anuncio (id_usuario ,nm_anuncio , ds_telefone, ds_valor ,ds_tipo ,ds_descricao )
			values(1, 'LG velvet 2', '11 957478957', 1200.00 ,'Celular','Celular bom ');

-- CSU02:: efetuar anuncio
select id_anuncio		    id,
		  id_usuario,
       nm_anuncio		    nome,
       ds_tipo			    tipo,
       ds_telefone      telefone,
       img_anuncio
  from tb_anuncio;
 where nm_anuncio 		= 'LG velvet 2'
   and ds_tipo		    = 'Celular';
     
     
update tb_anuncio
set nm_anuncio      = '',
	ds_valor          = 1200.00 ,
	ds_tipo	          = '' ,
	ds_telefone       = '' 
where id_anuncio   