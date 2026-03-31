---
title: Consultar Vendedores Adheridos
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
::: note Método para consultar un vendedor adherido.

**Nombre publicación:** BTCOELSAGestionDebin.VendedorAdheridoConsulta

**Programa:** RBTPAR66

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
listaVendedorAdhReq | sBTVendedoresAdheridosReq | Datos requeridos de un vendedor adherido.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
listaVendedorAdhRes | sBTVendedoresAdheridosRes | Datos listados de un vendedor adherido.
CollectionVendedores | sBTVendedorAdhItem | Colección de vendedores adheridos.

@tab Errores

No aplica
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
      <bts:BTCOELSAGestionDebin.VendedorAdheridoConsulta>
         <Btinreq>
            <Device>ABC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1300e34215CD285A89A23FBE</Token>
         </Btinreq>
         <bts:listaVendedorAdhReq>
            <bts:listaTamano>10</bts:listaTamano>
            <bts:listaPagina>1</bts:listaPagina>
            <bts:VendedorCuit>30716226308</bts:VendedorCuit>
            <bts:VendedorRubro>VARIOS</bts:VendedorRubro>
         </bts:listaVendedorAdhReq>
      </bts:BTCOELSAGestionDebin.VendedorAdheridoConsulta>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```
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
      <BTCOELSAGestionDebin.VendedorAdheridoConsultaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>ABC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1300e34215CD285A89A23FBE</Token>
         </Btinreq>
         <ListaVendedorAdhRes>
            <listadoPagTotales>0</listadoPagTotales>
            <DescRespuesta>VENDEDORES ENCONTRADOS</DescRespuesta>
            <CodRespuesta>00</CodRespuesta>
         </ListaVendedorAdhRes>
         <CollectionVendedores>
            <sBTVendedorAdhItem>
               <VendNomFantasia/>
               <VendRubro>VARIOS</VendRubro>
               <VendCuit>30716226308</VendCuit>
            </sBTVendedorAdhItem>
         </CollectionVendedores>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>259666842</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCOELSAGestionDebin.ConsultaVendAdheridos</Servicio>
            <Fecha>2024-08-22</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>10:32:32</Hora>
         </Btoutreq>
      </BTCOELSAGestionDebin.VendedorAdheridoConsultaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->