---
title: Contratar Débito Automático
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
::: note Método para contratar la afiliación a un débito automático.

**Nombre publicación:** BTCASHManagement.ContratarDebitoAutomatico

**Programa:** RBTPGC90

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
contratoId | Long | Identificador del contrato.
servicio | Short | Código de Servicio CASH.
operacionUId_debito | Long | Identificador único de la operación de débito.
clienteID | String | Identificador de cliente.
dia1 | Byte | Dia 1 para intento de pago.
montoMax | Double | Monto máximo a debitar.
alias | String | Alias o comentarios.
accion | String | Tipo de acción. Se pueden enviar los siguientes [valores.](#valores)

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
1030704 | Id de contrato cliente desconocido.
1030706 | El contrato no esta activo.
1030714 | El contrato consultado no corresponde al servicio recibido.
1030760 | No se pudo dar de alta el contrato.
1030770 | No se recupero información para la cuenta recibida.
1030790 | Acción desconocida para el alta de débito automático.
1030791 | Se requiere identificador de deuda para el alta de débito automático.
1030792 | No se identifica servicio de débito automático.
1030793 | No existe el contrato de débito automático la acción no puede realizarse.
1030794 | Estado del contrato de débito automático impide la acción.
1030795 | Acción no permitida para la afiliación.
1030796 | Valor incorrecto para primer dia de pago
1030797 | Debe indicar valor para monto máximo de pago.
1030798 | En servicio online debe indicar valor para primer dia de pago.
1030799 | Existe afiliación activa para el identificador de cliente recibido.
1030800 | Para la cuenta recibida no es posible la afiliación.


::: 
<!-- CIERRA TABLA DE DATOS -->

<!-- ABRE VALORES -->
::: details Valores
 
### Valores
 
Valor | Comentarios
:----------- | :-----------
A | Alta.
B | Baja.
M | Modificación.
 
:::
<!-- CIERRA VALORES -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.ContratarDebitoAutomatico>
         <bts:Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </bts:Btinreq>
         <bts:contratoId>22</bts:contratoId>
         <bts:servicio>500</bts:servicio>
         <bts:operacionUId_debito>831</bts:operacionUId_debito>
         <bts:clienteID>383</bts:clienteID>
         <bts:dia1></bts:dia1>
         <bts:montoMax>20000</bts:montoMax>
         <bts:alias>ID0000001</bts:alias>
         <bts:accion>A</bts:accion>
      </bts:BTCASHManagement.ContratarDebitoAutomatico>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?ContratarDebitoAutomatico=' \
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
    "contratoId": 22,
    "servicio": 500,
    "operacionUId_debito": 831,
    "clienteID": 383,
    "dia1": "",
    "montoMax": 20000,
    "alias": "ID0000001",
    "accion": "A"
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
      <BTCASHManagement.ContratarDebitoAutomaticoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-18</Fecha>
            <Hora>14:50:16</Hora>
            <Numero>26035</Numero>
            <Servicio>BTCASHManagement.ContratarDebitoAutomatico</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.ContratarDebitoAutomaticoResponse>
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
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.ContratarDebitoAutomatico",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

