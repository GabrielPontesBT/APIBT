---
title: Obtener Scores
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
::: note Método para obtener los scores de los modelos de evaluación.

**Nombre publicación:** BTPAE.ObtenerScores

**Programa:** RBTPG511

**Global/País:** Institucional
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
modeloEvaluacionId | Int | Código de modelo de evaluación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtScoresPAE | [sBTScorePAE](#sbtscorepae) | Listado de scores de un modelo PAE.

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
      <bts:BTPAE.ObtenerScores>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>FP</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>3789c5608bCD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:modeloEvaluacionId>101</bts:modeloEvaluacionId>
      </bts:BTPAE.ObtenerScores>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPAE_v1?ObtenerScores \
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
  "modeloEvaluacionId": 101
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
      <BTPAE.ObtenerScoresResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>3789c5608bCD285A89A23FBE</Token>
         </Btinreq>
         <sdtScoresPAE>
            <sBTScorePAE>
               <valorScoreRango>-0.409</valorScoreRango>
               <tipoRestriccion/>
               <idPolitica>0</idPolitica>
               <codigoModelo>101</codigoModelo>
               <desdeNumerico>0</desdeNumerico>
               <hastaFecha>0001-01-01</hastaFecha>
               <hastaNumerico>25</hastaNumerico>
               <valorPolitica/>
               <mensajeIncumPolitica/>
               <correlativo>1</correlativo>
               <desdeCaracter/>
               <codigoItem>1</codigoItem>
               <desdeFecha>0001-01-01</desdeFecha>
               <hastaCaracter/>
            </sBTScorePAE>
         </sdtScoresPAE>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>31107</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPAE.ObtenerScores</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2022-11-29</Fecha>
            <Hora>12:32:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPAE.ObtenerScoresResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Envelope": {
    "Body": {
      "BTPAE.ObtenerScoresResponse": {
        "Btinreq": {
          "Device": "FP",
          "Usuario": "INSTALADOR",
          "Requerimiento": 1,
          "Canal": "BTDIGITAL",
          "Token": "3789c5608bCD285A89A23FBE"
        },
        "sdtScoresPAE": {
          "sBTScorePAE": [
            {
              "valorScoreRango": -0.409,
              "tipoRestriccion": "",
              "idPolitica": 0,
              "codigoModelo": 101,
              "desdeNumerico": 0,
              "hastaFecha": "0001-01-01",
              "hastaNumerico": 25,
              "valorPolitica": "",
              "mensajeIncumPolitica": "",
              "correlativo": 1,
              "desdeCaracter": "",
              "codigoItem": 1,
              "desdeFecha": "0001-01-01",
              "hastaCaracter": ""
            },
          ]
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Numero": 31107,
          "Estado": "OK",
          "Servicio": "BTPAE.ObtenerScores",
          "Requerimiento": 1,
          "Fecha": "2022-11-29",
          "Hora": "12:32:04",
          "Canal": "BTDIGITAL"
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
::: details sBTScorePAE  

### sBTScorePAE

::: center 
Los campos del tipo de dato estructurado sBTScorePAE son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigoItem | Numérico | Código de item. 
codigoModelo | Numérico | Código de modelo. 
correlativo | Numérico | Correlativo. 
desdeNumerico | Numerico | Número desde. 
desdeCaracter | String | Caracter desde. 
desdeFecha | Date | Fecha desde. 
hastaNumerico | Numerico | Número hasta. 
hastaCaracter | String | Caracter hasta. 
hastaFecha | Date | Fecha hasta. 
idPolitica | Numérico | Código de política. 
mensajeIncumPolitica | String | Mensaje de política incumplida. 
tipoRestriccion | String | Tipo de restricción por defecto. ('I'= Informativa; 'A'= Alerta; 'B'= Bloqueante; 'E'= Bloqueante con Excepción;).
valorPolitica | String | Valor de política para el rango (S/N). 
valorScoreRango | Numérico | Rango del valor score. 
:::
<!-- CIERRA SDT -->