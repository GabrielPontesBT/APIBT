---
title: Obtener Resumen por Producto a Cierre Año
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
::: note Método para obtener un resumen con el detalle de las operaciones de un cliente al cierre del año.

**Nombre publicación:** BTClientes.ObtenerResumenPorProductoACierreAnio

**Programa:** RBTPG271

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
anioConsulta | Short | Año de consulta.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtOperaciones | [sBTDetalleOperacion](#sbtdetalleoperacion) | Listado de detalle de operaciones.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de operación.
30002 | No se recuperó la cuenta para la operación.
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
      <bts:BTClientes.ObtenerResumenPorProductoACierreAnio>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>244353514CD285A89A23FBEE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10010</bts:clienteUId>
         <bts:anioConsulta>2018</bts:anioConsulta>
      </bts:BTClientes.ObtenerResumenPorProductoACierreAnio>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerResumenPorProductoACierreAnio' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": 1,
        "Usuario": "INSTALADOR",
        "Token": "244353514CD285A89A23FBEE",
        "Device": "MC"
    },
    "clienteUId": 10010,
    "anioConsulta": 2018
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
      <BTClientes.ObtenerResumenPorProductoACierreAnioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>244353514CD285A89A23FBEE</Token>
            <Device>MC</Device>
         </Btinreq>
         <sdtOperaciones>
            <sBTDetalleOperacion>
               <operacionUId>2</operacionUId>
               <producto>
                  <productoUId>93</productoUId>
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                  <moneda>$</moneda>
                  <papel>$</papel>
               </producto>
               <saldo>0.00</saldo>
            </sBTDetalleOperacion>
            <sBTDetalleOperacion>
               <operacionUId>7</operacionUId>
               <producto>
                  <productoUId>132</productoUId>
                  <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre>
                  <moneda>$</moneda>
                  <papel>$</papel>
               </producto>
               <saldo>15000.00</saldo>
            </sBTDetalleOperacion>
            <sBTDetalleOperacion>
               <operacionUId>11</operacionUId>
               <producto>
                  <productoUId>105</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
                  <moneda>$</moneda>
                  <papel>$</papel>
               </producto>
               <saldo>-415000.00</saldo>
            </sBTDetalleOperacion>
         </sdtOperaciones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTClientes.ObtenerResumenPorProductoACierreAnio</Servicio>
            <Fecha>2020-04-20</Fecha>
            <Hora>14:06:20</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7331</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTClientes.ObtenerResumenPorProductoACierreAnioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": 1,
        "Usuario": "INSTALADOR",
        "Token": "244353514CD285A89A23FBEE",
        "Device": "MC"
    },
    "sdtOperaciones": {
        "sBTDetalleOperacion": [
            {
                "operacionUId": 2,
                "producto": {
                    "productoUId": 93,
                    "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física",
                    "moneda": "$",
                    "papel": "$"
                },
                "saldo": 0.00
            },
            {
                "operacionUId": 7,
                "producto": {
                    "productoUId": 132,
                    "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible",
                    "moneda": "$",
                    "papel": "$"
                },
                "saldo": 15000.00
            },
            {
                "operacionUId": 11,
                "producto": {
                    "productoUId": 105,
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF",
                    "moneda": "$",
                    "papel": "$"
                },
                "saldo": -415000.00
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTClientes.ObtenerResumenPorProductoACierreAnio",
        "Fecha": "2020-04-20",
        "Hora": "14:06:20",
        "Requerimiento": 1,
        "Numero": 7331,
        "Estado": "OK"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDetalleOperacion

### sBTDetalleOperacion

Los campos del tipo de dato estructurado sBTDetalleOperacion son los siguientes:

Campo | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.
producto | [sBTProducto](#sbtproducto) | Datos del producto.
saldo | Decimal | Saldo.

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