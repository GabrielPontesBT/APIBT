---
title: Simular Despejando Fecha de Vencimiento y Tasa Sin Cliente
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
::: note Método para simular un préstamo sin cliente despejando fecha de vencimiento y tasa.

**Nombre publicación:** BTPrestamos.SimularDespejandoFechaVtoTasaSC

**Programa:** RBTPG466

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPrestamoAlta | [sBTDatosDespejeSinCliente](#sbtdatosdespejesincliente) | Datos del préstamo a dar de alta.
modoDespeje  | Short | [Hidden: Valor fijo '7' para este método].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtSimulacionPrestamo | [sBTSimulacionPrestamo](#sbtsimulacionprestamo) | Datos de la simulación.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente.
30002 | No se recibió el identificador de producto.
30003 | No se recuperó la cuenta para el Identificador: [Número de Identificador].
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
      <bts:BTPrestamos.SimularDespejandoFechaVtoTasaSC>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GP</bts:Device>
            <bts:Token>387E2B35D9F43B80C31D1FF0</bts:Token>
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
      </bts:BTPrestamos.SimularDespejandoFechaVtoTasaSC>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SSimularDespejandoFechaVtoTasaSC' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
		"Btinreq": {
			"Canal": "BTDIGITAL",
			"Requerimiento": "1",
			"Usuario": "INSTALADOR",
			"Token": "d25cdaf98eCD285A89A23FBE",
			"Device": "BTDIGITAL"		 
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
      <BTPrestamos.SimularDespejandoFechaVtoTasaSCResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>387E2B35D9F43B80C31D1FF0</Token>
         </Btinreq>
         <sdtSimulacionPrestamo>
            <cft>268.850000</cft>
            <plazo>180</plazo>
            <tasa>0.000000</tasa>
            <impuestos>1596.620000</impuestos>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <fechaVencimiento>2021-04-13</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>71</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <intereses>7228.75</intereses>
            <fechaPrimerPago>2020-11-13</fechaPrimerPago>
            <comisiones>0.000000</comisiones>
            <valorCuota>5000.00</valorCuota>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-11-13</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-12-13</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-01-13</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-02-13</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-03-13</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>4539.08</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-04-13</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <totalPrestamo>29567.68</totalPrestamo>
            <capital>20000.00</capital>
            <operacionUId>1</operacionUId>
            <tasaEfectivaAnual>0.000000</tasaEfectivaAnual>
            <seguros>720.000000</seguros>
            <tasaNominalAnual>0.000000</tasaNominalAnual>
            <fechaValor>2020-10-13</fechaValor>
         </sdtSimulacionPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11918</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularDespejandoFechaVtoTasaSC</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-19</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:07:52</Hora>
         </Btoutreq>
      </BTPrestamos.SimularDespejandoFechaVtoTasaSCResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
   "Btinreq": { 
      "Device": "BTDIGITAL", 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "1", 
      "Canal": "BTDIGITAL", 
      "Token": "d25cdaf98eCD285A89A23FBE" 
   }, 
   "sdtSimulacionPrestamo": { 
      "cft": "268.850000", 
      "plazo": "180", 
      "tasa": "0.000000", 
      "impuestos": "1596.620000", 
      "tasaEfectiva": "0.000000", 
      "fechaVencimiento": "2021-04-13", 
      "producto": { 
         "papel": "$", 
         "moneda": "$", 
         "productoUId": "71", 
         "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
      }, 
      "intereses": "7228.75", 
      "fechaPrimerPago": "2020-11-13", 
      "comisiones": "0.000000", 
      "valorCuota": "5000.00", 
      "otrosConceptos": "", 
      "cronograma": { 
         "sBTCuotaPrestamoAlta": [ 
            { 
               "importe": "5000.00", 
               "redondeo": "0.00", 
               "fechaPago": "2020-11-13" 
            }, 
            { 
               "importe": "5000.00", 
               "redondeo": "0.00", 
               "fechaPago": "2020-12-13" 
            }, 
            { 
               "importe": "5000.00", 
               "redondeo": "0.00", 
               "fechaPago": "2021-01-13" 
            }, 
            { 
               "importe": "5000.00", 
               "redondeo": "0.00", 
               "fechaPago": "2021-02-13" 
            }, 
            { 
               "importe": "5000.00", 
               "redondeo": "0.00", 
               "fechaPago": "2021-03-13" 
            }, 
            { 
               "importe": "4539.08", 
               "redondeo": "0.00", 
               "fechaPago": "2021-04-13" 
            } 
         ] 
      }, 
      "totalPrestamo": "29567.68", 
      "capital": "20000.00", 
      "operacionUId": "1", 
      "tasaEfectivaAnual": "0.000000", 
      "seguros": "720.000000", 
      "tasaNominalAnual": "0.000000", 
      "fechaValor": "2020-10-13" 
   }, 
   "Erroresnegocio": { 
        "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "110675", 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.SimularDespejandoFechaVtoTasaSC", 
      "Requerimiento": "1", 
      "Fecha": "2021-03-18", 
      "Canal": "BTDIGITAL", 
      "Hora": "13:06:04" 
   } 
}
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