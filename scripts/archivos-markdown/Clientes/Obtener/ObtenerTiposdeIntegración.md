---
title: Obtener Tipos de Integración
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
::: note Método para obtener un listado de los tipos de integración ingresados en Bantotal.

**Nombre publicación:** BTClientes.ObtenerTiposDeIntegracion

**Programa:** RBTPG138

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
sdtTiposIntegracion | [sBTTipoIntegrante](#sbttipointegrante) | Lista de tipos de integrantes.

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
      <bts:BTClientes.ObtenerTiposDeIntegracion>
         <bts:Btinreq>
            <bts:Device>3</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>3</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>a5cd5311ae4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTClientes.ObtenerTiposDeIntegracion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerTiposDeIntegracion=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
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
      <BTClientes.ObtenerTiposDeIntegracionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>3</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>3</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>a5cd5311ae4A8B5C60A82434</Token>
         </Btinreq>
         <sdtTiposIntegracion>
            <sBTTipoIntegrante>
               <identificador>1</identificador>
               <descripcion>Titular</descripcion>
            </sBTTipoIntegrante>
            <sBTTipoIntegrante>
               <identificador>2</identificador>
               <descripcion>Apoderado</descripcion>
            </sBTTipoIntegrante>
            <sBTTipoIntegrante>
               <identificador>5</identificador>
               <descripcion>Firmante</descripcion>
            </sBTTipoIntegrante>
            <sBTTipoIntegrante>
               <identificador>7</identificador>
               <descripcion>Fiador solidario</descripcion>
            </sBTTipoIntegrante>
         </sdtTiposIntegracion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>22</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerTiposDeIntegracion</Servicio>
            <Fecha>2018-05-04</Fecha>
            <Requerimiento>3</Requerimiento>
            <Hora>11:38:36</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerTiposDeIntegracionResponse>
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
    "sdtTiposIntegracion": {
        "sBTTipoIntegrante": [
            {
                "descripcion": "Titular",
                "identificador": "1"
            },
            {
                "descripcion": "Apoderado",
                "identificador": "2"
            },
            {
                "descripcion": "Firmante",
                "identificador": "5"
            },
            {
                "descripcion": "Fiador solidario",
                "identificador": "7"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "12",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerTiposDeIntegracion",
        "Requerimiento": "1",
        "Fecha": "2018-05-04",
        "Hora": "11:15:05",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTipoIntegrante  

### sBTTipoIntegrante

::: center 
Los campos del tipo de dato estructurado sBTTipoIntegrante son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción de tipo de integrante. 
identificador | Int | Identificador de tipo de integrante. 
:::
<!-- CIERRA SDT -->