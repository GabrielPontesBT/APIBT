---
title: Solicitar Chequera
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
::: note Método para solicitar una chequera para una cuenta corriente.

**Nombre publicación:** BTCuentasCorrientes.SolicitarChequera

**Programa:** RBTPG242

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación de subcuenta.
tipoCheque | Double | Tipo de chequera a solicitar.
cantidadLibretas | Double | Cantidad de libretas a solicitar.
datosSolicitud | [sBTSolicitudChequera](#sbtsolicitudchequera) | Datos de solicitud de chequera.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
chequeraId | Long | Identificador de la solicitud de chequera.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de operación.
40003 | El tipo de chequera a agregar es incorrecto.
40004 | El tipo de chequera a agregar es incorrecto para el módulo.
40005 | La subcuenta no tiene estado normal.
40007 | El tipo de chequera a agregar es incorrecto para el producto.
40008 | Usuario no autorizado.
40010 | La cuenta no tiene habilitada la entrega de chequeras.
40011 | Debe indicar la cantidad de libretas.
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
      <bts:BTCuentasCorrientes.SolicitarChequera>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>c5b241f7334A8</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:operacionUId>2</bts:operacionUId>
         <bts:tipoCheque>1</bts:tipoCheque>
         <bts:cantidadLibretas>1</bts:cantidadLibretas>
         <bts:datosSolicitud>
            <bts:persona1Texto1>D.N.I. 123456</bts:persona1Texto1>
            <bts:persona1Texto2>Juan Perez</bts:persona1Texto2>
            <bts:persona2Texto1></bts:persona2Texto1>
            <bts:persona2Texto2></bts:persona2Texto2>  
            <bts:persona3Texto1></bts:persona3Texto1>  
            <bts:persona3Texto2></bts:persona3Texto2>  
            <bts:domicilio>Avenida Italia 2145</bts:domicilio>
            <bts:sucuraslDeRetiroId></bts:sucuraslDeRetiroId>
         </bts:datosSolicitud>
      </bts:BTCuentasCorrientes.SolicitarChequera>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?SolicitarChequera' \
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
	"operacionUId":"2",
   "tipoCheque":"1",
   "cantidadLibretas":"1",
   "bts:datosSolicitud": {
          "bts:persona1Texto1": "D.N.I. 123456",
          "bts:persona1Texto2": "Juan Perez",
          "bts:persona2Texto1": " ",
          "bts:persona2Texto2": " ",
          "bts:persona3Texto1": " ",
          "bts:persona3Texto2": " ",
          "bts:domicilio": "Avenida Italia 2145",
          "bts:sucuraslDeRetiroId": " "
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
      <BTCuentasCorrientes.SolicitarChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.118</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>c5b241f7334A8</Token>
         </Btinreq>
         <chequeraId>32</chequeraId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8396</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.SolicitarChequera</Servicio>
            <Fecha>2019-05-07</Fecha>
            <Hora>12:59:00</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.SolicitarChequeraResponse>
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
	"chequeraId": 32,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.SolicitarChequera",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSolicitudChequera  

### sBTSolicitudChequera

::: center 
Los campos del tipo de dato estructurado sBTSolicitudChequera son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
domicilio | String | Domicilio a enviar la chequera. 
persona1Texto1 | String | Información persona 1. 
persona1Texto2 | String | Información complementaria persona 1. 
persona2Texto1 | String | Información persona 2. 
persona2Texto2 | String | Información complementaria persona 2. 
persona3Texto1 | String | Información persona 3. 
persona3Texto2 | String | Información complementaria persona 3. 
sucuraslDeRetiroId | Int | Identificador de la sucursal de retiro. 
:::
<!-- CIERRA SDT -->