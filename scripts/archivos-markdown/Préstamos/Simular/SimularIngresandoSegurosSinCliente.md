---
title: Simular Ingresando Seguros Sin Cliente
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
::: note Método para simular el alta de un préstamo sin cliente ingresando los seguros a aplicar.

**Nombre publicación:** BTPrestamos.SimularIngresandoSegurosSC

**Programa:** RBTPG467

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPrestamoAlta | [sBTDatosDespejeSinCliente](#sbtdatosdespejesincliente) | Datos de la simulación.
sinSeguros | String | Acción a tomar cuando la lista de seguros a aplicar es vacía (S: Simula sin tener en cuenta ningún seguro, N: Simula con los seguros preseteados).
sdtSeguros | [sBTSeguroSimulacion](#sbtsegurosimulacion) | Listado de códigos de seguros a aplicar.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtSimulacionPrestamo | [sBTSimulacionPrestamo](#sbtsimulacionprestamo) | Datos de simulación del préstamo.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente.
30002 | No se recibió el identificador de producto.
30003 | No se recuperó la cuenta para el Identificador: [Número de Identificador].
:::
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
      <bts:BTPrestamos.SimularIngresandoSegurosSC>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>387E2B35D9F43B80C31D1FF0</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:sdtPrestamoAlta>
            <bts:plazoTotal>300</bts:plazoTotal>
            <bts:productoUId>71</bts:productoUId>
            <bts:monto>20000</bts:monto>
            <bts:actividad>1111</bts:actividad>
            <bts:valorCuota>5000</bts:valorCuota>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas></bts:cantidadCuotas>
            <bts:tasa></bts:tasa>
            <bts:fechaPrimerPago>2020-11-13</bts:fechaPrimerPago>
            <bts:pizarra></bts:pizarra>
         </bts:sdtPrestamoAlta>
         <bts:sinSeguros>N</bts:sinSeguros>
         <bts:sdtSeguros>
            <bts:sBTSeguroSimulacion>
               <bts:codigo>100</bts:codigo>
            </bts:sBTSeguroSimulacion>
         </bts:sdtSeguros>
      </bts:BTPrestamos.SimularIngresandoSegurosSC>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularIngresandoSegurosSC' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
      "Canal": "BTDIGITAL",
      "Usuario": "MINSTALADOR",
      "Device": "GL",
      "Requerimiento": 1,
      "Token": "01D45E9964612A4C8CCB1055"
   },
   "sdtPrestamoAlta": {
      "plazoTotal": "300",
      "productoUId": "71",
      "monto": "20000",
      "actividad": "1111",
      "valorCuota": "5000",
      "periodoCuotas": "30",
      "cantidadCuotas": "",
      "tasa": "",
      "fechaPrimerPago": "2020-11-13",
      "pizarra": ""
   },
   "sinSeguros": "N",
   "sdtSeguros": {
      "sBTSeguroSimulacion": {
      "codigo": "100"
      }
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
      <BTPrestamos.SimularIngresandoSegurosSCResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>387E2B35D9F43B80C31D1FF0</Token>
         </Btinreq>
         <sdtSimulacionPrestamo>
            <cft>28.210000</cft>
            <plazo>360</plazo>
            <tasa>23.000000</tasa>
            <impuestos>452.410000</impuestos>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <fechaVencimiento>2021-10-13</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>71</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
               <otrosConceptos></otrosConceptos>
            </producto>
            <intereses>2027.72</intereses>
            <fechaPrimerPago>2020-11-13</fechaPrimerPago>
            <comisiones>0.000000</comisiones>
            <valorCuota>5000.00</valorCuota>
            <otrosConceptos>
               <SdtsBTConcepto>
                  <texto>SANCOR - Vida - Variante 1</texto>
                  <valor>1440.00</valor>
                  <concepto>100</concepto>
               </SdtsBTConcepto>
            </otrosConceptos>
            <cronograma>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-11-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-12-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-01-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-02-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-03-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-04-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-05-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-06-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-07-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-08-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-09-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-10-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
            </cronograma>
            <totalPrestamo>23942.44</totalPrestamo>
            <capital>20000.00</capital>
            <operacionUId>1</operacionUId>
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual>
            <seguros>1440.000000</seguros>
            <tasaNominalAnual>20.881010</tasaNominalAnual>
            <fechaValor>2020-10-13</fechaValor>
         </sdtSimulacionPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11921</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularIngresandoSegurosSC</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-19</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:42:21</Hora>
         </Btoutreq>
      </BTPrestamos.SimularIngresandoSegurosSCResponse>
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
      "Token": "72e34bcd9d4A8B5C60A82434"
   },
   "sdtSimulacionPrestamo": {
      "cft": "28.210000",
      "plazo": "360",
      "tasa": "23.000000",
      "impuestos": "452.410000",
      "tasaEfectiva": "0.000000",
      "fechaVencimiento": "2021-10-13",
      "producto": {
      "papel": "$",
      "moneda": "$",
      "productoUId": "71",
      "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF",
      "otrosConceptos":""
      },
      "intereses": "2027.72",
      "fechaPrimerPago": "2020-11-13",
      "comisiones": "0.000000",
      "valorCuota": "5000.00",
      "otrosConceptos": {
      "SdtsBTConcepto": {
         "texto": "SANCOR - Vida - Variante 1",
         "valor": "1440.00",
         "concepto": "100"
      }
      },
      "cronograma": {
      "SdtsBTCuotaPrestamoAlta": [
         {
            "importe": "5000.00",
            "redondeo": "0.00",
            "fechaPago": "2020-11-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2020-12-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-01-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-02-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-03-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-04-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-05-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-06-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-07-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-08-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-09-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-10-13"
         }
      ]
      },
      "totalPrestamo": "23942.44",
      "capital": "20000.00",
      "operacionUId": "1",
      "tasaEfectivaAnual": "23.000000",
      "seguros": "1440.000000",
      "tasaNominalAnual": "20.881010",
      "fechaValor": "2020-10-13"
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": 623,
      "Estado": "OK",
      "Servicio": "BTPrestamos.SimularIngresandoSeguros",
      "Fecha": "2019-11-20",
      "Requerimiento": 1,
      "Hora": "09:23:04",
      "Canal": "BTDIGITAL"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->


## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDatosDespejeSinCliente  

### sBTDatosDespejeSinCliente

::: center 
Los campos del tipo de dato estructurado sBTDatosDespejeSinCliente son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
actividad | Long | Código de actividad. 
cantidadCuotas | Int | Cantidad de cuotas. 
fechaPrimerPago | Date | Fecha primer pago. 
monto | Double | Monto del préstamo. 
periodoCuotas | Int | Período entre cuotas. 
pizarra | Short | Código de pizarra. 
plazoTotal | Int | Plazo total. 
productoUId | Long | Identificador único de producto. 
tasa | Double | Tasa. 
valorCuota | Double | Valor cuota. 
:::

::: details sBTSeguroSimulacion  

### sBTSeguroSimulacion

::: center 
Los campos del tipo de dato estructurado sBTSeguroSimulacion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
codigo | Int | Código de seguro a aplicar. 
:::

::: details sBTSimulacionPrestamo  

### sBTSimulacionPrestamo

::: center 
Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
capital | Double | Capital del préstamo. 
cronograma | [sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta) | Cronograma del préstamo.  
fechaPrimerPago | Date | Fecha de primer pago. 
fechaValor | Date | Fecha valor. 
fechaVencimiento | Date | Fecha de vencimiento. 
intereses | Double | Intereses. 
operacionUId | Long | Identificador único de operación. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Otros conceptos. 
plazo | Int | Plazo del préstamo. 
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

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.

### sBTCuotaPrestamoAlta

Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
fechaPago | Date | Fecha de pago de la cuota. 
importe | Double | Importe de la cuota. 
:::
<!-- CIERRA SDT -->