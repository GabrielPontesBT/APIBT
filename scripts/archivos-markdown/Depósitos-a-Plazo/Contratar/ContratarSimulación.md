---
title: Contratar Simulación
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
::: note Método para contratar un depósito a plazo fijo a partir de una simulación existente.
Este servicio se debe ejecutar para contratar simulaciones realizadas desde el servicio [SimularConCronograma](../Simular/SimularConCronograma.md)

**Nombre publicación:** BTDepositoAPlazo.ContratarSimulacion

**Programa:** RBTPG457

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

Para configurar los productos válidos, se debe agregar un registro en la guía especial 70101 para cada producto de la siguiente manera: 

Campo | Valor 
:--------- | :-----------  
Correlativo 1 | Módulo. 
Correlativo 2 | Tipo de operación (El valor 999 indica todos los tipos de operación). 
Correlativo 3 | Valor incremental. 
Valor específico 1 | Moneda (El valor 9999 indica todas las monedas). 
Valor específico 2 | Papel (El valor 999999 indica todos los papeles). 
Valor específico 3 | Código de instrucción a habilitar. 
Importe específico 1 | Tipo de depósito (1- Depósito al vencimiento, 2- Pago periódico de intereses). 

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
simulacionId | Long | Identificador único de la simulación.
instruccionVTO | Short | Identificador de la instrucción al vencimiento
cuentaUIdDestinoVTO | Long | Identificador único de la operación de la cuenta destino al vencimiento.
InstruccionPP | Long | Identificador de la instrucción de pago periódico.
cuentaUIdDestinoPP | Short | Identificador único de la operación de la cuenta destino del pago periódico.
cuentaUIdDebito | Long | Identificador único de la operación de la cuenta de débito.
sdtDatosExtendidos | [sBTDatoExtendido](#sbtdatoextendido) | Listado de datos complementarios. Se pueden enviar los siguientes [valores.](#valores)

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtDatosExtendidos | [sBTDatoExtendido](#sbtdatoextendido) | Listado de datos complementarios.
operacionUId | Long | Identificador único de la operación.
movimientoUId | Long | Identificador único de movimiento.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de cliente.
30002 | No se recibió el identificador de la simulación.
30003 | No se recibió la instrucción de acreditación al vencimiento.
30005 | No se recibió la instrucción de acreditación periódica.
30007 | No se recibió el identificador de cuenta de débito.
30010 | No se recuperaron datos para el identificador de cliente: [Número de identificador].
30011 | No se recuperaron datos para el identificador de cuenta de acreditación al vencimiento: [Número de identificador].
30012 | No se recuperaron datos para el identificador de cuenta de acreditación periódica: [Número de identificador].
30013 | No se recuperaron datos para el identificador de cuenta de débito: [Número de identificador].
30015 | La simulación no está disponible para su contratación.
30016 | La simulación no se encuentra vigente para su contratación.
30017 | La simulación no corresponde al cliente.
30020 | Ocurrió un error al generar el Identificador de movimiento.
30021 | Ocurrió un error al generar el Identificador de operación de depósito.
30100 | Error en la contabilización.
::: 
<!-- CIERRA TABLA DE DATOS -->

<!-- ABRE VALORES -->
::: details Valores sdtDatosExtendidos

### Valores

Clave | Valor | Comentarios
:--------- | :----------- | :----------- 
CONTROL_MISMO_CLIENTE | [S,N] (Valor por omisión "N") | **[Opcional]** Permite indicar si el servicio controla que todos los datos de la simulación correspondan al clienteUId que invoco el servicio.

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
      <bts:BTDepositosAPlazo.ContratarSimulacion>
        <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>30F74741A02C318CEFD55684</bts:Token>
            <bts:Device>GL</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10009</bts:clienteUId>
         <bts:simulacionId>93</bts:simulacionId>
         <bts:InstruccionVTO>6</bts:InstruccionVTO>
         <bts:cuentaUIdDestinoVTO></bts:cuentaUIdDestinoVTO>
         <bts:InstruccionPP>7</bts:InstruccionPP>
         <bts:cuentaUIdDestinoPP>10120</bts:cuentaUIdDestinoPP>
         <bts:cuentaUIdDebito>10120</bts:cuentaUIdDebito>
         <bts:sBTDatosExtendidos/>
      </bts:BTDepositosAPlazo.ContratarSimulacion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
          "Canal": "BTDIGITAL",
          "Requerimiento": 1,
          "Usuario": "INSTALADOR",
          "Token": "30F74741A02C318CEFD55684",
          "Device": "GL"
        },
        "clienteUId": 10009,
        "simulacionId": 93,
        "InstruccionVTO": 6,
        "cuentaUIdDestinoVTO": "",
        "InstruccionPP": 7,
        "cuentaUIdDestinoPP": 10120,
        "cuentaUIdDebito": 10120,
        "sBTDatosExtendidos": ""
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
      <BTDepositosAPlazo.ContratarSimulacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>30F74741A02C318CEFD55684</Token>
            <Device>GL</Device>
         </Btinreq>
         <sBTDatosExtendidos></sBTDatosExtendidos>
         <operacionUId>15</operacionUId>
         <movimientoUId>15</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTDepositosAPlazo.ContratarSimulacion</Servicio>
            <Fecha>2022-11-29</Fecha>
            <Hora>11:35:46</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>507</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTDepositosAPlazo.ContratarSimulacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
          "Canal": "BTDIGITAL",
          "Requerimiento": 1,
          "Usuario": "INSTALADOR",
          "Token": "30F74741A02C318CEFD55684",
          "Device": "GL"
        },
        "sBTDatosExtendidos": "",
        "operacionUId": 15,
        "movimientoUId": 15,
        "Erroresnegocio": "",
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTDepositosAPlazo.ContratarSimulacion",
          "Fecha": "2022-11-29",
          "Hora": "11:35:46",
          "Requerimiento": 1,
          "Numero": 507,
          "Estado": "OK"
        }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDatoExtendido  

### sBTDatoExtendido

::: center 
Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clave | String | Clave del dato extendido. 
lista | [sBTDatoLista](#sbtdatolista)  | Lista de datos. 
tipo | String | Tipo de dato extendido. 
valor | String | Valor de dato extendido. 

### sBTDatoLista

::: center 
Los campos del tipo de dato estructurado sBTDatoLista son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clave | String | Identificador de información adicional. 
valor | String | Valor de información adicional. 
:::
<!-- CIERRA SDT -->