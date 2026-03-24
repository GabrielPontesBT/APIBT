---
title: Contratar Refinanciación
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

<!-- ABRE LOS DATOS DEL MÉTODO -->
::: note Método para contratar la refinanciación de un préstamo.

**Nombre publicación:** BTPrestamos.ContratarRefinanciacion

**Programa:** RBTPG549

**Global/País:** Global
<!-- CIERRA LOS DATOS DEL MÉTODO -->
:::

<!-- ABRE LA TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de la operación.
simulacionUId | Long | Identificador único de la simulación.
clienteUId | Long | Identificador único de cliente.
parmsAux | String | [Hidden: Parámetros auxiliares. Se pueden enviar los siguientes [valores](#valores)].
operacionCobroUId | Long | Identificador único de la operación de cobro.
operacionUIdIns | Long | [Hidden: Valor fijo vacío para este método].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
movimientoUId | Long | 	Identificador único del movimiento.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la operación a contratar.
30002 | No se recuperó la operación a contratar para el Identificador: [Número de Identificador].
30003 | No se recibió el identificador de cliente.
30004 | No se recuperó la cuenta para el Identificador: [Número de Identificador].
30005 | No se recibió el identificador de la simulación.
30006 | No se recuperaron datos de la simulación para el identificador [Número de Identificador].
30007 | El cliente ingresado no coincide con el de la operación.
30008 | No se recuperó la operación para el identificador: [Número de Identificador].
30009 | No se recuperó la operación de cobro para el identificador: [Número de Identificador].
30010 | La operación de cobro no pertenece al cliente.
30011 | No se recibió identificador de la operación de cuenta vista.
30012 | No se recibió identificador de la operación de instrucción de cobro.
:::
<!-- CIERRA LA TABLA DE DATOS -->

<!-- ABRE VALORES -->
::: details Valores Parámetros Auxiliares

### Valores

::: center 

Este campo se compone de 2 valores S/N separados por ; (por ejemplo N;S), que corresponden a:

Posición |  Valor | Comentarios
:--------- | :--------- | :-----------
1 | [S,N] (Valor por defecto "N") | Permite indicar si el servicio controla el ingreso del campo operacionUIdIns - Operación de instrucción de cobro.
2 | [S,N] (Valor por defecto "N") | Permite indicar si la cancelación se realiza con fecha valor.
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
      <bts:BTPrestamos.ContratarRefinanciacion>
         <bts:Btinreq>
            <bts:Device>AC</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>52005b89a6F955E77534D3E0</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>2</bts:operacionUId>
         <bts:simulacionUId>5</bts:simulacionUId>
         <bts:clienteUId>6</bts:clienteUId>
         <bts:operacionCobroUId>23</bts:operacionCobroUId>
      </bts:BTPrestamos.ContratarRefinanciacion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ContratarRefinanciacion' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "AC",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "operacionUId": 2,
    "simulacionUId": 5,
    "clienteUId": 6,
    "operacionCobroUId": 23,
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
      <BTPrestamos.ContratarRefinanciacion xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>52005b89a6F955E77534D3E0</Token>
         </Btinreq>
         <movimientoUId>9</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>677</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ContratarRefinanciacion</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-04-23</Fecha>
            <Hora>16:17:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ContratarRefinanciacion>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "BANTOTAL",
        "Token": "324915377F955E77534D3E02",
        "Device": "AC"
    },
	"movimientoUId": 9,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTPrestamos.ContratarRefinanciacion",
        "Fecha": "2019-11-19",
        "Hora": "13:05:22",
        "Requerimiento": "",
        "Numero": 6924,
        "Estado": "OK"
    }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->