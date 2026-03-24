---
title: Modificar Instrucción
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
::: note Método para modificar la instrucción al vencimiento de un depósito a plazo.

**Nombre publicación:** BTDepositosAPlazo.ModificarInstruccion

**Programa:** RBTPG106

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

Se debe parametrizar en la guía de procesos 70101 de la siguiente manera: 

Campo | Valor 
:--------- | :----------- 
Correlativo | Valor incremental. 
Valor específico | Código de instrucción habilitada. 
Importe específico | 3. 
:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
depositoUId | Long | Identificador único de la operación del depósito.
cuentaUId | Long | Identificador único de la operación de la cuenta.
accion | Short | Especifica la nueva acción que tomará el depósito al vencimiento.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador del cliente.
30002 | No se recibió el identificador de la operación del depósito.
30003 | No se recibió la instrucción al vencimiento.
30004 | No se recuperó la cuenta para el identificador de cliente: [Número de identificador].
30005 | No se recuperó la operación del depósito para el identificador: [Número de identificador].
30006 | La operación asociada al identificador: [Número de identificador] no pertenece a un depósito a plazo.
30007 | La cuenta del depósito no pertenece al identificador del cliente: [Número de identificador].
30011 | No se recibió el identificador de la operación de la cuenta.
30012 | No se recuperó la operación de la cuenta para el identificador: [Número de identificador].
30013 | La operación asociada al identificador: [Número de identificador] no pertenece a un producto cuenta.
40001 | Se debe indicar el código de instrucción al vencimiento aplicar.
40002 | El código de instrucción al vencimiento ingresado es incorrecto.
40003 | No se encontró instrucción al vencimiento para el depósito ingresado.
40004 | La instrucción al vencimiento a aplicar es igual a la que tiene el depósito.
40005 | La operación donde se abonarían los intereses no existe.
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
      <bts:BTDepositosAPlazo.ModificarInstruccion>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6c275823524A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
         <bts:depositoUId>1</bts:depositoUId>
         <bts:cuentaUId>2</bts:cuentaUId>
         <bts:accion>2</bts:accion>
      </bts:BTDepositosAPlazo.ModificarInstruccion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ModificarInstruccion=' \
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
   "clienteUId": 61,
	"depositoUId": 1,
	"cuentaUId": 2,
	"accion": "2"	 
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
      <BTDepositosAPlazo.ModificarInstruccionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6c275823524A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>142</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.ModificarInstruccion</Servicio>
            <Fecha>2018-03-01</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>10:43:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ModificarInstruccionResponse>
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
        "Numero": "142",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.ModificarInstruccion",
        "Fecha": "2018-03-01",
        "Requerimiento": "1",
        "Hora": "10:43:01",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->