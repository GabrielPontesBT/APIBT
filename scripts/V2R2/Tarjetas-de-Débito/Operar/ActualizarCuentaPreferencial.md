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
tarjetaUId | Long | Identificador de tarjeta.
operacionUId | Long | Identificador único de operación de cuenta preferencial del cliente.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió identificador único de operación.
30002 | No se recibió identificador único de tarjeta.
30003 | No se recibió identificador único de cliente.
30004 | No se recuperó la operación para el Identificador: [Número de identificador]
30005 | La operación ingresada no pertenece al cliente.
30006 | La cuenta ingresada no pertenece al habiente de la tarjeta.
30006 | La cuenta ingresada no pertenece al habiente de la tarjeta.
40003 | No existe registro con la cuenta indicada.
40004 | No existe registro con el identificador indicado.
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
         <bts:tarjetaUId>109</bts:tarjetaUId>
         <bts:operacionUId>10</bts:operacionUId>
      </bts:BTTarjetasDeDebito.ActualizarCuentaPreferencial>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "",
      "Usuario": "INSTALADOR",
      "Token": "1518870407CD285A89A23FBE",
      "Device": ""
  },
  "clienteUId": 1,
  "tarjetaUId": 109,
  "operacionUId": 10
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
