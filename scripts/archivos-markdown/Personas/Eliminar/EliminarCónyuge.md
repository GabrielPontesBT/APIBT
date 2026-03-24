---
title: Eliminar Cónyuge
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
::: note Método para eliminar el cónyuge de una persona.

**Nombre publicación:** BTPersonas.EliminarConyuge

**Programa:** RBTPG373

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

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de persona.
31003 | No existe registro para el identificador único.
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
      <bts:BTPersonas.EliminarConyuge>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>101560665CD285A89A23FBEE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>1</bts:personaUId>
      </bts:BTPersonas.EliminarConyuge>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?EliminarConyuge' \
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
	"personaUId": "1"
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
      <BTPersonas.EliminarConyugeResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>101560665CD285A89A23FBEE</Token>
            <Device>MC</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.EliminarConyugeResponse</Servicio>
            <Fecha>2021-11-08</Fecha>
            <Hora>15:41:46</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8673</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.EliminarConyugeResponse>
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
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPersonas.EliminarConyugeResponse", 
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