---
title: Listado de Bancos ACH
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
::: note Método para obtener el listado de bancos.

**Nombre publicación:** BTTransferenciasACH.ListaBancos

**Programa:** RBTPG458

**Global/País:** Colombia
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre      | Tipo          | Obligatorio | Comentarios
:--------- | :---------   | :---------    | :---------
Camara	   | Byte          | S	            | Id cámara.

@tab Datos de Salida

Nombre         | Tipo            | Comentarios
:---------    | :---------   | :---------
ListaBancos    | [SdtsbtListaBanco](#sdtsbtlistabanco)| Devuelve el listado de los bancos con sus códigos.

@tab Errores

Código | Descripción
:--------- | :---------
1 | No se encontró ningún registro de Banco.

:::
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab Listado de bancos
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTransferenciasACH.ListaBancos>
         <bts:Btinreq>
            <bts:Device>ABC</bts:Device>
            <bts:Token>dea5419671CD285A89A23FBE</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:Camara>1</bts:Camara>
      </bts:BTTransferenciasACH.ListaBancos>
   </soapenv:Body>
</soapenv:Envelope>
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab Listado de bancos
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTransferenciasACH.ListaBancosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>ABC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>dea5419671CD285A89A23FBE</Token>
         </Btinreq>
         <ListaBancos>
            <SdtsbtListaBanco>
               <CodBco>1001</CodBco>
               <NomBaco>BANCO DE BOGOTÁ</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1002</CodBco>
               <NomBaco>BANCO POPULAR</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1006</CodBco>
               <NomBaco>ITAÚ CORPBANCA COLOMBIA S.A.</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1007</CodBco>
               <NomBaco>BANCOLOMBIA S.A.</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1009</CodBco>
               <NomBaco>CITIBANK COLOMBIA</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1012</CodBco>
               <NomBaco>GNB SUDAMERIS S.A.</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1013</CodBco>
               <NomBaco>BBVA COLOMBIA</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1014</CodBco>
               <NomBaco>ITAU (HELM BANK)</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1019</CodBco>
               <NomBaco>SCOTIABANK COLPATRIA</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1023</CodBco>
               <NomBaco>BANCO DE OCCIDENTE</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1031</CodBco>
               <NomBaco>BANCOLDEX</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1032</CodBco>
               <NomBaco>BANCO CAJA SOCIAL - BCSC S.A.</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1040</CodBco>
               <NomBaco>BANCO AGRARIO DE COLOMBIA S.A.</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1047</CodBco>
               <NomBaco>BANCO MUNDO MUJER S.A</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1051</CodBco>
               <NomBaco>BANCO DAVIVIENDA S.A.</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1052</CodBco>
               <NomBaco>BANCO AV VILLAS</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1053</CodBco>
               <NomBaco>BANCO W S.A.</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1059</CodBco>
               <NomBaco>BANCAMIA</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1060</CodBco>
               <NomBaco>BANCO PICHINCHA S.A.</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1061</CodBco>
               <NomBaco>BANCOOMEVA</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1062</CodBco>
               <NomBaco>CMR FALABELLA S.A.</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1065</CodBco>
               <NomBaco>BANCO SANTANDER</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1066</CodBco>
               <NomBaco>BANCO COOPCENTRAL</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1069</CodBco>
               <NomBaco>BANCO SERFINANZA S.A.</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1070</CodBco>
               <NomBaco>LULO BANK S.A</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1071</CodBco>
               <NomBaco>JP MORGAN</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1292</CodBco>
               <NomBaco>CONFIAR  CF</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1303</CodBco>
               <NomBaco>BANCO UNION</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1303</CodBco>
               <NomBaco>BANCO UNION</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1370</CodBco>
               <NomBaco>COLTEFINANCIERA S.A</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1507</CodBco>
               <NomBaco>NEQUI</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1551</CodBco>
               <NomBaco>DAVIPLATA</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1558</CodBco>
               <NomBaco>BANCO CREDIFIANCIERA S.A.</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1558</CodBco>
               <NomBaco>BAN100 S.A</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1560</CodBco>
               <NomBaco>PIBANK</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1637</CodBco>
               <NomBaco>IRIS- DANN REGIONAL</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1801</CodBco>
               <NomBaco>MOVii</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1802</CodBco>
               <NomBaco>DING TECNIPAGOS SA</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1803</CodBco>
               <NomBaco>POWWI</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1804</CodBco>
               <NomBaco>UALA</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1805</CodBco>
               <NomBaco>BANCO BTG PACTUAL</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1811</CodBco>
               <NomBaco>RAPPIPAY</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1812</CodBco>
               <NomBaco>COINK</NomBaco>
            </SdtsbtListaBanco>
            <SdtsbtListaBanco>
               <CodBco>1819</CodBco>
               <NomBaco>Contactar</NomBaco>
            </SdtsbtListaBanco>
         </ListaBancos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>97390</Numero>
            <Servicio>BTTransferenciasACH.ListaBancos</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2025-05-06</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>10:23:28</Hora>
         </Btoutreq>
      </BTTransferenciasACH.ListaBancosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details SdtsbtListaBanco

### SdtsbtListaBanco

::: center
Los campos del tipo de dato estructurado SdtsbtListaBanco son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
CodBco | Int | Código del banco.
NomBaco | String | Nombre del banco.
:::
<!-- CIERRA SDT -->