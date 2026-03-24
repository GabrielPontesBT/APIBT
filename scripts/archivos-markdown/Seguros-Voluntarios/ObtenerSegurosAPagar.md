---
title: Obtener Seguros a Pagar
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

<!-- ABRE LOS DATOS DEL MÉTODO -->
::: note Método para obtener un listado de los seguros a pagar.

**Nombre publicación:** BTSegurosVoluntarios.ObtenerSegurosAPagar

**Programa:** RBTPG543

**Global/País:** Global
:::
<!-- CIERRA LOS DATOS DEL MÉTODO -->

<!-- ABRE LA TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único del cliente.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtSegurosAPagar | [sBTProductosSeguro](#sbtproductosseguro) | Listado de seguros a pagar.

@tab Errores

Código | Descripción
:--------- | :-----------
30002 | No se recibió el identificador de cuenta cliente.
30003 | No se recuperó la cuenta para el identificador de cliente: [Número de Identificador].
:::
<!-- CIERRA LA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSegurosVoluntarios.ObtenerSegurosAPagar>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>89B4F6D7BEFB0C7F653DB37A</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
      </bts:BTSegurosVoluntarios.ObtenerSegurosAPagar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSegurosVoluntarios?ObtenerSegurosAPagar' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "AC",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "clienteUId": 61
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
      <BTSegurosVoluntarios.ObtenerSegurosAPagarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>89B4F6D7BEFB0C7F653DB37A</Token>
         </Btinreq>
         <sdtSegurosAPagar>
            <sBTProductosSeguro>
               <saldo>7251.86</saldo>
               <operacionUId>275</operacionUId>
               <seguroId>0</seguroId>
               <nroAfiliado>0</nroAfiliado>
               <seguro/>
            </sBTProductosSeguro>
            <sBTProductosSeguro>
               <saldo>7251.86</saldo>
               <operacionUId>276</operacionUId>
               <seguroId>0</seguroId>
               <nroAfiliado>0</nroAfiliado>
               <seguro/>
            </sBTProductosSeguro>
            <sBTProductosSeguro>
               <saldo>5980.20</saldo>
               <operacionUId>20</operacionUId>
               <seguroId>0</seguroId>
               <nroAfiliado>0</nroAfiliado>
               <seguro/>
            </sBTProductosSeguro>
            <sBTProductosSeguro>
               <saldo>1000000.00</saldo>
               <operacionUId>277</operacionUId>
               <seguroId>0</seguroId>
               <nroAfiliado>0</nroAfiliado>
               <seguro/>
            </sBTProductosSeguro>
            <sBTProductosSeguro>
               <saldo>40000.00</saldo>
               <operacionUId>285</operacionUId>
               <seguroId>0</seguroId>
               <nroAfiliado>0</nroAfiliado>
               <seguro/>
            </sBTProductosSeguro>
            <sBTProductosSeguro>
               <saldo>12000.00</saldo>
               <operacionUId>286</operacionUId>
               <seguroId>0</seguroId>
               <nroAfiliado>0</nroAfiliado>
               <seguro/>
            </sBTProductosSeguro>
            <sBTProductosSeguro>
               <saldo>12000.00</saldo>
               <operacionUId>287</operacionUId>
               <seguroId>0</seguroId>
               <nroAfiliado>0</nroAfiliado>
               <seguro/>
            </sBTProductosSeguro>
         </sdtSegurosAPagar>
         <Erroresnegocio/>
         <Btoutreq>
            <Numero>20472</Numero>
            <Estado>OK</Estado>
            <Servicio>BTSegurosVoluntarios.ObtenerSegurosAPagar</Servicio>
            <Fecha>2024-05-14</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>15:35:11</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTSegurosVoluntarios.ObtenerSegurosAPagarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "BANTOTAL",
        "Token": "324915377F955E77534D3E02",
        "Device": "AC"
    },
	"sdtSegurosAPagar": {
      "sBTProductosSeguro": [
      {
         "saldo": 7251.86,
         "operacionUId": 275,
         "seguroId": 0,
         "nroAfiliado": 0,
         "seguro": ""
      },
      {
         "saldo": 7251.86,
         "operacionUId": 276,
         "seguroId": 0,
         "nroAfiliado": 0,
         "seguro": ""
      },
      {
         "saldo": 5980.2,
         "operacionUId": 20,
         "seguroId": 0,
         "nroAfiliado": 0,
         "seguro": ""
      },
      {
         "saldo": 1000000,
         "operacionUId": 277,
         "seguroId": 0,
         "nroAfiliado": 0,
         "seguro": ""
      },
      {
         "saldo": 40000,
         "operacionUId": 285,
         "seguroId": 0,
         "nroAfiliado": 0,
         "seguro": ""
      },
      {
         "saldo": 12000,
         "operacionUId": 286,
         "seguroId": 0,
         "nroAfiliado": 0,
         "seguro": ""
      },
      {
         "saldo": 12000,
         "operacionUId": 287,
         "seguroId": 0,
         "nroAfiliado": 0,
         "seguro": ""
      }
      ]
   },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTSegurosVoluntarios.ObtenerSegurosAPagar",
        "Fecha": "2019-11-19",
        "Hora": "13:05:22",
        "Requerimiento": "",
        "Numero": 6924,
        "Estado": "OK"
    }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->

::: details sBTProductosSeguro  

### sBTProductosSeguro

::: center 
Los campos del tipo de dato estructurado sBTProductosSeguro son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
nroAfiliado | Int | Número del afiliado.
operacionUId | Long | Identificador único de la operación.
saldo | Double | Saldo.
seguro | String | Seguro.
seguroId | Int | Identificador único del seguro.
:::
<!-- CIERRA SDT -->