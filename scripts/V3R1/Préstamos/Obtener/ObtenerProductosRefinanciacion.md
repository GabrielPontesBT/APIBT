---
title: Obtener Productos Refinanciación
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

<!-- ABRE LOS DATOS DEL MÉTODO -->
::: note Método para obtener los productos de refinanciación.

**Nombre publicación:** BTPrestamos.ObtenerProductosRefinanciacion

**Programa:** RBTPG546

**Global/País:** Global
:::
<!-- CIERRA LOS DATOS DEL MÉTODO -->

<!-- ABRE LA TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtOperacionesARefinanciar | [sBTPrestamos](#sBTPrestamos) | Datos de las operaciones a refinanciar.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtProductos | [sBTProducto](#sBTProducto) | Listados de los datos de producto.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente.
30002 | No se recuperó la cuenta para el Identificador: [Número de Identificador].
30003 | No se indicaron operaciones a refinanciar.
30004 | No se recuperó la operación para el identificador: [Número de Identificador].
:::
<!-- CIERRA LA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerProductosRefinanciacion>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>89B4F6D7BEFB0C7F653DB37A</bts:Token>
         </bts:Btinreq>
         <bts:sdtOperacionesARefinanciar>
            <bts:clienteUId>4</bts:clienteUId>
            <bts:fecha>2024-06-12</bts:fecha>
            <bts:operaciones>
               <bts:operacionUId>3</bts:operacionUId>
            </bts:operaciones>
         </bts:sdtOperacionesARefinanciar>
      </bts:BTPrestamos.ObtenerProductosRefinanciacion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerProductosRefinanciacion' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "AC",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "sdtOperacionesARefinanciar": {
        "clienteUId": 4,
        "fecha": "2024-06-12",
        "operaciones": {
        "operacionUId": 3
        }
    }
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
      <BTPrestamos.ObtenerProductosRefinanciacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>89B4F6D7BEFB0C7F653DB37A</Token>
         </Btinreq>
         <sdtProductos>
            <sBTProducto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>60</productoUId>
               <nombre>Crédito Francés REEST</nombre>
            </sBTProducto>
            <sBTProducto>
               <moneda>$</moneda>
               <papel>UI</papel>
               <productoUId>61</productoUId>
               <nombre>Crédito Francés REEST</nombre>
            </sBTProducto>
            <sBTProducto>
               <moneda>USD</moneda>
               <papel>$</papel>
               <productoUId>62</productoUId>
               <nombre>Crédito Francés REEST</nombre>
            </sBTProducto>
         </sdtProductos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>726669</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerProductosRefinanciacion</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2024-05-14</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:52:37</Hora>
         </Btoutreq>
      </BTPrestamos.ObtenerProductosRefinanciacionResponse>
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
	"sdtProductos": {
        "sBTProducto": [
        {
            "moneda": "$",
            "papel": "$",
            "productoUId": 60,
            "nombre": "Crédito Francés REEST"
        },
        {
            "moneda": "$",
            "papel": "UI",
            "productoUId": 61,
            "nombre": "Crédito Francés REEST"
        },
        {
            "moneda": "USD",
            "papel": "$",
            "productoUId": 62,
            "nombre": "Crédito Francés REEST"
        }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTPrestamos.ObtenerProductosRefinanciacion",
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

::: details sBTPrestamos  

### sBTPrestamos

::: center 
Los campos del tipo de dato estructurado sBTPrestamos son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
fecha | Date | Fecha.
operaciones | Long | Lista de idententificares de operaciones.
:::

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