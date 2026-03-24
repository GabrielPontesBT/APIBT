---
title: Obtener Movimientos
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
::: note Método para obtener los movimientos de una cuenta bolsillo.

**Nombre publicación:** BTCuentasBolsillo.ObtenerMovimientos

**Programa:** RBTPG618

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
bolsilloUId | Long | Identificador único del bolsillo.
cantDias | Int | Cantidad de días.
cantMov | Int | Cantidad de movimientos.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtEstadoDeCuenta | [sBTEstadoCuentaCV](#sbtestadocuentacv) | Datos de estado de cuenta.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de operación.
30002 | No se recuperó la operación para el identificador: [Número de identificador].
30003 | La operación ingresada no corresponde a una cuenta bolsillo.
30004 | No se recibió la cantidad de días.
30005 | No se recibió la cantidad de movimientos.
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
      <bts:BTCuentasBolsillo.ObtenerMovimientos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>CC6345192D8633F531F01D1D</bts:Token>
         </bts:Btinreq>
         <bts:BolsilloUID>18848</bts:BolsilloUID>
         <bts:CantDias>4</bts:CantDias>
         <bts:CantMov>3</bts:CantMov>
      </bts:BTCuentasBolsillo.ObtenerMovimientos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasBolsillo?ObtenerMovimientos' \
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
    "bolsilloUId": 18848,
    "cantDias": 281,
    "cantMov": 281
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
      <BTCuentasBolsillo.ObtenerMovimientosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>CC6345192D8633F531F01D1D</Token>
         </Btinreq>
         <sdtEstadoDeCuenta>
            <saldoPartida>0.00</saldoPartida>
            <fechaHasta>2020-04-30</fechaHasta>
            <productoUID>512</productoUID>
            <movimientos>
               <sBTMovimiento>
                  <moneda/>
                  <hora>16:39:10</hora>
                  <referencia/>
                  <concepto>Cash Out</concepto>
                  <movimientoUId>1842</movimientoUId>
                  <datosAdicionales></datosAdicionales>
                  <debitoCredito>D</debitoCredito>
                  <saldo>-910000.00</saldo>
                  <ordinal>85001</ordinal>
                  <importe>910000.00</importe>
                  <numeroCheque>0</numeroCheque>
                  <tipoCambio>0.00</tipoCambio>
                  <arbitraje>0.00</arbitraje>
                  <fecha>2020-04-30</fecha>
               </sBTMovimiento>
            </movimientos>
            <fechaDesde>2020-04-26</fechaDesde>
         </sdtEstadoDeCuenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>228478</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasBolsillo.ObtenerMovimientos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-11-01</Fecha>
            <Hora>08:30:40</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasBolsillo.ObtenerMovimientosResponse>
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
    "sdtEstadoDeCuenta": {
        "saldoPartida": 0,
        "fechaHasta": "2020-04-30",
        "productoUID": 512,
        "movimientos": {
        "sBTMovimiento": {
            "moneda": "",
            "hora": "16:39:10",
            "referencia": "",
            "concepto": "Cash Out",
            "movimientoUId": 1842,
            "datosAdicionales": "",
            "debitoCredito": "D",
            "saldo": -910000,
            "ordinal": 85001,
            "importe": 910000,
            "numeroCheque": 0,
            "tipoCambio": 0,
            "arbitraje": 0,
            "fecha": "2020-04-30"
        }
        },
        "fechaDesde": "2020-04-26"
    },
    "Btoutreq": {
        "Numero": "111399",
        "Estado": "OK",
        "Servicio": "BTCuentasBolsillo.ObtenerMovimientos",
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
::: details sBTEstadoCuentaCV  

### sBTEstadoCuentaCV

::: center 
Los campos del tipo de dato estructurado sBTEstadoCuentaCV son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
fechaDesde | Date | Fecha desde la cual se emite el estado de cuenta.
fechaHasta | Date | Fecha hasta la cual se emite el estado de cuenta.
movimientos | [sBTMovimiento](#sbtmovimiento) | Datos de movimiento.
productoUId | Long | Identificador único de producto.
saldoPartida | Double | Saldo inicial.

### sBTMovimiento

::: center 
Los campos del tipo de dato estructurado sBTMovimiento son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
arbitraje | Double | Arbitraje de moneda.
concepto | String | Concepto de movimiento.
datosAdicionales | [sBTDatoAdicional](#sbtdatoadicional) | Listado de datos adicionales.
debitoCredito | String | Débito o Crédito (D/C)..
fecha | Date | Fecha de movimiento.
hora | String | Hora de movimiento.
importe | Double | Importe de movimiento.
moneda | String | Símbolo de moneda
movimientoUId | Long | Identificador único de movimiento.
numeroCheque | Int | Número de cheque
ordinal | Int | Número de ordinal.
referencia | String | Referencia..
saldo | Double | Saldo de cuenta vista.
tipoCambio | Double | Tipo de cambio de moneda.

### sBTDatoAdicional

::: center 
Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
detalle | String | Detalle de dato adicional.
:::
<!-- CIERRA SDT -->