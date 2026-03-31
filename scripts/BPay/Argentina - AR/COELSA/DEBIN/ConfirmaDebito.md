---
title: Confirmar Débito
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
::: note Método para realizar la confirmación de un débito.

**Nombre publicación:** BTCOELSAGestionDebin.ConfirmaDebito

**Programa:** RBTPAR65

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sBTConfirmaDebitoReq | [sBTConfirmarDebitoReq](#sbtconfirmardebitoreq) | Confirmar débito datos de entrada.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
confirmaDebitoRespuesta | [sBTConfirmarDebitoRes](#sbtconfirmardebitores) | Confirmar débito respuesta.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió CUIT de comprador.
30002 | No se recibió CBU de comprador o CUIT, CBU o Titular de vendedor.
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
      <bts:BTCOELSAGestionDebin.ConfirmaDebito>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>IVRISSO</bts:Usuario>
            <bts:Token>8f4120fb56464D4650046918</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>10.12.10.40</bts:Device>
         </bts:Btinreq>
         <bts:sBTConfirmaDebitoReq>             
            <bts:DetalleAdiOri></bts:DetalleAdiOri>
            <bts:Imsi></bts:Imsi>
            <bts:IdDebin>MRD06ZO9WDV1PM1N5GP7XY</bts:IdDebin>
            <bts:CompradorCbu>0940099366000013940012</bts:CompradorCbu>
            <bts:VendedorTit>NAVAR SA</bts:VendedorTit>
            <bts:Imei></bts:Imei>
            <bts:Longitud></bts:Longitud>
            <bts:CodRespuesta>00</bts:CodRespuesta>
            <bts:DetalleTrxOri></bts:DetalleTrxOri>
            <bts:tipoProductoCredito>10</bts:tipoProductoCredito>
            <bts:DetalleTermOri></bts:DetalleTermOri>
            <bts:VendedorCbu>3150100611000100130016</bts:VendedorCbu>
            <bts:Latitud></bts:Latitud>
            <bts:Plataforma></bts:Plataforma>
            <bts:TipoDispositivo></bts:TipoDispositivo>
            <bts:DetalleMoneda>032</bts:DetalleMoneda>
            <bts:VendedorCuit>27103484168</bts:VendedorCuit>
            <bts:Precision></bts:Precision>
            <bts:DetalleImporte>150.00</bts:DetalleImporte>
            <bts:CompradorCuit>20042039390</bts:CompradorCuit>
            <bts:IpCliente>127.0.0.1</bts:IpCliente>
         </bts:sBTConfirmaDebitoReq>
      </bts:BTCOELSAGestionDebin.ConfirmaDebito>
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
    <BTCOELSAGestionDebin.ConfirmaDebitoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
       <Btinreq>
          <Canal>BTDIGITAL</Canal>
          <Requerimiento>1</Requerimiento>
          <Usuario>INSTALADOR</Usuario>
          <Token>1095768874CD285A89A23FBE</Token>
          <Device>ABC</Device>
       </Btinreq>
       <confirmaDebitoRespuesta>
          <CodigoRes>00</CodigoRes>
          <DescripcionRes>Ok - GARANTIA CORRECTA</DescripcionRes>
          <FechaNegocio>2024-08-21T00:00:00</FechaNegocio>
          <Modulo>400</Modulo>
          <Transaccion>810</Transaccion>
          <Sucursal>1</Sucursal>
          <NroRelacion>2</NroRelacion>
       </confirmaDebitoRespuesta>
       <Erroresnegocio></Erroresnegocio>
       <Btoutreq>
          <Canal>BTDIGITAL</Canal>
          <Servicio>BTCOELSAGestionDebin.ConfirmaDebito</Servicio>
          <Fecha>2024-08-21</Fecha>
          <Hora>13:07:37</Hora>
          <Requerimiento>1</Requerimiento>
          <Numero>1038867</Numero>
          <Estado>OK</Estado>
       </Btoutreq>
    </BTCOELSAGestionDebin.ConfirmaDebitoResponse>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTConfirmarDebitoReq  

### sBTConfirmarDebitoReq

::: center 
Los campos del tipo de dato estructurado sBTConfirmarDebitoReq son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
DetalleAdiOri | String | Detalle Adicional Origen.
Imsi | String | Número de SIM.
IdDebin | String | Id de debin.
CompradorCbu | String | Clave Bancaria Uniforme a debitar.
VendedorTit | String | Nombre del vendedor titular.
Imei | String | Número de IMEI del equipo.
Longitud | String | Longitud.
CodRespuesta | String | Código de respuesta.
DetalleTrxOri | String | Detalle Trx Origen.
tipoProductoCredito | String | tipo de producto crédito.
DetalleTermOri | String | Detalle terminal origen.
VendedorCbu | String | Clave Bancaria Uniforme del vendedor.
Latitud | String | Latitud.
Plataforma | String | 01: Windows, 02: Android, 03: Linux, 04: Mac OS, 05: iOS, 06: Otros.
TipoDispositivo | String | 01: PC, 02: Teléfono Celular, 03: Tablet, 04: Otros.
DetalleMoneda | String | Código de Moneda.
VendedorCuit | String | Clave única de identificación tributaria del vendedor.
Precision | String | Precisión de la ubicación calculada en metros.
DetalleImporte | String | Importe de la operación.
CompradorCuit | String | Clave única de identificación tributaria del comprador.
IpCliente | String | Ip origen.
:::
 
::: details sBTConfirmarDebitoRes  

### sBTConfirmarDebitoRes

::: center 
Los campos del tipo de dato estructurado sBTConfirmarDebitoRes son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
CodigoRes | String | Código de respuesta.
DescripcionRes | String | Descripción de respuesta.
FechaNegocio | String | Fecha de negocio.
Modulo | String | Módulo.
Transaccion | String | Transacción.
Sucursal | String | Sucursal.
NroRelacion | String | Número de relación.
:::
<!-- CIERRA SDT -->