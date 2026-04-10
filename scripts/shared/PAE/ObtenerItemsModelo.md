---
title: Obtener Items Modelo
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
::: note Método para obtener los items de un determinado modelo PAE.

**Nombre publicación:** BTPAE.ObtenerItemsModelo

**Programa:** RBTPGP52

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
modeloId | Short | Código de modelo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtItems | [sBTItemPAE](#sbtitempae) | Listado de items de modelo PAE.

@tab Errores

Código | Descripción
:--------- | :---------
1011050 | No se recibió modelo de evaluación PAE.
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
      <bts:BTPAE.ObtenerItemsModelo>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>86b12d9cbaCD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:modeloId>2</bts:modeloId>
      </bts:BTPAE.ObtenerItemsModelo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPAE?ObtenerItemsModelo' \
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
    "modeloId": 1
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
      <BTPAE.ObtenerItemsModeloResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>86b12d9cbaCD285A89A23FBE</Token>
         </Btinreq>
         <sdtItems>
            <sBTItemPAE>
               <tipoDato>N-Numerico</tipoDato>
               <itemId>105</itemId>
               <nombre>ANTIG_LABORAL</nombre>
            </sBTItemPAE>
            <sBTItemPAE>
               <tipoDato>N-Numerico</tipoDato>
               <itemId>115</itemId>
               <nombre>MONTO_CRED_MN</nombre>
            </sBTItemPAE>
            ...
         </sdtItems>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>43265</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPAE.ObtenerItemsModelo</Servicio>
            <Fecha>2022-06-02</Fecha>
            <Hora>07:11:36</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPAE.ObtenerItemsModeloResponse>
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
    "sdtItems": {
         "sBTItemPAE": [ 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "105", 
            "nombre": "ANTIG_LABORAL" 
         }, 
         { 
            "tipoDato": "N-Numerico", 
            "itemId": "115", 
            "nombre": "MONTO_CRED_MN" 
         },
         ...
         ] 
      }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPAE.ObtenerItemsModelo", 
        "Fecha": "2022-06-01", 
        "Hora": "15:38:59", 
        "Requerimiento": "1", 
        "Numero": "8881", 
        "Estado": "OK" 
    } 
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTItemPAE  

### sBTItemPAE

::: center 
Los campos del tipo de dato estructurado sBTItemPAE son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
itemId | Short | Código de item. 
nombre | String | Nombre de item. 
tipoDato | String | Descripción de tipo de dato. 
:::
<!-- CIERRA SDT -->