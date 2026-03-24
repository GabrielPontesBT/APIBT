---
title: Contratar con Facultades
icon: /assets/image/nuevo.svg
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
::: note Método para contratar un depósito a plazo fijo dando de alta las facultades correspondientes.

**Nombre publicación:** BTDepositosAPlazo.ContratarConFacultades

**Programa:** RBTPG573

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios  
:--------- | :--------- | :---------  
simulacionUId | Long | Identificador único de la simulación.  
clienteUId | Long | Identificador único del cliente.  
operacionUIdOrigen | Long | Identificador único de la operación de donde se retira el monto del DPF. 
operacionUIdDestino | Long | Identificador único de la operación de acreditación (Capital y/o intereses según instrucción).  
instruccionAlVencimiento | Short | Identificador de instrucción al vencimiento. 
controlaMismoCliente | String | ¿Controla correspondencia de cuenta de débito contra cuenta cliente originante? [Hidden: Valores 'S'/'N']. 
tipoIntegracionCuenta | String | Tipo de integración de la cuenta (Ej: Conjunta, Individual).  

@tab Datos de Salida

Nombre | Tipo | Comentarios  
:--------- | :----------- | :-----------  
operacionUId | Long | Identificador único de operación.
transaccionUId | Long | Identificador único de movimiento. 

@tab Errores

Código | Descripción  
:--------- | :-----------  
30001 | No se recibió el identificador de la Cuenta.  
30002 | No se recibió el identificador de la Simulación.  
30003 | No se recibió el identificador de la operación a utilizar para el débito.  
30007 | La simulación ya no se encuentra habilitada para su contratación.  
30008 | La simulación ingresada no pertenece al cliente ingresado.  
30010 | La operación del débito no pertenece al cliente ingresado.  
30012 | La operación de acreditación no pertenece al cliente ingresado.  
30014 | Error de configuración: No se definió control de CAC.  
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
      <bts:BTDepositosAPlazo.ContratarConFacultades>
         <bts:Btinreq>
            <bts:Device>FP</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>00C39357A152407BC2F8A995</bts:Token>
         </bts:Btinreq>
         <bts:simulacionUId>528</bts:simulacionUId>
         <bts:clienteUId>322</bts:clienteUId>
         <bts:operacionUIdOrigen>1128</bts:operacionUIdOrigen>
         <bts:operacionUIdDestino>824</bts:operacionUIdDestino>
         <bts:instruccionAlVencimiento>1</bts:instruccionAlVencimiento>
         <bts:controlaMismoCliente>N</bts:controlaMismoCliente>
         <bts:tipoIntegracionCuenta>A</bts:tipoIntegracionCuenta>
      </bts:BTDepositosAPlazo.ContratarConFacultades>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ContratarConFacultades=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: b80d8c23-883d-589a-228b-4009ae6eba1c' \
  -d '{
    "Btinreq": {
        "Device": "FP",
        "Usuario": "INSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "00C39357A152407BC2F8A995"
    },
    "simulacionUId": "528",
    "clienteUId": "322",
    "operacionUIdOrigen": "1128",
    "operacionUIdDestino": "824",
    "instruccionAlVencimiento": "1",
    "controlaMismoCliente": "N",
    "tipoIntegracionCuenta": "A"
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
      <BTDepositosAPlazo.ContratarConFacultadesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6CD13C161EE607C42B83D501</Token>
         </Btinreq>
         <operacionUId>969</operacionUId>
         <transaccionUId>167</transaccionUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35523</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.ContratarConFacultades</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-05-21</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>17:50:29</Hora>
         </Btoutreq>
      </BTDepositosAPlazo.ContratarConFacultadesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
  "Btinreq": {
      "Device": "FC",
      "Usuario": "INSTALADOR",
      "Requerimiento": "0",
      "Canal": "BTDIGITAL",
      "Token": "6CD13C161EE607C42B83D501"
  },
  "opreacionUid": "969",
  "transaccionUId": "167",
  "Erroresnegocio": "",
  "Btoutreq": {
    "Numero": "35523",
    "Estado": "OK",
    "Servicio": "BTDepositosAPlazo.ContratarConFacultades",
    "Requerimiento": "0",
    "Fecha": "2025-05-21",
    "Canal": "BTDIGITAL",
    "Hora": "17:50:29"
  },
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->