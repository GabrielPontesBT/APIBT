---
title: Modificar Documento Adicional
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
::: note Método para modificar un documento adicional de una persona.

**Nombre publicación:** BTPersonas.ModificarDocumentoAdicional

**Programa:** RBTPG128

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de Persona.
sdtDocumentoAdicional | [sBTDocumentoAdicional](#sbtdocumentoadicional) | Datos de documento adicional.
modo | String | [Hidden: Valor fijo 'UPD' para este método].

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de persona.
30011 | El país del documento adicional no es válido.
30012 | El tipo de documento adicional no es válido.
30013 | Número de Documento incorrecto.
30014 | La fecha de emisión del documento no puede ser anterior a hoy.
30015 | No se recibió fecha de vencimiento del documento
30016 | La fecha de vencimiento del documento no puede ser anterior a hoy
30018 | La persona no posee ese documento adicional.
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
      <bts:BTPersonas.ModificarDocumentoAdicional>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>2e3c830e3a4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:personaId>21</bts:personaId>
         <bts:sdtDocumentoAdicional>
            <bts:fechaEmision>2015-01-01</bts:fechaEmision>
            <bts:tipoDocumento>3</bts:tipoDocumento>
            <bts:fechaVencimiento>2024-01-01</bts:fechaVencimiento>
            <bts:tipoDocumentoDsc></bts:tipoDocumentoDsc>
            <bts:paisDocumentoDsc></bts:paisDocumentoDsc>
            <bts:nroDocumento>TRT00987</bts:nroDocumento>
            <bts:paisDocumento>63</bts:paisDocumento>
         </bts:sdtDocumentoAdicional>
      </bts:BTPersonas.ModificarDocumentoAdicional>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ModificarDocumentoAdicional=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9827b2ac-efc7-deaf-0969-9be9808e05e1' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "personaId": 21,
   "sdtDocumentoAdicional": {
      "fechaEmision": "0000-00-00",
      "tipoDocumento": "3",
      "fechaVencimiento": "2024-01-01",
      "tipoDocumentoDsc": "Pasaporte",
      "paisDocumentoDsc": "ARGENTINA",
      "nroDocumento": "B8789452",
      "paisDocumento": "63"
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
      <BTPersonas.ModificarDocumentoAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>2e3c830e3a4A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>97</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ModificarDocumentoAdicional</Servicio>
            <Requerimiento/>
            <Fecha>2018-05-04</Fecha>
            <Hora>16:25:42</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ModificarDocumentoAdicionalResponse>
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
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "94",
      "Estado": "OK",
      "Servicio": "BTPersonas.ModificarDocumentoAdicional",
      "Requerimiento": "",
      "Fecha": "2018-05-04",
      "Hora": "16:18:26",
      "Canal": "BTDIGITAL"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDocumentoAdicional  

### sBTDocumentoAdicional

::: center 
Los campos del tipo de dato estructurado sBTDocumentoAdicional son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
fechaEmision | Date | Fecha de emisión del documento. 
fechaVencimiento | Date | Fecha de vencimiento del documento. 
nroDocumento | String | Número de documento. 
paisDocumento | Short | Identificador de país del documento. 
paisDocumentoDsc | String | Nombre del país del documento. 
tipoDocumento | Short | Identificador de tipo de documento. 
tipoDocumentoDsc | String | Nombre del tipo de documento. 
:::
<!-- CIERRA SDT -->