---
title: Obtener Detalle de Calendario
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
::: note Método para obtener el detalle de los días de un determinado calendario.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerDetalleCalendario

**Programa:** RBTPG285

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
calendarioId | Short | Identificador de calendario.
fechaInicio | Date | Fecha de inicio de visualización de calendario.
fechaFin | Date | Fecha de fin de visualización de calendario.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
descripcionCalendario | String | Descripción del calendario.
sdtDetalleCalendario | [sBTDiaCalendario](#sbtdiacalendario) | Detalle de la consulta del calendario.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió identificador de calendario.
30002 | No se recibió fecha de inicio.
30003 | No se recibió fecha de fin.
40001 | No existe calendario con el identificador ingresado.
40002 | No se pudo obtener detalle para los datos ingresados ingresados.
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
      <bts:BTConfiguracionBantotal.ObtenerDetalleCalendario>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>MC</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>200f0b8b654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:calendarioId>1</bts:calendarioId>
         <bts:fechaInicio>2020-10-01</bts:fechaInicio>
         <bts:fechaFin>2020-10-31</bts:fechaFin>
      </bts:BTConfiguracionBantotal.ObtenerDetalleCalendario>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Device": "bms",
    "Usuario": "MINSTALADOR",
    "Requerimiento": "0",
    "Canal": "BTDIGITAL",
    "Token": "faa36bd33f4A8B5C60A82434"
  },
  "calendarioId": "2020-10-31",
  "fechaInicio": "",
  "fechaFin": ""
}
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
      <BTConfiguracionBantotal.ObtenerDetalleCalendarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>MC</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>200f0b8b654A8B5C60A82434</Token>
         </Btinreq>
         <descripcionCalendario>Calendario 1</descripcionCalendario>
         <sdtDetalleCalendario>
            <sBTDiaCalendario>
               <fecha>2020-10-01</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-10-02</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
         </sdtDetalleCalendario>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>109132</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerDetalleCalendario</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-11-24</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>10:41:08</Hora>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerDetalleCalendarioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Device": "MC",
    "Usuario": "MINSTALADOR",
    "Requerimiento": "1",
    "Canal": "BTDIGITAL",
    "Token": "200f0b8b654A8B5C60A82434"
  },
  "descripcionCalendario": "Calendario 1",
  "sdtDetalleCalendario": {
    "sBTDiaCalendario": [
      {
        "fecha": "2020-10-01",
        "habil": "S"
      },
      {
        "fecha": "2020-10-02",
        "habil": "S"
      }
    ]
  },
  "Btoutreq": {
    "Numero": "109132",
    "Estado": "OK",
    "Servicio": "BTConfiguracionBantotal.ObtenerDetalleCalendario",
    "Requerimiento": "1",
    "Fecha": "2020-11-24",
    "Canal": "BTDIGITAL",
    "Hora": "10:41:08"
  }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDiaCalendario  

### sBTDiaCalendario

::: center 
Los campos del tipo de dato estructurado sBTDiaCalendario son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
fecha | Date | Día del calendario.
habil | String | ¿Día hábil? (S/N)
:::
<!-- CIERRA SDT -->