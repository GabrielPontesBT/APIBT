---
title: Alta Transferencia ACH
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
::: note Método para dar de alta una transferencia ACH.

**Nombre publicación:** BTTransferenciasACH.TransferenciaACH

**Programa:** PBTPCO300

**Global/País:** Colombia
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre            | Tipo          | Obligatoriedad | Comentarios
:---------       | :---------   | :---------    | :---------
Canal	            | String        | M	            | Canal.
IdCamara	         | Int	          | M              | Id de cámara.
OriPais	         | Short	       | N              | País origen.
OriTDoc	         | Short	       | N              | Tipo documento ordenante.
OriNDoc	         | String	       | N              | Documento ordenante.
OriNombre	      | String	       | N              | Nombre ordenante.
OperacionUId      | Long	       | M              | Operación Uid ordenante (BTSIO00Id).
CuentaOrigen      | String	       | N              | Cuenta ordenante.
BancoDestino      | Short	       | M              | Banco Destino.
BenTDoc           | Short	       | M              | Tipo documento Destino.
BenNDoc           | String	       | M              | Documento Destino.
BenNombre         | String	       | M              | Nombre Destino.
CuentaDestino     | String	       | M              | Cuenta Destino.
Importe           | Double	       | M              | Import.
CodigoServicio    | String	       | M              | Tipo documento Destino.
CodigoTransaccion | Short	       | M              | Documento Destino.
ConceptoOperacion | String	       | M              | Nombre Destino.
Addenda           | String	       | M              | Cuenta Destino.
Simular           | String	       | M              | Import.

@tab Datos de Salida

Nombre         | Tipo            | Comentarios
:---------    | :---------   | :---------
Comision 	   | Double          | Comisión.
Impuesto 	   | Double          | Impuesto.
MPE001IDL 	   | Short           | Identificador de la operación (MPE001IDL).
MovimientoUId 	| Long            | Identificador del movimiento.

@tab Errores

Código         | Mensaje         
:---------    | :---------
1     | No se indicó canal.
2     | No se indicó cámara.
7 	   | No se indicó banco destino.
8 	   | No se indicó Tipo de documento del cliente destino.
9 	   | No se indicó documento del cliente destino.
10 	| No se indicó nombre del cliente destino.
11    | No se indicó cuenta destino.
12    | Importe no puede ser 0.
13    | No se indicó código de servicio.
14    | No se indicó código de transacción.
15    | No se indicó concepto de operación.
16    | No se indicó addenda.
17    | Se debe indicar la cuenta origen o la operación origen.
18    | Error en parametrización del módulo/transacción para el canal.
19    | Error de numerador.
20    | En una pre-notificación el importe no puede ser mayor que 0.
21    | No se encontró cuenta origen

@tab Diagrama de Flujo

![](/assets/image/Diagramas_Flujo/BTTransferenciasACH.TransferenciaACH.png)

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