---
title: Actualizar Registro Empleado
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
::: note Método para actualizar si un cliente es empleado de la institución, junto con su fecha de ingreso si es requerido.

**Nombre publicación:** BTClientes.ActualizarRegistroEmpleado

**Programa:** RBTPG538

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único del cliente.
empleado | String | ¿Es empleado de la institución? (S/N).
fechaAlta | Date | Fecha de ingreso.
fechaBaja | Date | Fecha de baja.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de cliente.
30002 | No se recibió si el cliente es un empleado de la institución o no.
30005 | El valor de empleado no es correcto.
30013 | No existe registro con la cuenta indicada.
40001 | La cuenta no existe.
40002 | La integración de la cuenta ingresada no es válida.
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
      <bts:BTClientes.ActualizarRegistroEmpleado>
          <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9436BF7CB5B5BB404CC6E5A7</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>227</bts:clienteUId>
         <bts:empleado>S</bts:empleado>
         <bts:fechaAlta>2024-01-01</bts:fechaAlta>
         <bts:fechaBaja></bts:fechaBaja>
      </bts:BTClientes.ActualizarRegistroEmpleado>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ActualizarRegistroEmpleado' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "clienteUId": 227,
    "empleado": "S",
    "fechaAlta": "2024-01-01",
    "fechaBaja": ""
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
      <BTClientes.ActualizarRegistroEmpleadoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>9436BF7CB5B5BB404CC6E5A7</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20208</Numero>
            <Servicio>BTClientes.ActualizarRegistroEmpleado</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>0</Requerimiento>
            <Fecha>2024-05-02</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>17:33:37</Hora>
         </Btoutreq>
      </BTClientes.ActualizarRegistroEmpleadoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "Erroresnegocio": "",
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTClientes.ActualizarRegistroEmpleado",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->