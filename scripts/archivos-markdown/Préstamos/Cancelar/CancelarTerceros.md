---
title: Cancelar Terceros
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
::: note Método para realizar la cancelación de un préstamo con una cuenta de cobro de terceros.

**Nombre publicación:** BTPrestamos.CancelarTerceros

**Programa:** RBTPG830

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

1) Definir la transacción de Pago, teniendo en cuenta que: 

	- El préstamo se almacena en el preformato 1. 

	- La cuenta vista de cobro se almacena en el preformato 2. 

	- Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal. 

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T). 

3) Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro.

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación simulada.
clienteUId | Long | Identificador único de cliente.
operacionCobroUId | Long | Identificador único de operación de la cuenta vista donde se cobrará el préstamo.
referencia | String | Referencia.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
movimientoUId | Long | Identificador único del movimiento (asiento).

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de operación de préstamo.
30004 | No se recuperó la operación para el Identificador: [Número de Identificador].
30006 | No se recibió el identificador de cliente.
30007 | No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador].
30008 | El préstamo no pertenece al cliente.
30100 | Error en la Contabilización.
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
      <bts:BTPrestamos.CancelarTerceros>
         <bts:Btinreq>
            <bts:Device>bms</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>b6275b301e4A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:operacionUId>39</bts:operacionUId>
         <bts:clienteUId>9</bts:clienteUId>
         <bts:operacionCobroUId>850</bts:operacionCobroUId>
         <bts:referencia>Cancelacion con terceros</bts:referencia>
      </bts:BTPrestamos.CancelarTerceros>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?CancelarTerceros' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "faa36bd33f4A8B5C60A82434"
    },
    "operacionUId": "40",
    "clienteUId": "9",
    "operacionCobroUId": "865",
    "referencia": "Paga cuota terceros"
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
      <BTPrestamos.CancelarTercerosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>bms</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b6275b301e4A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>59</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1091</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.CancelarTerceros</Servicio>
            <Fecha>2020-10-30</Fecha>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:48:17</Hora>
         </Btoutreq>
      </BTPrestamos.CancelarTercerosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "faa36bd33f4A8B5C60A82434"
    },
    "movimientoUId": 62,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1094,
        "Estado": "OK",
        "Servicio": "BTPrestamos.CancelarTerceros",
        "Fecha": "2020-10-30",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Hora": "14:30:59"
    }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->