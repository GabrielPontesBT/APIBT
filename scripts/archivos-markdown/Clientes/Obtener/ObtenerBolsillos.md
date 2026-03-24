---
title: Obtener Bolsillos
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
::: note Método para obtener las cuentas bolsillo de un cliente.

**Nombre publicación:** BTClientes.ObtenerBolsillos

**Programa:** RBTPG617

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtProductosPasivos | [sBTProductoPasivo](#sbtproductopasivo) | Listado de bolsillos.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de cuenta.
30002 | No se recuperó la cuenta para el Identificador: [Número de identificador].
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
      <bts:BTClientes.ObtenerBolsillos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>CC6345192D8633F531F01D1D</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>322</bts:clienteUId>
      </bts:BTClientes.ObtenerBolsillos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerBolsillos' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "INSTALADOR",
	  "Token": "e2db881814CD285A89A23FBE",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"clienteUId": 322,
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
      <BTClientes.ObtenerBolsillosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>CC6345192D8633F531F01D1D</Token>
         </Btinreq>
         <sdtProductosPasivos>
            <sBTProductoPasivo>
               <tipoProducto>CB</tipoProducto>
               <estado>Normal</estado>
               <subCuenta/>
               <operacionUId>18766</operacionUId>
               <saldo>910000.00</saldo>
               <idOperacionFmt>000000029_010</idOperacionFmt>
               <idOperacionBT>0010100000221000000000000000002900010000000000002</idOperacionBT>
               <producto>
                  <moneda>$</moneda>
                  <papel/>
                  <productoUId>512</productoUId>
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre>
                  <otrosConceptos></otrosConceptos>
               </producto>
               <sucursal>Sucursal Ciudad de la Costa</sucursal>
            </sBTProductoPasivo>
         </sdtProductosPasivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>228501</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerBolsillos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-11-01</Fecha>
            <Hora>11:31:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerBolsillosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "INSTALADOR",
      "Token": "e2db881814CD285A89A23FBE",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtProductosPasivos": {
      "sBTProductoPasivo": [
      {
         "tipoProducto": "CB",
         "estado": "Normal",
         "subCuenta": "",
         "operacionUId": 18766,
         "saldo": 910000,
         "idOperacionFmt": "000000029_010",
         "idOperacionBT": 1.0100000221e+46,
         "producto": {
            "moneda": "$",
            "papel": "",
            "productoUId": 512,
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos",
            "otrosConceptos":""
         },
         "sucursal": "Sucursal Ciudad de la Costa"
      },
      ]
   },
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTClientes.ObtenerBolsillos",
      "Requerimiento": "1",
      "Fecha": "2023-10-11",
      "Canal": "BTDIGITAL",
      "Hora": "15:10:52"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTProductoPasivo  

### sBTProductoPasivo

::: center 
Los campos del tipo de dato estructurado sBTProductoPasivo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
estado | String | Descripción de estado. 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
operacionUId | Long | Identificador único de operación. 
producto | [sBTProducto](#sbtproducto) | Datos del Producto pasivo. 
saldo | Decimal | Saldo. 
subcuenta | String | Nombre de la cuenta vista. 
sucursal | String | Nombre de la sucursal de origen de la operación. 
tipoProducto | String | Tipo de producto pasivo (Cuenta Corriente: 'CC', Caja de Ahorro: 'CA'). 
 
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