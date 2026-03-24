---
title: Obtener CBU de Cuenta Vista
icon: /assets/image/AR.svg
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
::: note Método para obtener el CBU de una vista.

**Nombre publicación:** BTCuentasVista.ObtenerCBUdeCuentaVista

**Programa:** RBTPAR02

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | long | Identificador único de operación CC o CA.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
CBU | String | Clave Bancaria Uniforme.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de operación.
30002 | No se recuperó la operación para el identificador: [Número de identificador].
40001 | No se encontró CBU para la operación.
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
      <bts:BTCuentasVista.ObtenerCBUdeCuentaVista>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>161</bts:operacionUId>
      </bts:BTCuentasVista.ObtenerCBUdeCuentaVista>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerCBUdeCuentaVista=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: fde8ae30-8752-c0fe-cf77-f8761a5ddcff' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 281
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
      <BTCuentasVista.ObtenerCBUdeCuentaVistaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <CBU>3220001800000831740016</CBU>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>990</Numero>
            <Estado>BTS_SEG_ERROR</Estado>
            <Servicio>BTCuentasVista.ObtenerCBUdeCuentaVista</Servicio>
            <Fecha>2017-12-26</Fecha>
            <Requerimiento/>
            <Hora>11:07:37</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ObtenerCBUdeCuentaVistaResponse>
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
    "CBU": "3220001800000831740016",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "868",
        "Estado": "OK",
        "Servicio": "BTCuentasVista.ObtenerCBUdeCuentaVista",
        "Requerimiento": "",
        "Fecha": "2017-12-18",
        "Hora": "17:15:28",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->