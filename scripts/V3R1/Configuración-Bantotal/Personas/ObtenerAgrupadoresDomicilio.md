---
title: Obtener Agrupadores de Domicilio
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
::: note Método para obtener los diferentes niveles de agrupadores de domicilios.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerAgrupadoresDomicilio

**Programa:** RBTPG221

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->


<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
agrupadorId1 | Short | Identificador del nivel de agrupador 1.
agrupadorId2 | Short | Identificador del nivel de agrupador 2.
agrupadorId3 | Short | Identificador del nivel de agrupador 3.
agrupadorId4 | Short | Identificador del nivel de agrupador 4.
agrupadorId5 | Short | Identificador del nivel de agrupador 5.
agrupadorId6 | Short | Identificador del nivel de agrupador 6.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtAgrupadores | [sBTAgrupadores](#sbtagrupadores) | Listado de agrupadores.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se encontraron agrupadores.
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
      <bts:BTConfiguracionBantotal.ObtenerAgrupadoresDomicilio>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>GP</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>C5DFB132EC9DE80A8063A90E</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
         </bts:Btinreq>
         <bts:agrupadorId1>1</bts:agrupadorId1>
         <bts:agrupadorId2>1</bts:agrupadorId2>
         <bts:agrupadorId3></bts:agrupadorId3>
         <bts:agrupadorId4></bts:agrupadorId4>
         <bts:agrupadorId5></bts:agrupadorId5>
         <bts:agrupadorId6></bts:agrupadorId6>
      </bts:BTConfiguracionBantotal.ObtenerAgrupadoresDomicilio>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerAgrupadoresDomicilio' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{   
    "Btinreq": {
      "Usuario": "INSTALADOR",
      "Device": "GP",
      "Requerimiento": 1,
      "Token": "C5DFB132EC9DE80A8063A90E",
      "Canal": "BTDIGITAL"
    },
    "agrupadorId1": 1,
    "agrupadorId2": 1,
    "agrupadorId3": "",
    "agrupadorId4": "",
    "agrupadorId5": "",
    "agrupadorId6": ""
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
      <BTConfiguracionBantotal.ObtenerAgrupadoresDomicilioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>C5DFB132EC9DE80A8063A90E</Token>
         </Btinreq>
         <sdtAgrupadores>
            <niveles>
               <sBTAgrupadorNiv1_it>
                  <codigo>1</codigo>
                  <descripcion>Avenida</descripcion>
                  <subNivel2>
                     <sBTAgrupadorNiv2_it>
                        <codigo>1</codigo>
                        <descripcion>No. Puerta</descripcion>
                        <subNivel3>
                           <sBTAgrupadorNiv3_it>
                              <codigo>1</codigo>
                              <descripcion>Piso</descripcion>
                              <subNivel4>
                                 <sBTAgrupadorNiv4_it>
                                    <codigo>1</codigo>
                                    <descripcion>Esquina</descripcion>
                                    <subNivel5>
                                       <sBTAgrupadorNiv5_it>
                                          <codigo>1</codigo>
                                          <descripcion>Niv5</descripcion>
                                          <subNivel6></subNivel6>
                                       </sBTAgrupadorNiv5_it>
                                    </subNivel5>
                                 </sBTAgrupadorNiv4_it>
                              </subNivel4>
                           </sBTAgrupadorNiv3_it>
                        </subNivel3>
                     </sBTAgrupadorNiv2_it>
                  </subNivel2>
               </sBTAgrupadorNiv1_it>
            </niveles>
         </sdtAgrupadores>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35054</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerAgrupadoresDomicilio</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2025-04-30</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>16:39:16</Hora>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerAgrupadoresDomicilioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Device": "GP",
    "Usuario": "INSTALADOR",
    "Requerimiento": 1,
    "Canal": "BTDIGITAL",
    "Token": "C5DFB132EC9DE80A8063A90E"
  },
  "sdtAgrupadores": {
    "niveles": {
      "codigo": 0,
      "descripcion": "",
      "subNivel2": {
        "codigo": 0,
        "descripcion": "",
        "subNivel3": {
          "codigo": 0,
          "descripcion": "",
          "subNivel4": {
            "codigo": 0,
            "descripcion": "",
            "subNivel": {
              "codigo": 0,
              "descripcion": "",
              "subNivel6": {
                "codigo": 0,
                "descripcion": ""
              }
            }
          }
        }
      }
    }
  },
  "Erroresnegocio": "",
  "Btoutreq": {
    "Numero": 35054,
    "Estado": "OK",
    "Servicio": "BTConfiguracionBantotal.ObtenerAgrupadoresDomicilio",
    "Requerimiento": 1,
    "Fecha": "2025-04-30",
    "Canal": "BTDIGITAL",
    "Hora": "16:39:16"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTAgrupadores  

### sBTAgrupadores

::: center 
Los campos del tipo de dato estructurado sBTAgrupadores son los siguientes: 

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
niveles | [sBTAgrupadorNiv1](#sbtagrupadorniv1) | Colección del primer subnivel de agrupación.
:::

::: details sBTAgrupadorNiv1

### sBTAgrupadorNiv1

::: center 
Los campos del tipo de dato estructurado sBTAgrupadorNiv1 son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
codigo | Short | Código de agrupador.
descripcion | String | Nombre de agrupador.
subNivel2 | [sBTAgrupadorNiv2](#sbtagrupadorniv2) | Colección del segundo subnivel de agrupación.
:::

::: details sBTAgrupadorNiv2

### sBTAgrupadorNiv2

::: center 
Los campos del tipo de dato estructurado sBTAgrupadorNiv2 son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
codigo | Short | Código de agrupador.
descripcion | String | Nombre de agrupador.
subNivel3 | [sBTAgrupadorNiv3](#sbtagrupadorniv3) | Colección del tercer subnivel de agrupación.
:::

::: details sBTAgrupadorNiv3

### sBTAgrupadorNiv3

::: center 
Los campos del tipo de dato estructurado sBTAgrupadorNiv3 son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
codigo | Short | Código de agrupador.
descripcion | String | Nombre de agrupador.
subNivel4 | [sBTAgrupadorNiv4](#sbtagrupadorniv4) | Colección del cuarto subnivel de agrupación.
:::

::: details sBTAgrupadorNiv4

### sBTAgrupadorNiv4

::: center 
Los campos del tipo de dato estructurado sBTAgrupadorNiv4 son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
codigo | Short | Código de agrupador.
descripcion | String | Nombre de agrupador.
subNivel | [sBTAgrupadorNiv5](#sbtagrupadorniv5) | Colección del quinto subnivel de agrupación.
:::

::: details sBTAgrupadorNiv5

### sBTAgrupadorNiv5

::: center 
Los campos del tipo de dato estructurado sBTAgrupadorNiv5 son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
codigo | Short | Código de agrupador.
descripcion | String | Nombre de agrupador.
subNivel6 | [sBTAgrupadorNiv6](#sbtagrupadorniv6) | Colección del quinto subnivel de agrupación.
:::

::: details sBTAgrupadorNiv6

### sBTAgrupadorNiv6

::: center 
Los campos del tipo de dato estructurado sBTAgrupadorNiv6 son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
codigo | Short | Código de agrupador.
descripcion | String | Nombre de agrupador.
:::

<!-- CIERRA SDT -->

