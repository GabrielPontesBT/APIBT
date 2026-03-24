---
title: Agregar Teléfono
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
::: note Método para agregar el teléfono de una persona.

**Nombre publicación:** BTPersonas.AgregarTelefono

**Programa:** RBTPG483

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
numeroTelefono | String | Número de teléfono.
tipoTelefonoId | Short | Identificador de tipo de teléfono.
domicilioId | Byte | Identificador de tipo de domicilio.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
telefonoId | Byte | Identificador correlativo de teléfono.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de persona.
30002 | Debe ingresar al menos un teléfono.
30005 | No se recibió el tipo del teléfono.
30006 | No se recibió el código del domicilio.
40002 | No existe persona con los datos ingresados.
40003 | El número del teléfono es incorrecto (es muy corto).
40004 | El número del teléfono es incorrecto (es muy largo).
40005 | El número del teléfono no acepta caracteres.
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
      <bts:BTPersonas.AgregarTelefono>
         <bts:Btinreq>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>A088577A8D1E89A20E6EF27D</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>61</bts:personaUId>
         <bts:numeroTelefono>099274742</bts:numeroTelefono>
         <bts:tipoTelefonoId>2</bts:tipoTelefonoId>
         <bts:domicilioId>1</bts:domicilioId>
      </bts:BTPersonas.AgregarTelefono>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?AgregarTelefono' \
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
	"personaUId": "61",
   "numeroTelefono": "099274742",
   "tipoTelefonoId": "2",
   "domicilioId": "1",
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
      <BTPersonas.AgregarTelefonoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>A088577A8D1E89A20E6EF27D</Token>
         </Btinreq>
         <telefonoId>1</telefonoId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>10268</Numero>
            <Servicio>BTPersonas.AgregarTelefono</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-05</Fecha>
            <Hora>10:47:23</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.AgregarTelefonoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": "AV",
      "Usuario": "MINSTALADOR",
      "Token": "fa2c02c95a4A8B5C60A82434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "Btoutreq": {
      "Numero": "111397",
      "Estado": "OK",
      "Servicio": "BTPersonas.AgregarTelefono",
      "Requerimiento": "1",
      "Fecha": "2021-10-15",
      "Canal": "BTDIGITAL",
      "Hora": "13:14:15"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->