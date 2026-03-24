---
title: Obtener Bancos
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
::: note Método para obtener un listado de los bancos ingresados en Bantotal.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerBancos

**Programa:** RBTPG047

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
sdtBancos | [sBTBanco](#sbtbanco) | Listado de bancos.

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
      <bts:BTConfiguracionBantotal.ObtenerBancos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerBancos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerBancos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9f7d54b1-491a-45ee-e9be-4fe50fb861dc' \
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
      <BTConfiguracionBantotal.ObtenerBancosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtBancos>
            <sBTBanco>
               <identificador>1</identificador>
               <descripcion>BCO. REPUBLICA O. DEL URUGUAY</descripcion>
            </sBTBanco>
            <sBTBanco>
               <identificador>5</identificador>
               <descripcion>CITIBANK N.A</descripcion>
            </sBTBanco>
            <sBTBanco>
               <identificador>10</identificador>
               <descripcion>BANDES</descripcion>
            </sBTBanco>
            <sBTBanco>
               <identificador>11</identificador>
               <descripcion>BANCO SUDAMERIS</descripcion>
            </sBTBanco>
            <sBTBanco>
               <identificador>12</identificador>
               <descripcion>ABN-AMRO BANK N.V.</descripcion>
            </sBTBanco>
            <sBTBanco>
               <identificador>13</identificador>
               <descripcion>BANCO ITAU</descripcion>
            </sBTBanco>
            <sBTBanco>
               <identificador>16</identificador>
               <descripcion>LLOYDS BANK LIMITED</descripcion>
            </sBTBanco>
            <sBTBanco>
               <identificador>28</identificador>
               <descripcion>SCOTIABANK</descripcion>
            </sBTBanco>
            <sBTBanco>
               <identificador>34</identificador>
               <descripcion>DISCOUNT BANK (LATIN AMERICA)</descripcion>
            </sBTBanco>
            <sBTBanco>
               <identificador>37</identificador>
               <descripcion>BANCO SANTANDER S.A.</descripcion>
            </sBTBanco>
            <sBTBanco>
               <identificador>46</identificador>
               <descripcion>BANCO DE LA NACION ARGENTINA</descripcion>
            </sBTBanco>
            <sBTBanco>
               <identificador>53</identificador>
               <descripcion>BANCO BILBAO VIZCAYA ARGENTARI</descripcion>
            </sBTBanco>
            <sBTBanco>
               <identificador>57</identificador>
               <descripcion>HSBC</descripcion>
            </sBTBanco>
            <sBTBanco>
               <identificador>62</identificador>
               <descripcion>HERITAGE</descripcion>
            </sBTBanco>
            <sBTBanco>
               <identificador>82</identificador>
               <descripcion>CREDIT URUGUAY BANCO S.A.</descripcion>
            </sBTBanco>
            <sBTBanco>
               <identificador>91</identificador>
               <descripcion>BANCO HIPOTECARIO</descripcion>
            </sBTBanco>
         </sdtBancos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>791</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerBancos</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>17:46:23</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerBancosResponse>
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
   "sdtBancos": {
      "sBTBanco": [
         {
               "descripcion": "BCO. REPUBLICA O. DEL URUGUAY",
               "identificador": "1"
         },
         {
               "descripcion": "CITIBANK N.A",
               "identificador": "5"
         },
         {
               "descripcion": "BANDES",
               "identificador": "10"
         },
         {
               "descripcion": "BANCO SUDAMERIS",
               "identificador": "11"
         },
         {
               "descripcion": "ABN-AMRO BANK N.V.",
               "identificador": "12"
         },
         {
               "descripcion": "BANCO ITAU",
               "identificador": "13"
         },
         {
               "descripcion": "LLOYDS BANK LIMITED",
               "identificador": "16"
         },
         {
               "descripcion": "SCOTIABANK",
               "identificador": "28"
         },
         {
               "descripcion": "DISCOUNT BANK (LATIN AMERICA)",
               "identificador": "34"
         },
         {
               "descripcion": "BANCO SANTANDER S.A.",
               "identificador": "37"
         },
         {
               "descripcion": "BANCO DE LA NACION ARGENTINA",
               "identificador": "46"
         },
         {
               "descripcion": "BANCO BILBAO VIZCAYA ARGENTARI",
               "identificador": "53"
         },
         {
               "descripcion": "HSBC",
               "identificador": "57"
         },
         {
               "descripcion": "HERITAGE",
               "identificador": "62"
         },
         {
               "descripcion": "CREDIT URUGUAY BANCO S.A.",
               "identificador": "82"
         },
         {
               "descripcion": "BANCO HIPOTECARIO",
               "identificador": "91"
         }
      ]
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "792",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerBancos",
      "Fecha": "2017-12-17",
      "Requerimiento": "",
      "Hora": "17:46:49",
      "Canal": "BTDIGITAL"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTBanco  

### sBTBanco

::: center 
Los campos del tipo de dato estructurado sBTBanco son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción de banco.
identificador | Short | Identificador de banco.
:::
<!-- CIERRA SDT -->