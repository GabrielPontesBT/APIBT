---
title: Obtener Beneficiario Según Filtro
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
::: note Método para obtener el beneficiario según el filtro.

**Nombre publicación:** BTCASHManagement.ObtenerBeneficiarioSegunFiltro

**Programa:** RBTPGC075

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
contratoId | Int | Identificador del contrato.
servicio | Short | Servicio CASH.
clienteUId | Long | Identificador único del cliente.
agendaId | Short | Identificador de la agenda.
sdtValorCampoCash | [sBTValorCampoCASH](#sbtvalorcampocash) | Lista de valores de campos CASH a buscar.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtBeneficiario | [sBTResumenBeneficiario](#sbtresumenbeneficiario) | Listado de beneficiarios.

@tab Errores

Código | Descripción
:--------- | :---------
1030701 | El Servicio no existe.
1030704 | Id de contrato cliente desconocido.
1030709 | Se requiere identificación de cuenta cliente
1030713 | El contrato no corresponde a la cuenta recibida.
1030780 | No se recupero Beneficiario para la identificación recibida.

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
      <bts:BTCASHManagement.ObtenerBeneficiarioSegunFiltro>
         <bts:Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </bts:Btinreq>
         <bts:contratoId>8</bts:contratoId>
         <bts:servicioId></bts:servicioId>
         <bts:clienteUId>364</bts:clienteUId>
         <bts:agendaId></bts:agendaId>
         <bts:sdtValorCampoCash>
            <bts:sBTValorCampoCash>
               <bts:tag></bts:tag>
               <bts:valor></bts:valor>
            </bts:sBTValorCampoCash>
         </bts:sdtValorCampoCash>
      </bts:BTCASHManagement.ObtenerBeneficiarioSegunFiltro>
   </soapenv:Body>
</soapenv:Envelope>

```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?ObtenerBeneficiarioSegunFiltro=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
      "contratoId": 8,
      "servicioId": "",
      "clienteUId": 364,
      "agendaId": "",
      "sdtValorCampoCash": {
         "sBTValorCampoCash": {
         "tag": "",
         "valor": ""
         }
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
      <BTCASHManagement.ObtenerBeneficiarioSegunFiltroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <sdtBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>CARLOS ABARCA</nombre>
               <id>2546545498</id>
               <corr>1</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>DIEGO CERVINI</nombre>
               <id>15040306</id>
               <corr>2</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>ISABEL PUIG</nombre>
               <id>18685347</id>
               <corr>3</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>FLORENCIA NEBOT</nombre>
               <id>47851468</id>
               <corr>4</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>PAUEL CARRASCO</nombre>
               <id>43162495</id>
               <corr>5</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>MARIA SOSA</nombre>
               <id>46321571</id>
               <corr>6</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>SEBASTIAN CASABLANCA</nombre>
               <id>28964523</id>
               <corr>7</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>MATIAS PEREZ</nombre>
               <id>36528547</id>
               <corr>8</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>LEONARDO DOMINGUEZ</nombre>
               <id>25634581</id>
               <corr>9</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>VALENTINA BRUNO</nombre>
               <id>39635424</id>
               <corr>10</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>SUSANA GIMENEZ</nombre>
               <id>41705427</id>
               <corr>11</corr>
            </sBTResumenBeneficiario>
         </sdtBeneficiario>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-18</Fecha>
            <Hora>14:13:04</Hora>
            <Numero>26022</Numero>
            <Servicio>BTCASHManagement.ObtenerBeneficiarioSegunFiltro</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.ObtenerBeneficiarioSegunFiltroResponse>
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
    "sdtBeneficiario": {
         "sBTResumenBeneficiario": [
         {
            "contrato": 8,
            "servicio": 240,
            "codAgenda": 1,
            "nombre": "CARLOS ABARCA",
            "id": 2546545498,
            "corr": 1
         },
         {
            "contrato": 8,
            "servicio": 240,
            "codAgenda": 1,
            "nombre": "DIEGO CERVINI",
            "id": 15040306,
            "corr": 2
         },
         {
            "contrato": 8,
            "servicio": 240,
            "codAgenda": 1,
            "nombre": "ISABEL PUIG",
            "id": 18685347,
            "corr": 3
         },
         {
            "contrato": 8,
            "servicio": 240,
            "codAgenda": 1,
            "nombre": "FLORENCIA NEBOT",
            "id": 47851468,
            "corr": 4
         },
         {
            "contrato": 8,
            "servicio": 240,
            "codAgenda": 1,
            "nombre": "PAUEL CARRASCO",
            "id": 43162495,
            "corr": 5
         },
         {
            "contrato": 8,
            "servicio": 240,
            "codAgenda": 1,
            "nombre": "MARIA SOSA",
            "id": 46321571,
            "corr": 6
         },
         {
            "contrato": 8,
            "servicio": 240,
            "codAgenda": 1,
            "nombre": "SEBASTIAN CASABLANCA",
            "id": 28964523,
            "corr": 7
         },
         {
            "contrato": 8,
            "servicio": 240,
            "codAgenda": 1,
            "nombre": "MATIAS PEREZ",
            "id": 36528547,
            "corr": 8
         },
         {
            "contrato": 8,
            "servicio": 240,
            "codAgenda": 1,
            "nombre": "LEONARDO DOMINGUEZ",
            "id": 25634581,
            "corr": 9
         },
         {
            "contrato": 8,
            "servicio": 240,
            "codAgenda": 1,
            "nombre": "VALENTINA BRUNO",
            "id": 39635424,
            "corr": 10
         },
         {
            "contrato": 8,
            "servicio": 240,
            "codAgenda": 1,
            "nombre": "SUSANA GIMENEZ",
            "id": 41705427,
            "corr": 11
         }
         ]
      },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.ObtenerBeneficiarioSegunFiltro",
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
::: details sBTValorCampoCASH  

### sBTValorCampoCASH

::: center 
Los campos del tipo de dato estructurado sBTValorCampoCASH son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
tag | String | Tag del campo CASH.
valor | String | Valor del campo CASH.

:::

::: details sBTResumenBeneficiario  

### sBTResumenBeneficiario

::: center 
Los campos del tipo de dato estructurado sBTResumenBeneficiario son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
contrato | Int | Contrato.
servicio | Short | Servicio.
codAgenda | Short | Código de agenda.
nombre | String | Nombre.
id | String | Identificador.
corr | Int | Correlativo.

:::
<!-- CIERRA SDT -->
