---
title: Solicitar Transferencia
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
::: note Método para solicitar transferencia LBTR.

**Nombre publicación:** BTTransferenciasLBTR.Solicitar

**Programa:** RBPHO19

**Global/País:** Honduras
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatoriedad | Comentarios
:--------- | :--------- | :--------- | :---------
Canal   		    | String    | M	|
BancoDestino 	    | Int 		| M	| Código de banco destino.
OperacionUId	    | Long 		| M	| id producto de ahorro.
CuentaDestino 	    | Int 		| M	| Número de cuenta destino.
TipoCuentaDestino	| Double	| M	| Tipo de cuenta destino (1 o 2).
NombreDestino	    | String 	| M	| Nombre beneficiario.
TipoDocumento		| Short	    | M	| Tipo Documento Beneficiario.
DocBeneficiario		| String	| M	| Nro. Documento Beneficiario.
Comentario		    | String 	| M	| Comentario.
Moneda              | Short     |   | 1. Lempira 2. Dólar
Importe             | Double    | M | Importe de la operación.
Email               | String    | M | Correo electrónico.
Direccion			| String 	| M	| Dirección.
Telefono            | String    | M | Nro. de teléfono.
CodigoProposito     | Short     | M | Código de propósito.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
IdTransferencia | Int 	     | Id de la transferencia (PAYD01ID).
Comision 	    | Double     | Comisión.
Impuesto 	    | Double     | Impuesto.

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
1 | No se recibió tipo de documento del beneficiario.
1 | No se recibió código de propósito.

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
      <bts:BTTransferenciasLBTR.Solicitar>
         <bts:Btinreq>
            <bts:Canal>BTINTERNO</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>088459081EF05E4F9E3B2B7A</bts:Token>
         </bts:Btinreq>
         <bts:Canal>BTINTERNO</bts:Canal>
         <bts:BancoDestino>17</bts:BancoDestino>
         <bts:OperacionUId>49</bts:OperacionUId>
         <bts:CuentaDestino>12312121</bts:CuentaDestino>
         <bts:TipoCuentaDestino>1</bts:TipoCuentaDestino>
         <bts:NombreDestino>Agustin Meriles</bts:NombreDestino>
         <bts:TipoDocumento>1</bts:TipoDocumento>
         <bts:DocBeneficiario>54344435</bts:DocBeneficiario>
         <bts:Comentario>Matriz 1</bts:Comentario>
         <bts:Moneda>1</bts:Moneda>
         <bts:Importe>10000</bts:Importe>
         <bts:Email>aaaa@hotmail.com</bts:Email>
         <bts:Direccion>Barra del Chuy</bts:Direccion>
         <bts:Telefono>096097999</bts:Telefono>
         <bts:CodigoProposito>122</bts:CodigoProposito>
      </bts:BTTransferenciasLBTR.Solicitar>
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
      <BTTransferenciasLBTR.SolicitarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTINTERNO</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>088459081EF05E4F9E3B2B7A</Token>
         </Btinreq>
         <IdTransferencia>130</IdTransferencia>
         <Comision>0.0</Comision>
         <Impuesto>0.0</Impuesto>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2025-05-02</Fecha>
            <Hora>14:37:03</Hora>
            <Numero>2242</Numero>
            <Servicio>BTTransferenciasLBTR.Solicitar</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTINTERNO</Canal>
         </Btoutreq>
      </BTTransferenciasLBTR.SolicitarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->