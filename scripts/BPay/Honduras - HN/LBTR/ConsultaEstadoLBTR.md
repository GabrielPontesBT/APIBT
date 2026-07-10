---
title: Consultar Estado Transferencia
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
::: note Método para consultar el estado de una transferencia LBTR.

**Nombre publicación:** BTTransferenciasLBTR.ConsultaEstado

**Programa:** RBPHO34

**Global/País:** Honduras
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatorio | Comentarios
:--------- | :--------- | :--------- | :---------
IdTransferencia	    | Int       | S	| Id Transferencia (PAYD01ID).

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
Estado      | String   | Estado de la transferencia.
ErrorCode 	| Int      | Código de error.
ErrorDesc 	| String   | Descripción del error.

@tab Errores

Código | Descripción
:--------- | :---------
1 | No se recibió Id.

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
      <bts:BTTransferenciasLBTR.ConsultaEstado>
         <bts:Btinreq>
            <bts:Canal>BTINTERNO</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>3390354EB574D0899E078BCD</bts:Token>
         </bts:Btinreq>
         <bts:IdTransferencia>130</bts:IdTransferencia>
      </bts:BTTransferenciasLBTR.ConsultaEstado>
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
      <BTTransferenciasLBTR.ConsultaEstadoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTINTERNO</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>3390354EB574D0899E078BCD</Token>
         </Btinreq>
         <Estado>PP</Estado>
         <ErrorCode>0</ErrorCode>
         <ErrorDesc/>
         <Erroresnegocio/>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2025-05-05</Fecha>
            <Hora>06:36:30</Hora>
            <Numero>2295</Numero>
            <Servicio>BTTransferenciasLBTR.ConsultaEstado</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTINTERNO</Canal>
         </Btoutreq>
      </BTTransferenciasLBTR.ConsultaEstadoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->