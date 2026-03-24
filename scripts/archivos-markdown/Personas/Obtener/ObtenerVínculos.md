---
title: Obtener Vínculos
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
::: note Método para obtener un listado de los vínculos registrados.

**Nombre publicación:** BTPersonas.ObtenerVinculos

**Programa:** RBTPG041

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
sdtVinculos | [sBTVinculo](#sbtvinculo) | Listado de vínculos.


@tab Errores 

Código | Descripción
:--------- | :-----------
40001 | No existen Vínculos ingresados en el sistema.
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
      <bts:BTPersonas.ObtenerVinculos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTPersonas.ObtenerVinculos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerVinculos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 0ccca369-0793-d62f-ebc0-3033cc750dad' \
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
      <BTPersonas.ObtenerVinculosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtVinculos>
            <sBTVinculo>
               <identificador>1</identificador>
               <descripcion>Presidente</descripcion>
               <tipo/>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>2</identificador>
               <descripcion>Vicepresidente</descripcion>
               <tipo/>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>3</identificador>
               <descripcion>Director</descripcion>
               <tipo/>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>4</identificador>
               <descripcion>Secretario</descripcion>
               <tipo/>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>5</identificador>
               <descripcion>Tesorero</descripcion>
               <tipo/>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>6</identificador>
               <descripcion>Prosecretario</descripcion>
               <tipo/>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>7</identificador>
               <descripcion>Protesorero</descripcion>
               <tipo/>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>8</identificador>
               <descripcion>Socio</descripcion>
               <tipo/>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>9</identificador>
               <descripcion>Gerente</descripcion>
               <tipo/>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>10</identificador>
               <descripcion>Apoderado</descripcion>
               <tipo/>
            </sBTVinculo>
         </sdtVinculos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>828</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerVinculos</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>18:47:35</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerVinculosResponse>
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
    "sdtVinculos": {
        "sBTVinculo": [
            {
                "descripcion": "Presidente",
                "identificador": "1",
                "tipo": ""
            },
            {
                "descripcion": "Vicepresidente",
                "identificador": "2",
                "tipo": ""
            },
            {
                "descripcion": "Director",
                "identificador": "3",
                "tipo": ""
            },
            {
                "descripcion": "Secretario",
                "identificador": "4",
                "tipo": ""
            },
            {
                "descripcion": "Tesorero",
                "identificador": "5",
                "tipo": ""
            },
            {
                "descripcion": "Prosecretario",
                "identificador": "6",
                "tipo": ""
            },
            {
                "descripcion": "Protesorero",
                "identificador": "7",
                "tipo": ""
            },
            {
                "descripcion": "Socio",
                "identificador": "8",
                "tipo": ""
            },
            {
                "descripcion": "Gerente",
                "identificador": "9",
                "tipo": ""
            },
            {
                "descripcion": "Apoderado",
                "identificador": "10",
                "tipo": ""
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "827",
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerVinculos",
        "Fecha": "2017-12-17",
        "Requerimiento": "",
        "Hora": "18:47:21",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTVinculo  

### sBTVinculo

::: center 
Los campos del tipo de dato estructurado sBTVinculo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción de vínculo. 
identificador | Short | Identificador de vínculo. 
tipo | String | Tipo de vínculo. 
:::
<!-- CIERRA SDT -->