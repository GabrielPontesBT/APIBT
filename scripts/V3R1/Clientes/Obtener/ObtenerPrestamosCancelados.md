---
title: Obtener Préstamos Cancelados
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
::: note Método para obtener los préstamos cancelados de un cliente.

**Nombre publicación:** BTClientes.ObtenerPrestamosCancelados

**Programa:** RBTPG486

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único del cliente.
cancelado | String | [Hidden: Valor fijo 'C' para este método].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPrestamos | [sBTPrestamoItem](#sbtprestamoitem) | Listado de prestamos del cliente.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador único de cuenta.
30002 | No se recuperó la cuenta para el Identificador: [Número de identificador].
40001 | El cliente no tiene operaciones.
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
      <bts:BTClientes.ObtenerPrestamosCancelados>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>54878527AF5867CA94C680B0</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
      </bts:BTClientes.ObtenerPrestamosCancelados>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerPrestamosCancelados=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
    "Btinreq": {
          "Requerimiento": 1,
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "clienteUId": 61
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
      <BTClientes.ObtenerPrestamosCanceladosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>54878527AF5867CA94C680B0</Token>
         </Btinreq>
         <sdtPrestamos>
            <sBTPrestamoItem>
               <plazo>634</plazo>
               <periodicidad>0</periodicidad>
               <fechaVencimiento/>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>72</productoUId>
                  <nombre>PRÉSTAMOS, Amortización Automática TF</nombre>
                  <otrosConceptos></otrosConceptos>
               </producto>
               <tasaVigente>0.0</tasaVigente>
               <idOperacionBT>0010100000103000000000000000002900000000000426001</idOperacionBT>
               <valorCuota>1760.66</valorCuota>
               <saldoCapital>1760.66</saldoCapital>
               <fechaPrimerIncumplimiento/>
               <otrosConceptos/>
               <idOperacionFmt>0000000426-000</idOperacionFmt>
               <capitalOriginal>1760.66</capitalOriginal>
               <cantidadCuotasPagas>2</cantidadCuotasPagas>
               <operacionUId>834</operacionUId>
               <fechaUltimoPago/>
               <tipoAmortizacion/>
               <estado>Operación Cancelada</estado>
               <sucursal>Sucursal Ciudad de la Costa</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2018-11-10</fechaValor>
               <cantidadCuotas>44</cantidadCuotas>
            </sBTPrestamoItem>
         </sdtPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-22</Fecha>
            <Hora>11:58:57</Hora>
            <Numero>26937</Numero>
            <Servicio>BTClientes.ObtenerPrestamosCancelados</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerPrestamosCanceladosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": 1,
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "sdtPrestamos": {
         "sBTPrestamoItem": [{
         "plazo": 634,
         "periodicidad": 0,
         "fechaVencimiento": "",
         "producto": {
            "papel": "$",
            "moneda": "$",
            "productoUId": 72,
            "nombre": "PRÉSTAMOS, Amortización Automática TF",
            "otrosConceptos":""
         },
         "tasaVigente": 0,
         "idOperacionBT": 1.0100000103e+46,
         "valorCuota": 1760.66,
         "saldoCapital": 1760.66,
         "fechaPrimerIncumplimiento": "",
         "otrosConceptos": "",
         "idOperacionFmt": "0000000426-000",
         "capitalOriginal": 1760.66,
         "cantidadCuotasPagas": 2,
         "operacionUId": 834,
         "fechaUltimoPago": "",
         "tipoAmortizacion": "",
         "estado": "Operación Cancelada",
         "sucursal": "Sucursal Ciudad de la Costa",
         "tipoProducto": "AM",
         "fechaValor": "2018-11-10",
         "cantidadCuotas": 44
         }]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": 10403,
      "Estado": "OK",
      "Servicio": "BTClientes.ObtenerPrestamosCancelados",
      "Fecha": "2021-01-29",
      "Requerimiento": 1,
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPrestamoItem  

### sBTPrestamoItem

::: center 
Los campos del tipo de dato estructurado sBTPrestamoItem son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cantidadCuotas | Int | Cantidad de cuotas.
cantidadCuotasPagas | Int | Cantidad de cuotas del préstamo.
capitalOriginal | Double | Capital original del préstamo.
estado | String |	Estado del préstamo.
fechaPrimerIncumplimiento | Date | Fecha de primer incumplimiento.
fechaUltimoPago | Date | Fecha de último pago de la cuota.
fechaValor | Date | Fecha valor.
fechaVencimiento | Date	| Fecha de vencimiento del préstamo.
idOperacionBT | String | Identificador texto de operación.
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación).
operacionUId | Long | Identificador único de operación.
otrosConceptos	| [sBTConcepto](#sbtconcepto) | Importe otros conceptos.
periodicidad | Int | Período entre cuotas.
plazo	| Int | Plazo.
producto	| [sBTProducto](#sbtproducto) | Datos del producto.
saldoCapital | Double | Saldo de capital.
sucursal | String | Nombre de la sucursal.
tasaVigente	| Double | Tasa vigente.
tipoAmortizacion | String | Tipo de amortización.
tipoProducto | String |	Tipo de producto pasivo (Cuenta Corriente: 'CC', Caja de Ahorro: 'CA').
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