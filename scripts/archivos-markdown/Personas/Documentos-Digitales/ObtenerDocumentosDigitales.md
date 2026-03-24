---
title: Obtener Documentos Digitales
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
::: note Método para obtener un listado de los documentos digitales de una persona.

**Nombre publicación:** BTPersonas.ObtenerDocumentosDigitales

**Programa:** RBTPG179

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
sdtDocumentosDigitales | [sBTDocumentoDigital](#sbtdocumentodigital) | Listado de Documentos Digitales.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la persona.
30023 | No existe registro para el identificador único.
30050 | La persona indicada no existe.
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
      <bts:BTPersonas.ObtenerDocumentosDigitales>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0868626a064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>10.12.10.159</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>22</bts:personaUId>
      </bts:BTPersonas.ObtenerDocumentosDigitales>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDocumentosDigitales=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: a12f013d-9875-6451-dd62-ad7bb0217b5c' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId": "22"
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
      <BTPersonas.ObtenerDocumentosDigitalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0868626a064A8B5C60A82434</Token>
         </Btinreq>
         <documentosDigitales>
            <sBTDocumentoDigital>
               <Titulo>C.I</Titulo>
               <FechaActualizacion>2017-03-30</FechaActualizacion>
               <FechaVencimiento>2018-03-30</FechaVencimiento>
               <TipoDocumentoDigital>Cédula de Identidad</TipoDocumentoDigital>
               <documentoId>83</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>C.I 2</Titulo>
               <FechaActualizacion>2017-03-30</FechaActualizacion>
               <FechaVencimiento>2018-03-30</FechaVencimiento>
               <TipoDocumentoDigital>Cédula de Identidad</TipoDocumentoDigital>
               <documentoId>84</documentoId>
            </sBTDocumentoDigital>
         </documentosDigitales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>770</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerDocumentosDigitales</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-12</Fecha>
            <Hora>16:15:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerDocumentosDigitalesResponse>
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
    "documentosDigitales": {
        "sBTDocumentoDigital": [
            {
                "Titulo": "C.I",
                "FechaActualizacion": "2017-03-30",
                "FechaVencimiento": "2018-03-30",
                "TipoDocumentoDigital": "Cédula de Identidad",
                "DocumentoId": 83
            },
            {
                "Titulo": "C.I 2",
                "FechaActualizacion": "2017-03-30",
                "FechaVencimiento": "2018-03-30",
                "TipoDocumentoDigital": "Cédula de Identidad",
                "DocumentoId": 84
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 773,
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerDocumentosDigitales",
        "Requerimiento": "1",
        "Fecha": "2018-11-12",
        "Hora": "16:17:09",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDocumentoDigital  

### sBTDocumentoDigital

::: center 
Los campos del tipo de dato estructurado sBTDocumentoDigital son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
documentoId | Long | Identificador del documento digital. 
fechaActualizacion | Date | Fecha de actualización del documento digital. 
fechaVencimiento | Date | Fecha de vencimiento del documento digital. 
tipoDocumentoDigital | String | Tipo del documento digital. 
titulo | String | Título del documento digital. 
:::
<!-- CIERRA SDT -->