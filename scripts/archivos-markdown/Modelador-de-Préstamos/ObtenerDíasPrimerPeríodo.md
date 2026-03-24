---
title: Obtener Días Primer Período
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
::: note Método para obtener cantidad mínima y máxima de días para el primer período de un producto de préstamo.

**Nombre publicación:** BTModeladorPrestamos.ObtenerDiasPrimerPeriodo

**Programa:** RBTPG354

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
productoUId | Long | Identificador de producto.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
minimo | Long | Mínimo de días posibles para el primer período.
maximo | Long | Máximo de días posibles para el primer período.

@tab Errores

Código | Descripción
:--------- | :-----------
30002 | Existe registro con la cuenta indicada.
30003 | No existe registro para el identificador único.
30004 | No existe registro para el producto indicado.
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
      <bts:BTModeladorPrestamos.ObtenerDiasPrimerPeriodo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>194002532CD285A89A23FBEE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
         <bts:productoUId>105</bts:productoUId>
      </bts:BTModeladorPrestamos.ObtenerDiasPrimerPeriodo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "194002532CD285A89A23FBEE",
        "Device": ""
    },
    "productoUId": "105"
}
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTModeladorPrestamos.ObtenerDiasPrimerPeriodoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>194002532CD285A89A23FBEE</Token>
            <Device/>
         </Btinreq>
         <minimo>1</minimo>
         <maximo>999</maximo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTModeladorPrestamos.ObtenerDiasPrimerPeriodo</Servicio>
            <Fecha>2021-11-03</Fecha>
            <Hora>18:18:16</Hora>
            <Requerimiento/>
            <Numero>8637</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTModeladorPrestamos.ObtenerDiasPrimerPeriodoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "194002532CD285A89A23FBEE",
        "Device": ""
    },
    "minimo": 1,
    "maximo": 999,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTModeladorPrestamos.ObtenerDiasPrimerPeriodo",
        "Fecha": "2021-11-03",
        "Hora": "18:03:43",
        "Requerimiento": "",
        "Numero": 8630,
        "Estado": "OK"
    }
}
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->