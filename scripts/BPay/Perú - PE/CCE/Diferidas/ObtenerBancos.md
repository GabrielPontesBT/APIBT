---
title: Lista Entidades
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
::: note Método para listar bancos habilitados para recepcion de creditos.

**Nombre publicación:** BTCCE.ObtenerBancos

**Programa:** RBTPPE284

**Global/País:** Perú
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatoriedad | Comentarios
:--------- | :--------- | :--------- | :---------
idCamara 		| Int 		| M	| Codigo de camara (MPE005)

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
movimientoUId 	| [sBTListaBancox](#sbtlistabancox)	| Lista Bancos.

@tab Errores

Código | Descripción
:--------- | :---------
30002 | No se recibió Id Camara.

::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab Lista
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
	<soapenv:Header/>
	<soapenv:Body>
		<bts:BTCCE.ObtenerBancos>
			<bts:Btinreq>
				<bts:Canal>BTDIGITAL</bts:Canal>
				<bts:Usuario>INSTALADOR</bts:Usuario>
				<bts:Device>1</bts:Device>
				<bts:Requerimiento>1</bts:Requerimiento>
				<bts:Token>A60F0486A686F9C081A582A6</bts:Token>
			</bts:Btinreq>
			<bts:IDCamara>1</bts:IDCamara>
		</bts:BTCCE.ObtenerBancos>
	</soapenv:Body>
</soapenv:Envelope>
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab Lista
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<SOAP-ENV:Body>
		<BTCCE.ObtenerBancosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
			<Btinreq>
				<Canal>BTDIGITAL</Canal>
				<Usuario>INSTALADOR</Usuario>
				<Device>1</Device>
				<Requerimiento>1</Requerimiento>
				<Token>A60F0486A686F9C081A582A6</Token>
			</Btinreq>
			<ListaBancos>
				<Lista>
					<SdtsbtListaBancox>
						<CodBco>1</CodBco>
						<NomBaco>Banco Central de Reserva Peru</NomBaco>
					</SdtsbtListaBancox>
					<SdtsbtListaBancox>
						<CodBco>2</CodBco>
						<NomBaco>Banco de Crédito del Perú</NomBaco>
					</SdtsbtListaBancox>
					<SdtsbtListaBancox>
						<CodBco>3</CodBco>
						<NomBaco>Interbank</NomBaco>
					</SdtsbtListaBancox>
					<SdtsbtListaBancox>
						<CodBco>7</CodBco>
						<NomBaco>Citibank del Perú S.A.</NomBaco>
					</SdtsbtListaBancox>
					<SdtsbtListaBancox>
						<CodBco>9</CodBco>
						<NomBaco>Scotiabank Perú S.A.A.</NomBaco>
					</SdtsbtListaBancox>
					<SdtsbtListaBancox>
						<CodBco>11</CodBco>
						<NomBaco>BBVA Continental</NomBaco>
					</SdtsbtListaBancox>
				</Lista>
			</ListaBancos>
			<Erroresnegocio/>
			<Btoutreq>
				<Estado>OK</Estado>
				<Fecha>2025-04-29</Fecha>
				<Hora>06:21:19</Hora>
				<Numero>6140610</Numero>
				<Servicio>BTCCE.ObtenerBancos</Servicio>
				<Requerimiento>1</Requerimiento>
				<Canal>BTDIGITAL</Canal>
			</Btoutreq>
		</BTCCE.ObtenerBancosResponse>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTListaBancox  

### sBTListaBancox

::: center 
Los campos del tipo de dato estructurado sBTListaBancox son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
CodBco 	| Int	 | Codigo banco. 
NomBaco | String | Nombre. 
:::
<!-- CIERRA SDT -->
