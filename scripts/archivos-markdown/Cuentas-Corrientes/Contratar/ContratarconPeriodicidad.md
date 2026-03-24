---
title: Contratar con Periodicidad
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
::: note Método para contratar un producto de cuenta corriente ingresando un período de acreditación.

**Nombre publicación:** BTCuentasCorrientes.ContratarConPeriodicidad

**Programa:** RBTPG358

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador de Cliente.
productoUId | Long | Identificador de Producto.
nombreSubcuenta | String | Nombre de la Subcuenta.
periodoAcreditacion | Long | Período de Acreditación de Intereses.
producto | String | [Hidden: Valor 'CC' por defecto].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
operacionUId | Long | Identificador de la subcuenta contratada.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de cliente.
30002 | No se recibió el identificador único de producto.
30003 | El período de acreditación ingresado es inválido.
31003 | No existe registro para el identificador único.
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
      <bts:BTCuentasCorrientes.ContratarConPeriodicidad>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1872595329CD285A89A23FBE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10021</bts:clienteUId>
         <bts:productoUId>93</bts:productoUId>
         <bts:nombreSubcuenta>Cta. Corriente</bts:nombreSubcuenta>
         <bts:periodoAcreditacion>1</bts:periodoAcreditacion>
      </bts:BTCuentasCorrientes.ContratarConPeriodicidad>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "741937913CD285A89A23FBEE",
        "Device": ""
    },
    "clienteUId": "10021",
    "productoUId": "93",
    "nombreSubcuenta": "Cta. Corriente",
    "periodoAcreditacion": "1"
}
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.ContratarConPeriodicidadResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>1872595329CD285A89A23FBE</Token>
            <Device/>
         </Btinreq>
         <operacionUId>10208</operacionUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCuentasCorrientes.ContratarConPeriodicidad</Servicio>
            <Fecha>2021-10-29</Fecha>
            <Hora>10:39:15</Hora>
            <Requerimiento/>
            <Numero>8435</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCuentasCorrientes.ContratarConPeriodicidadResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "741937913CD285A89A23FBEE",
        "Device": ""
    },
    "operacionUId": "10206",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTCuentasCorrientes.ContratarConPeriodicidad",
        "Fecha": "2021-10-29",
        "Hora": "10:20:39",
        "Requerimiento": "",
        "Numero": 8432,
        "Estado": "OK"
    }
}
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->