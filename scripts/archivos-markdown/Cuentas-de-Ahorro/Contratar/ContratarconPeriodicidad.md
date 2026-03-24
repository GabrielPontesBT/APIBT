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
::: note Método para contratar un producto de cuenta de ahorro ingresando un período de acreditación.

**Nombre publicación:** BTCuentasDeAhorro.ContratarConPeriodicidad

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
producto | String | [Hidden: Valor 'CA' por defecto].

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
            <bts:Token>1335244350CD285A89A23FBE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10021</bts:clienteUId>
         <bts:productoUId>94</bts:productoUId>
         <bts:nombreSubcuenta>Caja de Ahorro</bts:nombreSubcuenta>
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
        "Token": "1040992103CD285A89A23FBE",
        "Device": ""
    },
    "clienteUId": "10021",
    "productoUId": "94",
    "nombreSubcuenta": "Caja de Ahorro",
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
      <BTCuentasDeAhorro.ContratarConPeriodicidadResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>1335244350CD285A89A23FBE</Token>
            <Device/>
         </Btinreq>
         <operacionUId>10210</operacionUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCuentasCorrientes.ContratarConPeriodicidad</Servicio>
            <Fecha>2021-10-29</Fecha>
            <Hora>12:27:21</Hora>
            <Requerimiento/>
            <Numero>8442</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCuentasDeAhorro.ContratarConPeriodicidadResponse>
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
        "Token": "1040992103CD285A89A23FBE",
        "Device": ""
    },
    "operacionUId": 10209,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTCuentasCorrientes.ContratarConPeriodicidad",
        "Fecha": "2021-10-29",
        "Hora": "12:21:44",
        "Requerimiento": "",
        "Numero": 8440,
        "Estado": "OK"
    }
}
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->