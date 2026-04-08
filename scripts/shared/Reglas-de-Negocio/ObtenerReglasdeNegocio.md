---
title: Obtener Reglas de Negocio
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
::: note Método para obtener un listado de las reglas de negocio.

**Nombre publicación:** BTReglasNegocio.ObtenerReglasNegocio

**Programa:** RBTPGR53

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtReglasNegocio | [sBTReglaNegocio](#sbtreglanegocio) | Listado de reglas de negocio.

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
      <bts:BTReglasNegocio.ObtenerReglasNegocio>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>86b12d9cbaCD285A89A23FBE</bts:Token>
         </bts:Btinreq>
      </bts:BTReglasNegocio.ObtenerReglasNegocio>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTReglasNegocio?ObtenerReglasNegocio' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "bc8b678bc44A8B5C60A82434"
    },
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
      <BTReglasNegocio.ObtenerReglasNegocioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>86b12d9cbaCD285A89A23FBE</Token>
         </Btinreq>
         <sdtReglasNegocio>
            <sBTReglaNegocio>
               <descripcion>Tipo de Cambio</descripcion>
               <reglaId>1</reglaId>
            </sBTReglaNegocio>
            <sBTReglaNegocio>
               <descripcion>Botón Datos Pep's</descripcion>
               <reglaId>4</reglaId>
            </sBTReglaNegocio>
            ...
         </sdtReglasNegocio>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>43439</Numero>
            <Estado>OK</Estado>
            <Servicio>BTReglasNegocio.ObtenerReglasNegocio</Servicio>
            <Fecha>2022-06-02</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>07:56:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTReglasNegocio.ObtenerReglasNegocioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "c2cfd09eff4A8B5C60A82434"
    },
    "sdtReglasNegocio": {
         "sBTReglaNegocio": [
         { 
            "descripcion": "Tipo de Cambio", 
            "reglaId": "1" 
         }, 
         { 
            "descripcion": "Botón Datos Pep's", 
            "reglaId": "4" 
         },
         ...
         ]
      },
      "Erroresnegocio": { 
      }, 
      "Btoutreq": { 
         "Numero": "43439", 
         "Estado": "OK", 
         "Servicio": "BTReglasNegocio.ObtenerReglasNegocio", 
         "Fecha": "2022-06-02", 
         "Requerimiento": "1", 
         "Hora": "07:56:48", 
         "Canal": "BTDIGITAL" 
    } 
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT --> 
::: details sBTReglaNegocio  

### sBTReglaNegocio

::: center 
Los campos del tipo de dato estructurado sBTReglaNegocio son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción de regla de negocio.
reglaId | Long | Código de regla de negocio. 
:::
<!-- CIERRA SDT -->