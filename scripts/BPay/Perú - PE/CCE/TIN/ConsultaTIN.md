---
title: Consultar
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
::: note Método para consulta de cuenta (AV1), devolución comisión e impuesto.

**Nombre publicación:** BTCCETIN.ConsultaTIN

**Programa:** RBTPG589

**Global/País:** Perú

**Información:** Este método permite iniciar el flujo de una transferencia inmediata por interoperabilidad en Perú, enviando un mensaje tipo AV1 a la Cámara de Compensación Electrónica (CCE). Al ser invocado, realiza las siguientes validaciones y acciones:
Verifica la identidad del ordenante y la validez de sus datos.
Controla que la cuenta del ordenante se encuentre habilitada para operar.
Valida que el saldo disponible sea suficiente para cubrir el importe de la transferencia.
Realiza una simulación de impuestos y comisiones asociadas a la operación.
Envía la solicitud a la CCE mediante un mensaje AV1, con el objetivo de consultar la cuenta del beneficiario en la entidad receptora.
Recibe la validación del beneficiario por parte de la entidad destino, permitiendo avanzar al siguiente paso del flujo de la transferencia.
Este método no ejecuta la transferencia en sí, sino que representa el primer paso del flujo de interoperabilidad, asegurando que las condiciones estén dadas para realizar la operación.
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatorio | Comentarios
:--------- | :--------- | :--------- | :---------
Canal   			| Int 		| S	| 15 - Web, 91 - BancaMovil, 51 - Net.
idCamara 			| Int 		| S	| Codigo de camara (MPE005)
OperacionUId		| Int 		| S	| id producto de ahorro.
Moneda 				| Int 		| S	| 1 - soles, 2 - dolares.
Importe				| Double	| S	| Importe.
CodigoTransaccion	| Int 		| S	| 320 - Transferencias ordinarias, 325 - Pagos a cuenta tarjeta.
BancoDestino		| Int		| S	| Banco Destino.
SucursalDestino		| Int	 	| N	| Sucursal Destino (solo si es 325).
CCIBeneficiario		| String 	| N	| CCI de recepcion de fondos.
nroCelular 			| String 	| N	| Interoperabilidad.
Directorio 			| Int 		| N	| Interoperabilidad.
CodigoQR 			| String 	| N	| Interoperabilidad.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
TipoDocBenef 			| Int 	 | Tipo de documento.
DocumentoBeneficiario 	| String | Documento Beneficiario.
NombreBenef 			| String | Nombre Beneficiario.
DireccionBenef 			| String | Direccion Beneficiario.
TelefonoBeneficiario 	| String | Telefono.
IDTransferencia 		| Int 	 | InstruccionID.
ITF 					| Int 	 | Impuesto.
ComisionOriginante 		| Int 	 | Comision Banco.
ComisionBeneficiario 	| Int 	 | Comision intebancario.
IDL 					| Int 	 | Id bandeja BT.
Erroresnegocio 			| Int 	 | ErrorNegocio.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió Canal.
30002 | No se recibió Id Camara.
30003 | No se recibió operación UID.
30004 | No se recibió el importe.
30005 | No se recibió el código de transacción.
30006 | No se recibió el banco destino.
30007 | No se recibió sucursal destino, si es 325.
30010 | No se recupero el identificador para la operación recibida.
30011 | No existe el código de transacción para la cámara seleccionada.
30012 | La cámara no permite operaciones en moneda nacional.
30013 | La cámara no permite operaciones en moneda extranjera.
30015 | Importe no válido, el importe debe ser mayor a cero.
30016 | El banco destino no es válido para la Cámara recibida.
30018 | Error, CCI Beneficiario no corresponde al Banco Destino.
30019 | Error, CCI Beneficiario no es correcto. + CCIBeneficiario.
30021 | La cuenta seleccionada no tiene saldo suficiente para la transacción.
30024 | La cuenta seleccionada no coincide con la moneda seleccionada de la operación.

@tab Diagrama de Flujo

![](/assets/image/Diagramas_Flujo/BTCCETIN.ConsultaTIN.png)
::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab Tarjeta
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
    <soapenv:Header />
    <soapenv:Body>        
		<bts:BTCCETIN.ConsultaTIN>
			<bts:Btinreq>
				<bts:Canal>BTDIGITAL</bts:Canal>
				<bts:Usuario>INSTALADOR</bts:Usuario>
				<bts:Device>1</bts:Device>
				<bts:Requerimiento>1</bts:Requerimiento>
				<bts:Token>94CC69812C4DB70C55177749</bts:Token>
			</bts:Btinreq>
			<bts:Canal>91</bts:Canal>
			<bts:IDCamara>2</bts:IDCamara>
			<bts:OperacionUID>379</bts:OperacionUID>
			<bts:Moneda>2</bts:Moneda>
			<bts:Importe>1030</bts:Importe>
			<bts:CodigoTransaccion>325</bts:CodigoTransaccion>
			<bts:BancoDestino>38</bts:BancoDestino>
			<bts:SucursalDestino>100</bts:SucursalDestino>
			<bts:Tarjeta>4916069900012386</bts:Tarjeta>   	
			<bts:CCIBeneficiario></bts:CCIBeneficiario>
			<bts:NroCelular/>
			<bts:Directorio/>
			<bts:CodigoQr/>
		</bts:BTCCETIN.ConsultaTIN>
    </soapenv:Body>
</soapenv:Envelope>
```

@tab CCI
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
    <soapenv:Header />
    <soapenv:Body>        
		<bts:BTCCETIN.ConsultaTIN>
			<bts:Btinreq>
				<bts:Canal>BTDIGITAL</bts:Canal>
				<bts:Usuario>INSTALADOR</bts:Usuario>
				<bts:Device>1</bts:Device>
				<bts:Requerimiento>1</bts:Requerimiento>
				<bts:Token>94CC69812C4DB70C55177749</bts:Token>
			</bts:Btinreq>
			<bts:Canal>91</bts:Canal>
			<bts:IDCamara>2</bts:IDCamara>
			<bts:OperacionUID>6935</bts:OperacionUID>
			<bts:Moneda>1</bts:Moneda>
			<bts:Importe>1030</bts:Importe>
			<bts:CodigoTransaccion>320</bts:CodigoTransaccion>
			<bts:BancoDestino>49</bts:BancoDestino>
			<bts:SucursalDestino></bts:SucursalDestino>
			<bts:Tarjeta></bts:Tarjeta>   	
			<bts:CCIBeneficiario>04955700601816547120</bts:CCIBeneficiario>
			<bts:NroCelular/>
			<bts:Directorio/>
			<bts:CodigoQr/>
		</bts:BTCCETIN.ConsultaTIN>
    </soapenv:Body>
</soapenv:Envelope>
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab Tarjeta
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
		<BTCCETIN.ConsultaTINResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
			<Btinreq>
				<Canal>BTDIGITAL</Canal>
				<Usuario>INSTALADOR</Usuario>
				<Device>1</Device>
				<Requerimiento>1</Requerimiento>
				<Token>1BC64FA67023F2B3ACAA1F52</Token>
			</Btinreq>
			<TipoDocBenef>0</TipoDocBenef>
			<DocumentoBeneficiario/>
			<NombreBenef>ANG REN LOZ</NombreBenef>
			<DireccionBenef/>
			<TelefonoBeneficiario>0</TelefonoBeneficiario>
			<MovilBenef>0</MovilBenef>
			<MismoTitular>O</MismoTitular>
			<IDTransferencia>2025042813510208028191000594</IDTransferencia>
			<ITF>0.0</ITF>
			<ComisionOriginante>0.7</ComisionOriginante>
			<ComisionBeneficiario>0.3</ComisionBeneficiario>
			<IDL>0</IDL>
			<CodRespuesta/>
			<DscRespuesta/>
			<Erroresnegocio/>				
			<Btoutreq>
				<Estado>NEG_ERROR</Estado>
				<Fecha>2025-04-28</Fecha>
				<Hora>13:51:02</Hora>
				<Numero>6137808</Numero>
				<Servicio>BTCCETIN.ConsultaTIN</Servicio>
				<Requerimiento>1</Requerimiento>
				<Canal>BTDIGITAL</Canal>
			</Btoutreq>
		</BTCCETIN.ConsultaTINResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
@tab CCI
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
		<BTCCETIN.ConsultaTINResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
			<Btinreq>
				<Canal>BTDIGITAL</Canal>
				<Usuario>INSTALADOR</Usuario>
				<Device>1</Device>
				<Requerimiento>1</Requerimiento>
				<Token>1BC64FA67023F2B3ACAA1F52</Token>
			</Btinreq>
			 <TipoDocBenef>0</TipoDocBenef>
			 <DocumentoBeneficiario/>
			 <NombreBenef>JUAN AYAY GONZALES</NombreBenef>
			 <DireccionBenef/>
			 <TelefonoBeneficiario>0</TelefonoBeneficiario>
			 <MovilBenef>0</MovilBenef>
			 <MismoTitular>O</MismoTitular>
			 <IDTransferencia>2025042814041008028191000595</IDTransferencia>
			 <ITF>0.05</ITF>
			 <ComisionOriginante>3.0</ComisionOriginante>
			 <ComisionBeneficiario>7.0</ComisionBeneficiario>
			 <IDL>26589</IDL>
			 <CodRespuesta/>
			 <DscRespuesta/>
			 <Erroresnegocio/>					
			<Btoutreq>
				<Estado>NEG_ERROR</Estado>
				<Fecha>2025-04-28</Fecha>
				<Hora>13:51:02</Hora>
				<Numero>6137808</Numero>
				<Servicio>BTCCETIN.ConsultaTIN</Servicio>
				<Requerimiento>1</Requerimiento>
				<Canal>BTDIGITAL</Canal>
			</Btoutreq>
		</BTCCETIN.ConsultaTINResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

