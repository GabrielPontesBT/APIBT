---
title: Enviar Transferencia Indirecta
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
::: note Método para el envío de ACH indirectos.

**Nombre publicación:** BTTransferenciasACH.EnviarAchIndirecto

**Programa:** RBPHO33

**Global/País:** Honduras
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatoriedad | Comentarios
:--------- | :--------- | :--------- | :---------
Canal   		    | String    | M	|
IdClienteIndirecto  | Long      | M | Código de banco cliente indirecto.
BancoDestino 	    | Int 		| M	| Código de banco destino.
NroCuentaDestino 	| Int 		| M	| Número de cuenta destino.
TipoCuentaDestino	| Double	| M	| Tipo de cuenta destino (1 o 2).
IdentidadDestino	| String	| M	| Nro. Documento Beneficiario.
NombreDestino	    | String 	| M	| Nombre beneficiario.
Direccion			| String 	| M	| Dirección.
Comentario		    | String 	| M	| Comentario.
Moneda              | Short     |   | 1. Lempira 2. Dólar
Importe             | Double    | M | Importe de la operación.
CorreoElectronico   | String    | M | Correo electrónico.
NroTelefono            | String    | M | Nro. de teléfono.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
ComisionCobrada     | Double    | Comisión del movimiento.
Impuesto            | Double    | Impuesto.
IdTransferencia     | Int    | Identificador de la transferencia (PAYD01id).

@tab Errores

Código | Descripción
:--------- | :---------
1 | No se recibió Canal.
1 | No se recibió Id de cliente Indirecto.
1 | No se recibió Banco destino.
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
      <bts:BTTransferenciasACH.EnviarAchIndirecto>
         <bts:Btinreq>
            <bts:Canal>BTINTERNO</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>088459081EF05E4F9E3B2B7A</bts:Token>
         </bts:Btinreq>
         <bts:Canal>BTDIGITAL</bts:Canal>
         <bts:IdClienteIndirecto>81</bts:IdClienteIndirecto>
         <bts:BancoDestino>6</bts:BancoDestino>
         <bts:NroCuentaDestino>543674</bts:NroCuentaDestino>
         <bts:TipoCuentaDestino>1</bts:TipoCuentaDestino>
         <bts:IdentidadDestino>1233223</bts:IdentidadDestino>
         <bts:NombreDestino>Agustin Meriles</bts:NombreDestino>
         <bts:Direccion>Av Italia 5566</bts:Direccion>
         <bts:Comentario>Matriz 1</bts:Comentario>
         <bts:Moneda>1</bts:Moneda>
         <bts:Importe>150000</bts:Importe>
         <bts:CorreoElectronico>agustin@gmail.com</bts:CorreoElectronico>
         <bts:NroTelefono>54678433</bts:NroTelefono>
      </bts:BTTransferenciasACH.EnviarAchIndirecto>
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
      <BTTransferenciasACH.EnviarAchIndirectoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTINTERNO</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>088459081EF05E4F9E3B2B7A</Token>
         </Btinreq>
         <ComisionCobrada>0.0</ComisionCobrada>
         <IdTransferencia>129</IdTransferencia>
         <Erroresnegocio>
            <BTErrorNegocio>
               <Codigo>5704</Codigo>
               <Descripcion>Error de timeout al invocar a API enviar ACH Indirectos.</Descripcion>
               <Severidad>E</Severidad>
            </BTErrorNegocio>
         </Erroresnegocio>
         <Btoutreq>
            <Estado>NEG_ERROR</Estado>
            <Fecha>2025-05-02</Fecha>
            <Hora>13:51:42</Hora>
            <Numero>2237</Numero>
            <Servicio>BTTransferenciasACH.EnviarAchIndirecto</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTINTERNO</Canal>
         </Btoutreq>
      </BTTransferenciasACH.EnviarAchIndirectoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->