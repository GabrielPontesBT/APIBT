---
title: Obtener Detalle de Orden de Cuenta
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
::: note Método para obtener la información de las líneas del detalle de orden de cuenta.

**Nombre publicación:** BTCASHManagement.ObtenerDetalleOrdenCuenta

**Programa:** RBTPGC23F

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
ordenId | Long | Identificador de orden.
clienteUId | Long | Identificador único de cliente.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
cuentaDebito | Long | Operación de débito.
cantidadLineas | Int | Cantidad de líneas del archivo.
moneda | Short | Moneda.
importe | Double | Importe total.
referencia | String | Referencia del pago o cobro.
fechaPago | Date | Fecha de pago o cobro.
estado | String | Estado del archivo.
erroresPago | String | Lista de mensajes del cabezal de pago.
detallePagos | [sBTDetallePago](#sbtdetallepago) | Lista de información del archivo con su estado y mensaje.

@tab Errores

Código | Descripción
:--------- | :-----------
1030712 | Se requiere cuenta para recuperar la información.
1030713 | El contrato consultado no corresponde a la cuenta recibida.
1030770 | No se recuperó información para la cuenta recibida.
1039999 | Error no clasificado
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
      <bts:BTCASHManagement.ObtenerDetalleOrdenCuenta>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>744307195e99865B3A2E76CF</bts:Token>
         </bts:Btinreq>
         <bts:ordenId>204</bts:ordenId>
         <bts:clienteUId>376</bts:clienteUId>
      </bts:BTCASHManagement.ObtenerDetalleOrdenCuenta>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?ObtenerDetalleOrdenCuenta=' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 5671946f-3030-43ca-9d7b-58d54d588d21,a454ff51-cf63-4795-a47b-05a16d861dcd' \
  -H 'cache-control: no-cache' \
  -d '{
	"Btinreq": {
		"Device": "GZ",
		"Usuario": "Instalador",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "ordenId": "204",
    "clienteUId": "376"
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
      <BTCASHManagement.ObtenerDetalleOrdenCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>Instalador</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>744307195e99865B3A2E76CF</Token>
         </Btinreq>
         <cuentaDebito>34</cuentaDebito>
         <cantidadLineas>3</cantidadLineas>
         <moneda>0</moneda>
         <importe>82</importe>
         <referencia/>
         <fechaPago>2023-09-04</fechaPago>
         <estado>P<estado/>
         <erroresPago/>
         <detallePagos/>
         <Erroresnegocio>
            <BTErrorNegocio>
               <Severidad/>
               <Descripcion/>
               <Codigo>0</Codigo>
            </BTErrorNegocio>
         </Erroresnegocio>
         <Btoutreq>
            <Numero>254019</Numero>
            <Estado>NEG_INFO</Estado>
            <Servicio>BTCASHManagement.ObtenerDetalleOrdenCuenta</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-11-27</Fecha>
            <Hora>14:57:02</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.ObtenerDetalleOrdenCuentaResponse>
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
    "cuentaDebito": 34,
    "cantidadLineas": 3,
    "moneda": 0,
    "importe": 82,
    "referencia": "",
    "fechaPago": "2023-09-04",
    "estado": "P",
    "erroresPago": "",
    "detallePagos": "",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 7174,
        "Estado": "OK",
        "Servicio": "BTCASHManagement.ObtenerDetalleOrdenCuenta",
        "Requerimiento": "1",
        "Fecha": "2019-04-24",
        "Hora": "15:23:16",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDetallePago  

### sBTDetallePago

::: center 
Los campos del tipo de dato estructurado sBTDetallePago son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
beneficiarioBanco | String | Banco del Beneficiario.
beneficiarioCuenta | String | Cuenta del Beneficiario.
beneficiarioId | String | Identificador de Beneficiario.
estado | String | Estado de la línea.
fechaPago | Date | Fecha de Pago o Cobro.
importe | Double | Importe.
mensajesError | String | Lista de mensajes de la línea.
moneda | Short | Moneda.
nombre | String | Nombre del Beneficiario de Pago.
:::
<!-- CIERRA SDT -->