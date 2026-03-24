---
title: Obtener Documento Digital
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
::: note Método para obtener los datos de un documento digital de una persona.

**Nombre publicación:** BTPersonas.ObtenerDocumentoDigital

**Programa:** RBTPG193

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
documentoId | Long | Identificador de documento.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtDocumentosDigitales | [sBTVersionDocumentoDigital](#sbtversiondocumentodigital) | Datos de documento digital.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la persona.
30002 | No se recibió el identificador de documento.
30024 | No existe registro para el identificador único.
30031 | El documento digital no existe.
30032 | Ocurrió un error al obtener la última versión del documento.
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
      <bts:BTPersonas.ObtenerDocumentoDigital>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0868626a064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>10.12.10.159</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>21</bts:personaUId>
         <bts:documentoId>115</bts:documentoId>
      </bts:BTPersonas.ObtenerDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDocumentoDigital=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 44ba1342-ce61-303e-bd55-62945147dfe0' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId": "21",
	"documentoId": "115"
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
      <BTPersonas.ObtenerDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0868626a064A8B5C60A82434</Token>
         </Btinreq>
         <sdtDocumentosDigitales>
            <sBTVersionDocumentoDigital>
               <FechaEmision>2010-10-10</FechaEmision>
               <Archivo>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</Archivo>
               <FechaVencimiento>2020-10-10</FechaVencimiento>
               <TipoDocumentoDigital>Recibo de Aguinaldo</TipoDocumentoDigital>
               <Version>1</Version>
               <Nombre>ejemplo</Nombre>
               <Instancia>115</Instancia>
            </sBTVersionDocumentoDigital>
         </sdtDocumentosDigitales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>881</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerDocumentoDigital</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-13</Fecha>
            <Hora>13:08:28</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerDocumentoDigitalResponse>
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
   "sdtDocumentosDigitales": {
      "sBTVersionDocumentoDigital": [ {
          "FechaEmision": "2010-10-10",
          "Archivo": "RG9jdW1lbnRvIGRlIGVqZW1wbG8=",
          "FechaVencimiento": "2020-10-10",
          "TipoDocumentoDigital": "Recibo de Aguinaldo",
          "Version": 1,
          "Nombre": "ejemplo",
          "Instancia": 115
      } ]
   },
   "Erroresnegocio": {
       "BTErrorNegocio": []
   },
   "Btoutreq": {
       "Numero": 882,
       "Estado": "OK",
       "Servicio": "BTPersonas.ObtenerDocumentoDigital",
       "Requerimiento": "1",
       "Fecha": "2018-11-13",
       "Hora": "13:09:46",
       "Canal": "BTDIGITAL"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTVersionDocumentoDigital  

### sBTVersionDocumentoDigital

::: center 
Los campos del tipo de dato estructurado sBTVersionDocumentoDigital son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
archivo | String | Documento digital codificado en base 64. 
documentoId | Long | Identificador del documento digital. 
fechaEmision | Date | Fecha de emisión del documento digital. 
fechaVencimiento | Date | Fecha de Vencimiento del documento digital. 
instancia | Long | Título del documento digital. 
nombre | String | Nombre del documento digital. 
tipoDocumentoDigital | String | Tipo del documento digital. 
version | Int | Número de versión del documento digital. 
:::
<!-- CIERRA SDT -->