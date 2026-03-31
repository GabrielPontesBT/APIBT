---
title: Solicitud de Retorno de Fondos
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
::: note Método para el envío de una solicitud de retorno de fondos.

**Nombre publicación:** BTSPIDevoluciones.SolicitudRetornoFondos

**Programa:** RBTPPY011

**Global/País:** Paraguay
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatoriedad | Comentarios
:--------- | :--------- | :--------- | :---------
Canal	         | String | M | Canal de envío.
referencia	   | String | M | Referencia de la transferencia original.
importe	      | Double	| M | Importe.
razonCodigo	   | String | M | Código de devolución.


@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
identificador         | int       | Id de la bandeja de transferencias (MPE001).
referenciaGenerada    | String    | Referencia del mensaje de devolución.

@tab Errores

Código | Descripción
:--------- | :---------
0     | OK.
10000 | No se ingreso canal.
10001 | No se ingreso Id de mensaje.
10002 | No se ingreso importe.
10003 | No se ingreso código.
10006 | No fue posible encontrar mensaje en MPEPYR {MPEPYNID}.
10007 | No se encontró registro en MPE001 ({ReferenciaOriginal}).
10008 | Estado de transferencia no permite solicitar devolución.
10009 | Fecha de transferencia no permite solicitar devolución.
10010 | Error al enviar {DescripciónDelError}.
10011 | Importe ingresado es mayor al originado: {ImporteOriginal}.
10012 | La referencia no coincide con el mensaje original.
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
      <bts:BTSPIDevoluciones.SolicitudRetornoFondos>
         <bts:Btinreq>
            <bts:Device>ABC</bts:Device>
            <bts:Usuario>BANTOTAL1</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTINTERNO</bts:Canal>
            <bts:Token>072C85F2036D7EBE3EC09EB5</bts:Token>
         </bts:Btinreq>
         <bts:canal>WEB</bts:canal>
         <bts:referencia>BGNBPYPX27052537200024217053</bts:referencia>
         <bts:importe>1300</bts:importe>
         <bts:razonCodigo>AC03</bts:razonCodigo>
      </bts:BTSPIDevoluciones.SolicitudRetornoFondos>
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
      <BTSPIDevoluciones.SolicitudRetornoFondosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>ABC</Device>
            <Usuario>BANTOTAL1</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTINTERNO</Canal>
            <Token>072C85F2036D7EBE3EC09EB5</Token>
         </Btinreq>
         <identificador>24191140</identificador>
         <referenciaGenerada>BGNBPYPX30052560000024217118</referenciaGenerada>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>433583056</Numero>
            <Servicio>BTSPIDevoluciones.SolicitudRetornoFondos</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2025-05-30</Fecha>
            <Hora>16:40:28</Hora>
            <Canal>BTINTERNO</Canal>
         </Btoutreq>
      </BTSPIDevoluciones.SolicitudRetornoFondosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->