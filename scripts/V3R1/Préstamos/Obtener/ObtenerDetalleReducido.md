---
title: Obtener Detalle Reducido
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
::: note Método para obtener los datos básicos de un préstamo.

**Nombre publicación:** BTPrestamos.ObtenerDetalleReducido

**Programa:** RBTPG073

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación simulada.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPrestamo | [sBTPrestamo](#sbtprestamo) | Datos del préstamo

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de operación.
30002 | No se recuperó la operación para el identificador: [Número de Identificador].
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
      <bts:BTPrestamos.ObtenerDetalleReducido>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6453f934f94A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>142</bts:operacionUId>
      </bts:BTPrestamos.ObtenerDetalleReducido>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleReducido=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 142
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
      <BTPrestamos.ObtenerDetalleReducidoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>6453f934f94A8B5C60A82434</Token>
         </Btinreq>
         <sdtPrestamo>
            <sucursal>Sucursal Beta</sucursal>
            <cuotasPagasConRetaso>0</cuotasPagasConRetaso>
            <idOperacionBT>0010000100115000000000000000002700000000000326001</idOperacionBT>
            <cantidadCuotas>37</cantidadCuotas>
            <capitalOriginal>180000.00</capitalOriginal>
            <estado>Normal</estado>
            <operacionUId>142</operacionUId>
            <tasaVigente>10.000000</tasaVigente>
            <plazo>1096</plazo>
            <saldoCapital>-174180.15</saldoCapital>
            <tipoTasa>Lineal Anual</tipoTasa>
            <producto>
               <papel/>
               <moneda/>
               <productoUId>0</productoUId>
               <nombre>Amort. - Capital F./Empr.- T/F</nombre>
            </producto>
            <idOperacionFmt>326-0</idOperacionFmt>
            <fechaValor>2018-05-18</fechaValor>
            <fechaVencimiento>2021-05-18</fechaVencimiento>
            <cantidadCuotasImpagas>36</cantidadCuotasImpagas>
         </sdtPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>766</Numero>
            <Servicio>BTPrestamos.ObtenerDetalleReducido</Servicio>
            <Estado>OK</Estado>
            <Requerimiento/>
            <Fecha>2017-12-12</Fecha>
            <Hora>10:55:30</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleReducidoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtPrestamo": {
        "sucursal": "Sucursal Beta",
        "idOperacionBT": "0010000100115000000000000000002700000000000326001",
        "cantidadCuotas": "37",
        "capitalOriginal": "180000.00",
        "estado": "Normal",
        "operacionUId": "142",
        "tasaVigente": "10.000000",
        "plazo": "1096",
        "saldoCapital": "-174180.15",
        "tipoTasa": "Lineal Anual",
        "producto": {
            "papel": "",
            "moneda": "",
            "productoUId": "0",
            "nombre": "Amort. - Capital F./Empr.- T/F"
        },
        "fechaValor": "2018-05-18",
        "fechaVencimiento": "2021-05-18",
        "cantidadCuotasImpagas": "36",
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "767",
        "Servicio": "BTPrestamos.ObtenerDetalleReducido",
        "Estado": "OK",
        "Requerimiento": 1,
        "Fecha": "2017-12-12",
        "Hora": "11:15:09",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPrestamo  

### sBTPrestamo

::: center 
Los campos del tipo de dato estructurado sBTPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cantidadCuotas | Int | Cantidad de cuotas del préstamo. 
cantidadCuotasImpagas | Int | Cantidad de cuotas impagas. 
capitalOriginal | Double | Capital original del préstamo. 
estado | String | Estado del préstamo. 
fechaValor | Date | Fecha de alta del préstamo. 
fechaVencimiento | Date | Fecha de vencimiento del préstamo. 
idOperacionBT | String | Identificador texto de operación. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
operacionUId | Long | Identificador único de la operación simulada. 
plazo | Int | Plazo del préstamo. 
producto | [sBTProducto](#sbtproducto) | Producto. 
saldoCapital | Double | Saldo de capital. 
simboloMoneda | String | Símbolo monetario. 
sucursal | String | Sucursal del préstamo. 
tasaVigente | Double | Tasa vigente. 
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
:::
<!-- CIERRA SDT -->