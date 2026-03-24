---
title: Obtener Tipos de PEP
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
::: note Método para obtener los tipos de personas expuestas políticamente.

**Nombre publicación:** BTPersonas.ObtenerTiposDePEP

**Programa:** RBTPG553

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtTiposPEP | [sBTTipoPEP](#sbttipospep) | Listado de los tipos de PEP.

@tab Errores

Código | Descripción
:--------- | :-----------
40002 | La guía 8260 no está parametrizada.
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
      <bts:BTPersonas.ObtenerTiposDePEP>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9436BF7CB5B5BB404CC6E5A7</bts:Token>
         </bts:Btinreq>
      </bts:BTPersonas.ObtenerTiposDePEP>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerTiposDePEP' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
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
      <BTPersonas.ObtenerTiposDePEPResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>9436BF7CB5B5BB404CC6E5A7</Token>
         </Btinreq>
         <sdtTiposPEP>
            <sBTTipoPEP>
               <descripcion>Actividad Pública</descripcion>
               <identificador>1</identificador>
            </sBTTipoPEP>
            <sBTTipoPEP>
               <descripcion>Actividad Política</descripcion>
               <identificador>2</identificador>
            </sBTTipoPEP>
            <sBTTipoPEP>
               <descripcion>Familiar PEP</descripcion>
               <identificador>4</identificador>
            </sBTTipoPEP>
            <sBTTipoPEP>
               <descripcion>Vinculado PEP</descripcion>
               <identificador>5</identificador>
            </sBTTipoPEP>
         </sdtTiposPEP>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20050</Numero>
            <Servicio>BTPersonas.ObtenerTiposDePEP</Servicio>
            <Estado>OK</Estado>
            <Fecha>2024-04-22</Fecha>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>18:43:51</Hora>
         </Btoutreq>
      </BTPersonas.ObtenerTiposDePEPResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "sdtTiposPEP": {
        "sBTTipoPEP": [
        {
            "descripcion": "Actividad Pública",
            "identificador": 1
        },
        {
            "descripcion": "Actividad Política",
            "identificador": 2
        },
        {
            "descripcion": "Familiar PEP",
            "identificador": 4
        },
        {
            "descripcion": "Vinculado PEP",
            "identificador": 5
        }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerTiposDePEP",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTiposPEP  

### sBTTiposPEP

::: center 
Los campos del tipo de dato estructurado sBTTiposPEP son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción del tipo de PEP.
identificador | Short | Identificador del tipo de PEP.
:::
<!-- CIERRA SDT -->