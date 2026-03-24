---
title: Obtener Puntos de Venta
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
::: note Método para retornar los puntos de venta del Partner.

**Nombre publicación:** BTPartners.ObtenerPuntosDeVenta

**Programa:** RBTPN005

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPartner | [sBTPartnerInReq](#sbtpartnerinreq)  | Datos del usuario.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtPuntosVenta | [sBTPuntoVenta](#sbtpuntoventa) | Listado de los puntos de venta.

@tab Errores

No aplica.
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
      <bts:BTPartners.ObtenerPuntosDeVenta>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>DF1F942C6EC60E8B95BBEA69</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>2</bts:puntoVentaUId>
            <bts:vendedorUId>3</bts:vendedorUId>
            <bts:partnerUId>1</bts:partnerUId>
         </bts:sdtPartner>
      </bts:BTPartners.ObtenerPuntosDeVenta>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ObtenerPuntosDeVenta' \
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
        "puntoVentaUId": 2,
        "vendedorUId": 3,
        "partnerUId": 1
    },
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
      <BTPartners.ObtenerPuntosDeVentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <sdtPuntosVenta>
            <sBTPuntoVenta>
               <puntoVentaUId>2</puntoVentaUId>
               <partnerUId>1</partnerUId>
               <nombre>Punto de Venta 2</nombre>
            </sBTPuntoVenta>
         </sdtPuntosVenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16872</Numero>
            <Servicio>BTPartners.ObtenerPuntosDeVenta</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-27</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>17:13:11</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.ObtenerPuntosDeVentaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtPuntosVenta": {
        "sBTPuntoVenta": {
        "puntoVentaUId": 2,
        "partnerUId": 1,
        "nombre": "Punto de Venta 2"
        }
    },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPartners.ObtenerPuntosDeVenta",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "17:08:56"
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
puntoVentaUId | Int | Identificador del punto de venta.
vendedorUId | Int | Identificador del vendedor.
:::

::: details sBTPuntoVenta  

### sBTPuntoVenta

::: center 
Los campos del tipo de dato estructurado sBTPuntoVenta son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
nombre | String | Nombre.
partnerUId | Int | Identificador del Partner.
puntoVentaUId | Int | Identificador del punto de venta.
:::
<!-- CIERRA SDT -->