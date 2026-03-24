---
title: Crear Cliente
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
::: note Método para crear cliente de Partner.

**Nombre publicación:** BTPartners.CrearCliente

**Programa:** RBTPN007

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPartner | [sBTPartnerInReq](#sbtpartnerinreq)  | Datos del usuario.
personaUId | Long | Identificador único de la persona.
sectorId | Short | Identificador del sector.
clasificacionInternaId | Short | Identificador de la clasificación interna.
ejecutivoId | Int | Identificador del ejecutivo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de persona.
30002 | No se recibió el identificador del sector.
30003 | No se recibió el identificador de la clasificación interna.
30004 | No existe persona para el identificador único: [Nùmero de identificador].
30005 | Ya existe la cuenta.
30007 | La Contraparte ya está relacionada al Partner: [Número del Partner] - [Nombre del Partner].
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
      <bts:BTPartners.CrearCliente>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1222A10B1A106FB813BD7AE9</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>3</bts:puntoVentaUId>
            <bts:vendedorUId>23</bts:vendedorUId>
            <bts:partnerUId>5</bts:partnerUId>
         </bts:sdtPartner>
         <bts:personaUId>123</bts:personaUId>
         <bts:sectorId>2</bts:sectorId>
         <bts:clasificacionInternaId>1</bts:clasificacionInternaId>
         <bts:ejecutivoId>23</bts:ejecutivoId>
      </bts:BTPartners.CrearCliente>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?CrearCliente' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "3JPL6DC33CD84655A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
    "sdtPartner": {
      "puntoVentaUId": 3,
      "vendedorUId": 23,
      "partnerUId": 5
   },
   "personaUId": 123,
   "sectorId": 2,
   "clasificacionInternaId": 1,
   "ejecutivoId": 23
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
      <BTPartners.CrearClienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>0306ebbd9c4A8B5C60A82434</Token>
         </Btinreq>
         <clienteUId>181</clienteUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>770</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.CrearCliente</Servicio>
            <Fecha>2017-12-14</Fecha>
            <Requerimiento/>
            <Hora>18:17:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.CrearClienteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": "202",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "835",
        "Estado": "OK",
        "Servicio": "BTPartners.CrearCliente",
        "Fecha": "2017-12-18",
        "Requerimiento": "",
        "Hora": "01:48:53",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPartnerInReq  

### sBTPartnerInReq

::: center 
Los campos del tipo de dato estructurado sBTPartnerInReq son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
partnerUId | Int | Identificador del Partner.
puntoVentaUId	 | Int | Identificador del punto de venta.
vendedorUId	 | Int | Identificador del vendedor.
:::
<!-- CIERRA SDT -->