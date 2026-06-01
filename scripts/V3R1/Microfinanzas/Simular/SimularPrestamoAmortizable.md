---
title: Simular Amortizable
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
::: note Método para simular el alta de un préstamo amortizable para un crédito individual.

**Nombre publicación:** BTMicrofinanzas.SimularAmortizable

**Programa:** RBTPG422

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtSimulacionAmortizable | [sBTSimulacionAmortizable](#sbtsimulacionamortizable) | Datos de la simulación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtSimulacion | [sBTSimulacionPrestamo](#sbtsimulacionprestamo) | Datos del préstamo simulado.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de la solicitud. 
30002 | No se recibió el identificador de cliente. 
30003 | No se recibió el identificador de producto. 
30004 | No se recuperó la cuenta para el Identificador [Número de identificador].
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
      <bts:BTMicrofinanzas.SimularAmortizable>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>987391075CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:sdtSimulacionAmortizable>
            <bts:solicitudUId>10896</bts:solicitudUId>
            <bts:clienteUId>7</bts:clienteUId>
            <bts:productoUId>23</bts:productoUId>
            <bts:fechaPrimerPago>2020-12-21</bts:fechaPrimerPago>
            <bts:cantidadCuotas>3</bts:cantidadCuotas>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:monto>30000</bts:monto>
            <bts:pizarra>0</bts:pizarra>
            <bts:tasa>0</bts:tasa>
            <bts:destinoCredito>33</bts:destinoCredito>
            <bts:datosAdicionales/>
         </bts:sdtSimulacionAmortizable>
      </bts:BTMicrofinanzas.SimularAmortizable>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?SimularAmortizable \
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
    "sdtSimulacionAmortizable": {
        "solicitudUId": 10896,
        "clienteUId": 7,
        "productoUId": 23,
        "fechaPrimerPago": "2020-12-21",
        "cantidadCuotas": 3,
        "periodoCuotas": 30,
        "monto": 30000,
        "pizarra": 0,
        "tasa": 0,
        "destinoCredito": 33
    }
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
      <BTMicrofinanzas.SimularAmortizableResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1571835133CD285A89A23FBE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtSimulacion>
            <operacionUId>15</operacionUId>
            <producto>
               <productoUId>23</productoUId>
               <nombre>HIPOTECARIOS VIVIENDA, VIVIENDA HIPOTECARIO</nombre>
               <moneda>Q</moneda>
               <papel>$</papel>
            </producto>
            <capital>30000.00</capital>
            <valorCuota>10783.16</valorCuota>
            <intereses>2349.48</intereses>
            <tasa>30.000000</tasa>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <tasaEfectivaAnual>34.488882</tasaEfectivaAnual>
            <tasaNominalAnual>30.000000</tasaNominalAnual>
            <totalPrestamo>32349.48</totalPrestamo>
            <fechaValor>2020-10-20</fechaValor>
            <fechaVencimiento>2021-02-20</fechaVencimiento>
            <fechaPrimerPago>2020-12-21</fechaPrimerPago>
            <plazo>123</plazo>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <fechaPago>2020-12-21</fechaPago>
                  <importe>10783.16</importe>
                  <redondeo>0.00</redondeo>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <fechaPago>2021-01-21</fechaPago>
                  <importe>10783.16</importe>
                  <redondeo>0.00</redondeo>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <fechaPago>2021-02-20</fechaPago>
                  <importe>10783.16</importe>
                  <redondeo>0.00</redondeo>
               </sBTCuotaPrestamoAlta>
            </cronograma>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.SimularAmortizable</Servicio>
            <Fecha>2019-10-18</Fecha>
            <Hora>15:48:00</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>1319</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.SimularAmortizableResponse>
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
    "sdtSimulacion": {
        "operacionUId": 15,
        "producto": {
            "productoUId": 23,
            "nombre": "HIPOTECARIOS VIVIENDA, VIVIENDA HIPOTECARIO",
            "moneda": "Q",
            "papel": "$"
        },
        "capital": 30000.00,
        "valorCuota": 10783.16,
        "intereses": 2349.48,
        "tasa": 30.000000,
        "tasaEfectiva": 0.000000,
        "tasaEfectivaAnual": 34.488882,
        "tasaNominalAnual": 30.000000,
        "totalPrestamo": 32349.48,
        "fechaValor": "2020-10-20",
        "fechaVencimiento": "2021-02-20",
        "fechaPrimerPago": "2020-12-21",
        "plazo": 123,
        "otrosConceptos": {
            "sBTConcepto": []
        },
        "cronograma": {
            "sBTCuotaPrestamoAlta": [
                {
                    "fechaPago": "2020-12-21",
                    "importe": 10783.16,
                    "redondeo": 0.00
                },
                {
                    "fechaPago": "2021-01-21",
                    "importe": 10783.16,
                    "redondeo": 0.00
                },
                {
                    "fechaPago": "2021-02-20",
                    "importe": 10783.16,
                    "redondeo": 0.00
                }
            ]
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTMicrofinanzas.SimularAmortizable",
        "Fecha": "2019-10-18",
        "Hora": "15:48:00",
        "Requerimiento": 95,
        "Numero": 1319,
        "Estado": "OK"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSimulacionAmortizable  

### sBTSimulacionAmortizable

::: center 
Los campos del tipo de dato estructurado sBTSimulacionAmortizable son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cantidadCuotas | Int | Cantidad de cuotas. 
clienteUId | Long | Identificador único de cliente. 
datosAdicionales | [sBTConcepto](#sbtconcepto) | Importe otros conceptos.
destinoCredito | Long | Código de destino del crédito. 
fechaPrimerPago | Date | Fecha de primer pago. 
monto | Double | Capital solicitado. 
periodoCuotas | Int | Período entre vencimiento de cada cuota. 
pizarra | Short | Tipo de pizarra. Si no se indica toma la preseteada para el producto. 
productoUId | Long | Identificador único de producto. 
solicitudUId | Long | Identificador de instancia Workflow. 
tasa | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra. 

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
concepto | String | Concepto. 
texto | String | Texto. 
valor | Double | Importe. 
:::

::: details sBTSimulacionPrestamo

### sBTSimulacionPrestamo

::: center 
Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
capital | Double | Capital del préstamo. 
cronograma | [sBTCuotaSimulacion](#sbtcuotasimulacion) | Cronograma del préstamo. 
fechaPrimerPago | Date | Fecha de primer pago. 
fechaValor | Date | Fecha valor. 
fechaVencimiento | Date | Fecha de vencimiento. 
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
valorCuota | Double | Valor cuota. 

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
:::
<!-- CIERRA SDT -->