---
title: Obtener Motivos Inhabilitación
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
::: note Método para obtener un listado de los motivos de inhabilitación.

**Nombre publicación:** BTClientes.ObtenerMotivosInhabilitacion

**Programa:** RBTPG449

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
sdtMotivosInhabilitacion | [sBTMotivoInhabilitacion](#sbtmotivoinhabilitacion) | Listado de motivos de inhabilitación.

@tab Errores

Código | Descripción
:--------- | :-----------
40001 | No existen motivos de inhabilitación.
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
      <bts:BTClientes.ObtenerMotivosInhabilitacion>
         <bts:Btinreq>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>289a9ca6a299865B3A2E76CF</bts:Token>
            <bts:Device>2</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>0</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTClientes.ObtenerMotivosInhabilitacion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerMotivosInhabilitacion' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
          "Usuario": "Instalador",
          "Token": "289a9ca6a299865B3A2E76CF",
          "Device": 2,
          "Canal": "BTDIGITAL",
          "Requerimiento": 0
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
      <Prueba.ObtenerMotivosInhabilitacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>2</Device>
            <Usuario>Instalador</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>289a9ca6a299865B3A2E76CF</Token>
         </Btinreq>
         <sbtMotivosInhabilitacion>
            <SdtsBTMotivoInhabilitacion>
               <descripcion>Embargo</descripcion>
               <codigo>1</codigo>
            </SdtsBTMotivoInhabilitacion>
            <SdtsBTMotivoInhabilitacion>
               <descripcion>En Juicio</descripcion>
               <codigo>3</codigo>
            </SdtsBTMotivoInhabilitacion>
            <SdtsBTMotivoInhabilitacion>
               <descripcion>Retenciones</descripcion>
               <codigo>10</codigo>
            </SdtsBTMotivoInhabilitacion>
         </sbtMotivosInhabilitacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1827</Numero>
            <Servicio>Prueba.ObtenerMotivosInhabilitacion</Servicio>
            <Estado>OK</Estado>
            <Fecha>2022-10-27</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>09:39:20</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </Prueba.ObtenerMotivosInhabilitacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
          "Device": 2,
          "Usuario": "Instalador",
          "Requerimiento": 0,
          "Canal": "BTDIGITAL",
          "Token": "289a9ca6a299865B3A2E76CF"
        },
        "sbtMotivosInhabilitacion": {
          "SdtsBTMotivoInhabilitacion": [
            {
              "descripcion": "Embargo",
              "codigo": 1
            },
            {
              "descripcion": "En Juicio",
              "codigo": 3
            },
            {
              "descripcion": "Retenciones",
              "codigo": 10
            }
          ]
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Numero": 1827,
          "Servicio": "Prueba.ObtenerMotivosInhabilitacion",
          "Estado": "OK",
          "Fecha": "2022-10-27",
          "Requerimiento": 0,
          "Hora": "09:39:20",
          "Canal": "BTDIGITAL"
        }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTMotivoInhabilitacion

### sBTMotivoInhabilitacion

::: center
Los campos del tipo de dato estructurado sBTMotivoInhabilitacion son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
codigo | Long | Código del motivo de inhabilitación.
descripcion | String | Descripción del motivo de inhabilitación.
:::

<!-- CIERRA SDT -->