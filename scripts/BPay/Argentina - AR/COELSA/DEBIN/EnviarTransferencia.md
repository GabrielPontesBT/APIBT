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
::: note Método para enviar transferencias.

**Nombre publicación:** BTCOELSAGestionDebin.EnviarTransferencia

**Programa:** RBTPAR48

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
EnviarTransferenciaIN | [sBTEnviarTransferencia](#sbtenviartransferencia) | Datos de entrada para envío de transferencia.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
EnviarTransferenciaOut | [sBTTransferenciaEnviada](#sbttransferenciaenviada) | Datos de respuesta al enviar transferencia.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió identificador de operación ni CBU.
30002 | No se recibió cantidad de cheques.
::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header />
   <soapenv:Body>
      <bts:BTCOELSAGestionDebin.EnviarTransferencia>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>IVRISSO</bts:Usuario>
            <bts:Device>10.12.10.40</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>0a8ca681b3464D4650046918</bts:Token>
         </bts:Btinreq>
         <bts:EnviarTransferenciaIN>
            <bts:SucursalDebito>0099</bts:SucursalDebito>
            <bts:Plataforma></bts:Plataforma>
            <bts:IMSI></bts:IMSI>
            <bts:BancoCredito>432</bts:BancoCredito>
            <bts:tipoPersonaCredito></bts:tipoPersonaCredito>
            <bts:Longitud>0</bts:Longitud>
            <bts:TipoProductoCredito>10</bts:TipoProductoCredito>
            <bts:IMEI></bts:IMEI>
            <bts:ImporteOperacion>101.00</bts:ImporteOperacion>
            <bts:MonedaOperacion>032</bts:MonedaOperacion>
            <bts:CBUDebito>0940099366000013940012</bts:CBUDebito>
            <bts:TitularCredito>COOP DE V C C Y SS PALMARES LT</bts:TitularCredito>
            <bts:TitularDebito>OJEDA FELIX ANGEL</bts:TitularDebito>
            <bts:TipoOperacion>transferencia</bts:TipoOperacion>
            <bts:DescripcionOperacion></bts:DescripcionOperacion>
            <bts:BancoDebito>094</bts:BancoDebito>
            <bts:SucursalCredito>0001</bts:SucursalCredito>
            <bts:CUITDebito>20042039390</bts:CUITDebito>
            <bts:CUITCredito>30694625114</bts:CUITCredito>
            <bts:CBUCredito>4320001010003000470010</bts:CBUCredito>
            <bts:Precision>0</bts:Precision>
            <bts:ConceptoOperacion>CUO</bts:ConceptoOperacion>
            <bts:TipoDispositivo>02</bts:TipoDispositivo>
            <bts:Latitud>0</bts:Latitud>
            <bts:IpCliente>127.0.0.1</bts:IpCliente>
            <AliasOrigen></AliasOrigen>
            <AliasDestino></AliasDestino>
         </bts:EnviarTransferenciaIN>
      </bts:BTCOELSAGestionDebin.EnviarTransferencia>
   </soapenv:Body>
</soapenv:Envelope>
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Body>
        <BTCOELSAGestionDebin.EnviarTransferenciaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
            <Btinreq>
                <Canal>BTDIGITAL</Canal>
                <Usuario>IVRISSO</Usuario>
                <Device>10.12.10.40</Device>
                <Requerimiento>1</Requerimiento>
                <Token>0a8ca681b3464D4650046918</Token>
            </Btinreq>
            <EnviarTransferenciaOut>
                <FechaHoraEjecucion>2024-08-29T16:52:33.0209364-03:00</FechaHoraEjecucion>
                <Transaccion>801</Transaccion>
                <ReglasEvaulacion>1a,3b,9</ReglasEvaulacion>
                <Trx_Origen />
                <NumeroRelacion>1354</NumeroRelacion>
                <FechaHoraNegocio>2024-08-29T00:00:00</FechaHoraNegocio>
                <Terminal_Destino>001098400801135420240829</Terminal_Destino>
                <PuntajeEvaluacion>1</PuntajeEvaluacion>
                <Sucursal>98</Sucursal>
                <DescripcionRespuesta>GARANTIA CORRECTA</DescripcionRespuesta>
                <IdObjeto>X76V4MR2Z5OR8JE9DEZOL1</IdObjeto>
                <CodigoRespuesta>00</CodigoRespuesta>
                <DescripcionEstado>00</DescripcionEstado>
                <Trx_Destino />
                <CodigoEstado>EN CURSO</CodigoEstado>
                <Modulo>400</Modulo>
            </EnviarTransferenciaOut>
            <Erroresnegocio></Erroresnegocio>
            <Btoutreq>
                <Estado>OK</Estado>
                <Fecha>2024-08-29</Fecha>
                <Hora>16:52:19</Hora>
                <Numero>171360692</Numero>
                <Servicio>BilleteraElectronica.EnviarTransferencia</Servicio>
                <Requerimiento>1</Requerimiento>
                <Canal>BTDIGITAL</Canal>
            </Btoutreq>
        </BTCOELSAGestionDebin.EnviarTransferenciaResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTEnviarTransferencia  

### sBTEnviarTransferencia

::: center 
Los campos del tipo de dato estructurado sBTEnviarTransferencia son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
TipoOperacion | String | Tipo de Operación.
ConceptoOperacion | String | Concepto de Operación.
DescripcionOperacion | String | Descripción de Operación.
MonedaOperacion | String | Moneda de Operación. 
ImporteOperacion | Double | Importe Operación. 
CUITCredito | Double | Clave única de identificación tributaria Crédito. 
BancoCredito | String | Banco Crédito. 
SucursalCredito | String | Sucursal Crédito. 
TitularCredito | String | Titular Crédito. 
TipoProductoCredito | Short | Tipo de Producto Crédito. 
tipoPersonaCredito | String | Tipo Persona Crédito. 
CBUCredito | Long | Clave Bancaria Uniforme Crédito. 
CUITDebito | Long | Clave única de identificación tributaria Débito. 
BancoDebito | String | Banco Débito. 
SucursalDebito | String | Sucursal Débito. 
TitularDebito | String | Titular Débito. 
CBUDebito | String | Clave Bancaria Uniforme Débito. 
IpCliente | String | Ip Cliente. 
TipoDispositivo | String | Tipo Dispositivo. 
Plataforma | String | Plataforma. 
IMSI | String | IMSI. 
IMEI | String | IMEI. 
Latitud | Double | Latitud.  
Longitud | Double | Longitud. 
Precision | Double | Precisión. 
AliasOrigen | String | Alias Origen. 
AliasDestino | String | Alias Destino. 
:::

::: details sBTTransferenciaEnviada  

### sBTTransferenciaEnviada

::: center 
Los campos del tipo de dato estructurado sBTTransferenciaEnviada son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
FechaHoraEjecucion | String	| Fecha Hora Ejecución.
Transaccion | Int | Transacción.
ReglasEvaulacion | String | Reglas de Evaluación.
Trx_Origen | String | Trx Origen.
NumeroRelacion | Int | Numero de Relación.
Terminal_Destino | String | Terminal Destino.
FechaHoraNegocio | String | Fecha Hora Negocio.
PuntajeEvaluacion | Short | Puntaje Evaluación.
Sucursal | Int | Sucursal.
DescripcionRespuesta | String | Descripción Respuesta.
CodigoRespuesta | String | Codigo de Respuesta.
IdObjeto | String | Id Objeto.
DescripcionEstado | String | Descripción Estado.
Trx_Destino | String | Trx Destino.
CodigoEstado | String | Código de estado.
Modulo | Int | Módulo.
:::
<!-- CIERRA SDT -->