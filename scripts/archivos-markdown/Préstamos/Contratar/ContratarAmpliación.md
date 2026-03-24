---
title: Contratar Ampliación
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
::: note Método para contratar un préstamo ampliado, cancelando las operaciones indicadas en la simulación.

**Nombre publicación:** BTPrestamos.ContratarAmpliacion

**Programa:** RBTPG235

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

1) Definir la transacción de alta, teniendo en cuenta que: 

   - El préstamo se almacena en el preformato 1 para pfdid = cero. 

	- La cuenta vista de acreditación se almacena en el preformato 2 para pfdid = cero. 

	- Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal. 

	- Las operaciones a cancelar se almacenan en el preformato 1 para pfdid > cero. 

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T). 

3) Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro. Ademas cargar en el Auxiliar Numérico el ordinal de baja de préstamo.  

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
ampliacionId | Long | Identificador de la ampliación simulada.
clienteUId | Long | Identificador único de cliente.
accion | String | [Hidden: Valor fijo 'AMPLI' para este método].
operacionUId_desembolso | Long | Identificador único de operación de la cuenta vista donde se acreditará el monto solicitado.
operacionUId_cobro | Long | Identificador único de operación de la cuenta vista de donde se cobrará el préstamo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
movimientoUId | Long | Identificador único del movimiento [Asiento].  

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de ampliación.
30002 | El identificador de ampliación no es válido.
30003 | No se recibió el identificador de oper. de la cuenta vista.
30004 | No se recuperó la cuenta vista para el identificador: [Número de Identificador].
30005 | No se recibió el identificador de oper. de la intrucción de cobro.
30006 | No se recuperó la operación para el identificador: [Número de Identificador].
30007 | No se recibió el identificador de cliente.
30008 | No se recuperó la cuenta para el identificador de cliente: [Número de Identificador].
30009 | El préstamo no pertenece al cliente.
30010 | La operación de cobro no pertenece al cliente.
30011 | La operación de cobro no pertenece al cliente.
30012 | No se recuperó la operación para el identificador: [Número de Identificador].
30013 | No se recuperó la operación simulada con identificador.
40001 | en adelante, errores de contabilización.
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
      <bts:BTPrestamos.ContratarAmpliacion>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>18bdf2801e4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:ampliacionId>122</bts:ampliacionId>
         <bts:clienteUId>221</bts:clienteUId>
         <bts:operacionUId_desembolso>211</bts:operacionUId_desembolso>
         <bts:operacionUId_cobro>211</bts:operacionUId_cobro>
      </bts:BTPrestamos.ContratarAmpliacion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ContratarAmpliacion' \
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
	"ampliacionId":"122",
	"clienteUId":"221",
	"operacionUId_desembolso":"211",
	"operacionUId_cobro":"211",
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
      <BTPrestamos.ContratarAmpliacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>18bdf2801e4A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>1536</movimientoUId>
         <Btoutreq>
            <Numero>4418</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ContratarAmpliacion</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Requerimiento/>
            <Hora>15:46:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ContratarAmpliacionResponse>
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
    "movimientoUId": "1536",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "755",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ContratarAmpliacion",
        "Fecha": "2017-11-30",
        "Requerimiento": "",
        "Hora": "13:47:48",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->