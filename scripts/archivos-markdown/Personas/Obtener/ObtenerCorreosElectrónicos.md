---
title: Obtener Correos Electrónicos
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
::: note Método para obtener un listado de los correos electrónicos de una persona.

**Nombre publicación:** BTPersonas.ObtenerCorreosElectronicos

**Programa:** RBTPG022

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
sdtCorreoElectronicos | [sBTCorreoElectronico](#sbtcorreoelectronico) | Listado de correos electrónicos.

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
      <bts:BTPersonas.ObtenerCorreosElectronicos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>41</bts:personaUId>
      </bts:BTPersonas.ObtenerCorreosElectronicos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerCorreosElectronicos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6cf24036-2d8c-85bd-13c6-f3c4d14533c4' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "personaUId": 41
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
      <BTPersonas.ObtenerCorreosElectronicosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtCorreoElectronicos>
            <sBTCorreoElectronico>
               <correlativo>1</correlativo>
               <correoElectronico>CD@GMAIL.COM</correoElectronico>
            </sBTCorreoElectronico>
         </sdtCorreoElectronicos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>816</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerCorreosElectronicos</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>18:35:23</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerCorreosElectronicosResponse>
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
   "sdtCorreoElectronicos": {
      "sBTCorreoElectronico": [ {
         "correoElectronico": "CD@GMAIL.COM",
         "correlativo": "1"
      } ]
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "818",
      "Estado": "OK",
      "Servicio": "BTPersonas.ObtenerCorreosElectronicos",
      "Fecha": "2017-12-17",
      "Requerimiento": "",
      "Hora": "18:36:33",
      "Canal": "BTDIGITAL"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCorreoElectronico  

### sBTCorreoElectronico

::: center 
Los campos del tipo de dato estructurado sBTCorreoElectronico son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
correlativo | Int | Correlativo de correo electrónico. 
correoElectronico | String | Correo electrónico.
:::
<!-- CIERRA SDT -->