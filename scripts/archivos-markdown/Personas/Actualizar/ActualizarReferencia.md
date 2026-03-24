---
title: Actualizar Referencia
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
::: note Método para actualizar una referencia de una persona.

**Nombre publicación:** BTPersonas.ActualizarReferencia

**Programa:** RBTPG303

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
sdtReferencia | [sBTReferencia](#sbtreferencia) | Datos de referencia de la persona.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | Identificador de persona requerido.
30002 | No existe persona con el identificador ingresado.
40001 | Correlativo no puede ser vacío.
40002 | Correlativo no existe.
40003 | Tipo Código no puede ser vacío.
40004 | Tipo Código Incorrecto.
40005 | Vínculo Código no puede ser vacío.
40006 | Vínculo Código Incorrecto.
40007 | Nombre no puede ser vacío.
40008 | Domicilio1 no puede ser vacío.
40009 | El teléfono no puede ser vacío.
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
      <bts:BTPersonas.ActualizarReferencia>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>0d4A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>21</bts:personaUId>
         <bts:sdtReferencia>
            <bts:vinculoId>3</bts:vinculoId>
            <bts:domicilio3></bts:domicilio3>
            <bts:domicilio2></bts:domicilio2>
            <bts:domicilio1>18 de Julio 1234</bts:domicilio1>
            <bts:tipoId>P</bts:tipoId>
            <bts:correlativo>1</bts:correlativo>
            <bts:tipo></bts:tipo>
            <bts:telefono>1234 5678</bts:telefono>
            <bts:nombre>Rodolfo Rias</bts:nombre>
            <bts:vinculo></bts:vinculo>
         </bts:sdtReferencia>
      </bts:BTPersonas.ActualizarReferencia>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarReferencia' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId":"21",
	"sBTReferencia": {
		"vinculoId": "3",
		"domicilio3": "",
		"domicilio2": "",
		"domicilio1": "18 de Julio 1234",
		"tipoId": "P",
		"correlativo": "1",
		"tipo": "",
		"telefono": "1234 5678",
		"nombre": "Rodolfo Rías",
		"vinculo": ""
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
      <BTPersonas.ActualizarReferenciaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d402ef5c9482434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8487</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ActualizarReferencia</Servicio>
            <Fecha>2019-05-08</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>17:47:52</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ActualizarReferenciaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTPersonas.ActualizarReferencia",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTReferencia  

### sBTReferencia

::: center 
Los campos del tipo de dato estructurado sBTReferencia son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
correlativo	| Short | Correlativo. 
domicilio1 | String | Domicilio 1. 
domicilio2 | String | Domicilio 2. 
domicilio3 | String | Domicilio 3. 
nombre | String | Nombre completo de la referencia. 
telefono	| String | Número de teléfono. 
tipo | String | Descripción del tipo de referencia 
tipoId | String | Identificador de tipo de referencia. 
vinculo | String | Vínculo. 
vinculoId | Short | Identificador de vínculo. 
:::
<!-- CIERRA SDT -->