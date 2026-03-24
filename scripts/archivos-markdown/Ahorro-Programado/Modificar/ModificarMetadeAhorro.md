---
title: Modificar Meta de Ahorro
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
::: note Método para modificar la meta de ahorro.

**Nombre publicación:** BTAhorroProgramado.ModificarMetaDeAhorro

**Programa:** RBTPG117

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
ahorroUId | Long | Identificador único de operación de ahorro.
motivoAhorro | String | Descripción del motivo por el cual se ahorra [Ingreso opcional].
montoMetaAhorro | Double | Monto propuesto como meta para el ahorro [Discriminante el ingreso según si se definió "Meta de ahorro por monto" o "Meta de ahorro por fecha"].
fechaMetaAhorro | Date | Fecha propuesta como meta para el ahorro [Discriminante el ingreso según si se definió "Meta de ahorro por monto" o "Meta de ahorro por fecha"].

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador del cliente.
30002 | No se recibió el identificador del ahorro.
30003 | El monto indicado no puede ser menor que cero.
30004 | No se recuperó la cuenta para el identificador de cliente.
30005 | No se recuperó la operación del ahorro para el identificador: [Número de identificador].
30006 | El ahorro no pertenece al identificador del cliente: [Número de identificador].
40001 | No existe la operación de ahorro seleccionada.
40002 | El producto seleccionado no es un producto con meta de ahorro.
40003 | La fecha seleccionada como meta de ahorro no puede ser inferior a la del día.
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
      <bts:BTAhorroProgramado.ModificarMetaDeAhorro>
		<bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>b3c6f2d0e34A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>81</bts:clienteUId>
         <bts:ahorroUId>141</bts:ahorroUId>
         <bts:motivoAhorro>Mi ahorro 1</bts:motivoAhorro>
         <bts:montoMetaAhorro>15000</bts:montoMetaAhorro>
         <bts:fechaMetaAhorro></bts:fechaMetaAhorro>
      </bts:BTAhorroProgramado.ModificarMetaDeAhorro>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ModificarMetaDeAhorro' \
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
      "clienteUId": 81,
      "ahorroUId": 141,
      "motivoAhorro": "Mi ahorro 1",
      "montoMetaAhorro": 15000,  
      "fechaMetaAhorro": "0001-01-01"
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
      <BTAhorroProgramado.ModificarMetaDeAhorroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b3c6f2d0e34A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>151</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ModificarMetaDeAhorro</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-05-07</Fecha>
            <Hora>13:26:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ModificarMetaDeAhorroResponse>
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
        "Numero": "152",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ModificarMetaDeAhorro",
        "Requerimiento": "1",
        "Fecha": "2018-05-07",
        "Hora": "13:30:54",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->