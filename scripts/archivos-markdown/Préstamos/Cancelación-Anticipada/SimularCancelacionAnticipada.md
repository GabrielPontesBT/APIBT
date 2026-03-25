---
title: Simular Cancelación Anticipada
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
::: note Método para simular una cancelación anticipada.

**Nombre publicación:** BTPrestamos.SimularCancelacionAnticipada

**Programa:** RBTPG597

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único del cliente.
operacionUId | Long | Identificador único de la operación.
fecha | Date | Fecha.
perdonaIntereses | String | ¿Perdona intereses? (S/N).

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
simulacionUId | Long | Identificador único de la simulación.
montoCancelacion | Double | Monto de cancelación.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente.
30002 | No se recuperó la cuenta para el Identificador: [Número de identificador].
30003 | No se recibió el identificador de operación.
30004 | No se recuperó la operación para el identificador: [Número de identificador].
30005 | La operación no pertenece al cliente.
30008 | El valor de perdonaIntereses no es correcto.

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
      <bts:BTPrestamos.SimularCancelacionAnticipada>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>92E4AE77DFCA77656D4E4763</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
         <bts:operacionUId>939</bts:operacionUId>
         <bts:fecha></bts:fecha>
         <bts:perdonaIntereses>S</bts:perdonaIntereses>
      </bts:BTPrestamos.SimularCancelacionAnticipada>
   </soapenv:Body>
</soapenv:Envelope>

```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularCancelacionAnticipada' \
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
	"clienteUId": 61,
   "operacionUId": 939,
   "fecha": "",
   "perdonaIntereses": "S"
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
      <BTPrestamos.SimularCancelacionAnticipadaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>92E4AE77DFCA77656D4E4763</Token>
         </Btinreq>
         <simulacionUId>103</simulacionUId>
         <montoCancelacion>5402.78</montoCancelacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>36650</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularCancelacionAnticipada</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-11-11</Fecha>
            <Hora>11:24:59</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularCancelacionAnticipadaResponse>
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
    "simulacionUId": 103,
    "montoCancelacion": 5402.78,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8418,
        "Estado": "OK",
        "Servicio": "BTPrestamos.SimularCancelacionAnticipada",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->