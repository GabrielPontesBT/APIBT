---
title: Respuesta a Solicitud de Retorno de Fondos
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
::: note Método para el envío de una respuesta a una solicitud de retorno de fondos.

**Nombre publicación:** BTSPIDevoluciones.RespuestaSolicitudRetorno

**Programa:** RBTPPY011

**Global/País:** Paraguay
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatoriedad | Comentarios
:--------- | :--------- | :--------- | :---------
Canal	         | String | M | Código de transacción (MPE011CTR).
referencia	   | String | M | Referencia de la transferencia original.
Motivo	      | String | M | Motivo de la aceptación o rechazo.
Importe	      | Double	| M | Importe.
Codigo	      | String | M | Código de devolución.
Devolucion	   | String | M | ACEPTAR o RECHAZAR.
Simular	      | String | M | Simular la contabilización.


@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
Sucursal              | Int       | Sucursal de contabilización.
Modulo                | Int       | Módulo de contabilización.
Transaccion           | Int       | Transacción de contabilización.
Relacion              | Int       | Relación de contabilización.
identificador         | Int       | Id de la bandeja de transferencias (MPE001).
referenciaGenerada    | String    | Referencia del mensaje de devolución.

@tab Errores

Código | Descripción
:--------- | :---------
0     | OK.
30000 | No se ingreso canal.
30001 | No se ingreso Id de mensaje.
30002 | Devolución incorrecta (ACEPTAR/RECHAZAR)'
30003 | No se ingreso importe.
30004 | No se ingreso código.
30005 | No se ingreso motivo.
30009 | No fue posible encontrar el mensaje en MPE056: {ReferenciaOriginal}.
30010 | No fue posible encontrar el mensaje en MPEPYR PACS008 {MPEPYNID}.
30011 | Estado de transferencia no permite devolución: {MPE001Est}.
30012 | El importe ingresado supera transferencia original: {MPE001Imp}.
30013 | No se encontró registro en MPE001.
30014 | Error al enviar.
30015 | Saldo no disponible para realizar la operación: {Saldo}.
30016 | No se encontró modulo y transacción en canal: ({Canal}).
30017 | No se pudo obtener nro. de relación para trn {Módulo} / {Transacción}.
30018 | Error TRN: {MnTxt}.
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
      <bts:BTSPIDevoluciones.RespuestaSolicitudRetorno>
         <bts:Btinreq>
            <bts:Device>ABC</bts:Device>
            <bts:Usuario>BANTOTAL1</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTINTERNO</bts:Canal>
            <bts:Token>072C85F2036D7EBE3EC09EB5</bts:Token>
         </bts:Btinreq>
         <bts:canal>841</bts:canal>
         <bts:referencia>COMAPYPAARES250513112360004181905</bts:referencia>
         <bts:motivo>test</bts:motivo>
         <bts:importe>100</bts:importe>
         <bts:codigo>AC03</bts:codigo>
         <bts:devolucion>ACEPTAR</bts:devolucion>
         <bts:simular>N</bts:simular>
      </bts:BTSPIDevoluciones.RespuestaSolicitudRetorno>
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
      <BTSPIDevoluciones.RespuestaSolicitudRetornoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>ABC</Device>
            <Usuario>BANTOTAL1</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTINTERNO</Canal>
            <Token>072C85F2036D7EBE3EC09EB5</Token>
         </Btinreq>
         <sucursal>1</sucursal>
         <modulo>40</modulo>
         <transaccion>596</transaccion>
         <relacion>2</relacion>
         <identificador>24190803</identificador>
         <referenciaGenerada>BGNBPYPX30052561200024217125</referenciaGenerada>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>433583254</Numero>
            <Servicio>BTSPIDevoluciones.RespuestaSolicitudRetorno</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2025-05-30</Fecha>
            <Hora>17:00:53</Hora>
            <Canal>BTINTERNO</Canal>
         </Btoutreq>
      </BTSPIDevoluciones.RespuestaSolicitudRetornoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->