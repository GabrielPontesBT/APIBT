---
title: Obtener Tasa Para Cliente
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
::: note Método para obtener la tasa parametrizada al cliente para el producto indicado, junto con la fecha de vigencia.

**Nombre publicación:** BTPrecios.ObtenerTasaCliente

**Programa:** RBTPG319

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador del cliente.
productoUId | Long | Identificador del producto.
fecha  | Date | Fecha del consulta.
importe  | Long | Importe a calcular.
plazo  | Int | Plazo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
tipoTasa  | String | Tipo de tasa.
tasa  | Double | Tasa.
tasaMinima | Double | Tasa mínima.
tasaMaxima | Double | Tasa máxima.
fechaVigencia | Date | Fecha de vigencia

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | Debe ingresar identificador de cliente.
30002 | Debe ingresar identificador de producto.
30003 | Debe ingresar fecha.
30004 | Debe ingresar importe.
30005 | Debe ingresar plazo.
40003 | No existe registro con la cuenta indicada.
40004 | No existe registro con el identificador indicado.
40005 | No se recibió identificador de cuenta a consultar.
41003 | No existe registro para el identificador único.
41004 | No existe registro para el producto indicado.
50001 | El registro no existe.
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
      <bts:BTPrecios.ObtenerTasaCliente>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1600460797F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10014</bts:clienteUId>
         <bts:productoUId>96</bts:productoUId>
         <bts:fecha>2021-11-11</bts:fecha>
         <bts:importe>10000</bts:importe>
         <bts:plazo>360</bts:plazo>
      </bts:BTPrecios.ObtenerTasaCliente>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerTasaCliente' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"bts:Btinreq": {
	  "bts:Canal": "BTDIGITAL",
	  "bts:Requerimiento": "1",
	  "bts:Usuario": "BANTOTAL",
	  "bts:Token": "1600460797F955E77534D3E0",
	  "bts:Device": "AC"
	},
	"clienteUId": 10014,
	"productoUId": 96,
	"fecha": "2021-11-11",
	"importe": 10000,
	"plazo": 360
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
      <BTPrecios.ObtenerTasaClienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1600460797F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <tipoTasa>Efectiva Anual</tipoTasa>
         <tasa>0.04</tasa>
         <tasaMinima>0.04</tasaMinima>
         <tasaMaxima>0.04</tasaMaxima>
		 <fechaVigencia>2021-11-11</fechaVigencia>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrecios.ObtenerTasaCliente</Servicio>
            <Fecha>2021-03-18</Fecha>
            <Hora>13:49:02</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8050</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrecios.ObtenerTasaClienteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1600460797F955E77534D3E0",
	  "Device": "AC"
	},
	"tipoTasa": "Efectiva Anual",
	"tasa": "0.04",
	"tasaMinima": "0.04",
	"tasaMaxima": "0.04",
	"fechaVigencia": "2021-11-11",
	"Erroresnegocio": {},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTPrecios.ObtenerTasaCliente",
	  "Fecha": "2021-03-18",
	  "Hora": "13:49:02",
	  "Requerimiento": "1",
	  "Numero": "8050",
	  "Estado": "OK"
	}
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->