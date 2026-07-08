---
title: Alta DEBIN 
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
::: note Método para dar alta un Debin.

**Nombre publicación:** BTCOELSAGestionDebin.AltaDebin

**Programa:** RBTPAR74

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
DebinRequest | [sBTDebinReq](#sbtdebinreq) | Datos de request para alta Debin.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
debinRespuesta | [sBTDebinRes](#sbtdebinres) | Datos de alta response Debin.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió CUIT del vendedor.
30002 | No se recibió CBU del vendedor.
30003 | No se recibió código de banco.
30004 | No se recibió CUIT del comprador.
30005 | No se recibió Concepto de detalle de Debin.
30006 | No se recibió Moneda.
30007 | No se recibió importe de Debin.
30008 | No se recibió tiempo de expiración del Debin.
30009 | La cuenta del comprador no puede ser la misma que la del vendedor.
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
      <bts:BTCOELSAGestionDebin.AltaDebin>
         <bts:Btinreq>
            <bts:Canal>BTINTERNO</bts:Canal>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>f65cf3d548464D4650046918</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>10.12.10.40</bts:Device>
         </bts:Btinreq>
         <bts:DebinRequest>
            <bts:IdComprobante></bts:IdComprobante>
            <bts:imei></bts:imei>
            <bts:mismoTitular></bts:mismoTitular>
            <bts:VendedorRef></bts:VendedorRef>
            <bts:plataforma></bts:plataforma>
            <bts:VendedorSuc></bts:VendedorSuc>
            <bts:CompradorCbu>3150100612003950350031</bts:CompradorCbu>
            <bts:longitud></bts:longitud>
            <bts:Devolucion>false</bts:Devolucion>
            <bts:VendedorPrest></bts:VendedorPrest>
            <bts:VendedorBco>094</bts:VendedorBco>
            <bts:tiempoExpiracion>2000</bts:tiempoExpiracion>
            <bts:VendedorCbu>0940010810001305590013</bts:VendedorCbu>
            <bts:Concepto>CUO</bts:Concepto>
            <bts:Importe>100.00</bts:Importe>
            <bts:VendedorTerm></bts:VendedorTerm>
            <bts:IdUsuario></bts:IdUsuario>
            <bts:precision></bts:precision>
            <bts:detalleDescripcion></bts:detalleDescripcion>
            <bts:VendedorCuit>30558525025</bts:VendedorCuit>
            <bts:imsi></bts:imsi>
            <bts:VendedorRecurr>false</bts:VendedorRecurr>
            <bts:ipCliente></bts:ipCliente>
            <bts:CompradorAlias></bts:CompradorAlias>
            <bts:tipoDispositivo></bts:tipoDispositivo>
            <bts:CompradorCuit>20446061349</bts:CompradorCuit>
            <bts:latitud></bts:latitud>
            <bts:Moneda>032</bts:Moneda>
         </bts:DebinRequest>
      </bts:BTCOELSAGestionDebin.AltaDebin>
   </soapenv:Body>
</soapenv:Envelope>
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
      <BTCOELSAGestionDebin.AltaDebinResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1095768874CD285A89A23FBE</Token>
            <Device>ABC</Device>
         </Btinreq>
         <debinRespuesta>
            <DebinId>G1LMP68NKO4MX3K9R7OEV4</DebinId>
            <DebinCodEstado>00</DebinCodEstado>
            <DebinDescEstado>PERSISTIDO</DebinDescEstado>
            <DebinAddDt>2024-08-21T13:06:39.5779337-03:00</DebinAddDt>
            <DebinFechaExpiracion>2024-08-21T21:26:39.5779337-03:00</DebinFechaExpiracion>
            <EvalPuntaje>0</EvalPuntaje>
            <EvalReglas/>
            <RespuestaCod>INICIADO</RespuestaCod>
            <RespuestaDesc>INICIADO - 0201</RespuestaDesc>
         </debinRespuesta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCOELSAGestionDebin.DebinAlta</Servicio>
            <Fecha>2024-08-21</Fecha>
            <Hora>13:06:38</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>1038866</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCOELSAGestionDebin.AltaDebinResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDebinReq  

### sBTDebinReq

::: center 
Los campos del tipo de dato estructurado sBTDebinReq son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
VendedorCuit | String | Clave única de identificación tributaria del vendedor. 
VendedorCbu | String | Clave Bancaria Uniforme del vendedor. 
VendedorBco | String | Código de banco del vendedor. 
VendedorSuc | String | Sucursal vendedor. 
VendedorTerm | String | Número de terminal del Vendedor. 
VendedorRecurr | String | Vendedor recurrente. 
VendedorPrest | String | Vendedor préstamo. 
VendedorRef | String | Vendedor Referencia. 
CompradorCuit | String | Clave única de identificación tributaria del comprador. 
CompradorCbu | String | Clave Bancaria Uniforme del comprador. 
CompradorAlias | String | Comprador Alias. 
Concepto | String | Concepto. 
IdUsuario | Short | Identificador único de usuario. 
IdComprobante | Short | Id Comprobante. 
Moneda | String | Moneda. 
Importe | Int | Importe. 
Devolucion | String | Devolución. 
tiempoExpiracion | Short | Tiempo de expiración. 
detalleDescripcion | String | Detalle descripción. 
mismoTitular | Short | Mismo titular. 
ipCliente | String | IP Cliente. 
imei | String | IMEI. 
latitud | Short | Latitud. 
longitud | Short | Longitud. 
precision | Short | Precisión. 
tipoDispositivo | String | Tipo dispositivo. 
plataforma | String | Plataforma. 
imsi | String | IMSI. 
:::

::: details sBTDebinRes  

### sBTDebinRes

::: center 
Los campos del tipo de dato estructurado sBTDebinRes son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
DebinId | String | Identificador Debin. 
DebinCodEstado | String | Código estado. 
DebinDescEstado | String | Descripción estado. 
DebinAddDt | String | Fecha de alta. 
DebinFechaExpiracion | String | Fecha Expiración. 
EvalPuntaje | Short | Eval Puntaje. 
EvalReglas | String | Eval Reglas. 
RespuestaCod | String | Código respuesta. 
RespuestaDesc | String | Descripción respuesta. 
:::
<!-- CIERRA SDT -->