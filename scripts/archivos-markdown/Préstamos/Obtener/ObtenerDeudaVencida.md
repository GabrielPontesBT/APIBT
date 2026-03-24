---
title: Obtener Deuda Vencida
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
::: note Método para obtener la deuda vencida de un préstamo a una determinada fecha.

**Nombre publicación:** BTPrestamos.ObtenerDeudaVencida

**Programa:** RBTPG404

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación simulada.
fechaDeCalculo | Date | Fecha a la que se calcula la deuda.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
deuda | Double | Deuda a la fecha.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de operación.
30002 | No se recuperó la operación para el identificador: [Número de identificador].
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
      <bts:BTPrestamos.ObtenerDeudaVencida>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>2062732190F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>12</bts:operacionUId>
         <bts:fechaDeCalculo>2020-11-11</bts:fechaDeCalculo>
      </bts:BTPrestamos.ObtenerDeudaVencida>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDeudaVencida=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 7f7508f7-ea98-f808-db74-b5d31b90b392' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "operacionUId": 142,
	"fechaDeCalculo": "2020-11-11"
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
      <BTPrestamos.ObtenerDeudaVencidaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>2062732190F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <deuda>262752.52</deuda>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerDeudaVencida</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Hora>16:56:39</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6989</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerDeudaVencidaResponse>
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
    "deuda": "23433.85",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "918",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerDeudaVencida",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "17:05:42",
        "Canal": "BTDIGITAL"
    }
}'
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->