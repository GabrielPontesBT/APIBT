---
title: Obtener Chequera
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
::: note Método para obtener los datos de una chequera de una cuenta corriente.

**Nombre publicación:** BTCuentasCorrientes.ObtenerChequera

**Programa:** RBTPG240

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
chequeraId | Long | Identificador de la solicitud de chequera

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtDatosChequera | [sBTDatosChequera](#sbtdatoschequera) | Datos de la chequera

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de chequera
30002 | No existe chequera con el identificador ingresado
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
      <bts:BTCuentasCorrientes.ObtenerChequera>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>93f61d299b4A8B</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:chequeraId>37</bts:chequeraId>
      </bts:BTCuentasCorrientes.ObtenerChequera>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerChequera' \
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
	"chequeraId":"37"
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
      <BTCuentasCorrientes.ObtenerChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>93f61d299b4A8B</Token>
         </Btinreq>
         <sdtDatosChequera>
            <totalCheques>25</totalCheques>
            <estado>SOLICITADA</estado>
            <chequeInicial>2226</chequeInicial>
            <titular>SOSA PEREZ ANA</titular>
            <cantidadLibretas>1</cantidadLibretas>
            <empresa>1</empresa>
            <operacionUId>2</operacionUId>
            <tipoId>1</tipoId>
            <tipo>Chequera Común 25 / Pesos</tipo>
            <estadoId>1</estadoId>
            <solicitud>37</solicitud>
         </sdtDatosChequera>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8418</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.ObtenerChequera</Servicio>
            <Fecha>2019-05-07</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>13:20:16</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerChequeraResponse>
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
	"sdtDatosChequera": {
		"totalCheques": 25,
		"estado": "SOLICITADA",
		"chequeInicial": 2226,
		"titular": "SOSA PEREZ ANA",
		"cantidadLibretas": 1,
		"empresa": 1,
		"operacionUId": 2,
		"tipoId": 1,
		"tipo": "Chequera Común 25 / Pesos",
		"solicitud": 37  
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8418,
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.ObtenerChequera",
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
::: details sBTDatosChequera  

### sBTDatosChequera

::: center 
Los campos del tipo de dato estructurado sBTDatosChequera son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
cantidadLibretas | Short | Cantidad de libretas. 
chequeInicial | Int | Cheque inicial.
empresa | Short | Empresa de emisión de la chequera. 
estado | String | Estado actual de la solicitud de la chequera. 
estadoId | Short | Identificador del estado de la solicitud de la chequera. 
operacionUId | Long | Identificador único de operación de subcuenta. 
solicitud | Long | Identificador de la solicitud de chequera. 
tipo | String | Tipo de chequera. 
tipoId | Short | Identificador de tipo de chequera.
titular | String | Titular de la cuenta. 
totalCheques | Short | Cantidad de cheques de la chequera.
:::
<!-- CIERRA SDT -->