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
::: note Método para obtener los movimientos de una tarjeta de débito.

**Nombre publicación:** BTTarjetasDeDebito.ObtenerMovimientos

**Programa:** RBTPG026

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
tarjetaUId | Long | Identificador único de la tarjeta.
fechaDesde | Date | Fecha desde la cual se emite el estado de cuenta.
fechaHasta | Date | Fecha hasta la cual se emite el estado de cuenta.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtEstadoDeCuenta | [sBTEstadoCuentaDebito](#sbtestadocuentadebito) | Datos del estado de cuenta de la tarjeta de débito.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de tarjeta.
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
      <bts:BTTarjetasDeDebito.ObtenerMovimientos>
         <bts:Btinreq>
            <bts:Device>AC</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>52005b89a6F955E77534D3E0</bts:Token>
         </bts:Btinreq>
         <bts:tarjetaUId>2000002067</bts:tarjetaUId>
         <bts:fechaDesde>2000-01-01</bts:fechaDesde>
         <bts:fechaHasta>2020-01-01</bts:fechaHasta>
      </bts:BTTarjetasDeDebito.ObtenerMovimientos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ObtenerMovimientos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "324915377F955E77534D3E02"
	},
   "tarjetaUId": "2000002067",
   "fechaDesde": "2000-01-01",
   "fechaHasta": "2020-01-01"
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
      <BTTarjetasDeDebito.ObtenerMovimientosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>52005b89a6F955E77534D3E0</Token>
         </Btinreq>
         <sdtEstadoDeCuenta>
            <movimientos>
               <sBTMovimientoDebito>
                  <moneda>PESOS</moneda>
                  <hora>11:32:16</hora>
                  <codigoMovimiento>EXTRACCIÓN EXTERIOR</codigoMovimiento>
                  <referencia/>
                  <red>LINK</red>
                  <concepto/>
                  <importe>100.00</importe>
                  <debitoOCredito>D</debitoOCredito>
                  <banco/>
                  <fecha>2017-06-20</fecha>
               </sBTMovimientoDebito>
               <sBTMovimientoDebito>
                  <moneda>PESOS</moneda>
                  <hora>11:32:17</hora>
                  <codigoMovimiento>EXTRACCIÓN EXTERIOR</codigoMovimiento>
                  <referencia/>
                  <red>LINK</red>
                  <concepto/>
                  <importe>100.00</importe>
                  <debitoOCredito>D</debitoOCredito>
                  <banco/>
                  <fecha>2017-06-20</fecha>
               </sBTMovimientoDebito>
               <sBTMovimientoDebito>
                  <moneda>PESOS</moneda>
                  <hora>11:32:18</hora>
                  <codigoMovimiento>EXTRACCIÓN EXTERIOR</codigoMovimiento>
                  <referencia/>
                  <red>LINK</red>
                  <concepto/>
                  <importe>100.00</importe>
                  <debitoOCredito>D</debitoOCredito>
                  <banco/>
                  <fecha>2017-06-20</fecha>
               </sBTMovimientoDebito>               <sBTMovimientoDebito>
                  <moneda>PESOS</moneda>
                  <hora>11:32:19</hora>
                  <codigoMovimiento>EXTRACCIÓN EXTERIOR</codigoMovimiento>
                  <referencia/>
                  <red>LINK</red>
                  <concepto/>
                  <importe>100.00</importe>
                  <debitoOCredito>D</debitoOCredito>
                  <banco/>
                  <fecha>2017-06-20</fecha>
               </sBTMovimientoDebito>
			   <sBTMovimientoDebito>
                  <moneda>PESOS</moneda>
                  <hora>11:32:56</hora>
                  <codigoMovimiento>EXTRACCIÓN LOCAL</codigoMovimiento>
                  <referencia/>
                  <red>REDBROU</red>
                  <concepto/>
                  <importe>100.00</importe>
                  <debitoOCredito>D</debitoOCredito>
                  <banco/>
                  <fecha>2017-06-20</fecha>
               </sBTMovimientoDebito>
               <sBTMovimientoDebito>
                  <moneda>PESOS</moneda>
                  <hora>11:32:57</hora>
                  <codigoMovimiento>COMPRAS POS EXTERIOR</codigoMovimiento>
                  <referencia/>
                  <red>CIRRUS</red>
                  <concepto/>
                  <importe>120.00</importe>
                  <debitoOCredito>D</debitoOCredito>
                  <banco/>
                  <fecha>2017-06-20</fecha>
               </sBTMovimientoDebito>
            </movimientos>
         </sdtEstadoDeCuenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>673</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTarjetasDeDebito.ObtenerMovimientos</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-04-23</Fecha>
            <Hora>14:06:18</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerMovimientosResponse>
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
	"sdtEstadoDeCuenta": { 
		"movimientos": { 
		  "sBTMovimientoDebito": [ 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:16", 
			  "codigoMovimiento": "EXTRACCIÓN EXTERIOR", 
			  "referencia": "", 
			  "red": "LINK", 
			  "concepto": "", 
			  "importe": "100.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			}, 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:17", 
			  "codigoMovimiento": "EXTRACCIÓN EXTERIOR", 
			  "referencia": "", 
			  "red": "LINK", 
			  "concepto": "", 
			  "importe": "100.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			}, 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:18", 
			  "codigoMovimiento": "EXTRACCIÓN EXTERIOR", 
			  "referencia": "", 
			  "red": "LINK", 
			  "concepto": "", 
			  "importe": "100.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			}, 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:19", 
			  "codigoMovimiento": "EXTRACCIÓN EXTERIOR", 
			  "referencia": "", 
			  "red": "LINK", 
			  "concepto": "", 
			  "importe": "100.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			}, 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:56", 
			  "codigoMovimiento": "EXTRACCIÓN LOCAL", 
			  "referencia": "", 
			  "red": "REDBROU", 
			  "concepto": "", 
			  "importe": "100.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			}, 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:57", 
			  "codigoMovimiento": "COMPRAS POS EXTERIOR", 
			  "referencia": "", 
			  "red": "CIRRUS", 
			  "concepto": "", 
			  "importe": "120.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			} 
		  ] 
		} 
	}, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTTarjetasDeDebito.ObtenerMovimientos", 
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

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTEstadoCuentaDebito  

### sBTEstadoCuentaDebito

::: center 
Los campos del tipo de dato estructurado sBTEstadoCuentaDebito son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
movimientos | [sBTMovimientoDebito](#sbtmovimientodebito) | Listado de movimientos.

### sBTMovimientoDebito

Los campos del tipo de dato estructurado sBTMovimientoDebito son los siguientes:

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
banco | String | Nombre del banco. 
codigoMovimiento | String | Código de movimiento. 
concepto | String | Concepto del movimiento. 
debitoOCredito | String | Débito o crédito (D/C). 
fecha | Date | Fecha del movimiento. 
hora | String | Hora de movimiento. 
importe | Double | Importe. 
moneda | String | Moneda del movimiento. 
red | String | Red por donde se realizó el movimiento. 
referencia | String | Referencia. 
:::
<!-- CIERRA SDT -->