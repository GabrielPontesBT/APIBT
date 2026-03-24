---
title: Solicitar Precancelación
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
::: note Método para solicitar la precancelación de un préstamo.

**Nombre publicación:** BTPrestamos.SolicitarPrecancelacion

**Programa:** RBTPG572

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de la operación.
clienteUId | Long | Identificador único del cliente.
importe | Double | Importe.
referencia | String | Referencia.
fechaValor | Date | Fecha valor del préstamo.
tipoPrecancelacion | String | Tipo de precancelación. Se pueden enviar los siguientes [valores](#valores1).
prepagoManual | String | ¿El prepago es manual? (S = Si / N = No).
tipoReduccion | String | Tipo de reducción. Se pueden enviar los siguientes [valores](#valores2).
modalidadIntereses | String | Modalidad de intereses. Se pueden enviar los siguientes [valores](#valores3).
motivoPrecancelacion | Byte | Identificador del motivo de precancelación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
numeroLote | int | Número de lote.
logPrecancelacion | int | Identificador del log de precancelación.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de operación de préstamo.
30002 | No se recuperó la operación para el Identificador: [Número de identificador].
30003 | Debe ingresar importe.
30006 | No se recibió el identificador de cliente.
30007 | No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].
30008 | El préstamo no pertenece al cliente.
30010 | No se ingresó el tipo de precancelación.
30011 | El valor del campo tipoPrecancelacion tiene que ser P o T.
30012 | No se ingresó si es pre pago manual.
30013 | El valor del campo prepagoManual tiene que ser S o N.
30014 | No se ingresó el tipo de reducción.
30015 | El valor del campo tipoReduccion tiene que ser P o C.
30016 | No se ingresó la modalidad de intereses.
30017 | El valor del campo modalidadIntereses tiene que ser CP o SP.
30018 | No se ingresó el motivo de la precancelación.
30019 | No se ingresó la fecha valor.
40001 | El identificador de motivo de precancelación no está registrado.

::: 
<!-- CIERRA TABLA DE DATOS -->

<!-- ABRE VALORES -->
::: details Valores Tipo de Precancelación

### Valores1

::: center 

Este campo tiene dos opciones:

Valor | Comentarios
:--------- | :-----------
P | Parcial.
T | Total.
:::

::: details Valores Tipo de Reducción

### Valores2

::: center 

Este campo tiene dos opciones:

Valor | Comentarios
:--------- | :-----------
P | Plazo.
C | Cuota.
:::

::: details Valores Modalidad de Interés

### Valores3

::: center 

Este campo tiene dos opciones:

Valor | Comentarios
:--------- | :-----------
SP | Sin perdón.
CP | Con perdón.
:::

<!-- CIERRA VALORES -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SolicitarPrecancelacion>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>3D61565504E071EF8B946737</Token>
         </Btinreq>
         <bts:operacionUId>167</bts:operacionUId>
         <bts:clienteUId>5</bts:clienteUId>
         <bts:importe>5000</bts:importe>
         <bts:referencia>Prueba</bts:referencia>
         <bts:fechaValor>2024-09-18</bts:fechaValor>
         <bts:tipoPrecancelacion>P</bts:tipoPrecancelacion>
         <bts:prepagoManual>S</bts:prepagoManual>
         <bts:tipoReduccion>C</bts:tipoReduccion>
         <bts:modalidadIntereses>SP</bts:modalidadIntereses>
         <bts:motivoPrecancelacion>1</bts:motivoPrecancelacion>
      </bts:BTPrestamos.SolicitarPrecancelacion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SolicitarPrecancelacion=' \
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
      "operacionUId": 167,
      "clienteUId": 5,
      "importe": 5000,
      "referencia": "Prueba",
      "fechaValor": "2024-09-18",
      "tipoPrecancelacion": "P",
      "prepagoManual": "S",
      "tipoReduccion": "C",
      "modalidadIntereses": "SP",
      "motivoPrecancelacion": 1
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
      <BTPrestamos.SolicitarPrecancelacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>0E93EA2F1B3F9ED212A0449F</Token>
         </Btinreq>
         <numeroLote>23411</numeroLote>
         <logPrecancelacion>22</logPrecancelacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-09</Fecha>
            <Hora>10:29:05</Hora>
            <Numero>24965</Numero>
            <Servicio>BTPrestamos.SolicitarPrecancelacion</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SolicitarPrecancelacionResponse>
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
    "numeroLote": 23411,
    "logPrecancelacion": 22,
    "Erroresnegocio":,
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTPrestamos.SolicitarPrecancelacion",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->