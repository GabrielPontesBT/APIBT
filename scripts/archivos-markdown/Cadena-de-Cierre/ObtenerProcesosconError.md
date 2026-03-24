---
title: Obtener Procesos con Error
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
::: note Método para obtener un listado de los procesos con error en la cadena de cierre para una fecha dada.

**Nombre publicación:** BTCadenaCierre.ObtenerProcesosConError

**Programa:** RBTPG505

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
fecha | Date | Fecha de procesos.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtProcesosBatch | [sBTProcesoBatch](#sbtprocesobatch) | Listado de procesos con error.

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
      <bts:BTCadenaCierre.ObtenerProcesosConError>
         <bts:Btinreq>
            <bts:Device>mc</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6964034201CD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:fecha>2018-05-07</bts:fecha>
      </bts:BTCadenaCierre.ObtenerProcesosConError>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCadenaCierre?ObtenerProcesosConError' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "bc8b678bc44A8B5C60A82434"
    }, 
    "fecha":"2018-05-07",
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
      <BTCadenaCierre.ObtenerProcesosConErrorResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>mc</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6964034201CD285A89A23FBE</Token>
         </Btinreq>
         <sdtProcesosBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>1725</identificador> 
               <nombre>PNU00011</nombre> 
               <descripcion>Ajuste cotización de Unidades</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>1725</identificador> 
               <nombre>PNU00011</nombre> 
               <descripcion>Ajuste cotización de Unidades</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>1730</identificador> 
               <nombre>PDP00004</nombre> 
               <descripcion>Pago Intereses Periódicos</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>1730</identificador> 
               <nombre>PDP00004</nombre> 
               <descripcion>Pago Intereses Periódicos</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>1730</identificador> 
               <nombre>PDP00004</nombre> 
               <descripcion>Pago Intereses Periódicos</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>1730</identificador> 
               <nombre>PDP00004</nombre> 
               <descripcion>Pago Intereses Periódicos</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>1740</identificador> 
               <nombre>PPP6361</nombre> 
               <descripcion>Pasaje a Castigos</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>1745</identificador> 
               <nombre>PDP00001</nombre> 
               <descripcion>Renovación Automática</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>1750</identificador> 
               <nombre>PNU00009</nombre> 
               <descripcion>Ajuste de Operaciones  Cancela</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>3100</identificador> 
               <nombre>PCC00032</nombre> 
               <descripcion>Actualiza movimientos FSH021</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>3700</identificador> 
               <nombre>PNU00006</nombre> 
               <descripcion>Ajuste saldos Corresponsales</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>3725</identificador> 
               <nombre>PNU00007</nombre> 
               <descripcion>Tit.ajuste de v.e. y cupon</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>3750</identificador> 
               <nombre>PNU00117</nombre> 
               <descripcion>Resultados a Moneda FVC</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>3800</identificador> 
               <nombre>PNU00217</nombre> 
               <descripcion>Pasaje Resultados M/E a M/N</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>3900</identificador> 
               <nombre>PNU00003</nombre> 
               <descripcion>Ajuste Posición de Monedas</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>4000</identificador> 
               <nombre>PNU00004</nombre> 
               <descripcion>Ajuste Valuación Monedas</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>4400</identificador> 
               <nombre>PSID0001</nombre> 
               <descripcion>Expando Rubros Campo Lista</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>4500</identificador> 
               <nombre>PSID0003</nombre> 
               <descripcion>Calcula saldos para campos ti</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>4600</identificador> 
               <nombre>PSID0002</nombre> 
               <descripcion>Acumula Saldos Campo Acumulado</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
         </sdtProcesosBatch> 
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>42155</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCadenaCierre.ObtenerProcesosConError</Servicio>
            <Fecha>2022-06-01</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>13:36:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCadenaCierre.ObtenerProcesosConErrorResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
      "Device": "mc",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6964034201CD285A89A23FBE"
    },
    "sdtProcesosBatch": { 
      "SdtsBTProcesoBatch": [ 
        { 
          "identificador": "1725", 
          "nombre": "PNU00011", 
          "descripcion": "Ajuste cotización de Unidades", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "1725", 
          "nombre": "PNU00011", 
          "descripcion": "Ajuste cotización de Unidades", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "1730", 
          "nombre": "PDP00004", 
          "descripcion": "Pago Intereses Periódicos", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "1730", 
          "nombre": "PDP00004", 
          "descripcion": "Pago Intereses Periódicos", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "1730", 
          "nombre": "PDP00004", 
          "descripcion": "Pago Intereses Periódicos", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "1730", 
          "nombre": "PDP00004", 
          "descripcion": "Pago Intereses Periódicos", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "1740", 
          "nombre": "PPP6361", 
          "descripcion": "Pasaje a Castigos", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "1745", 
          "nombre": "PDP00001", 
          "descripcion": "Renovación Automática", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "1750", 
          "nombre": "PNU00009", 
          "descripcion": "Ajuste de Operaciones  Cancela", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "3100", 
          "nombre": "PCC00032", 
          "descripcion": "Actualiza movimientos FSH021", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "3700", 
          "nombre": "PNU00006", 
          "descripcion": "Ajuste saldos Corresponsales", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "3725", 
          "nombre": "PNU00007", 
          "descripcion": "Tit.ajuste de v.e. y cupon", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "3750", 
          "nombre": "PNU00117", 
          "descripcion": "Resultados a Moneda FVC", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "3800", 
          "nombre": "PNU00217", 
          "descripcion": "Pasaje Resultados M/E a M/N", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "3900", 
          "nombre": "PNU00003", 
          "descripcion": "Ajuste Posición de Monedas", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "4000", 
          "nombre": "PNU00004", 
          "descripcion": "Ajuste Valuación Monedas", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "4400", 
          "nombre": "PSID0001", 
          "descripcion": "Expando Rubros Campo Lista", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "4500", 
          "nombre": "PSID0003", 
          "descripcion": "Calcula saldos para campos ti", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "4600", 
          "nombre": "PSID0002", 
          "descripcion": "Acumula Saldos Campo Acumulado", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        } 
      ] 
    },
    "Erroresnegocio": {
    },
    "Btoutreq": {
      "Numero": "42155",
      "Estado": "OK",
      "Servicio": "BTCadenaCierre.ObtenerProcesosConError",
      "Fecha": "2022-06-01",
      "Requerimiento": "1",
      "Hora": "13:36:10",
      "Canal": "BTDIGITAL"
    }
  },
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTProcesoBatch  

### sBTProcesoBatch

::: center 
Los campos del tipo de dato estructurado sBTProcesoBatch son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción. 
esReprocesable | String | Descripción para reprocesamiento. 
identificador | Int | Identificador de proceso batch. 
nombre | String | Nombre del proceso. 
parametrosExtendidos | String | ¿Utiliza parámetros extendidos? (SI / NO) 
periodicidad | String | Periodicidad. 
:::
<!-- CIERRA SDT -->