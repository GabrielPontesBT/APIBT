---
title: Obtener Personas Jurídicas
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
::: note Método para obtener un listado de personas jurídicas (10 máximo), dada una razón social.

**Nombre publicación:** BTPersonas.ObtenerPersonasJuridicas

**Programa:** RBTPG159

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
razonSocial | String | Razón social.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtPersonasJuridicas | [sBTPersonaJuridica](#sbtpersonajuridica) | Listado de personas jurídicas.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | Campo Razón Social requerido.
40001 | No se encontró ninguna persona jurídica con el patrón de búsqueda ingresado.
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
      <bts:BTPersonas.ObtenerPersonasJuridicas>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1839023315CD285A89A23FBE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:razonSocial>BANCO</bts:razonSocial>
      </bts:BTPersonas.ObtenerPersonasJuridicas>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerPersonasJuridicas' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
		"Device": "GP",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "1839023315CD285A89A23FBE"
	},
   "razonSocial": "BANCO"
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
      <BTPersonas.ObtenerPersonasJuridicasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1839023315CD285A89A23FBE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtPersonasJuridicas>
            <sBTPersonaJuridica>
               <personaUId>10014</personaUId>
               <paisId>845</paisId>
               <pais>URUGUAY</pais>
               <tipoDocumentoId>2</tipoDocumentoId>
               <tipoDocumento>RUT</tipoDocumento>
               <nroDocumento>214567892142</nroDocumento>
               <razonSocial>BANCO MODELO</razonSocial>
               <fechaConstitucion>2007-08-22</fechaConstitucion>
            </sBTPersonaJuridica>
            <sBTPersonaJuridica>
               <personaUId>10015</personaUId>
               <paisId>845</paisId>
               <pais>URUGUAY</pais>
               <tipoDocumentoId>99</tipoDocumentoId>
               <tipoDocumento>Inst. Financiera</tipoDocumento>
               <nroDocumento>47885203</nroDocumento>
               <razonSocial>PROPIO BANCO</razonSocial>
               <fechaConstitucion>0000-00-00</fechaConstitucion>
            </sBTPersonaJuridica>
         </sdtPersonasJuridicas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.ObtenerPersonasJuridicas</Servicio>
            <Fecha>2020-10-20</Fecha>
            <Hora>12:53:17</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7532</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.ObtenerPersonasJuridicasResponse>
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
   "sdtPersonasJuridicas": {
        "sBTPersonaJuridica": [
            {
               "personaUId": "10014",
               "paisId": "845",
               "pais": "URUGUAY",
               "tipoDocumentoId": "2",
               "tipoDocumento": "RUT",
               "nroDocumento": "214567892142",
               "razonSocial": "BANCO MODELO",
               "fechaConstitucion": "2007-08-22",
            },
            {
               "personaUId": "10015",
               "paisId": "845",
               "pais": "URUGUAY",
               "tipoDocumentoId": "99",
               "tipoDocumento": "Inst. Financiera",
               "nroDocumento": "47885203",
               "razonSocial": "PROPIO BANCO",
               "fechaConstitucion": "0000-00-00",
            },
        ]
    },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "80",
      "Estado": "OK",
      "Servicio": "BTPersonas.ObtenerPersonasJuridicas",
      "Fecha": "2018-05-04",
      "Requerimiento": "1",
      "Hora": "15:54:29",
      "Canal": "BTDIGITAL"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPersonaJuridica

### sBTPersonaJuridica

::: center
Los campos del tipo de dato estructurado sBTPersonaJuridica son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
fechaConstitucion | Date | Fecha de constitución. 
nroDocumento | String | Número de documento. 
pais | String | Nombre de país. 
paisId | Short | Identificador de país. 
personaUId | Long | Identificador único de persona. 
razonSocial | String | Razón social. 
tipoDocumento | String | Nombre de tipo de documento. 
tipoDocumentoId | Short | Identificador de tipo de documento. 
:::
<!-- CIERRA SDT -->