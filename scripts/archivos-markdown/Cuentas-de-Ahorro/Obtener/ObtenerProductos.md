---
title: Obtener Productos
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
::: note Método para obtener un listado de los productos de cuenta de ahorro.

**Nombre publicación:** BTCuentasDeAhorro.ObtenerProductos

**Programa:** RBTPG054

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtProductos | [sBTProducto](#sbtproducto) | Listado de productos.

@tab Errores

No aplica.
::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCuentasDeAhorro.ObtenerProductos xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>be9fc8708b4A8B5C60A82434</Token> 
         </Btinreq> 
      </BTCuentasDeAhorro.ObtenerProductos> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
```

@tab JSON
```json
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasDeAhorro?ObtenerProductos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6bd8fd4d-69ed-56f1-79fc-8d458f726066' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
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
      <BTCuentasDeAhorro.ObtenerProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>be9fc8708b4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtProductos> 
            <sBTProducto> 
               <productoUId>1</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>2</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>3</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Jurídica</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>4</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Jurídica</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            ...
         </sdtProductos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>988</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasDeAhorro.ObtenerProductos</Servicio> 
            <Requerimiento/> 
            <Fecha>2017-12-22</Fecha> 
            <Hora>17:52:40</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasDeAhorro.ObtenerProductosResponse> 
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
    "sdtProductos": { 
        "sBTProducto": [ 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "1", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "2", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
            }, 
            ...
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "989", 
        "Estado": "OK", 
        "Servicio": "BTCuentasDeAhorro.ObtenerProductos", 
        "Requerimiento": "", 
        "Fecha": "2017-12-22", 
        "Hora": "17:55:13", 
        "Canal": "BTDIGITAL" 
    } 
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTProducto  

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