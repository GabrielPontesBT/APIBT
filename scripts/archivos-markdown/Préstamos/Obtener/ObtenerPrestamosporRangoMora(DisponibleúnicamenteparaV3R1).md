---
title: Obtener Préstamos por Rango Mora
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
::: note Método para obtener los préstamos que estén dentro del rango de mora ingresado.

**Nombre publicación:** BTPrestamos.ObtenerPrestamosPorRangoMora

**Programa:** RBTPG471

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
diasMoraDesde | Int | Días de mora desde.
diasMoraHasta | Int | Días de mora hasta.
actualiza | String | Habilita la actualización en la tabla SNG912 con los datos del préstamo [Hidden: Valor fijo 'S'].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtDatosPrestamos | [sBTDatosPrestamo](#sbtdatosprestamo) | Listado de los préstamos que están dentro del rango de días de mora.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | Días Mora Hasta no puede ser menor a Días Mora Desde. 
30003 | No existe registro para el producto indicado. 
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
      <bts:BTPrestamos.ObtenerPrestamosPorRangoMora>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>d51ae0498699865B3A2E76CF</bts:Token>
         </bts:Btinreq>
         <bts:diasMoraDesde>23</bts:diasMoraDesde>
         <bts:diasMoraHasta>100</bts:diasMoraHasta>
      </bts:BTPrestamos.ObtenerPrestamosPorRangoMora>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPrestamosPorRangoMora=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \
  -d '{
	"Btinreq": {
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Device": "GZ",
    "Usuario": "Instalador",
    "Token": "d51ae0498699865B3A2E76CF"
  },
  "diasMoraDesde": 23,
  "diasMoraHasta": 100
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
        <BTPrestamos.ObtenerPrestamosPorRangoMoraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>Instalador</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ad33e17b1199865B3A2E76CF</Token>
         </Btinreq>
         <sdtDatosPrestamos>
            <sBTDatosPrestamo>
               <plazo>113</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>521.12</deudaTotalVencida>
               <periodicidad>15</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2023-02-15</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>S/</moneda>
                  <productoUId>1</productoUId>
                  <nombre>PRÉSTAMO-Financiero 9</nombre>
                  <otrosConceptos></otrosConceptos>
               </producto>
               <clienteUId>253</clienteUId>
               <fechaProximoVencimiento>2023-01-31</fechaProximoVencimiento>
               <tasaVigente>83.230000</tasaVigente>
               <fechaPrimerCuotaImpaga>2022-10-25</fechaPrimerCuotaImpaga>
               <valorCuota>75.77</valorCuota>
               <saldoCapital>500.00</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>6</cantidadCuotasVencidas>
               <capitalOriginal>500.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>672.70</deudaCancelacionTotal>
               <diasMora>95</diasMora>
               <operacionUId>5819</operacionUId>
               <cantidadCuotasImpagas>8</cantidadCuotasImpagas>
               <deudaTotalAFecha>596.89</deudaTotalAFecha>
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso>
               <fechaUltimoPago/>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>40.000000</tasaMoraVigente>
               <sucursal>MIRAFLORES</sucursal>
               <fechaValor>2022-10-25</fechaValor>
               <cantidadCuotas>8</cantidadCuotas>
            </sBTDatosPrestamo>
            <sBTDatosPrestamo>
               <plazo>112</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>770.80</deudaTotalVencida>
               <periodicidad>15</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2023-02-15</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>S/</moneda>
                  <productoUId>1</productoUId>
                  <nombre>PRÉSTAMO-Financiero 9</nombre>
                  <otrosConceptos></otrosConceptos>
               </producto>
               <clienteUId>310</clienteUId>
               <fechaProximoVencimiento>2023-01-31</fechaProximoVencimiento>
               <tasaVigente>83.230000</tasaVigente>
               <fechaPrimerCuotaImpaga>2022-10-26</fechaPrimerCuotaImpaga>
               <valorCuota>117.50</valorCuota>
               <saldoCapital>800.00</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>6</cantidadCuotasVencidas>
               <capitalOriginal>800.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>1006.52</deudaCancelacionTotal>
               <diasMora>94</diasMora>
               <operacionUId>9197</operacionUId>
               <cantidadCuotasImpagas>8</cantidadCuotasImpagas>
               <deudaTotalAFecha>888.30</deudaTotalAFecha>
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso>
               <fechaUltimoPago/>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>40.000000</tasaMoraVigente>
               <sucursal>MIRAFLORES</sucursal>
               <fechaValor>2022-10-26</fechaValor>
               <cantidadCuotas>8</cantidadCuotas>
            </sBTDatosPrestamo>
         </sdtDatosPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>227484</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerPrestamosPorRangoMora</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-05-09</Fecha>
            <Hora>12:58:32</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerPrestamosPorRangoMoraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Device": "GZ",
    "Usuario": "Instalador",
    "Token": "d51ae0498699865B3A2E76CF"
	},
    "sdtDatosPrestamos": {
    "sBTDatosPrestamo": [
      {
        "plazo": 113,
        "eventosPosteriores": "N",
        "deudaTotalVencida": 521.12,
        "periodicidad": 15,
        "simboloMoneda": "$",
        "fechaVencimiento": "2023-02-15",
        "producto": {
          "papel": "$",
          "moneda": "S/",
          "productoUId": 1,
          "nombre": "PRÉSTAMO-Financiero 9",
          "otrosConceptos":""
        },
        "clienteUId": 253,
        "fechaProximoVencimiento": "2023-01-31",
        "tasaVigente": 83.23,
        "fechaPrimerCuotaImpaga": "2022-10-25",
        "valorCuota": 75.77,
        "saldoCapital": 500,
        "otrosConceptos": "",
        "cantidadCuotasVencidas": 6,
        "capitalOriginal": 500,
        "tir": 0,
        "deudaCancelacionTotal": 672.7,
        "diasMora": 95,
        "operacionUId": 5819,
        "cantidadCuotasImpagas": 8,
        "deudaTotalAFecha": 596.89,
        "cuotasPagasConRetraso": 0,
        "fechaUltimoPago": "",
        "tipoAmortizacion": "Francés con Seg.e Impu.",
        "datosAdicionales": "",
        "estado": "Normal",
        "tasaMoraVigente": 40,
        "sucursal": "MIRAFLORES",
        "fechaValor": "2022-10-25",
        "cantidadCuotas": 8
      },
      {
        "plazo": 112,
        "eventosPosteriores": "N",
        "deudaTotalVencida": 770.8,
        "periodicidad": 15,
        "simboloMoneda": "$",
        "fechaVencimiento": "2023-02-15",
        "producto": {
          "papel": "$",
          "moneda": "S/",
          "productoUId": 1,
          "nombre": "PRÉSTAMO-Financiero 9",
          "otrosConceptos":""
        },
        "clienteUId": 310,
        "fechaProximoVencimiento": "2023-01-31",
        "tasaVigente": 83.23,
        "fechaPrimerCuotaImpaga": "2022-10-26",
        "valorCuota": 117.5,
        "saldoCapital": 800,
        "otrosConceptos": "",
        "cantidadCuotasVencidas": 6,
        "capitalOriginal": 800,
        "tir": 0,
        "deudaCancelacionTotal": 1006.52,
        "diasMora": 94,
        "operacionUId": 9197,
        "cantidadCuotasImpagas": 8,
        "deudaTotalAFecha": 888.3,
        "cuotasPagasConRetraso": 0,
        "fechaUltimoPago": "",
        "tipoAmortizacion": "Francés con Seg.e Impu.",
        "datosAdicionales": "",
        "estado": "Normal",
        "tasaMoraVigente": 40,
        "sucursal": "MIRAFLORES",
        "fechaValor": "2022-10-26",
        "cantidadCuotas": 8
      }
    ]
  },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "901",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerPrestamosPorRangoMora",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "12:27:52",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDatosPrestamo

### sBTDatosPrestamo

::: center
Los campos del tipo de dato estructurado sBTDatosPrestamo son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
cantidadCuotas | Int | Cantidad de cuotas del préstamo.
cantidadCuotasImpagas | Int | Cantidad de cuotas impagas.
cantidadCuotasVencidas | Int | Cantidad de cuotas vencidas.
capitalOriginal | Double | Capital original del préstamo.
clienteUId | Int | Identificador único del cliente.
cuotasPagasConRetraso | Int | Cantidad de cuotas pagas con retraso.
datosAdicionales | [sBTDatoAdicional](#sbtdatoadicional) | Listado de datos adicionales.
deudaCancelacionTotal | Double | Monto de cancelación total.
deudaTotalAFecha | Double | Monto a pagar para estar al día.
deudaTotalVencida | Double | Monto de la deuda vencida a la fecha.
diasMora | Int | Días de mora del préstamo.
estado | String | Estado.
eventosPosteriores | String | Hay eventos posteriores (S/N).
fechaPrimerCuotaImpaga | Date | Fecha de la primera cuota impaga.
fechaProximoVencimiento | Date | Fecha de vencimiento de la próxima cuota.
fechaUltimoPago | Date | Fecha de último pago de cuota.
fechaValor | Date | Fecha de alta del préstamo.
fechaVencimiento | Date | Fecha de vencimiento del préstamo.
operacionUId | Long | Identificador único de la operación.
otrosConceptos | [sBTConcepto](#sbtconcepto) | Otros conceptos del préstamo.
periodicidad | Int | Período entre cuotas.
plazo | Int | Plazo.
producto | [sBTProducto](#sbtproducto) | Descripción del producto.
saldoCapital | Double | Saldo de capital.
simboloMoneda | Sting | Símbolo monetario.
sucursal | String | Sucursal del préstamo.
tasaMoraVigente | Double | Tasa de mora vigente.
tasaVigente | Double | Tasa vigente.
tipoAmortizacion | String | Tipo de amortización.
tir | Double | Tir.
valorCuota | Double | Valor de la cuota.

### sBTProducto

::: center 
Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
moneda | String | Símbolo de la moneda. 
nombre | String | Nombre del producto. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Datos de otros conceptos.
papel | String | Símbolo del papel. 
productoUId | Long | Identificador único de producto. 

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.

### sBTDatoAdicional

Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
detalle | String | Detalle de dato adicional.
:::
<!-- CIERRA SDT -->