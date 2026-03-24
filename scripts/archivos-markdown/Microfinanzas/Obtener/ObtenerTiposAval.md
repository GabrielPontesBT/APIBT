---
title: Obtener Tipos Aval
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
::: note Método para obtener una lista de los tipos de aval.

**Nombre publicación:** BTMicrofinanzas.ObtenerTiposAval

**Programa:** RBTPG426

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
sdtTiposAval | [sBTTipoAval](#sbttipoaval)| Listado de tipos de aval.

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
      <bts:BTMicrofinanzas.ObtenerTiposAval>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>419385365CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
      </bts:BTMicrofinanzas.ObtenerTiposAval>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerTiposAval \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	}
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
      <BTMicrofinanzas.ObtenerTiposAvalResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>419385365CD285A89A23FBEE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtTiposAval>
            <TipoAval>
               <codigo>1</codigo>
               <descripcion>Fiduciaria</descripcion>
            </TipoAval>
         </sdtTiposAval>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ObtenerTiposAval</Servicio>
            <Fecha>2019-09-17</Fecha>
            <Hora>12:20:32</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>135</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerTiposAvalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
        "sdtTiposAval": {
          "TipoAval": {
            "codigo": "1",
            "descripcion": "Fiduciaria"
          }
        },
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTMicrofinanzas.ObtenerTiposAval",
          "Fecha": "2019-09-17",
          "Hora": "12:20:32",
          "Requerimiento": "95",
          "Numero": "135",
          "Estado": "OK"
        }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTipoAval  

### sBTTipoAval

::: center 
Los campos del tipo de dato estructurado sBTTipoAval son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Short | Identificador de tipo de aval. 
descripcion | String | Descripción de tipo de aval.
:::
<!-- CIERRA SDT -->