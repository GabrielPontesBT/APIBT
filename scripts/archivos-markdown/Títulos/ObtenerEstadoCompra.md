---
title: Obtener Estado de Compra
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
::: note Método para obtener el estado de la compra de un título.

**Nombre publicación:** BTTitulos.ObtenerEstadoCompra

**Programa:** RBTPG497

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
respuesta | String | Estado de la compra.
codigo | Short | Código de la respuesta.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de la operación.
30011 | No se recupero el identificador para la operación recibida.
40001 | No existe registro para el identificador indicado.
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
      <bts:BTTitulos.ObtenerEstadoCompra>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>6F467D9554D22BE00B36E963</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>44</bts:operacionUId>
      </bts:BTTitulos.ObtenerEstadoCompra>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTitulos?ObtenerEstadoCompra' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 44,
}'
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTitulos.ObtenerEstadoCompraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>BANTOTAL</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>BEAC462EA5486D1445DEC75E</Token>
         </Btinreq>
         <respuesta>La concertación aún no fue enviada.</respuesta>
         <codigo>3</codigo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-06-04</Fecha>
            <Hora>12:38:06</Hora>
            <Numero>301</Numero>
            <Servicio>BTTitulos.ObtenerEstadoCompra</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTitulos.ObtenerEstadoCompraResponse>
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
    "respuesta": "La concertación aún no fue enviada.",
    "codigo": 3,
    "Erroresnegocio": {
      "BTErrorNegocio": []
    },
   "Btoutreq": {
      "Numero": "786",
      "Estado": "OK",
      "Servicio": "BTTitulos.ObtenerEstadoCompra",
      "Fecha": "2017-12-15",
      "Requerimiento": "",
      "Hora": "16:35:22",
      "Canal": "BTDIGITAL"
    }
}'
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->