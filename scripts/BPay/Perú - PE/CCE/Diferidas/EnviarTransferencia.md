---
title: Enviar Transferencia
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
::: note Método para enviar transferencia.

**Nombre publicación:** BTCCE.EnviarTransferencia

**Programa:** RBTPPE300

**Global/País:** Perú
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatorio | Comentarios
:--------- | :--------- | :--------- | :---------
Canal 				| String 	| S	| Canal IB, APP
NombreTitular 		| String 	| S	| Nombre titular
MismoTitular 		| String 	| S	| M / O
Modo 				| String 	| S	| S - Simular, C - Confirmacion
CuentaOrigen 		| String 	| S	| Cuenta origen
MdaMovimiento 		| Int 		| S	| 1 Soles, 2 Dolares
ImpMovimiento 		| Double 	| S	| Importe transferencia
TpoDocBeneficiario 	| Int 		| S	| Tipo documento
NroDocBeneficiario 	| String 	| S	| Nro documento
NombreBeneficiario 	| String 	| S	| Nombre destinatario
BancoDestino 		| Int 		| S	| Codigo banco destino
CCIDestino 			| String 	| S	| Cuenta destino
Concepto 			| String 	| S	| Referencia de la transferencia
TipoTranferencia	| Int 		| S	| 220, 222, 225...


@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
ITF 			| Double		| Impuesto.
ComisionOrigen 	| Double		| Comision Entidad.
ComisionDestino | Double		| Comision Interbancaria.
IdMovimiento 	| Double		| Movimiento UID.
ErrorNegocio 	| ErrorNegocio	| Coleccion de error.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió Canal.
30002 | No se recibió Id Camara.
30003 | No se recibió operación UID.
30004 | No se recibió el importe.
30005 | No se recibió el código de transacción.
30006 | No se recibió el ID transferencia.
30007 | No se recibió el IDL de la transferencia.

::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab Alta
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
	<soapenv:Header/>
	<soapenv:Body>
      <bts:BTCCE.EnvioDeTransferencia>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>29749514EBC672B9896D96EA</bts:Token>
         </bts:Btinreq>
         <bts:Canal>IB</bts:Canal>
         <bts:TipoTransferencia>220</bts:TipoTransferencia>
         <bts:NombreTitular>CLAUDIA BELEN</bts:NombreTitular>
         <bts:MismoTitular>0</bts:MismoTitular>
         <bts:Modo>T</bts:Modo>
         <bts:NumeroCuentaOrigen>00118780400002</bts:NumeroCuentaOrigen>
         <bts:MonedaMovimiento>1</bts:MonedaMovimiento>
         <bts:ImporteMovimiento>20</bts:ImporteMovimiento>
         <bts:TipoDocumento>1</bts:TipoDocumento>
         <bts:NumeroDocumento>4447949</bts:NumeroDocumento>
         <bts:NombreBeneficiario>JonaBernet</bts:NombreBeneficiario>
         <bts:BancoDestino>2</bts:BancoDestino>
         <bts:CCIDestino>00221511570144303928</bts:CCIDestino>
         <bts:Concepto>Prueba Demo</bts:Concepto>
      </bts:BTCCE.EnvioDeTransferencia>
	</soapenv:Body>
</soapenv:Envelope>
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab Alta
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<SOAP-ENV:Body>
		<BTCCE.EnvioDeTransferenciaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>BANTOTAL</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>8234EA193DE7251CBF9B7E1A</Token>
         </Btinreq>
         <ITF>0.0</ITF>
         <ComOri>3.0</ComOri>
         <ComDes>7.0</ComDes>
         <MovUId>246981</MovUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2025-05-29</Fecha>
            <Hora>13:52:23</Hora>
            <Numero>7468325</Numero>
            <Servicio>BTCCE.EnvioDeTransferencia</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCCE.EnvioDeTransferenciaResponse>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->