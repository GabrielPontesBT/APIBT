---
title: Obtener Cónyuge
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
::: note Método para obtener los datos del cónyuge de una persona física.

**Nombre publicación:** BTPersonas.ObtenerConyuge

**Programa:** RBTPG290

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador de persona.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
apellidoMatrimonio | String | Apellido de matrimonio
sdtDatosConyuge | [sBTDatosConyuge](#sbtdatosconyuge) | Datos del cónyuge.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de persona.
30002 | El identificador no corresponde a una persona física.
30013 | No existe registro para el identificador único.
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
      <bts:BTPersonas.ObtenerConyuge>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>170320211539200000477790</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>2</bts:personaUId>
      </bts:BTPersonas.ObtenerConyuge>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerConyuge' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
  	"bts:Btinreq": {
	  "bts:Canal": "BTDIGITAL",
	  "bts:Requerimiento": "1",
	  "bts:Usuario": "INSTALADOR",
	  "bts:Token": "170320211539200000477790",
	  "bts:Device": "AC"
	},
	"personaUId": 2,
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
      <BTPersonas.ObtenerConyugeResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>170320211539200000477790</Token>
            <Device>AC</Device>
         </Btinreq>
         <apellidoMatrimonio/>
         <sdtDatosConyuge>
            <personaUId>18</personaUId>
            <primerNombre>PEDRO</primerNombre>
            <segundoNombre/>
            <primerApellido>CRAMPET</primerApellido>
            <segundoApellido/>
         </sdtDatosConyuge>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.ObtenerConyuge</Servicio>
            <Fecha>2021-03-17</Fecha>
            <Hora>15:44:26</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10689</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.ObtenerConyugeResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "INSTALADOR",
	  "Token": "170320211539200000477790",
	  "Device": "AC"
	},
	"apellidoMatrimonio":"",
	"sdtDatosConyuge": {
	  "personaUId": "18",
	  "primerNombre": "PEDRO",
	  "segundoNombre": "",
	  "primerApellido": "CRAMPET",
	  "segundoApellido": ""
	},
	"Erroresnegocio": {
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTPersonas.ObtenerConyuge",
	  "Fecha": "2021-03-17",
	  "Hora": "15:44:26",
	  "Requerimiento": "1",
	  "Numero": "10689",
	  "Estado": "OK"
	}
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDatosConyuge  

### sBTDatosConyuge

::: center 
Los campos del tipo de dato estructurado sBTDatosConyuge son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
personaUId | Long | Identificador del cónyuge.
primerApellido | String | Primer apellido del cónyuge. 
primerNombre | String | Primer nombre del cónyuge.
segundoApellido | String | Segundo apellido del cónyuge. 
segundoNombre | String | Segundo nombre del cónyuge. 
:::
<!-- CIERRA SDT -->