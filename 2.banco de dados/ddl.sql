create database site;
use site;


create table tb_usuario(
    id_usuario      int primary key auto_increment,
    nm_usuario      varchar (100),
    ds_email        varchar (100),
    ds_senha        varchar (30),
    img_usuario     varchar (800)
);



create table tb_anuncio(
    id_anuncio      int primary key auto_increment,
    id_usuario      int,
    nm_anuncio      varchar (100),
    ds_telefone     varchar (13),
    ds_valor        decimal (10,2),
    ds_tipo         varchar (50),
    ds_descricao    varchar (500),
    img_anuncio     varchar(800),
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario (id_usuario)
);


drop table tb_usuario;
drop table tb_anuncio;
