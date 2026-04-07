---
title: Obtener Detalle a Fecha
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
::: note Método para obtener los datos de un préstamo a una fecha especifica.

**Nombre publicación:** BTPrestamos.ObtenerDetalleAFecha

**Programa:** RBTPG223

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación simulada.
fecha | Date | Fecha a consultar.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPrestamo | [sBTPrestamo](#sbtprestamo) | Datos del préstamo.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de operación.
30002 | No se recuperó la operación para el identificador.
30003 | No se recibió fecha.
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
      <bts:BTPrestamos.ObtenerDetalleAFecha>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>324915377F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>15</bts:operacionUId>
         <bts:fecha>2018-11-15</bts:fecha>
      </bts:BTPrestamos.ObtenerDetalleAFecha>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleAFecha=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9' \
  -d '{
	"Btinreq": {
		"Device": "AC",
		"Usuario": "BANTOTAL",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "324915377F955E77534D3E02"
	},
    "operacionUId": 15,
	"fecha": "2018-11-15"
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
      <BTPrestamos.ObtenerDetalleAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>324915377F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtPrestamo>
            <claseTasa/>
            <tipoTasa>Lineal Anual</tipoTasa>
            <tipoDia>Meses Calendario</tipoDia>
            <tipoAno>360 Días</tipoAno>
            <tasaOriginal>19.000000</tasaOriginal>
            <tasaVigente>19.000000</tasaVigente>
            <plus>0.000000</plus>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <diasRevision>0</diasRevision>
            <tipoTasaMora>Lineal Anual</tipoTasaMora>
            <tasaMoraOriginal>19.000000</tasaMoraOriginal>
            <tasaMoraVigente>0.000000</tasaMoraVigente>
            <tasaPunitorios>0.000000</tasaPunitorios>
            <operacionUId>15</operacionUId>
            <idOperacionFmt>189-0</idOperacionFmt>
            <idOperacionBT>0010000100103000000000000000002700000000000189001</idOperacionBT>
            <producto>
               <productoUId>0</productoUId>
               <nombre>PRÉSTAMOS CONSUMO, Amortización Automática TF</nombre>
               <moneda>$</moneda>
               <papel>$</papel>
            </producto>
            <tipoProducto>AM</tipoProducto>
            <sucursal>Sucursal Beta</sucursal>
            <simboloMoneda>$</simboloMoneda>
            <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
            <cuentaContable>Consumo reajustables</cuentaContable>
            <actividad>01112 Trigo</actividad>
            <estado>Normal</estado>
            <precioOriginal>0.000000</precioOriginal>
            <precioActual>0.000000</precioActual>
            <coeficienteIVA>22.000000</coeficienteIVA>
            <capitalOriginal>12000.00</capitalOriginal>
            <saldoCapital>12000.00</saldoCapital>
            <valorCuota>1231.74</valorCuota>
            <fechaValor>2018-09-25</fechaValor>
            <fechaVencimiento>2019-09-25</fechaVencimiento>
            <interesDevengado>0.00</interesDevengado>
            <interesMoraDevengado>0.00</interesMoraDevengado>
            <resultadoInteresNormalDevengado>0.00</resultadoInteresNormalDevengado>
            <interesSuspenso>0.00</interesSuspenso>
            <deudaCancelacionTotal>14793.06</deudaCancelacionTotal>
            <deudaTotalAFecha>2475.64</deudaTotalAFecha>
            <cantidadCuotasVencidas>1</cantidadCuotasVencidas>
            <deudaTotalVencida>1243.90</deudaTotalVencida>
            <interesVigente>313.03</interesVigente>
            <interesMora>9.97</interesMora>
            <interesPunitorio>0.00</interesPunitorio>
            <totalImpuestos>287.27</totalImpuestos>
            <periodicidad>30</periodicidad>
            <plazo>365</plazo>
            <diasMora>21</diasMora>
            <diasMoraPromedio>0</diasMoraPromedio>
            <cantidadCuotas>12</cantidadCuotas>
            <cantidadCuotasImpagas>12</cantidadCuotasImpagas>
            <cuotasPagasConRetaso>0</cuotasPagasConRetaso>
            <fechaPrimerPago>2018-10-25</fechaPrimerPago>
            <fechaProximoVencimiento>2018-11-26</fechaProximoVencimiento>
            <fechaPrimerCuotaImpaga>2018-10-25</fechaPrimerCuotaImpaga>
            <fechaUltimoPago>0000-00-00</fechaUltimoPago>
         </sdtPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerDetalleAFecha</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Hora>16:03:15</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6975</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleAFechaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
	"Btinreq": {
		"Canal": "BTDIGITAL",
		"Requerimiento": "1",
		"Usuario": "BANTOTAL",
		"Token": "324915377F955E77534D3E02",
		"Device": "AC"
	},
    "sdtPrestamo": {
        "claseTasa": "",
        "tipoTasa": "Lineal Anual",
        "tipoDia": "Meses Calendario",
        "tipoAno": "360 Días",
        "tasaOriginal": 19.000000,
        "tasaVigente": 19.000000,
        "plus": 0.000000,
        "tasaEfectiva": 0.000000,
        "diasRevision": 0,
        "tipoTasaMora": "Lineal Anual",
        "tasaMoraOriginal": 19.000000,
        "tasaMoraVigente": 0.000000,
        "tasaPunitorios": 0.000000,
        "operacionUId": 15,
        "idOperacionFmt": "189-0",
        "idOperacionBT": "0010000100103000000000000000002700000000000189001",
        "producto": {
            "productoUId": 0,
            "nombre": "PRÉSTAMOS CONSUMO, Amortización Automática TF",
            "moneda": "$",
            "papel": "$"
        },
        "tipoProducto": "AM",
        "sucursal": "Sucursal Beta",
        "simboloMoneda": "$",
        "tipoAmortizacion": "Francés con Seg.e Impu.",
        "cuentaContable": "Consumo reajustables",
        "actividad": "01112 Trigo",
        "estado": "Normal",
        "precioOriginal": 0.000000,
        "precioActual": 0.000000,
        "coeficienteIVA": 22.000000,
        "capitalOriginal": 12000.00,
        "saldoCapital": 12000.00,
        "valorCuota": 1231.74,
        "fechaValor": "2018-09-25",
        "fechaVencimiento": "2019-09-25",
        "interesDevengado": 0.00,
        "interesMoraDevengado": 0.00,
        "resultadoInteresNormalDevengado": 0.00,
        "interesSuspenso": 0.00,
        "deudaCancelacionTotal": 14793.06,
        "deudaTotalAFecha": 2475.64,
        "cantidadCuotasVencidas": 1,
        "deudaTotalVencida": 1243.90,
        "interesVigente": 313.03,
        "interesMora": 9.97,
        "interesPunitorio": 0.00,
        "totalImpuestos": 287.27,
        "periodicidad": 30,
        "plazo": 365,
        "diasMora": 21,
        "diasMoraPromedio": 0,
        "cantidadCuotas": 12,
        "cantidadCuotasImpagas": 12,
        "cuotasPagasConRetaso": 0,
        "fechaPrimerPago": "2018-10-25",
        "fechaProximoVencimiento": "2018-11-26",
        "fechaPrimerCuotaImpaga": "2018-10-25",
        "fechaUltimoPago": "0000-00-00"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTPrestamos.ObtenerDetalleAFecha",
        "Fecha": "2019-11-19",
        "Hora": "16:03:15",
        "Requerimiento": "1",
        "Numero": 6975,
        "Estado": "OK"
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
operacionUId | Long | Identificador único de la operación simulada. 
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