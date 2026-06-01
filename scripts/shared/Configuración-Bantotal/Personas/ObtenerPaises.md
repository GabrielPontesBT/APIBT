---
title: Obtener Países
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
::: note Método para obtener un listado de los países ingresados en Bantotal.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerPaises

**Programa:** RBTPG040

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPaises | [sBTPais](#sbtpais) | Listado de países.

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
      <bts:BTConfiguracionBantotal.ObtenerPaises>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerPaises>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerPaises=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ea0169b3-2bf4-1ea8-3a7c-5933fa1fd697' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
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
      <BTConfiguracionBantotal.ObtenerPaisesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtPaises> 
            <sBTPais> 
               <identificador>13</identificador> 
               <descripcion>AFGHANISTAN</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>17</identificador> 
               <descripcion>ALBANIA</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>23</identificador> 
               <descripcion>GERMANY</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais>             
            <sBTPais> 
               <identificador>53</identificador> 
               <descripcion>SAUDI ARABIA</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>59</identificador> 
               <descripcion>ALGERIA</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>63</identificador> 
               <descripcion>ARGENTINA</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>69</identificador> 
               <descripcion>AUSTRALIA</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>86</identificador> 
               <descripcion>LUXEMBURG</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>87</identificador> 
               <descripcion>BELGIUM</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>215</identificador> 
               <descripcion>CHINA</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>218</identificador> 
               <descripcion>TAIWAN</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>232</identificador> 
               <descripcion>DENMARK</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>235</identificador> 
               <descripcion>DOMINICA</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>239</identificador> 
               <descripcion>ECUADOR</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>240</identificador> 
               <descripcion>EGYPT</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>242</identificador> 
               <descripcion>EL SALVADOR</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>244</identificador> 
               <descripcion>UNITED ARAB EMIRATES</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>245</identificador> 
               <descripcion>ESPAÑA</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>246</identificador> 
               <descripcion>ESLOVAQUIA</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>247</identificador> 
               <descripcion>SLOVENIA</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>670</identificador> 
               <descripcion>RUMANIA</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>676</identificador> 
               <descripcion>RUSIA</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>700</identificador> 
               <descripcion>ST PIERRE &amp; MIQUELON</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>705</identificador> 
               <descripcion>ST VINCENT</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>710</identificador> 
               <descripcion>ST. HELENA</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais> 
            <sBTPais> 
               <identificador>715</identificador> 
               <descripcion>ST. LUCIA</descripcion> 
               <paisISO/> 
               <paisISO2/> 
               <paisUnicode/> 
            </sBTPais>             
         </sdtPaises>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>806</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerPaises</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>18:08:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerPaisesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtPaises": { 
      "sBTPais": [ 
         { 
         "paisISO2": "", 
         "descripcion": "AFGHANISTAN", 
         "paisISO": "", 
         "identificador": "13", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "ALBANIA", 
         "paisISO": "", 
         "identificador": "17", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "ANGOLA", 
         "paisISO": "", 
         "identificador": "40", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "ARGENTINA", 
         "paisISO": "", 
         "identificador": "63", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "AUSTRALIA", 
         "paisISO": "", 
         "identificador": "69", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "AUSTRIA", 
         "paisISO": "", 
         "identificador": "72", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "TOKELAU ISLANDS", 
         "paisISO": "", 
         "identificador": "85", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "BOLIVIA", 
         "paisISO": "", 
         "identificador": "97", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "BOTSWANA", 
         "paisISO": "", 
         "identificador": "101", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "BRASIL", 
         "paisISO": "", 
         "identificador": "105", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "CAMEROON", 
         "paisISO": "", 
         "identificador": "145", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "CANADA", 
         "paisISO": "", 
         "identificador": "149", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "CROACIA", 
         "paisISO": "", 
         "identificador": "198", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "CUBA", 
         "paisISO": "", 
         "identificador": "199", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "EL SALVADOR", 
         "paisISO": "", 
         "identificador": "242", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "UNITED ARAB EMIRATES", 
         "paisISO": "", 
         "identificador": "244", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "ESPAÑA", 
         "paisISO": "", 
         "identificador": "245", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "ESLOVAQUIA", 
         "paisISO": "", 
         "identificador": "246", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "SLOVENIA", 
         "paisISO": "", 
         "identificador": "247", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "GHANA", 
         "paisISO": "", 
         "identificador": "289", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "GRENADA", 
         "paisISO": "", 
         "identificador": "297", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "GREECE", 
         "paisISO": "", 
         "identificador": "301", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "HAITI", 
         "paisISO": "", 
         "identificador": "341", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "HONDURAS", 
         "paisISO": "", 
         "identificador": "345", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "JAMAICA", 
         "paisISO": "", 
         "identificador": "391", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "JAPAN", 
         "paisISO": "", 
         "identificador": "399", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "NICARAGUA", 
         "paisISO": "", 
         "identificador": "521", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "NEW ZEALAND", 
         "paisISO": "", 
         "identificador": "548", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "NETHERLANDS", 
         "paisISO": "", 
         "identificador": "573", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "PAKISTAN", 
         "paisISO": "", 
         "identificador": "576", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "PANAMA", 
         "paisISO": "", 
         "identificador": "580", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "PARAGUAY", 
         "paisISO": "", 
         "identificador": "586", 
         "paisUnicode": "" 
         }, 
         { 
         "paisISO2": "", 
         "descripcion": "UNITED KINGDOM", 
         "paisISO": "", 
         "identificador": "628", 
         "paisUnicode": "" 
         } 
      ] 
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "807",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerPaises",
      "Fecha": "2017-12-17",
      "Requerimiento": 1,
      "Hora": "18:08:33",
      "Canal": "BTDIGITAL"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPais  

### sBTPais

::: center 
Los campos del tipo de dato estructurado sBTPais son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
descripcion | String | Descripcion de moneda.
identificador | Short | Identificador de país.
paisISO | String | Codigo ISO de país.
paisISO2 | String | Codigo ISO 2 de país.
paisUnicode | String | Codigo unicode de país.
:::
<!-- CIERRA SDT -->