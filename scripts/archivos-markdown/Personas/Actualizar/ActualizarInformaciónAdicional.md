---
title: Actualizar Información Adicional
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
::: note Método para actualizar la información adicional de una persona.

**Nombre publicación:** BTPersonas.ActualizarInformacionAdicional

**Programa:** RBTPG517

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
sdtInformacionAdicional | [sBTDatoLista](#sbtdatolista) | Listado de datos.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de persona.
40002 | El atributo [Identificador de información adicional] no existe.
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
      <bts:BTPersonas.ActualizarInformacionAdicional>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>55F1760133464FCBE2F3DD80</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>204</bts:personaUId>
         <bts:sdtInformacionAdicional>
            <bts:sBTDatoLista>
               <bts:clave>Residencia</bts:clave>
               <bts:valor>Si</bts:valor>
            </bts:sBTDatoLista>
         </bts:sdtInformacionAdicional>
      </bts:BTPersonas.ActualizarInformacionAdicional>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ActualizarInformacionAdicional' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cFC33CD93505A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"personaUId": 204,
        "sdtInformacionAdicional": {
          "sBTDatoLista": {
            "clave": "Residencia",
            "valor": "Si"
          }
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
      <BTPersonas.ActualizarInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>55F1760133464FCBE2F3DD80</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>10573</Numero>
            <Servicio>BTPersonas.ActualizarInformacionAdicional</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-10</Fecha>
            <Hora>12:21:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ActualizarInformacionAdicionalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },

   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPersonas.ActualizarInformacionAdicional",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "12:21:52"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDatoLista  

### sBTDatoLista

::: center 
Los campos del tipo de dato estructurado sBTDatoLista son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clave | String | Identificador de información adicional. 
valor | String | Valor de información adicional. 
:::
<!-- CIERRA SDT -->