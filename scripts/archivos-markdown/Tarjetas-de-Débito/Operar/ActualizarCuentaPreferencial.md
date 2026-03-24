---
title: Actualizar Cuenta Preferencial
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
::: note Método para actualizar la cuenta preferencial de tarjeta de débito.

**Nombre publicación:** BTTarjetasDeDebito.ActualizarCuentaPreferencial

**Programa:** RBTPG774

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
tarjetaId | Long | Identificador de tarjeta.
operacionUId | Long | Identificador único de operación de cuenta preferencial del cliente.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30000 | No se recibió el identificador de la tarjeta.
30001 | No existe registro con el identificador indicado.
30002 | No se recuperó la operación para el identificador recibido.
30003 | La Cuenta Preferencial no pertenece al Cliente.
30004 | No se recibió ni Id ni Número de Tarjeta.
30005 | No se encontró una tarjeta con el Id recibido.
30006 | No se encontró una tarjeta con el Número recibido.
40001 | La Tarjeta no pertenece al Cliente.
40102 | Error, se ha indicado un Tipo de Cuenta inhabilitado/erróneo.
40104 | Tarjeta inexistente TDD003.
40105 | Error, se ha excedido el máximo de X cuentas permitidas.
40105 | Error, no se permiten mas de X Cajas de Ahorro.
40105 | Error, no se permiten mas de X Cuentas Corriente.
40105 | Error, solo se permite una Cuenta PREFERENCIAL por Moneda.
40105 | Error, solo se permiten X Cuentas PREFERENCIALES.
40105 | Error, no se han asociado Cuentas a la Tarjeta.
40105 | Error, se deberá indicar una Cuenta como PREFERENCIAL, por favor indicarla.
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
      <bts:BTTarjetasDeDebito.ActualizarCuentaPreferencial>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BA</bts:Usuario>
            <bts:Token>0211202010280000399672</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>1</bts:clienteUId>
         <bts:tarjetaUId>109</bts:tarjetaId>
         <bts:operacionUId>10</bts:operacionUId>
      </bts:BTTarjetasDeDebito.ActualizarCuentaPreferencial>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ActualizarCuentaPreferencial' \
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
	 "clienteUId": "1",
	 "tarjetaUId": "109"
	 "operacionUId": "10"
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
      <BTTarjetasDeDebito.ActualizarCuentaPreferencialResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BA</Usuario>
            <Token>0211202010280000399672</Token>
            <Device>MC</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTTarjetasDeDebito.ActualizarCuentaPreferencial</Servicio>
            <Fecha>2020-11-02</Fecha>
            <Hora>12:06:37</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10140</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTTarjetasDeDebito.ActualizarCuentaPreferencialResponse>
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
   "Erroresnegocio": null, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTTarjetasDeDebito.ActualizarCuentaPreferencial", 
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