---
title: Obtener Valores de Pizarra Por Módulo
icon: /assets/image/nuevo.svg
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
::: note Método para obtener los valores de una pizarra por módulo.

**Nombre publicación:** BTPrecios.ObtenerValoresPizarraPorModulo

**Programa:** RBTPG654

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
modulo | Short | Módulo.
tipoPizarra | Byte | Tipo de pizarra.
papelId | Short | Identificador de papel.
monedaId | Short | Identificador de moneda.
fecha | Date | Fecha a ser consultada.
importe | Double | Importe.
plazo | Int | Plazo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtValorPizarra | [sBTValorPizarra](#sbtvalorpizarra) | Datos de la pizarra.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | Debe ingresar módulo.
30002 | Debe ingresar la pizzara a ser consultada.
30003 | Debe ingresar fecha.
30004 | Debe ingresar importe.
40001 | No se encontro el módulo ingresado.
40002 | No se encontro pizarra con el Id ingresado.
40003 | No se encontraron registros de tasas para la clave ingresada.
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
      <bts:BTPrecios.ObtenerValoresPizarraPorModulo>
         <bts:Btinreq>
            <bts:Device>AS</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>10355d3c5fCD285A89A23FBE</bts:Token>
            <bts:Requerimiento></bts:Requerimiento>
         </bts:Btinreq>
         <bts:modulo>71</bts:modulo>
         <bts:tipoPizarra>25</bts:tipoPizarra>
         <bts:papelId>0</bts:papelId>
         <bts:monedaId>80</bts:monedaId>
         <bts:fecha>2025-11-13</bts:fecha>
         <bts:importe>50000000</bts:importe>
         <bts:plazo></bts:plazo>
      </bts:BTPrecios.ObtenerValoresPizarraPorModulo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerValoresPizarraModulo' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 78klf1dc-e332-95b4-1dl8-23ba149h2471' \
  -d '{
	"Btinreq": {
		"Device": "AS",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "modulo":"22",
   "tipoPizarra":"32",
   "papelId":"0",
   "monedaId":"0",
   "fecha":"2025-11-13",
   "importe":"49999.99",
   "plazo":""
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
      <BTPrecios.ObtenerValoresPizarraModuloResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AS</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento></Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>10355d3c5fCD285A89A23FBE</Token>
         </Btinreq>
         <sdtValorPizarra>
            <sBTValorPizarra>
               <tasa>20.000000</tasa>
               <plazo>30</plazo>
               <tipoTasa>Efectiva Anual</tipoTasa>
               <tolerancia>0.0000</tolerancia>
               <fechaVigencia>2025-11-13</fechaVigencia>
            </sBTValorPizarra>
            <sBTValorPizarra>
               <tasa>25.000000</tasa>
               <plazo>60</plazo>
               <tipoTasa>Efectiva Anual</tipoTasa>
               <tolerancia>0.0000</tolerancia>
               <fechaVigencia>2025-11-13</fechaVigencia>
            </sBTValorPizarra>
            <sBTValorPizarra>
               <tasa>30.000000</tasa>
               <plazo>90</plazo>
               <tipoTasa>Efectiva Anual</tipoTasa>
               <tolerancia>0.0000</tolerancia>
               <fechaVigencia>2025-11-13</fechaVigencia>
            </sBTValorPizarra>
         </sdtValorPizarra>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>15763</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrecios.ObtenerValoresPizarraModulo</Servicio>
            <Requerimiento/>
            <Fecha>2025-11-13</Fecha>
            <Hora>15:26:57</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrecios.ObtenerValoresPizarraPorModuloResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "AS",
		"Usuario": "INSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtValorPizarra": {
      "sBTValorPizarra": [
         {
            "tasa": "17.250000",
            "plazo": "59",
            "tipoTasa": "Nominal Anual",
            "tolerancia": "2.0000",
            "fechaVigencia": "2013-12-23"
         },
         {
            "tasa": "17.500000",
            "plazo": "89",
            "tipoTasa": "Nominal Anual",
            "tolerancia": "2.0000",
            "fechaVigencia": "2013-12-23"
         },
         {
            "tasa": "17.750000",
            "plazo": "119",
            "tipoTasa": "Nominal Anual",
            "tolerancia": "2.0000",
            "fechaVigencia": "2013-12-23"
         },
         {
            "tasa": "18.000000",
            "plazo": "179",
            "tipoTasa": "Nominal Anual",
            "tolerancia": "2.0000",
            "fechaVigencia": "2013-12-23"
         },
         {
            "tasa": "18.250000",
            "plazo": "364",
            "tipoTasa": "Nominal Anual",
            "tolerancia": "2.0000",
            "fechaVigencia": "2013-12-23"
         },
         {
            "tasa": "18.500000",
            "plazo": "99999",
            "tipoTasa": "Nominal Anual",
            "tolerancia": "2.0000",
            "fechaVigencia": "2013-12-23"
         }
      ]
   },
    "Btoutreq": {
         "Numero": "15764",
         "Estado": "OK",
         "Servicio": "BTPrecios.ObtenerValoresPizarraPorModulo",
         "Requerimiento": "1",
         "Fecha": "2025-11-13",
         "Hora": "15:28:51",
         "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTValorPizarra  

### sBTValorPizarra

::: center 
Los campos del tipo de dato estructurado sBTValorPizarra son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :---------
plazo | Int | Plazo. 
tasa | Double | Tasa. 
tipoTasa | String | Tipo de tasa. 
tolerancia | Double | Tolerancia. 
fechaVigencia | Date | Fecha de Vencimiento 
:::
<!-- CIERRA SDT -->