---
title: Obtener Marcas
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
::: note Método para retornar las marcas de los vehículos.

**Nombre publicación:** BTPartners.ObtenerMarcas

**Programa:** RBTPNV03

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPartner | [sBTPartnerInReq](#sbtpartnerinreq)  | Datos del usuario.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtMarcas | [sBTMarca](#sbtmarca) | Colección de las marcas de vehículos.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió Partner ni canal.
30002 | El Partner no se encuentra habilitado.
30003 | No existe Partner con ese identificador.
30012 | No se recibió punto de venta.
30013 | No se recibió vendedor.
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
      <bts:BTPartners.ObtenerMarcas>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>DF1F942C6EC60E8B95BBEA69</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>2</bts:puntoVentaUId>
            <bts:vendedorUId>0</bts:vendedorUId>
            <bts:partnerUId>1</bts:partnerUId>
         </bts:sdtPartner>
      </bts:BTPartners.ObtenerMarcas>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ObtenerMarcas' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "INSTALADOR",
        "Token": "DF1F942C6EC60E8B95BBEA69"
    },
    "sdtPartner": {
        "puntoVentaUId": 2,
        "vendedorUId": 0,
        "partnerUId": 1
    }
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
      <BTPartners.ObtenerMarcasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <sdtMarcas>
            <sBTMarca>
               <tipoMarcaId>1</tipoMarcaId>
               <tipoMarca>Lujo</tipoMarca>
               <marcaUId>1</marcaUId>
               <nombreMarca>AUDI</nombreMarca>
            </sBTMarca>
         </sdtMarcas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16857</Numero>
            <Servicio>BTPartners.ObtenerMarcas</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-27</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>11:57:14</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.ObtenerMarcasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
        "Device": "GZ",
        "Usuario": "INSTALADOR",
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Token": "DF1F942C6EC60E8B95BBEA69"
    },
    "sdtMarcas": {
        "sBTMarca": {
            "tipoMarcaId": 1,
            "tipoMarca": "Lujo",
            "marcaUId": 1,
            "nombreMarca": "AUDI"
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 16857,
        "Servicio": "BTPartners.ObtenerMarcas",
        "Estado": "OK",
        "Fecha": "2023-10-27",
        "Requerimiento": 0,
        "Hora": "11:57:14",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPartnerInReq  

### sBTPartnerInReq

::: center 
Los campos del tipo de dato estructurado sBTPartnerInReq son los siguientes: 

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
partnerUId | Int | Identificador del Partner.
puntoVentaUId	 | Int | Identificador del punto de venta.
vendedorUId	 | Int | Identificador del vendedor.
:::
<!-- CIERRA SDT --> 

::: details sBTMarca  

### sBTMarca

::: center 
Los campos del tipo de dato estructurado sBTMarca son los siguientes: 

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
marcaUId | Long | Identificador de la marca.
nombreMarca | String | Nombre de la marca.
tipoMarca | String | Tipo de marca.
tipoMarcaId | Short | Identificador del tipo de marca.
:::
<!-- CIERRA SDT -->