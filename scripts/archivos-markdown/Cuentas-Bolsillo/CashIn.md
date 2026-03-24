---
title: Cash In
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
::: note Método para realizar un depósito en cuenta bolsillo.

**Nombre publicación:** BTCuentasBolsillo.CashIn

**Programa:** RBTPG611

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único del cliente.
sdtTraspaso | [sBTTraspaso](#sbttraspaso) | Datos del traspaso.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtResultadoTraspaso | [sBTResultadoTraspaso](#sbtresultadotraspaso) | Datos resultado del traspaso.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de operación de origen.
30002 | No se recibió el identificador único de operación de destino.
30003 | Debe ingresar importe.
30004 | No se recuperó la operación origen para el Identificador: [Número de identificador].
30005 | No se recuperó la operación destino para el Identificador: [Número de identificador].
30006 | No se recibió el identificador de cliente.
30007 | No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].
30008 | La cuenta destino no pertenece al cliente [Número de identificador].
30009 | La operación origen no pertenece al cliente.
30020 | El estado de la operación origen no permite operar.
30021 | El estado de la operación destino no permite operar.
30023 | La cuenta origen y cuenta destino son diferentes.
30024 | La cuenta bolsillo no pertenece a la operación principal.
30100 | Error en la contabilización.
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
      <bts:BTCuentasBolsillo.CashIn>
         <bts:Btinreq>
           <bts:Device>FP</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>64d9fe0781F955E77534D3E0</bts:Token>
            <bts:Requerimiento>10</bts:Requerimiento>
         </bts:Btinreq>
         <bts:clienteUId>5</bts:clienteUId>
         <bts:sdtTraspaso>
            <bts:operacionUIdOrigen>9</bts:operacionUIdOrigen>
            <bts:importeCredito>100</bts:importeCredito>
            <bts:importeDebito>100</bts:importeDebito>
            <bts:importe>100</bts:importe>
            <bts:operacionUIdDestino>8</bts:operacionUIdDestino>
            <bts:monedaId>0</bts:monedaId>
            <bts:concepto>cash in</bts:concepto>
         </bts:sdtTraspaso>
      </bts:BTCuentasBolsillo.CashIn>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasBolsillo?CashIn' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cFC33CD93505A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
    "clienteUId": 5,
    "sdtTraspaso": {
        "operacionUIdOrigen": 9,
        "importeCredito": 100,
        "importeDebito": 100,
        "importe": 100,
        "operacionUIdDestino": 8,
        "monedaId": 0,
        "concepto": "cash in"
    }
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
      <BTCuentasBolsillo.CashInResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FP</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>10</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>64d9fe0781F955E77534D3E0</Token>
         </Btinreq>
         <sdtResultadoTraspaso>
            <operacionUIdOrigen>9</operacionUIdOrigen>
            <idMovimiento>001001320010002820230731</idMovimiento>
            <operacionUIdDestino>8</operacionUIdDestino>
            <saldoOperacionOrigen>69919.00</saldoOperacionOrigen>
            <movimientoUId>15</movimientoUId>
         </sdtResultadoTraspaso>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>243</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasBolsillo.CashIn</Servicio>
            <Requerimiento>10</Requerimiento>
            <Fecha>2023-11-01</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>09:21:36</Hora>
         </Btoutreq>
      </BTCuentasBolsillo.CashInResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Device": "1",
        "Usuario": "MINSTALADOR",
        "Token": "16c1cFC33CD93505A5382434",
        "Canal": "BTDIGITAL",
        "Requerimiento": "1"
    },
    "sdtResultadoTraspaso": {
        "operacionUIdOrigen": 9,
        "idMovimiento": 1.0013200100028202e+21,
        "operacionUIdDestino": 8,
        "saldoOperacionOrigen": 69919,
        "movimientoUId": 15
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "111399",
        "Estado": "OK",
        "Servicio": "BTCuentasBolsillo.CashIn",
        "Requerimiento": "1",
        "Fecha": "2023-05-10",
        "Canal": "BTDIGITAL",
        "Hora": "15:10:52"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTraspaso  

### sBTTraspaso

::: center 
Los campos del tipo de dato estructurado sBTTraspaso son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
concepto | String | Concepto del Traspaso.
importe | Double | Importe del Movimiento.
monedaId | Short | Identificador de Moneda.
operacionUIdDestino | Long | Identificador de operación de destino del traspaso. 
operacionUIdOrigen | Long | Identificador de operación de origen del traspaso.
:::
 
::: details sBTResultadoTraspaso  

### sBTResultadoTraspaso

::: center 
Los campos del tipo de dato estructurado sBTResultadoTraspaso son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
idMovimiento | String | Identificador de movimiento string.
movimientoUId | Long | Identificador único de movimiento.
operacionUIdDestino | Long | Identificador único de operación destino del traspaso.
operacionUIdOrigen | Long | Identificador único de operación de origen del traspaso.
saldoOperacionOrigen | Double | Saldo actual de operación de origen.
:::
<!-- CIERRA SDT -->