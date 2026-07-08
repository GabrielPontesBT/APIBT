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
::: note Método para obtener un listado de los productos de préstamos.

**Nombre publicación:** BTPrestamos.ObtenerProductos

**Programa:** RBTPG078

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
      <bts:BTPrestamos.ObtenerProductos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>7f582501004A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTPrestamos.ObtenerProductos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerProductos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 20394f02-93fd-01a3-c079-81b84239bc48' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 0,
		"Canal": "BTDIGITAL",
		"Token": "7f582501004A8B5C60A82434"
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
      <BTPrestamos.ObtenerProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>7f582501004A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductos>
            <sBTProducto>
               <productoUId>61</productoUId>
               <nombre>Amortización Automática TF</nombre>
               <moneda>$</moneda>
               <papel/>
               <otrosConceptos>
                  <concepto></concepto>
                  <texto></texto>
                  <valor>0</valor>
               </otrosConceptos>
            </sBTProducto>
         </sdtProductos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>723</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerProductos</Servicio>
            <Fecha>2017-11-24</Fecha>
            <Requerimiento/>
            <Hora>13:09:53</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerProductosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
@tab JSON
```json
{
  "Btinreq": {
    "Device": "AV",
    "Usuario": "MINSTALADOR",
    "Requerimiento": 1,
    "Canal": "BTDIGITAL",
    "Token": "fa2c02c95a4A8B5C60A82434"
  },
  "sdtProductos": {
    "sBTProducto": [
      {
        "papel": "",
        "moneda": "$",
        "productoUId": 61,
        "nombre": "Amortización Automática TF",
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
    "Numero": 723,
    "Estado": "OK",
    "Servicio": "BTPrestamos.ObtenerProductos",
    "Fecha": "2017-11-24",
    "Requerimiento": 0,
    "Hora": "13:09:53",
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

