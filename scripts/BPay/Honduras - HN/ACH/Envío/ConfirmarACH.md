---
title: Confirmar Transferencia Directa
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
::: note Método para confirmar una transferencia ACH directa.

**Nombre publicación:** BTTransferenciasACH.ConfirmarACH

**Programa:** RBPHO07

**Global/País:** Honduras
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatorio | Comentarios
:--------- | :--------- | :--------- | :---------
IdTransferencia	    | Int       | S	| Identificador Transferencia (PAYD01ID).

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
Estado              | String    | Estado de la transferencia.
OriginalMessageId 	| String    | Identificador devuelto por la cámara.

@tab Errores

Código | Descripción
:--------- | :---------
1 | No se recibió Id de transferencia.

::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab xml
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTransferenciasACH.ConfirmarACH>
         <bts:Btinreq>
            <bts:Canal>BTINTERNO</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>088459081EF05E4F9E3B2B7A</bts:Token>
         </bts:Btinreq>
         <bts:IdTransferencia>131</bts:IdTransferencia>
      </bts:BTTransferenciasACH.ConfirmarACH>
   </soapenv:Body>
</soapenv:Envelope>
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab xml
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTransferenciasACH.ConfirmarACHResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTINTERNO</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>088459081EF05E4F9E3B2B7A</Token>
         </Btinreq>
         <Estado/>
         <OriginalMessageId/>
         <Erroresnegocio/>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2025-05-02</Fecha>
            <Hora>14:47:59</Hora>
            <Numero>2249</Numero>
            <Servicio>BTTransferenciasACH.ConfirmarACH</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTINTERNO</Canal>
         </Btoutreq>
      </BTTransferenciasACH.ConfirmarACHResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->