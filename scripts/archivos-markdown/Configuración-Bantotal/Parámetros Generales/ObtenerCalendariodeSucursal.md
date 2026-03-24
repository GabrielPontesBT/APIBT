---
title: Obtener Calendario de Sucursal
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
::: note Método para obtener el calendario de una sucursal.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerCalendarioDeSucursal

**Programa:** RBTPG283

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sucursalId | Int | Identificador de sucursal.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
descripcionSucursal | String | Descripción de la sucursal.
sdtCalendario | [sBTCalendario](#sbtcalendario) | Calendario de la sucursal.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de sucursal.
40001 | No existe sucursal con el identificador ingresado.
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
      <bts:BTConfiguracionBantotal.ObtenerCalendarioDeSucursal>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MI</bts:Usuario>
            <bts:Device>MC</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>200f0b88B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sucursalId>1000</bts:sucursalId>
      </bts:BTConfiguracionBantotal.ObtenerCalendarioDeSucursal>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X GET \
   'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerCalendarioDeSucursal' \
   -H 'cache-control: no-cache' \
   -H 'content-type: application/json' \
   -d '{
   "Btinreq": {
        "Device": "MC",
        "Usuario": "MI",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "200f0b88B5C60A82434"
    },
	"sucursalId":1000
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
      <BTConfiguracionBantotal.ObtenerCalendarioDeSucursalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>MC</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>200f0b88B5C60A82434</Token>
         </Btinreq>
         <descripcionSucursal>Sucursal Ciudad de la Costa</descripcionSucursal>
         <sdtCalendario>
            <descripcion>Calendario 1</descripcion>
            <identificador>1</identificador>
         </sdtCalendario>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>109092</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerCalendarioDeSucursal</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-11-24</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>09:20:38</Hora>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerCalendarioDeSucursalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Device": "MC",
        "Usuario": "MI",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "200f0b88B5C60A82434"
    },
	"descripcionSucursal":"Sucursal Ciudad de la Costa",
    "sdtCalendario": {
        "descripcion":"Calendario 1",
        "identificador":1
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 109092,
        "Servicio": "BTConfiguracionBantotal.ObtenerCalendarioDeSucursal",
        "Estado": "OK",
        "Fecha": "2020-11-24",
        "Requerimiento": "0",
        "Hora": "14:13:38",
        "Canal": "BTDIGITAL"
    }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCalendario  

### sBTCalendario

::: center 
Los campos del tipo de dato estructurado sBTCalendario son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción del calendario.
identificador | Short | Código del calendario.
:::
<!-- CIERRA SDT -->