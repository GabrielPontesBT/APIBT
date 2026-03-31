---
title: Obtener Préstamos Cancelados
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
::: note Método para obtener los productos de préstamo cancelados de un cliente.

**Nombre publicación:** BTClientes.ObtenerPrestamosCancelados

**Programa:** RBTPG219

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador de cliente.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPrestamos | [sBTPrestamoCancelado](#sbtprestamocancelado) | Listado de préstamos cancelados.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente.
30002 | No se recuperó la cuenta para el Identificador.
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
      <bts:BTClientes.ObtenerPrestamosCancelados>
         <bts:Btinreq>
            <bts:Device>MC</bts:Device>
            <bts:Token>b674899860CD285A89A23FBE</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:clienteUId>5</bts:clienteUId>
      </bts:BTClientes.ObtenerPrestamosCancelados>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPrestamosCancelados \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{	 
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "324915377F955E77534D3E02"
	},
    "clienteUId": "10010",
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
      <BTClientes.ObtenerPrestamosCanceladosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>MC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b674899860CD285A89A23FBE</Token>
         </Btinreq>
         <sdtPrestamos>
            <sBTPrestamoCancelado>
               <operacionUId>1</operacionUId>
               <idOperacionFmt>0000000170-000</idOperacionFmt>
               <idOperacionBT>0010000100101000000000000000002700000000000170003</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Sucursal Beta</sucursal>
               <fechaValor>2019-01-15</fechaValor>
               <fechaVencimiento>2020-01-15</fechaVencimiento>
               <fechaCancelacion>2020-01-15</fechaCancelacion>
            </sBTPrestamoCancelado>
         </sdtPrestamos>
         <Erroresnegocio/>
         <Btoutreq>
            <Numero>270</Numero>
            <Servicio>BTClientes.ObtenerPrestamosCancelados</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-04-13</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>10:42:34</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerPrestamosCanceladosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
	"Btinreq": { 
		"Device": "MC", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "b674899860CD285A89A23FBE" 
	}, 
	"sdtPrestamos": { 
		"sBTPrestamoCancelado": { 
			"operacionUId": "1", 
			"idOperacionFmt": "0000000170-000", 
			"idOperacionBT": "0010000100101000000000000000002700000000000170003", 
			"producto": { 
				"productoUId": "0", 
				"nombre": "PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad", 
				"moneda": "$", 
				"papel": "" 
			}, 
			"sucursal": "Sucursal Beta", 
			"fechaValor": "2019-01-15", 
			"fechaVencimiento": "2020-01-15", 
			"fechaCancelacion": "2020-01-15" 
		} 
	}, 
	"Erroresnegocio": "", 
	"Btoutreq": { 
		"Numero": "270", 
		"Servicio": "BTClientes.ObtenerPrestamosCancelados", 
		"Estado": "OK", 
		"Fecha": "2020-04-13", 
		"Requerimiento": "1", 
		"Hora": "10:42:34", 
		"Canal": "BTDIGITAL" 
	}, 
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPrestamoCancelado  

### sBTPrestamoCancelado

::: center 
Los campos del tipo de dato estructurado sBTPrestamoCancelado son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
fechaCancelacion | Date | Fecha de cancelación. 
fechaValor | Date | Fecha valor de la operación. 
fechaVencimiento | Date | Fecha de vencimiento. 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
idOperacionFMT | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
operacionUId | Long | Identificador único de operación. 
producto | [sBTProducto](#sbtproducto) | Datos del producto. 
sucursal | String | Nombre de la sucursal. 

### sBTProducto

::: center 
Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
moneda | String | Símbolo de la moneda. 
nombre | String | Nombre del producto. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Datos de otros conceptos.
papel | String | Símbolo del papel. 
productoUId | Long | Identificador único de producto. 

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.
:::
<!-- CIERRA SDT -->