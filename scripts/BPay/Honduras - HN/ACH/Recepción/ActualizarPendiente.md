---
title: Actualizar Pendiente
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
::: note Método para actualizar el estado pendiente de una transferencia ACH.

**Nombre publicación:** BTTransferenciasACH.ActualizarPendiente

**Programa:** RBPHO30

**Global/País:** Honduras
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatorio | Comentarios
:--------- | :--------- | :--------- | :---------
IdTransferencia	 | Int | S | Id Transferencia (PAYD01ID).

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
Estado              | String    | Estado de la transferencia.
Codigo              | Short     | Código de respuesta a la cámara.

@tab Errores

Código | Descripción
:--------- | :---------
0   | OK.
100 | No se encontró transacción.

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
      <bts:BTTransferenciasACH.ActualizarPendiente>
         <bts:Btinreq>
            <bts:Canal>BTINTERNO</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>088459081EF05E4F9E3B2B7A</bts:Token>
         </bts:Btinreq>
         <bts:IdTransferencia>128</bts:IdTransferencia>
         <bts:Estado>PR</bts:Estado>
      </bts:BTTransferenciasACH.ActualizarPendiente>
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
      <BTTransferenciasACH.ActualizarPendienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTINTERNO</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>088459081EF05E4F9E3B2B7A</Token>
         </Btinreq>
         <Estado>PR</Estado>
         <Codigo>0</Codigo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2025-05-02</Fecha>
            <Hora>13:27:47</Hora>
            <Numero>2234</Numero>
            <Servicio>BTTransferenciasACH.ActualizarPendiente</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTINTERNO</Canal>
         </Btoutreq>
      </BTTransferenciasACH.ActualizarPendienteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->