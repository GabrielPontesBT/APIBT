---
title: Obtener Cotización
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
::: note Método para obtener la cotización del día.

**Nombre publicación:** BTPrecios.ObtenerCotizacion

**Programa:** RBTPG840

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
monedaId | Short | Identificador de moneda. Si es vacío devuelve las cotizaciones de todas las monedas.
fecha | Date | Fecha de cotización. Si es vacía devuelve cotización al día de hoy.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtCotizaciones | [sBTCotizacion](#sbtcotizacion) | Listado de cotizaciones.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | El identificador de moneda se corresponde con la moneda nacional.
30002 | No se recuperó moneda para el identificador ingresado.
30003 | No se recuperaron monedas.
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
      <bts:BTPrecios.ObtenerCotizacion>
         <bts:Btinreq>
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>bms</bts:Device>
         </bts:Btinreq>
         <bts:monedaId>2</bts:monedaId>
         <bts:fecha></bts:fecha>
      </bts:BTPrecios.ObtenerCotizacion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerCotizacion' \
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
    "monedaId": "2",
    "fecha": ""
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
      <BTPrecios.ObtenerCotizacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>bms</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f99a68ce154A8B5C60A82434</Token>
         </Btinreq>
         <sdtCotizaciones>
            <sBTCotizacion>
               <venta>12.00</venta>
               <monedaISO>U$S</monedaISO>
               <compra>12.00</compra>
               <identificador>2</identificador>
            </sBTCotizacion>
         </sdtCotizaciones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1115</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrecios.ObtenerCotizacion</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2020-11-06</Fecha>
            <Hora>10:59:24</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrecios.ObtenerCotizacionResponse>
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
    "sdtCotizaciones": {
        "sBTCotizacion": [
            {
                "venta": 12,
                "monedaISO": "U$S",
                "compra": 12,
                "identificador": 2
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1119,
        "Estado": "OK",
        "Servicio": "BTPrecios.ObtenerCotizacion",
        "Requerimiento": "0",
        "Fecha": "2020-11-06",
        "Hora": "12:12:21",
        "Canal": "BTDIGITAL"
    }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCotizacion  

### sBTCotizacion

::: center 
Los campos del tipo de dato estructurado sBTCotizacion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
compra | Double | Cotización Compra. 
identificador | Short | Identificador de moneda. 
monedaISO | String | Código ISO de la moneda. 
venta | Double | Cotización Venta. 
:::
<!-- CIERRA SDT -->