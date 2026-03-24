---
title: Obtener Débitos
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
::: note Método para obtener los débitos de una adhesión, dado el estado ingresado.

**Nombre publicación:** BTSNP.ConsultarDebitos

**Programa:** RBTPG335

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
prestacion | String | Identificador de prestación.
empresaOriginante | String | Identificador de la empresa originante.
clienteUId | Long | Identificador único del cliente.
idCliente | String | Identificador del Cliente SNP.
tipoDeDebito | Byte | Tipo de débito (1=Abierto/2=Cerrado).
estado | String | Estado del débito (PP=Para Procesar/PR=Procesado/RC=Rechazado).

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtDebitos | [sBTDebito](#sbtdebito) | Listado de débitos.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador del cliente.
30002 | No se recibió el identificador de la empresa originante.
30003 | No se recibió el tipo de débito.
30004 | No se recibió la prestación.
30005 | No se recibió el ID del cliente SNP.
30006 | No se encontró un cliente para el identificador: [Número de identificador].
30007 | El tipo de débito no es correcto.
30008 | El estado recibido no es correcto.
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
      <bts:BTSNP.ConsultarDebitos>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>7649e27cf5F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>2</bts:clienteUId>
         <bts:empresaOriginante>3050001626</bts:empresaOriginante>
         <bts:tipoDeDebito>1</bts:tipoDeDebito>
         <bts:prestacion>DEB RIO</bts:prestacion>
         <bts:idCliente>2750101598490000002000</bts:idCliente>
         <bts:estado>RC</bts:estado>
      </bts:BTSNP.ConsultarDebitos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?ConsultarDebitos' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
		"Btinreq": {
			"Device": "AC",
			"Usuario": "BANTOTAL",
			"Requerimiento": "",
			"Canal": "BTDIGITAL",
			"Token": "7649e27cf5F955E77534D3E0"
		},
		"clienteUId": 2,
		"empresaOriginante": "3050001626",
		"tipoDeDebito": 1,
		"prestacion": "DEB RIO",
		"idCliente": "2750101598490000002000",
		"estado": "RC"
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
      <BTSNP.ConsultarDebitosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>7649e27cf5F955E77534D3E0</Token>
         </Btinreq>
         <sdtDebitos>
            <sBTDebito>
               <CBU2>80010000898653</CBU2>
               <monedaSigno>$</monedaSigno>
               <estado>RC</estado>
               <prestacion>DEB RIO</prestacion>
               <referencia>015984900000216</referencia>
               <empresaOriginante>3050001626</empresaOriginante>
               <clienteUId>2</clienteUId>
               <idCliente>2750101598490000002000</idCliente>
               <importe>5355.62</importe>
               <monedaId>80</monedaId>
               <fechaVencimiento>2019-11-20</fechaVencimiento>
               <tipoDeDebito>1</tipoDeDebito>
            </sBTDebito>
         </sdtDebitos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1631</Numero>
            <Servicio>BTSNP.ConsultarDebitos</Servicio>
            <Estado>OK</Estado>
            <Fecha>2021-06-18</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:13:50</Hora>
         </Btoutreq>
      </BTSNP.ConsultarDebitosResponse>
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
        "Token": "7649e27cf5F955E77534D3E0"
    },
    "sdtDebitos": {
        "sBTDebito": [
            {
                "CBU2": 80010000898653,
                "monedaSigno": "$",
                "estado": "RC",
                "prestacion": "DEB RIO",
                "referencia": "015984900000216",
                "empresaOriginante": "3050001626",
                "clienteUId": 2,
                "idCliente": "2750101598490000002000",
                "importe": 5355.62,
                "monedaId": 80,
                "fechaVencimiento": "2019-11-20",
                "tipoDeDebito": 1
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1625,
        "Servicio": "BTSNP.ConsultarDebitos",
        "Estado": "OK",
        "Fecha": "2021-06-17",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Hora": "17:46:44"
    }
}
```

::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->

::: details sBTDebito  

### sBTDebito

::: center 
Los campos del tipo de dato estructurado sBTDebito son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
CBU2 | String | CBU.
monedaSigno | String | Signo de la moneda.
estado | String | Estado del débito (PP=Para Procesar/PR=Procesado/RC=Rechazado).
prestacion | String | Identificador de prestación.
referencia | String | Referencia del débito.
empresaOriginante | String | Identificador de la empresa originante.
clienteUId | Long | Identificador único del cliente.
idCliente | String | Identificador del Cliente SNP.
importe | Double | Importe.
monedaId | Short | Identificador de la moneda.
fechaVencimiento | Date | Fecha de vencimiento.
tipoDeDebito | Byte | Tipo de débito (1=Abierto/2=Cerrado).
:::
<!-- CIERRA SDT -->