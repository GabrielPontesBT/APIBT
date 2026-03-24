---
title: Obtener Víctima Hecho Violento
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
::: note Método para obtener la información de una persona víctima de un hecho violento.

**Nombre publicación:** BTPersonas.ObtenerVictimaHechoViolento

**Programa:** RBTPCO06

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
esVictima | String | Es víctima de hecho violento (S/N).
sdtVictimaHechoViolento | [sBTPCOVictimaHechoViolento](#sbtpcovictimahechoviolento) | Datos de víctima de hecho violento.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de persona.
30013 | No existe registro para el identificador único.
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
      <bts:BTPersonas.ObtenerVictimaHechoViolento>
         <bts:Btinreq>
            <bts:Token>d235ac28e6CD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>21</bts:personaUId>
      </bts:BTPersonas.ObtenerVictimaHechoViolento>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerVictimaHechoViolento \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId": "21"
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
      <BTPersonas.ObtenerVictimaHechoViolentoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>d235ac28e6CD285A89A23FBE</Token>
         </Btinreq>
         <esVictima>S</esVictima>
         <sdtVictimaHechoViolento>
            <entidadId>4</entidadId>
            <municipio>SAN JUAN DEL CESAR</municipio>
            <departamento>LA GUAJIRA</departamento>
            <inspeccionPolicia>Herida de arma</inspeccionPolicia>
            <sitio>Casa</sitio>
            <municipioId>650</municipioId>
            <tipoId>2</tipoId>
            <vereda>25 de Agosto</vereda>
            <fechaCertificacion>2020-01-07</fechaCertificacion>
            <tipo>Medio</tipo>
            <entidad>Personerías Municipales</entidad>
            <fechaVencimiento>2021-11-30</fechaVencimiento>
            <corregimiento>No tiene</corregimiento>
            <departamentoId>44</departamentoId>
            <fechaHecho>2019-05-03</fechaHecho>
         </sdtVictimaHechoViolento>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1966</Numero>
            <Servicio>BTPersonas.ObtenerVictimaHechoViolento</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-03-09</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>10:36:30</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerVictimaHechoViolentoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"esVictima": "S",
	"sdtVictimaHechoViolento": {
		"entidadId": "4",
		"municipio": "SAN JUAN DEL CESAR",
		"departamento": "LA GUAJIRA",
		"inspeccionPolicia": "Herida de arma",
		"sitio": "Casa",
		"municipioId": "650",
		"tipoId": "2",
		"vereda": "25 de Agosto",
		"fechaCertificacion": "2020-01-07",
		"tipo": "Medio",
		"entidad": "Personerías Municipales",
		"fechaVencimiento": "2021-11-30",
		"corregimiento": "No tiene",
		"departamentoId": "44",
		"fechaHecho": "2019-05-03"
	},
	"Btoutreq": {
	  "Numero": "1729",
	  "Estado": "OK",
	  "Servicio": "BTPersonas.ObtenerVictimaHechoViolento",
	  "Requerimiento": "1",
	  "Fecha": "2020-03-05",
	  "Canal": "BTDIGITAL",
	  "Hora": "13:10:51"
	}
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPCOVictimaHechoViolento  

### sBTPCOVictimaHechoViolento

::: center 
Los campos del tipo de dato estructurado sBTPCOVictimaHechoViolento son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
corregimiento | String | Corregimiento. 
departamento | String | Nombre del departamento donde ocurrió el hecho. 
departamentoId | Short | Identificador de departamento. 
entidad | String | Nombre de entidad. 
entidadId | Long | Identificador de entidad. 
fechaCertificacion | Date | Fecha en la que recibió la certificación. 
fechaHecho | Date | Fecha en la que ocurrió el hecho. 
fechaVencimiento | Date | Fecha de vencimiento de la certificación. 
inspeccionPolicia | String | Inspección de policía. 
municipio | String | Nombre del municipio donde ocurrió el hecho. 
municipioId | Short | Identificador de municipio. 
sitio | String | Sitio. 
tipo | String | Tipo de hecho. 
tipoId | Short | Identificador de tipo de hecho (1 = Leve / 2 = Medio / 3 = Grave) . 
vereda | String | Vereda. 
:::
 
<!-- CIERRA SDT -->