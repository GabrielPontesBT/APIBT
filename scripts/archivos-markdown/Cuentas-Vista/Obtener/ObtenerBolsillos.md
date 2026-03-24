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
::: note Método para obtener un listado de las cuentas bolsillo asociadas a una cuenta vista.

**Nombre publicación:** BTCuentasVista.ObtenerBolsillos

**Programa:** RBTPG614

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
:--------- | :----------- | :-----------
sdtInformacionBolsillos | [sBTInfRBolsillo](#sbtinfrbolsillo) | Listado de la información del bolsillo.

@tab Errores

Código | Descripción
:--------- | :-----------
30003 | No se recibió el identificador de operación.
30005 | OperacionUID no corresponde a CA.
30006 | La cuenta no existe o no se encuentra activa.
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
      <bts:BTCuentasVista.ObtenerBolsillos>
         <bts:Btinreq>
            <bts:Device>FP</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>64d9fe0781F955E77534D3E0</bts:Token>
            <bts:Requerimiento>10</bts:Requerimiento>
         </bts:Btinreq>
         <bts:operacionUId>9</bts:operacionUId>
      </bts:BTCuentasVista.ObtenerBolsillos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerBolsillos' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cFC33CD93505A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
   "operacionUId": 9,
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
      <BTCuentasVista.ObtenerBolsillosResponse xmlns=http://uy.com.dlya.bantotal/BTSOA/>
         <Btinreq>
            <Device>FP</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>10</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>64d9fe0781F955E77534D3E0</Token>
         </Btinreq>
         <sdtInformacionBolsillos>
            <SBTINFRBOLSILLO>
               <OperacionBolsilloUID>8</OperacionBolsilloUID>
               <FechaBaja>0000-00-00</FechaBaja>
               <ProductoBolsilloId>32</ProductoBolsilloId>
               <NombreProducto>Cuentas Bolsillo, Bolsillos de Ahorro</NombreProducto>
               <Estado>0</Estado>
               <Saldo>21981.00</Saldo>
               <FechaApertura>0000-00-00</FechaApertura>
               <Nombresubcuenta/>
            </SBTINFRBOLSILLO>
            <SBTINFRBOLSILLO>
               <OperacionBolsilloUID>11</OperacionBolsilloUID>
               <FechaBaja>0000-00-00</FechaBaja>
               <ProductoBolsilloId>32</ProductoBolsilloId>
               <NombreProducto>Cuentas Bolsillo, Bolsillos de Ahorro</NombreProducto>
               <Estado>0</Estado>
               <Saldo>4000.00</Saldo>
               <FechaApertura>0000-00-00</FechaApertura>
               <Nombresubcuenta/>
            </SBTINFRBOLSILLO>
            <SBTINFRBOLSILLO>
               <OperacionBolsilloUID>10</OperacionBolsilloUID>
               <FechaBaja>0000-00-00</FechaBaja>
               <ProductoBolsilloId>33</ProductoBolsilloId>
               <NombreProducto>Cuentas Bolsillo, Bolsillos Imprevistos</NombreProducto>
               <Estado>0</Estado>
               <Saldo>4000.00</Saldo>
               <FechaApertura>0000-00-00</FechaApertura>
               <Nombresubcuenta/>
            </SBTINFRBOLSILLO>
         </sdtInformacionBolsillos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>238</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.ObtenerBolsillos</Servicio>
            <Requerimiento>10</Requerimiento>
            <Fecha>2023-11-01</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>08:52:10</Hora>
         </Btoutreq>
      </BTCuentasVista.ObtenerBolsillosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
    "Btinreq": { 
        "Device": "1", 
        "Usuario": "MINSTALADOR", 
        "Token": "16c1cFC33CD93505A5382434", 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "1" 
    }, 
    "sdtInformacionBolsillos": { 
      "SBTINFRBOLSILLO": [ 
         { 
         "OperacionBolsilloUID": 8, 
         "FechaBaja": "0000-00-00", 
         "ProductoBolsilloId": 32, 
         "NombreProducto": "Cuentas Bolsillo, Bolsillos de Ahorro", 
         "Estado": 0, 
         "Saldo": 21981, 
         "FechaApertura": "0000-00-00", 
         "Nombresubcuenta": "" 
         }, 
         { 
         "OperacionBolsilloUID": 11, 
         "FechaBaja": "0000-00-00", 
         "ProductoBolsilloId": 32, 
         "NombreProducto": "Cuentas Bolsillo, Bolsillos de Ahorro", 
         "Estado": 0, 
         "Saldo": 4000, 
         "FechaApertura": "0000-00-00", 
         "Nombresubcuenta": "" 
         }, 
         { 
         "OperacionBolsilloUID": 10, 
         "FechaBaja": "0000-00-00", 
         "ProductoBolsilloId": 33, 
         "NombreProducto": "Cuentas Bolsillo, Bolsillos Imprevistos", 
         "Estado": 0, 
         "Saldo": 4000, 
         "FechaApertura": "0000-00-00", 
         "Nombresubcuenta": "" 
         } 
      ] 
   }, 
    "Btoutreq": { 
        "Numero": "111399", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.ObtenerBolsillos", 
        "Requerimiento": "1", 
        "Fecha": "2023-05-10", 
        "Canal": "BTDIGITAL", 
        "Hora": "15:10:52" 
    } 
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTInfRBolsillo  

### sBTInfRBolsillo

::: center 
Los campos del tipo de dato estructurado sBTInfRBolsillo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
estado | Byte | Estado. 
nombreProducto | String | Nombre del producto. 
operacionBolsilloUId | Long | Identificador único de la operación de bolsillo. 
productoBolsilloId | Short | Identificador único del producto del bolsillo. 
saldo | Double | Saldo. 
:::
<!-- CIERRA SDT -->