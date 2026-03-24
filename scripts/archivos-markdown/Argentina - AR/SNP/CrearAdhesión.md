---
title: Crear Adhesión
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
::: note Método para crear una adhesión.

**Nombre publicación:** BTSNP.CrearAdhesion

**Programa:** RBTPG346

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
operacionUId | Long | Identificador único de la operación.
avisoRechazo | String | ¿Aviso rechazo? (S/N)
moneda | Short | Identificador de moneda.
montoMaximoDebito | String | Monto máximo de débito (M=Mensual/F=Factura)
importe | Double | Importe del Stop Debit.

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
30006 | No se encontró un cliente para el identificador: [Número de Identificador].
30007 | El tipo de débito no es correcto.
30008 | No se recibió importe.
30021 | La operación no corresponde al cliente.
40001 | El largo del ID no coincide con el esperado.
40002 | El código de moneda no es válido.
40003 | La prestación para la empresa seleccionada no está disponible.
40004 | No existe prestación para la empresa seleccionada.
40005 | Empresa Originante Inexistente.
40006 | No se pudieron generar los bloques de CBU a partir de la operación dada.
40007 | La operación recibida para obtener el CBU no pertenece al cliente especificado.
40008 | No existe la cuenta.
40009 | Cuenta bloqueada, no permite la adhesión.
40010 | El tipo de débito no es correcto.
40011 | El código de monto máximo de débito es incorrecto.
40012 | El monto no puede ser nulo.
40013 | Ya existe un alta activa o pendiente de proceso.
40014 | Cargar Programa de generación de CBU.
40102 | Cuenta Vinculada debe ser distinto de cero.
40104 | Cuenta BT inexistente.
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
      <bts:BTSNP.CrearAdhesion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>7649e27cf5F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
         <bts:tipoDeDebito>1</bts:tipoDeDebito>
         <bts:empresaOriginante>3050001626</bts:empresaOriginante>
         <bts:prestacion>DEB RIO</bts:prestacion>
         <bts:idCliente>5550101516490000005000</bts:idCliente>
         <bts:operacionUId>6</bts:operacionUId>
         <bts:avisoRechazo>S</bts:avisoRechazo>
         <bts:moneda>80</bts:moneda>
         <bts:montoMaximoDebito>M</bts:montoMaximoDebito>
         <bts:importe>1000</bts:importe>
      </bts:BTSNP.CrearAdhesion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?CrearAdhesion' \
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
    "clienteUId": 4,
    "empresaOriginante": "3050001626",
    "tipoDeDebito": 1,
    "prestacion": "DEB RIO",
    "idCliente": "5550101516490000005000",
    "operacionUId": 6,
    "avisoRechazo": "N",
    "moneda": 80,
    "montoMaximoDebito": "M",
    "importe": 1000
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
      <BTSNP.CrearAdhesionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>7649e27cf5F955E77534D3E0</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1637</Numero>
            <Servicio>BTSNP.CrearAdhesion</Servicio>
            <Estado>OK</Estado>
            <Fecha>2021-06-18</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:22:09</Hora>
         </Btoutreq>
      </BTSNP.CrearAdhesionResponse>
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
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1587,
        "Servicio": "BTSNP.CrearAdhesion",
        "Estado": "OK",
        "Requerimiento": "",
        "Fecha": "2021-06-16",
        "Canal": "BTDIGITAL",
        "Hora": "15:07:29"
    }
}
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->