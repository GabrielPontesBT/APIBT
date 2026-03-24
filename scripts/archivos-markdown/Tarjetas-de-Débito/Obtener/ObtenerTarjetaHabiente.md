---
title: Obtener Tarjeta Habiente
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
::: note Método para obtener el habiente de una tarjeta.

**Nombre publicación:** BTTarjetasDeDebito.ObtenerTarjetaHabiente

**Programa:** RBTPG357

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
tarjetaUId | Long | Identificador único de tarjeta de débito.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtTarjetaHabiente | [sBTTitularTarjeta](#sbttitulartarjeta) | Datos del titular de la tarjeta.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el Identificador de tarjeta.
40001 | No existe registro para el número de tarjeta.
40002 | No existe registro de país.
40003 | No existe registro para el tipo de documento de la persona.
40004 | No existe registro para el titular de la tarjeta.
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
      <bts:BTTarjetasDeDebito.ObtenerTarjetaHabiente>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GP</bts:Device>
            <bts:Token>65386256C895CD01D7DC796E</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:tarjetaUId>2000001942</bts:tarjetaUId>
      </bts:BTTarjetasDeDebito.ObtenerTarjetaHabiente>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \   
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerTarjetaHabiente' \ 
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
	"tarjetaUId": "2000001942",
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
      <BTTarjetasDeDebito.ObtenerTarjetaHabienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>65386256C895CD01D7DC796E</Token>
         </Btinreq>
         <sdtTarjetaHabiente>
            <numeroDocumento>46600107</numeroDocumento>
            <tipoDocumento>Cédula Identidad</tipoDocumento>
            <personaUid>122</personaUid>
            <nombre>PEREZ SOSA JUAN</nombre>
            <paisDocumento>URUGUAY</paisDocumento>
         </sdtTarjetaHabiente>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>12044</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTarjetasDeDebito.ObtenerTarjetaHabiente</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-23</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>15:19:22</Hora>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerTarjetaHabienteResponse>
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
    "sdtTarjetaHabiente": {
        "numeroDocumento": "46600107",
        "tipoDocumento": "Cédula Identidad",
        "personaUId": "122",
        "nombre": "PEREZ SOSA JUAN",
        "paisDocumento": "URUGUAY"
    },
    "Btoutreq": {
        "Numero": 823,
        "Estado": "OK",
        "Servicio": "BTTarjetasDeDebito.ObtenerTarjetaHabiente",
        "Requerimiento": "1",
        "Fecha": "2018-11-12",
        "Hora": "17:47:27",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTitularTarjeta  

### sBTTitularTarjeta

::: center 
Los campos del tipo de dato estructurado sBTTitularTarjeta son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
nombre | String | Nombre de la persona. 
numeroDocumento | String | Número de documento. 
paisDocumento | String | País del documento. 
personaUId | Long | Identificador único de la persona. 
tipoDocumento | String | Tipo de documento. 
:::
<!-- CIERRA SDT -->