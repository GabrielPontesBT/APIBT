---
title: Modificar Cuenta Origen
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
::: note Método para modificar la cuenta de origen desde donde se toman los fondos para el ahorro.

**Nombre publicación:** BTAhorroProgramado.ModificarCuentaOrigen

**Programa:** RBTPG113

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
ahorroUId | Long | Identificador único de la operación de ahorro.
cuentaUId | Long | Identificador único de la nueva operación cuenta origen del ahorro.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador del cliente.
30002 | No se recibió el identificador del ahorro.
30003 | No se recibió el identificador de operación de la cuenta origen.
30004 | No se recuperó la cuenta para el identificador de cliente: [Número de identificador].
30005 | No se recuperó la operación del ahorro para el identificador: [Número de identificador].
30006 | No se recuperó la operación de la cuenta vista para el identificador: [Número de identificador].
30007 | El ahorro no pertenece al identificador del cliente: [Número de identificador].
30008 | La cuenta vista no pertenece al identificador del cliente: [Número de identificador].
40001 | La operación seleccionada no corresponde a un producto de ahorro.
40002 | El ahorro seleccionado no se encuentra habilitado para operar.
40003 | El producto de la cuenta de origen seleccionado no se encuentra habilitado para operar.
40004 | El producto del ahorro no permite operar con cuentas de distinta moneda.
40005 | El producto acredita una cuenta externa, no es posible modificar la misma.
40006 | El producto del ahorro no permite operar con cuentas de distintos clientes.
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
      <bts:BTAhorroProgramado.ModificarCuentaOrigen>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d927483a74A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>81</bts:clienteUId>
         <bts:ahorroUId>61</bts:ahorroUId>
         <bts:cuentaUId>81</bts:cuentaUId>
      </bts:BTAhorroProgramado.ModificarCuentaOrigen>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ModificarCuentaOrigen' \
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
      "cuentaUId": 21
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
      <BTAhorroProgramado.ModificarCuentaOrigenResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d927483a74A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>408</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ModificarCuentaOrigen</Servicio>
            <Fecha>2018-05-03</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>16:52:30</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ModificarCuentaOrigenResponse>
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
        "Numero": "409",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ModificarCuentaOrigen",
        "Fecha": "2018-05-03",
        "Requerimiento": "1",
        "Hora": "16:54:31",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->