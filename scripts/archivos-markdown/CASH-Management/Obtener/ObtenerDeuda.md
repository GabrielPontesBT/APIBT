---
title: Obtener Deuda
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
::: note Método para obtener información de la deuda de un identificador para un contrato y servicio.

**Nombre publicación:** BTCASHManagement.ObtenerDeuda

**Programa:** RBTPGC61

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
contratoId | Int | Identificador del contrato CASH.
servicio | Short | Servicio CASH.
deudaId | String | Identificador de la deuda.
sdtValorCampoCash | [sBTValorCampoCASH](#sbtvalorcampocash) | Datos de valores de campos CASH.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtInfoDetalleCash | [sBTInfoDetalleCASH](#sbtinfodetallecash) | Listado de cabezales de los resúmenes.

@tab Errores

Código | Descripción
:--------- | :-----------
1030701 | El Servicio no existe.
1030704 | Id de contrato cliente desconocido.
1030706 | El convenio no está activo.
1030762 | El servicio no es de recaudos.
1030763 | Debe indicar el identificador de la deuda.

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
      <bts:BTCASHManagement.ObtenerDeuda>
         <bts:Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </bts:Btinreq>
         <bts:contratoId>13</bts:contratoId>
         <bts:servicio>600</bts:servicio>
         <bts:deudaId>42525261</bts:deudaId>
         <bts:sdtValorCampoCash>
            <bts:sBTValorCampoCash>
               <bts:tag>CSMD006IMP</bts:tag>
               <bts:valor></bts:valor>
            </bts:sBTValorCampoCash>
         </bts:sdtValorCampoCash>
      </bts:BTCASHManagement.ObtenerDeuda>
   </soapenv:Body>
</soapenv:Envelope>

```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?ObtenerDeuda=' \
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
    "contratoId": 13,
    "servicio": 600,
    "deudaId": 42525261,
    "sdtValorCampoCash": {
      "sBTValorCampoCash": {
      "tag": "CSMD006IMP",
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
      <BTCASHManagement.ObtenerDeudaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <sdtInfoDetalleCash>
            <BTInfoDetalleCASH>
               <detalleOrden>2</detalleOrden>
               <ordenId>293</ordenId>
               <valoresDetalle>
                  <SdtsBTValorCampoCASH>
                     <tag>CSMD006IMP</tag>
                     <valor>100.00</valor>
                  </SdtsBTValorCampoCASH>
               </valoresDetalle>
            </BTInfoDetalleCASH>
         </sdtInfoDetalleCash>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-19</Fecha>
            <Hora>12:22:16</Hora>
            <Numero>26139</Numero>
            <Servicio>BTCASHManagement.ObtenerDeuda</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.ObtenerDeudaResponse>
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
    "sdtInfoDetalleCash": {
      "BTInfoDetalleCASH": {
         "detalleOrden": 2,
         "ordenId": 293,
         "valoresDetalle": {
            "SdtsBTValorCampoCASH": {
               "tag": "CSMD006IMP",
               "valor": 100
            }
         }
      }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.ObtenerDeuda",
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
:--------- | :----------- | :----------- 
tag | String | Tag del campo CASH.
valor | String | Valor del campo CASH.

:::

::: details sBTInfoDetalleCASH  

### sBTInfoDetalleCASH

::: center 
Los campos del tipo de dato estructurado sBTInfoDetalleCASH son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
detalleOrden | Int | Detalle de la orden.
ordenId | Long | Identificador de la orden.
valoresDetalle | [sBTValorCampoCASH](#sbtvalorcampocash) | Listado de datos de valores de campos CASH.

:::
<!-- CIERRA SDT -->

