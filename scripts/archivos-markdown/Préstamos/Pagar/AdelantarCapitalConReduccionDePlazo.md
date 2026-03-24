---
title: Adelantar Capital Con Reducción De Plazo
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
::: note Método para realizar el pago de cuota de un préstamo con reducción de plazo.

**Nombre publicación:** BTPrestamos.AdelantarCapitalConReduccionDePlazo

**Programa:** RBTPG555

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
operacionUId_Cobro | Long | Identificador único de la operación de cobro.
referencia | String | Referencia.
modo | String | [Hidden: Valor fijo 'S' para este método].
modalidadIntereses | String | Modalidad de intereses. Se pueden enviar los siguientes [valores](#valores).

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
movimientoUId | Long | Identificador único del movimiento.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de operación de préstamo.
30002 | No se recibió el identificador único de operación de cobro.
30003 | Debe ingresar importe.
30004 | No se recuperó la operación para el Identificador: [Número de Identificador].
30005 | No se recuperó la operación para el Identificador: [Número de Identificador].
30006 | No se recibió el identificador de cliente.
30007 | No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador].
30008 | El préstamo no pertenece al cliente.
30009 | La operación de cobro no pertenece al cliente.
30010 | No se ingresó la modalidad de intereses.
30011 | El valor del campo modalidadIntereses tiene que ser CP o SP.
30100 | Error en la contabilización.
51002 | La operación no existe.
51003 | La operación de cobro no existe.
51012 | La operación esta cancelada.
51013 | La operación de cobro esta cancelada.
::: 
<!-- CIERRA TABLA DE DATOS -->

<!-- ABRE VALORES -->
::: details Valores Modalidad de Interés

### Valores

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
      <bts:BTPrestamos.AdelantarCapitalConReduccionDePlazo>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9436BF7CB5B5BB404CC6E5A7</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>212</bts:operacionUId>
         <bts:clienteUId>61</bts:clienteUId>
         <bts:importe>30</bts:importe>
         <bts:operacionUId_Cobro>21</bts:operacionUId_Cobro>
         <bts:referencia></bts:referencia>
         <bts:modalidadIntereses>SP</bts:modalidadIntereses>
      </bts:BTPrestamos.AdelantarCapitalConReduccionDePlazo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?AdelantarCapitalConReduccionDePlazo' \
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
    "operacionUId": 212,
    "clienteUId": 61,
    "importe": 30,
    "operacionUId_Cobro": 21,
    "referencia": "",
    "modalidadIntereses": "SP"
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
      <BTPrestamos.AdelantarCapitalConReduccionDePlazoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>9436BF7CB5B5BB404CC6E5A7</Token>
         </Btinreq>
         <movimientoUId>67</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20604</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.AdelantarCapitalConReduccionDePlazo</Servicio>
            <Fecha>2024-05-21</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>15:43:23</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.AdelantarCapitalConReduccionDePlazoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "movimientoUId": 67,
    "Erroresnegocio": "",
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPrestamos.AdelantarCapitalConReduccionDePlazo",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->