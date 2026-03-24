---
title: Obtener Datos PEP
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
::: note Método para obtener los datos de una persona expuesta políticamente.

**Nombre publicación:** BTPersonas.ObtenerDatosPEP

**Programa:** RBTPG229

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
esPEP | String | Es persona políticamente expuesta? (S/N).

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de persona.
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
      <bts:BTPersonas.ObtenerDatosPEP>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>110220211247090000683511</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>1</bts:personaUId>
      </bts:BTPersonas.ObtenerDatosPEP>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDatosPEP=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \
  -d '{
  	"Btinreq": {
		"Device": "GP",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "2081397563CD285A89A23FBE"
	},
	"personaUId": 1
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
      <BTPersonas.ObtenerDatosPEPResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>110220211247090000683511</Token>
            <Device>GP</Device>
         </Btinreq>
         <esPEP>S</esPEP>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.ObtenerDatosPEP</Servicio>
            <Fecha>2021-02-11</Fecha>
            <Hora>12:48:16</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10595</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.ObtenerDatosPEPResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "110220211247090000683511",
	  "Device": "GP"
	},
	"esPEP": "S",
	"Erroresnegocio": {
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTPersonas.ObtenerDatosPEP",
	  "Fecha": "2021-02-11",
	  "Hora": "12:48:16",
	  "Requerimiento": "1",
	  "Numero": "10595",
	  "Estado": "OK"
	}
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDatosPEP  

### sBTDatosPEP

::: center 
Los campos del tipo de dato estructurado sBTDatosPEP son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
cargoRelacion | String | Cargo que ocupa. 
entidad | String | Entidad. 
fechaInicio | Date | Fecha de inicio. 
fechaSalida | Date | Fecha de salida. 
observacion | String | Observación. 
:::
<!-- CIERRA SDT -->