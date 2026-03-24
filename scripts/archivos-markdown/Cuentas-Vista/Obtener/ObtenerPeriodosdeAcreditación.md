---
title: Obtener Períodos de Acreditación
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
::: note Método para obtener los períodos de acreditación cargados en el sistema.

**Nombre publicación:** BTCuentasVista.ObtenerPeriodosDeAcreditacion

**Programa:** RBTPG365

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtPeriodosDeAcreditacion | [sBTPeriodoDeAcreditacion](#sbtperiododeacreditacion) | Listado de períodos de acreditación.

@tab Errores

No aplica.
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
      <bts:BTCuentasVista.ObtenerPeriodosDeAcreditacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1080548031CD285A89A23FBE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
      </bts:BTCuentasVista.ObtenerPeriodosDeAcreditacion>
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
        "Token": "1518870407CD285A89A23FBE",
        "Device": ""
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
      <BTCuentasVista.ObtenerPeriodosDeAcreditacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>1080548031CD285A89A23FBE</Token>
            <Device/>
         </Btinreq>
         <sdtPeriodosDeAcreditacion>
            <SdtsBTPeriodoDeAcreditacion>
               <descripcion>Diario</descripcion>
               <valor>1</valor>
            </SdtsBTPeriodoDeAcreditacion>
            <SdtsBTPeriodoDeAcreditacion>
               <descripcion>Semanal</descripcion>
               <valor>5</valor>
            </SdtsBTPeriodoDeAcreditacion>
            <SdtsBTPeriodoDeAcreditacion>
               <descripcion>Quincenal</descripcion>
               <valor>15</valor>
            </SdtsBTPeriodoDeAcreditacion>
            <SdtsBTPeriodoDeAcreditacion>
               <descripcion>Mensual</descripcion>
               <valor>30</valor>
            </SdtsBTPeriodoDeAcreditacion>
            <SdtsBTPeriodoDeAcreditacion>
               <descripcion>Trimestral</descripcion>
               <valor>90</valor>
            </SdtsBTPeriodoDeAcreditacion>
            <SdtsBTPeriodoDeAcreditacion>
               <descripcion>Semestral</descripcion>
               <valor>180</valor>
            </SdtsBTPeriodoDeAcreditacion>
            <SdtsBTPeriodoDeAcreditacion>
               <descripcion>Anual</descripcion>
               <valor>360</valor>
            </SdtsBTPeriodoDeAcreditacion>
         </sdtPeriodosDeAcreditacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCuentasVista.ObtenerPeriodosDeAcreditacion</Servicio>
            <Fecha>2021-10-29</Fecha>
            <Hora>14:27:12</Hora>
            <Requerimiento/>
            <Numero>8451</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCuentasVista.ObtenerPeriodosDeAcreditacionResponse>
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
        "Token": "1518870407CD285A89A23FBE",
        "Device": ""
    },
    "sdtPeriodosDeAcreditacion": {
        "SdtsBTPeriodoDeAcreditacion": [
            {
                "descripcion": "Diario",
                "valor": 1
            },
            {
                "descripcion": "Semanal",
                "valor": 5
            },
            {
                "descripcion": "Quincenal",
                "valor": 15
            },
            {
                "descripcion": "Mensual",
                "valor": 30
            },
            {
                "descripcion": "Trimestral",
                "valor": 90
            },
            {
                "descripcion": "Semestral",
                "valor": 180
            },
            {
                "descripcion": "Anual",
                "valor": 360
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTCuentasVista.ObtenerPeriodosDeAcreditacion",
        "Fecha": "2021-10-29",
        "Hora": "13:37:58",
        "Requerimiento": "",
        "Numero": 8449,
        "Estado": "OK"
    }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPeriodoDeAcreditacion  

### sBTPeriodoDeAcreditacion

::: center 
Los campos del tipo de dato estructurado sBTPeriodoDeAcreditacion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción del período. 
valor | Int | Valor del período. 
:::
<!-- CIERRA SDT -->