---
title: Obtener Correlativo Guía
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
::: note Método para obtener los datos de un correlativo de una determinada guía de procesos.

**Nombre publicación:** BTParametrosBase.ObtenerCorrelativoGuia

**Programa:** RBTPG053

**Global/País:** Institucional
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
empresaId | Short | Código de empresa [Hidden].
codigo | Long | Código de la Guía de Procesos.
correlativo | Short | Correlativo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtCorrelativo | [sBTCorrelativoGuia](#sbtcorrelativoguia) | Datos de la guía de proceso.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió código de guía.
40001 | No existe el correlativo.
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
      <bts:BTParametrosBase.ObtenerCorrelativoGuia>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>43f21ff61cCD285A89A23FBE</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:codigo>50</bts:codigo>
         <bts:correlativo>1</bts:correlativo>
      </bts:BTParametrosBase.ObtenerCorrelativoGuia>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase_v1?ObtenerCorrelativoGuia \
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
	"codigo": "50",
	"correlativo": "1"
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
      <BTParametrosBase.ObtenerCorrelativoGuiaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>43f21ff61cCD285A89A23FBE</Token>
         </Btinreq>
         <sdtCorrelativo>
            <descripcion>Depósitos Efectivo Ctas Vista</descripcion>
            <importeEspecifico>5.00</importeEspecifico>
            <valorEspecifico>50</valorEspecifico>
            <correlativo>1</correlativo>
         </sdtCorrelativo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>593</Numero>
            <Servicio>BTParametrosBase.ObtenerCorrelativoGuia</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-03-11</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:51:13</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTParametrosBase.ObtenerCorrelativoGuiaResponse>
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
	"sdtCorrelativo": {
	  "descripcion": "Depósitos Efectivo Ctas Vista",
	  "importeEspecifico": "5.00",
	  "valorEspecifico": "50",
	  "correlativo": "1"
	},
	"Btoutreq": {
	  "Numero": "593",
	  "Servicio": "BTParametrosBase.ObtenerCorrelativoGuia",
	  "Estado": "OK",
	  "Fecha": "2020-03-11",
	  "Requerimiento": "1",
	  "Hora": "11:51:13",
	  "Canal": "BTDIGITAL"
	}
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCorrelativoGuia  

### sBTCorrelativoGuia

::: center 
Los campos del tipo de dato estructurado sBTCorrelativoGuia son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
correlativo | Short | Correlativo de la guía. 
descripcion | String | Descripción del correlativo. 
importeEspecifico | Double | Importe específico del correlativo. 
valorEspecifico | Long | Valor específico del correlativo. 
:::
<!-- CIERRA SDT -->