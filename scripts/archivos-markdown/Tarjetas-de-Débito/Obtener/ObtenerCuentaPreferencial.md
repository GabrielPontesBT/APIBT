---
title: Obtener Cuenta Preferencial
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
::: note Método para obtener la operación de la cuenta preferencial de tarjeta de débito.

**Nombre publicación:** BTTarjetasDeDebito.ObtenerCuentaPreferencial

**Programa:** RBTPG773

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
tarjetaUId | Long | Identificador único de tarjeta.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
operacionUId | Long | Identificador único de operación de cuenta preferencial del cliente.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la tarjeta.
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
      <bts:BTTarjetasDeDebito.ObtenerCuentaPreferencial>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BA</bts:Usuario>
            <bts:Token>0211202010280000399672</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:tarjetaId>109</bts:tarjetaId>
      </bts:BTTarjetasDeDebito.ObtenerCuentaPreferencial>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ObtenerCuentaPreferencial' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
		"Canal": "BTDIGITAL",
		"Requerimiento": "1",
		"Usuario": "BA",
		"Token": "0211202010280000399672",
		"Device": "MC"
	 },
	 "tarjetaId": "109"
  } 
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
      <BTTarjetasDeDebito.ObtenerCuentaPreferencialResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BA</Usuario>
            <Token>0211202010280000399672</Token>
            <Device>MC</Device>
         </Btinreq>
         <operacionUId>10</operacionUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTTarjetasDeDebito.ObtenerCuentaPreferencial</Servicio>
            <Fecha>2020-11-02</Fecha>
            <Hora>12:06:37</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10140</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerCuentaPreferencialResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
   "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "BA", 
      "Token": "0211202010280000399672", 
      "Device": "MC" 
   }, 
   "operacionUId": "10", 
   "Erroresnegocio": null, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTTarjetasDeDebito.ObtenerCuentaPreferencial", 
      "Fecha": "2020-11-02", 
      "Hora": "12:06:37", 
      "Requerimiento": "1", 
      "Numero": "10140", 
      "Estado": "OK" 
   } 
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->