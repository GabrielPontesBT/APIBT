---
title: Obtener Límites
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
::: note Método para obtener los límites de una persona.

**Nombre publicación:** BTPersonas.ObtenerLimites

**Programa:** RBTPG560

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->


<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtLimites | [sBTLimiteCliente](#sbtlimitecliente) | Listado de límites.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió identificador de persona.
30002 | No se recuperó la persona para el identificador ingresado.
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
      <bts:BTPersonas.ObtenerLimites>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>67579685BC9ACF711F22AF23</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>161</bts:personaUId>
      </bts:BTPersonas.ObtenerLimites>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerLimites' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Device": "1",
        "Usuario": "INSTALADOR",
        "Requerimiento": 1,
        "Canal": "BTDIGITAL",
        "Token": "67579685BC9ACF711F22AF23"
    },
    "personaUId": 161
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
      <BTPersonas.ObtenerLimitesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>67579685BC9ACF711F22AF23</Token>
         </Btinreq>
         <sdtLimites>
            <sBTLimiteCliente>
               <fechaVencimiento>2019-02-06</fechaVencimiento>
               <descripcion>Línea_Créditos Hipotecarios / $</descripcion>
               <limiteDisponible>22000.00</limiteDisponible>
               <moneda>$</moneda>
               <limiteOtorgado>22000.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
               <limteUtilizado>0</limteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <fechaVencimiento>2019-02-06</fechaVencimiento>
               <descripcion>Línea_Créditos Comercial PF / $</descripcion>
               <limiteDisponible>25000.00</limiteDisponible>
               <moneda>$</moneda>
               <limiteOtorgado>25000.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
               <limteUtilizado>0</limteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <fechaVencimiento>2019-02-06</fechaVencimiento>
               <descripcion>Línea_Créditos Comercial LP / $</descripcion>
               <limiteDisponible>27000.00</limiteDisponible>
               <moneda>$</moneda>
               <limiteOtorgado>27000.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
               <limteUtilizado>0</limteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <fechaVencimiento>2019-02-06</fechaVencimiento>
               <descripcion>Línea_Firmantes no calificados / $</descripcion>
               <limiteDisponible>38000.00</limiteDisponible>
               <moneda>$</moneda>
               <limiteOtorgado>38000.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
               <limteUtilizado>0</limteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <fechaVencimiento>2019-02-06</fechaVencimiento>
               <descripcion>Línea_Firmantes AAA / $</descripcion>
               <limiteDisponible>27000.00</limiteDisponible>
               <moneda>$</moneda>
               <limiteOtorgado>27000.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
               <limteUtilizado>0</limteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <fechaVencimiento>2019-02-06</fechaVencimiento>
               <descripcion>Línea_Firmantes Estado / $</descripcion>
               <limiteDisponible>20000.00</limiteDisponible>
               <moneda>$</moneda>
               <limiteOtorgado>20000.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
               <limteUtilizado>0</limteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <fechaVencimiento>0001-01-01</fechaVencimiento>
               <descripcion>Total / MN</descripcion>
               <limiteDisponible>1000000.00</limiteDisponible>
               <moneda/>
               <limiteOtorgado>1000000.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
               <limteUtilizado>0</limteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <fechaVencimiento>0001-01-01</fechaVencimiento>
               <descripcion>Total / ME</descripcion>
               <limiteDisponible>0.00</limiteDisponible>
               <moneda/>
               <limiteOtorgado>0.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
               <limteUtilizado>0</limteUtilizado>
            </sBTLimiteCliente>
         </sdtLimites>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>229016</Numero>
            <Servicio>BTPersonas.ObtenerLimites</Servicio>
            <Estado>OK</Estado>
            <Requerimiento/>
            <Fecha>2024-05-30</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:37:57</Hora>
         </Btoutreq>
      </BTPersonas.ObtenerLimitesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Device": "1",
    "Usuario": "INSTALADOR",
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Token": "67579685BC9ACF711F22AF23"
  },
  "sdtLimites": {
    "sBTLimiteCliente": [
      {
        "fechaVencimiento": "2019-02-06",
        "descripcion": "Línea_Créditos Hipotecarios / $",
        "limiteDisponible": 22000,
        "moneda": "$",
        "limiteOtorgado": 22000,
        "limiteUtilizado": 0,
        "limteUtilizado": 0
      },
      {
        "fechaVencimiento": "2019-02-06",
        "descripcion": "Línea_Créditos Comercial PF / $",
        "limiteDisponible": 25000,
        "moneda": "$",
        "limiteOtorgado": 25000,
        "limiteUtilizado": 0,
        "limteUtilizado": 0
      },
      {
        "fechaVencimiento": "2019-02-06",
        "descripcion": "Línea_Créditos Comercial LP / $",
        "limiteDisponible": 27000,
        "moneda": "$",
        "limiteOtorgado": 27000,
        "limiteUtilizado": 0,
        "limteUtilizado": 0
      },
      {
        "fechaVencimiento": "2019-02-06",
        "descripcion": "Línea_Firmantes no calificados / $",
        "limiteDisponible": 38000,
        "moneda": "$",
        "limiteOtorgado": 38000,
        "limiteUtilizado": 0,
        "limteUtilizado": 0
      },
      {
        "fechaVencimiento": "2019-02-06",
        "descripcion": "Línea_Firmantes AAA / $",
        "limiteDisponible": 27000,
        "moneda": "$",
        "limiteOtorgado": 27000,
        "limiteUtilizado": 0,
        "limteUtilizado": 0
      },
      {
        "fechaVencimiento": "2019-02-06",
        "descripcion": "Línea_Firmantes Estado / $",
        "limiteDisponible": 20000,
        "moneda": "$",
        "limiteOtorgado": 20000,
        "limiteUtilizado": 0,
        "limteUtilizado": 0
      },
      {
        "fechaVencimiento": "0001-01-01",
        "descripcion": "Total / MN",
        "limiteDisponible": 1000000,
        "moneda": "",
        "limiteOtorgado": 1000000,
        "limiteUtilizado": 0,
        "limteUtilizado": 0
      },
      {
        "fechaVencimiento": "0001-01-01",
        "descripcion": "Total / ME",
        "limiteDisponible": 0,
        "moneda": "",
        "limiteOtorgado": 0,
        "limiteUtilizado": 0,
        "limteUtilizado": 0
      }
    ]
  },
  "Erroresnegocio": {
    "BTErrorNegocio": []
  },
  "Btoutreq": {
    "Numero": 229016,
    "Servicio": "BTPersonas.ObtenerLimites",
    "Estado": "OK",
    "Requerimiento": 0,
    "Fecha": "2024-05-30",
    "Canal": "BTDIGITAL",
    "Hora": "12:37:57"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTLimiteCliente  

### sBTLimiteCliente

::: center 
Los campos del tipo de dato estructurado sBTLimiteCliente son los siguientes: 

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
descripcion | String | Descripción del estado.
fechaVencimiento | Date | Fecha de vencimiento del límite.
limiteDisponible | Double | Límite disponible para el cliente.
limiteOtorgado | Double | Límite otorgado al cliente.
limteUtilizado | Double | Límite utilizado por el cliente.
moneda | String | Símbolo de moneda.
:::
<!-- CIERRA SDT -->