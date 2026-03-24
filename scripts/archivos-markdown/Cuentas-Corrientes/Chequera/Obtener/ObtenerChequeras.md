---
title: Obtener Chequeras
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
::: note Método para obtener un listado de las chequeras activas de una cuenta corriente.

**Nombre publicación:** BTCuentasCorrientes.ObtenerChequeras

**Programa:** RBTPG010

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtChequeras | [sBTChequerasCC](#sbtchequerascc) | Listado de chequeras.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de Operación.
30002 | No se recuperó la operación para el identificador.
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
      <bts:BTCuentasCorrientes.ObtenerChequeras>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>81</bts:operacionUId>
      </bts:BTCuentasCorrientes.ObtenerChequeras>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerChequeras=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6ac0ee72-d095-6a5a-e735-c5fe1a6935af' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 81
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
      <BTCuentasCorrientes.ObtenerChequerasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>407fce50864A8B5C60A82434</Token>
         </Btinreq>
         <sdtChequeras>
            <chequera></chequera>
            <productoUId>81</productoUId>
            <cantidad>0</cantidad>
         </sdtChequeras>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>992</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.ObtenerChequeras</Servicio>
            <Fecha>2017-12-26</Fecha>
            <Requerimiento/>
            <Hora>11:16:17</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerChequerasResponse>
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
    "sdtChequeras": {
        "chequera": {
            "sBTChequera": []
        },
        "productoUId": "81",
        "cantidad": "0"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "993",
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.ObtenerChequeras",
        "Fecha": "2017-12-26",
        "Requerimiento": "",
        "Hora": "11:19:27",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTChequerasCC  

### sBTChequerasCC

::: center 
Los campos del tipo de dato estructurado sBTChequerasCC son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
cantidad | Int | Cantidad de chequeras. 
chequera | [sBTChequera](#sbtchequera) | Datos de Chequera. 
productoUId | Long | Identificador único de producto. 

### sBTChequera

Los campos del tipo de dato estructurado sBTChequera son los siguientes:

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
cantidadCheques | Short | Cantidad de cheques. 
chequeInicial | Int | Número de cheque en el cual inicia la chequera. 
chequesDisponibles | Short | Cantidad de cheques disponibles. 
estado | String | estado de chequera. 
fechaAlta | Date | Fecha de alta. 
tipo | String | tipo de chequera. 
:::
<!-- CIERRA SDT -->