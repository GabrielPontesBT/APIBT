---
title: Obtener Detalle de Préstamo Cancelado
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
::: note Devuelve el detalle del préstamo cancelado indicado.

**Nombre publicación:** BTPrestamos.ObtenerDetallePrestamoCancelado

**Programa:** RBTPG248

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de la operación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPrestamo | [sBTPrestamoCancelado](#sbtprestamocancelado) | Datos del préstamo cancelado.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador único de operación.
30002 | No se recuperó la operación para el Identificador: [Número de Identificador].
30003 | El préstamo no se encuentra cancelado.
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
      <bts:BTPrestamos.ObtenerDetallePrestamoCancelado>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1576177365F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>10118</bts:operacionUId>
      </bts:BTPrestamos.ObtenerDetallePrestamoCancelado>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ObtenerDetallePrestamoCancelado' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"operacionUId": "10118"
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
      <BTPrestamos.ObtenerDetallePrestamoCanceladoResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1576177365F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtPrestamo>
            <operacionUId>10118</operacionUId>
            <idOperacionFmt>74-0</idOperacionFmt>
            <idOperacionBT>0010100000101000000000000000002800000000000074001</idOperacionBT>
            <producto>
               <productoUId>36</productoUId>
               <nombre>Amortización Automática TF</nombre>
               <moneda>$</moneda>
               <papel>$</papel>
            </producto>
            <tipoProducto>AM</tipoProducto>
            <sucursal>Casa Matriz</sucursal>
            <simboloMoneda>$</simboloMoneda>
            <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
            <capitalOriginal>19999.00</capitalOriginal>
            <fechaValor>2018-05-15</fechaValor>
            <fechaVencimiento>2019-05-16</fechaVencimiento>
            <periodicidad>30</periodicidad>
            <plazo>366</plazo>
            <cantidadCuotas>12</cantidadCuotas>
            <fechaCancelacion>2020-03-05</fechaCancelacion>
            <claseTasa/>
            <tipoTasa>Lineal Anual</tipoTasa>
            <tipoDia>Meses Calendario</tipoDia>
            <tipoAno>365 Días</tipoAno>
            <tasaOriginal>23.000000</tasaOriginal>
            <plus>0.000000</plus>
            <cronograma>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2486.68</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2499.33</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2466.81</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2442.12</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2431.69</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2403.76</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2380.28</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2358.28</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2326.69</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2307.67</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2280.59</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2251.73</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
            </cronograma>
         </sdtPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerDetallePrestamoCancelado</Servicio>
            <Fecha>2019-08-13</Fecha>
            <Hora>10:04:44</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6656</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerDetallePrestamoCanceladoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": 1,
	  "Usuario": "BANTOTAL",
	  "Token": "1576177365F955E77534D3E0",
	  "Device": "AC"
	},
	"sdtPrestamo": {
	  "operacionUId": "10118",
	  "idOperacionFmt": "74-0",
	  "idOperacionBT": "0010100000101000000000000000002800000000000074001",
	  "producto": {
		"productoUId": "36",
		"nombre": "Amortización Automática TF",
		"moneda": "$",
		"papel": "$"
	  },
	  "tipoProducto": "AM",
	  "sucursal": "Casa Matriz",
	  "simboloMoneda": "$",
	  "tipoAmortizacion": "Francés con Seg.e Impu.",
	  "capitalOriginal": "19999.00",
	  "fechaValor": "2018-05-15",
	  "fechaVencimiento": "2019-05-16",
	  "periodicidad": "30",
	  "plazo": "366",
	  "cantidadCuotas": "12",
	  "fechaCancelacion": "2020-03-05",
	  "tipoTasa": "Lineal Anual",
	  "tipoDia": "Meses Calendario",
	  "tipoAno": "365 Días",
	  "tasaOriginal": "23.000000",
	  "plus": "0.000000",
	  "cronograma": {
		"sBTCuotaCancelada": [
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2486.68",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2499.33",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2466.81",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2442.12",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2431.69",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2403.76",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2380.28",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2358.28",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2326.69",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2307.67",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2280.59",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2251.73",
			"diasMora": "0"
		  }
		]
	  }
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTPrestamos.ObtenerDetallePrestamoCancelado",
	  "Fecha": "2019-08-13",
	  "Hora": "10:04:44",
	  "Requerimiento": 1,
	  "Numero": "6656",
	  "Estado": "OK"
	}
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPrestamoCancelado  

### sBTPrestamoCancelado

::: center 
Los campos del tipo de dato estructurado sBTPrestamoCancelado son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cantidadCuotas | Int | Cantidad de cuotas del préstamo. 
capitalOriginal | Double | Capital original del préstamo. 
claseTasa | String | Clase de tasa. 
cronograma | [sBTCuotaCancelada](#sbtcuotacancelada) | Cronograma de pagos del préstamo. 
fechaCancelacion | Date | Fecha de cancelación del préstamo. 
fechaValor | Date | Fecha de alta del préstamo. 
fechaVencimiento | Date | Fecha de vencimiento del préstamo. 
idOperacionBT | String | Identificador texto de operación. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
operacionUId | Long | Identificador único de la operación simulada. 
periodicidad | Int | Período entre cuotas. 
plazo | Int | Plazo del préstamo. 
plus | Double | Tasa plus. 
producto | [sBTProducto](#sbtproducto) | Datos del Producto. 
simboloMoneda | String | Símbolo monetario. 
sucursal | String | Sucursal del préstamo. 
tasaEfectiva | Double | Tasa efectiva anual. 
tasaOriginal | Double | Tasa original. 
tipoAmortizacion | String | Tipo de amortización. 
tipoAno | String | Tipo de año. 
tipoDia | String | Tipo de día del préstamo. 
tipoProducto | String | Tipo de producto (Amortizable/Plan de pagos). 
tipoTasa | String | Tipo de tasa. 
 
### sBTProducto

::: center 
Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
moneda | String | Símbolo de la moneda. 
nombre | String | Nombre del producto. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Datos de otros conceptos.
papel | String | Símbolo del papel. 
productoUId | Long | Identificador único de producto. 

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.

### sBTCuotaCancelada

::: center 
Los campos del tipo de dato estructurado sBTCuotaCancelada son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
diasMora | Short | Días de mora con los que se pago la cuota. 
fechaPago | Date | Fecha de pago. 
importePago | Double | Importe total pago de la cuota. 
:::
<!-- CIERRA SDT -->