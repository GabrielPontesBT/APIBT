---
title: Obtener Cuentas Origen Habilitadas
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
::: note Método para obtener un listado de cuentas habilitadas para debitar periódicamente.

**Nombre publicación:** BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas

**Programa:** RBTPG111

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
clienteUId | Long | Identificador único de cliente.
productoUId | Long | Identificador único de producto.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtCuentas | [sBTProductoPasivo](#sbtproductopasivo) | Listado de cuentas habilitadas para origen del ahorro.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de la persona.
30002 | No se recibió el identificador del cliente.
30003 | No se recibió el identificador del producto de ahorro.
30004 | No se recuperó el producto de ahorro para el identificador: [Número de identificador].
30005 | No se recuperó la persona para el identificador: [Número de identificador].
30006 | No se recuperó la cuenta para el identificador de cliente: [Número de identificador].
40001 | El producto seleccionado no corresponde a un producto de ahorro.
40002 | La persona seleccionada no integra la cuenta-cliente.
40101 | El cliente no se encuentra facultado para operar con cuenta vista.
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
      <bts:BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>2</bts:personaUId>
         <bts:clienteUId>81</bts:clienteUId>
         <bts:productoUId>41</bts:productoUId>
      </bts:BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerCuentasOrigenHabilitadas' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
		"personaUId": 2,
		"clienteUId": 81,
		"productoUId": 41
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
      <BTAhorroProgramado.ObtenerCuentasOrigenHabilitadasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f2f7be2ebc4A8B5C60A82434</Token>
         </Btinreq>
         <sdtCuentas>
            <sBTProductoPasivo>
               <operacionUId>21</operacionUId>
               <idOperacionFmt>000000028_001</idOperacionFmt>
               <idOperacionBT>0010010210000000000000028001000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
                  <otrosConceptos/>
               </producto>
               <tipoProducto>CA</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subcuenta>Mi account 1</subcuenta>
               <saldo>10000000.00</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
         </sdtCuentas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>371</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-04-30</Fecha>
            <Hora>11:32:24</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ObtenerCuentasOrigenHabilitadasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtCuentas": {
        "sBTProductoPasivo": [
            {
                "tipoProducto": "CA",
                "estado": "Normal",
                "subcuenta": "Mi account 1",
                "operacionUId": 21,
                "saldo": 10000000.00,
                "idOperacionFmt": "000000028_001",
                "idOperacionBT": "0010010210000000000000028001000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": 0,
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física"
                },
                "sucursal": "Casa Matriz"
            },
            {
                "tipoProducto": "CA",
                "estado": "Normal",
                "subcuenta": "Mi account 2",
                "operacionUId": 81,
                "saldo": 0.00,
                "idOperacionFmt": "000000028_002",
                "idOperacionBT": "0010010210000000000000028002000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": 0,
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física"
                },
                "sucursal": "Casa Matriz"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 402,
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas",
        "Fecha": "2018-05-03",
        "Requerimiento": 1,
        "Hora": "11:24:55",
        "Canal": "BTDIGITAL"
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
:--------- | :--------- | :--------- 
estado | String | Descripción de estado.
idOperacionBT | String | Identificador String bantotal (concatenación de todos los conceptos claves de la operación).
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