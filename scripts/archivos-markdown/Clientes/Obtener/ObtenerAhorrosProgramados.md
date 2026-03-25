---
title: Obtener Ahorros Programados
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
::: note Método para obtener un listado de los productos de ahorro programado que tiene contratado un cliente.

**Nombre publicación:** BTClientes.ObtenerAhorrosProgramados

**Programa:** RBTPG278

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
sdtProductosPasivos | [sBTProductoPasivo](#sbtproductopasivo) | Listado de ahorros programados.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente.
30002 | No se recuperó la cuenta para el Identificador.
40001 | No existe la cuenta consultada.
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
      <bts:BTClientes.ObtenerAhorrosProgramados>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTClientes.ObtenerAhorrosProgramados>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerAhorrosProgramados=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 315347e0-dc1b-de4d-6160-6f4f39d19acb' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 4
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
      <BTClientes.ObtenerAhorrosProgramadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>845cec4b724A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductosPasivos>
            <sBTProductoPasivo>
               <operacionUId>6</operacionUId>
               <idOperacionFmt>0000000028_000</idOperacionFmt>
               <idOperacionBT>0010100000022000000000000000002700000000000028001</idOperacionBT>
               <producto>
                  <productoUId>4</productoUId>
                  <nombre>AHORRO PROGRAMADO, Ahorro Programado</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>AH</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta/>
               <saldo>15000.00</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
            <sBTProductoPasivo>
               <operacionUId>7</operacionUId>
               <idOperacionFmt>0000000092_000</idOperacionFmt>
               <idOperacionBT>0010000100022000000000000000002700000000000092001</idOperacionBT>
               <producto>
                  <productoUId>4</productoUId>
                  <nombre>AHORRO PROGRAMADO, Ahorro Programado</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>AH</tipoProducto>
               <sucursal>Sucursal Beta</sucursal>
               <subCuenta/>
               <saldo>350000.00</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
         </sdtProductosPasivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>783</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerAhorrosProgramados</Servicio>
            <Fecha>2017-12-15</Fecha>
            <Requerimiento/>
            <Hora>13:49:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerAhorrosProgramadosResponse>
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
    "sdtProductosPasivos": {
        "sBTProductoPasivo": [
            {
                "tipoProducto": "AH",
                "estado": "Normal",
                "subCuenta": "",
                "operacionUId": "6",
                "saldo": "15000.00",
                "idOperacionFmt": "0000000028_000",
                "idOperacionBT": "0010100000022000000000000000002700000000000028001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "4",
                    "nombre": "AHORRO PROGRAMADO, Ahorro Programado"
                },
                "sucursal": "Casa Matriz"
            },
            {
                "tipoProducto": "AH",
                "estado": "Normal",
                "subCuenta": "",
                "operacionUId": "7",
                "saldo": "350000.00",
                "idOperacionFmt": "0000000092_000",
                "idOperacionBT": "0010000100022000000000000000002700000000000092001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "1",
                    "nombre": "AHORRO PROGRAMADO, Ahorro Programado"
                },
                "sucursal": "Sucursal Beta"
            },
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "784",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerAhorrosProgramados",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "13:50:44",
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
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
operacionUId | Long | Identificador único de operación. 
producto | [sBTProducto](#sbtproducto) | Datos del producto. 
saldo | Double | Saldo del ahorro programado. 
subCuenta | String | Nombre de la cuenta vista. 
sucursal | String | Nombre de la sucursal. 
tipoProducto | String | Tipo de producto. 

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