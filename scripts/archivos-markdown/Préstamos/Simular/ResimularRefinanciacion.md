---
title: Resimular Refinanciación
icon: /assets/image/nuevo.svg
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
::: note Método para resimular la refinanciación de un préstamo.

**Nombre publicación:** BTPrestamos.ResimularRefinanciacion

**Programa:** RBTPG575

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
simulacionUId | Long | Identificador único de la simulación.
sdtSimulacionUpdate | [sBTSimulacionUpdate](#sbtsimulacionupdate) | Datos de la resimulación.
accion | String | [Hidden: Valor fijo "REFI" para este método].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtSimulacion | [sBTSimulacionOutput](#sbtsimulacionoutput) | Datos de salida de la simulación.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de Refinanciación.
30002 | No se recibió el identificador de cliente.
30003 | No se recuperó la cuenta para el Identificador: [Número de Identificador].
30004 | El identificador de Refinanciación no es válido.
30005 | El préstamo no pertenece al cliente.
30006 | No se recuperó la operacionUId de la operación a refinanciar.
30007 | No se recuperó la operación a cancelar para el identificador [Número de Identificador].
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
      <bts:BTPrestamos.ResimularRefinanciacion>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>308D1CEF6605E4CB1E0F5F84</bts:Token>
         </bts:Btinreq>
         <bts:simulacionUId>16</bts:simulacionUId>
         <bts:sdtSimulacionUpdate>
            <bts:fechaPrimerPago>2023-06-21</bts:fechaPrimerPago>
            <bts:otrosConceptos>
               <bts:SdtsBTConcepto>
                  <bts:texto></bts:texto>
                  <bts:valor></bts:valor>
                  <bts:concepto></bts:concepto>
               </bts:SdtsBTConcepto>
            </bts:otrosConceptos>
            <bts:diaPago></bts:diaPago>
            <bts:clienteUid>370</bts:clienteUid>
         </bts:sdtSimulacionUpdate>
      </bts:BTPrestamos.ResimularRefinanciacion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ResimularRefinanciacion=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "GZ",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
      "simulacionUId": 16,
      "sdtSimulacionUpdate": {
         "fechaPrimerPago": "2023-06-21",
         "otrosConceptos": {
         "SdtsBTConcepto": {
            "texto": "",
            "valor": "",
            "concepto": ""
         }
         },
         "diaPago": "",
         "clienteUid": 370
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
      <BTPrestamos.ResimularRefinanciacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>308D1CEF6605E4CB1E0F5F84</Token>
         </Btinreq>
         <sdtSimulacion>
            <cft>218.87</cft>
            <plus>0.0</plus>
            <nomSucursal>Casa Matriz</nomSucursal>
            <otrosConceptos></otrosConceptos>
            <tasaNominalAnual>5.0</tasaNominalAnual>
            <precio>0.0</precio>
            <tipoAmortizacionDsc>Francés con Seg.e Impu.</tipoAmortizacionDsc>
            <cronograma>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>42186.64</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>22</nroCuota>
                  <intereses>522.48</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2025-03-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>57.21</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1157.21</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>42378.99</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>23</nroCuota>
                  <intereses>349.11</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2025-04-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>38.23</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1138.23</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>42572.22</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>24</nroCuota>
                  <intereses>174.95</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2025-05-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>19.16</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1119.16</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
            </cronograma>
            <comisionesDesembolso>10000.0</comisionesDesembolso>
            <segurosDesembolso>0.0</segurosDesembolso>
            <cantidadCuotas>24</cantidadCuotas>
            <impuestosDesembolso>0.0</impuestosDesembolso>
            <fechaPrimerPago>2023-06-21</fechaPrimerPago>
            <operacionUId>415</operacionUId>
            <valorCuota>43866.33</valorCuota>
            <diasRevision>0</diasRevision>
            <totalSeguros>5565.6</totalSeguros>
            <plazo>690</plazo>
            <producto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>198</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
               <otrosConceptos></otrosConceptos>
            </producto>
            <capital>1000000.0</capital>
            <tipoAmortizacionCod>3</tipoAmortizacionCod>
            <totalIntereses>46717.75</totalIntereses>
            <seguros>
               <SdtsBTSeguroPrestamo>
                  <porcentaje>0.0</porcentaje>
                  <descripcion>SANCOR- Desempleo %saldos</descripcion>
                  <importe>5565.6</importe>
                  <tipo>DESEMPLEO</tipo>
                  <codigo>200</codigo>
               </SdtsBTSeguroPrestamo>
            </seguros>
            <fechaValor>2025-05-30</fechaValor>
            <tasaEfectiva>0.0</tasaEfectiva>
            <coeficienteIVA>0.0</coeficienteIVA>
            <totalImpuestos>0.0</totalImpuestos>
            <periodicidad>30</periodicidad>
            <tasaEfectivaAnual>5.116339</tasaEfectivaAnual>
            <totalPrestamo>1062791.92</totalPrestamo>
            <fechaVencimiento>2025-05-21</fechaVencimiento>
            <tasa>5.0</tasa>
            <redondeo>0.0</redondeo>
            <montoDesembolso>990000.0</montoDesembolso>
            <comisiones>
               <SdtsBTComisionPrestamo>
                  <porcentaje>0.0</porcentaje>
                  <descripcion>Hipotecario - Importe Fijo</descripcion>
                  <importe>0.0</importe>
                  <modificable/>
                  <codigo>141</codigo>
               </SdtsBTComisionPrestamo>
               <SdtsBTComisionPrestamo>
                  <porcentaje>0.0</porcentaje>
                  <descripcion>F.H.A.</descripcion>
                  <importe>10000.0</importe>
                  <modificable/>
                  <codigo>200</codigo>
               </SdtsBTComisionPrestamo>
            </comisiones>
            <totalComisiones>10508.57</totalComisiones>
            <comisionesCuota>
               <SdtsBTComisionPrestamo>
                  <porcentaje>0.0</porcentaje>
                  <descripcion>F.H.A.</descripcion>
                  <importe>508.57</importe>
                  <modificable/>
                  <codigo>200</codigo>
               </SdtsBTComisionPrestamo>
            </comisionesCuota>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35545</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ResimularRefinanciacion</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-05-26</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>14:58:49</Hora>
         </Btoutreq>
      </BTPrestamos.ResimularRefinanciacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "sdtSimulacion": {
          "cft": 218.87,
          "plus": 0,
          "nomSucursal": "Casa Matriz",
          "otrosConceptos": "",
          "tasaNominalAnual": 5,
          "precio": 0,
          "tipoAmortizacionDsc": "Francés con Seg.e Impu.",
          "cronograma": {
            "SdtsBTCuotaSimulacion": [
              {
                "otrosConceptos": 0,
                "capital": 42186.64,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 22,
                "intereses": 522.48,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2025-03-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 57.21,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1157.21,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 42378.99,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 23,
                "intereses": 349.11,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2025-04-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 38.23,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1138.23,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 42572.22,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 24,
                "intereses": 174.95,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2025-05-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 19.16,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1119.16,
                "comisiones": 0
              }
            ]
          },
          "comisionesDesembolso": 10000,
          "segurosDesembolso": 0,
          "cantidadCuotas": 24,
          "impuestosDesembolso": 0,
          "fechaPrimerPago": "2023-06-21",
          "operacionUId": 415,
          "valorCuota": 43866.33,
          "diasRevision": 0,
          "totalSeguros": 5565.6,
          "plazo": 690,
          "producto": {
            "moneda": "$",
            "papel": "$",
            "productoUId": 198,
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF",
            "otrosConceptos":""
          },
          "capital": 1000000,
          "tipoAmortizacionCod": 3,
          "totalIntereses": 46717.75,
          "seguros": {
            "SdtsBTSeguroPrestamo": {
              "porcentaje": 0,
              "descripcion": "SANCOR- Desempleo %saldos",
              "importe": 5565.6,
              "tipo": "DESEMPLEO",
              "codigo": 200
            }
          },
          "fechaValor": "2025-05-30",
          "tasaEfectiva": 0,
          "coeficienteIVA": 0,
          "totalImpuestos": 0,
          "periodicidad": 30,
          "tasaEfectivaAnual": 5.116339,
          "totalPrestamo": 1062791.92,
          "fechaVencimiento": "2025-05-21",
          "tasa": 5,
          "redondeo": 0,
          "montoDesembolso": 990000,
          "comisiones": {
            "SdtsBTComisionPrestamo": [
              {
                "porcentaje": 0,
                "descripcion": "Hipotecario - Importe Fijo",
                "importe": 0,
                "modificable": "",
                "codigo": 141
              },
              {
                "porcentaje": 0,
                "descripcion": "F.H.A.",
                "importe": 10000,
                "modificable": "",
                "codigo": 200
              }
            ]
          },
          "totalComisiones": 10508.57,
          "comisionesCuota": {
            "SdtsBTComisionPrestamo": {
              "porcentaje": 0,
              "descripcion": "F.H.A.",
              "importe": 508.57,
              "modificable": "",
              "codigo": 200
            }
          }
        },
    "Erroresnegocio":,
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTPrestamos.ResimularRefinanciacion",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSimulacionUpdate  

### sBTSimulacionUpdate

::: center 
Los campos del tipo de dato estructurado sBTSimulacionUpdate son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
clienteUId | Long | Identificador único de cliente.
diaPago | Byte | Días de pago.
fechaPrimerPago | Date | Fecha del primer pago.
otrosConceptos | [sBTConcepto](#sbtconcepto) | Otros conceptos.

### sBTConcepto

Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.
:::

::: details sBTSimulacionOutput  

### sBTSimulacionOutput

::: center 
Los campos del tipo de dato estructurado sBTSimulacionOutput son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
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

### sBTCuotaSimulacion

Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
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
:--------- | :----------- | :-----------
moneda | String | Símbolo de la moneda. 
nombre | String | Nombre del producto. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Datos de otros conceptos.
papel | String | Símbolo del papel. 
productoUId | Long | Identificador único de producto. 

### sBTSeguroPrestamo

Los campos del tipo de dato estructurado sBTSeguroPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Int | Código del seguro.
descripcion | String | Descripción del seguro.
importeFijo | Decimal | Importe fijo del seguro.
modificable | String | Indica si es modificable.
porcentaje | Decimal | Porcentaje del seguro.
tipo | String | Tipo del seguro.

### sBTComisionPrestamo

Los campos del tipo de dato estructurado sBTComisionPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
codigo | Int | Código de comisión.
descripcion | String | Descripción de la comisión.
importe | Double | Importe de la comisión.
porcentaje | Double | Porcentaje de comisión.
:::
<!-- CIERRA SDT -->