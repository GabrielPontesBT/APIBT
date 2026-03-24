---
title: Obtener Precio a Fecha
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
::: note Método para obtener la cotización en moneda nacional de una especie en la fecha recibida.

**Nombre publicación:** BTPrecios.ObtenerPrecioAFecha

**Programa:** RBTPG049

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
especie | Long | Identificador de la especie.
fecha | Date | Fecha a consultar.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
precio | Double | Cotización.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió una especie.
40001 | La especie no es un índice.
40002 | La especie no existe.
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
      <bts:BTPrecios.ObtenerPrecioAFecha>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>324915377F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:especie>500</bts:especie>
         <bts:fecha>2017-11-11</bts:fecha>
      </bts:BTPrecios.ObtenerPrecioAFecha>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerPrecioAFecha=' \
  -H 'cache-control: no-cache,no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: d20f4b05-03a0-49c1-ba1f-d026339b8367,3f56f9d3-094e-474b-8730-6840899770d7' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "especie": "500",
   "fecha": "2017-11-11"
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
      <BTPrecios.ObtenerPrecioAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>324915377F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <precio>17282.89</precio>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrecios.ObtenerPrecioAFecha</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Hora>15:34:16</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6957</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrecios.ObtenerPrecioAFechaResponse>
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
   "precio": 17282.89,
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": 56,
      "Servicio": "BTPrecios.ObtenerPrecioAFecha",
      "Estado": "OK",
      "Fecha": "2019-10-25",
      "Requerimiento": "1",
      "Hora": "13:51:52",
      "Canal": "BTDIGITAL"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->