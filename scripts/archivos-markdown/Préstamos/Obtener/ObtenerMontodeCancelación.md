---
title: Obtener Monto de Cancelación
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
::: note Método para obtener el monto de cancelación de una operación.

**Nombre publicación:** BTPrestamos.ObtenerMontoCancelacion

**Programa:** RBTPG224

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador de la operación.
fecha | Date | Fecha a consultar.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
montoCancelacion | Double | Monto de cancelación de la operación.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el Identificador de la operación.
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
      <bts:BTPrestamos.ObtenerMontoCancelacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>191631443CD285A89A23FBEE</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>37675</bts:operacionUId>
         <bts:fecha>2019-07-26</bts:fecha>
      </bts:BTPrestamos.ObtenerMontoCancelacion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerFechaUltimoPago' \
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
		"operacionUId": 121,
      "bts:fecha": "2019-07-26"
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
      <BTPrestamos.ObtenerMontoCancelacionResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>191631443CD285A89A23FBEE</Token>
            <Device>AC</Device>
         </Btinreq>
         <montoCancelacion>16824.71</montoCancelacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerMontoCancelacion</Servicio>
            <Fecha>2019-07-26</Fecha>
            <Hora>11:57:25</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>120424</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerMontoCancelacionResponse>
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
    "montoCancelacion": 16824.71,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 55,
        "Servicio": "BTPrestamos.ObtenerMontoCancelacion",
        "Estado": "NEG_ERROR",
        "Fecha": "2019-10-25",
        "Requerimiento": "1",
        "Hora": "13:39:43",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->