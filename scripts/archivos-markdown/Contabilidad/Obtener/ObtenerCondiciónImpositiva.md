---
title: Obtener Condición Impositiva
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
::: note Método para obtener una condición impositiva de una persona.

**Nombre publicación:** BTContabilidad.ObtenerCondicionImpositiva

**Programa:** RBTPG533

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
codigoImpuesto | Short | Código de impuesto.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
codigoCondicion | Short | Código de condición.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de persona.
30002 | No se recibió el código del impuesto.
40004 | Condición por Impuesto/Persona inexistente.
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
      <bts:BTContabilidad.ObtenerCondicionImpositiva>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>E1F15D391E5C8FAC4189A627</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>202</bts:personaUId>
         <bts:codigoImpuesto>1</bts:codigoImpuesto>
      </bts:BTContabilidad.ObtenerCondicionImpositiva>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerCondicionImpositiva=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \
  -d '{
  	"Btinreq": {
		"Device": "GZ",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "2081397563CD285A89A23FBE"
	},
	"personaUId": 202,
	"codigoImpuesto": 1,
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
      <BTContabilidad.ObtenerCondicionImpositivaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>E1F15D391E5C8FAC4189A627</Token>
         </Btinreq>
         <codigoCondicion>1</codigoCondicion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16883</Numero>
            <Estado>OK</Estado>
            <Servicio>BTContabilidad.ObtenerCondicionImpositiva</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-10-30</Fecha>
            <Hora>14:20:13</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTContabilidad.ObtenerCondicionImpositivaResponse>
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
	  "Token": "761768101CD285A89A23FBEE",
	  "Device": "GP"
	},
    "codigoCondicion": 1,
	"Erroresnegocio": {
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTContabilidad.ObtenerCondicionImpositiva",
	  "Fecha": "2021-02-05",
	  "Hora": "13:37:57",
	  "Requerimiento": "1",
	  "Numero": "7984",
	  "Estado": "OK"
	}
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->