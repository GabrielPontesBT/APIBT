---
title: Obtener Préstamos de Cliente
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
::: note Método para obtener los préstamos de un cliente del Partner.

**Nombre publicación:** BTPartners.ObtenerPrestamosCliente

**Programa:** RBTPN013

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPartner | [sBTPartnerInReq](#sbtpartnerinreq) | Datos del usuario.
clienteUId | Long | Identificador único del cliente.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
prestamos | [sBTProductoPrestamo](#sbtproductoprestamo) | Listado de préstamos.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de cuenta.
30002 | No se recuperó la cuenta para el Identificador: [Número de Identificador].
30003 | No se recibió Partner ni canal.
30004 | El Partner no se encuentra habilitado.
30005 | No existe Partner con ese identificador.
30014 | No se recibió punto de venta.
30015 | No se recibió vendedor.
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
      <bts:BTPartners.ObtenerPrestamosCliente>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1222A10B1A106FB813BD7AE9</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>2</bts:puntoVentaUId>
            <bts:vendedorUId>0</bts:vendedorUId>
            <bts:partnerUId>1</bts:partnerUId>
         </bts:sdtPartner>
         <bts:clienteUId>359</bts:clienteUId>
      </bts:BTPartners.ObtenerPrestamosCliente>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ObtenerPrestamosCliente' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "3JPL6DC33CD84655A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
   "sdtPartner": {
      "puntoVentaUId": 2,
      "vendedorUId": 0,
      "partnerUId": 1
   },
   "clienteUId": 359
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
      <BTPartners.ObtenerPrestamosClienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1222A10B1A106FB813BD7AE9</Token>
         </Btinreq>
         <prestamos>
            <sBTProductoPrestamo>
               <operacionUId>1</operacionUId>
               <idOperacionFmt>0000000170-000</idOperacionFmt>
               <idOperacionBT>0010000100101000000000000000002700000000000170003</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad</nombre>
                  <moneda>$</moneda>
                  <papel/>
                  <otrosConceptos></otrosConceptos>
               </producto>
               <sucursal>Sucursal Beta</sucursal>
               <saldo>87128.11</saldo>
               <estado/>
            </sBTProductoPrestamo>
            <sBTProductoPrestamo>
               <operacionUId>2</operacionUId>
               <idOperacionFmt>0000000080-000</idOperacionFmt>
               <idOperacionBT>0010100000101000000000000000002700000000000080001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
                  <moneda>$</moneda>
                  <papel/>
                  <otrosConceptos></otrosConceptos>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <saldo>124195.84</saldo>
               <estado/>
            </sBTProductoPrestamo>
            <sBTProductoPrestamo>
               <operacionUId>361</operacionUId>
               <idOperacionFmt>0000000412-000</idOperacionFmt>
               <idOperacionBT>0010100000101000000000000000002700000000000412003</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad</nombre>
                  <moneda>$</moneda>
                  <papel/>
                  <otrosConceptos></otrosConceptos>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <saldo>100000.00</saldo>
               <estado/>
            </sBTProductoPrestamo>
         </prestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPartners.ObtenerPrestamosCliente</Servicio>
            <Fecha>2021-03-18</Fecha>
            <Hora>10:03:41</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8032</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPartners.ObtenerPrestamosClienteResponse>
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
    "prestamos": {
         "sBTProductoPrestamo": [
         {
            "operacionUId": 1,
            "idOperacionFmt": "0000000170-000",
            "idOperacionBT": 1.0000100101e+46,
            "producto": {
               "productoUId": 0,
               "nombre": "PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad",
               "moneda": "$",
               "papel": "",
               "otrosConceptos":""
            },
            "sucursal": "Sucursal Beta",
            "saldo": 87128.11,
            "estado": ""
         },
         {
            "operacionUId": 2,
            "idOperacionFmt": "0000000080-000",
            "idOperacionBT": 1.0100000101e+46,
            "producto": {
               "productoUId": 0,
               "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF",
               "moneda": "$",
               "papel": "",
               "otrosConceptos":""
            },
            "sucursal": "Casa Matriz",
            "saldo": 124195.84,
            "estado": ""
         },
         {
            "operacionUId": 361,
            "idOperacionFmt": "0000000412-000",
            "idOperacionBT": 1.0100000101e+46,
            "producto": {
               "productoUId": 0,
               "nombre": "PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad",
               "moneda": "$",
               "papel": "",
               "otrosConceptos":""
            },
            "sucursal": "Casa Matriz",
            "saldo": 100000,
            "estado": ""
         }
         ]
      },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "786",
        "Estado": "OK",
        "Servicio": "BTPartners.ObtenerPrestamosCliente",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "16:35:22",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPartnerInReq  

### sBTPartnerInReq

::: center 
Los campos del tipo de dato estructurado sBTPartnerInReq son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
partnerUId | Int | Identificador del Partner.
puntoVentaUId | Int | Identificador del punto de venta.
vendedorUId | Int | Identificador del vendedor.
:::

::: details sBTProductoPrestamo  

### sBTProductoPrestamo

::: center 
Los campos del tipo de dato estructurado sBTProductoPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
estado | String | Descripción de estado.
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación).
operacionUId | Long | Identificador único de operación.
producto | [sBTProducto](#sbtproducto) | Datos del producto.
saldo | Double | Capital.
sucursal | String | Nombre de la sucursal.

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