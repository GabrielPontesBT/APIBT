---
title: Agregar Datos PEP
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
::: note Método para agregar los datos de una persona expuesta políticamente.

**Nombre publicación:** BTPersonas.AgregarDatosPEP

**Programa:** RBTPG146

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
esPEP | String | Es persona políticamente expuesta? (S/N).
sdtDatosPEP | [sBTDatosPEP](#sbtdatospep) | Datos de la PEP.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la persona.
30002 | No se recibió si la persona es políticamente expuesta.
30003 | No se pudo determinar si la persona es políticamente expuesta. (¿Es PEP? S / N).
50001 | Fecha Inicio cargo PEP es de ingreso obligatorio.
50002 | Entidad es de ingreso obligatorio.
50003 | Cargo y Relación es de ingreso obligatorio.
50004 | Fecha Salida cargo PEP debe de ser mayor a Fecha Inicio cargo PEP.
50005 | Fecha Inicio cargo PEP debe de ser anterior a la Fecha de Hoy.
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
      <bts:BTPersonas.AgregarDatosPEP>
		   <Btinreq>
			  <Canal>BTDIGITAL</Canal>
			  <Device>AV</Device>
			  <Requerimiento />
			  <Token>1254960580EF744F35AE6963</Token>
			  <Usuario>INSTALADOR</Usuario>
		   </Btinreq>
		   <personaUId>3</personaUId>  
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
	   </bts:BTPersonas.AgregarDatosPEP>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarDatosPEP' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
   "Btinreq": {
        "Device": "AV",
        "Usuario": "INSTALADOR",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "1254960580EF744F35AE6963"
    },
   "personaUId": "3",
   "esPEP": "S",
   "sdtDatosPEP": {
      "entidad": "abc125",
      "cargoRelacion": "politic00",
      "observacion": "no corresponde",
      "fechaInicio": "2014-05-20",
      "fechaSalida": "",
      "correlativo": 1,
      "tipoPEPId": 1, 
      "tipoFuncionarioPublicoId": 1, 
      "tipoPEP": "",
      "tipoFuncionarioPublico": "",
   }
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
      <BTPersonas.AgregarDatosPEPResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
		  <Btinreq>
			  <Canal>BTDIGITAL</Canal>
			  <Device>AV</Device>
			  <Requerimiento />
			  <Token>1254960580EF744F35AE6963</Token>
			  <Usuario>INSTALADOR</Usuario>
		   </Btinreq>
		   <Erroresnegocio></Erroresnegocio>
		   <Btoutreq>
			  <Canal>BTDIGITAL</Canal>
			  <Estado>OK</Estado>
			  <Fecha>2020-07-30</Fecha>
			  <Hora>13:13:12</Hora>
			  <Numero>50199</Numero>
			  <Requerimiento />
			  <Servicio>BTPersonas.AgregarDatosPEP</Servicio>
		   </Btoutreq>
      </BTPersonas.AgregarDatosPEPResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>

```
@tab JSON
```json
{ 
    "Btinreq": { 
        "Device": "AV", 
        "Usuario": "INSTALADOR", 
        "Requerimiento": "", 
        "Canal": "BTDIGITAL", 
        "Token": "1254960580EF744F35AE6963" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPersonas.AgregarDatosPEP", 
        "Fecha": "2020-07-30", 
        "Hora": "13:13:12", 
        "Requerimiento": "", 
        "Numero": 50199, 
        "Estado": "OK" 
    } 
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
:--------- | :----------- | :----------- 
cargoRelacion | String | Cargo que ocupa.
correlativo | Short | Correlativo.
entidad | String | Entidad.
fechaInicio | Date | Fecha de inicio.
fechaSalida | Date | Fecha de salida.
observacion | String | Observación.
tipoFuncionarioPublico | String | Tipo de funcionario publico.
tipoFuncionarioPublicoId | Short | Identificador de tipo de funcionario publico.
tipoPEP | String | Tipo de PEP.
tipoPEPId | Short | Identificador de tipo de PEP. 
:::
<!-- CIERRA SDT -->