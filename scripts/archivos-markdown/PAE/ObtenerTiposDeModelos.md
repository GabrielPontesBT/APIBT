---
title: Obtener Tipos De Modelos
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
::: note Método para obtener los diferentes tipos de modelos de evaluación.

**Nombre publicación:** BTPAE.ObtenerTiposDeModelos

**Programa:** RBTPG514

**Global/País:** Institucional
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtTModelosPAE | [sBTTModeloPAE](#sbttmodelopae) | Listado de los modelos de evaluación.

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
      <bts:BTPAE.ObtenerTiposDeModelos>
         <bts:Btinreq>
            <bts:Requerimiento>10</bts:Requerimiento>
            <bts:Device>FP</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>3789c5608bCD285A89A23FBE</bts:Token>
         </bts:Btinreq>
      </bts:BTPAE.ObtenerTiposDeModelos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPAE_v1?ObtenerTiposDeModelos \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
  "Btinreq": {
      "Requerimiento": 13,
      "Device": "FP",
      "Canal": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Token": "3789c5608bCD285A89A23FBE"
  },
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
      <BTPAE.ObtenerTiposDeModelosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>10</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>3789c5608bCD285A89A23FBE</Token>
         </Btinreq>
         <sdtTModelosPAE>
            <sBTTModeloPAE>
               <descripcion>Lineal</descripcion>
               <programaEvaluacion/>
               <tipoModelo>1</tipoModelo>
               <categoriaModelo>1</categoriaModelo>
            </sBTTModeloPAE>
            <sBTTModeloPAE>
               <descripcion>Logístico</descripcion>
               <programaEvaluacion/>
               <tipoModelo>2</tipoModelo>
               <categoriaModelo>5</categoriaModelo>
            </sBTTModeloPAE>
            <sBTTModeloPAE>
               <descripcion>Mínimo Puntaje</descripcion>
               <programaEvaluacion/>
               <tipoModelo>3</tipoModelo>
               <categoriaModelo>2</categoriaModelo>
            </sBTTModeloPAE>
            <sBTTModeloPAE>
               <descripcion>Máximo Puntaje</descripcion>
               <programaEvaluacion/>
               <tipoModelo>4</tipoModelo>
               <categoriaModelo>3</categoriaModelo>
            </sBTTModeloPAE>
            <sBTTModeloPAE>
               <descripcion>Ejecución de algoritmo externo</descripcion>
               <programaEvaluacion>PAISPRU</programaEvaluacion>
               <tipoModelo>5</tipoModelo>
               <categoriaModelo>4</categoriaModelo>
            </sBTTModeloPAE>
         </sdtTModelosPAE>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>31103</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPAE.ObtenerTiposDeModelos</Servicio>
            <Fecha>2022-11-29</Fecha>
            <Requerimiento>10</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>10:38:28</Hora>
         </Btoutreq>
      </BTPAE.ObtenerTiposDeModelosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Envelope": {
    "Body": {
      "BTPAE.ObtenerTiposDeModelosResponse": {
        "Btinreq": {
          "Device": "FP",
          "Usuario": "INSTALADOR",
          "Requerimiento": 10,
          "Canal": "BTDIGITAL",
          "Token": "3789c5608bCD285A89A23FBE"
        },
        "sdtTModelosPAE": {
          "sBTTModeloPAE": [
            {
              "descripcion": "Lineal",
              "programaEvaluacion": "",
              "tipoModelo": 1,
              "categoriaModelo": 1
            },
            {
              "descripcion": "Logístico",
              "programaEvaluacion": "",
              "tipoModelo": 2,
              "categoriaModelo": 5
            },
            {
              "descripcion": "Mínimo Puntaje",
              "programaEvaluacion": "",
              "tipoModelo": 3,
              "categoriaModelo": 2
            },
            {
              "descripcion": "Máximo Puntaje",
              "programaEvaluacion": "",
              "tipoModelo": 4,
              "categoriaModelo": 3
            },
            {
              "descripcion": "Ejecución de algoritmo externo",
              "programaEvaluacion": "PAISPRU",
              "tipoModelo": 5,
              "categoriaModelo": 4
            }
          ]
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Numero": 31103,
          "Estado": "OK",
          "Servicio": "BTPAE.ObtenerTiposDeModelos",
          "Fecha": "2022-11-29",
          "Requerimiento": 10,
          "Canal": "BTDIGITAL",
          "Hora": "10:38:28"
        }
      }
    }
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTModeloPAE  

### sBTTModeloPAE

::: center 
Los campos del tipo de dato estructurado sBTTModeloPAE son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
categoriaModelo | Numérico | Categoría de Modelo (1 - Lineal, 2 - Mínimo, 3 - Máximo, 4 - Especial). 
descripcion | String | Descripción del tipo de modelo. 
programaEvaluacion | String | Programa particular para realizar la evaluación del modelo. 
tipoModelo | Numérico | Identificador del tipo de modelo. 
:::
<!-- CIERRA SDT -->