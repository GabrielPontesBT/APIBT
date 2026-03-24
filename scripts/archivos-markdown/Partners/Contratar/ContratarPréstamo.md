---
title: Contratar Préstamo
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
::: note Método para contratar un préstamo de Partner.

**Nombre publicación:** BTPartners.ContratarPrestamo

**Programa:** RBTPN008

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPartner | [sBTPartnerInReq](#sbtpartnerinreq)  | Datos del usuario.
operacionUId | Long | Identificador único de operación.
cuentaUId | Long | Identificador único de la cuenta.
operacionAcreditacionUId | Long | Identificador único de la operación de acreditación.
operacionCobroUId | Long | Identificador único de la operación de cobro

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
movimientoUId | Long | Identificador único del movimiento

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de operación de préstamo
30002 | No se recibió el identificador de operación de Acreditación
30004 | No se recuperó el préstamo para el identificador: [Número de identificador]
30005 | No se recuperó la operación para el identificador: [Número de identificador]
30006 | No se recibió el identificador de cliente
30007 | No se recuperó la cuenta para el Identificador de cliente: [Número de identificador]
30008 | El préstamo no pertenece al cliente
30009 | La operación de cobro no pertenece al cliente
30010 | No se recibió el identificador único de operación de cobro
30014 | No existe una empresa con los datos ingresados
30015 | No se pudo resolver la empresa del usuario
30100 | Error en la contabilización
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
      <bts:BTPartners.ContratarPrestamo>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1222A10B1A106FB813BD7AE9</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>3</bts:puntoVentaUId>
            <bts:vendedorUId>56</bts:vendedorUId>
            <bts:partnerUId>23</bts:partnerUId>
         </bts:sdtPartner>
         <bts:operacionUId>32123</bts:operacionUId>
         <bts:cuentaUId>23</bts:cuentaUId>
         <bts:operacionAcreditacionUId>8542</bts:operacionAcreditacionUId>
         <bts:operacionCobroUId>8412</bts:operacionCobroUId>
      </bts:BTPartners.ContratarPrestamo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ContratarPrestamo' \
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
      "vendedorUId": 56,
      "partnerUId": 23
   },
   "operacionUId": 32123,
   "cuentaUId": 23,
   "operacionAcreditacionUId": 8542,
   "operacionCobroUId": 8412
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
      <BTPartners.ContratarPrestamoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
		 <movimientoUId>141</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>864</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.ContratarPrestamo</Servicio>
            <Requerimiento/>
            <Fecha>2017-12-18</Fecha>
            <Hora>17:07:19</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.ContratarPrestamoResponse>
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
	"movimientoUId": "142",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "868",
        "Estado": "OK",
        "Servicio": "BTPartners.ContratarPrestamo",
        "Requerimiento": "",
        "Fecha": "2017-12-18",
        "Hora": "17:15:28",
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