---
title: Confirmar Lista
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
::: note Método para confirmar y contabilizar una lista de documentos.

**Nombre publicación:** BTDescuentoDocumentos.ConfirmarLista

**Programa:** RBTPG164

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
listaUId | Long | Identificador de lista.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
movimientoUId | Long | Identificador único de movimiento (Asiento).

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de lista.
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
      <bts:BTDescuentoDocumentos.ConfirmarLista>
		   <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>GUAY.BANTOTAL</bts:Usuario>
            <bts:Token>1485239356EB8880B52090F2</bts:Token>
            <bts:Device>ES</bts:Device>
         </bts:Btinreq>
         <bts:listaUId>75</bts:listaUId>
      </bts:BTDescuentoDocumentos.ConfirmarLista>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDescuentoDocumentos?ConfirmarLista=' \
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
    "listaUId": 75
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
      <BTDescuentoDocumentos.ConfirmarListaResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>GUAY.BANTOTAL</Usuario>
            <Token>1485239356EB8880B52090F2</Token>
            <Device>ES</Device>
         </Btinreq>
         <listaUId>75</listaUId>
         <movimientoUId>58</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTDescuentoDocumentos.ConfirmarLista</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Hora>15:34:29</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>1983</Numero>
            <Estado>NEG_ERROR</Estado>
         </Btoutreq>
      </BTDescuentoDocumentos.ConfirmarListaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
 {
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "listaUId": 75 ,
	"movimientoUId": 58 ,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "727",
        "Estado": "OK",
        "Servicio": "BTDescuentoDocumentos.ConfirmarLista",
        "Fecha": "2017-11-24",
        "Requerimiento": "",
        "Hora": "15:59:42",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->