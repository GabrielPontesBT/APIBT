---
title: Obtener Detalle de Oferta Amortizable
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

<!-- ABRE LOS DATOS DEL MÉTODO -->
::: note Método para obtener el detalle de la oferta amortizable de un préstamo simulado.

**Nombre publicación:** BTPrestamos.ObtenerDetalleOfertaAmortizable

**Programa:** RBTPG525

**Global/País:** Global
:::
<!-- CIERRA LOS DATOS DEL MÉTODO -->

<!-- ABRE LA TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
simulacionUId | Long | Identificador único de la simulación.
clienteUId | Long | Identificador único de cliente.
cantidadCuotas | Int | Cantidad de cuotas.
destinoCredito | Long | Código de destino del crédito.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtSimulacionOutput | [sBTSimulacionOutput](#sbtsimulacionoutput) | Datos de la simulación.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de simulación.
30002 | No se recibió el identificador de cliente.
30003 | No se recuperó la cuenta para el Identificador: [Número de Identificador].
30004 | La simulación no corresponde al cliente: [Número de Identificador].
30005 | La cantidad de cuotas indicada no forma parte de las ofertas.
30011 | La simulación con identificador [Número de Identificador] no está vigente.
30012 | No se recuperaron datos de la simulación para el identificador [Número de Identificador].
:::
<!-- CIERRA LA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetalleOfertaAmortizable>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>E1F15D391E5C8FAC4189A627</bts:Token>
         </bts:Btinreq>
         <bts:simulacionUId>134</bts:simulacionUId>
         <bts:clienteUId>322</bts:clienteUId>
         <bts:cantidadCuotas>12</bts:cantidadCuotas>
         <bts:destinoCredito></bts:destinoCredito>
      </bts:BTPrestamos.ObtenerDetalleOfertaAmortizable>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleOfertaAmortizable' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "simulacionUId": 134,
    "clienteUId": 322,
    "cantidadCuotas": 12,
    "destinoCredito": "",
}'
```
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->
:::

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDetalleOfertaAmortizableResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1222A10B1A106FB813BD7AE9</Token>
         </Btinreq>
         <sdtSimulacionOutput>
            <cft>28.21</cft>
            <plus>0.000000</plus>
            <nomSucursal>Casa Matriz<nomSucursal/>
            <otrosConceptos/>
            <tasaNominalAnual>30.000000</tasaNominalAnual>
            <precio>7282.89</precio>
            <tipoAmortizacionDsc>Leasing<tipoAmortizacionDsc/>
            <cronograma>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-05-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-06-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-07-06</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-08-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-09-07</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-10-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-11-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-12-07</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2021-01-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2021-02-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2021-03-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.60</cuota>
                  <fechaPago>2021-04-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
            </cronograma>
            <comisionesDesembolso>0.00</comisionesDesembolso>
            <segurosDesembolso>0.00</segurosDesembolso>
            <cantidadCuotas>7</cantidadCuotas>
            <impuestosDesembolso>0.00</impuestosDesembolso>
            <fechaPrimerPago>2020-05-05<fechaPrimerPago/>
            <operacionUId>156</operacionUId>
            <valorCuota>268.67</valorCuota>
            <diasRevision>0</diasRevision>
            <totalSeguros>0.00</totalSeguros>
            <plazo>497</plazo>
            <producto>
               <moneda>$</moneda>
               <papel/>
               <productoUId>512</productoUId>
               <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre>
            </producto>
            <capital>20000.00</capital>
            <tipoAmortizacionCod>0</tipoAmortizacionCod>
            <totalIntereses>2613.64</totalIntereses>
            <seguros>
               <codigo>100</codigo>
               <descripcion>ALICO - Vida %s/cap. inicial</descripcion>
               <tipo>VIDA</tipo>
               <modificable>S</modificable>
               <importeFijo>100.00</importeFijo>
               <porcentaje>0.1000</porcentaje>
            </seguros>
            <fechaValor>2018-05-15<fechaValor/>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <totalImpuestos>0.00</totalImpuestos>
            <coeficienteIVA>0.000000</coeficienteIVA>
            <periodicidad>30</periodicidad>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <totalPrestamo>3223.97</totalPrestamo>
            <fechaVencimiento>2025-04-05<fechaVencimiento/>
            <tasa>0.000000</tasa>
            <redondeo>0.00</redondeo>
            <montoDesembolso>3154.93</montoDesembolso>
            <comisiones>
               <sBTComisionPrestamo>
                  <porcentaje>0.0000</porcentaje>
                  <descripcion>Comision por venta seguro</descripcion>
                  <importe>0.00</importe>
                  <codigo>137</codigo>
               </sBTComisionPrestamo>
               <sBTComisionPrestamo>
                  <porcentaje>0.0000</porcentaje>
                  <descripcion>MiAuto - Otorgamiento</descripcion>
                  <importe>0.00</importe>
                  <codigo>300</codigo>
               </sBTComisionPrestamo>
            </comisiones>
            <totalComisiones>0.00</totalComisiones>
            <comisionesCuota></comisionesCuota>
         </sdtSimulacionOutput>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerDetalleOfertaAmortizable</Servicio>
            <Fecha>2021-03-18</Fecha>
            <Hora>10:03:41</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8032</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleOfertaAmortizableResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "c2cfd09eff4A8B5C60A82434"
    },
    "sdtSimulacionOutput": {
      "cft": 28.21,
      "plus": 0,
      "nomSucursal": {
      "#text": "Casa Matriz",
      "nomSucursal": "",
      "otrosConceptos": "",
      "tasaNominalAnual": 30,
      "precio": 7282.89,
      "tipoAmortizacionDsc": {
         "#text": "Leasing",
         "tipoAmortizacionDsc": "",
         "cronograma": {
            "sBTCuotaSimulacion": [
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-05-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-06-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-07-06",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-08-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-09-07",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-10-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-11-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-12-07",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2021-01-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2021-02-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2021-03-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.6,
               "fechaPago": "2021-04-05",
               "seguros": 0
            }
            ]
         },
         "comisionesDesembolso": 0,
         "segurosDesembolso": 0,
         "cantidadCuotas": 7,
         "impuestosDesembolso": 0,
         "fechaPrimerPago": {
            "#text": "2020-05-05",
            "fechaPrimerPago": "",
            "operacionUId": 156,
            "valorCuota": 268.67,
            "diasRevision": 0,
            "totalSeguros": 0,
            "plazo": 497,
            "producto": {
            "moneda": "$",
            "papel": "",
            "productoUId": 512,
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos"
            },
            "capital": 20000,
            "tipoAmortizacionCod": 0,
            "totalIntereses": 2613.64,
            "seguros": {
            "codigo": 100,
            "descripcion": "ALICO - Vida %s/cap. inicial",
            "tipo": "VIDA",
            "modificable": "S",
            "importeFijo": 100,
            "porcentaje": 0.1
            },
            "fechaValor": {
            "#text": "2018-05-15",
            "fechaValor": "",
            "tasaEfectiva": 0,
            "totalImpuestos": 0,
            "coeficienteIVA": 0,
            "periodicidad": 30,
            "tasaEfectivaAnual": 25.590075,
            "totalPrestamo": 3223.97,
            "fechaVencimiento": {
               "#text": "2025-04-05",
               "fechaVencimiento": "",
               "tasa": 0,
               "redondeo": 0,
               "montoDesembolso": 3154.93,
               "comisiones": {
                  "sBTComisionPrestamo": [
                  {
                     "porcentaje": 0,
                     "descripcion": "Comision por venta seguro",
                     "importe": 0,
                     "codigo": 137
                  },
                  {
                     "porcentaje": 0,
                     "descripcion": "MiAuto - Otorgamiento",
                     "importe": 0,
                     "codigo": 300
                  }
                  ]
               },
               "totalComisiones": 0,
               "comisionesCuota": ""
            },
            "Erroresnegocio": "",
            "Btoutreq": {
               "Canal": "BTDIGITAL",
               "Servicio": "BTPrestamos.ObtenerDetalleOfertaAmortizable",
               "Fecha": "2021-03-18",
               "Hora": "10:03:41",
               "Requerimiento": 1,
               "Numero": 8032,
               "Estado": "OK"
            }
            }
         }
      }
      }
   }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSimulacionOutput  

### sBTSimulacionOutput

::: center 
Los campos del tipo de dato estructurado sBTSimulacionOutput son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cantidadCuotas | Int | Cantidad de cuotas.
capital | Double | Capital.
cft | Double | Costo financiero total.
coeficienteIVA | Double | Coeficiente IVA.
comisiones | [sBTComisionPrestamo](#sbtcomisionprestamo) | Listado de comisiones.
comisionesCuota | [sBTComisionPrestamo](#sbtcomisionprestamo) | Listado de comisiones de cuota.
comisionesDesembolso | Double | Comisiones de desembolso.
cronograma | [sBTCuotaSimulacion](#sbtcuotasimulacion) | Cronograma del préstamo.
diasRevision | Int | Días de revisión.
fechaPrimerPago | Date | Fecha de primer pago.
fechaValor | Date | Fecha valor.
fechaVencimiento | Date | Fecha de vencimiento.
impuestosDesembolso | Double | Impuestos de desembolso.
montoDesembolso | Double | Monto de desembolso.
nomSucursal | String | Nombre de la sucursal.
operacionUid | Long | Identificador único de operación.
otrosConceptos | [sBTConcepto](#sbtconcepto) | Datos de otros conceptos.
periodicidad | Int | Periodicidad.
plazo | Int | Plazo.
plus | Double | Tasa plus.
precio | Double | Precio.
producto | [sBTProducto](#sbtproducto) | Datos del producto.
redondeo | Double | Redondeo.
seguros | [sBTSeguroPrestamo](#sbtseguroprestamo) | Listado de seguros.
segurosDesembolso | Double | Seguros de desembolso.
tasa | Double | Tasa.
tasaEfectiva | Double | Tasa efectiva.
tasaEfectivaAnual | Double | Tasa efectiva anual.
tasaNominalAnual | Double | Tasa nominal anual.
tipoAmortizacionCod | Byte | Código de tipo amortización.
tipoAmortizacionDsc | String | Tipo de amortización.
totalComisiones | Double | Total de comisiones.
totalImpuestos | Double | Total de impuestos.
totalIntereses | Double | Total de intereses.
totalPrestamo | Double | Total de préstamo.
totalSeguros | Double | Total de seguros.
valorCuota | Double | Valor de la cuota.

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :---------
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.

### sBTCuotaSimulacion

::: center 
Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :---------
capital | Double | Monto de capital en la cuota.
concepto | String | Concepto.
cuota | Double | Importe total de la cuota.
fechaPago | Date | Fecha de pago.
impuestos | Double | Monto de impuestos en la cuota.
interes | Double | Monto de intereses en la cuota.
otrosConceptos | Double | Importe correspondiente a otros conceptos.
seguros | Double | Monto de seguros en la cuota.
tipoCuota | String | Tipo de la cuota (Capital/Interés).

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

### sBTSeguroPrestamo

::: center 
Los campos del tipo de dato estructurado sBTSeguroPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :---------
codigo | Int | Código del seguro.
descripcion | String | Descripción del seguro.
importeFijo | Decimal | Importe fijo del seguro.
modificable | String | Indica si es modificable.
porcentaje | Decimal | Porcentaje del seguro.
tipo | String | Tipo del seguro.

### sBTComisionPrestamo

::: center 
Los campos del tipo de dato estructurado sBTComisionPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :---------
codigo | Int | Código de comisión.
descripcion | String | Descripción de la comisión.
importe | Double | Importe de la comisión.
porcentaje | Double | Porcentaje de comisión.
:::
<!-- CIERRA SDT -->