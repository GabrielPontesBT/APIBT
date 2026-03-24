---
title: Modificar Cuenta Destino al Vencimiento
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
::: note Método para modificar la cuenta de destino de la instrucción al vencimiento de un depósito.

**Nombre publicación:** BTDepositosAPlazo.ModificarCuentaDestinoVencimiento

**Programa:** RBTPG107

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
depositoUId | Long | Identificador único de la operación del depósito.
cuentaUId | Long | Identificador único de la operación de cuenta.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador del cliente.
30002 | No se recibió el identificador de la operación del depósito.
30003 | No se recibió el identificador de la operación de la cuenta.
30004 | No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].
30005 | No se recuperó la operación del Depósito para el identificador: [Número de identificador].
30006 | La operación asociada al identificador: [Número de identificador] no pertenece a un depósito a plazo.
30007 | La cuenta del depósito no pertenece al identificador del cliente: [Número de identificador].
30008 | No se encontró instrucción al vencimiento para el depósito ingresado.
30009 | El depósito tiene instrucción de renovación automática, para especificar una Cuenta debe modificar la instrucción.
30010 | No se recuperó la operación de la cuenta para el identificador: [Número de identificador]
30011 | La operación asociada al identificador: [Número de identificador] no pertenece a un producto cuenta.
30012 | La cuenta indicada es igual a la de la instrucción.
40002 | No existe instrucción para operación.
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
      <bts:BTDepositosAPlazo.ModificarCuentaDestinoVencimiento>
	    <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6c275823524A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
         <bts:depositoUId>4</bts:depositoUId>
         <bts:cuentaUId>3</bts:cuentaUId>
      </bts:BTDepositosAPlazo.ModificarCuentaDestinoVencimiento>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ModificarCuentaDestinoVencimiento=' \
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
	"depositoUId": 4,
	"cuentaUId": 3
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
      <BTDepositosAPlazo.ModificarCuentaDestinoVencimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6c275823524A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>146</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.ModificarCuentaDestinoVencimiento</Servicio>
            <Fecha>2018-03-01</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:15:08</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ModificarCuentaDestinoVencimientoResponse>
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
        "Numero": "146",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.ModificarCuentaDestinoAcreditacion",
        "Fecha": "2018-03-01",
        "Requerimiento": "1",
        "Hora": "12:15:08",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->