---
title: Obtener Identidades de Género
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
::: note Método para obtener un listado de las identidades de género ingresadas en el sistema.

**Nombre publicación:** BTPersonas.ObtenerIdentidadesDeGenero

**Programa:** RBTPG380

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
sdtIdentidadesDeGenero | [sBTIdentidadDeGenero](#sbtidentidaddegenero) | Listado de identidades de género.
 
@tab  Errores

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
      <bts:BTPersonas.ObtenerIdentidadesDeGenero>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1394857355CD285A89A23FBE</bts:Token>
            <bts:Device>AV</bts:Device>
         </bts:Btinreq>
      </bts:BTPersonas.ObtenerIdentidadesDeGenero>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
         "Canal": "BTDIGITAL",
         "Requerimiento": "1",
         "Usuario": "INSTALADOR",
         "Token": "963643292CD285A89A23FBEE",
         "Device": "AV"
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
      <BTPersonas.ObtenerIdentidadesDeGeneroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1394857355CD285A89A23FBE</Token>
            <Device>AV</Device>
         </Btinreq>
         <sdtIdentidadesDeGenero>
            <sBTIdentidadDeGenero>
               <codigo>F</codigo>
               <descripcion>Femenino</descripcion>
            </sBTIdentidadDeGenero>
            <sBTIdentidadDeGenero>
               <codigo>M</codigo>
               <descripcion>Masculino</descripcion>
            </sBTIdentidadDeGenero>
         </sdtIdentidadesDeGenero>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.ObtenerIdentidadesDeGenero</Servicio>
            <Fecha>2021-11-15</Fecha>
            <Hora>12:47:10</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8696</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.ObtenerIdentidadesDeGeneroResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "1",
        "Usuario": "INSTALADOR",
        "Token": "963643292CD285A89A23FBEE",
        "Device": "AV"
    },
    "sdtIdentidadesDeGenero": {
        "sBTIdentidadDeGenero": [
            {
                "codigo": "F",
                "descripcion": "Femenino"
            },
            {
                "codigo": "M",
                "descripcion": "Masculino"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTPersonas.ObtenerIdentidadesDeGenero",
        "Fecha": "2021-11-15",
        "Hora": "11:21:59",
        "Requerimiento": "1",
        "Numero": 8693,
        "Estado": "OK"
    }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTIdentidadDeGenero  

### sBTIdentidadDeGenero

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Short | Código de identidad de género. 
descripcion | String | Descripción de identidad de género.  

:::
<!-- CIERRA SDT -->