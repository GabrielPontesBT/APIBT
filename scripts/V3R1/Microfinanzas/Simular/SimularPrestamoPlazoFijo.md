---
title: Simular Plazo Fijo
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
::: note Método para simular el alta de un préstamo plazo fijo para un crédito individual.

**Nombre publicación:** BTMicrofinanzas.SimularPlazoFijo

**Programa:** RBTPG424

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtSimulacionPlazoFijo | [sBTSimulacionPlazoFijo](#sbtsimulacionplazofijo) | Datos de la simulación. 

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
30004 | El producto indicado no es válido. 
30005 | No se recuperó la cuenta para el Identificador. 
30006 | El monto solicitado no puede ser 0. 
30007 | Debe ingresar plazo o fecha de vencimiento. 
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
      <bts:BTMicrofinanzas.SimularPlazoFijo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1571835133CD285A89A23FBE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:sdtSimulacionPlazoFijo>
            <bts:solicitudUId>10972</bts:solicitudUId>
            <bts:clienteUId>2</bts:clienteUId>
            <bts:productoUId>29</bts:productoUId>
            <bts:fechaVencimiento/>
            <bts:plazo>365</bts:plazo>
            <bts:monto>35000</bts:monto>
            <bts:pizarra/>
            <bts:tasa/>
            <bts:destinoCredito>28</bts:destinoCredito>
            <bts:datosAdicionales/>
         </bts:sdtSimulacionPlazoFijo>
      </bts:BTMicrofinanzas.SimularPlazoFijo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Device": "AV",
    "Usuario": "MINSTALADOR",
    "Requerimiento": 1,
    "Canal": "BTDIGITAL",
    "Token": "fa2c02c95a4A8B5C60A82434"
  },
  "sdtSimulacionPlazoFijo": {
    "solicitudUId": 10972,
    "clienteUId": 2,
    "productoUId": 29,
    "plazo": 365,
    "monto": 35000,
    "destinoCredito": 28,
    "datosAdicionales": {
      "concepto": "",
      "texto": "",
      "valor": 0
    },
    "fechaVencimiento": "",
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
      <BTMicrofinanzas.SimularPlazoFijoResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1571835133CD285A89A23FBE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtSimulacion>
            <operacionUId>18</operacionUId>
            <producto>
               <productoUId>29</productoUId>
               <nombre>PRÉSTAMOS SECTORIALES (PASIVO), Plazo Fijo</nombre>
               <moneda/>
               <papel>$</papel>
            </producto>
            <capital>35000.00</capital>
            <valorCuota>40323.00</valorCuota>
            <intereses>5323.00</intereses>
            <tasa>15.000000</tasa>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <tasaEfectivaAnual>14.985122</tasaEfectivaAnual>
            <tasaNominalAnual>15.000000</tasaNominalAnual>
            <totalPrestamo>40323.00</totalPrestamo>
            <fechaValor>2020-10-20</fechaValor>
            <fechaVencimiento>2021-10-20</fechaVencimiento>
            <fechaPrimerPago>2021-10-20</fechaPrimerPago>
            <plazo>365</plazo>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <fechaPago>2021-10-20</fechaPago>
                  <importe>40323.00</importe>
                  <redondeo>0.00</redondeo>
               </sBTCuotaPrestamoAlta>
            </cronograma>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.SimularPlazoFijo</Servicio>
            <Fecha>2019-10-18</Fecha>
            <Hora>15:43:17</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>1317</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.SimularPlazoFijoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Device": "AV",
    "Usuario": "MINSTALADOR",
    "Requerimiento": 1,
    "Canal": "BTDIGITAL",
    "Token": "fa2c02c95a4A8B5C60A82434"
  },
  "sdtSimulacion": {
    "operacionUId": 18,
    "producto": {
      "productoUId": 29,
      "nombre": "PRÉSTAMOS SECTORIALES (PASIVO), Plazo Fijo",
      "moneda": "",
      "papel": "$",
      "otrosConceptos": {
        "concepto": "",
        "texto": "",
        "valor": 0
      }
    },
    "capital": 35000,
    "valorCuota": 40323,
    "intereses": 5323,
    "tasa": 15,
    "tasaEfectiva": 0,
    "tasaEfectivaAnual": 14.985122,
    "tasaNominalAnual": 15,
    "totalPrestamo": 40323,
    "fechaValor": "2020-10-20",
    "fechaVencimiento": "2021-10-20",
    "fechaPrimerPago": "2021-10-20",
    "plazo": 365,
    "otrosConceptos": {
      "sBTConcepto": [
        {
          "concepto": "",
          "texto": "",
          "valor": 0
        }
      ]
    },
    "cronograma": {
      "sBTCuotaPrestamoAlta": [
        {
          "fechaPago": "2021-10-20",
          "importe": 40323,
          "redondeo": 0,
          "capital": 0,
          "concepto": "",
          "cuota": 0,
          "impuestos": 0,
          "interes": 0,
          "otrosConceptos": 0,
          "seguros": 0,
          "tipoCuota": ""
        }
      ]
    }
  },
  "Erroresnegocio": {
    "BTErrorNegocio": []
  },
  "Btoutreq": {
    "Canal": "BTDIGITAL",
    "Servicio": "BTMicrofinanzas.SimularPlazoFijo",
    "Fecha": "2019-10-18",
    "Hora": "15:43:17",
    "Requerimiento": 95,
    "Numero": 1317,
    "Estado": "OK"
  }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSimulacionPlazoFijo  

### sBTSimulacionPlazoFijo

::: center 
Los campos del tipo de dato estructurado sBTSimulacionPlazoFijo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
clienteUId | Long | Identificador único de cliente. 
datosAdicionales | [sBTConcepto](#sbtconcepto) | Importe otros conceptos. 
destinoCredito | Long | Código de destino del crédito. 
fechaVencimiento | Date | Fecha de Vencimiento (Obligatorio si no se carga plazo). 
monto | Double | Capital solicitado. 
pizarra | Short | Tipo de pizarra. Si no se indica toma la preseteada para el producto. 
plazo | Int | Plazo (Obligatorio si no se carga Fecha de Vencimiento). 
productoUId | Long | Identificador único de producto. 
solicitudUId | Long | Identificador de instancia Workflow. 
tasa | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra.
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

