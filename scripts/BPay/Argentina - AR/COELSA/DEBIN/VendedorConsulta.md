---
title: Vendedor Consulta
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
::: note Método para consulta de datos referidos al vendedor.

**Nombre publicación:** BTCOELSAGestionDebin.VendedorConsulta

**Programa:** RBTPAR58

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
cuit | String | Documento.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
consultaVendedorRespuesta | [sBTVendedoresAdheridosRes](#sbtvendedoresadheridosres) | Datos listados de un vendedor.
ColeccionVendedorConsulta | [sBTConsultaVendedorCuenta_CuentaItem](#sbtconsultavendedorcuenta_cuentaitem) | Colección de datos del vendedor.
 
@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió CUIT.
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
      <bts:BTCOELSAGestionDebin.ConsultaVendedor>
            <Btinreq>
               <Canal>BTDIGITAL</Canal>
               <Requerimiento>1</Requerimiento>
               <Usuario>INSTALADOR</Usuario>
               <Token>1095768874CD285A89A23FBE</Token>
               <Device>ABC</Device>
            </Btinreq>
         <bts:Cuit>30716226308</bts:Cuit>
      </bts:BTCOELSAGestionDebin.ConsultaVendedor>
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
      <BTCOELSAGestionDebin.VendedorConsultaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1095768874CD285A89A23FBE</Token>
            <Device>ABC</Device>
         </Btinreq>
         <consultaVendedorRespuesta>
            <Cuit>30716226308</Cuit>
            <Titular>CREDICLARO SAS</Titular>
            <Email/>
            <Descripcion>VENDEDOR ENCONTRADO</Descripcion>
            <Codigo>00</Codigo>
         </consultaVendedorRespuesta>
         <consultaVendedorCuenta>
            <ColeccionVendedorConsulta>
               <NombreFantasia/>
               <Rubro>VARIOS</Rubro>
               <Cbu>4320001010003005710010</Cbu>
               <Banco>432</Banco>
               <Sucursal>0001</Sucursal>
               <Moneda>032</Moneda>
               <Tipo>20</Tipo>
               <Endpoint>0202</Endpoint>
               <Alta>2024-08-21T00:00:00</Alta>
            </ColeccionVendedorConsulta>
         </consultaVendedorCuenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCOELSAGestionDebin.VendedorConsulta</Servicio>
            <Fecha>2024-08-21</Fecha>
            <Hora>12:51:56</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>1038865</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCOELSAGestionDebin.VendedorConsultaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTVendedoresAdheridosRes  

### sBTVendedoresAdheridosRes

::: center 
Los campos del tipo de dato estructurado sBTVendedoresAdheridosRes son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
Cuit | String | Clave única de identificación tributaria del vendedor. 
Titular | String | Nombre del vendedor. 
Email | Short | Email del vendedor. 
Descripcion | String | Descripción. 
Codigo | String | Código. 
:::

::: details sBTConsultaVendedorCuenta_CuentaItem  

### sBTConsultaVendedorCuenta_CuentaItem

::: center 
Los campos del tipo de dato estructurado sBTConsultaVendedorCuenta_CuentaItem son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
Tipo | String | Tipo Cuenta Vendedor.
Rubro | String | Rubro.
Moneda | String | Moneda.
NombreFantasia | String | Nombre Fantasía Vendedor.
Cbu | String | Clave Bancaria Uniforme del Vendedor.
Banco | String | Banco.
Endpoint | String | Endpoint.
Sucursal | String | Sucursal.
Alta | String | Fecha de Alta.
:::
<!-- CIERRA SDT -->
