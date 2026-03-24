---
title: Obtener Estado de Cuenta
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
::: note Método para obtener el estado de cuenta de un producto de cuenta de ahorro.

**Nombre publicación:** BTCuentasDeAhorro.ObtenerEstadoDeCuenta

**Programa:** RBTPG004

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.
cantidadDias | Int | Cantidad de días para atrás (Se puede parametrizar como parámetro Hidden para que el servicio siempre tome el mismo valor por defecto, o se puede dejar editable para que el usuario ingrese el valor).
cantidadMovimientos | Int | Cantidad de movimientos (Se puede parametrizar como parámetro Hidden para que el servicio siempre tome el mismo valor por defecto, o se puede dejar editable para que el usuario ingrese el valor).

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtEstadoDeCuenta | [sBTEstadoCuentaCV](#sbtestadocuentacv) | Datos de estado de cuenta.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de operación. 
30002 | No se recuperó operación para el identificador: [Número de identificador]. 
30003 | La operación ingresada no corresponde a una cuenta de ahorro. 
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
      <bts:BTCuentasDeAhorro.ObtenerEstadoDeCuenta>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>281</bts:operacionUId>
      </bts:BTCuentasDeAhorro.ObtenerEstadoDeCuenta>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasDeAhorro?ObtenerEstadoDeCuenta=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: c27aec65-f66f-b138-f9d3-15a243b6d5e4' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 281
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
      <BTCuentasDeAhorro.ObtenerEstadoDeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtEstadoDeCuenta>
            <saldoPartida>208750.00</saldoPartida>
            <fechaHasta>2018-10-09</fechaHasta>
            <productoUId>9</productoUId>
            <movimientos>
               <sBTMovimiento>
                  <movimientoUId>135</movimientoUId>
                  <fecha>2018-10-09</fecha>
                  <hora>16:45:54</hora>
                  <concepto/>
                  <referencia/>
                  <numeroCheque>0</numeroCheque>
                  <debitoCredito>D</debitoCredito>
                  <moneda/>
                  <importe>5000.00</importe>
                  <tipoCambio>0.000000</tipoCambio>
                  <arbitraje>0.000000</arbitraje>
                  <saldo>143750.00</saldo>
               </sBTMovimiento>
               <sBTMovimiento>
                  <movimientoUId>216</movimientoUId>
                  <fecha>2018-09-10</fecha>
                  <hora>12:10:37</hora>
                  <concepto/>
                  <referencia/>
                  <numeroCheque>0</numeroCheque>
                  <debitoCredito>D</debitoCredito>
                  <moneda/>
                  <importe>5000.00</importe>
                  <tipoCambio>0.000000</tipoCambio>
                  <arbitraje>0.000000</arbitraje>
                  <saldo>148750.00</saldo>
               </sBTMovimiento>
            </movimientos>
            <fechaDesde>2018-07-11</fechaDesde>
         </sdtEstadoDeCuenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>927</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasDeAhorro.ObtenerEstadoDeCuenta</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:32:38</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasDeAhorro.ObtenerEstadoDeCuentaResponse>
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
    "sdtEstadoDeCuenta": {
        "saldoPartida": "208750.00",
        "fechaHasta": "2018-10-09",
        "productoUId": "9",
        "movimientos": {
            "sBTMovimiento": [
                {
                    "moneda": "",
                    "hora": "16:45:54",
                    "referencia": "",
                    "concepto": "",
                    "movimientoUId": "135",
                    "debitoCredito": "D",
                    "saldo": "143750.00",
                    "importe": "5000.00",
                    "numeroCheque": "0",
                    "tipoCambio": "0.000000",
                    "arbitraje": "0.000000",
                    "fecha": "2018-10-09"
                },
                {
                    "moneda": "",
                    "hora": "12:10:37",
                    "referencia": "",
                    "concepto": "",
                    "movimientoUId": "216",
                    "debitoCredito": "D",
                    "saldo": "148750.00",
                    "importe": "5000.00",
                    "numeroCheque": "0",
                    "tipoCambio": "0.000000",
                    "arbitraje": "0.000000",
                    "fecha": "2018-09-10"
                }
            ]
        },
        "fechaDesde": "2018-07-11"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "928",
        "Estado": "OK",
        "Servicio": "BTCuentasDeAhorro.ObtenerEstadoDeCuenta",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "17:33:12",
        "Canal": "BTDIGITAL"
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