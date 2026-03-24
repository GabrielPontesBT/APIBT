---
title: Obtener Actividades
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
::: note Método para obtener un listado de las actividades ingresadas en Bantotal.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerActividades

**Programa:** RBTPG042

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
sdtActividades | [sBTActividad](#sbtactividad) | Listado de actividades.

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
      <bts:BTConfiguracionBantotal.ObtenerActividades>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerActividades>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerActividades=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
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
      <BTConfiguracionBantotal.ObtenerActividadesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtActividades>
            <sBTActividad>
               <identificador>1111</identificador>
               <descripcion>Arroz</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>1112</identificador>
               <descripcion>01112 Trigo</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>1113</identificador>
               <descripcion>01113 Oleaginosos</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>1114</identificador>
               <descripcion>01114 Cebada</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>1120</identificador>
               <descripcion>01120 Cultivo de hortalizas y legumbres, especialidades hort</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>1131</identificador>
               <descripcion>01131 Fruticultura (excepto viticultura), plantas cuyas hoja</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>1132</identificador>
               <descripcion>01132 Viticultura</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>1133</identificador>
               <descripcion>01133 Otros cultivos</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>1211</identificador>
               <descripcion>01211 Explotación ganadera (excepto lechería)</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>1212</identificador>
               <descripcion>01212 Explotacion lechera</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>1221</identificador>
               <descripcion>01221 Avicultura</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>1222</identificador>
               <descripcion>01222 Cria de otros animales</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>1300</identificador>
               <descripcion>01300 Cultivo de productos agrícolas en combinación con la c</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>1401</identificador>
               <descripcion>01401 Servicios agrícolas</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>1402</identificador>
               <descripcion>01402 Servicios ganaderos (excepto actividades veterinarias)</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>1500</identificador>
               <descripcion>01500 Caza ordinaria y mediante trampas, y repoblación de an</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>2000</identificador>
               <descripcion>02000 Silvicultura, extracción de madera y actividades de se</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>5000</identificador>
               <descripcion>05000 Pesca, explotación de criaderos de peces y granjas pis</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>10100</identificador>
               <descripcion>10100 Extracción y aglomeración de carbón de piedra</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>10200</identificador>
               <descripcion>10200 Extracción y aglomeración de lignito</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>10300</identificador>
               <descripcion>10300 Extracción y aglomeración de turba</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>11100</identificador>
               <descripcion>11100 Extracción de petróleo crudo y gas natural</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>11200</identificador>
               <descripcion>11200 Actividades de servicios relacionadas con la extracció</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>12000</identificador>
               <descripcion>12000 Extracción de minerales de uranio y torio</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>13100</identificador>
               <descripcion>13100 Extracción de minerales de hierro</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>13200</identificador>
               <descripcion>13200 Extracción de minerales metalíferos no ferrosos, excep</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>14100</identificador>
               <descripcion>14100 Extracción de piedra, arena y arcilla</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>14210</identificador>
               <descripcion>14210 Extracción de minerales para la fabricación de abonos</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>14220</identificador>
               <descripcion>14220 Extracción de sal</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>14290</identificador>
               <descripcion>14290 Explotación de otras minas y canteras n.c.p.</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>15110</identificador>
               <descripcion>15110 Producción, procesamiento y conservación de carney pro</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>15120</identificador>
               <descripcion>15120 Elaboración y conservación de pescado y productos de p</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad>
            <sBTActividad>
               <identificador>15130</identificador>
               <descripcion>15130 Elaboración y conservación de frutas, legumbres y hort</descripcion>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </sBTActividad> 
         </sdtActividades>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>788</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerActividades</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>16:47:42</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerActividadesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtActividades": {
      "sBTActividad": [            
         {
               "descripcion": "85190 Otras actividades relacionadas con la salud humana",
               "identificador": "85190",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "85200 Actividades veterinarias",
               "identificador": "85200",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "85310 Servicios sociales con alojamiento",
               "identificador": "85310",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "85320 Servicios sociales sin alojamiento",
               "identificador": "85320",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "90000 Eliminación de desperdicios y aguas residuales, saneam",
               "identificador": "90000",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "91110 Actividades de organizaciones empresariales y de emple",
               "identificador": "91110",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "91120 Actividades de organizaciones profesionales",
               "identificador": "91120",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "91200 Actividades de sindicatos",
               "identificador": "91200",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "91910 Actividades de organizaciones religiosas",
               "identificador": "91910",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "91920 Actividades de organizaciones políticas",
               "identificador": "91920",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "91990 Actividades de otras asociaciones n.c.p.",
               "identificador": "91990",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92110 Producción y distribución de filmes y videocintas",
               "identificador": "92110",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92120 Exhibición de filmes y videocintas",
               "identificador": "92120",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92130 Actividades de radio y televisión",
               "identificador": "92130",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92140 Actividades teatrales y musicales y otras actividades",
               "identificador": "92140",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92190 Otras actividades de entretenimiento n.c.p.",
               "identificador": "92190",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92200 Actividades de agencias de noticias",
               "identificador": "92200",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92310 Actividades de bibliotecas y archivos",
               "identificador": "92310",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92320 Actividades de museos y preservación de lugares y edif",
               "identificador": "92320",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92330 Actividades de jardines botánicos y zoológicos y de pa",
               "identificador": "92330",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92410 Actividades deportivas",
               "identificador": "92410",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92490 Otras actividades de esparcimiento",
               "identificador": "92490",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "93010 Lavado y limpieza de prendas de tela y de piel, inclus",
               "identificador": "93010",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "93020 Peluquería y otros tratamientos de belleza",
               "identificador": "93020",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "93030 Pompas fúnebres y actividades conexas",
               "identificador": "93030",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "93090 Otras actividades de servicios n.c.p.",
               "identificador": "93090",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "95000 Hogares privados con servicio doméstico",
               "identificador": "95000",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "97000 Familias",
               "identificador": "97000",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "97010 Créditos para adquisición de inmuebles",
               "identificador": "97010",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "97020 Créditos para adquisición de vehículos automotores",
               "identificador": "97020",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "97030 Otros (créditos al consumo)",
               "identificador": "97030",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "99000 Organizaciones y órganos extraterritoriales",
               "identificador": "99000",
               "identificadorEntidadReguladora": "0"
         }
      ]
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "790",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerActividades",
      "Fecha": "2017-12-17",
      "Requerimiento": "",
      "Hora": "16:48:12",
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
:--------- | :----------- | :----------- 
descripcion | String | Descripción de actividad.
identificador | Int | Identificador de actividad.
identificadorEntidadReguladora | Long | Identificador de entidad reguladora.
:::
<!-- CIERRA SDT -->