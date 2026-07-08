---
title: Obtener Cuentas de Cobro
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
::: note Método para obtener un listado de las cuentas de cobro de un préstamo.

**Nombre publicación:** BTPrestamos.ObtenerCuentasDeCobro

**Programa:** RBTPG134

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación de préstamo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtCuentasDeCobro | [sBTCuentaDeCobro](#sbtcuentadecobro) | Listado de cuentas de cobro.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador único de operación de préstamo.
30002 | No se recuperó la operación para el identificador: [Número de Identificador].
40101 | El Préstamo no existe.
40102 | No se encuentra Cuenta de Cobro.
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
      <bts:BTPrestamos.ObtenerCuentaDeCobro>
		<bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>74</bts:operacionUId>
      </bts:BTPrestamos.ObtenerCuentaDeCobro>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerCuentaDeCobro' \
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
		"operacionUId": 74
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
      <BTPrestamos.ObtenerCuentasDeCobroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>18C92AB2FE19E361315BA14B</Token>
         </Btinreq>
         <sdtCuentasDeCobro>
            <sBTCuentaDeCobro>
               <sucursal>Sucursal #3</sucursal>
               <producto>
                  <moneda>$</moneda>
                  <papel>Bill</papel>
                  <productoUId>6</productoUId>
                  <nombre>CAJA DE AHORROS, 656</nombre>
               </producto>
               <idOperacionBT>00100302100800000000060929001000000000001</idOperacionBT>
               <operacionUId>108</operacionUId>
               <subCuenta/>
               <idOperacionFmt>000060929_001</idOperacionFmt>
               <sucursalId>3</sucursalId>
               <tipoProducto>CA</tipoProducto>
            </sBTCuentaDeCobro>
         </sdtCuentasDeCobro>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>5861</Numero>
            <Servicio>BTPrestamos.ObtenerCuentasDeCobro</Servicio>
            <Estado>OK</Estado>
            <Fecha>2024-06-12</Fecha>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>10:02:38</Hora>
         </Btoutreq>
      </BTPrestamos.ObtenerCuentasDeCobroResponse>
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
  "sdtCuentasDeCobro": {
    "sBTCuentaDeCobro": {
      "sucursal": "Sucursal #3",
      "producto": {
        "moneda": "$",
        "papel": "Bill",
        "productoUId": 6,
        "nombre": "CAJA DE AHORROS, 656",
        "otrosConceptos": {
          "concepto": "",
          "texto": "",
          "valor": 0
        }
      },
      "idOperacionBT": 1.003021008e+38,
      "operacionUId": 108,
      "subCuenta": "",
      "idOperacionFmt": "000060929_001",
      "sucursalId": 3,
      "tipoProducto": "CA"
    }
  },
  "Erroresnegocio": {
    "BTErrorNegocio": []
  },
  "Btoutreq": {
    "Numero": "111",
    "Estado": "OK",
    "Servicio": "BTPrestamos.ObtenerCuentasDeCobro",
    "Requerimiento": 1,
    "Fecha": "2018-05-04",
    "Hora": "18:27:34",
    "Canal": "BTDIGITAL"
  }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCuentaDeCobro  

### sBTCuentaDeCobro

::: center 
Los campos del tipo de dato estructurado sBTCuentaDeCobro son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación).
operacionUId | Long | Identificador de la operación.
producto | [sBTProducto](#sbtproducto) | Información del producto.
subCuenta | String | Sub cuenta.
sucursal | String | Nombre de la sucursal.
sucursalId | Short | Identificador de sucursal.
tipoProducto | String | Tipo de producto.
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

