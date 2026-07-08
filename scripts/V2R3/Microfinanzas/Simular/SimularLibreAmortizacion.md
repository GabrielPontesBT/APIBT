---
title: Simular Libre Amortización
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
::: note Método para simular el alta de un préstamo libre amortización para un crédito individual.

**Nombre publicación:** BTMicrofinanzas.SimularLibreAmortizacion

**Programa:** RBTPG423

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sBTSimulacionLibreAmortizacion | [sBTSimulacionLibreAmortizacion](#sbtsimulacionlibreamortizacion) | Datos de la simulación.
generaCuotaInteres | String | [Hidden: Valores 'S'/'N' Indica si se generan cuotas de intereses].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtSimulacion | [sBTSimulacionPrestamoLA](#sbtsimulacionprestamola) | Datos del préstamo simulado.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de solicitud.
30002 | No se recibió el identificador de cliente.
30003 | No se recibió el identificador de producto.
30004 | No se recuperó la cuenta para el identificador.
30005 | Debe ingresar el monto del préstamo.
30006 | No se recibió la lista de cuotas de capital.
30007 | No se recibió la lista de cuotas de interés.
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
      <bts:BTMicrofinanzas.SimularLibreAmortizacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1001009404CD285A89A23FBE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:sBTSimulacionLibreAmortizacion>
            <bts:solicitudUId>11077</bts:solicitudUId>
            <bts:clienteUId>3</bts:clienteUId>
            <bts:productoUId>21</bts:productoUId>
            <bts:cantidadCuotas>2</bts:cantidadCuotas>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:monto>10000</bts:monto>
            <bts:pizarra></bts:pizarra>
            <bts:tasa></bts:tasa>
            <bts:destinoCredito>2</bts:destinoCredito>
            <bts:cuotasCapital>
                <bts:sBTCuotaPrestamoAlta>
                    <bts:fechaPago>2021-12-30</bts:fechaPago>
                    <bts:importe>2000</bts:importe>
                </bts:sBTCuotaPrestamoAlta>
                <bts:sBTCuotaPrestamoAlta>
                    <bts:fechaPago>2022-01-30</bts:fechaPago>
                    <bts:importe>8000</bts:importe>
                </bts:sBTCuotaPrestamoAlta>
            </bts:cuotasCapital>
            <bts:cuotasInteres/>
         </bts:sBTSimulacionLibreAmortizacion>
      </bts:BTMicrofinanzas.SimularLibreAmortizacion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Canal": "BTDIGITAL",
    "Requerimiento": "95",
    "Usuario": "INSTALADOR",
    "Token": "1001009404CD285A89A23FBE",
    "Device": "GP"
  },
  "sBTSimulacionLibreAmortizacion": {
    "solicitudUId": "11077",
    "clienteUId": "3",
    "productoUId": "21",
    "cantidadCuotas": "2",
    "periodoCuotas": "30",
    "monto": "10000",
    "destinoCredito": "2",
    "cuotasCapital": {
      "sBTCuotaPrestamoAlta": [
        {
          "fechaPago": "2021-12-30",
          "importe": "2000"
        },
        {
          "fechaPago": "2022-01-30",
          "importe": "8000"
        }
      ]
    },
    "cuotasInteres": {
      "fechaPago": "",
      "importe": 0
    },
    "pizarra": 0,
    "tasa": 0
  }
}
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
      <BTMicrofinanzas.SimularLibreAmortizacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1001009404CD285A89A23FBE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtSimulacion>
            <operacionUId>21</operacionUId>
            <producto>
               <productoUId>21</productoUId>
               <nombre>PRESTAMOS, CADENA DE VALOR CAFE DIF.</nombre>
               <moneda>Q</moneda>
               <papel>$</papel>
            </producto>
            <fechaValor>2021-11-30</fechaValor>
            <fechaPrimerPago>2021-12-30</fechaPrimerPago>
            <fechaVencimiento>2022-01-30</fechaVencimiento>
            <capital>10000.00</capital>
            <intereses>548.00</intereses>
            <impuestos>0.00</impuestos>
            <comisiones>385.00</comisiones>
            <totalPrestamo>10000.00</totalPrestamo>
            <plazo>0</plazo>
            <tasa>36.000000</tasa>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <tasaEfectivaAnual>42.576089</tasaEfectivaAnual>
            <tasaNominalAnual>36.000000</tasaNominalAnual>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaSimulacion>
                  <fechaPago>2021-12-30</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>300.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>300.00</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2021-12-30</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>2000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>2000.00</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2022-01-30</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>248.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>248.00</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2022-01-30</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>8000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>8000.00</cuota>
               </sBTCuotaSimulacion>
            </cronograma>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.SimularLibreAmortizacion</Servicio>
            <Fecha>2019-11-01</Fecha>
            <Hora>11:36:49</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>1398</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.SimularLibreAmortizacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Canal": "BTDIGITAL",
    "Requerimiento": "95",
    "Usuario": "INSTALADOR",
    "Token": "1001009404CD285A89A23FBE",
    "Device": "GP"
  },
  "sdtSimulacion": {
    "operacionUId": "21",
    "producto": {
      "productoUId": "21",
      "nombre": "PRESTAMOS, CADENA DE VALOR CAFE DIF.",
      "moneda": "Q",
      "papel": "$",
      "otrosConceptos": {
        "concepto": "",
        "texto": "",
        "valor": 0
      }
    },
    "fechaValor": "2021-11-30",
    "fechaPrimerPago": "2021-12-30",
    "fechaVencimiento": "2022-01-30",
    "capital": "10000.00",
    "intereses": "548.00",
    "impuestos": "0.00",
    "comisiones": "385.00",
    "totalPrestamo": "10000.00",
    "plazo": "0",
    "tasa": "36.000000",
    "tasaEfectiva": "0.000000",
    "tasaEfectivaAnual": "42.576089",
    "tasaNominalAnual": "36.000000",
    "cronograma": {
      "sBTCuotaSimulacion": [
        {
          "fechaPago": "2021-12-30",
          "tipoCuota": "I",
          "capital": "300.00",
          "intereses": "0.00",
          "seguros": "0.00",
          "impuestos": "0.00",
          "otrosConceptos": "0.00",
          "cuota": "300.00",
          "concepto": "",
          "interes": 0
        },
        {
          "fechaPago": "2021-12-30",
          "tipoCuota": "K",
          "capital": "2000.00",
          "intereses": "0.00",
          "seguros": "0.00",
          "impuestos": "0.00",
          "otrosConceptos": "0.00",
          "cuota": "2000.00",
          "concepto": "",
          "interes": 0
        },
        {
          "fechaPago": "2022-01-30",
          "tipoCuota": "I",
          "capital": "248.00",
          "intereses": "0.00",
          "seguros": "0.00",
          "impuestos": "0.00",
          "otrosConceptos": "0.00",
          "cuota": "248.00",
          "concepto": "",
          "interes": 0
        },
        {
          "fechaPago": "2022-01-30",
          "tipoCuota": "K",
          "capital": "8000.00",
          "intereses": "0.00",
          "seguros": "0.00",
          "impuestos": "0.00",
          "otrosConceptos": "0.00",
          "cuota": "8000.00",
          "concepto": "",
          "interes": 0
        }
      ]
    },
    "otrosConceptos": {
      "concepto": "",
      "texto": "",
      "valor": 0
    }
  },
  "Btoutreq": {
    "Canal": "BTDIGITAL",
    "Servicio": "BTMicrofinanzas.SimularLibreAmortizacion",
    "Fecha": "2019-11-01",
    "Hora": "11:36:49",
    "Requerimiento": "95",
    "Numero": "1398",
    "Estado": "OK"
  }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSimulacionLibreAmortizacion  

### sBTSimulacionLibreAmortizacion

::: center 
Los campos del tipo de dato estructurado sBTSimulacionLibreAmortizacion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cantidadCuotas | Long | Cantidad de cuotas del préstamo. 
clienteUId | Long | Identificador único de cliente. 
cuotasCapital | [sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta) | Cuotas de capital. 
cuotasInteres | [sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta) | Cuotas de intereses. 
destinoCredito | Long | Código de actividad. 
monto | Double | Capital solicitado. 
periodoCuotas | Long | Período entre vencimiento de cada cuota. 
pizarra | Short | Tipo de pizarra. Si no se indica toma la preseteada para el producto. 
productoUId | Long | Identificador único de producto. 
solicitudUId | Long | Identificador de instancia Workflow.  
tasa | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra.
:::

::: details sBTCuotaPrestamoAlta

### sBTCuotaPrestamoAlta

::: center 
Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
fechaPago | Date | Fecha de pago de la cuota. 
importe | Double | Importe de la cuota.
:::

::: details sBTSimulacionPrestamoLA

### sBTSimulacionPrestamoLA

::: center 
Los campos del tipo de dato estructurado sBTSimulacionPrestamoLA son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
capital | Double | Capital del préstamo. 
comisiones | Double | Comisiones. 
cronograma | [sBTCuotaSimulacion](#sbtcuotasimulacion) | Cronograma del préstamo. 
fechaPrimerPago | Date | Fecha de primer pago. 
fechaValor | Date | Fecha valor. 
fechaVencimiento | Date | Fecha de vencimiento. 
impuestos | Double | Impuestos. 
intereses | Double | Intereses. 
operacionUId | Long | Identificador único de operación. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Importe otros conceptos. 
plazo | Int | Plazo. 
producto | [sBTProducto](#sbtproducto) | Datos del producto. 
tasa | Double | Tasa. 
tasaEfectiva | Double | Tasa efectiva. 
tasaEfectivaAnual | Double | Tasa efectiva anual. 
tasaNominalAnual | Double | Tasa nominal anual. 
totalPrestamo | Double | Total a pagar.
:::

::: details sBTProducto

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

::: details sBTCuotaSimulacion

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
:::

<!-- CIERRA SDT -->

