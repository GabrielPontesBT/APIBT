---
title: Listado DEBIN
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
::: note Método para obtener un listado de Debin.

**Nombre publicación:** BTCOELSAGestionDebin.DebinListado

**Programa:** RBTPAR64

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
ListaDebinReq | [sBTListaDebinReq](#sbtlistadebinreq) | Datos listados de un Debin.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
DebinDatosRes | [sBTListaDebinRes](#sbtlistadebinres) | Lista de datos de respuesta de Debin.
CollectionDebines | [bBTListaDebinItem](#bbtlistadebinitem) | Colección de Debines.
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
      <bts:BTCOELSAGestionDebin.ListaDebin>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>IVRISSO</bts:Usuario>
            <bts:Token>02cb4baaac464D4650046918</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>10.12.10.40</bts:Device>
         </bts:Btinreq>
         <bts:ListaDebinReq>
            <bts:listadoPagina>1</bts:listadoPagina>
            <bts:OpeFecDesde>2022-01-30T23:59:59.999Z</bts:OpeFecDesde>
            <bts:vendedorCuit>20128329464</bts:vendedorCuit>
            <bts:compradorBco></bts:compradorBco>
            <bts:compradorCuit></bts:compradorCuit>
            <bts:vendedorBco>094</bts:vendedorBco>
            <bts:vendedorLote></bts:vendedorLote>
            <bts:vendedorTerm></bts:vendedorTerm>
            <bts:listadoTamano>10</bts:listadoTamano>
            <bts:OpeFecHasta>2022-12-30T23:59:59.999Z</bts:OpeFecHasta>
            <bts:CodEstado>ACREDITADO</bts:CodEstado>
            <bts:compradorCbu></bts:compradorCbu>
            <bts:vendedorCbu></bts:vendedorCbu>
            <bts:tipoDebin>debin</bts:tipoDebin>
         </bts:ListaDebinReq>
      </bts:BTCOELSAGestionDebin.ListaDebin>
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
      <BTCOELSAGestionDebin.ListaDebinResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>IVRISSO</Usuario>
            <Device>10.12.10.40</Device>
            <Requerimiento>1</Requerimiento>
            <Token>51691464ea464D4650046918</Token>
         </Btinreq>
         <DebinDatosRes>
            <listadoPagTotales>2</listadoPagTotales>
            <DescRespuesta>LISTA DEBIN ENCONTRADA</DescRespuesta>
            <CodRespuesta>00</CodRespuesta>
         </DebinDatosRes>
         <CollectionDebines>
            <debin>
               <CompradorCuit>20056853562</CompradorCuit>
               <VendedorCbu>0940099374001380450017</VendedorCbu>
               <Concepto>CUO</Concepto>
               <DebinId>GWY7ZEPN6Y7E4ZP2Q0M51O</DebinId>
               <VendedorTerm/>
               <Devolucion>false</Devolucion>
               <DebinTipo>DEBIN</DebinTipo>
               <CompradorCbu>0940099366000071650012</CompradorCbu>
               <IdOperOriginal>0</IdOperOriginal>
               <Moneda>032</Moneda>
               <Importe>10.22</Importe>
               <CompradorTitular>YUNES RAMON ABRAHAM</CompradorTitular>
               <CodigoEst>ACREDITADO</CodigoEst>
               <DebinVencimiento>2022-08-11T23:59:52.2323699-03:00</DebinVencimiento>
               <VendedorCuit>20128329464</VendedorCuit>
               <CompradorAlias>RAMONYUNESBCSA1</CompradorAlias>
               <VendedorTitular>YUNES RAMON ALBERTO</VendedorTitular>
            </debin>
            ...
         </CollectionDebines>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-08-01</Fecha>
            <Hora>17:43:01</Hora>
            <Numero>171267369</Numero>
            <Servicio>BTCOELSAGestionDebin.ListaDebin</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCOELSAGestionDebin.ListaDebinResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTListaDebinReq  

### sBTListaDebinReq

::: center 
Los campos del tipo de dato estructurado sBTListaDebinReq son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
listadoTamano | Short |  Tamaño listado. 
listadoPagina | Short |  Página. 
vendedorCuit | String |  Clave única de identificación tributaria del vendedor. 
vendedorTerm | String |  Número de terminal del vendedor. 
vendedorLote | Short |  vendedor Lote. 
vendedorBco | String |  Codigo del banco. 
vendedorBco | String |  Clave Bancaria Uniforme vendedor. 
compradorCuit | String |  Clave única de identificación tributaria del comprador. 
compradorBco | String |  Banco comprador. 
compradorCbu | String |  Clave Bancaria Uniforme del comprador.
OpeFecDesde | String | Fecha desde la cual se emite la operación. 
OpeFecHasta | String | Fecha hasta la cual se emite la operación. 
CodEstado | String |  Código estado. 
tipoDebin | String |  Tipo debin. 
:::
 
::: details SdtsBTListaDebinRes  

### sBTListaDebinRes

::: center 
Los campos del tipo de dato estructurado sBTListaDebinRes son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
listadoPagTotales | Short | listado páginas totales. 
CodRespuesta | String |  Código respuesta. 
DescRespuesta | String |  Descripción de respuesta. 
:::

::: details SdtbBTListaDebinItem  

### bBTListaDebinItem

::: center 
Los campos del tipo de dato estructurado SdtbBTListaDebinItem son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
CompradorCuit | String | Clave única de identificación tributaria del Comprador.
VendedorCbu |  String | Clave Bancaria Uniforme del Vendedor.
Concepto | String | Concepto.
DebinId | String | Identificador único de Debin.
VendedorTerm | String | Número de terminal del vendedor.
Devolucion | String | Devolución?
DebinTipo | String | Tipo de Debin.
CompradorCbu | String | Clave Bancaria Uniforme del Comprador.
IdOperOriginal | Short | Id de la operación original.
Moneda | Short | Moneda.
Importe | Short | Importe.
CompradorTitular | String | Nombre del titular comprador.
CodigoEst | String | Código de estado.
DebinVencimiento | Date | Fecha de vencimiento del debin.
VendedorCuit | Short | Clave única de identificación tributaria del vendedor.
CompradorAlias | String | Alias del comprador.
VendedorTitular | String | Nombre del vendedor.
:::
<!-- CIERRA SDT -->
