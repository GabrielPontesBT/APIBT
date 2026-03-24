---
title: Obtener Período de Acreditación
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
::: note Método para obtener el período de acreditación de una cuenta vista.

**Nombre publicación:** BTCuentasVista.ObtenerPeriodoDeAcreditacion

**Programa:** RBTPG366

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador de Subcuenta con acreditación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtPeriodoAcreditacion | [sBTPeriodoDeAcreditacion](#sbtperiododeacreditacion) | Datos de la acreditación de la subcuenta.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de Operacion.
30003 | No se recuperó la Operacion para el Identificador: [Número de identificador].
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
      <bts:BTCuentasVista.ObtenerPeriodoDeAcreditacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1136448858CD285A89A23FBE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>10211</bts:operacionUId>
      </bts:BTCuentasVista.ObtenerPeriodoDeAcreditacion>
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
        "Token": "432782790CD285A89A23FBEE",
        "Device": ""
    },
    "operacionUId": 10211
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
      <BTCuentasVista.ObtenerPeriodoDeAcreditacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1136448858CD285A89A23FBE</Token>
            <Device/>
         </Btinreq>
         <sdtperiodoAcreditacion>
            <descripcion>Diario</descripcion>
            <valor>1</valor>
         </sdtperiodoAcreditacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCuentasVista.ObtenerPeriodoDeAcreditacion</Servicio>
            <Fecha>2021-11-01</Fecha>
            <Hora>12:27:47</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8476</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCuentasVista.ObtenerPeriodoDeAcreditacionResponse>
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
        "Token": "432782790CD285A89A23FBEE",
        "Device": ""
    },
    "sdtperiodoAcreditacion": {
        "descripcion": "Diario",
        "valor": 1
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTCuentasVista.ObtenerPeriodoDeAcreditacion",
        "Fecha": "2021-11-01",
        "Hora": "12:40:20",
        "Requerimiento": "",
        "Numero": 8478,
        "Estado": "OK"
    }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPeriodoDeAcreditacion  

### sBTPeriodoDeAcreditacion

::: center 
Los campos del tipo de dato estructurado sBTPeriodoDeAcreditacion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción del periodo. 
valor | Int | Valor del periodo. 
:::
<!-- CIERRA SDT -->