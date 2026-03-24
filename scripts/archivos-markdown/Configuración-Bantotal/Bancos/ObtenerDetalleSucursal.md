---
title: Obtener Detalle de Sucursal
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
::: note Método para obtener el detalle de una sucursal.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerDetalleSucursal

**Programa:** RBTPG558

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sucursalId | Int | Identificador de la sucursal.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtDetalleSucursal | [sBTDetalleSucursal](#sbtdetallesucursal) | Detalle de la sucursal.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de sucursal.
41001 | La Sucursal no existe.

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
      <bts:BTConfiguracionBantotal.ObtenerDetalleSucursal>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9060352790A5422FE377DB47</bts:Token>
         </bts:Btinreq>
         <bts:sucursalId>1</bts:sucursalId>
      </bts:BTConfiguracionBantotal.ObtenerDetalleSucursal>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerDetalleSucursal=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
      "Btinreq": {
            "Requerimiento": "1",
            "Device": "GZ",
            "Canal": "BTDIGITAL",
            "Usuario": "MINSTALADOR",
            "Token": "6fc29caa9d4A8B5C60A82434"
      },
      "sucursalId": 1,
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
      <BTConfiguracionBantotal.ObtenerDetalleSucursalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>9060352790A5422FE377DB47</Token>
         </Btinreq>
         <sdtDetalleSucursal>
            <oficinaPrincipal>Sucursal Ciudad de la Costa</oficinaPrincipal>
            <nombre>Casa Matriz</nombre>
            <oficinaPrincipalId>1000</oficinaPrincipalId>
            <departamento/>
            <barrio/>
            <codigo>1</codigo>
            <categoria/>
            <calendarioId>1</calendarioId>
            <ciudad/>
            <nroPuerta>2141</nroPuerta>
            <estadoId>1</estadoId>
            <telefono>15554454</telefono>
            <email/>
            <codigoPostal>55000</codigoPostal>
            <ciudadId>1022</ciudadId>
            <barrioId>0</barrioId>
            <categoriaId>0</categoriaId>
            <calle>Pedro Cosio</calle>
            <estado/>
            <departamentoId>1</departamentoId>
         </sdtDetalleSucursal>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-11</Fecha>
            <Hora>15:16:27</Hora>
            <Numero>24977</Numero>
            <Servicio>BTConfiguracionBantotal.ObtenerDetalleSucursal</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerDetalleSucursalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "sdtDetalleSucursal": {
         "oficinaPrincipal": "Sucursal Ciudad de la Costa",
         "nombre": "Casa Matriz",
         "oficinaPrincipalId": 1000,
         "departamento": "",
         "barrio": "",
         "codigo": 1,
         "categoria": "",
         "calendarioId": 1,
         "ciudad": "",
         "nroPuerta": 2141,
         "estadoId": 1,
         "telefono": 15554454,
         "email": "",
         "codigoPostal": 55000,
         "ciudadId": 1022,
         "barrioId": 0,
         "categoriaId": 0,
         "calle": "Pedro Cosio",
         "estado": "",
         "departamentoId": 1
      },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerDetalleSucursal",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDetalleSucursal  

### sBTDetalleSucursal

::: center 
Los campos del tipo de dato estructurado sBTDetalleSucursal son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
barrio | String | Barrio.
barrioId | Int | Identificador del barrio.
calendarioId | Short | Identificador de calendario.
calle | String | Calle.
categoria | String | Categoría.
categoriaId | Int | Identificador de la categoría.
ciudad | String | Ciudad.
ciudadId | Int | Identificador de la ciudad.
codigo | Int | Código.
codigoPostal | String | Código postal.
departamento | String | Departamento.
departamentoId | Int | Identificador del departamento.
email | String | Email.
estado | String | Estado.
estadoId | Short | Identificador del estado.
nombre | String | Nombre de la sucursal.
nroPuerta | Int | Número de puerta.
oficinaPrincipal | String | Oficina principal.
oficinaPrincipalId | Int | Identificador de la oficina principal.
telefono | String | Teléfono de la sucursal.
:::
<!-- CIERRA SDT -->