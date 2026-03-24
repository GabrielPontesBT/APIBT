---
title: Obtener Estado de Cuenta por Período
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
::: note Método para obtener el estado de cuenta y los movimientos realizados para una cuenta vista en determinado rango de fechas.

**Nombre publicación:** BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodo

**Programa:** RBTPG250

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.
fechaDesde | Date | Fecha desde la cual se emite el estado de cuenta.
fechaHasta | Date | Fecha hasta la cual se emite el estado de cuenta.
cantidadMovimientos | Int | Cantidad de movimientos [Hidden: Valor fijo '20' para este método].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtEstadoDeCuenta | [sBTEstadoCuentaCV](#sbtestadocuentacv) | Datos de Estado de Cuenta.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de operación. 
30002 | No se recuperó la operación para el Identificador: [Número de identificador]. 
30004 | La operación ingresada no corresponde a una cuenta vista. 
30005 | Debe ingresar cantidad de movimientos. 
30006 | Debe ingresar la fecha desde. 
30007 | Debe ingresar la fecha hasta. 
30008 | Fecha desde tiene que ser menor a fecha hasta. 
40001 | No existe una empresa con los datos ingresados. 
40002 | No se pudo resolver la empresa del usuario. 
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
      <bts:BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodo>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>GP</bts:Device>
            <bts:Token>ad9ab7ecba4A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:operacionUId>523</bts:operacionUId>
         <bts:fechaDesde>2018-12-09</bts:fechaDesde>
         <bts:fechaHasta>2018-12-10</bts:fechaHasta>
         <bts:cantidadMovimientos>2</bts:cantidadMovimientos>
      </bts:BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?ObtenerEstadoDeCuentaPorPeriodo \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
      "operacionUId": "523",
      "fechaDesde": "2018-12-09",
      "fechaHasta": "2018-12-10",
      "cantidadMovimientos": "2"
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
      <BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ad9ab7ecba4A8B5C60A82434</Token>
         </Btinreq>
         <sdtEstadoDeCuenta>
            <saldoPartida>166666.67</saldoPartida>
            <fechaHasta>2018-12-10</fechaHasta>
            <productoUID>523</productoUID>
            <movimientos>
               <sBTMovimiento>
                  <moneda>$</moneda>
                  <hora>13:56:48</hora>
                  <referencia/>
                  <concepto>Transferencia entre cuentas</concepto>
                  <movimientoUId>344</movimientoUId>
                  <datosAdicionales></datosAdicionales>
                  <debitoCredito>C</debitoCredito>
                  <saldo>246666.67</saldo>
                  <importe>80000.00</importe>
                  <numeroCheque>0</numeroCheque>
                  <tipoCambio>0.000000</tipoCambio>
                  <arbitraje>0.000000</arbitraje>
                  <fecha>2018-12-10</fecha>
               </sBTMovimiento>
               <sBTMovimiento>
                  <moneda>$</moneda>
                  <hora>13:55:11</hora>
                  <referencia/>
                  <concepto>Transferencia entre cuentas</concepto>
                  <movimientoUId>343</movimientoUId>
                  <datosAdicionales></datosAdicionales>
                  <debitoCredito>C</debitoCredito>
                  <saldo>166666.67</saldo>
                  <importe>20000.00</importe>
                  <numeroCheque>0</numeroCheque>
                  <tipoCambio>0.000000</tipoCambio>
                  <arbitraje>0.000000</arbitraje>
                  <fecha>2018-12-10</fecha>
               </sBTMovimiento>
            </movimientos>
            <fechaDesde>2018-12-09</fechaDesde>
         </estadoDeCuenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>546</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodo</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-08-15</Fecha>
            <Hora>13:57:44</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodoResponse>
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
         "saldoPartida": "166666.67",
         "fechaHasta": "2018-12-10",
         "productoUID": "523",
         "movimientos": [
            {
            "moneda": "$",
            "hora": "13:56:48",
            "concepto": "Transferencia entre cuentas",
            "movimientoUId": "344",
            "debitoCredito": "C",
            "saldo": "246666.67",
            "importe": "80000.00",
            "numeroCheque": "0",
            "tipoCambio": "0.000000",
            "arbitraje": "0.000000",
            "fecha": "2018-12-10"
            },
            {
            "moneda": "$",
            "hora": "13:55:11",
            "concepto": "Transferencia entre cuentas",
            "movimientoUId": "343",
            "debitoCredito": "C",
            "saldo": "166666.67",
            "importe": "20000.00",
            "numeroCheque": "0",
            "tipoCambio": "0.000000",
            "arbitraje": "0.000000",
            "fecha": "2018-12-10"
            }
         ]	 
	  },
	  "fechaDesde": "2018-12-09",
	  "Btoutreq": {
		"Numero": "546",
		"Estado": "OK",
		"Servicio": "BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodo",
		"Requerimiento": "1",
		"Fecha": "2019-08-15",
		"Hora": "13:57:44",
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
movimientos | [sBTMovimiento](#sbtmovimiento) | Datos de Movimiento.
productoUId | Long | Identificador de producto. 
saldoPartida | Double | Saldo inicial. 

### sBTMovimiento

::: center 
Los campos del tipo de dato estructurado sBTMovimiento son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
arbitraje | Double | Arbitraje de moneda. 
concepto | String | Concepto de movimiento. 
datosAdicionales | [sBTDatoAdicional](#sbtdatoadicional) | Datos Adicionales.
debitoCredito | String | Débito o Crédito (D o C). 
fecha | Date | fecha de movimiento. 
hora | String | hora de movimiento. 
importe | Double | Importe de movimiento. 
moneda | String | Símbolo de moneda. 
movimientoUId | Long | Identificador de movimiento. 
numeroCheque | Int | Número de cheque. 
ordinal | Short | Ordinal.  
referencia | String | Referencia. 
saldo | Double | Saldo de Cuenta Vista. 
tipoCambio | Double | Tipo de cambio de moneda. 

### sBTDatoAdicional

::: center 
Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
detalle | String | Detalle del dato adicional.
:::
<!-- CIERRA SDT -->