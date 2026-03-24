---
title: Contratar
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
::: note Método para contratar un préstamo amortizable.

**Nombre publicación:** BTPrestamos.Contratar

**Programa:** RBTPG077

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

1) Definir la transacción de alta, teniendo en cuenta que: 

	- El préstamo se almacena en el preformato 1. 

	- La cuenta vista de acreditación se almacena en el preformato 2. 

	- Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal. 

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T). 

3) Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro. 

4) Si la opción de procesos por módulo 3282 se encuentra activada, el servicio considera que se permiten cobros parciales.

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación simulada.
clienteUId | Long | Identificador único de cliente.
operacionUId_desembolso | Long | Identificador único de operación de la cuenta vista donde se acreditará el monto solicitado.
operacionUId_cobro | Long | Identificador único de operación de la cuenta vista de donde se cobrará el préstamo. En caso de no solicitarse una operación de cobro, enviar valor 999999999.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
movimientoUId | Long | Identificador único de movimiento [Asiento].

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de operación de préstamo.
30002 | No se recibió el identificador de operación de Acreditación.
30004 | No se recuperó el préstamo para el identificador: [Número de identificador].
30005 | No se recuperó la operación para el identificador: [Número de identificador].
30006 | No se recibió el identificador de cliente.
30007 | No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].
30008 | El préstamo no pertenece al cliente.
30009 | La operación de cobro no pertenece al cliente.
30010 | No se recibió el identificador único de operación de cobro.
51001 | No se recibió número de cliente.
51002 | La operación no existe.
51003 | La operación de cobro no existe.
51005 | Atención: No se pudo obtener el numerador para la transacción.
51006 | La operación esta cancelada.
51007 | La operación ya existe.
51013 | La operación de cobro esta cancelada.
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
      <bts:BTPrestamos.Contratar>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>5453369fee4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>341</bts:operacionUId>
         <bts:clienteUId>161</bts:clienteUId>
         <bts:operacionUId_desembolso>281</bts:operacionUId_desembolso>
         <bts:operacionUId_cobro>281</bts:operacionUId_cobro>
      </bts:BTPrestamos.Contratar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?Contratar=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9d6db2ed-3171-3f9c-11d1-3ed6402467a1' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 342,
    "clienteUId": 161,
    "operacionUId_desembolso": 281,
    "operacionUId_cobro": 281
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
      <BTPrestamos.ContratarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>5453369fee4A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>101</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>752</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.Contratar</Servicio>
            <Fecha>2017-11-30</Fecha>
            <Requerimiento/>
            <Hora>13:38:18</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ContratarResponse>
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
    "movimientoUId": "102",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "755",
        "Estado": "OK",
        "Servicio": "BTPrestamos.Contratar",
        "Fecha": "2017-11-30",
        "Requerimiento": "",
        "Hora": "13:47:48",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->