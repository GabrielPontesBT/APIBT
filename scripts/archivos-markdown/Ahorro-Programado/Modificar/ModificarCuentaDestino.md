---
title: Modificar Cuenta Destino
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
::: note Método para modificar la cuenta destino donde se acreditarán los ahorros al vencimiento.

**Nombre publicación:** BTAhorroProgramado.ModificarCuentaDestino

**Programa:** RBTPG114

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
ahorroUId | Long | Identificador de operación de ahorro.
cuentaUId | Int | Identificador único de la operación de cuenta vista destino.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador del cliente.
30002 | No se recibió el identificador del ahorro.
30003 | No se recibió el identificador de operación de la cuenta destino.
30004 | No se recuperó la cuenta para el identificador de cliente: [Número de identificador].
30005 | No se recuperó la operación del ahorro para el identificador: [Número de identificador].
30006 | No se recuperó la operación de la cuenta vista para el identificador: [Número de identificador].
30007 | El ahorro no pertenece al identificador del cliente: [Número de identificador].
40001 | La operación seleccionada no corresponde a un producto de ahorro.
40002 | El ahorro seleccionado no se encuentra habilitado para operar.
40003 | El producto de la cuenta de origen seleccionado no se encuentra habilitado para operar.
40004 | El producto del ahorro no permite operar con cuentas de distinta moneda.
40005 | El producto acredita una cuenta externa, no es posible modificar la misma.
40006 | El producto del ahorro no permite operar con cuentas vistas de distintos clientes.
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
      <bts:BTAhorroProgramado.ModificarCuentaDestino>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>81</bts:clienteUId>
         <bts:ahorroUId>61</bts:ahorroUId>
         <bts:cuentaUId>81</bts:cuentaUId>
      </bts:BTAhorroProgramado.ModificarCuentaDestino>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ModificarCuentaDestino' \
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
      <BTAhorroProgramado.ModificarCuentaDestinoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f2f7be2ebc4A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>385</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ModificarCuentaDestino</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-04-30</Fecha>
            <Hora>17:33:27</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ModificarCuentaDestinoResponse>
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
        "Numero": "410",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ModificarCuentaDestino",
        "Fecha": "2018-05-03",
        "Requerimiento": "1",
        "Hora": "17:08:21",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->