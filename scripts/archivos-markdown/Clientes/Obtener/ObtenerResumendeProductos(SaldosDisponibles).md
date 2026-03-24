---
title: Obtener Resumen de Productos (Saldos Disponibles)
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
::: note Método para obtener un resumen de los productos de un cliente y su saldo disponible correspondiente.

**Nombre publicación:** BTClientes.ObtenerResumenProductosSD

**Programa:** RBTPG082

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
sdtResumenProductos | [sCTInfoProductos](#sctinfoproductos) | Listado de productos.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de cliente.
30002 | No se recuperó la cuenta para el Identificador.
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
      <bts:BTClientes.ObtenerResumenProductos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTClientes.ObtenerResumenProductos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerResumenProductos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 429ec47f-4843-8dca-c8f7-32c004addb68' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": "4"
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
      <BTClientes.ObtenerResumenProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtResumenProductos>
            <cuentasCorrientes>
               <descripcion>Cuentas Corrientes</descripcion>
               <cantidad>3</cantidad>
               <saldoUSD>0.00</saldoUSD>
               <saldoMN>26799806.42</saldoMN>
            </cuentasCorrientes>
            <cajasAhorros>
               <descripcion>Cajas de Ahorro</descripcion>
               <cantidad>4</cantidad>
               <saldoUSD>0.00</saldoUSD>
               <saldoMN>0.00</saldoMN>
            </cajasAhorros>
            <cofresSeguridad>
               <descripcion>Cofres de Seguridad</descripcion>
               <cantidad>0</cantidad>
               <saldoUSD>0.00</saldoUSD>
               <saldoMN>0.00</saldoMN>
            </cofresSeguridad>
            <otros></otros>
            <tarjetasCredito>
               <descripcion/>
               <cantidad>0</cantidad>
               <saldoUSD>0.00</saldoUSD>
               <saldoMN>0.00</saldoMN>
            </tarjetasCredito>
            <tarjetasDebito>
               <descripcion>Tarjetas de Débito</descripcion>
               <cantidad>0</cantidad>
               <saldoUSD>0.00</saldoUSD>
               <saldoMN>0.00</saldoMN>
            </tarjetasDebito>
            <plazosFijos>
               <descripcion>Plazos Fijos</descripcion>
               <cantidad>4</cantidad>
               <saldoUSD>0.00</saldoUSD>
               <saldoMN>413217.36</saldoMN>
            </plazosFijos>
            <prestamos>
               <descripcion>Préstamos</descripcion>
               <cantidad>16</cantidad>
               <saldoUSD>0.00</saldoUSD>
               <saldoMN>2709617.59</saldoMN>
            </prestamos>
            <clienteUId>4</clienteUId>
         </sdtResumenProductos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>841</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerResumenProductos</Servicio>
            <Fecha>2017-12-18</Fecha>
            <Requerimiento/>
            <Hora>02:19:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerResumenProductosResponse>
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
    "sdtResumenProductos": {
        "cuentasCorrientes": {
            "descripcion": "Cuentas Corrientes",
            "cantidad": "3",
            "saldoUSD": "0.00",
            "saldoMN": "26799806.42"
        },
        "cajasAhorros": {
            "descripcion": "Cajas de Ahorro",
            "cantidad": "4",
            "saldoUSD": "0.00",
            "saldoMN": "0.00"
        },
        "cofresSeguridad": {
            "descripcion": "Cofres de Seguridad",
            "cantidad": "0",
            "saldoUSD": "0.00",
            "saldoMN": "0.00"
        },
        "otros": {
            "sCTResumenProducto": []
        },
        "tarjetasCredito": {
            "descripcion": "",
            "cantidad": "0",
            "saldoUSD": "0.00",
            "saldoMN": "0.00"
        },
        "tarjetasDebito": {
            "descripcion": "Tarjetas de Débito",
            "cantidad": "0",
            "saldoUSD": "0.00",
            "saldoMN": "0.00"
        },
        "plazosFijos": {
            "descripcion": "Plazos Fijos",
            "cantidad": "4",
            "saldoUSD": "0.00",
            "saldoMN": "413217.36"
        },
        "prestamos": {
            "descripcion": "Préstamos",
            "cantidad": "16",
            "saldoUSD": "0.00",
            "saldoMN": "2709617.59"
        },
        "clienteUId": "4"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "842",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerResumenProductos",
        "Fecha": "2017-12-18",
        "Requerimiento": "",
        "Hora": "02:19:57",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sCTInfoProductos  

### sCTInfoProductos

::: center 
Los campos del tipo de dato estructurado sCTInfoProductos son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
cuentasCorrientes | [sCTResumenProducto](#sctresumenproducto) | Cuentas corrientes. 
cajasAhorros | [sCTResumenProducto](#sctresumenproducto) | Cajas de ahorro. 
cofresSeguridad | [sCTResumenProducto](#sctresumenproducto) | Cofres de seguridad. 
tarjetasDebito | [sCTResumenProducto](#sctresumenproducto) | Tarjetas de débito. 
plazosFijos | [sCTResumenProducto](#sctresumenproducto) | Plazos fijos. 
prestamos | [sCTResumenProducto](#sctresumenproducto) | Préstamos. 
clienteUId | Long | Identificador único de cliente. 

### sCTResumenProducto

::: center 
Los campos del tipo de dato estructurado sCTResumenProducto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
cantidad | Int | Cantidad de operaciones. 
descripcion | String | Descripción. 
saldoMN | Double | Saldo disponible en moneda nacional. 
saldoUSD | Double | Saldo disponible en dólares. 
:::
<!-- CIERRA SDT -->