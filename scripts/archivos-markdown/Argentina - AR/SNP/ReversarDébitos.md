---
title: Reversar Débitos
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
::: note Método para solicitar el reverso de un débito indicado.

**Nombre publicación:** BTSNP.ReversarDebitos

**Programa:** RBTPG336

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
fechaVencimiento | Date | Fecha de vencimiento.
referencia | String | Referencia del débito.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador del cliente.
30002 | No se recibió el identificador de la empresa originante.
30003 | No se recibió el tipo de débito.
30004 | No se recibió la prestación.
30005 | No se recibió el ID del cliente SNP.
30006 | No se recibió la fecha de vencimiento.
30007 | El tipo de débito no es correcto.
30008 | No se encontró un cliente para el identificador: [Número de identificador].
40001 | No se puede realizar el reverso debido al tiempo de transcurrido desde la fecha de vencimiento.
40002 | No se puede reversar el débito el mismo dia de contabilizado.
40003 | Débito no contabilizado.
40004 | No existe el débito recibido.
40011 | Ya existe un reverso en curso
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
      <bts:BTSNP.ReversarDebito>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>e8c844e3a0F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>2</bts:clienteUId>
         <bts:empresaOriginante>3050001626</bts:empresaOriginante>
         <bts:tipoDeDebito>1</bts:tipoDeDebito>
         <bts:prestacion>DEB RIO</bts:prestacion>
         <bts:idCliente>2750101598490000002000</bts:idCliente>
         <bts:fechaVencimiento>2019-11-20</bts:fechaVencimiento>
         <bts:referencia>015984900000216</bts:referencia>
      </bts:BTSNP.ReversarDebito>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?ObtenerEmpresasOriginantes' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{   
		"Btinreq": {
			"Device": "AC",
			"Usuario": "BANTOTAL",
			"Requerimiento": "",
			"Canal": "BTDIGITAL",
			"Token": "e8c844e3a0F955E77534D3E0"
		},
		"clienteUId": 2,
		"empresaOriginante": "3050001626",
		"tipoDeDebito": 1,
		"prestacion": "DEB RIO",
		"idCliente": "2750101598490000002000",
		"fechaVencimiento": "2019-11-20",
		"referencia": "015984900000216"
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
      <BTSNP.ReversarDebitoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>e8c844e3a0F955E77534D3E0</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1632</Numero>
            <Servicio>BTSNP.ReversarDebito</Servicio>
            <Estado>OK</Estado>
            <Fecha>2021-06-18</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:16:42</Hora>
         </Btoutreq>
      </BTSNP.ReversarDebitoResponse>
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
        "Token": "fbd47e2319F955E77534D3E0"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1626,
        "Servicio": "BTSNP.ReversarDebito",
        "Estado": "OK",
        "Fecha": "2021-06-17",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Hora": "18:04:41"
    }
}
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->