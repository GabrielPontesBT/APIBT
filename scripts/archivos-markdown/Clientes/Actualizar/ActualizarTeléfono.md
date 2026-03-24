---
title: Actualizar Teléfono
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
::: note Método para actualizar el teléfono de un cliente.

**Nombre publicación:** BTClientes.ActualizarTelefono

**Programa:** RBTPG216

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
domicilioId | Byte | Identificador de tipo de domicilio.
numeroTelefono | String | Número de teléfono.
tipoTelefonoId | Short | Identificador de tipo de teléfono.
modo | String | [Hidden: Valor fijo "UPD" para este método].
telefonoId | Byte | Identificador correlativo de teléfono.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de cliente.
30002 | No se recibió el identificador de Domicilio.
30003 | No se recibió Teléfono.
30004 | No se recibió Tipo de Teléfono.
40002 | No existe persona con los datos ingresados.
40003 | El número del teléfono es incorrecto (es muy corto).
40004 | El número del teléfono es incorrecto (es muy largo).
40005 | El número del teléfono no acepta caracteres.
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
      <bts:BTClientes.ActualizarTelefono>
         <bts:Btinreq>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>A088577A8D1E89A20E6EF27D</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
         <bts:domicilioId>1</bts:domicilioId>
         <bts:numeroTelefono>099274742</bts:numeroTelefono>
         <bts:tipoTelefonoId>2</bts:tipoTelefonoId>
         <bts:telefonoId>1</bts:telefonoId>
      </bts:BTClientes.ActualizarTelefono>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ActualizarTelefono' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "AV",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cc9b534A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"clienteUId": "61",
    "domicilioId": "1",
    "numeroTelefono": "099274742",
    "tipoTelefonoId": "2",  
    "telefonoId": "1"
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
      <BTClientes.ActualizarTelefonoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>A088577A8D1E89A20E6EF27D</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>10294</Numero>
            <Servicio>BTClientes.ActualizarTelefono</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-05</Fecha>
            <Hora>11:40:54</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ActualizarTelefonoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
   "Btinreq": { 
      "Device": "AV", 
      "Usuario": "MINSTALADOR", 
      "Token": "fa2c02c95a4A8B5C60A82434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
   "Btoutreq": { 
      "Numero": "111397", 
      "Estado": "OK", 
      "Servicio": "BTClientes.ActualizarTelefono", 
      "Requerimiento": "1", 
      "Fecha": "2023-05-05", 
      "Canal": "BTDIGITAL", 
      "Hora": "11:45:24" 
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->