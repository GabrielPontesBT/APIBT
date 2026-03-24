---
title: Crear Stop Debit
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
::: note Método para crear un stop debit sin importe.

**Nombre publicación:** BTSNP.CrearStopDebit

**Programa:** RBTPG341

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtStopDebit | [sBTStopDebit](#sbtstopdebit) | Datos del alta de Stop Debits.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador del cliente.
30002 | No se recibió el identificador de la empresa originante.
30003 | No se recibió el tipo de débito.
30007 | El tipo de débito no es correcto.
30008 | No se encontró un cliente para el identificador: [Número de Identificador].
30009 | Se indicó fecha de inicio del rango de fechas pero no de fin.
40001 | No existe la empresa originante.
40002 | No existe el tipo de débito.
40003 | No existe la prestación.
40004 | El largo del ID del cliente no es correcto.
40005 | No existe la moneda.
40006 | Aviso: ID del cliente no pertenece a la adhesión.
40007 | Si ingresa tipo de débito, debe ingresar la empresa originante.
40008 | Si ingresa Prestación, debe ingresar el tipo de débito.
40009 | Si ingresa el ID Cliente, debe ingresar la prestación.
40010 | Es posible indicar Fecha de Vencimiento ó Rango de fecha de vencimiento, pero no ambas.
40011 | La fecha desde debe ser menor o igual que la fecha hasta.
40012 | Si ingresa monto máximo, debe ingresar empresa, tipo de débito, prestación, cliente, moneda e importe.
40013 | Si ingresa monto máximo, no debe ingresar fecha de vencimiento ni referencia.
40014 | Si ingresa Id Cliente, la cantidad de caracteres debe corresponderse con el Largo Id.
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
      <bts:BTSNP.CrearStopDebit>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>bc479c1c0eF955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:sdtStopDebit>
            <bts:prestacion>DEB RIO</bts:prestacion>
            <bts:referencia></bts:referencia>
            <bts:empresaOriginante>3050001626</bts:empresaOriginante>
            <bts:clienteUId>2</bts:clienteUId>
            <bts:idCliente>2750909950770000003000</bts:idCliente>
            <bts:fechaDesde>2019-04-04</bts:fechaDesde>
            <bts:fechaVencimiento></bts:fechaVencimiento>
            <bts:fechaHasta>2019-06-05</bts:fechaHasta>
            <bts:tipoDeDebito>1</bts:tipoDeDebito>
         </bts:sdtStopDebit>
      </bts:BTSNP.CrearStopDebit>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?CrearStopDebit' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
        "Device": "AC",
        "Usuario": "BANTOTAL",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "bc479c1c0eF955E77534D3E0"
    },
    "sdtStopDebit": {
        "clienteUId": 2,
        "empresaOriginante": "3050001626",
        "tipoDeDebito": "1",
        "prestacion": "DEB RIO",
        "idCliente": "2750909950770000003000",
        "fechaVencimiento": "",
        "referencia": "",
        "fechaHasta": "2019-06-05",
        "fechaDesde": "2019-04-04"
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
      <BTSNP.CrearStopDebitResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>bc479c1c0eF955E77534D3E0</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1633</Numero>
            <Servicio>BTSNP.CrearStopDebit</Servicio>
            <Estado>OK</Estado>
            <Fecha>2021-06-18</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:18:39</Hora>
         </Btoutreq>
      </BTSNP.CrearStopDebitResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Device": "AC",
        "Usuario": "BANTOTAL",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "bc479c1c0eF955E77534D3E0"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1618,
        "Estado": "OK",
        "Servicio": "BTSNP.CrearStopDebit",
        "Requerimiento": "",
        "Fecha": "2021-06-16",
        "Hora": "16:46:14",
        "Canal": "BTDIGITAL"
    }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTStopDebit  

### sBTStopDebit

::: center 
Los campos del tipo de dato estructurado sBTStopDebit son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clienteUId | Long | Identificador único del cliente.
empresaOriginante | String | Identificador de la empresa originante.
fechaDesde | Date | Fecha desde para aplicar el Stop Debit.
fechaHasta | Date | Fecha hasta para aplicar el Stop Debit.
fechaVencimiento | Date | Fecha de vencimiento
idCliente | String | Identificador del Cliente SNP.
prestacion | String | Identificador de prestación.
referencia | String | Referencia del débito.
tipoDeDebito | Byte | Tipo de débito (1=Abierto/2=Cerrado).
:::
<!-- CIERRA SDT -->