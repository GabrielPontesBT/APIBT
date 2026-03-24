---
title: Obtener Calendarios
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
::: note Método para obtener los calendarios ingresados en el sistema.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerCalendarios

**Programa:** RBTPG284

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
sdtCalendarios | [sBTCalendario](#sbtcalendario) | Colección de calendarios.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se encontraron calendarios en el sistema.
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
      <bts:BTConfiguracionBantotal.ObtenerCalendarios>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MI</bts:Usuario>
            <bts:Device>MC</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>200f0b88B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerCalendarios>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X GET \
   'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerCalendarios' \
   -H 'cache-control: no-cache' \
   -H 'content-type: application/json' \
   -d '{
   "Btinreq": {
        "Device": "MC",
        "Usuario": "MI",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "200f0b88B5C60A82434"
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
      <BTConfiguracionBantotal.ObtenerCalendariosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>MC</Device>
            <Usuario>MI</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>200f0b88B5C60A82434</Token>
         </Btinreq>
         <sdtCalendarios>
            <sBTCalendario>
               <descripcion>Calendario 1</descripcion>
               <identificador>1</identificador>
            </sBTCalendario>
            <sBTCalendario>
               <descripcion>Calendario 2</descripcion>
               <identificador>2</identificador>
            </sBTCalendario>
         </sdtCalendarios>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>109087</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerCalendarios</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-11-24</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>09:11:46</Hora>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerCalendariosResponse>
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
    "sdtCalendarios": {
		"sBTCalendario": [
			{
				"descripcion":"Calendario 1",
				"identificador":1
			},
			{
				"descripcion":"Calendario 2",
				"identificador":2
			}
		]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 109092,
        "Servicio": "BTConfiguracionBantotal.ObtenerCalendarios",
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