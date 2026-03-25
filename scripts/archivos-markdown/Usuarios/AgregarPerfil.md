---
title: Agregar Perfil
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
::: note Método para agregar un perfil a un usuario.

**Nombre publicación:** BTUsuarios.AgregarPerfil

**Programa:** RBTPG122

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
usuario | String | Identificador del usuario.
sdtPerfil | [sBTPerfilBT](#sbtperfilbt) | Datos del perfil.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | Debe ingresar Usuario.
30002 | No existe Usuario.
30003 | Debe ingresar Perfil.
30004 | No existe Perfil.
30005 | Debe ingresar Fecha de Alta.
30006 | Fecha de Alta debe ser posterior a Fecha de Apertura.
30007 | Debe ingresar Fecha de Vencimiento.
30008 | Fecha de Vencimiento debe ser posterior a Fecha de Apertura.
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
      <bts:BTUsuarios.AgregarPerfil>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:usuario>INSTALADOR</bts:usuario>
         <bts:sdtPerfil>
            <bts:Perfil>COMEX</bts:perfil>
            <bts:FechaAlta>2018-12-01</bts:fechaAlta>
            <bts:FechaVencimiento>2020-01-01</bts:fechaVencimiento>
         </bts:sdtPerfil>
      </bts:BTUsuarios.AgregarPerfil>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?AgregarPerfil' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "Usuario": "INSTALADOR",
   "sdtPerfil": {
      "Perfil": "COMEX",
      "FechaAlta": "2018-12-01",
      "FechaVencimiento": "2020-01-01"
   }
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
      <BTUsuarios.AgregarPerfilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d2dc7b1654A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>76</Numero>
            <Estado>OK</Estado>
            <Servicio>BTUsuarios.AgregarPerfil</Servicio>
            <Fecha>2018-05-04</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>15:44:24</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTUsuarios.AgregarPerfilResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "80",
        "Estado": "OK",
        "Servicio": "BTUsuarios.AgregarPerfil",
        "Fecha": "2018-05-04",
        "Requerimiento": "1",
        "Hora": "15:54:29",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT --> 
::: details sBTPerfilBT  

### sBTPerfilBT

::: center 
Los campos del tipo de dato estructurado sBTPerfilBT son los siguientes: 

Campo | Tipo | Comentarios 
:--------- | :--------- | :--------- 
FechaAlta | Date | Fecha a partir de la cual el usuario se encuentra habilitado para operar con el perfil.
FechaVencimiento | Date | Fecha de vencimiento del perfil para el usuario.
Perfil | String | Identificador de perfil Bantotal.
:::
<!-- CIERRA SDT -->