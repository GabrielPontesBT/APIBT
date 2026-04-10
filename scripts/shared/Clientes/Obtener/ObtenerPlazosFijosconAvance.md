---
title: Obtener Plazos Fijos con Avance
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
::: note Método para obtener los productos de depósito a plazo fijo que tiene contratado un cliente, con su correspondiente avance.

**Nombre publicación:** BTClientes.ObtenerPlazosFijosConAvance

**Programa:** RBTPG403

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :---------  
Correlativo 1 | 3
Correlativo 2 | 1 
Valor específico 1 | Identificador del módulo a incluir. 

Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :---------  
Correlativo 1 | 3
Correlativo 2 | 2 
Valor específico 1 | Módulo del tipo de operación a excluir. 
Valor específico 2 | Tipo de operación a excluir.	 

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtProductosPlazoFijo | [sBTProductoPlazoFijo](#sbtproductoplazofijo) | Listado de plazos fijos.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente.
30002 | No se recuperó la cuenta para el Identificador: [Número de identificador]
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
      <bts:BTClientes.ObtenerPlazosFijosConAvance>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1152085960F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10010</bts:clienteUId>
      </bts:BTClientes.ObtenerPlazosFijosConAvance>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPlazosFijosConAvance=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
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
      <BTClientes.ObtenerPlazosFijosConAvanceResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1152085960F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtProductosPlazoFijo>
            <sBTProductoPlazoFijo>
               <operacionUId>10108</operacionUId>
               <idOperacionFmt>0000000292_000</idOperacionFmt>
               <idOperacionBT>0010000100022000000000000000002700000000000292001</idOperacionBT>
               <producto>
                  <moneda>$</moneda>
                  <otrosConceptos></otrosConceptos>
                  <papel>$</papel>
                  <productoUId>82</productoUId>
                  <nombre>Ahorro en Sueldo Pesos</nombre>
               </producto>
               <sucursal>Sucursal Beta</sucursal>
               <saldo>1000.00</saldo>
               <estado>Normal</estado>
               <fechaAlta>2018-10-15</fechaAlta>
               <fechaVencimiento>2019-10-15</fechaVencimiento>
               <plazoTotal>360</plazoTotal>
               <plazoTranscurrido>507</plazoTranscurrido>
               <porcentajeAvance>100.000000</porcentajeAvance>
            </sBTProductoPlazoFijo>
            <sBTProductoPlazoFijo>
               <operacionUId>7</operacionUId>
               <idOperacionFmt>0000000028_000</idOperacionFmt>
               <idOperacionBT>0010100000022000000000000000002700000000000028001</idOperacionBT>
               <producto>
                  <moneda>$</moneda>
                  <otrosConceptos></otrosConceptos>
                  <papel>$</papel>
                  <productoUId>82</productoUId>
                  <nombre>Ahorro en Sueldo Pesos</nombre>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <saldo>15000.00</saldo>
               <estado>Normal</estado>
               <fechaAlta>2018-08-16</fechaAlta>
               <fechaVencimiento>2019-08-12</fechaVencimiento>
               <plazoTotal>361</plazoTotal>
               <plazoTranscurrido>567</plazoTranscurrido>
               <porcentajeAvance>100.000000</porcentajeAvance>
            </sBTProductoPlazoFijo>
            <sBTProductoPlazoFijo>
               <operacionUId>8</operacionUId>
               <idOperacionFmt>0000000085_000</idOperacionFmt>
               <idOperacionBT>0010100000022000000000000000002700000000000085001</idOperacionBT>
               <producto>
                  <moneda>$</moneda>
                  <otrosConceptos></otrosConceptos>
                  <papel>$</papel>
                  <productoUId>82</productoUId>
                  <nombre>Ahorro en Sueldo Pesos</nombre>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <saldo>1500000.00</saldo>
               <estado>Normal</estado>
               <fechaAlta>2015-12-28</fechaAlta>
               <fechaVencimiento>2016-12-22</fechaVencimiento>
               <plazoTotal>360</plazoTotal>
               <plazoTranscurrido>1529</plazoTranscurrido>
               <porcentajeAvance>100.000000</porcentajeAvance>
            </sBTProductoPlazoFijo>
         </sdtProductosPlazoFijo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTClientes.ObtenerPlazosFijosConAvance</Servicio>
            <Fecha>2020-04-20</Fecha>
            <Hora>18:06:18</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7333</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTClientes.ObtenerPlazosFijosConAvanceResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": 1, 
        "Usuario": "BANTOTAL", 
        "Token": "324915377F955E77534D3E02", 
        "Device": "AC" 
    }, 
    "sdtProductosPlazoFijo": { 
		"sBTProductoPlazoFijo": [ 
		  { 
			"operacionUId": "10108", 
			"idOperacionFmt": "0000000292_000", 
			"idOperacionBT": "0010000100022000000000000000002700000000000292001", 
			"producto": {
            "moneda": "$",
            "otrosConceptos":"",
            "papel": "$",
            "productoUId": 82,
            "nombre": "Ahorro en Sueldo Pesos"
          },
			"sucursal": "Sucursal Beta", 
			"saldo": "1000.00", 
			"estado": "Normal", 
			"fechaAlta": "2018-10-15", 
			"fechaVencimiento": "2019-10-15", 
			"plazoTotal": "360", 
			"plazoTranscurrido": "507", 
			"porcentajeAvance": "100.000000" 
		  }, 
		  { 
			"operacionUId": "7", 
			"idOperacionFmt": "0000000028_000", 
			"idOperacionBT": "0010100000022000000000000000002700000000000028001", 
			"producto": {
            "moneda": "$",
            "otrosConceptos":"",
            "papel": "$",
            "productoUId": 82,
            "nombre": "Ahorro en Sueldo Pesos"
          },
			"sucursal": "Casa Matriz", 
			"saldo": "15000.00", 
			"estado": "Normal", 
			"fechaAlta": "2018-08-16", 
			"fechaVencimiento": "2019-08-12", 
			"plazoTotal": "361", 
			"plazoTranscurrido": "567", 
			"porcentajeAvance": "100.000000" 
		  }, 
		  { 
			"operacionUId": "8", 
			"idOperacionFmt": "0000000085_000", 
			"idOperacionBT": "0010100000022000000000000000002700000000000085001", 
			"producto": {
            "moneda": "$",
            "otrosConceptos":"",
            "papel": "$",
            "productoUId": 82,
            "nombre": "Ahorro en Sueldo Pesos"
          },
			"sucursal": "Casa Matriz", 
			"saldo": "1500000.00", 
			"estado": "Normal", 
			"fechaAlta": "2015-12-28", 
			"fechaVencimiento": "2016-12-22", 
			"plazoTotal": "360", 
			"plazoTranscurrido": "1529", 
			"porcentajeAvance": "100.000000" 
		  } 
		] 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTClientes.ObtenerPlazosFijosConAvance", 
        "Fecha": "2019-11-19", 
        "Hora": "13:05:22", 
        "Requerimiento": 1, 
        "Numero": 6924, 
        "Estado": "OK" 
    } 
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTProductoPlazoFijo  

### sBTProductoPlazoFijo

::: center 
Los campos del tipo de dato estructurado sBTProductoPlazoFijo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
estado | String | Descripción de estado de la operación. 
fechaAlta | Date | Fecha de alta de la operación. 
fechaVencimiento | Date | Fecha de vencimiento de la operación. 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
operacionUId | Long | Identificador. 
plazoTotal | Int | Plazo total de la operación. 
plazoTranscurrido | Int | Plazo transcurrido desde la fecha de alta de la operación. 
porcentajeAvance | Double | Porcentaje de avance. 
producto | [sBTProducto](#sbtproducto) | Datos del producto. 
saldo | Double | Saldo de la operación. 
sucursal | String | Nombre de la sucursal de alta. 
 
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