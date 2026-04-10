---
title: Obtener Detalle de Excepción
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
::: note Método para obtener el detalle de una excepción.

**Nombre publicación:** BTSeguridad.ObtenerDetalleExcepcion

**Programa:** RBTPG087

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
idExcepcion | Int | Identificador de excepción

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
excepciones | [sBTDetalleExcepcion](#sbtdetalleexcepcion) | Datos detallados de la excepción

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de excepción.
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
      <bts:BTSeguridad.ObtenerDetalleExcepcion>
			<bts:Btinreq>             
            <bts:Device>ES</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>dac8c7fdec4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:idExcepcion>1850</bts:idExcepcion>
      </bts:BTSeguridad.ObtenerDetalleExcepcion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSeguridad?ObtenerDetalleExcepcion=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 827c2080-a7d5-3466-66db-0f821bccef77' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "idExcepcion": 1854
}'
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <SOAP-ENV:Body>
      <BTSeguridad.ObtenerDetalleExcepcionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>ES</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>dac8c7fdec4A8B5C60A82434</Token>
         </Btinreq>
         <idExcepcion>1850</idExcepcion>
         <excepciones>
            <estado>N</estado>
            <solicitaPassword>N</solicitaPassword>
            <operacionUId>0</operacionUId>
            <saldo>0.00</saldo>
            <simboloMoneda>$</simboloMoneda>
            <excepcion>
               <nombreUsuario>INSTALADOR</nombreUsuario>
               <descripcion>Autorización T.Cbio./Arbitraje</descripcion>
               <identificador>1850</identificador>
               <usuario>INSTALADOR</usuario>
               <ligada>N</ligada>
               <movimientoUId>0</movimientoUId>
               <nombreSucursal>Casa Matriz</nombreSucursal>
               <descripcionMovimiento>Compra USD Caja</descripcionMovimiento>
            </excepcion>
            <metadata>
               <sBTMetadataExcepcionns:sBTMetadataExcepcion xmlns:sBTMetadataExcepcionns="http://uy.com.dlya.bantotal/BTSOA/" xmlns="ServiciosBT">
                  <descripcion>Acción</descripcion>
                  <valor>COMPRA</valor>
                  <esImporte>N</esImporte>
               </sBTMetadataExcepcionns:sBTMetadataExcepcion>
               <sBTMetadataExcepcionns:sBTMetadataExcepcion xmlns:sBTMetadataExcepcionns="http://uy.com.dlya.bantotal/BTSOA/" xmlns="ServiciosBT">
                  <descripcion>Moneda Destino</descripcion>
                  <valor>$</valor>
                  <esImporte>N</esImporte>
               </sBTMetadataExcepcionns:sBTMetadataExcepcion>
               <sBTMetadataExcepcionns:sBTMetadataExcepcion xmlns:sBTMetadataExcepcionns="http://uy.com.dlya.bantotal/BTSOA/" xmlns="ServiciosBT">
                  <descripcion>Tipo de Cambio Base</descripcion>
                  <valor>28.18182000</valor>
                  <esImporte>S</esImporte>
               </sBTMetadataExcepcionns:sBTMetadataExcepcion>
               <sBTMetadataExcepcionns:sBTMetadataExcepcion xmlns:sBTMetadataExcepcionns="http://uy.com.dlya.bantotal/BTSOA/" xmlns="ServiciosBT">
                  <descripcion>Tipo de Cambio Solicitado</descripcion>
                  <valor>208.18182000</valor>
                  <esImporte>S</esImporte>
               </sBTMetadataExcepcionns:sBTMetadataExcepcion>
            </metadata>
            <descripcionEstado/>
            <puedeAutorizar>S</puedeAutorizar>
            <importeMovimiento>104090.91</importeMovimiento>
         </excepciones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>895</Numero>
            <Estado>OK</Estado>
            <Servicio>BTSeguridad.ObtenerDetalleExcepcion</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2017-12-20</Fecha>
            <Hora>16:52:49</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTSeguridad.ObtenerDetalleExcepcionResponse>
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
    "idExcepcion": "1854",
    "excepciones": {
        "estado": "P",
        "solicitaPassword": "N",
        "operacionUId": "0",
        "saldo": "0.00",
        "simboloMoneda": "$",
        "excepcion": {
            "nombreUsuario": "INSTALADOR",
            "descripcion": "Autorización T.Cbio./Arbitraje",
            "identificador": "1854",
            "usuario": "INSTALADOR",
            "ligada": "N",
            "movimientoUId": "0",
            "nombreSucursal": "Casa Matriz",
            "descripcionMovimiento": "Compra USD Caja"
        },
        "descripcionEstado": "Pendiente",
        "metadata": {
            "sBTMetadataExcepcion": [
                {
                    "descripcion": "Acción",
                    "valor": "COMPRA",
                    "esImporte": "N"
                },
                {
                    "descripcion": "Moneda Destino",
                    "valor": "$",
                    "esImporte": "N"
                },
                {
                    "descripcion": "Tipo de Cambio Base",
                    "valor": "28.18182000",
                    "esImporte": "S"
                },
                {
                    "descripcion": "Tipo de Cambio Solicitado",
                    "valor": "208.18182000",
                    "esImporte": "S"
                }
            ]
        },
        "puedeAutorizar": "S",
        "importeMovimiento": "104090.91"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "958",
        "Estado": "OK",
        "Servicio": "BTSeguridad.ObtenerDetalleExcepcion",
        "Fecha": "2017-12-22",
        "Requerimiento": 1,
        "Hora": "10:57:23",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT --> 
::: details sBTDetalleExcepcion  

### sBTDetalleExcepcion

::: center 
Los campos del tipo de dato estructurado sBTDetalleExcepcion son los siguientes: 

Campo | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcionEstado | String | Descripción del estado.
estado | String | Estado.
importeMovimiento | Double | Importe del movimiento.
metadata | [sBTMetadataExcepcion](#sbtmetadataexcepcion) | Listado de MetaData.
operacionUId | Long | Identificador único de operación.
puedeAutorizar | String | Puede autorizar (S/N).
saldo | Double | Saldo de operación.
sdtExcepcion | [sBTExcepcion](#sbtexcepcion) | Datos de la excepción.
simboloMoneda | String | Símbolo de moneda.
solicitaPassword | String | Solicita contraseña (S/N).

### sBTExcepcion

Los campos del tipo de dato estructurado sBTExcepcion son los siguientes: 

Campo | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción de la excepción.
descripcionMovimiento | String | Descripción del movimiento.
identificador | Int | Identificador de excepción.
ligada | String | Ligada (S/N).
movimientoUId | Long | Identificador único de movimiento.
nombreSucursal | String | Nombre de la sucursal.
nombreUsuario | String | Nombre del usuario.
usuario | String | Usuario.

### sBTMetadataExcepcion

Los campos del tipo de dato estructurado sBTMetadataExcepcion son los siguientes: 

Campo | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción de la MetaData.
esImporte | String | Es Importe (S/N).
valor | String | Valor de la MetaData.
<!-- CIERRA SDT -->