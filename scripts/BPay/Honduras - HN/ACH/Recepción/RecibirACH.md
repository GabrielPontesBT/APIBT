---
title: Recibir Transferencia
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
::: note Método publicado en EndPoint, para la recepción de transferencias.

**Nombre publicación:** BTTransferenciasACH.RecibirACH

**Programa:** RBPHO16

**Global/País:** Honduras
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatorio | Comentarios
:--------- | :--------- | :--------- | :---------
TransfRecibidaACH | SdtBbpTransRecibidaInACH | S	| Sdt con datos de la transferencia.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
Código   | Short 	 | Código de respuesta.

@tab SdtBbpTransRecibidaInACH

Nombre | Tipo | Obligatorio | Comentarios
:--------- | :--------- | :--------- | :---------
Monto         | Int    | S	| Importe.
NombreBen     | String | S	| Nombre beneficiario.
Transaccion   | Int    | N	| -
Referencia    | String | N	| Referencia del movimiento.
tipoCuentaBen | Int    | S	| Tipo de cuenta del beneficiario.
cuentaRec     | Int    | S	| Cuenta beneficiario.
Moneda        | Int    | S	| Código de moneda de la operación.
Canal         | Int    | N	| Canal.
TipoCuentaOri | Int    | S	| Tipo de cuenta originante.
IdOrigen      | Int    | S	| Documento originante.
DireccionBen  | String | N	| Dirección del beneficiario.
Cndmgsp       | String | N	| -
NombreOri     | String | S	| Nombre originante.
IdBeneficiario| Int    | S	| Documento beneficiario.
BancoOrigen   | Int    | S	| Código del banco originante.
Bandera       | Char   | N	| -
CuentaOri     | Int    | S	| Cuenta originante.

@tab Errores

Código | Descripción
:--------- | :---------
0   | Transferencia Recibida.
101 | Cuenta inexistente.
102 | Cuenta cerrada.
103 | Cuenta bloqueada.

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
      <bts:BTTransferenciasACH.RecibirACH>
         <bts:Btinreq>
            <bts:Canal>BTINTERNO</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>30</bts:Device>
            <bts:Requerimiento>30</bts:Requerimiento>
            <bts:Token>503442C1EF950B10BD480F95</bts:Token>
         </bts:Btinreq>
         <bts:TransfRecibidaACH>
            <bts:Monto>10000</bts:Monto>
            <bts:NombreBen>BARQUIN RODRIGO</bts:NombreBen>
            <bts:Transaccion></bts:Transaccion>
            <bts:Referencia>Recibir ACH</bts:Referencia>
            <bts:tipoCuentaBen>21</bts:tipoCuentaBen>
            <bts:cuentaRec>21000109676006</bts:cuentaRec>
            <bts:Moneda>1</bts:Moneda>
            <bts:Canal>1</bts:Canal>
            <bts:TipoCuentaOri>1</bts:TipoCuentaOri>
            <bts:IdOrigen>1232112111111</bts:IdOrigen>
            <bts:DireccionBen>Zona</bts:DireccionBen>
            <bts:Cndmgsp></bts:Cndmgsp>
            <bts:NombreOri>Agustin Meriles</bts:NombreOri>
            <bts:IdBeneficiario>5478851500000</bts:IdBeneficiario>
            <bts:BancoOrigen>17</bts:BancoOrigen>
            <bts:Bandera></bts:Bandera>
            <bts:CuentaOri>1214</bts:CuentaOri>
         </bts:TransfRecibidaACH>
      </bts:BTTransferenciasACH.RecibirACH>
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
      <BTTransferenciasACH.RecibirACHResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTINTERNO</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>30</Device>
            <Requerimiento>30</Requerimiento>
            <Token>503442C1EF950B10BD480F95</Token>
         </Btinreq>
         <Codigo>0</Codigo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2025-05-30</Fecha>
            <Hora>08:23:52</Hora>
            <Numero>6687</Numero>
            <Servicio>BTTransferenciasACH.RecibirACH</Servicio>
            <Requerimiento>30</Requerimiento>
            <Canal>BTINTERNO</Canal>
         </Btoutreq>
      </BTTransferenciasACH.RecibirACHResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->