---
title: Obtener Actividades por Tipo
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
::: note Método para obtener un listado de las actividades por tipo ingresadas en Bantotal.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerActividadesPorTipo

**Programa:** RBTPG478

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
tipoActividadId | Long | Identificador de tipo de actividad.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtActividades | [sBTActividad](#sbtactividad) | Listado de actividades.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió código de actividad.
40001 | No existen actividades ingresadas en el sistema.
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
      <bts:BTConfiguracionBantotal.ObtenerActividadesPorTipo>
         <bts:Btinreq>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>1EF0C356A692E3706CFA0201</bts:Token>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:tipoActividadId>1</bts:tipoActividadId>
      </bts:BTConfiguracionBantotal.ObtenerActividadesPorTipo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerActividadesPorTipo' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Usuario": "MINSTALADOR",
        "Token": "1EF0C356A692E3706CFA0201",
        "Device": "1",
        "Canal": "BTDIGITAL",
        "Requerimiento": 1
    },
    "tipoActividadId": 1
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
      <BTConfiguracionBantotal.ObtenerActividadesPorTipoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1EF0C356A692E3706CFA0201</Token>
         </Btinreq>
         <sdtActividades>
            <sBTActividad>
               <descripcion>Arroz</descripcion>
               <identificador>1111</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>01112 Trigo</descripcion>
               <identificador>1112</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>01113 Oleaginosos</descripcion>
               <identificador>1113</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>01114 Cebada</descripcion>
               <identificador>1114</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>01120 Cultivo de hortalizas y legumbres, especialidades hort</descripcion>
               <identificador>1120</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>01131 Fruticultura (excepto viticultura), plantas cuyas hoja</descripcion>
               <identificador>1131</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>01132 Viticultura</descripcion>
               <identificador>1132</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>01133 Otros cultivos</descripcion>
               <identificador>1133</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>01211 Explotación ganadera (excepto lechería)</descripcion>
               <identificador>1211</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>01212 Explotacion lechera</descripcion>
               <identificador>1212</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>01221 Avicultura</descripcion>
               <identificador>1221</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>01222 Cria de otros animales</descripcion>
               <identificador>1222</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>01300 Cultivo de productos agrícolas en combinación con la c</descripcion>
               <identificador>1300</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>01401 Servicios agrícolas</descripcion>
               <identificador>1401</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>01402 Servicios ganaderos (excepto actividades veterinarias)</descripcion>
               <identificador>1402</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>01500 Caza ordinaria y mediante trampas, y repoblación de an</descripcion>
               <identificador>1500</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>02000 Silvicultura, extracción de madera y actividades de se</descripcion>
               <identificador>2000</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>05000 Pesca, explotación de criaderos de peces y granjas pis</descripcion>
               <identificador>5000</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>10100 Extracción y aglomeración de carbón de piedra</descripcion>
               <identificador>10100</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>10200 Extracción y aglomeración de lignito</descripcion>
               <identificador>10200</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>10300 Extracción y aglomeración de turba</descripcion>
               <identificador>10300</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>11100 Extracción de petróleo crudo y gas natural</descripcion>
               <identificador>11100</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>11200 Actividades de servicios relacionadas con la extracció</descripcion>
               <identificador>11200</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>12000 Extracción de minerales de uranio y torio</descripcion>
               <identificador>12000</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>13100 Extracción de minerales de hierro</descripcion>
               <identificador>13100</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>13200 Extracción de minerales metalíferos no ferrosos, excep</descripcion>
               <identificador>13200</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>14100 Extracción de piedra, arena y arcilla</descripcion>
               <identificador>14100</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>14210 Extracción de minerales para la fabricación de abonos</descripcion>
               <identificador>14210</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>14220 Extracción de sal</descripcion>
               <identificador>14220</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>14290 Explotación de otras minas y canteras n.c.p.</descripcion>
               <identificador>14290</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>15110 Producción, procesamiento y conservación de carney pro</descripcion>
               <identificador>15110</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>15120 Elaboración y conservación de pescado y productos de p</descripcion>
               <identificador>15120</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <descripcion>15130 Elaboración y conservación de frutas, legumbres y hort</descripcion>
               <identificador>15130</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
         </sdtActividades>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>10243</Numero>
            <Servicio>BTConfiguracionBantotal.ObtenerActividadesPorTipo</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-04</Fecha>
            <Hora>16:18:23</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerActividadesPorTipoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
        "Device": "1",
        "Usuario": "MINSTALADOR",
        "Requerimiento": 1,
        "Canal": "BTDIGITAL",
        "Token": "1EF0C356A692E3706CFA0201"
    },
    "sdtActividades": {
        "sBTActividad": [
            {
                "descripcion": "Arroz",
                "identificador": 1111,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "01112 Trigo",
                "identificador": 1112,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "01113 Oleaginosos",
                "identificador": 1113,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "01114 Cebada",
                "identificador": 1114,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "01120 Cultivo de hortalizas y legumbres, especialidades hort",
                "identificador": 1120,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "01131 Fruticultura (excepto viticultura), plantas cuyas hoja",
                "identificador": 1131,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "01132 Viticultura",
                "identificador": 1132,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "01133 Otros cultivos",
                "identificador": 1133,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "01211 Explotación ganadera (excepto lechería)",
                "identificador": 1211,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "01212 Explotacion lechera",
                "identificador": 1212,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "01221 Avicultura",
                "identificador": 1221,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "01222 Cria de otros animales",
                "identificador": 1222,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "01300 Cultivo de productos agrícolas en combinación con la c",
                "identificador": 1300,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "01401 Servicios agrícolas",
                "identificador": 1401,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "01402 Servicios ganaderos (excepto actividades veterinarias)",
                "identificador": 1402,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "01500 Caza ordinaria y mediante trampas, y repoblación de an",
                "identificador": 1500,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "02000 Silvicultura, extracción de madera y actividades de se",
                "identificador": 2000,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "05000 Pesca, explotación de criaderos de peces y granjas pis",
                "identificador": 5000,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "10100 Extracción y aglomeración de carbón de piedra",
                "identificador": 10100,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "10200 Extracción y aglomeración de lignito",
                "identificador": 10200,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "10300 Extracción y aglomeración de turba",
                "identificador": 10300,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "11100 Extracción de petróleo crudo y gas natural",
                "identificador": 11100,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "11200 Actividades de servicios relacionadas con la extracció",
                "identificador": 11200,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "12000 Extracción de minerales de uranio y torio",
                "identificador": 12000,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "13100 Extracción de minerales de hierro",
                "identificador": 13100,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "13200 Extracción de minerales metalíferos no ferrosos, excep",
                "identificador": 13200,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "14100 Extracción de piedra, arena y arcilla",
                "identificador": 14100,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "14210 Extracción de minerales para la fabricación de abonos",
                "identificador": 14210,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "14220 Extracción de sal",
                "identificador": 14220,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "14290 Explotación de otras minas y canteras n.c.p.",
                "identificador": 14290,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "15110 Producción, procesamiento y conservación de carney pro",
                "identificador": 15110,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "15120 Elaboración y conservación de pescado y productos de p",
                "identificador": 15120,
                "identificadorEntidadReguladora": 0
            },
            {
                "descripcion": "15130 Elaboración y conservación de frutas, legumbres y hort",
                "identificador": 15130,
                "identificadorEntidadReguladora": 0
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 10243,
        "Servicio": "BTConfiguracionBantotal.ObtenerActividadesPorTipo",
        "Estado": "OK",
        "Requerimiento": 1,
        "Fecha": "2023-05-04",
        "Hora": "16:18:23",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTActividad  

### sBTActividad

::: center 
Los campos del tipo de dato estructurado sBTActividad son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción de actividad.
identificador | Int | Identificador de actividad.
identificadorEntidadReguladora | Long | Identificador de entidad reguladora.
:::
<!-- CIERRA SDT -->