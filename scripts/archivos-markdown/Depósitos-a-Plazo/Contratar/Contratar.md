---
title: Contratar
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
::: note Método para contratar un depósito a plazo. 
Este servicio se debe ejecutar para contratar simulaciones realizadas desde el servicio [Simular](../Simular/Simular.md)

**Nombre publicación:** BTDepositosAPlazo.Contratar

**Programa:** RBTPG094

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

1) Definir la transacción de alta de depósito a plazo, teniendo en cuenta que:

   - El depósito a plazo se almacena en el preformato 1.
   - La cuenta vista de débito se almacena en el preformato 2.
   - Los correlativos del subordinal deben corresponderse con los módulos de los productos de cuenta vista definidos en el subordinal.

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T)

   - Se debe indicar los ordinales donde se encuentra definido el depósito a plazo y la cuenta vista de débito.

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
simulacionUId | Long | Identificador único de la simulación.
clienteUId | Long | Identificador único de cliente.
operacionUIdOrigen | Long | Identificador único de la operación de donde se retira el monto del DPF.
operacionUIdDestino | Long | Identificador único de la operación de acreditación (Capital y/o intereses según instrucción).
instruccionAlVencimiento | Short | Identificador de instrucción al vencimiento.
controlaMismoCliente | String | ¿Controla correspondencia de cuenta de débito contra cuenta cliente originante? [Hidden: Valores 'S'/'N'].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
operacionUId | Long | Identificador único de operación.
movimientoUId | Long | Identificador único de movimiento.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de cliente.
30002 | No se recuperó la cuenta para el identificador.
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
      <bts:BTDepositosAPlazo.Contratar>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>407fce50864A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:simulacionUId>41</bts:simulacionUId>
         <bts:clienteUId>161</bts:clienteUId>
         <bts:operacionUIdOrigen>281</bts:operacionUIdOrigen>
         <bts:operacionUIdDestino>281</bts:operacionUIdDestino>
         <bts:instruccionAlVencimiento>2</bts:instruccionAlVencimiento>
      </bts:BTDepositosAPlazo.Contratar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?Contratar=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "simulacionUId":41,
    "clienteUId":161,
    "operacionUIdOrigen":281,
    "operacionUIdDestino":281,
    "instruccionAlVencimiento":2   
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
      <BTDepositosAPlazo.ContratarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>407fce50864A8B5C60A82434</Token>
         </Btinreq>
         <operacionUId>321</operacionUId>
         <fechaAlta>2018-10-09</fechaAlta>
         <fechaVencimiento>2019-10-09</fechaVencimiento>
         <intereses>1001.78</intereses>
         <tasa>0.18</tasa>
         <movimientoUId>357</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>995</Numero>
            <Estado>NEG_ERROR</Estado>
            <Servicio>BTDepositosAPlazo.Contratar</Servicio>
            <Fecha>2017-12-26</Fecha>
            <Requerimiento/>
            <Hora>11:21:19</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ContratarResponse>
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
	"operacionUId": "358",
   "fechaAlta": "2018-10-09",
   "fechaVencimiento": "2019-10-09",
   "intereses": "1001.78",
   "tasa": "0.18",
   "simulacionUId": "21",
	"movimientoUId": "357",
   "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "946",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.Contratar",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "18:10:30",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->