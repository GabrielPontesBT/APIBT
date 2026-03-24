---
title: Crear Cónyuge
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
::: note Método para crear una persona de forma reducida y asociarla en una relación de cónyuge con otra.

**Nombre publicación:** BTPersonas.CrearConyuge

**Programa:** RBTPG396

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
estadoCivilId | String | Identificador del estado civil.
sdtPersona | [sBTDatosBasicosPersona](#sbtdatosbasicospersona) | Datos del cónyuge.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
personaUIdConyuge | Long | Identificador único del cónyuge.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de persona.
30002 | No se recibió el código de estado civil.
40001 | Debe ingresar País del Documento.
40002 | El País del Documento no existe.
40003 | Debe ingresar Tipo de Documento.
40004 | El Tipo de Documento no existe.
40005 | Debe ingresar Nro de Documento.
40006 | Número de Documento incorrecto.
40007 | Debe ingresar Primer Apellido.
40008 | Debe ingresar Primer Nombre.
40012 | Debe ingresar Sexo.
40016 | Caracteres incorrectos en nombre/apellido.
40051 | La persona ya existe.
70001 | El estado civil ingresado no admite cónyuge.
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
      <bts:BTPersonas.CrearConyuge>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>1</bts:personaUId>
         <bts:estadoCivilId>2</bts:estadoCivilId>
         <bts:sdtPersona>
            <bts:paisDocumentoId>845</bts:paisDocumentoId>
            <bts:paisDocumento></bts:paisDocumento>
            <bts:tipoDocumentoId>1</bts:tipoDocumentoId>
            <bts:tipoDocumento></bts:tipoDocumento>
            <bts:nroDocumento>96900034</bts:nroDocumento>
            <bts:primerApellido>CASTRO</bts:primerApellido>
            <bts:segundoApellido></bts:segundoApellido>
            <bts:primerNombre>MARCOS</bts:primerNombre>
            <bts:segundoNombre></bts:segundoNombre>
            <bts:sexo>M</bts:sexo>
         </bts:sdtPersona>
      </bts:BTPersonas.CrearConyuge>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?CrearConyuge=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 0ccca369-0793-d62f-ebc0-3033cc750dad' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId": "1",
	"estadoCivilId": "2",
	"sdtPersona": {
	  "paisDocumentoId": "845",
	  "tipoDocumentoId": "1",
	  "nroDocumento": "96900034",
	  "primerApellido": "CASTRO",
	  "primerNombre": "MARCOS",
	  "sexo": "M"
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
      <BTPersonas.CrearConyugeResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>879953578CD285A89A23FBEE</Token>
            <Device>MC</Device>
         </Btinreq>
         <personaUIdConyuge>10023</personaUIdConyuge>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.CrearConyuge</Servicio>
            <Fecha>2022-06-02</Fecha>
            <Hora>16:25:37</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.CrearConyugeResponse>
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
    "personaUIdConyuge": "10023",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "827",
        "Estado": "OK",
        "Servicio": "BTPersonas.CrearConyuge",
        "Fecha": "2017-12-17",
        "Requerimiento": "",
        "Hora": "18:47:21",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDatosBasicosPersona  

### sBTDatosBasicosPersona

::: center 
Los campos del tipo de dato estructurado sBTDatosBasicosPersona son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
nroDocumento | String | Número de documento. 
paisDocumento | String | Nombre del país. 
paisDocumentoId | Short | Identificador del país. 
primerApellido | String | Primer apellido. 
primerNombre | String | Primer nombre. 
segundoApellido | String | Segundo apellido. 
segundoNombre | String | Segundo nombre. 
sexo | String | Sexo (M/F). 
tipoDocumento | String | Nombre del tipo de documento. 
tipoDocumentoId | Short | Identificador del tipo de documento. 
:::
<!-- CIERRA SDT -->