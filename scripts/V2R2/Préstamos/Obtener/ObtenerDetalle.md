---
title: Obtener Detalle
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
::: note Método para obtener los datos de un préstamo.

**Nombre publicación:** BTPrestamos.ObtenerDetalle

**Programa:** RBTPG012

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
OperacionUId | Long | Identificador único de operación simulada.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPrestamo | [sBTPrestamo](#sbtprestamo) | Datos del préstamo.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de operación.
30002 | No se recuperó la operación para el identificador.
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
      <bts:BTPrestamos.ObtenerDetalle>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6453f934f94A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:OperacionUId>142</bts:OperacionUId>
      </bts:BTPrestamos.ObtenerDetalle>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalle=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "OperacionUId": 142
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
      <BTPrestamos.ObtenerDetalleResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtPrestamo>
            <interesVigente>6812.75</interesVigente>
            <deudaTotalVencida>17614.00</deudaTotalVencida>
            <tipoTasaMora>Lineal Anual</tipoTasaMora>
            <cuotasPagasConRetaso>0</cuotasPagasConRetaso>
            <sucursal>Sucursal Beta</sucursal>
            <diasMoraPromedio>0</diasMoraPromedio>
            <plus>0.000000</plus>
            <actividad>01112 Trigo</actividad>
            <tasaOriginal>10.000000</tasaOriginal>
            <idOperacionBT>0010000100115000000000000000002700000000000326001</idOperacionBT>
            <diasMora>83</diasMora>
            <cantidadCuotas>37</cantidadCuotas>
            <estado>Normal</estado>
            <capitalOriginal>180000.00</capitalOriginal>
            <tipoDia>Meses Calendario</tipoDia>
            <fechaPrimerPago>2018-07-18</fechaPrimerPago>
            <claseTasa/>
            <tipoAmortizacion>Leasing</tipoAmortizacion>
            <simboloMoneda>$</simboloMoneda>
            <OperacionUId>142</OperacionUId>
            <fechaPrimerCuotaImpaga>2018-07-18</fechaPrimerCuotaImpaga>
            <valorCuota>0.00</valorCuota>
            <diasRevision>0</diasRevision>
            <precioOriginal>0.000000</precioOriginal>
            <tasaVigente>10.000000</tasaVigente>
            <tasaMoraVigente>0.000000</tasaMoraVigente>
            <interesDevengado>0.00</interesDevengado>
            <interesSuspenso>0.00</interesSuspenso>
            <deudaCancelacionTotal>213849.01</deudaCancelacionTotal>
            <plazo>1096</plazo>
            <tipoTasa>Lineal Anual</tipoTasa>
            <interesMora>154.45</interesMora>
            <saldoCapital>174180.15</saldoCapital>
            <precioActual>0.000000</precioActual>
            <cantidadCuotasVencidas>3</cantidadCuotasVencidas>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>0</productoUId>
               <nombre>LEASING, Amort. - Capital F./Empr.- T/F</nombre>
            </producto>
            <fechaUltimoPago>2018-05-18</fechaUltimoPago>
            <interesMoraDevengado>0.00</interesMoraDevengado>
            <idOperacionFmt>326-0</idOperacionFmt>
            <fechaProximoVencimiento>2018-10-18</fechaProximoVencimiento>
            <fechaValor>2018-05-18</fechaValor>
            <tasaMoraOriginal>10.000000</tasaMoraOriginal>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <totalImpuestos>0.00</totalImpuestos>
            <coeficienteIVA>0.000000</coeficienteIVA>
            <periodicidad>30</periodicidad>
            <resultadoInteresNormalDevengado>0.00</resultadoInteresNormalDevengado>
            <fechaVencimiento>2021-05-18</fechaVencimiento>
            <cantidadCuotasImpagas>36</cantidadCuotasImpagas>
            <cuentaContable>Ds.P/Arrend.Financ.No Reaj.Res.</cuentaContable>
            <tipoAno>360 Días</tipoAno>
            <interesPunitorio>0.00</interesPunitorio>
            <tipoProducto>AM</tipoProducto>
            <tasaPunitorios>0.000000</tasaPunitorios>
            <deudaTotalAFecha>23433.85</deudaTotalAFecha>
            <costoFinancieroTotal>0</costoFinancieroTotal>
            <saldosPendiente>
               <concepto></concepto>
               <texto></texto>
               <valor>0</valor>
            </saldosPendiente>
            <totalSaldosPendiente>0</totalSaldosPendiente>
         </sdtPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>950</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDetalle</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>18:33:21</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Device": "AV",
    "Usuario": "MINSTALADOR",
    "Requerimiento": "",
    "Canal": "BTDIGITAL",
    "Token": "fa2c02c95a4A8B5C60A82434"
  },
  "sdtPrestamo": {
    "interesVigente": "6812.75",
    "deudaTotalVencida": "17614.00",
    "tipoTasaMora": "Lineal Anual",
    "cuotasPagasConRetaso": "0",
    "sucursal": "Sucursal Beta",
    "diasMoraPromedio": "0",
    "plus": "0.000000",
    "actividad": "01112 Trigo",
    "tasaOriginal": "10.000000",
    "idOperacionBT": "0010000100115000000000000000002700000000000326001",
    "diasMora": "83",
    "cantidadCuotas": "37",
    "estado": "Normal",
    "capitalOriginal": "180000.00",
    "tipoDia": "Meses Calendario",
    "fechaPrimerPago": "2018-07-18",
    "claseTasa": "",
    "tipoAmortizacion": "Leasing",
    "simboloMoneda": "$",
    "fechaPrimerCuotaImpaga": "2018-07-18",
    "valorCuota": "0.00",
    "diasRevision": "0",
    "precioOriginal": "0.000000",
    "tasaVigente": "10.000000",
    "tasaMoraVigente": "0.000000",
    "interesDevengado": "0.00",
    "interesSuspenso": "0.00",
    "deudaCancelacionTotal": "213849.01",
    "plazo": "1096",
    "tipoTasa": "Lineal Anual",
    "interesMora": "154.45",
    "saldoCapital": "174180.15",
    "precioActual": "0.000000",
    "cantidadCuotasVencidas": "3",
    "producto": {
      "papel": "$",
      "moneda": "$",
      "productoUId": "0",
      "nombre": "LEASING, Amort. - Capital F./Empr.- T/F"
    },
    "fechaUltimoPago": "2018-05-18",
    "interesMoraDevengado": "0.00",
    "idOperacionFmt": "326-0",
    "fechaProximoVencimiento": "2018-10-18",
    "fechaValor": "2018-05-18",
    "tasaMoraOriginal": "10.000000",
    "tasaEfectiva": "0.000000",
    "totalImpuestos": "0.00",
    "coeficienteIVA": "0.000000",
    "periodicidad": "30",
    "resultadoInteresNormalDevengado": "0.00",
    "fechaVencimiento": "2021-05-18",
    "cantidadCuotasImpagas": "36",
    "cuentaContable": "Ds.P/Arrend.Financ.No Reaj.Res.",
    "tipoAno": "360 Días",
    "interesPunitorio": "0.00",
    "tipoProducto": "AM",
    "tasaPunitorios": "0.000000",
    "deudaTotalAFecha": "23433.85",
    "costoFinancieroTotal": 0,
    "OperacionUId": "142",
    "saldosPendiente": {
      "concepto": "",
      "texto": "",
      "valor": 0
    },
    "totalSaldosPendiente": 0
  },
  "Erroresnegocio": {
    "BTErrorNegocio": []
  },
  "Btoutreq": {
    "Numero": "951",
    "Estado": "OK",
    "Servicio": "BTPrestamos.ObtenerDetalle",
    "Fecha": "2017-12-21",
    "Requerimiento": "",
    "Hora": "18:34:34",
    "Canal": "BTDIGITAL"
  }
}
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
actividad | String | Actividad. 
cantidadCuotas | Int | Cantidad de cuotas del préstamo. 
cantidadCuotasImpagas | Int | Cantidad de cuotas impagas. 
cantidadCuotasVencidas | Int | Cantidad de cuotas vencidas. 
capitalOriginal | Double | Capital original del préstamo. 
claseTasa | String | Clase de tasa. 
coeficienteIVA | Double | Coeficiente de IVA. 
costoFinancieroTotal | Double | Costo financiero total (Argentina). 
cuentaContable | String | Descripción del rubro. 
cuotasPagasConRetaso | Int | Cantidad de cuotas pagas con atraso. 
deudaCancelacionTotal | Double | Monto de cancelación total. 
deudaTotalAFecha | Double | Monto a pagar para estar al día. 
deudaTotalVencida | Double | Monto de la deuda vencida a la fecha. 
diasMora | Int | Días de mora del préstamo. 
diasMoraPromedio | Int | Días de mora promedio. 
diasRevision | Int | Días de revisión (Tasa variable). 
estado | String | Estado del préstamo. 
fechaPrimerCuotaImpaga | Date | Fecha de la primera cuota impaga. 
fechaPrimerPago | Date | Fecha de primer pago. 
fechaProximoVencimiento | Date | Fecha de vencimiento de la próxima cuota. 
fechaUltimoPago | Date | Fecha de último pago de cuota. 
fechaValor | Date | Fecha de alta del préstamo. 
fechaVencimiento | Date | Fecha de vencimiento del préstamo. 
idOperacionBT | String | Identificador texto de operación. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
interesDevengado | Double | Intereses devengados. 
interesMora | Double | Intereses de mora. 
interesMoraDevengado | Double | Intereses de mora devengados. 
interesPunitorio | Double | Intereses punitorios. 
interesSuspenso | Double | Intereses en suspenso. 
interesVigente | Double | Monto de interés vigente. 
OperacionUId | Long | Identificador único de la operación simulada. 
periodicidad | Int | Período entre cuotas. 
plazo | Int | Plazo del préstamo. 
plus | Double | Tasa plus. 
precioActual | Double | Precio del papel actual. 
precioOriginal | Double | Precio original del papel. 
producto | [sBTProducto](#sbtproducto) | Producto. 
resultadoInteresNormalDevengado | Double | Resultado de intereses normal devengados. 
saldoCapital | Double | Saldo de capital. 
saldosPendiente | [sBTConcepto](#sbtconcepto) | Saldos pendientes. 
simboloMoneda | String | Símbolo monetario. 
sucursal | String | Sucursal del préstamo. 
tasaEfectiva | Double | Tasa efectiva anual. 
tasaMoraOriginal | Double | Tasa de mora original. 
tasaMoraVigente | Double | Tasa de mora vigente. 
tasaOriginal | Double | Tasa original. 
tasaPunitorios | Double | Tasa punitorios. 
tasaVigente | Double | Tasa vigente. 
tipoAmortizacion | String | Tipo de amortización. 
tipoAno | String | Tipo de año. 
tipoDia | String | Tipo de día del préstamo. 
tipoProducto | String | Tipo de producto (Amortizable / Plan de pagos). 
tipoTasa | String | Tipo de tasa. 
tipoTasaMora | String | Tipo de tasa de mora. 
totalImpuestos | Double | Total de impuestos. 
totalSaldosPendiente | Double | Total saldos pendiente. 
valorCuota | Double | Valor de la cuota.
:::

::: details sBTProducto

### sBTProducto

::: center 
Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
moneda | String | Símbolo de la moneda. 
nombre | String | Nombre del producto. 
papel | String | Símbolo del papel. 
productoUId | Long | Identificador único de producto.
:::

::: details sBTConcepto

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

