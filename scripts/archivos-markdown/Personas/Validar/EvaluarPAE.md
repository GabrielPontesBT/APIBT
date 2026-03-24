---
title: Evaluar PAE
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
::: note Método para retornar el resultado de evaluar el PAE de una persona.

**Nombre publicación:** BTPersonas.EvaluarPAE

**Programa:** RBTPGP50

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
modeloId | Int | Identificador del modelo.
personaUId | Long | Identificador único de persona.
productoUId | Long | Identificador único del producto.
sdtValores | [sBTPAEValorItem](#sbtpaevaloritem) | Colección de valores PAE.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
valor | Double | Valor.
mensaje | String | Mensaje.
sdtPoliticas | [sBTPoliticaIncumplida](#sbtpoliticaincumplida) | Colección de políticas incumplidas.
numeroEjecucion | Long | Número de la ejecución.

@tab Errores

Código | Descripción
:--------- | :-----------
1011050 | No se recibió modelo de evaluación PAE.
1011051 | No se recuperó la persona para el Id recibido.
1011052 | No se recuperó el producto para el Id recibido.
1011053 | El modelo de evaluación no está definido.
1011054 | El modelo de evaluación no tiene tipo definido.
1011055 | No hay ítems a resolver para la evaluación solicitada.
1011056 | No es posible evaluar reglas en la plataforma de ejecución.
1011056 | Error en la parametrización del modelo de evaluación.
1011057 | Error en la ejecución del modelo de evaluación.
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
      <bts:BTPersonas.EvaluarPAE>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>E1F15D391E5C8FAC4189A627</bts:Token>
         </bts:Btinreq>
         <bts:modeloId>23</bts:modeloId>
         <bts:personaUId>62</bts:personaUId>
         <bts:productoUId>3</bts:productoUId>
         <bts:sdtValores>
            <bts:sBTPAEValorItem>
               <bts:itemValor></bts:itemValor>
               <bts:itemNombre></bts:itemNombre>
            </bts:sBTPAEValorItem>
         </bts:sdtValores>
      </bts:BTPersonas.EvaluarPAE>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?EvaluarPAE=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8' \
  -d '{
	"Btinreq": {
		"Device": "GZ",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "modeloId": 23,
   "personaUId": 62,
   "productoUId": 3,
   "sdtValores": {
      "sBTPAEValorItem": {
      "itemValor": "",
      "itemNombre": ""
      }
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
      <BTPersonas.EvaluarPAEResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>E1F15D391E5C8FAC4189A627</Token>
         </Btinreq>
         <valor>10000.0</valor>
         <mensaje/>
         <sdtPoliticas/>
         <numeroEjecucion>2</numeroEjecucion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16893</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.EvaluarPAE</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-10-31</Fecha>
            <Hora>08:50:51</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.EvaluarPAEResponse>
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
   "valor": 10000,
   "mensaje": "",
   "sdtPoliticas": "",
   "numeroEjecucion": 2,
   "Erroresnegocio": {
       "BTErrorNegocio": []
   },
   "Btoutreq": {
       "Numero": "835",
       "Estado": "OK",
       "Servicio": "BTPersonas.EvaluarPAE",
       "Fecha": "2017-12-18",
       "Requerimiento": "",
       "Hora": "01:48:53",
       "Canal": "BTDIGITAL"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPAEValorItem  

### sBTPAEValorItem

::: center 
Los campos del tipo de dato estructurado sBTPAEValorItem son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
itemNombre | String | Nombre del ítem. 
itemValor | String | Valor del ítem. 
:::

::: details sBTPoliticaIncumplida  

### sBTPoliticaIncumplida

::: center 
Los campos del tipo de dato estructurado sBTPoliticaIncumplida son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
estado | String | Estado. 
estadoDsc | String | Descripción del estado. 
nroAutorizacion | Long | Número de la autorización. 
observacion | String | Observación. 
politica | String | Política. 
politicaId | Int | Identificador de la política. 
restriccion | String | Restricción. 
restriccionDsc | String | Descripción de la restricción. 
:::
<!-- CIERRA SDT -->