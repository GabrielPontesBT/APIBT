---
title: Seleccionar Opción Desembolso
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
::: note Método para seleccionar una opción de desembolso.

**Nombre publicación:** BTDescuentoDocumentos.SeleccionarOpcionDesembolso

**Programa:** RBTPG165

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
listaUId | Long | Identificador de lista.
operacionUId | Long | Identificador único de operación de desembolso.
tipoDesembolso | Short | Tipo de desembolso.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de lista.
30002 | No se recibió el identificador único de operación.
30003 | No se recibió tipo de desembolso.
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
      <bts:BTDescuentoDocumentos.SeleccionarOpcionDesembolso>
		<Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>GUAY.BANTOTAL</Usuario>
            <Token>1485239356EB8880B52090F2</Token>
            <Device>ES</Device>
         </Btinreq>
         <bts:listaUId>75</bts:listaUId>
         <bts:operacionUId>12</bts:operacionUId>
         <bts:tipoDesembolso>3</bts:tipoDesembolso>
      </bts:BTDescuentoDocumentos.SeleccionarOpcionDesembolso>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDescuentoDocumentos?SeleccionarOpcionDesembolso=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"listaUId":75,
	"operacionUId":12,
   "tipoDesembolso":3
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
      <BTDescuentoDocumentos.SeleccionarOpcionDesembolsoResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>GUAY.BANTOTAL</Usuario>
            <Token>1485239356EB8880B52090F2</Token>
            <Device>ES</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTDescuentoDocumentos.SeleccionarOpcionDesembolso</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Hora>15:30:27</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>1981</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTDescuentoDocumentos.SeleccionarOpcionDesembolsoResponse>
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
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "727",
        "Estado": "OK",
        "Servicio": "BTDescuentoDocumentos.SeleccionarOpcionDesembolso",
        "Fecha": "2017-11-24",
        "Requerimiento": "",
        "Hora": "15:59:42",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->