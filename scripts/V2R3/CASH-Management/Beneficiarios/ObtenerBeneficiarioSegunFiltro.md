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
servicioId | Short | Servicio CASH.
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
{
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
               <Id>2546545498</Id>
               <corr>1</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>DIEGO CERVINI</nombre>
               <Id>15040306</Id>
               <corr>2</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>ISABEL PUIG</nombre>
               <Id>18685347</Id>
               <corr>3</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>FLORENCIA NEBOT</nombre>
               <Id>47851468</Id>
               <corr>4</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>PAUEL CARRASCO</nombre>
               <Id>43162495</Id>
               <corr>5</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>MARIA SOSA</nombre>
               <Id>46321571</Id>
               <corr>6</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>SEBASTIAN CASABLANCA</nombre>
               <Id>28964523</Id>
               <corr>7</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>MATIAS PEREZ</nombre>
               <Id>36528547</Id>
               <corr>8</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>LEONARDO DOMINGUEZ</nombre>
               <Id>25634581</Id>
               <corr>9</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>VALENTINA BRUNO</nombre>
               <Id>39635424</Id>
               <corr>10</corr>
            </sBTResumenBeneficiario>
            <sBTResumenBeneficiario>
               <contrato>8</contrato>
               <servicio>240</servicio>
               <codAgenda>1</codAgenda>
               <nombre>SUSANA GIMENEZ</nombre>
               <Id>41705427</Id>
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
{
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
        "corr": 1,
        "Id": 2546545498
      },
      {
        "contrato": 8,
        "servicio": 240,
        "codAgenda": 1,
        "nombre": "DIEGO CERVINI",
        "corr": 2,
        "Id": 15040306
      },
      {
        "contrato": 8,
        "servicio": 240,
        "codAgenda": 1,
        "nombre": "ISABEL PUIG",
        "corr": 3,
        "Id": 18685347
      },
      {
        "contrato": 8,
        "servicio": 240,
        "codAgenda": 1,
        "nombre": "FLORENCIA NEBOT",
        "corr": 4,
        "Id": 47851468
      },
      {
        "contrato": 8,
        "servicio": 240,
        "codAgenda": 1,
        "nombre": "PAUEL CARRASCO",
        "corr": 5,
        "Id": 43162495
      },
      {
        "contrato": 8,
        "servicio": 240,
        "codAgenda": 1,
        "nombre": "MARIA SOSA",
        "corr": 6,
        "Id": 46321571
      },
      {
        "contrato": 8,
        "servicio": 240,
        "codAgenda": 1,
        "nombre": "SEBASTIAN CASABLANCA",
        "corr": 7,
        "Id": 28964523
      },
      {
        "contrato": 8,
        "servicio": 240,
        "codAgenda": 1,
        "nombre": "MATIAS PEREZ",
        "corr": 8,
        "Id": 36528547
      },
      {
        "contrato": 8,
        "servicio": 240,
        "codAgenda": 1,
        "nombre": "LEONARDO DOMINGUEZ",
        "corr": 9,
        "Id": 25634581
      },
      {
        "contrato": 8,
        "servicio": 240,
        "codAgenda": 1,
        "nombre": "VALENTINA BRUNO",
        "corr": 10,
        "Id": 39635424
      },
      {
        "contrato": 8,
        "servicio": 240,
        "codAgenda": 1,
        "nombre": "SUSANA GIMENEZ",
        "corr": 11,
        "Id": 41705427
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
}
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
Id | String | Identificador.
corr | Int | Correlativo.

:::
<!-- CIERRA SDT -->
