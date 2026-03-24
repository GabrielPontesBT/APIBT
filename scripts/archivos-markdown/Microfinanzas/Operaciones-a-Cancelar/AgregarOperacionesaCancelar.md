---
title: Agregar Operaciones a Cancelar
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
::: note Método para agregar operaciones a cancelar para una solicitud de créditos.

**Nombre publicación:** BTMicrofinanzas.AgregarOperacionesACancelar

**Programa:** RBTPG362

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
solicitudUId | Long | Identificador de instancia Workflow.
clienteUId | Long | Identificador único del cliente.
sdtOperaciones | [sBTOperacionId](#sbtoperacionid) | Listado de operaciones.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
montoCancelacion | Double | Monto de cancelación de la operación.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de solicitud.
30002 | No se recibió el identificador de cliente.
30003 | No se recibió ninguna operación para ampliar.
30004 | No se recuperó la cuenta para el identificador de cliente: [Número de identificador].
30005 | No se recuperó la operación para el identificador: [Número de identificador].
40001 | La solicitud ingresada no existe.
40002 | El cliente ingresado no corresponde con la solicitud.
40003 | El máximo de créditos a cancelar no puede ser mayor a [Número parametrizado].
40004 | La operación ingresada ya fue dada de alta previamente.
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
      <bts:BTMicrofinanzas.AgregarOperacionesACancelar>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>16c1cc9b534A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:solicitudUId>11887</bts:solicitudUId>
         <bts:clienteUId>862</bts:clienteUId>
         <bts:sdtOperaciones>
            <bts:sBTOperacionId>
               <bts:operacionUId>1727</bts:operacionUId>
            </bts:sBTOperacionId>
         </bts:sdtOperaciones>
      </bts:BTMicrofinanzas.AgregarOperacionesACancelar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas?AgregarOperacionesACancelar' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "GP",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cc9b534A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"solicitudUId": "11887",
	"clienteUId": "862",
	"sdtOperaciones": {
	  "sBTOperacionId": {
		"operacionUId": "1727"
      },
   },
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
      <BTMicrofinanzas.AgregarOperacionesACancelarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>16c1cc9b534A8B5C60A82434</Token>
         </Btinreq>
         <montoCancelacion>511820.42</montoCancelacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>111401</Numero>
            <Estado>OK</Estado>
            <Servicio>BTMicrofinanzas.AgregarOperacionesACancelar</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2021-10-15</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>14:56:43</Hora>
         </Btoutreq>
      </BTMicrofinanzas.AgregarOperacionesACancelarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
   "Btinreq": { 
      "Device": "GP", 
      "Usuario": "MINSTALADOR", 
      "Token": "16c1cc9b534A8B5C60A82434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
   "montoCancelacion": "511820.42", 
   "Erroresnegocio": { 
   }, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTMicrofinanzas.AgregarOperacionesACancelar", 
      "Fecha": "2021-10-28", 
      "Hora": "15:39:53", 
      "Requerimiento": "1", 
      "Numero": "11003", 
      "Estado": "OK" 
   } 
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTOperacionId  

### sBTOperacionId

::: center 
Los campos del tipo de dato estructurado sBTOperacionId son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
operacionUId | Long | Identificador único de operación.
:::
<!-- CIERRA SDT -->