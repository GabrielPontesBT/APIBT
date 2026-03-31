---
title: Obtener Datos PEP
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
::: note Método para obtener los datos de una persona expuesta políticamente.

**Nombre publicación:** BTPersonas.ObtenerDatosPEP

**Programa:** RBTPG229

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.


@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
esPEP | String | Es persona políticamente expuesta? (S/N).
sdtDatosPEP | [sBTDatosPEP](#sbtdatospep) | Datos de la PEP.

@tab Errores

Código | Descripción
:--------- | :---------
30001 |	No se recibió el identificador de persona.
50001	| Fecha Inicio cargo PEP es de ingreso obligatorio.
50002	| Entidad es de ingreso obligatorio.
50003	| Cargo y Relación es de ingreso obligatorio.
50004	| Fecha Salida cargo PEP debe de ser mayor a Fecha Inicio cargo PEP.
50005	| Fecha Inicio cargo PEP debe de ser anterior a la Fecha de Hoy.
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
      <bts:BTPersonas.ObtenerDatosPEP>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>970772007CD285A89A23FBEE</bts:Token>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:personaUID>12</bts:personaUID>
      </bts:BTPersonas.ObtenerDatosPEP>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDatosPEP=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \
  -d '{
  	"Btinreq": {
		"Device": "GP",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "2081397563CD285A89A23FBE"
	},
	"personaUId": 1
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
      <BTPersonas.ObtenerDatosPEPResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>970772007CD285A89A23FBEE</Token>
            <Device>1</Device>
         </Btinreq>
         <esPEP>S</esPEP>
         <sdtDatosPEP>
            <entidad>Bantotal</entidad>
            <cargoRelacion>Político</cargoRelacion>
            <observacion>No corresponde</observacion>
            <fechaInicio>2012-12-12</fechaInicio>
            <fechaSalida>0000-00-00</fechaSalida>
            <correlativo>1</correlativo>
            <tipoPEPId>1</tipoPEPId>
            <tipoFuncionarioPublicoId>1</tipoFuncionarioPublicoId>
            <tipoPEP>Actividad Pública</tipoPEP>
            <tipoFuncionarioPublico>PEP Nacional</tipoFuncionarioPublico>
         </sdtDatosPEP>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.ObtenerDatosPEP</Servicio>
            <Fecha>2021-02-11</Fecha>
            <Hora>16:36:46</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>80313</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.ObtenerDatosPEPResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
"Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "1",
      "Usuario": "INSTALADOR",
      "Token": "970772007CD285A89A23FBEE",
      "Device": "1"
    },
    "esPEP": "S",
    "sdtDatosPEP": {
      "entidad": "Bantotal",
      "cargoRelacion": "Político",
      "observacion": "No corresponde",
      "fechaInicio": "2012-12-12",
      "fechaSalida": "0000-00-00",
     "correlativo": 1,
     "tipoPEPId": 1,
     "tipoFuncionarioPublicoId": 1,
     "tipoPEP": "Actividad Pública",
     "tipoFuncionarioPublico": "PEP Nacional"
    },
    "Erroresnegocio": {},
    "Btoutreq": {
      "Canal": "BTDIGITAL",
      "Servicio": "BTPersonas.ObtenerDatosPEP",
      "Fecha": "2021-02-11",
      "Hora": "16:36:46",
      "Requerimiento": "1",
      "Numero": "80313",
      "Estado": "OK"
    }
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDatosPEP  

### sBTDatosPEP

::: center 
Los campos del tipo de dato estructurado sBTDatosPEP son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cargoRelacion | String | Cargo que ocupa. 
entidad | String | Entidad. 
fechaInicio | Date | Fecha de inicio. 
fechaSalida | Date | Fecha de salida. 
observacion | String | Observación. 
:::
<!-- CIERRA SDT -->