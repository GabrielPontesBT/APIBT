---
title: Obtener Acuerdos
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
::: note Método para obtener los acuerdos de sobregiro de una cuenta corriente.

**Nombre publicación:** BTCuentasCorrientes.ObtenerAcuerdos

**Programa:** RBTPG632

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único del cliente.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtAcuerdosCliente | [sBTAcuerdoClienteCC](#sbtacuerdoclientecc)  | Listado de acuerdos del cliente.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de cliente.
30004 | No existe registro con el identificador indicado.
30101 | No se recupero la operación para el identificador recibido.
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
      <bts:BTCuentasCorrientes.ObtenerAcuerdos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>BF79D7D88EC1865C343DAC53</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTCuentasCorrientes.ObtenerAcuerdos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerAcuerdos=' \
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
    "clienteUId": 1,
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
      <BTCuentasCorrientes.ObtenerAcuerdosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>BF79D7D88EC1865C343DAC53</Token>
         </Btinreq>
         <sdtAcuerdosCliente>
            <sBTAcuerdoClienteCC>
               <moneda>$</moneda>
               <limiteUtilizado>-3647.62</limiteUtilizado>
               <limiteOtorgado>50000.0</limiteOtorgado>
               <limiteDisponible>46352.38</limiteDisponible>
               <descripcion/>
               <operacionUId>828</operacionUId>
               <tasa>6.7</tasa>
               <operacionUIdCuentaVista>41</operacionUIdCuentaVista>
               <fechaValor>2028-05-11</fechaValor>
               <fechaVencimiento>2030-05-11</fechaVencimiento>
               <tipoTasa>1</tipoTasa>
               <plazo>180</plazo>
               <tasaActualizada>0.0</tasaActualizada>
            </sBTAcuerdoClienteCC>
            <sBTAcuerdoClienteCC>
               <moneda>$</moneda>
               <limiteUtilizado>-3647.62</limiteUtilizado>
               <limiteOtorgado>60000.0</limiteOtorgado>
               <limiteDisponible>56352.38</limiteDisponible>
               <descripcion/>
               <operacionUId>829</operacionUId>
               <tasa>6.7</tasa>
               <operacionUIdCuentaVista>41</operacionUIdCuentaVista>
               <fechaValor>2028-05-11</fechaValor>
               <fechaVencimiento>2030-05-11</fechaVencimiento>
               <tipoTasa>1</tipoTasa>
               <plazo>30</plazo>
               <tasaActualizada>0.0</tasaActualizada>
            </sBTAcuerdoClienteCC>
         </sdtAcuerdosCliente>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-30</Fecha>
            <Hora>15:18:48</Hora>
            <Numero>25039</Numero>
            <Servicio>BTCuentasCorrientes.ObtenerAcuerdos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerAcuerdosResponse>
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
   "sdtAcuerdosCliente": {
      "sBTAcuerdoClienteCC": [
      {
         "moneda": "$",
         "limiteUtilizado": -3647.62,
         "limiteOtorgado": 50000,
         "limiteDisponible": 46352.38,
         "descripcion": "",
         "operacionUId": 828,
         "tasa": 6.7,
         "operacionUIdCuentaVista": 41,
         "fechaValor": "2028-05-11",
         "fechaVencimiento": "2030-05-11",
         "tipoTasa": 1,
         "plazo": 180,
         "tasaActualizada": 0
      },
      {
         "moneda": "$",
         "limiteUtilizado": -3647.62,
         "limiteOtorgado": 60000,
         "limiteDisponible": 56352.38,
         "descripcion": "",
         "operacionUId": 829,
         "tasa": 6.7,
         "operacionUIdCuentaVista": 41,
         "fechaValor": "2028-05-11",
         "fechaVencimiento": "2030-05-11",
         "tipoTasa": 1,
         "plazo": 30,
         "tasaActualizada": 0
      }
      ]
   },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCuentasCorrientes.ObtenerAcuerdos",
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
::: details sBTAcuerdoClienteCC  

### sBTAcuerdoClienteCC

::: center 
Los campos del tipo de dato estructurado sBTAcuerdoClienteCC son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción.
fechaValor | Date | Fecha de inicio del acuerdo.
fechaVencimiento | Date | Fecha del vencimiento.
limiteDisponible | Double | Limite disponible.
limiteOtorgado | Double | Limite otorgado.
limiteUtilizado | Double | Limite utilizado.
moneda | String | Símbolo de la moneda.
operacionUId | Long | Identificador único de la operación.
operacionUIdCuentaVista | Long | Identificador único de la operación de la cuenta vista.
plazo | Int | Plazo.
tasa | Double | Tasa.
tasaActualizada | Double | Tasa actualizada. 
tipoTasa | Byte | Tipo de tasa.
:::
<!-- CIERRA SDT -->