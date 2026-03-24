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
::: note Método para obtener una lista de los productos de préstamos.

**Nombre publicación:** BTMicrofinanzas.ObtenerProductos

**Programa:** RBTPG414

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
solicitudUId | Long | Identificador único de solicitud.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
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
      <bts:BTMicrofinanzas.ObtenerProductos>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>419385365CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:solicitudUId>10862</bts:solicitudUId>
      </bts:BTMicrofinanzas.ObtenerProductos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerProductos \
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
        "solicitudUId": "10862"
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
      <BTMicrofinanzas.ObtenerProductosResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>419385365CD285A89A23FBEE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtProductos>
            <Producto>
               <productoUId>1</productoUId>
               <nombre>AGRICOLA PLAN DE PAGOS K + I</nombre>
               <moneda>Q</moneda>
               <papel/>
               <otrosConceptos></otrosConceptos>
            </Producto>
            <Producto>
               <productoUId>2</productoUId>
               <nombre>AGRICOLA PLAN DE PAGOS LIBRE</nombre>
               <moneda>Q</moneda>
               <papel/>
               <otrosConceptos></otrosConceptos>
            </Producto>
            <Producto>
               <productoUId>3</productoUId>
               <nombre>AGRICOLA PP LIBRE RECUPERADOS</nombre>
               <moneda>Q</moneda>
               <papel/>
               <otrosConceptos></otrosConceptos>
            </Producto>
            <Producto>
               <productoUId>4</productoUId>
               <nombre>AGRICOLA CREDI - AGRO MENOR</nombre>
               <moneda>Q</moneda>
               <papel/>
               <otrosConceptos></otrosConceptos>
            </Producto>
            <Producto>
               <productoUId>21</productoUId>
               <nombre>CADENA DE VALOR CAFE DIF.</nombre>
               <moneda>Q</moneda>
               <papel/>
               <otrosConceptos></otrosConceptos>
            </Producto>
            <Producto>
               <productoUId>22</productoUId>
               <nombre>CADENA DE VALOR CREDI-BRÓCOLI</nombre>
               <moneda>Q</moneda>
               <papel/>
               <otrosConceptos></otrosConceptos>
            </Producto>
            <Producto>
               <productoUId>23</productoUId>
               <nombre>VIVIENDA HIPOTECARIO</nombre>
               <moneda>Q</moneda>
               <papel/>
               <otrosConceptos></otrosConceptos>
            </Producto>
            <Producto>
               <productoUId>24</productoUId>
               <nombre>VIVIENDA HIPOTECARIO LIBRE</nombre>
               <moneda>Q</moneda>
               <papel/>
               <otrosConceptos></otrosConceptos>
            </Producto>
         </sdtProductos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ObtenerProductos</Servicio>
            <Fecha>2019-09-18</Fecha>
            <Hora>15:56:50</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>161</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerProductosResponse>
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
          "Producto": [
            {
              "productoUId": "1",
              "nombre": "AGRICOLA PLAN DE PAGOS K + I",
              "moneda": "Q",
              "otrosConceptos":"",
              "papel": "$"
            },
            {
              "productoUId": "2",
              "nombre": "AGRICOLA PLAN DE PAGOS LIBRE",
              "moneda": "Q",
              "otrosConceptos":"",
              "papel": "$"
            },
            {
              "productoUId": "3",
              "nombre": "AGRICOLA PP LIBRE RECUPERADOS",
              "moneda": "Q",
              "otrosConceptos":"",
              "papel": "$"
            },
            {
              "productoUId": "4",
              "nombre": "AGRICOLA CREDI - AGRO MENOR",
              "moneda": "Q",
              "otrosConceptos":"",
              "papel": "$"
            },
            {
              "productoUId": "21",
              "nombre": "CADENA DE VALOR CAFE DIF.",
              "moneda": "Q",
              "otrosConceptos":"",
              "papel": "$"
            },
            {
              "productoUId": "22",
              "nombre": "CADENA DE VALOR CREDI-BRÓCOLI",
              "moneda": "Q",
              "otrosConceptos":"",
              "papel": "$"
            },
            {
              "productoUId": "23",
              "nombre": "VIVIENDA HIPOTECARIO",
              "moneda": "Q",
              "otrosConceptos":"",
              "papel": "$"
            },
            {
              "productoUId": "24",
              "nombre": "VIVIENDA HIPOTECARIO LIBRE",
              "moneda": "Q",
              "otrosConceptos":"",
              "papel": "$"
            }
          ]
        },
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTMicrofinanzas.ObtenerProductos",
          "Fecha": "2019-09-18",
          "Hora": "15:56:50",
          "Requerimiento": "95",
          "Numero": "161",
          "Estado": "OK"
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
:--------- | :----------- | :----------- 
moneda | String | Símbolo de la moneda. 
nombre | String | Nombre del producto. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Datos de otros conceptos.
papel | String | Símbolo del papel. 
productoUId | Long | Identificador único de producto. 

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.
:::
<!-- CIERRA SDT -->