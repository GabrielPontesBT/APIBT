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
::: note Método para obtener un listado de los productos de cuentas bolsillo habilitados.

**Nombre publicación:** BTCuentasBolsillo.ObtenerProductos

**Programa:** RBTPG608

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
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasBolsillo.ObtenerProductos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>A511D678BEE7D9654933B7EB</bts:Token>
         </bts:Btinreq>
      </bts:BTCuentasBolsillo.ObtenerProductos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasBolsillo?ObtenerProductos' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "INSTALADOR",
        "Token": "A511D678BEE7D9654933B7EB"
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
      <BTCuentasBolsillo.ObtenerProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>A511D678BEE7D9654933B7EB</Token>
         </Btinreq>
         <sdtProductos>
            <sBTProducto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>511</productoUId>
               <nombre>CUENTAS BOLSILLO, Bolsillo Ahorro</nombre>
               <otrosConceptos/>
            </sBTProducto>
            <sBTProducto>
               <moneda>USD</moneda>
               <papel>$</papel>
               <productoUId>531</productoUId>
               <nombre>CUENTAS BOLSILLO, Bolsillo Ahorro</nombre>
               <otrosConceptos/>
            </sBTProducto>
            <sBTProducto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>512</productoUId>
               <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre>
               <otrosConceptos/>
            </sBTProducto>
            <sBTProducto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>532</productoUId>
               <nombre>CUENTAS BOLSILLO, Bolsillo Viajes</nombre>
               <otrosConceptos/>
            </sBTProducto>
         </sdtProductos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>228456</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasBolsillo.ObtenerProductos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-10-31</Fecha>
            <Hora>15:32:03</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasBolsillo.ObtenerProductosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Device": "GZ",
    "Usuario": "INSTALADOR",
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Token": "A511D678BEE7D9654933B7EB"
  },
  "sdtProductos": {
    "sBTProducto": [
      {
        "moneda": "$",
        "papel": "$",
        "productoUId": 511,
        "nombre": "CUENTAS BOLSILLO, Bolsillo Ahorro",
        "otrosConceptos": {
          "concepto": "",
          "texto": "",
          "valor": 0
        }
      },
      {
        "moneda": "USD",
        "papel": "$",
        "productoUId": 531,
        "nombre": "CUENTAS BOLSILLO, Bolsillo Ahorro",
        "otrosConceptos": {
          "concepto": "",
          "texto": "",
          "valor": 0
        }
      },
      {
        "moneda": "$",
        "papel": "$",
        "productoUId": 512,
        "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos",
        "otrosConceptos": {
          "concepto": "",
          "texto": "",
          "valor": 0
        }
      },
      {
        "moneda": "$",
        "papel": "$",
        "productoUId": 532,
        "nombre": "CUENTAS BOLSILLO, Bolsillo Viajes",
        "otrosConceptos": {
          "concepto": "",
          "texto": "",
          "valor": 0
        }
      }
    ]
  },
  "Erroresnegocio": {
    "BTErrorNegocio": []
  },
  "Btoutreq": {
    "Numero": 228456,
    "Estado": "OK",
    "Servicio": "BTCuentasBolsillo.ObtenerProductos",
    "Requerimiento": 0,
    "Fecha": "2023-10-31",
    "Hora": "15:32:03",
    "Canal": "BTDIGITAL"
  }
}
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
:::

::: details sBTConcepto

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

