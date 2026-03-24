---
title: Obtener Monedas
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
::: note Método para obtener un listado de las monedas ingresadas en Bantotal.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerMonedas

**Programa:** RBTPG048

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
sdtMonedas | [sBTMoneda](#sbtmoneda) | Listado de monedas.

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
      <bts:BTConfiguracionBantotal.ObtenerMonedas>
         <bts:Btinreq>             
            <bts:Device>ES</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>dac8c7fdec4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerMonedas>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerMonedas=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: e023a871-d995-ad63-255b-99f4d8773111' \
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
      <BTConfiguracionBantotal.ObtenerMonedasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtMonedas> 
            <sBTMoneda> 
               <identificador>0</identificador> 
               <descripcion>PESOS</descripcion> 
               <simbolo>$</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>105</identificador> 
               <descripcion>DOLAR AUSTRALIANO</descripcion> 
               <simbolo>AUD</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>500</identificador> 
               <descripcion>PESOS ARGENTINOS</descripcion> 
               <simbolo>ARS</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>501</identificador> 
               <descripcion>PESO ARG. BILL</descripcion> 
               <simbolo>AR$</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>1000</identificador> 
               <descripcion>REAL</descripcion> 
               <simbolo>BRL</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>1001</identificador> 
               <descripcion>REAL BILLETE</descripcion> 
               <simbolo>BR$</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>1111</identificador> 
               <descripcion>EURO</descripcion> 
               <simbolo>EUR</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>1115</identificador> 
               <descripcion>EURO BILLETE</descripcion> 
               <simbolo>EU$</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>1300</identificador> 
               <descripcion>PESOS CHILENOS</descripcion> 
               <simbolo>CL$</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>1490</identificador> 
               <descripcion>DÓLAR NEOZELANDÉS</descripcion> 
               <simbolo>NZD</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>1620</identificador> 
               <descripcion>RAND SUDAFRICANO</descripcion> 
               <simbolo>ZAR</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>1800</identificador> 
               <descripcion>CORONAS DANESAS</descripcion> 
               <simbolo>DKK</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>2222</identificador> 
               <descripcion>DÓLAR ESTADOUNIDENSE</descripcion> 
               <simbolo>USD</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>2225</identificador> 
               <descripcion>DÓLAR ESTADOUNIDENSE - BILLETE</descripcion> 
               <simbolo>U$D</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>2230</identificador> 
               <descripcion>DÓLAR FONDO</descripcion> 
               <simbolo>USF</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>2309</identificador> 
               <descripcion>DÓLAR CANADIENSE</descripcion> 
               <simbolo>CAD</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>2700</identificador> 
               <descripcion>LIBRAS ESTERLINAS</descripcion> 
               <simbolo>GBP</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>2701</identificador> 
               <descripcion>LIBRAS EST. BILL</descripcion> 
               <simbolo>GB$</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>3600</identificador> 
               <descripcion>YENS</descripcion> 
               <simbolo>JPY</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>4600</identificador> 
               <descripcion>CORONA NORUEGA</descripcion> 
               <simbolo>NOK</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>4800</identificador> 
               <descripcion>GUARANÍ TR.</descripcion> 
               <simbolo>PYG</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>4801</identificador> 
               <descripcion>GUARANÍ</descripcion> 
               <simbolo>PY$</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>5800</identificador> 
               <descripcion>CORONAS SUECAS</descripcion> 
               <simbolo>SEK</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>5900</identificador> 
               <descripcion>FRANCOS SUIZOS</descripcion> 
               <simbolo>CHF</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>5901</identificador> 
               <descripcion>FR. SUIZO BILL.</descripcion> 
               <simbolo>CH$</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>6200</identificador> 
               <descripcion>BOLIVAR</descripcion> 
               <simbolo>VEF</simbolo> 
            </sBTMoneda> 
            <sBTMoneda> 
               <identificador>9000</identificador> 
               <descripcion>ONZA TROY ORO</descripcion> 
               <simbolo>ORO</simbolo> 
            </sBTMoneda> 
         </sdtMonedas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>804</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerMonedas</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>18:06:38</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerMonedasResponse>
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
   "sdtMonedas": { 
      "sBTMoneda": [ 
         { 
         "descripcion": "PESOS", 
         "identificador": "0", 
         "simbolo": "$" 
         }, 
         { 
         "descripcion": "DOLAR AUSTRALIANO", 
         "identificador": "105", 
         "simbolo": "AUD" 
         }, 
         { 
         "descripcion": "PESOS ARGENTINOS", 
         "identificador": "500", 
         "simbolo": "ARS" 
         }, 
         { 
         "descripcion": "PESO ARG. BILL", 
         "identificador": "501", 
         "simbolo": "AR$" 
         }, 
         { 
         "descripcion": "REAL", 
         "identificador": "1000", 
         "simbolo": "BRL" 
         }, 
         { 
         "descripcion": "REAL BILLETE", 
         "identificador": "1001", 
         "simbolo": "BR$" 
         }, 
         { 
         "descripcion": "EURO", 
         "identificador": "1111", 
         "simbolo": "EUR" 
         }, 
         { 
         "descripcion": "EURO BILLETE", 
         "identificador": "1115", 
         "simbolo": "EU$" 
         }, 
         { 
         "descripcion": "PESOS CHILENOS", 
         "identificador": "1300", 
         "simbolo": "CL$" 
         }, 
         { 
         "descripcion": "DÓLAR NEOZELANDÉS", 
         "identificador": "1490", 
         "simbolo": "NZD" 
         }, 
         { 
         "descripcion": "RAND SUDAFRICANO", 
         "identificador": "1620", 
         "simbolo": "ZAR" 
         }, 
         { 
         "descripcion": "CORONAS DANESAS", 
         "identificador": "1800", 
         "simbolo": "DKK" 
         }, 
         { 
         "descripcion": "DÓLAR ESTADOUNIDENSE", 
         "identificador": "2222", 
         "simbolo": "USD" 
         }, 
         { 
         "descripcion": "DÓLAR ESTADOUNIDENSE - BILLETE", 
         "identificador": "2225", 
         "simbolo": "U$D" 
         }, 
         { 
         "descripcion": "DÓLAR FONDO", 
         "identificador": "2230", 
         "simbolo": "USF" 
         }, 
         { 
         "descripcion": "DÓLAR CANADIENSE", 
         "identificador": "2309", 
         "simbolo": "CAD" 
         }, 
         { 
         "descripcion": "LIBRAS ESTERLINAS", 
         "identificador": "2700", 
         "simbolo": "GBP" 
         }, 
         { 
         "descripcion": "LIBRAS EST. BILL", 
         "identificador": "2701", 
         "simbolo": "GB$" 
         }, 
         { 
         "descripcion": "YENS", 
         "identificador": "3600", 
         "simbolo": "JPY" 
         }, 
         { 
         "descripcion": "CORONA NORUEGA", 
         "identificador": "4600", 
         "simbolo": "NOK" 
         }, 
         { 
         "descripcion": "GUARANÍ TR.", 
         "identificador": "4800", 
         "simbolo": "PYG" 
         }, 
         { 
         "descripcion": "GUARANÍ", 
         "identificador": "4801", 
         "simbolo": "PY$" 
         }, 
         { 
         "descripcion": "CORONAS SUECAS", 
         "identificador": "5800", 
         "simbolo": "SEK" 
         }, 
         { 
         "descripcion": "FRANCOS SUIZOS", 
         "identificador": "5900", 
         "simbolo": "CHF" 
         }, 
         { 
         "descripcion": "FR. SUIZO BILL.", 
         "identificador": "5901", 
         "simbolo": "CH$" 
         }, 
         { 
         "descripcion": "BOLIVAR", 
         "identificador": "6200", 
         "simbolo": "VEF" 
         }, 
         { 
         "descripcion": "ONZA TROY ORO", 
         "identificador": "9000", 
         "simbolo": "ORO" 
         } 
      ] 
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "805",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerMonedas",
      "Fecha": "2017-12-17",
      "Requerimiento": "",
      "Hora": "18:07:00",
      "Canal": "BTDIGITAL"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTMoneda  

### sBTMoneda

::: center 
Los campos del tipo de dato estructurado sBTMoneda son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
descripcion | String | Descripción de moneda.
identificador | Short | Identificador de moneda.
simbolo | String | Símbolo de moneda.
:::
<!-- CIERRA SDT -->