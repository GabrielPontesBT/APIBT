---
title: Confirmar Transferencia
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
::: note Método para confirmación de abono (CT1), débito a cuenta.

**Nombre publicación:** BTCCETIN.TransferenciaTin

**Programa:** RBTPG590

**Global/País:** Perú
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatoriedad | Comentarios
:--------- | :--------- | :--------- | :---------
Canal   		| Int 		| M	| 15 - Web, 91 - BancaMovil, 51 - Net.
idCamara 		| Int 		| M	| Codigo de camara (MPE005)
OperacionUID	| Int 		| M	| id producto de ahorro.
Moneda 			| Int 		| M	| 1 - soles, 2 - dolares.
Importe			| Double	| M	| Importe.
IDTransferencia	| Int 		| M	| InstruccionID (Resultado AV4).
MPE001IDL		| Int		| M	| Id Bandeja BT.
Celular			| Int	 	| O	| Celular beneficiario.
CodigoQr		| String 	| O	| QR, unstructuredInformation CT1.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
movimientoUID 	| Int 	 | movimiento UID.
codRespuesta 	| String | Codigo error CCE.
dscRespuesta 	| String | Descripcion error.
Erroresnegocio 	| Int 	 | ErrorNegocio.

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

@tab Confirmacion
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
    <soapenv:Header />
    <soapenv:Body>        
		<bts:BTCCETIN.TransferenciaTin>
			<bts:Btinreq>
				<bts:Canal>BTDIGITAL</bts:Canal>
				<bts:Usuario>INSTALADOR</bts:Usuario>
				<bts:Device>1</bts:Device>
				<bts:Requerimiento>1</bts:Requerimiento>
				<bts:Token>A60F0486A686F9C081A582A6</bts:Token>
			</bts:Btinreq>
			<bts:Canal>91</bts:Canal>
			<bts:IDCamara>2</bts:IDCamara>
			<bts:operacionUID>6935</bts:operacionUID>
			<bts:Moneda>1</bts:Moneda>
			<bts:Importe>1030</bts:Importe>
			<bts:IDTransferencia>2025042818142008028191000603</bts:IDTransferencia>
			<bts:MPE001IDL>26596</bts:MPE001IDL>
			<bts:Celular></bts:Celular>
			<bts:IdQr></bts:IdQr>
		</bts:BTCCETIN.TransferenciaTin>
    </soapenv:Body>
</soapenv:Envelope>
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab Confirmacion
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<SOAP-ENV:Body>
		<BTCCETIN.TransferenciaTinResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
			<Btinreq>
				<Canal>BTDIGITAL</Canal>
				<Usuario>INSTALADOR</Usuario>
				<Device>1</Device>
				<Requerimiento>1</Requerimiento>
				<Token>A60F0486A686F9C081A582A6</Token>
			</Btinreq>
			<movimientoUID>1234</movimientoUID>
			<codRespuesta/>
			<dscRespuesta/>				
			<Erroresnegocio/>
			<Btoutreq>
				<Estado>NEG_ERROR</Estado>
				<Fecha>2025-04-28</Fecha>
				<Hora>18:15:42</Hora>
				<Numero>6139047</Numero>
				<Servicio>BTCCETIN.TransferenciaTin</Servicio>
				<Requerimiento>1</Requerimiento>
				<Canal>BTDIGITAL</Canal>
			</Btoutreq>
		</BTCCETIN.TransferenciaTinResponse>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

