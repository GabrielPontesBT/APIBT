---
title: Validar Políticas
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
::: note Método para validar las políticas crediticias de una determinada etapa del proceso de otorgamiento de créditos.

**Nombre publicación:** BTMicrofinanzas.ValidarPoliticas

**Programa:** RBTPG417

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
solicitudUId | Long | Identificador de instancia Workflow.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
controlOK | String | Devuelve "N" si existen políticas que no permiten continuar. "S" en caso contrario.
sdtValidacionesPoliticas | [sBTValidacionPoliticas](#sbtvalidacionpoliticas) | Listado de validación de políticas.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de solicitud.
::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.ValidarPoliticas>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1001009404CD285A89A23FBE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:solicitudUId>10972</bts:solicitudUId>
      </bts:BTMicrofinanzas.ValidarPoliticas>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ValidarPoliticas \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
      "Btinreq": {
         "Canal": "BTDIGITAL",
         "Requerimiento": "95",
         "Usuario": "INSTALADOR",
         "Token": "1001009404CD285A89A23FBE",
         "Device": "GP"
      },
      "solicitudUId": "10972"
}'
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
      <BTMicrofinanzas.ValidarPoliticasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1001009404CD285A89A23FBE</Token>
            <Device>GP</Device>
         </Btinreq>
         <politicasOK>N</politicasOK>
         <sdtValidacionesPoliticas>
            <ValidacionPolitica>
               <paisDocumentoId>320</paisDocumentoId>
               <paisDocumento>GUATEMALA</paisDocumento>
               <tipoDocumentoId>1</tipoDocumentoId>
               <tipoDocumento>DPI</tipoDocumento>
               <numeroDocumento>2131248150408</numeroDocumento>
               <nombre>ROQUEL POYON MARÍA</nombre>
               <correlativo>1</correlativo>
               <modeloId>951</modeloId>
               <modeloEvaluacion>Politicas - Solicitud Individual</modeloEvaluacion>
               <relacion>1</relacion>
               <relCorrelativo>0</relCorrelativo>
               <tipoIntegrante>T</tipoIntegrante>
               <tipoIntegranteDsc/>
               <nroEjecucion>394</nroEjecucion>
               <politicas>
                  <SdtsBTPoliticaIncumplida>
                     <politicaId>354</politicaId>
                     <politica>Edad del solicitante es mayor a la máxima permitida.</politica>
                     <restriccion>B</restriccion>
                     <restriccionDsc>Bloqueante</restriccionDsc>
                     <estado/>
                     <estadoDsc/>
                     <nroAutorizacion>0</nroAutorizacion>
                     <observacion/>
                  </SdtsBTPoliticaIncumplida>
                  <SdtsBTPoliticaIncumplida>
                     <politicaId>363</politicaId>
                     <politica>Cliente excede el N° máximo de solicitudes en trámite.</politica>
                     <restriccion>A</restriccion>
                     <restriccionDsc>Alerta</restriccionDsc>
                     <estado/>
                     <estadoDsc/>
                     <nroAutorizacion>0</nroAutorizacion>
                     <observacion/>
                  </SdtsBTPoliticaIncumplida>
                  <SdtsBTPoliticaIncumplida>
                     <politicaId>366</politicaId>
                     <politica>Existen Documentos Obligatorios No Recibidos.</politica>
                     <restriccion>A</restriccion>
                     <restriccionDsc>Alerta</restriccionDsc>
                     <estado/>
                     <estadoDsc/>
                     <nroAutorizacion>0</nroAutorizacion>
                     <observacion/>
                  </SdtsBTPoliticaIncumplida>
               </politicas>
            </ValidacionPolitica>
         </sdtValidacionesPoliticas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ValidarPoliticas</Servicio>
            <Fecha>2019-11-01</Fecha>
            <Hora>13:56:51</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>1400</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ValidarPoliticasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
   "Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "95",
      "Usuario": "INSTALADOR",
      "Token": "1001009404CD285A89A23FBE",
      "Device": "GP"
   },
   "politicasOK": "N",
   "sdtValidacionesPoliticas": {
      "ValidacionPolitica": {
      "paisDocumentoId": "320",
      "paisDocumento": "GUATEMALA",
      "tipoDocumentoId": "1",
      "tipoDocumento": "DPI",
      "numeroDocumento": "2131248150408",
      "nombre": "ROQUEL POYON MARÍA",
      "correlativo": "1",
      "modeloId": "951",
      "modeloEvaluacion": "Politicas - Solicitud Individual",
      "relacion": "1",
      "relCorrelativo": "0",
      "tipoIntegrante": "T",
      "nroEjecucion": "394",
      "politicas": {
         "SdtsBTPoliticaIncumplida": [
            {
            "politicaId": "354",
            "politica": "Edad del solicitante es mayor a la máxima permitida.",
            "restriccion": "B",
            "restriccionDsc": "Bloqueante",
            "nroAutorizacion": "0"
            },
            {
            "politicaId": "363",
            "politica": "Cliente excede el N° máximo de solicitudes en trámite.",
            "restriccion": "A",
            "restriccionDsc": "Alerta",
            "nroAutorizacion": "0"
            },
            {
            "politicaId": "366",
            "politica": "Existen Documentos Obligatorios No Recibidos.",
            "restriccion": "A",
            "restriccionDsc": "Alerta",
            "nroAutorizacion": "0"
            }
         ]
      }
      }
   },
   "Btoutreq": {
      "Canal": "BTDIGITAL",
      "Servicio": "BTMicrofinanzas.ValidarPoliticas",
      "Fecha": "2019-11-01",
      "Hora": "13:56:51",
      "Requerimiento": "95",
      "Numero": "1400",
      "Estado": "OK"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTValidacionPoliticas  

### sBTValidacionPoliticas

::: center 
Los campos del tipo de dato estructurado sBTValidacionPoliticas son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
estado | String | Estado. 
estadoDsc | String | Descripción del estado. 
observacion | String | Observación que aplique para una política. Por ejemplo, que haya sido autorizada en una etapa previa. 
politica | String | Descripción de la política. 
politicaId | Int | Identificador de política. 
restriccion | String | Tipo de restricción de la política. 
restriccionDsc | String | Descripción de la restricción. 
:::
<!-- CIERRA SDT -->