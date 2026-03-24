---
title: Obtener Fechas de Pago
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
::: note Método para obtener fechas de pago de un préstamo.

**Nombre publicación:** BTPrestamos.ObtenerFechasPago

**Programa:** RBTPG137

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación de préstamo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
fecha_incumplimiento | Date | Fecha de primer incumplimiento.
fecha_ultimo_pago | Date | Fecha de último pago.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de operación de préstamo.
30002 | No se recuperó la operación para el Identificador: [Número de Identificador].
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
      <bts:BTPrestamos.ObtenerFechasPago>
		<bts:Btinreq>             
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>b3c6f2d0e34A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
      </bts:BTPrestamos.ObtenerFechasPago>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerFechasPago' \
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
		"operacionUId": 121
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
      <BTPrestamos.ObtenerFechasPagoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b3c6f2d0e34A8B5C60A82434</Token>
         </Btinreq>
         <fecha_incumplimiento>2018-02-08</fecha_incumplimiento>
         <fecha_ultimo_pago>2018-04-09</fecha_ultimo_pago>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>144</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerFechasPago</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-05-07</Fecha>
            <Hora>12:45:32</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerFechasPagoResponse>
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
    "fecha_incumplimiento": "2018-02-08",
    "fecha_ultimo_pago": "2018-04-09",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "145",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerFechasPago",
        "Requerimiento": "1",
        "Fecha": "2018-05-07",
        "Hora": "12:50:44",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->