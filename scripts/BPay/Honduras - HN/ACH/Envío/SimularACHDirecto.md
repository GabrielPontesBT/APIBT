---
title: Simular Transferencia Directa
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
::: note Método para simular de transferencia ACH directa.

**Nombre publicación:** BTTransferenciasACH.SimularACH

**Programa:** RBPHO05

**Global/País:** Honduras
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatorio | Comentarios
:--------- | :--------- | :--------- | :---------
Canal   		    | String    | S	|
BancoDestino 	    | Int 		| S	| Código de banco destino.
OperacionUId	    | Long 		| S	| id producto de ahorro.
CuentaDestino 	    | Int 		| S	| Número de cuenta destino.
TipoCuentaDestino	| Double	| S	| Tipo de cuenta destino (1 o 2).
NombreDestino	    | String 	| S	| Nombre beneficiario.
DocBeneficiario		| String	| S	| Nro. Documento Beneficiario.
Direccion			| String 	| S	| Dirección.
Comentario		    | String 	| S	| Comentario.
Moneda              | Short     |   | 1. Lempira 2. Dólar
Importe             | Double    | S | Importe de la operación.
Email               | String    | S | Correo electrónico.
Telefono            | String    | S | Nro. de teléfono.
ClaveValor          | Collection| S | No se utiliza actualmente.
TipoTransferencia   | Int       | S | Tipo de transferencia

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
IdTransferencia | Int 	 | Id de la transferencia (PAYD01ID).
Comision 	| Double | Comisión.
Impuesto 	| Double | Impuesto.
Erroresnegocio 	| Collection 	 | ErrorNegocio.

@tab Errores

Código | Descripción
:--------- | :---------
1 | No se recibió Canal.
1 | No se recibió Banco destino.
1 | No se recibió operación UID.
1 | No se recibió cuenta destino.
1 | No se recibió el tipo de cuenta destino.
1 | No se recibió Nombre del beneficiario.
1 | No se recibió documento del beneficiario.
1 | No se recibió dirección destino.
1 | No se recibió Comentario.
1 | No se recibió Moneda de la operación.
1 | No se recibió importe.
1 | No se recibió Email.
1 | No se recibió Teléfono.

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
      <bts:BTTransferenciasACH.SimularACH>
         <bts:BTTransferenciasACH.RecibirACH>
         <bts:Btinreq>
            <bts:Canal>BTINTERNO</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>088459081EF05E4F9E3B2B7A</bts:Token>
         </bts:Btinreq>
         <bts:Canal>BTDIGITAL</bts:Canal>
         <bts:BancoDestino>17</bts:BancoDestino>
         <bts:OperacionUId>49</bts:OperacionUId>
         <bts:CuentaDestino>0516440</bts:CuentaDestino>
         <bts:TipoCuentaDestino>1</bts:TipoCuentaDestino>
         <bts:NombreDestino>Agustin Meriles</bts:NombreDestino>
         <bts:DocBeneficiario>122112121</bts:DocBeneficiario>
         <bts:Direccion>Ruta 8 Zona America</bts:Direccion>
         <bts:Comentario>Matriz 2.32</bts:Comentario>
         <bts:Moneda>1</bts:Moneda>
         <bts:Importe>120000</bts:Importe>
         <bts:Email>agustin@gmail.com</bts:Email>
         <bts:Telefono>098383282</bts:Telefono>
         <bts:ClaveValor>
            <bts:SdtRngParm_it>
               <bts:Nombre></bts:Nombre>
               <bts:Valor></bts:Valor>
            </bts:SdtRngParm_it>
         </bts:ClaveValor>
         <bts:TipoTransferencia>1</bts:TipoTransferencia>
      </bts:BTTransferenciasACH.SimularACH>
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
      <BTTransferenciasACH.SimularACHResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTINTERNO</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>088459081EF05E4F9E3B2B7A</Token>
         </Btinreq>
         <IdTransferencia>131</IdTransferencia>
         <Comision>0.0</Comision>
         <Impuesto>0.0</Impuesto>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2025-05-02</Fecha>
            <Hora>14:46:23</Hora>
            <Numero>2244</Numero>
            <Servicio>BTTransferenciasACH.SimularACH</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTINTERNO</Canal>
         </Btoutreq>
      </BTTransferenciasACH.SimularACHResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->