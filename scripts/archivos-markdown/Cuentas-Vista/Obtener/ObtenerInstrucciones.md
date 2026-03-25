---
title: Obtener Instrucciones
icon: /assets/image/nuevo.svg
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
::: note Método para obtener las instrucciones de una cuenta vista.

**Nombre publicación:** BTCuentasVistas.ObtenerInstrucciones

**Programa:** RBTPG588

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de la operación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtInstruciones | [sBTInstruccionCV](#sbtinstruccioncv) | Listado de las instrucciones.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de operación.
30002 | La operación ingresada no corresponde a una cuenta vista.

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
      <bts:BTCuentasVistas.ObtenerInstrucciones>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>4875CF3823C241E0F8BBAC3F</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>54</bts:operacionUId>
      </bts:BTCuentasVistas.ObtenerInstrucciones>
   </soapenv:Body>
</soapenv:Envelope>

```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVistas_v1?ObtenerInstrucciones' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"operacionUId": 54
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
      <BTCuentasVistas.ObtenerInstruccionesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>4875CF3823C241E0F8BBAC3F</Token>
         </Btinreq>
         <sdtInstruciones>
            <sBTInstruccionCV>
               <producto>
                  <otrosConceptos></otrosConceptos>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>251</productoUId>
                  <nombre>Valores a Compensar,</nombre>
               </producto>
               <operacionUId>1047</operacionUId>
               <codigoInstruccion>3</codigoInstruccion>
               <descripcionInstruccion>Acreditar al Vencimiento</descripcionInstruccion>
            </sBTInstruccionCV>
            <sBTInstruccionCV>
               <producto>
                  <otrosConceptos></otrosConceptos>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>251</productoUId>
                  <nombre>Valores a Compensar, CLEARING</nombre>
               </producto>
               <operacionUId>1048</operacionUId>
               <codigoInstruccion>3</codigoInstruccion>
               <descripcionInstruccion>Acreditar al Vencimiento</descripcionInstruccion>
            </sBTInstruccionCV>
            <sBTInstruccionCV>
               <producto>
                  <otrosConceptos></otrosConceptos>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>251</productoUId>
                  <nombre>Valores a Compensar, CLEARING</nombre>
               </producto>
               <operacionUId>1049</operacionUId>
               <codigoInstruccion>3</codigoInstruccion>
               <descripcionInstruccion>Acreditar al Vencimiento</descripcionInstruccion>
            </sBTInstruccionCV>
            <sBTInstruccionCV>
               <producto>
                  <otrosConceptos></otrosConceptos>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>251</productoUId>
                  <nombre>Valores a Compensar, CLEARING</nombre>
               </producto>
               <operacionUId>1050</operacionUId>
               <codigoInstruccion>3</codigoInstruccion>
               <descripcionInstruccion>Acreditar al Vencimiento</descripcionInstruccion>
            </sBTInstruccionCV>
         </sdtInstruciones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>36546</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVistas.ObtenerInstrucciones</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-10-31</Fecha>
            <Hora>16:31:55</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVistas.ObtenerInstruccionesResponse>
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
	"sdtInstruciones": {
      "sBTInstruccionCV": [
      {
         "producto": {
            "otrosConceptos": "",
            "papel": "$",
            "moneda": "$",
            "productoUId": 251,
            "nombre": "Valores a Compensar,"
         },
         "operacionUId": 1047,
         "codigoInstruccion": 3,
         "descripcionInstruccion": "Acreditar al Vencimiento"
      },
      {
         "producto": {
            "otrosConceptos": "",
            "papel": "$",
            "moneda": "$",
            "productoUId": 251,
            "nombre": "Valores a Compensar, CLEARING"
         },
         "operacionUId": 1048,
         "codigoInstruccion": 3,
         "descripcionInstruccion": "Acreditar al Vencimiento"
      },
      {
         "producto": {
            "otrosConceptos": "",
            "papel": "$",
            "moneda": "$",
            "productoUId": 251,
            "nombre": "Valores a Compensar, CLEARING"
         },
         "operacionUId": 1049,
         "codigoInstruccion": 3,
         "descripcionInstruccion": "Acreditar al Vencimiento"
      },
      {
         "producto": {
            "otrosConceptos": "",
            "papel": "$",
            "moneda": "$",
            "productoUId": 251,
            "nombre": "Valores a Compensar, CLEARING"
         },
         "operacionUId": 1050,
         "codigoInstruccion": 3,
         "descripcionInstruccion": "Acreditar al Vencimiento"
      }
      ]
   },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8418,
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.ObtenerSobregiros",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTInstruccionCV  

### sBTInstruccionCV

::: center 
Los campos del tipo de dato estructurado sBTInstruccionCV son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
codigoInstruccion | Short | Código identificador de la instrucción.
descripcionInstruccion | String | Descripción de la instrucción.
producto | [sBTProducto](#sbtproducto) | Datos del producto. 
operacionUId | Long | Identificador único de la operación de la instrucción.

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