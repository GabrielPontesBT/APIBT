---
title: Obtener Seguros
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
::: note Método para obtener un listado de los seguros.

**Nombre publicación:** BTSegurosVoluntarios.ObtenerSeguros

**Programa:** RBTPG541

**Global/País:** Global
:::
<!-- CIERRA LOS DATOS DEL MÉTODO -->

<!-- ABRE LA TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtSeguros | [sBTSeguro](#sbtseguro) | Listado de seguros.

@tab Errores

No aplica.
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
      <bts:BTSegurosVoluntarios.ObtenerSeguros>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>89B4F6D7BEFB0C7F653DB37A</bts:Token>
         </bts:Btinreq>
      </bts:BTSegurosVoluntarios.ObtenerSeguros>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSegurosVoluntarios?ObtenerSeguros' \
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
      <BTSegurosVoluntarios.ObtenerSegurosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>89B4F6D7BEFB0C7F653DB37A</Token>
         </Btinreq>
         <sdtSeguros>
            <sBTSeguro>
               <descripcion>Microseguros 1</descripcion>
               <codigo>610</codigo>
            </sBTSeguro>
            <sBTSeguro>
               <descripcion>Microseguros 2</descripcion>
               <codigo>611</codigo>
            </sBTSeguro>
         </sdtSeguros>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20473</Numero>
            <Estado>OK</Estado>
            <Servicio>BTSegurosVoluntarios.ObtenerSeguros</Servicio>
            <Fecha>2024-05-14</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>15:58:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTSegurosVoluntarios.ObtenerSegurosResponse>
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
    "sdtSeguros": {
        "sBTSeguro": [
        {
            "descripcion": "Microseguros 1",
            "codigo": 610
        },
        {
            "descripcion": "Microseguros 2",
            "codigo": 611
        }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTSegurosVoluntarios.ObtenerSeguros",
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

::: details sBTSeguro  

### sBTSeguro

::: center 
Los campos del tipo de dato estructurado sBTSeguro son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
codigo | Long | Código.
descripcion | String | Descripción.
:::
<!-- CIERRA SDT -->