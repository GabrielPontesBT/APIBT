---
title: Obtener Códigos de Límites
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
::: note Método para obtener un listado de los códigos de límites disponibles para tarjetas de débito.

**Nombre publicación:** BTTarjetasDeDebito.ObtenerCodigosDeLimites

**Programa:** RBTPG147

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtLimites | [sBTLimiteTarjeta](#sbtlimitetarjeta) | Listado de códigos de límite.

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
      <bts:BTTarjetasDeDebito.ObtenerCodigosDeLimites>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>352296800F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
      </bts:BTTarjetasDeDebito.ObtenerCodigosDeLimites>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerCodigosDeLimites' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": 1,
        "Usuario": "BANTOTAL",
        "Token": "352296800F955E77534D3E02",
        "Device": "AC"
    }
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
      <BTTarjetasDeDebito.ObtenerCodigosDeLimitesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>352296800F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtLimites>
            <sBTLimiteTarjeta>
               <identificador>1</identificador>
               <moneda>0</moneda>
               <limiteEMV>30000.00</limiteEMV>
               <limiteBandaMagnetica>15000.00</limiteBandaMagnetica>
               <limiteNoPresencial>10000.00</limiteNoPresencial>
            </sBTLimiteTarjeta>
            <sBTLimiteTarjeta>
               <identificador>2</identificador>
               <moneda>0</moneda>
               <limiteEMV>12850.00</limiteEMV>
               <limiteBandaMagnetica>13000.00</limiteBandaMagnetica>
               <limiteNoPresencial>8000.00</limiteNoPresencial>
            </sBTLimiteTarjeta>
            <sBTLimiteTarjeta>
               <identificador>3</identificador>
               <moneda>0</moneda>
               <limiteEMV>0.00</limiteEMV>
               <limiteBandaMagnetica>30000.00</limiteBandaMagnetica>
               <limiteNoPresencial>0.00</limiteNoPresencial>
            </sBTLimiteTarjeta>
            <sBTLimiteTarjeta>
               <identificador>4</identificador>
               <moneda>0</moneda>
               <limiteEMV>0.00</limiteEMV>
               <limiteBandaMagnetica>30000.00</limiteBandaMagnetica>
               <limiteNoPresencial>10000.00</limiteNoPresencial>
            </sBTLimiteTarjeta>
            <sBTLimiteTarjeta>
               <identificador>5</identificador>
               <moneda>0</moneda>
               <limiteEMV>50000.00</limiteEMV>
               <limiteBandaMagnetica>30000.00</limiteBandaMagnetica>
               <limiteNoPresencial>10000.00</limiteNoPresencial>
            </sBTLimiteTarjeta>
         </sdtLimites>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTTarjetasDeDebito.ObtenerCodigosDeLimites</Servicio>
            <Fecha>2020-11-12</Fecha>
            <Hora>16:55:23</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7833</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerCodigosDeLimitesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": 1,
        "Usuario": "BANTOTAL",
        "Token": "352296800F955E77534D3E02",
        "Device": "AC"
    },
    "sdtLimites": {
        "sBTLimiteTarjeta": [
            {
                "identificador": 1,
                "moneda": 0,
                "limiteEMV": 30000.00,
                "limiteBandaMagnetica": 15000.00,
                "limiteNoPresencial": 10000.00
            },
            {
                "identificador": 2,
                "moneda": 0,
                "limiteEMV": 12850.00,
                "limiteBandaMagnetica": 13000.00,
                "limiteNoPresencial": 8000.00
            },
            {
                "identificador": 3,
                "moneda": 0,
                "limiteEMV": 0.00,
                "limiteBandaMagnetica": 30000.00,
                "limiteNoPresencial": 0.00
            },
            {
                "identificador": 4,
                "moneda": 0,
                "limiteEMV": 0.00,
                "limiteBandaMagnetica": 30000.00,
                "limiteNoPresencial": 10000.00
            },
            {
                "identificador": 5,
                "moneda": 0,
                "limiteEMV": 50000.00,
                "limiteBandaMagnetica": 30000.00,
                "limiteNoPresencial": 10000.00
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTTarjetasDeDebito.ObtenerCodigosDeLimites",
        "Fecha": "2020-11-12",
        "Hora": "16:55:23",
        "Requerimiento": 1,
        "Numero": 7833,
        "Estado": "OK"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT --> 
::: details sBTLimiteTarjeta  

### sBTLimiteTarjeta

::: center 
Los campos del tipo de dato estructurado sBTLimiteTarjeta son los siguientes: 

Campo | Tipo | Comentarios 
:--------- | :--------- | :--------- 
identificador | Short | Código de límite. 
limiteBandaMagnetica | Double | Monto límite en banda magnética. 
limiteEMV | Double | Monto límite EMV. 
limiteNoPresencial | Double | Monto límite no presencial. 
moneda | Short | Código de moneda. 
:::
<!-- CIERRA SDT -->