---
title: Obtener Dólar USA
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
::: note Método para obtener los datos del dólar estadounidense.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerDolarUSA

**Programa:** RBTPG154

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
tipoMoneda | String | [Hidden: Valor fijo "USD" para este método].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtMoneda | [sBTMoneda](#sbtmoneda) | Datos de la moneda.

@tab Errores

Código | Descripción
:--------- | :-----------
40001 | No existen Monedas ingresadas en el sistema.
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
      <bts:BTConfiguracionBantotal.ObtenerDolarUSA>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>669747179CD285A89A23FBEE</bts:Token>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerDolarUSA>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerDolarUSA=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: e023a871-d995-ad63-255b-99f4d8773111' \
  -d '{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "669747179CD285A89A23FBEE"
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
      <BTConfiguracionBantotal.ObtenerDolarUSAResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>669747179CD285A89A23FBEE</Token>
            <Device>1</Device>
         </Btinreq>
         <sdtMoneda>
            <identificador>2222</identificador>
            <descripcion>DÓLAR ESTADOUNIDENSE</descripcion>
            <simbolo>USD</simbolo>
         </sdtMoneda>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTConfiguracionBantotal.ObtenerDolarUSA</Servicio>
            <Fecha>2020-10-23</Fecha>
            <Hora>16:23:31</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7535</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerDolarUSAResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "669747179CD285A89A23FBEE"
    },
    "sdtMoneda": {
        "identificador": "2222",
        "descripcion": "DÓLAR ESTADOUNIDENSE",
        "simbolo": "USD"
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTConfiguracionBantotal.ObtenerDolarUSA",
        "Fecha": "2020-10-23",
        "Hora": "16:23:31",
        "Requerimiento": "1",
        "Numero": "7535",
        "Estado": "OK"
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