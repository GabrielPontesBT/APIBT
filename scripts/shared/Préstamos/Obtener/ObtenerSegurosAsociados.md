---
title: Obtener Seguros Asociados
icon: /assets/image/nuevo.svg
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
::: note Método para obtener los seguros asociados a una operación de préstamo.

**Nombre publicación:** BTPrestamos.ObtenerSegurosAsociados

**Programa:** RBTPG627

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de la operación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtSegurosAsociados | [sBTSeguroAsociado](#sbtseguroasociado) | Datos del seguro asociado a la operación.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de operación.
30002 | No se recuperó la operación para el identificador.
40001 | No tiene seguros asociados.
40002 | La operación se encuentra cancelada.
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
      <bts:BTPrestamos.ObtenerSegurosAsociados>
         <bts:Btinreq>
   		  <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>FC</bts:Device>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>554DC597B08D07B49154AFFC</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>1059</bts:operacionUId>
      </bts:BTPrestamos.ObtenerSegurosAsociados>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerSegurosAsociados' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Usuario": "INSTALADOR",
        "Device": "FC",
        "Requerimiento": 0,
        "Token": "554DC597B08D07B49154AFFC"
    },
    "operacionUId": 1059
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
      <BTPrestamos.ObtenerSegurosAsociadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>554DC597B08D07B49154AFFC</Token>
         </Btinreq>
         <sdtSegurosAsociados>
            <sBTSeguroAsociado>
               <extraPrima>0.0</extraPrima>
               <descripcion>SANCOR - Vida - Variante 1</descripcion>
               <importe>720.0</importe>
               <codigo>100</codigo>
            </sBTSeguroAsociado>
            <sBTSeguroAsociado>
               <extraPrima>0.0</extraPrima>
               <descripcion>SANCOR- Desempleo %saldos</descripcion>
               <importe>36.65</importe>
               <codigo>200</codigo>
            </sBTSeguroAsociado>
            <sBTSeguroAsociado>
               <extraPrima>0.0</extraPrima>
               <descripcion>Sobre saldos</descripcion>
               <importe>653.4</importe>
               <codigo>700</codigo>
            </sBTSeguroAsociado>
         </sdtSegurosAsociados>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>36897</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerSegurosAsociados</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-11-26</Fecha>
            <Hora>09:52:55</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerSegurosAsociadosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
        "Device": "FC",
        "Usuario": "INSTALADOR",
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Token": "554DC597B08D07B49154AFFC"
    },
    "sdtSegurosAsociados": {
        "sBTSeguroAsociado": [
            {
                "extraPrima": 0.0,
                "descripcion": "SANCOR - Vida - Variante 1",
                "importe": 720.0,
                "codigo": 100
            },
            {
                "extraPrima": 0.0,
                "descripcion": "SANCOR- Desempleo %saldos",
                "importe": 36.65,
                "codigo": 200
            },
            {
                "extraPrima": 0.0,
                "descripcion": "Sobre saldos",
                "importe": 653.4,
                "codigo": 700
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 36897,
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerSegurosAsociados",
        "Requerimiento": 0,
        "Fecha": "2025-11-26",
        "Hora": "09:52:55",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSeguroAsociado  

### sBTSeguroAsociado

::: center 
Los campos del tipo de dato estructurado sBTSeguroAsociado son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
codigo | Int | Código del seguro. 
descripcion | String | Descripción del seguro. 
importe | Int | Importe total del seguro. 
extraPrima | Int | Porcentaje extra del Seguro.

:::
<!-- CIERRA SDT -->