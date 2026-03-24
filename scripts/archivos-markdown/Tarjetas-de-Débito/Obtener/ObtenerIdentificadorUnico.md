---
title: Obtener Identificador Único
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
::: note Método para obtener el identificador único de una tarjeta de débito.

**Nombre publicación:** BTTarjetasDeDebito.ObtenerIdentificadorUnico

**Programa:** RBTPG800

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
nroTarjeta | String | Número de tarjeta.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
tarjetaUId | Long | Identificador único de tarjeta.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió la tarjeta de débito.
30002 | No se recuperó el identificador para la tarjeta de débito: [Número de Tarjeta].
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
      <bts:BTTarjetasDeDebito.ObtenerIdentificadorUnico>
         <bts:Btinreq>
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>bms</bts:Device>
         </bts:Btinreq>
         <bts:nroTarjeta>4517720800000029</bts:nroTarjeta>
      </bts:BTTarjetasDeDebito.ObtenerIdentificadorUnico>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ObtenerIdentificadorUnico' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
    "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "f99a68ce154A8B5C60A82434"
    },
    "nroTarjeta": "4517720800000029"
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
      <BTTarjetasDeDebito.ObtenerIdentificadorUnicoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>bms</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f99a68ce154A8B5C60A82434</Token>
         </Btinreq>
         <tarjetaUId>17</tarjetaUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1121</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTarjetasDeDebito.ObtenerIdentificadorUnico</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2020-11-06</Fecha>
            <Hora>12:19:59</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerIdentificadorUnicoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "f99a68ce154A8B5C60A82434"
    },
    "tarjetaUId": 17,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1122,
        "Estado": "OK",
        "Servicio": "BTTarjetasDeDebito.ObtenerIdentificadorUnico",
        "Requerimiento": "0",
        "Fecha": "2020-11-06",
        "Hora": "12:23:58",
        "Canal": "BTDIGITAL"
    }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->