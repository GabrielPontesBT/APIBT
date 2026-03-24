---
title: Modificar Monto de Abono
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
::: note Método para modificar el monto del abono para el ahorro.

**Nombre publicación:** BTAhorroProgramado.ModificarMontoDeAbono

**Programa:** RBTPG115

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
ahorroUId | Long | Identificador único de operación de ahorro.
montoAbono | Double | Nuevo monto de abono para el ahorro.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador del cliente.
30002 | No se recibió el identificador del ahorro.
30003 | No se recibió el nuevo monto para el abono.
30004 | El monto indicado no puede ser menor a cero.
30005 | No se recuperó la cuenta para el identificador de cliente: [Número de identificador].
30006 | No se recuperó la operación del ahorro para el identificador: [Número de identificador].
30007 | El ahorro no pertenece al identificador del cliente: [Número de identificador].
40006 | La cuota indicada es menor al mínimo permitido.
40007 | La cuota indicada es mayor al máximo permitido.
40019 | La variación del abono por monto indicada es menor al mínimo permitido.
40020 | La variación del abono por monto indicada es mayor al máximo permitido.
40021 | La variación del abono por % indicado es menor al mínimo permitido.
40950 | El ahorro seleccionado no se encuentra habilitado para operar.
40951 | No se permite modificar el abono para el producto seleccionado.
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
      <bts:BTAhorroProgramado.ModificarMontoDeAbono>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>81</bts:clienteUId>
         <bts:ahorroUId>61</bts:ahorroUId>
         <bts:montoAbono>2000</bts:montoAbono>
      </bts:BTAhorroProgramado.ModificarMontoDeAbono>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ModificarMontoDeAbono' \
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
      "clienteUId": 81,
      "ahorroUId": 61,
      "montoAbono": 2500
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
      <BTAhorroProgramado.ModificarMontoDeAbonoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f2f7be2ebc4A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>388</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ModificarMontoDeAbono</Servicio>
            <Fecha>2018-04-30</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>17:43:27</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ModificarMontoDeAbonoResponse>
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
        "Numero": "405",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ModificarMontoDeAbono",
        "Fecha": "2018-05-03",
        "Requerimiento": "1",
        "Hora": "12:29:59",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->