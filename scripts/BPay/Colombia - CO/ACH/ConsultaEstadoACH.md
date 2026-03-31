---
title: Consultar Estado Transferencia ACH
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
::: note Método para consultar el estado de una transferencia ACH.

**Nombre publicación:** BTTransferenciasACH.ConsultaEstado

**Programa:** PBTPCO0303

**Global/País:** Colombia
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre      | Tipo          | Obligatoriedad | Comentarios
:--------- | :---------   | :---------    | :---------
IdCamara	   | Int           | M	            | Id cámara.
SdtIDLIn    | bbtIdLogPagos | M              | MPE001IDL para consultar estados.

@tab Datos de Salida

Nombre         | Tipo            | Comentarios
:---------    | :---------   | :---------
SdtIDLOut 	   | RngParm         | Devuelve el id del registro y su estado.

@tab Errores

Código | Descripción
:--------- | :---------
220 | BbtIdLogPagos no puede estar vacío.

:::
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab Consultar estado
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTransferenciasACH.ConsultaEstado>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Token>dea5419671CD285A89A23FBE</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>BANTOTAL1</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:IdCamara>1</bts:IdCamara>
         <bts:ListadoIDL>
            <bts:SdtbbtIdLogPagos_bbtIdLogPagosItem>
               <bts:IDL>645</bts:IDL>
            </bts:SdtbbtIdLogPagos_bbtIdLogPagosItem>
         </bts:ListadoIDL>
      </bts:BTTransferenciasACH.ConsultaEstado>
   </soapenv:Body>
</soapenv:Envelope>
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab Consultar estado
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTransferenciasACH.ConsultaEstadoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>BANTOTAL1</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>dea5419671CD285A89A23FBE</Token>
         </Btinreq>
         <Estado>
            <SdtSngParm_it>
               <Nombre>645</Nombre>
               <Valor>NoOK</Valor>
            </SdtSngParm_it>
         </Estado>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>97389</Numero>
            <Servicio>BTTransferenciasACH.ConsultaEstado</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2025-05-06</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>10:22:37</Hora>
         </Btoutreq>
      </BTTransferenciasACH.ConsultaEstadoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->