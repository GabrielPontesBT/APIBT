---
title: Confirmar Cancelación Anticipada
icon: /assets/image/nuevo.svg
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
::: note Método para confirmar la cancelación anticipada de una simulación.

**Nombre publicación:** BTPrestamos.ConfirmarCancelacionAnticipada

**Programa:** RBTPG599

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
simulacionUId | Long | Identificador único de la simulación.
clienteUId | Long | Identificador único del cliente.
operacionUIdCobro | Long | Identificador único de la operación de cobro.
fecha | Date | Fecha.
controlarOperacionCobro | String | [Hidden: Controlar si recibe operación de cobro. Se pueden enviar los siguientes [valores](#valores).]

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
movimientoUId | Long | Identificador único de Movimiento.

@tab Errores

Código | Descripción
:--------- | :---------
30002 | No se recuperó la operación a contratar para el identificador: [Número de identificador].
30003 | No se recibió el identificador de cliente.
30004 | No se recuperó la cuenta para el Identificador: [Número de identificador].
30005 | No se recibió el identificador de la simulación.
30007 | No se recuperó la operación de cobro para el Identificador: [Número de identificador].
30008 | El cliente ingresado no coincide con el de la operación.
30009 | No se recibió una fecha para la operación.
30100 | Error en la contabilización.
40001 | La simulación no está vigente.
40002 | La simulación no existe.

::: 
<!-- CIERRA TABLA DE DATOS -->

<!-- ABRE VALORES -->
::: details Controlar Operación de Cobro

### Valores

::: center 

Valor | Comentarios
:--------- | :---------
S | Controla si se envío la operación de cobro.
X | No se controla si se envío la operación de cobro.

:::
<!-- CIERRA VALORES -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ConfirmarCancelacionAnticipada>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>4FB006D061BC0A5FEDF7BAE5</bts:Token>
         </bts:Btinreq>
         <bts:simulacionUId>97</bts:simulacionUId>
         <bts:clienteUId>162</bts:clienteUId>
         <bts:operacionUIdCobro>34</bts:operacionUIdCobro>
         <bts:fecha>2025-07-22</bts:fecha>
      </bts:BTPrestamos.ConfirmarCancelacionAnticipada>
   </soapenv:Body>
</soapenv:Envelope>

```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ConfirmarCancelacionAnticipada' \
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
	"simulacionUId": 97,
   "clienteUId": 162,
   "operacionUIdCobro": 34,
   "fecha": "2025-07-22"
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
      <BTPrestamos.ConfirmarCancelacionAnticipadaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>376B514438F7B0C7820AF342</Token>
         </Btinreq>
         <movimientoUId>23</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>36608</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ConfirmarCancelacionAnticipada</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-11-04</Fecha>
            <Hora>17:24:39</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ConfirmarCancelacionAnticipadaResponse>
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
    "movimientoUId": 23,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8418,
        "Estado": "OK",
        "Servicio": "BTPrestamos.ConfirmarCancelacionAnticipada",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->