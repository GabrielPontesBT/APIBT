---
title: Obtener Débito Automático de Préstamo
icon: /assets/image/nuevo.svg
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
::: note Método para obtener si la cuenta de ahorro es un débito automático de un préstamo.

**Nombre publicación:** BTCuentasDeAhorro.ObtenerDebitoAutomaticoDePrestamo

**Programa:** RBTPG638

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtCobroPrestamo | [sBTCobroPrestamo](#sbtcobroprestamo) | Datos de cobro del préstamo.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador único de operación.
30002 | No se recuperó operación para el identificador: [Número de identificador].
30003 | La operación ingresada no corresponde a una cuenta de ahorro.
40001 | No se encontraron registros para la operación ingresada.
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
      <bts:BTCuentasDeAhorro.ObtenerDebitoAutomaticoDePrestamo>
         <bts:Btinreq>
            <bts:Device>AS</bts:Device>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>ba1db0c9adCD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>81</bts:operacionUId>
      </bts:BTCuentasDeAhorro.ObtenerDebitoAutomaticoDePrestamo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Device": "AS",
    "Requerimiento": {},
    "Canal": "BTDIGITAL",
    "Usuario": "INSTALADOR",
    "Token": "jl1dv2s9advF271A85B22FCH"
  },
  "operacionUId": "83"
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
      <BTCuentasDeAhorro.ObtenerDebitoAutomaticoDePrestamoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AS</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>ba1db0c9adCD285A89A23FBE</Token>
         </Btinreq>
         <sdtCobroPrestamo>
            <sBTCobroPrestamo>
               <operacionUId>510</operacionUId>
               <cobroParcial>S</cobroParcial>
               <admiteSobregiro>N</admiteSobregiro>
            </sBTCobroPrestamo>
            <sBTCobroPrestamo>
               <operacionUId>511</operacionUId>
               <cobroParcial>S</cobroParcial>
               <admiteSobregiro>N</admiteSobregiro>
            </sBTCobroPrestamo>
            <sBTCobroPrestamo>
               <operacionUId>512</operacionUId>
               <cobroParcial>S</cobroParcial>
               <admiteSobregiro>N</admiteSobregiro>
            </sBTCobroPrestamo>
            <sBTCobroPrestamo>
               <operacionUId>513</operacionUId>
               <cobroParcial>S</cobroParcial>
               <admiteSobregiro>N</admiteSobregiro>
            </sBTCobroPrestamo>
            <sBTCobroPrestamo>
               <operacionUId>514</operacionUId>
               <cobroParcial>S</cobroParcial>
               <admiteSobregiro>N</admiteSobregiro>
            </sBTCobroPrestamo>
            <sBTCobroPrestamo>
               <operacionUId>515</operacionUId>
               <cobroParcial>S</cobroParcial>
               <admiteSobregiro>N</admiteSobregiro>
            </sBTCobroPrestamo>
            <sBTCobroPrestamo>
               <operacionUId>516</operacionUId>
               <cobroParcial>S</cobroParcial>
               <admiteSobregiro>S</admiteSobregiro>
            </sBTCobroPrestamo>
            <sBTCobroPrestamo>
               <operacionUId>517</operacionUId>
               <cobroParcial>S</cobroParcial>
               <admiteSobregiro>N</admiteSobregiro>
            </sBTCobroPrestamo>
            <sBTCobroPrestamo>
               <operacionUId>518</operacionUId>
               <cobroParcial>S</cobroParcial>
               <admiteSobregiro>N</admiteSobregiro>
            </sBTCobroPrestamo>
            <sBTCobroPrestamo>
               <operacionUId>519</operacionUId>
               <cobroParcial>S</cobroParcial>
               <admiteSobregiro>N</admiteSobregiro>
            </sBTCobroPrestamo>
         </sdtCobroPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>15842</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasDeAhorro.ObtenerDebitoAutomaticoDePrestamo</Servicio>
            <Fecha>2025-11-24</Fecha>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Hora>16:28:07</Hora>
         </Btoutreq>
      </BTCuentasDeAhorro.ObtenerDebitoAutomaticoDePrestamoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Device": "AS",
    "Requerimiento": {},
    "Canal": "BTDIGITAL",
    "Usuario": "INSTALADOR",
    "Token": "jl1dv2s9advF271A85B22FCH"
  },
  "sdtCobroPrestamo": {
    "sBTCobroPrestamo": [
      {
        "operacionUId": "520",
        "cobroParcial": "S",
        "admiteSobregiro": "N"
      },
      {
        "operacionUId": "521",
        "cobroParcial": "S",
        "admiteSobregiro": "N"
      }
    ]
  },
  "Btoutreq": {
    "Numero": "15848",
    "Estado": "OK",
    "Servicio": "BTCuentasDeAhorro.ObtenerDebitoAutomaticoDePrestamo",
    "Requerimiento": "",
    "Fecha": "2025-11-25",
    "Hora": "09:17:26",
    "Canal": "BTDIGITAL"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCobroPrestamo  

### sBTCobroPrestamo

::: center 
Los campos del tipo de dato estructurado sBTCobroPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
operacionUId | Long | Identificador único de operación.
admiteSobregiro | String | ¿Admite sobregiro? (S/N).
cobroParcial | String | Cobro parcial (S/N).

:::
<!-- CIERRA SDT -->
