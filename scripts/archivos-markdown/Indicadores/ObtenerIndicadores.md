---
title: Obtener Indicadores
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
::: note Método para obtener los indicadores por agrupador.

**Nombre publicación:** BTIndicadores.ObtenerIndicadores

**Programa:** RBTPG702

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
agrupadorId | Int | Identificador de agrupador.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtIndicadores | [sBTIndicador](#sbtindicador) | Listado de indicadores.

@tab Errores

Código | Descripción
:--------- | :-----------
40001 | No existen Indicadores.
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
      <bts:BTIndicadores.ObtenerIndicadores>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>?</bts:Requerimiento>
         </bts:Btinreq>
         <bts:agrupadorId>100</bts:agrupadorId>
      </bts:BTIndicadores.ObtenerIndicadores>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerIndicadores' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
   "Btinreq": {
      "Device": 1,
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7",
      "Usuario": "INSTALADOR",
      "Requerimiento": "?"
   },
   "agrupadorId": 100
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
      <BTIndicadores.ObtenerIndicadoresResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>?</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>959C2E0AEF210ABC0D8AA8F7</Token>
         </Btinreq>
         <sdtIndicadores>
            <sBTIndicador>
               <descripcion>Condiciones generales</descripcion>
               <codigo>105</codigo>
            </sBTIndicador>
            <sBTIndicador>
               <descripcion>Información de Cotizaciones</descripcion>
               <codigo>106</codigo>
            </sBTIndicador>
         </sdtIndicadores>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11989</Numero>
            <Estado>OK</Estado>
            <Servicio>BTIndicadores.ObtenerIndicadores</Servicio>
            <Requerimiento>?</Requerimiento>
            <Fecha>2023-05-22</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>14:45:13</Hora>
         </Btoutreq>
      </BTIndicadores.ObtenerIndicadoresResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": 1,
      "Usuario": "INSTALADOR",
      "Requerimiento": "?",
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7"
   },
   "sdtIndicadores": {
      "sBTIndicador": [
      {
         "descripcion": "Condiciones generales",
         "codigo": 105
      },
      {
         "descripcion": "Información de Cotizaciones",
         "codigo": 106
      }
      ]
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": 11989,
      "Estado": "OK",
      "Servicio": "BTIndicadores.ObtenerIndicadores",
      "Requerimiento": "?",
      "Fecha": "2023-05-22",
      "Canal": "BTDIGITAL",
      "Hora": "14:45:13"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTIndicador  

### sBTIndicador

::: center 
Los campos del tipo de dato estructurado sBTIndicador son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Int | Identificador de indicador. 
descripcion | String | Descripción del indicador. 
:::
<!-- CIERRA SDT -->