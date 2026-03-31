---
title: Simular Ingresando Seguros
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
::: note Método para simular el alta de un préstamo ingresando los seguros a aplicar.

**Nombre publicación:** BTPrestamos.SimularIngresandoSeguros

**Programa:** RBTPG509

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPrestamoAlta | [sBTPrestamoAlta](#sbtprestamoalta) | Datos de la simulación.
sinSeguros | String | Acción a tomar cuando la lista de seguros a aplicar es vacía (S: Simula sin tener en cuenta ningún seguro, N: Simula con los seguros preseteados).
sdtSeguros | [sBTSeguroSimulacion](#sbtsegurosimulacion) | Listado de códigos de seguros a aplicar.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sBTSimulacionPrestamo | [sBTSimulacionPrestamo](#sbtsimulacionprestamo) | Datos de simulación del préstamo.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de producto.
30002 | No se recuperó la cuenta para el Identificador: [Número de identificador].
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
      <bts:BTPrestamos.SimularIngresandoSeguros>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>GL</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>01D45E9964612A4C8CCB1055</bts:Token>
         </bts:Btinreq>
         <bts:sdtPrestamoAlta>
            <bts:fechaPrimerPago>2019-01-12</bts:fechaPrimerPago>
            <bts:monto>10000</bts:monto>
            <bts:tasa>0</bts:tasa>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:cantidadCuotas>
            <bts:productoUId>61</bts:productoUId>
            <bts:pizarra>0</bts:pizarra>
            <bts:clienteUId>4</bts:clienteUId>
            <bts:actividad>11200</bts:actividad>
         </bts:sdtPrestamoAlta>
         <bts:sinSeguros>N</bts:sinSeuros>
         <bts:sdtSeguros>
            <bts:sBTSegurosSimulacion>
                <bts:codigo>100</bts:codigo>
            </bts:sBTSegurosSimulacion>
         </bts:sdtSeguros>
      </bts:BTPrestamos.SimularIngresandoSeguros>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \
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
          "fechaPrimerPago": "2019-01-12",
          "monto": 10000,
          "tasa": 0,
          "periodoCuotas": 30,
          "cantidadCuotas": 12,
          "productoUId": 61,
          "pizarra": 0,
          "clienteUId": 4,
          "actividad": 11200
        },
        "sinSeguros": "N",
        "sdtSeguros": {
          "sBTSegurosSimulacion": {
            "codigo": 100
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
      <BTPrestamos.SimularIngresandoSegurosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>72e34bcd9d4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSimulacion>
            <otrosConceptos>
                <sBTConceptos>
                    <concepto>100</concepto>
                    <valor>1500.00</valor>
                    <texto>Seguro vida</texto>
                </sBTConceptos>
            </otrosConceptos>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-01-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-02-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-03-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-04-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-05-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-06-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-07-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-08-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-09-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-10-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-11-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.04</importe>
                  <fechaPago>2019-12-12</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <fechaValor>2018-12-11</fechaValor>
            <capital>10000.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>1288.18</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>14328.15</totalPrestamo>
            <valorCuota>1194.01</valorCuota>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <operacionUId>1</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2019-01-12</fechaPrimerPago>
            <fechaVencimiento>2019-12-12</fechaVencimiento>
            <plazo>361</plazo>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>61</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
               <otrosConceptos></otrosConceptos>
            </producto>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>623</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularIngresandoSeguros</Servicio>
            <Fecha>2019-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>09:23:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularIngresandoSegurosResponse>
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
        "sdtSimulacion": {
          "otrosConceptos": {
            "sBTConceptos": {
              "concepto": 100,
              "valor": 1500,
              "texto": "Seguro vida"
            }
          },
          "cronograma": {
            "sBTCuotaPrestamoAlta": [
              {
                "importe": 1194.01,
                "fechaPago": "2019-01-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-02-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-03-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-04-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-05-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-06-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-07-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-08-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-09-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-10-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-11-12"
              },
              {
                "importe": 1194.04,
                "fechaPago": "2019-12-12"
              }
            ]
          },
          "fechaValor": "2018-12-11",
          "capital": 10000,
          "tasaEfectiva": 0,
          "intereses": 1288.18,
          "tasaNominalAnual": 23,
          "totalPrestamo": 14328.15,
          "valorCuota": 1194.01,
          "tasaEfectivaAnual": 25.590075,
          "operacionUId": 1,
          "tasa": 23,
          "fechaPrimerPago": "2019-01-12",
          "fechaVencimiento": "2019-12-12",
          "plazo": 361,
          "producto": {
            "papel": "$",
            "moneda": "$",
            "productoUId": 61,
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF",
            "otrosConceptos":""
          }
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

::: details sBTPrestamoAlta  

### sBTPrestamoAlta

::: center 
Los campos del tipo de dato estructurado sBTPrestamoAlta son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
actividad | Long | Código de actividad (Destino del crédito). 
cantidadCuotas | Int | Cantidad de cuotas. 
clienteUId | Long | Identificador único de cliente. 
fechaPrimerPago | Date | Fecha de primer pago. 
monto | Double | Capital solicitado. 
periodoCuotas | Int | Período entre las cuotas. 
pizarra | Short | Tipo de pizarra. Si no se indica toma la preseteada para el producto. 
productoUId | Long | Identificador único de producto. 
tasa | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra. 
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