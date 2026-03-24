---
title: Denunciar
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
::: note Método para denunciar una tarjeta de débito y darla de baja.

**Nombre publicación:** BTTarjetasDeDebito.Denunciar

**Programa:** RBTPG070

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
tarjetaUId | Long | Identificador único de tarjeta.
clienteUId | Long | Identificador único de cliente.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la tarjeta.
30002 | No se recuperó la tarjeta de débito para el identificador: [Número de identificador]
40001 | Error interno.
40002 | No existen tarjetas de débito para los datos ingresados.
40003 | Error en parámetros de input.
40004 | No existe la persona (con los datos del titular recibidos).
40005 | No existe la funcionalidad en TDD025.
40006 | Motivo de cancelación no valido.
40007 | Funcionalidad TDD025 inhabilitada.
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
      <bts:BTTarjetasDeDebito.Denunciar>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>be9fc8708b4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:tarjetaUId>2000002072</bts:tarjetaUId>
         <bts:clienteUId>161</bts:clienteUId>
      </bts:BTTarjetasDeDebito.Denunciar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?Denunciar' \
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
   "tarjetaUId": 2000002072,
   "clienteUId": 161
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
      <BTTarjetasDeDebito.DenunciarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>be9fc8708b4A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>985</Numero>
            <Estado>NEG_ERROR</Estado>
            <Servicio>BTTarjetasDeDebito.Denunciar</Servicio>
            <Requerimiento/>
            <Fecha>2017-12-22</Fecha>
            <Hora>14:51:47</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.DenunciarResponse>
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
      "Numero": "987",
      "Estado": "NEG_ERROR",
      "Servicio": "BTTarjetasDeDebito.Denunciar",
      "Requerimiento": "",
      "Fecha": "2017-12-22",
      "Hora": "16:15:27",
      "Canal": "BTDIGITAL"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->