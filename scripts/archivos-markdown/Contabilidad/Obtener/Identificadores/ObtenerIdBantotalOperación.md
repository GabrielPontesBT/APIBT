---
title: Obtener Identificador Bantotal de Operación
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
::: note Método para obtener la clave de identificación Bantotal de una operación.

**Nombre publicación:** BTContabilidad.ObtenerIdBantotalOperacion

**Programa:** RBTPG369

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
empresa | Short | Identificador de empresa.
sucursalId | Int | Identificador de sucursal.
moduloId | Int | Identificador de módulo.
monedaId | Short | Identificador de moneda.
papelId | Int | Identificador de papel.
cuenta | Int | Número de cuenta.
operacionId | Int | Identificador de operación.
subOperacionId | Int | Identificador de sub operación.
tipoOperacionId | Short | Identificador de tipo de operación.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de operación.
30002 | No existe registro para el identificador de operación ingresado.
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
      <bts:BTContabilidad.ObtenerIdBantotalOperacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>281020211424260000881155</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>3</bts:operacionUId>
      </bts:BTContabilidad.ObtenerIdBantotalOperacion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad?ObtenerIdBantotalOperacion' \
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
	"operacionUId": "3"
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
      <BTContabilidad.ObtenerIdBantotalOperacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>281020211424260000881155</Token>
            <Device>GP</Device>
         </Btinreq>
         <empresa>1</empresa>
         <sucursalId>1</sucursalId>
         <moduloId>522</moduloId>
         <monedaId>2225</monedaId>
         <papelId>0</papelId>
         <cuenta>29</cuenta>
         <operacionId>80</operacionId>
         <subOperacionId>0</subOperacionId>
         <tipoOperacionId>3</tipoOperacionId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTContabilidad.ObtenerIdBantotalOperacion</Servicio>
            <Fecha>2021-10-29</Fecha>
            <Hora>10:25:26</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>11008</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTContabilidad.ObtenerIdBantotalOperacionResponse>
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
    "empresa": "1", 
    "sucursalId": "1", 
    "moduloId": "522", 
    "monedaId": "2225", 
    "papelId": "0", 
    "cuenta": "29", 
    "operacionId": "80", 
    "subOperacionId": "0", 
    "tipoOperacionId": "3", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTContabilidad.ObtenerIdBantotalOperacion", 
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