---
title: Visualizar Lista Resumen Cabezal
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
::: note Método para visualizar una lista del resumen de información de archivos.

**Nombre publicación:** BTCASHManagement.VisualizarListaResumenCabezal

**Programa:** RBTPGC21

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador de la Cuenta Cliente.
contratoF | Long | Lista de identificadores de contratos CASH del cliente.
servicioF | Short | Servicio CASH.
estadoF | String | Estado del archivo.
fechaDesdeF | Date | Fecha de pago o cobro, desde.
fechaHastaF | Date | Fecha de pago o cobro, hasta.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
listaArchivos | [sBTResumenCabezal](#sbtresumencabezal) | Listado de cabezales solicitado.

@tab Errores

Código | Descripción
:--------- | :-----------
1030705 | Cuenta cliente sin contrato vinculado. 
1030708 | Estado de archivo desconocido. 
1030709 | Se requiere identificacion de cuenta cliente. 
1030712 | Se requiere cuenta para recuperar la informacion. 
1030714 | El contrato consultado no corresponde al servicio recibido. 
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
      <bts:BTCASHManagement.VisualizarListaResumenCabezal>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>311020191114150000216393</bts:Token>
            <bts:Device>001</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>1</bts:clienteUId>
         <bts:contratoF></bts:contratoF>
         <bts:servicioF></bts:servicioF>
         <bts:estadoF></bts:estadoF>
         <bts:fechaDesdeF></bts:fechaDesdeF>
         <bts:fechaHastaF></bts:fechaHastaF>
      </bts:BTCASHManagement.VisualizarListaResumenCabezal>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?VisualizarListaResumenCabezal \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"clienteUId":1,
	"contratoF": 
	{},
	"servicioF":0,
	"estadoF" : "",
	"fechaDesdeF" : "",
	"fechaHastaF" : ""
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
      <BTCASHManagement.VisualizarListaResumenCabezalResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>311020191114150000216393</Token>
            <Device>001</Device>
         </Btinreq>
         <listaArchivos>
            <sBTResumenCabezal>
               <archivoId>56</archivoId>
               <contratoId>7</contratoId>
               <servicio>20</servicio>
               <ordenId>121</ordenId>
               <cuentaDebito>1</cuentaDebito>
               <fechaPago>2019-11-29</fechaPago>
               <estado>N</estado>
               <cantidadLineas>6</cantidadLineas>
               <moneda>101</moneda>
               <importe>2600.00</importe>
               <referencia/>
               <nombreArchivo>Servicio20_001.csv</nombreArchivo>
               <mensajesError>
                  <item>El monto total es distinto al importe del cabezal</item>
               </mensajesError>
            </sBTResumenCabezal>
            <sBTResumenCabezal>
               <archivoId>57</archivoId>
               <contratoId>7</contratoId>
               <servicio>20</servicio>
               <ordenId>122</ordenId>
               <cuentaDebito>1</cuentaDebito>
               <fechaPago>2019-11-29</fechaPago>
               <estado>N</estado>
               <cantidadLineas>4</cantidadLineas>
               <moneda>101</moneda>
               <importe>2600.00</importe>
               <referencia/>
               <nombreArchivo>Servicio20_001.csv</nombreArchivo>
               <mensajesError></mensajesError>
            </sBTResumenCabezal>
            <sBTResumenCabezal>
               <archivoId>58</archivoId>
               <contratoId>7</contratoId>
               <servicio>20</servicio>
               <ordenId>123</ordenId>
               <cuentaDebito>1</cuentaDebito>
               <fechaPago>2019-11-29</fechaPago>
               <estado>P</estado>
               <cantidadLineas>4</cantidadLineas>
               <moneda>101</moneda>
               <importe>2600.00</importe>
               <referencia/>
               <nombreArchivo>Servicio20_001.csv</nombreArchivo>
               <mensajesError></mensajesError>
            </sBTResumenCabezal>
         </listaArchivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCASHManagement.VisualizarListaResumenCabezal</Servicio>
            <Fecha>2019-10-31</Fecha>
            <Hora>15:47:53</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>670</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCASHManagement.VisualizarListaResumenCabezalResponse>
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

	"listaArchivos": {
		"sBTResumenCabezal": [     
			{
				"archivoId": "56",
				"contratoId": "7",
				"servicio": "20",
				"ordenId": "121",
				"cuentaDebito": "1",
				"fechaPago": "2019-11-29",
				"estado": "N",
				"cantidadLineas": "6",
				"moneda": "101",
				"importe": "2600.00",
				"referencia": [],
				"nombreArchivo": "Servicio20_001.csv",
				"mensajesError":  
				{
					"item": "El monto total es distinto al importe del cabezal"
				}
			},     
			{
				"archivoId": "57",
				"contratoId": "7",
				"servicio": "20",
				"ordenId": "122",
				"cuentaDebito": "1",
				"fechaPago": "2019-11-29",
				"estado": "N",
				"cantidadLineas": "4",
				"moneda": "101",
				"importe": "2600.00",
				"referencia": [],
				"nombreArchivo": "Servicio20_001.csv",
				"mensajesError": []
			},     
			{
				"archivoId": "58",
				"contratoId": "7",
				"servicio": "20",
				"ordenId": "123",
				"cuentaDebito": "1",
				"fechaPago": "2019-11-29",
				"estado": "P",
				"cantidadLineas": "4",
				"moneda": "101",
				"importe": "2600.00",
				"referencia": [],
				"nombreArchivo": "Servicio20_001.csv",
				"mensajesError": []
			}
		]
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 46,
        "Servicio": "BTCASHManagement.VisualizarListaResumenCabezal",
        "Estado": "OK",
        "Fecha": "2019-10-24",
        "Requerimiento": "",
        "Hora": "20:55:06",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTResumenCabezal  

### sBTResumenCabezal

::: center 
Los campos del tipo de dato estructurado sBTResumenCabezal son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
archivoId | Long | Identificador de archivo.
cantidadLineas | Int | Cantidad de líneas del archivo.
contratoId | Int | Identificador del contrato CASH.
cuentaDebito | Long | Identificador único de la cuenta débito.
estado | String | Estado del archivo.
fechaPago | Date | Fecha de pago o cobro.
importe | Double | Importe total.
mensajesError | String | Lista de mensajes de la línea.
moneda | Short | Moneda.
nombreArchivo | String | Nombre del archivo.
ordenId | Long | Identificador de orden CASH.
referencia | String | Referencia del pago o cobro.
servicio | Short | Servicio CASH.
:::
<!-- CIERRA SDT -->