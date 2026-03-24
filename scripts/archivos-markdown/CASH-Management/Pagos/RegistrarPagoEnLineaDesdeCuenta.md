---
title: Registrar Pago En Linea Desde Cuenta
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
::: note Método para registrar el pago en linea de una factura, debitando desde la cuenta.

**Nombre publicación:** BTCASHManagement.RegistrarPagoEnLineaDesdeCuenta

**Programa:** RBTPGC67

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
contratoId | Short | Identificador del contrato.
servicio | Short | Servicio CASH.
deudaId | String | Identificador de la deuda.
monedaId | Short | Identificador de la moneda.
importePago | Double | Importe.
operacionUId | Long | Identificador único de la operación.
sdtValoresCamposCash | [sBTValorCampoCASH](#sbtvalorcampocash) | Lista de valores de campos CASH a buscar.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
transaccionId | Long | Identificador de transacción.
ordenId | Long | Identificador de la orden.
nroLineaOrden | Int | Número de línea de orden CASH.

@tab Errores

Código | Descripción
:--------- | :-----------
1030614 | Canal no habilitado para el servicio.
1030615 | Canal no habilitado para el contrato.
1030618 | El importe debe ser mayor a cero.
1030619 | Código de Moneda desconocido.
1030701 | El Servicio no existe.
1030704 | Id de contrato cliente desconocido.
1030706 | El contrato no esta activo.
1030761 | No se obtuvo Canal CASH para el canal que invoca.
1030762 | El servicio no es de recaudos.
1030763 | Debe indicar el identificador de la deuda.
1030764 | El servicio no es en linea, no se crea el cobro.
1030765 | La moneda del pago difiere con la del convenio.
1030770 | No se recupero información para la cuenta recibida.
1030801 | Saldo insuficiente para realizar el pago.
1039999 | No se determino módulo/transacción en la regla: [Número de regla].

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
      <bts:BTCASHManagement.RegistrarPagoEnLineaDesdeCuenta>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>54878527AF5867CA94C680B0</bts:Token>
         </bts:Btinreq>
         <bts:contratoId>8</bts:contratoId>
         <bts:servicio>240</bts:servicio>
         <bts:deudaId>4</bts:deudaId>
         <bts:monedaId>0</bts:monedaId>
         <bts:importePago>543</bts:importePago>
         <bts:operacionUId>54</bts:operacionUId>
         <bts:sdtValoresCamposCash>
            <bts:sBTValorCampoCash>
               <bts:tag></bts:tag>
               <bts:valor></bts:valor>
            </bts:sBTValorCampoCash>
         </bts:sdtValoresCamposCash>
      </bts:BTCASHManagement.RegistrarPagoEnLineaDesdeCuenta>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?RegistrarPagoEnLineaDesdeCuenta=' \
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
    "serivicio": 240,
    "deudaId": 4,
    "monedaId": 0,
    "importePago": 543,
    "operacionUId": 54,
    "sdtValoresCamposCash": {
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
      <BTCASHManagement.RegistrarPagoEnLineaDesdeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>BANTOTAL</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>E362E52FED059AA3BF86A6E3</Token>
         </Btinreq>
         <transaccionId>124</transaccionId>
         <ordenId>532</ordenId>
         <nroLineaOrden>4</nroLineaOrden>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-08</Fecha>
            <Hora>12:27:14</Hora>
            <Numero>742</Numero>
            <Servicio>BTCASHManagement.RegistrarPagoEnLineaDesdeCuenta</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.RegistrarPagoEnLineaDesdeCuentaResponse>
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
    "transaccionId": 124,
    "ordenId": 532,
    "nroLineaOrden": 4,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.RegistrarPagoEnLineaDesdeCuenta",
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
<!-- CIERRA SDT -->


