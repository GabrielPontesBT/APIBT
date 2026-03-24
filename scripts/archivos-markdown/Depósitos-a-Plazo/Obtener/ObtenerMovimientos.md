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
::: note Método para obtener un listado de los movimientos realizados para un producto depósito a plazo.

**Nombre publicación:** BTDepositosAPlazo.ObtenerMovimientos

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
30002 | No se recuperó la operación para el identificador: [Número de identificador]. 
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
      <bts:BTDepositosAPlazo.ObtenerMovimientos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>5</bts:operacionUId>
      </bts:BTDepositosAPlazo.ObtenerMovimientos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerMovimientos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "a519a7f39d4A8B5C60A82434"
	},
    "operacionUId": 5
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
      <BTDepositosAPlazo.ObtenerMovimientosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtEstadoDeCuenta>
            <saldoPartida>0.00</saldoPartida>
            <fechaHasta>2018-10-09</fechaHasta>
            <productoUId>5</productoUId>
            <movimientos></movimientos>
            <fechaDesde>2018-07-11</fechaDesde>
         </sdtEstadoDeCuenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>914</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.ObtenerMovimientos</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:00:53</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ObtenerMovimientosResponse>
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
      "saldoPartida": "0.00",
      "fechaHasta": "2018-10-09",
      "productoUId": "5",
      "fechaDesde": "2018-07-11",
      "movimientos": {
         "sBTMovimiento": []
      },
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "915",
      "Estado": "OK",
      "Servicio": "BTDepositosAPlazo.ObtenerMovimientos",
      "Fecha": "2017-12-21",
      "Requerimiento": "",
      "Hora": "17:01:31",
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
Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
fechaDesde | Date | Fecha desde la cual se emite el estado de cuenta. 
fechaHasta | Date | Fecha hasta la cual se emite el estado de cuenta. 
movimientos | [sBTMovimiento](#sbtmovimiento) | Listado de movimientos. 
productoUId | Long | Identificador único de producto. 
saldoPartida | Double | Saldo inicial. 

### sBTMovimiento

::: center 
Los campos del tipo de dato estructurado sBTMovimiento son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
arbitraje | Double | Arbitraje de moneda. 
concepto | String | Concepto de movimiento. 
debitoCredito | String | Débito o Crédito (D/C). 
fecha | Date | Fecha de movimiento. 
hora | String | Hora de movimiento. 
importe | Double | Importe de movimiento. 
moneda | String | Símbolo de moneda. 
movimientoUId | Long | Identificador único de movimiento. 
numeroCheque | Int | Número de cheque. 
referencia | String | Referencia. 
saldo | Double | Saldo del depósito. 
tipoCambio | Double | Tipo de cambio de moneda. 
:::
<!-- CIERRA SDT -->