---
title: Crear
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
::: note Método para dar de alta una tarjeta de débito para un cliente.

**Nombre publicación:** BTTarjetasDeDebito.Crear

**Programa:** RBTPG066

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
operacionUId | Long | Identificador único de operación de la cuenta a la que se asociará la tarjeta.
tipoTarjeta | String | Tipo de tarjeta.
nombreTarjeta | String | Nombre de tarjeta.
codigoDomicilio | Byte | Código de domicilio a donde se asociará la tarjeta.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
tarjetaUID | Long | Identificador único de tarjeta.
tarjetaNumero | String | Número de tarjeta.
fechaVencimiento | Date | Fecha de vencimiento.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente.
30002 | No se recuperó la cuenta para el identificador de cliente: 
30003 | No se recibió el identificador de operación.
30004 | No se recuperó la operación para el identificador.
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
      <bts:BTTarjetasDeDebito.Crear>
         <bts:Btinreq>
            <bts:Device>10.12.10.159</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>c7b24221f2F955E77534D3E0</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>1</bts:clienteUId>
         <bts:operacionUId>1</bts:operacionUId>
         <bts:tipoTarjeta>N</bts:tipoTarjeta>
         <bts:nombreTarjeta>prueba</bts:nombreTarjeta>
         <bts:codigoDomicilio>1</bts:codigoDomicilio>
      </bts:BTTarjetasDeDebito.Crear>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?Crear' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 19f16614-b11e-9eaf-4034-1d7994c6019f' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "clienteUId": 1,
   "tipoTarjeta": "N",
   "nombreTarjeta": "prueba",
   "operacionUId": 1,
   "codigoDomicilio": 1
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
      <BTTarjetasDeDebito.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>c7b24221f2F955E77534D3E0</Token>
         </Btinreq>
         <tarjetaUID>109</tarjetaUID>
         <tarjetaNumero>4203213220220014240</tarjetaNumero>
         <fechaVencimiento>2027-06-30</fechaVencimiento>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>462</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTarjetasDeDebito.Crear</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-02-25</Fecha>
            <Hora>17:25:06</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.CrearResponse>
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
   "tarjetaUID": 110,
   "tarjetaNumero": "4203213220220014259",
   "fechaVencimiento": "2027-06-30",
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": 463,
      "Estado": "OK",
      "Servicio": "BTTarjetasDeDebito.Crear",
      "Requerimiento": "1",
      "Fecha": "2019-02-25",
      "Hora": "17:29:49",
      "Canal": "BTDIGITAL"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->