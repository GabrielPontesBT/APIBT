---
title: Obtener Tipos de Cuenta
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
::: note Método para obtener los tipos de cuenta de tarjetas de débito ingresados en el sistema.

**Nombre publicación:** BTTarjetasDeDebito.ObtenerTiposDeCuenta

**Programa:** RBTPG379

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
sdtTiposDeCuenta | [sBTTipoDeCuenta](#sbttipodecuenta) | Listado de tipos de cuenta.

@tab Errores

No aplica.
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
      <bts:BTTarjetasDeDebito.ObtenerTiposDeCuenta>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1080548031CD285A89A23FBE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
      </bts:BTTarjetasDeDebito.ObtenerTiposDeCuenta>
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
        "Token": "1518870407CD285A89A23FBE",
        "Device": ""
    }
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
      <BTTarjetasDeDebito.ObtenerTiposDeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>1080548031CD285A89A23FBE</Token>
            <Device/>
         </Btinreq>
         <sdtTiposDeCuenta>
            <SdtsBTTipoDeCuenta>
               <descripcion>Preferencial</descripcion>
               <codigo>1</codigo>
            </SdtsBTTipoDeCuenta>
            <SdtsBTTipoDeCuenta>
               <descripcion>Normal</descripcion>
               <codigo>5</codigo>
            </SdtsBTTipoDeCuenta>
         </sdtTiposDeCuenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTTarjetasDeDebito.ObtenerTiposDeCuenta</Servicio>
            <Fecha>2021-10-29</Fecha>
            <Hora>14:27:12</Hora>
            <Requerimiento/>
            <Numero>8451</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerTiposDeCuentaResponse>
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
        "Token": "1518870407CD285A89A23FBE",
        "Device": ""
    },
    "sdtTiposDeCuenta": {
        "SdtsBTTipoDeCuenta": [
            {
                "descripcion": "Preferencial",
                "codigo": 1
            },
            {
                "descripcion": "Normal",
                "codigo": 5
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTTarjetasDeDebito.ObtenerTiposDeCuenta",
        "Fecha": "2021-10-29",
        "Hora": "13:37:58",
        "Requerimiento": "",
        "Numero": 8449,
        "Estado": "OK"
    }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTipoDeCuenta  

### sBTTipoDeCuenta

::: center 
Los campos del tipo de dato estructurado sBTTipoDeCuenta son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Int | Código del tipo de cuenta. 
descripcion | String | Descripción del tipo de cuenta. 
:::
<!-- CIERRA SDT -->