---
title: Obtener
breadcrumb: false
pageInfo: false
toc: false
contributors: false
editLink: false
lastUpdated: false
prev: false
next: false
comment: false
footer: false
backtotop: false
---

<!-- ABRE DATOS DEL MÉTODO -->
::: note Método para obtener los datos de un usuario.

**Nombre publicación:** BTUsuarios.Obtener

**Programa:** RBTPG406

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
usuario | String | Usuario a consultar.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtDatosUsuario | [sBTDatosUsuario](#sbtdatosusuario) | Datos del usuario.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió Usuario. 
40001 | No existe el usuario ingresado. 
::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTUsuarios.Obtener>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>2062732190F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:usuario>INSTALADOR</bts:usuario>
      </bts:BTUsuarios.Obtener>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?Obtener=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 20394f02-93fd-01a3-c079-81b84239bc48' \
  -d '{
	"Btinreq": {
		"Device": "AC",
		"Usuario": "BANTOTAL",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "2062732190F955E77534D3E0"
	},
	"usuario": "INSTALADOR"
}'
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTUsuarios.ObtenerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>2062732190F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtDatosUsuario>
            <usuario>INSTALADOR</usuario>
            <nombre>INSTALADOR</nombre>
            <email>moralesa@dlya.com.uy</email>
            <telefono>26012777</telefono>
            <idSucursal>5</idSucursal>
            <sucursal>Sucursal Beta</sucursal>
            <programaInicial>MINICIO</programaInicial>
            <espaciosDeTrabajo>0</espaciosDeTrabajo>
            <cantidadSesionesAbiertas>9</cantidadSesionesAbiertas>
            <cajero>S</cajero>
            <numeroCaja>400</numeroCaja>
            <nivel>9</nivel>
            <perfiles>
               <sBTPerfilBT>
                  <Perfil>COMERCIAL</perfil>
                  <FechaAlta>2001-01-01</fechaAlta>
                  <FechaVencimiento>2021-01-01</fechaVencimiento>
               </sBTPerfilBT>
               <sBTPerfilBT>
                  <Perfil>INSTALADOR</perfil>
                  <FechaAlta>2001-01-01</fechaAlta>
                  <FechaVencimiento>2021-01-01</fechaVencimiento>
               </sBTPerfilBT>
               <sBTPerfilBT>
                  <Perfil>MFINSTALL</perfil>
                  <FechaAlta>2001-01-01</fechaAlta>
                  <FechaVencimiento>2021-01-01</fechaVencimiento>
               </sBTPerfilBT>
               <sBTPerfilBT>
                  <Perfil>PRECIOS</perfil>
                  <FechaAlta>2001-02-22</fechaAlta>
                  <FechaVencimiento>2035-03-03</fechaVencimiento>
               </sBTPerfilBT>
            </perfiles>
         </sdtDatosUsuario>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTUsuarios.Obtener</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Hora>17:19:56</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6991</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTUsuarios.ObtenerResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "BANTOTAL",
        "Token": "2062732190F955E77534D3E0",
        "Device": "AC"
    },
    "sdtDatosUsuario": {
        "usuario": "INSTALADOR",
        "nombre": "INSTALADOR",
        "email": "moralesa@dlya.com.uy",
        "telefono": "26012777",
        "idSucursal": "5",
        "sucursal": "Sucursal Beta",
        "programaInicial": "MINICIO",
        "espaciosDeTrabajo": 0,
        "cantidadSesionesAbiertas": 9,
        "cajero": "S",
        "numeroCaja": 400,
        "nivel": 9,
        "perfiles": {
            "sBTPerfilBT": [
                {
                    "Perfil": "COMERCIAL",
                    "FechaAlta": "2001-01-01",
                    "FechaVencimiento": "2021-01-01"
                },
                {
                    "Perfil": "INSTALADOR",
                    "FechaAlta": "2001-01-01",
                    "FechaVencimiento": "2021-01-01"
                },
                {
                    "Perfil": "MFINSTALL",
                    "FechaAlta": "2001-01-01",
                    "FechaVencimiento": "2021-01-01"
                },
                {
                    "Perfil": "PRECIOS",
                    "FechaAlta": "2001-02-22",
                    "FechaVencimiento": "2035-03-03"
                }
            ]
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTUsuarios.Obtener",
        "Fecha": "2019-11-19",
        "Hora": "17:21:59",
        "Requerimiento": "",
        "Numero": 6992,
        "Estado": "OK"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT --> 
::: details sBTDatosUsuario  

### sBTDatosUsuario

::: center 
Los campos del tipo de dato estructurado sBTDatosUsuario son los siguientes: 

Campo | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cajero | String | Es cajero? (S/N). 
cantidadSesionesAbiertas | Short | Cantidad máxima de sesiones que puede tener abiertas un mismo usuario Bantotal. 
email | String | Email del usuario. 
espaciosDeTrabajo | Int | Cantidad máxima de espacios de trabajos que puede tener abierta el usuario. 
idSucursal | Int | Identificador de sucursal.
nivel | Short | Nivel del usuario. 
nombre | String | Nombre del usuario. 
numeroCaja | Int | Número de caja del usuario. 
perfiles | [sBTPerfilBT](#sbtperfilbt) | Listado de perfiles asociados al usuario. 
programaInicial | String | Nombre de programa inicial que se invoca al acceder a Bantotal. 
sucursal | String | Sucursal donde se encuentra el usuario. 
telefono | String | Teléfono del usuario. 
usuario | String | Identificador del usuario. 

### sBTPerfilBT

Los campos del tipo de dato estructurado sBTPerfilBT son los siguientes: 

Campo | Tipo | Comentarios 
:--------- | :--------- | :--------- 
FechaAlta | Date | Fecha a partir de la cual el usuario se encuentra habilitado para operar con el perfil. 
FechaVencimiento | Date | Fecha de vencimiento del perfil para el usuario. 
Perfil | String | Identificador de perfil Bantotal. 
:::
<!-- CIERRA SDT -->