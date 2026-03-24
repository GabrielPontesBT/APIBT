---
title: Obtener Estado De Operación
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
::: note Método para obtener el estado de una cuenta vista.

**Nombre publicación:** BTCuentasVista.ObtenerEstadoDeOperacion

**Programa:** RBTPG559

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de la operación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtEstadoOperacion | [sBTEstadoOperacion](#sbtestadooperacion) | Listado de estados.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de la operación.
30002 | La operación ingresada no corresponde a una cuenta vista.
30003 | No se recuperó la operación para el identificador ingresado.
30004 | No fue posible recuperar el estado para la operación ingresada.
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
      <bts:BTCuentasVista.ObtenerEstadoDeOperacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>844919B7576C42C91062EBB4</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>210</bts:operacionUId>
      </bts:BTCuentasVista.ObtenerEstadoDeOperacion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerEstadoDeOperacion' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	 "Btinreq": {
         "Canal": "BTDIGITAL",
         "Token": "fa2c02c95a4A8B5C60A76209",
         "Usuario": "INSTALADOR",
         "Requerimiento": 1,
         "Device": 1
      },
      "operacionUId": 150
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
      <BTCuentasVista.ObtenerEstadoDeOperacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>844919B7576C42C91062EBB4</Token>
         </Btinreq>
         <sdtEstadoOperacion>
            <descripcion>Normal</descripcion>
            <permiteOperar>S</permiteOperar>
            <codigo>0</codigo>
         </sdtEstadoOperacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20534</Numero>
            <Servicio>BTCuentasVista.ObtenerEstadoDeOperacion</Servicio>
            <Estado>OK</Estado>
            <Fecha>2024-05-20</Fecha>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Hora>09:22:42</Hora>
         </Btoutreq>
      </BTCuentasVista.ObtenerEstadoDeOperacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": 1,
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "fa2c02c95a4A8B5C60A76209"
   },
   "sdtEstadoOperacion": {
      "sBTEstadoOperacion": {
         "descripcion": "Normal",
         "permiteOperar": "S",
         "codigo": 0
      }
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": 20535,
      "Servicio": "BTCuentasVista.ObtenerEstadoDeOperacion",
      "Estado": "OK",
      "Fecha": "2024-05-20",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Hora": "11:42:12"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTEstadoOperacion  

### sBTEstadoOperacion

::: center 
Los campos del tipo de dato estructurado sBTEstadoOperacion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Short | Código del estado.
descripcion | String | Descripción del estado.
permiteOperar | String | ¿Permite Operar?
:::
<!-- CIERRA SDT -->