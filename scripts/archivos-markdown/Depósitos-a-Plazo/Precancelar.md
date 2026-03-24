---
title: Precancelar
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
::: note Método para precancelar una operación de un depósito a plazo.

**Nombre publicación:** BTDepositosAPlazo.Precancelar

**Programa:** RBTPG637

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend   

1) Definir la transacción de cancelación teniendo en cuenta que:
   
   - Tenga asociada la RTE PRT006 en el ordinal de la operación.
   
2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único del cliente.
operacionUId | Long | Identificador único de operación.
cuentaAcreditacionUId | Long | Identificador único de operación de cuenta vista de cobro.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
movimientoUId | Long | Identificador único del movimiento.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de cliente.
30002 | No se recibió el identificador de operación.
30003 | No se recuperó la operación origen para el Identificador ingresado.
30004 | La operación recuperada no tiene relación con la cuenta.
30005 | No se recibió el identificador de operación de acreditación.
30006 | La operación a precancelar y de acreditación no pueden ser la misma.
30007 | No se recuperó la operación de acreditación para el Identificador ingresado.
30008 | La operación de acreditación no tiene relación con la cuenta.
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
      <bts:BTDepositosAPlazo.Precancelar>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>853547DAE3BFB2C1EC0A3148</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
         <bts:operacionUId>100</bts:operacionUId>
         <bts:cuentaAcreditacionUId>12</bts:cuentaAcreditacionUId>
      </bts:BTDepositosAPlazo.Precancelar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerDatosPrecancelacion=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: dc197965-60bc-3f23-3367-5902a0392e1d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "clienteUId": 4,
	"operacionUId": 100,
   "cuentaAcreditacionUId": 12
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
      <BTDepositosAPlazo.PrecancelarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>MC</Device>
            <Requerimiento>1</Requerimiento>
            <Token>853547DAE3BFB2C1EC0A3148</Token>
         </Btinreq>
         <movimientoUId>14</movimientoUId>
         </Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-26</Fecha>
            <Hora>16:19:56</Hora>
            <Numero>30629</Numero>
            <Servicio>BTDepositosAPlazo.Precancelar</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.PrecancelarResponse>
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
    "movimientoUId": 14,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "3108",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.ObtenerDocumentoDigital",
        "Fecha": "2018-11-21",
        "Requerimiento": "1",
        "Hora": "12:09:09",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->
