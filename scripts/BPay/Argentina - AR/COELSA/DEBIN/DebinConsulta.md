---
title: Consultar DEBIN
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
::: note Método para realizar una consulta de Debin.

**Nombre publicación:** BTCOELSAGestionDebin.ConsultaDebin

**Programa:** RBTPAR60

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
idDebin | String | Identificador único de Debin.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
ConsultaDebinResponse | [sBTConsultaDebinRes](#sbtconsultadebinres) | Datos de respuesta Debin.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió ID de Debin a consultar.
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
      <bts:BTCOELSAGestionDebin.ConsultaDebin>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>IVRISSO</bts:Usuario>
            <bts:Token>02cb4baaac464D4650046918</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>10.12.10.40</bts:Device>
         </bts:Btinreq>
         <bts:IdDebin>GWY7ZEPN6ZW0WR4NQ0M51O</bts:IdDebin>
      </bts:BTCOELSAGestionDebin.ConsultaDebin>
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
      <BTCOELSAGestionDebin.ConsultaDebinResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>IVRISSO</Usuario>
            <Device>10.12.10.40</Device>
            <Requerimiento>1</Requerimiento>
            <Token>02cb4baaac464D4650046918</Token>
         </Btinreq>
         <ConsultaDebinResponse>
            <OperFechaNegocio>2024-07-15T00:00:00</OperFechaNegocio>
            <CompradorDescEstado>No Adherido</CompradorDescEstado>
            <CompradorCbu>0940099366000013940012</CompradorCbu>
            <FechaExpiracion>2999-12-31T00:00:00+00:00</FechaExpiracion>
            <EvaluacionReglas>1a,9</EvaluacionReglas>
            <Moneda>032</Moneda>
            <Importe>100.00</Importe>
            <CompradorEndP/>
            <EstadoDebinDesc>0600 - ACREDITADO</EstadoDebinDesc>
            <VendedorEndP>0202</VendedorEndP>
            <OperacionId>GWY7ZEPN6ZW0WR4NQ0M51O</OperacionId>
            <CompradorSuc>0099</CompradorSuc>
            <EvaluacionPuntaje>50</EvaluacionPuntaje>
            <Descripcion/>
            <CodigoResp>00</CodigoResp>
            <CompradorTitular>OJEDA FELIX ANGEL</CompradorTitular>
            <VendedorEsTitu>0</VendedorEsTitu>
            <VendedorBco>432</VendedorBco>
            <FechaAlta>2024-07-12T20:14:30.3140212-03:00</FechaAlta>
            <OperacionGarantia>true</OperacionGarantia>
            <CompradorCodEstado>01</CompradorCodEstado>
            <Devolucion>false</Devolucion>
            <IdComprobante>0</IdComprobante>
            <VendedorCod/>
            <OperacionTipoOper>20</OperacionTipoOper>
            <CompradorCodigo/>
            <CompradorMda>032</CompradorMda>
            <VendedorCbu>4320011910003292430013</VendedorCbu>
            <CompradorTerm/>
            <CompradorEsTitu>0</CompradorEsTitu>
            <VendedorTerm/>
            <CompradorCuit>20042039390</CompradorCuit>
            <VendedorCuit>27337167255</VendedorCuit>
            <IdUsuario>0</IdUsuario>
            <Concepto>CUO</Concepto>
            <VendedorTitular>VERON MARIA TERESA</VendedorTitular>
            <VendedorSuc>0011</VendedorSuc>
            <OperacionPreAuto>false</OperacionPreAuto>
            <EstadoDebinCodigo>ACREDITADO</EstadoDebinCodigo>
            <CompradorTipo>10</CompradorTipo>
            <OperloteId>0</OperloteId>
            <VendedorTipo>TRANSFERENCIA</VendedorTipo>
            <CompradorAlias/>
            <IdOperacionOriginal>8200566</IdOperacionOriginal>
            <VendedorMda>032</VendedorMda>
            <DescripcionResp>DEBIN ENCONTRADO</DescripcionResp>
            <VendedorAlias/>
            <CompradorBco>094</CompradorBco>
         </ConsultaDebinResponse>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-08-01</Fecha>
            <Hora>15:01:15</Hora>
            <Numero>171266118</Numero>
            <Servicio>BTCOELSAGestionDebin.ConsultaDebin</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCOELSAGestionDebin.ConsultaDebinResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTConsultaDebin  

### sBTConsultaDebinRes

::: center 
Los campos del tipo de dato estructurado sBTConsultaDebinRes son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
VendedorTipo | String | Vendedor tipo. 
VendedorEndP | String | vendedor endpoint. 
EvaluacionPuntaje | Short | Evaluación puntaje. 
EvaluacionReglas | String | Evaluación Reglas. 
DescripcionResp | String | Descripción respuesta. 
CodigoResp | String | Código respuesta. 
OperacionId | String | Operación Id. 
OperacionGarantia | String  | Operación garantía. 
OperacionTipoOper | String  | Tipo operación. 
OperloteId | Short  | Operación lote Id. 
OperFechaNegocio | String  | Operación fecha negocio. 
OperacionPreAuto | String  | Operacion pre autorización. 
EstadoDebinDesc | String  | Estado Debin Descripción. 
EstadoDebinCodigo | String  | Estado debin código. 
CompradorCodigo | String | Comprador código. 
CompradorTitular | String | Comprador titular. 
CompradorCuit | String  | Comprador Clave única de identificación tributaria. 
CompradorCodEstado | String | Comprador código estado. 
CompradorDescEstado | String | Comprador descripción estado. 
CompradorBco | String | Comprador Banco. 
CompradorSuc | String | Comprador sucursal. 
CompradorTerm | String | Número de terminal del Comprador. 
CompradorAlias | String | Comprador alias. 
CompradorCbu | String | Comprador Clave Bancaria Uniforme. 
CompradorEsTitu | Short | es titular?. 
CompradorMda | String | Comprador moneda. 
CompradorTipo | String | Comprador tipo. 
CompradorEndP | String | Comprador endpoint. 
Concepto | String | Concepto. 
IdUsuario | Short | Id usuario. 
IdComprobante | Short | Id comprobante. 
Moneda | String | Moneda. 
Importe | Int | Importe. 
Devolucion | String | Devolución. 
Descripcion | String | Descripción. 
IdOperacionOriginal | String | Id operación original. 
FechaAlta | String | Fecha alta. 
FechaExpiracion | String | Fecha expiración. 
VendedorCod | String | Vendedor código. 
VendedorTitular | String | Vendedor titular. 
VendedorCuit | String | Vendedor Clave única de identificación tributaria. 
VendedorBco | String | Vendedor banco. 
VendedorSuc | String | Vendedor sucursal. 
VendedorTerm | String | Vendedor terminal. 
VendedorAlias | String | Vendedor alias. 
VendedorCbu | String | Vendedor Clave Bancaria Uniforme. 
VendedorEsTitu | Short | Es titular?. 
VendedorMda | String | Vendedor Moneda. 
:::
<!-- CIERRA SDT -->