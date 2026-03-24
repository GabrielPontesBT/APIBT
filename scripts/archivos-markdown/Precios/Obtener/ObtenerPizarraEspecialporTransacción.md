---
title: Obtener Pizarra Especial por Transacción
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
::: note Método para obtener la pizarra especial para una transacción.

**Nombre publicación:** BTPrecios.ObtenerPizarraEspecialPorTransaccion

**Programa:** RBTPG355

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
modulo | Int | Código de módulo Bantotal.
transaccion | Int | Código de transacción Bantotal.
monedaId | Short | Identificador de moneda.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
arbitrajeCompra | Double | Valor del arbitraje (Compra).
arbitrajeVenta | Double | Valor del arbitraje (Venta).
tipoCambioCompra | Double | Valor del tipo de cambio (Compra).
tipoCambioVenta | Double | Valor del tipo de cambio (Venta).

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | Debe ingresar transacción Bantotal.
30002 | Debe ingresar módulo Bantotal.
30003 | La moneda ingresada no existe.
30004 | El módulo ingresado no existe.
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
      <bts:BTPrecios.ObtenerPizarraEspecialPorTransaccion>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>361</bts:clienteUId>
         <bts:modulo>50</bts:modulo>
         <bts:transaccion>100</bts:transaccion>
         <bts:monedaId>2222</bts:monedaId>
      </bts:BTPrecios.ObtenerPizarraEspecialPorTransaccion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios?ObtenerPizarraEspecialPorTransaccion=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId":"361",
    "modulo":"50",
    "transaccion":"100",
    "monedaId":"2222"
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
      <BTPrecios.ObtenerPizarraEspecialPorTransaccionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <arbitrajeCompra>1.00</arbitrajeCompra>
         <arbitrajeVenta>1.00</arbitrajeVenta>
         <tipoCambioCompra>19.10</tipoCambioCompra>
         <tipoCambioVenta>19.75</tipoCambioVenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>898</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrecios.ObtenerPizarraEspecialPorTransaccion</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>11:44:49</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrecios.ObtenerPizarraEspecialPorTransaccionResponse>
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
	"arbitrajeCompra":"1.00",
	"arbitrajeVenta":"1.00",
	"tipoCambioCompra":"19.10",
	"tipoCambioVenta":"19.75",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "901",
        "Estado": "OK",
        "Servicio": "BTPrecios.ObtenerPizarraEspecialPorTransaccion",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "12:27:52",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->