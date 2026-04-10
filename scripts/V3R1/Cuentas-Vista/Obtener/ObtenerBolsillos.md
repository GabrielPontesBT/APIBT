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
:--------- | :--------- | :---------
sdtInformacionBolsillos | [sBTInfRBolsillo](#sbtinfrbolsillo) | Listado de la información del bolsillo.

@tab Errores

Código | Descripción
:--------- | :---------
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
	  "Requerimiento": 1
	},
   "operacionUId": 9
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
      <BTCuentasVista.ObtenerBolsillosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FP</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>10</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>64d9fe0781F955E77534D3E0</Token>
         </Btinreq>
         <sdtInformacionBolsillos>
            <sBTInfRBolsillo>
               <operacionBolsilloUId>8</operacionBolsilloUId>
               <productoBolsilloId>32</productoBolsilloId>
               <nombreProducto>Cuentas Bolsillo, Bolsillos de Ahorro</nombreProducto>
               <estado>0</estado>
               <saldo>21981.00</saldo>
            </sBTInfRBolsillo>
            <sBTInfRBolsillo>
               <operacionBolsilloUId>11</operacionBolsilloUId>
               <productoBolsilloId>32</productoBolsilloId>
               <nombreProducto>Cuentas Bolsillo, Bolsillos de Ahorro</nombreProducto>
               <estado>0</estado>
               <saldo>4000.00</saldo>
            </sBTInfRBolsillo>
            <sBTInfRBolsillo>
               <operacionBolsilloUId>10</operacionBolsilloUId>
               <productoBolsilloId>33</productoBolsilloId>
               <nombreProducto>Cuentas Bolsillo, Bolsillos Imprevistos</nombreProducto>
               <estado>0</estado>
               <saldo>4000.00</saldo>
            </sBTInfRBolsillo>
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
        "Requerimiento": 1 
    }, 
    "sdtInformacionBolsillos": { 
      "sBTInfRBolsillo": [ 
         { 
            "operacionBolsilloUId": 8, 
            "productoBolsilloId": 32, 
            "nombreProducto": "Cuentas Bolsillo, Bolsillos de Ahorro", 
            "estado": 0, 
            "saldo": 21981 
         }, 
         { 
            "operacionBolsilloUId": 11, 
            "productoBolsilloId": 32, 
            "nombreProducto": "Cuentas Bolsillo, Bolsillos de Ahorro", 
            "estado": 0, 
            "saldo": 4000 
         }, 
         { 
            "operacionBolsilloUId": 10, 
            "productoBolsilloId": 33, 
            "nombreProducto": "Cuentas Bolsillo, Bolsillos Imprevistos", 
            "estado": 0, 
            "saldo": 4000 
         } 
      ] 
   }, 
    "Btoutreq": { 
        "Numero": 238, 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.ObtenerBolsillos", 
        "Requerimiento": 1, 
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
:--------- | :--------- | :--------- 
estado | Byte | Estado. 
nombreProducto | String | Nombre del producto. 
operacionBolsilloUId | Long | Identificador único de la operación de bolsillo. 
productoBolsilloId | Short | Identificador único del producto del bolsillo. 
saldo | Double | Saldo. 
:::
<!-- CIERRA SDT -->