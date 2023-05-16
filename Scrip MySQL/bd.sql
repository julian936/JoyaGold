/** =========== script basico ========================
*	fecha:		14/05/2023                   *
*	autor:		Julian Rojas Ramirez.        *
* ==================================================*/

CREATE DATABASE DSJoyaGold;
USE DSJoyaGold;

# -------------Tabla Producto--------------------
-- DROP TABLE JG_PRODUCTO;  
CREATE TABLE JG_PRODUCTO
(	
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre varchar(200),
    Material varchar(200),
    Tipo varchar(200),
    Precio varchar(200),
    Consumidor varchar(200),
    Referencia varchar(200),
    Color varchar(200)
);

/* datos iniciales*/

insert into JG_PRODUCTO(Nombre, Material, Tipo, Precio, Consumidor, Referencia,Color) values('Graduacion', 'Oro','Anillo','1200000','Mujer','Dior','rosa');
insert into JG_PRODUCTO(Nombre, Material, Tipo, Precio, Consumidor, Referencia,Color) values('Matrimonio', 'Oro','Anillo','1200000','Hombre','guzi','amarillo');
select * from JG_PRODUCTO;