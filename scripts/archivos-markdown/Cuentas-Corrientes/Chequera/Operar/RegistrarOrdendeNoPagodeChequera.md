---
title: Registrar Orden de No Pago de Chequera
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
::: note Método para registrar una orden de no pago de una chequera.

**Nombre publicación:** BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequera

**Programa:** RBTPG244

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación de subcuenta.
chequeraId | Long | Identificador de solicitud de chequera.
tipoDenunciante | String | Tipo de denunciante.
tipoDenuncia | String | Tipo de denuncia.
motivoDenuncia | String | Motivo de la denuncia.
chequeDesde | Long | Número de cheque inicial de la chequera.
chequeHasta | Long | Número de cheque final de la chequera.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
numeroDenuncia | Long | Identificador de la denuncia.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de operación.
30002 | No se recibió identificador de chequera.
30011 | No se recupero la operación para el identificador recibido.
40002 | No existe la operación indicada.
40003 | La chequera no pertenece a la operación.
40004 | La cuenta no esta habilitada.
40005 | La chequera no se encuentra activa.
40006 | Cuenta Cerrada, solo se permite consultas.
40008 | El cheque DESDE debe ser menor/igual que el HASTA.
40009 | El cheque DESDE debe ser mayor/igual que el INICIAL de la chequera.
40010 | El cheque HASTA debe ser mayor/igual que el INICIAL de la chequera.
40011 | El cheque DESDE debe ser menor/igual que el ULTIMO de la chequera.
40012 | El cheque HASTA debe ser menor/igual que el ULTIMO de la chequera.
40013 | El cheque [Número de cheque] ya está pago.
40014 | El cheque [Número de cheque] ya tiene O.N.P.
40015 | El cheque [Número de cheque] está rechazado.
40016 | El cheque [Número de cheque] esta certificado.
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
      <bts:BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequera>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1820366692F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>10176</bts:operacionUId>
         <bts:chequeraId>21</bts:chequeraId>
         <bts:tipoDenunciante>A</bts:tipoDenunciante>
         <bts:tipoDenuncia>E</bts:tipoDenuncia>
         <bts:motivoDenuncia>P</bts:motivoDenuncia>
         <bts:chequeDesde>1326</bts:chequeDesde>
         <bts:chequeHasta>1350</bts:chequeHasta>
      </bts:BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequera>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?RegistrarOrdenDeNoPagoChequera' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1820366692F955E77534D3E0",
	  "Device": "AC"
	},
	"operacionUId": "10176",
	"chequeraId": "21",
	"tipoDenunciante": "A",
	"tipoDenuncia": "E",
	"motivoDenuncia": "P",
	"chequeDesde": "1326",
	"chequeHasta": "1350"
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
      <BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1820366692F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <numeroDenuncia>1</numeroDenuncia>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequera</Servicio>
            <Fecha>2020-11-13</Fecha>
            <Hora>11:20:03</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7888</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequeraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1820366692F955E77534D3E0",
	  "Device": "AC"
	},
	"numeroDenuncia": "1",
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequera",
	  "Fecha": "2020-11-13",
	  "Hora": "11:20:03",
	  "Requerimiento": "1",
	  "Numero": "7888",
	  "Estado": "OK"
	}
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->