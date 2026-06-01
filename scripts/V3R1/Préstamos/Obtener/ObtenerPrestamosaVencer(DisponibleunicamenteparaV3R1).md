---
title: Obtener Préstamos a Vencer
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
::: note Método para obtener los préstamos que están por vencer dentro de determinados días.

**Nombre publicación:** BTPrestamos.ObtenerPrestamosAVencer

**Programa:** RBTPG472

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
diasVtoCuota | Int | Días que faltan para el vencimiento de los préstamos.
hiddenAux | String | [Hidden: parámetros auxiliares].
actualiza | String | Habilita la actualización en la tabla SNG912 con los datos del préstamo [Hidden: Valor fijo 'S'].
offset | Int | Página de registros a obtener.
limit | Int | Tamaño de paginado.
contarRegistros | String | ¿Retorna cantidad de registros? (S/N)

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
quedanRegistros | String | ¿Existen más registros de los devueltos? (S/N)
cantidadRegistros | Int | Cantidad de registros totales.
sdtDatosPrestamos | [sBTDatosPrestamo](#sbtdatosprestamo) | Listado de los préstamos que están por vencer en determinados días.

@tab Errores

Código | Descripción
:--------- | :---------
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
      <bts:BTPrestamos.ObtenerPrestamosAVencer>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>ad33e17b1199865B3A2E76CF</bts:Token>
         </bts:Btinreq>
         <bts:diasVtoCuota>2</bts:diasVtoCuota>
         <bts:actualiza>N</bts:actualiza>
         <bts:offset>1</bts:offset>
         <bts:limit>10</bts:limit>
         <bts:contarRegistros>N</bts:contarRegistros>
      </bts:BTPrestamos.ObtenerPrestamosAVencer>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPrestamosAVencer=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \
  -d '{
  "Btinreq": {
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Device": "GZ",
    "Usuario": "Instalador",
    "Token": "ad33e17b1199865B3A2E76CF"
  },
  "diasVtoCuota": 2,
  "actualiza": "N",
  "offset": 1,
  "limit": 10,
  "contarRegistros": "N"
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
        <BTPrestamos.ObtenerPrestamosAVencerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>Instalador</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ad33e17b1199865B3A2E76CF</Token>
         </Btinreq>
         <quedanRegistros>S</quedanRegistros>
         <cantidadRegistros></cantidadRegistros>
         <sdtDatosPrestamos>
            <sBTDatosPrestamo>
               <plazo>124</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>0.00</deudaTotalVencida>
               <periodicidad>15</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2023-05-31</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>S/</moneda>
                  <productoUId>1</productoUId>
                  <nombre>PRÉSTAMO-Financiero 9</nombre>
               </producto>
               <clienteUId>407</clienteUId>
               <fechaProximoVencimiento>2023-03-31</fechaProximoVencimiento>
               <tasaVigente>83.230000</tasaVigente>
               <fechaPrimerCuotaImpaga>2023-03-31</fechaPrimerCuotaImpaga>
               <valorCuota>106.10</valorCuota>
               <saldoCapital>458.21</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>0</cantidadCuotasVencidas>
               <capitalOriginal>800.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>530.57</deudaCancelacionTotal>
               <diasMora>0</diasMora>
               <operacionUId>10752</operacionUId>
               <cantidadCuotasImpagas>5</cantidadCuotasImpagas>
               <deudaTotalAFecha>106.10</deudaTotalAFecha>
               <cuotasPagasConRetraso>3</cuotasPagasConRetraso>
               <fechaUltimoPago>2023-03-29</fechaUltimoPago>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>40.000000</tasaMoraVigente>
               <sucursal>MIRAFLORES</sucursal>
               <fechaValor>2023-01-27</fechaValor>
               <cantidadCuotas>9</cantidadCuotas>
            </sBTDatosPrestamo>
         </sdtDatosPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>227484</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerPrestamosAVencer</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-05-09</Fecha>
            <Hora>12:58:32</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerPrestamosAVencerResponse>
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
   "quedanRegistros":"S",
   "cantidadRegistros": 0,
   "sdtDatosPrestamos": {
    "sBTDatosPrestamo": {
      "plazo": 124,
      "eventosPosteriores": "N",
      "deudaTotalVencida": 0,
      "periodicidad": 15,
      "simboloMoneda": "$",
      "fechaVencimiento": "2023-05-31",
      "producto": {
        "papel": "$",
        "moneda": "S/",
        "productoUId": 1,
        "nombre": "PRÉSTAMO-Financiero 9"
      },
      "clienteUId": 407,
      "fechaProximoVencimiento": "2023-03-31",
      "tasaVigente": 83.23,
      "fechaPrimerCuotaImpaga": "2023-03-31",
      "valorCuota": 106.1,
      "saldoCapital": 458.21,
      "otrosConceptos": "",
      "cantidadCuotasVencidas": 0,
      "capitalOriginal": 800,
      "tir": 0,
      "deudaCancelacionTotal": 530.57,
      "diasMora": 0,
      "operacionUId": 10752,
      "cantidadCuotasImpagas": 5,
      "deudaTotalAFecha": 106.1,
      "cuotasPagasConRetraso": 3,
      "fechaUltimoPago": "2023-03-29",
      "tipoAmortizacion": "Francés con Seg.e Impu.",
      "datosAdicionales": "",
      "estado": "Normal",
      "tasaMoraVigente": 40,
      "sucursal": "MIRAFLORES",
      "fechaValor": "2023-01-27",
      "cantidadCuotas": 9
    }
  },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "901",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerPrestamosAVencer",
        "Fecha": "2017-12-21",
        "Requerimiento": 1,
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
:--------- | :--------- | :---------
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

### sBTDatoAdicional

Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
detalle | String | Detalle de dato adicional.
:::
<!-- CIERRA SDT -->