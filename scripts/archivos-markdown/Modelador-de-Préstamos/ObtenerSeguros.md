---
title: Obtener Seguros
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
::: note Método para obtener los seguros disponibles de un producto de préstamo.

**Nombre publicación:** BTModeladorPrestamos.ObtenerSeguros

**Programa:** RBTPG351

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
sdtSeguros | [sBTSeguroPrestamo](#sbtseguroprestamo) | Listado de seguros.

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
      <bts:BTModeladorPrestamos.ObtenerSeguros>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>194002532CD285A89A23FBEE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
         <bts:productoUId>105</bts:productoUId>
      </bts:BTModeladorPrestamos.ObtenerSeguros>
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
        "Token": "1511184612CD285A89A23FBE",
        "Device": ""
    },
    "productoUId": "105"
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
      <BTModeladorPrestamos.ObtenerSegurosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>194002532CD285A89A23FBEE</Token>
            <Device/>
         </Btinreq>
         <sdtSeguros>
            <SdtsBTSeguroPrestamo>
               <codigo>100</codigo>
               <descripcion>ALICO - Vida %s/cap. inicial</descripcion>
               <tipo>VIDA</tipo>
               <modificable>S</modificable>
               <importeFijo>100.00</importeFijo>
               <porcentaje>0.1000</porcentaje>
            </SdtsBTSeguroPrestamo>
         </sdtSeguros>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTModeladorPrestamos.ObtenerSeguros</Servicio>
            <Fecha>2021-11-03</Fecha>
            <Hora>18:12:34</Hora>
            <Requerimiento/>
            <Numero>8633</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTModeladorPrestamos.ObtenerSegurosResponse>
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
        "Token": "1511184612CD285A89A23FBE",
        "Device": ""
    },
    "sdtSeguros": {
        "SdtsBTSeguroPrestamo": [
            {
                "codigo": 100,
                "descripcion": "ALICO - Vida %s/cap. inicial",
                "tipo": "VIDA",
                "modificable": "S",
                "importeFijo": 100.00,
                "porcentaje": 0.1000
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTModeladorPrestamos.ObtenerSeguros",
        "Fecha": "2021-11-03",
        "Hora": "17:44:10",
        "Requerimiento": "",
        "Numero": 8619,
        "Estado": "OK"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSeguroPrestamo  

### sBTSeguroPrestamo

::: center 
Los campos del tipo de dato estructurado sBTSeguroPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Int | Código del seguro. 
descripcion | String | Descripción del seguro. 
importeFijo | Decimal | Importe fijo del seguro. 
modificable | String | Indica si es modificable. 
porcentaje | Decimal | Porcentaje del seguro. 
tipo | String | Tipo del seguro. 
:::
<!-- CIERRA SDT -->