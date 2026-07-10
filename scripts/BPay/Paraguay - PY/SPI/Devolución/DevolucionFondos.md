---
title: Devolución de Fondos
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
::: note Método para la devolución de fondos.

**Nombre publicación:** BTSPIDevoluciones.DevolucionFondos

**Programa:** RBTPPY040

**Global/País:** Paraguay
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatorio | Comentarios
:--------- | :--------- | :--------- | :---------
Canal	                  | String | S | Código de transacción (MPE011CTR).
ReferenciaOriginal	   | String | S | Referencia de la transferencia original.
Importe	               | Double	| S | Importe.
Codigo	               | String | S | Código de devolución.
Descripcion	            | String | S | Descripción del motivo de devolución.
Simular	               | String | S | Simular la contabilización.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
IdLog                   | int       | Id de la bandeja de transferencias (MPE001).
Sucursal                | int       | Sucursal de contabilización.
Modulo                  | int       | Módulo de contabilización.
Transaccion             | int       | Transacción de contabilización.
Relacion                | int       | Relación de contabilización.
ReferenciaDevolucion    | String    | Referencia del mensaje de devolución.

@tab Errores

Código | Descripción
:--------- | :---------
0     | OK.
10000 | No se ingreso canal.
10001 | No se ingreso Id de mensaje.
10002 | No se ingreso importe.
10003 | No se ingreso código de razón de rechazo.
10004 | No se ingreso descripción de devolución.
10005 | La transferencia original supera los 10 días desde que se recibió.
10006 | No se ha encontrado registro de la trasferencia en la MPEPYN.
10007 | No fue posible encontré el mensaje en MPEPYR ({ReferenciaOriginal}).
10008 | No se ha encontrado registro de la trasferencia original en la MPE001.
10009 | Ya se ha realizado una devolución para esta transferencia. ({ReferenciaOriginal}).
10010 | El importe ingresado es superior al de la transferencia original.
10011 | No se ha encontrado registro de la trasferencia original en la MPE002.
10012 | La referencia no coincide con el mensaje original.
10013 | Status: StatusCode - descripción.
10014 | Saldo no disponible para realizar la operación: {Saldo}.
10015 | No se encontró modulo y transacción en canal: {Canal}.
10016 | Error al contabilizar: Módulo + Texto.
10017 | No se pudo obtener nro. de relación para trn: {Módulo} + {Transacción}.
10018 | Ya se ha realizado una devolución para esta transferencia. (Ref: {ReferenciaOriginal}).

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
      <bts:BTSPIDevoluciones.DevolucionFondos>
         <bts:Btinreq>
            <bts:Device>ABC</bts:Device>
            <bts:Usuario>BANTOTAL1</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTINTERNO</bts:Canal>
            <bts:Token>072C85F2036D7EBE3EC09EB5</bts:Token>
         </bts:Btinreq>
         <bts:Canal>841</bts:Canal>
         <bts:ReferenciaOriginal>TUFIPYPA30052549980002722979</bts:ReferenciaOriginal>
         <bts:Importe>2505</bts:Importe>
         <bts:Codigo>AC03</bts:Codigo>
         <bts:Descripcion>test</bts:Descripcion>
         <bts:Simular>N</bts:Simular>
      </bts:BTSPIDevoluciones.DevolucionFondos>
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
      <BTSPIDevoluciones.DevolucionFondosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>ABC</Device>
            <Usuario>BANTOTAL1</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTINTERNO</Canal>
            <Token>072C85F2036D7EBE3EC09EB5</Token>
         </Btinreq>
         <IdLog>24191194</IdLog>
         <Sucursal>1</Sucursal>
         <Modulo>40</Modulo>
         <Transaccion>596</Transaccion>
         <Relacion>1</Relacion>
         <ReferenciaDevolucion>BGNBPYPX30052555080024217117</ReferenciaDevolucion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>433582995</Numero>
            <Servicio>BTSPIDevoluciones.DevolucionFondos</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2025-05-30</Fecha>
            <Hora>15:18:41</Hora>
            <Canal>BTINTERNO</Canal>
         </Btoutreq>
      </BTSPIDevoluciones.DevolucionFondosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->