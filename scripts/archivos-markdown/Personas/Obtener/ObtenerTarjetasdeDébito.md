---
title: Obtener Tarjetas de Débito
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
::: note Método para obtener las tarjetas de débito de una persona.

**Nombre publicación:** BTPersonas.ObtenerTarjetasDeDebito

**Programa:** RBTPG383

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtTarjetas | [sBDProductoTarjeta](#sbdproductotarjeta) | Listado de tarjetas de débito.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de persona.
30002 | No se recuperó la persona para el identificador: [Número de identificador].
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
      <bts:BTPersonas.ObtenerTarjetasDeDebito>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>c2cfd09eff4A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>381</bts:personaUId>
      </bts:BTPersonas.ObtenerTarjetasDeDebito>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerTarjetasDeDebito' \
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
   "personaUId": "381"
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
      <BTPersonas.ObtenerTarjetasDeDebitoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>MINSTALADOR</Usuario>
            <Token>c2cfd09eff4A8B5C60A82434</Token>
            <Requerimiento>1</Requerimiento>
            <Device>GP</Device>
         </Btinreq>
         <sdtTarjetas>
            <SdtsBDProductoTarjeta>
               <sucursal>Sucursal Beta</sucursal>
               <numeroTarjeta>5010730101000000089</numeroTarjeta>
               <adicional>N</adicional>
               <tarjetaUID>2000001957</tarjetaUID>
               <tipoTarjeta>MAESTRO NOMINADA</tipoTarjeta>
            </SdtsBDProductoTarjeta>
            <SdtsBDProductoTarjeta>
               <sucursal>Sucursal Beta</sucursal>
               <numeroTarjeta>5010730101000000132</numeroTarjeta>
               <adicional>N</adicional>
               <tarjetaUID>2000001942</tarjetaUID>
               <tipoTarjeta>MAESTRO PREEMBOZADA</tipoTarjeta>
            </SdtsBDProductoTarjeta>
            <SdtsBDProductoTarjeta>
               <sucursal>Sucursal Beta</sucursal>
               <numeroTarjeta>5010730101000000098</numeroTarjeta>
               <adicional>N</adicional>
               <tarjetaUID>2000001982</tarjetaUID>
               <tipoTarjeta>MAESTRO NOMINADA</tipoTarjeta>
            </SdtsBDProductoTarjeta>
            <SdtsBDProductoTarjeta>
               <sucursal>Sucursal Beta</sucursal>
               <numeroTarjeta>5010730101000000105</numeroTarjeta>
               <adicional>N</adicional>
               <tarjetaUID>2000001983</tarjetaUID>
               <tipoTarjeta>MAESTRO NOMINADA</tipoTarjeta>
            </SdtsBDProductoTarjeta>
            <SdtsBDProductoTarjeta>
               <sucursal>Sucursal Beta</sucursal>
               <numeroTarjeta>5010730101000000141</numeroTarjeta>
               <adicional>N</adicional>
               <tarjetaUID>2000001943</tarjetaUID>
               <tipoTarjeta>MAESTRO PREEMBOZADA</tipoTarjeta>
            </SdtsBDProductoTarjeta>
            <SdtsBDProductoTarjeta>
               <sucursal>Sucursal Beta</sucursal>
               <numeroTarjeta>5010730101000000123</numeroTarjeta>
               <adicional>N</adicional>
               <tarjetaUID>2000001985</tarjetaUID>
               <tipoTarjeta>MAESTRO NOMINADA</tipoTarjeta>
            </SdtsBDProductoTarjeta>
         </sdtTarjetas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Requerimiento>1</Requerimiento>
            <Servicio>BTPersonas.ObtenerTarjetasDeDebito</Servicio>
            <Canal>BTDIGITAL</Canal>
            <Estado>OK</Estado>
            <Fecha>2022-05-26</Fecha>
            <Numero>16575</Numero>
            <Hora>09:01:21</Hora>
         </Btoutreq>
      </BTPersonas.ObtenerTarjetasDeDebitoResponse>
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
    "sdtTarjetas": { 
        "SdtsBDProductoTarjeta": [ 
        { 
            "sucursal": "Sucursal Beta", 
            "numeroTarjeta": "5010730101000000089", 
            "adicional": "N", 
            "tarjetaUID": "2000001957", 
            "tipoTarjeta": "MAESTRO NOMINADA" 
        }, 
        { 
            "sucursal": "Sucursal Beta", 
            "numeroTarjeta": "5010730101000000132", 
            "adicional": "N", 
            "tarjetaUID": "2000001942", 
            "tipoTarjeta": "MAESTRO PREEMBOZADA" 
        }, 
        { 
            "sucursal": "Sucursal Beta", 
            "numeroTarjeta": "5010730101000000098", 
            "adicional": "N", 
            "tarjetaUID": "2000001982", 
            "tipoTarjeta": "MAESTRO NOMINADA" 
        }, 
        { 
            "sucursal": "Sucursal Beta", 
            "numeroTarjeta": "5010730101000000105", 
            "adicional": "N", 
            "tarjetaUID": "2000001983", 
            "tipoTarjeta": "MAESTRO NOMINADA" 
        }, 
        { 
            "sucursal": "Sucursal Beta", 
            "numeroTarjeta": "5010730101000000141", 
            "adicional": "N", 
            "tarjetaUID": "2000001943", 
            "tipoTarjeta": "MAESTRO PREEMBOZADA" 
        }, 
        { 
            "sucursal": "Sucursal Beta", 
            "numeroTarjeta": "5010730101000000123", 
            "adicional": "N", 
            "tarjetaUID": "2000001985", 
            "tipoTarjeta": "MAESTRO NOMINADA" 
        } 
        ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerTarjetasDeDebito", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBDProductoTarjeta  

### sBDProductoTarjeta

::: center 
Los campos del tipo de dato estructurado sBDProductoTarjeta son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
adicional | String | Adicional.   
numeroTarjeta | String | Número de tarjeta. 
sucursal | String | Sucursal de la tarjeta. 
tarjetaUId | Long | Identificador único de tarjeta de débito. 
tipoTarjeta | String | Tipo de tarjeta. 
:::
<!-- CIERRA SDT -->