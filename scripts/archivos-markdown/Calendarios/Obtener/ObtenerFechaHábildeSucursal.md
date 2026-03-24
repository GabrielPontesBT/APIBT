---
title: Obtener Fecha Hábil de Sucursal
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
::: note Método para obtener si una fecha es hábil en la sucursal ingresada.

**Nombre publicación:** BTCalendario.ObtenerFechaHabilSucursal

**Programa:** RBTPG327

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
fecha | Date | Fecha a consultar.
sucursalId | Int | Identificador de Sucursal a consultar.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
fechaHabil | String | ¿Es hábil? (S/N)

@tab Errores

Código | Descripción
:--------- | :-----------
40001 | La Sucursal no existe.
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
      <bts:BTConfiguracionBantotal.ObtenerFechaHabilSucursal>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>120320211555340000388219</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:fecha>2020-11-14</bts:fecha>
         <bts:sucursalId>1000</bts:sucursalId>
      </bts:BTConfiguracionBantotal.ObtenerFechaHabilSucursal>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerFechaHabilSucursal' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "INSTALADOR",
	  "Token": "120320211555340000388219",
	  "Device": "AC"
	},
	"fecha": "2020-11-14",
	"sucursalId": "1000"
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
      <BTConfiguracionBantotal.ObtenerFechaHabilSucursalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>120320211555340000388219</Token>
            <Device>AC</Device>
         </Btinreq>
         <fechaHabil>N</fechaHabil>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTConfiguracionBantotal.ObtenerFechaHabilSucursal</Servicio>
            <Fecha>2021-03-12</Fecha>
            <Hora>15:58:02</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10660</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerFechaHabilSucursalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
 { 
 	"Btinreq": { 
	  "Device": "AC", 
	  "Usuario": "INSTALADOR", 
	  "Requerimiento": "1", 
	  "Canal": "BTDIGITAL", 
	  "Token": "120320211555340000388219" 
	}, 
	"fechaHabil": "N", 
	"Btoutreq": { 
	  "Numero": "10660", 
	  "Estado": "OK", 
	  "Servicio": "BTConfiguracionBantotal.ObtenerFechaHabilSucursal", 
	  "Requerimiento": "1", 
	  "Fecha": "2021-03-12", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "15:58:02" 
	} 
 }
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->