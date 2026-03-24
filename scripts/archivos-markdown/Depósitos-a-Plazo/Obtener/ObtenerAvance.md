---
title: Obtener Avance
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
::: note Método para obtener el avance de un depósito a plazo.

**Nombre publicación:** BTDepositosAPlazo.ObtenerAvance

**Programa:** RBTPG402

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
depositoUId | Long | Identificador único de operación de depósito.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
fechaAlta | Date | Fecha de alta del depósito.
fechaVencimiento | Date | Fecha de vencimiento del depósito.
plazoTranscurrido | Int | Plazo transcurrido del depósito.
plazoTotal | Int | Plazo total del depósito.
porcentajeAvance | Double | Porcentaje de avance del depósito (según el plazo).

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la Cuenta.
30002 | No se recibió el identificador del depósito.
30003 | No existe registro con el identificador indicado.
30004 | No se recuperó la operación para el identificador recibido.
30005 | La operación de depósito no pertenece al cliente ingresado.
40001 | La operación de depósito ingresada no existe.
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
      <bts:BTDepositoAPlazo.ObtenerAvance>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>21226674424A8B5C60A82434</bts:Token>
            <bts:Device>GL</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10003</bts:clienteUId>
         <bts:depositoUId>10121</bts:depositoUId>
      </bts:BTDepositoAPlazo.ObtenerAvance>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositoAPlazo_v1?ObtenerAvance \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "clienteUId": "10003",
   "depositoUId": "10121"
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
      <BTDepositoAPlazo.ObtenerAvanceResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>21226674424A8B5C60A82434</Token>
            <Device>GL</Device>
         </Btinreq>
         <fechaAlta>2016-07-29</fechaAlta>
         <fechaVencimiento>2016-08-29</fechaVencimiento>
         <plazoTranscurrido>17</plazoTranscurrido>
         <plazoTotal>31</plazoTotal>
         <porcentajeAvance>54.84</porcentajeAvance>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTDepositoAPlazo.ObtenerAvance</Servicio>
            <Fecha>2019-08-22</Fecha>
            <Hora>15:23:05</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6689</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTDepositoAPlazo.ObtenerAvanceResponse>
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
   "fechaAlta": "2016-07-29",
   "fechaVencimiento": "2016-08-29",
   "plazoTranscurrido": "17",
   "plazoTotal": "31",
   "porcentajeAvance": "54.84",
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "6689",
      "Estado": "OK",
      "Servicio": "BTDepositoAPlazo.ObtenerAvance",
      "Requerimiento": "1",
      "Fecha": "2019-08-22",
      "Hora": "15:23:05",
      "Canal": "BTDIGITAL"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->