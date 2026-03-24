---
title: Actualizar FATCA
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
::: note Método para modificar la información FATCA de una persona.

**Nombre publicación:** BTPersonas.ActualizarFATCA

**Programa:** RBTPCO11

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
sdtInformacionFATCA | [sBTPCOInformacionFATCA](#sbtpcoinformacionfatca) | Datos FATCA de la persona.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
resultado | String | Resultado FATCA.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de persona.
30002 | Error - Datos duplicados.
40001 | Debe ingresar al menos una Residencia Fiscal.
40002 | El país [Número de identificador] ingresado no es válido.
40004 | No se puede ingresar residencias fiscales.
40005 | No existe el registro.
40006 | No existe el país indicado.
40007 | No existe el tipo de documento indicado.
40007 | No debe ingresar correlativo para residencia.
40007 | Se ingresó la misma residencia dos veces.
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
      <bts:BTPersonas.ActualizarFATCA>
         <bts:Btinreq>
            <bts:Token>042638a184CD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>42</bts:personaUId>
         <bts:sdtInformacionFATCA>
            <bts:ingresoBrutoEEUU>N</bts:ingresoBrutoEEUU>
            <bts:residenciasFiscales>
               <bts:sBTPCOResidenciaFiscal>
                  <bts:paisId></bts:paisId>
                  <bts:pais></bts:pais>
                  <bts:codigoTIN></bts:codigoTIN>
                  <bts:correlativo></bts:correlativo>
               </bts:sBTPCOResidenciaFiscal>
            </bts:residenciasFiscales>
            <bts:permanencia183Dias>N</bts:permanencia183Dias>
            <bts:tieneGreenCard>N</bts:tieneGreenCard>
            <bts:residenciaMasPaises>N</bts:residenciaMasPaises>
            <bts:codigoTIN>ABCDEF</bts:codigoTIN>
            <bts:pagoFuenteEEUU>N</bts:pagoFuenteEEUU>
         </bts:sdtInformacionFATCA>
      </bts:BTPersonas.ActualizarFATCA>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarFATCA \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId": "42",
	"sdtInformacionFATCA": {
	  "ingresoBrutoEEUU": "N",
	  "permanencia183Dias": "N",
	  "tieneGreenCard": "N",
	  "residenciaMasPaises": "N",
	  "codigoTIN": "ABCDEF",
	  "pagoFuenteEEUU": "N",
	  "residenciasFiscales": {
		"sBTPCOResidenciaFiscal": {
		}
	  },
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
      <BTPersonas.ActualizarFATCAResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>042638a184CD285A89A23FBE</Token>
         </Btinreq>
         <resultado>NON US Person</resultado>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2064</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ActualizarFATCA</Servicio>
            <Fecha>2020-03-10</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>07:31:11</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ActualizarFATCAResponse>
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
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "resultado": "NON US Person",
   "Btoutreq": {
      "Numero": "2064",
      "Estado": "OK",
      "Servicio": "BTPersonas.ActualizarFATCA",
      "Requerimiento": "1",
      "Fecha": "2020-03-10",
      "Canal": "BTDIGITAL",
      "Hora": "07:31:11"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPCOInformacionFATCA  

### sBTPCOInformacionFATCA

::: center 
Los campos del tipo de dato estructurado sBTPCOInformacionFATCA son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigoTIN | String | Código TIN. 
ingresoBrutoEEUU | String | Recibe cualquier ingreso bruto procedente de una fuente en los EEUU (S/N). 
pagoFuenteEEUU | String | Recibe cualquier pago proveniente de fuentes dentro de los EEUU (S/N). 
permanencia183Dias | String | Permanencia de más de 183 días en el último año (S/N). 
residenciaMasPaises | String | Residencia en más países. 
residenciasFiscales | [sBTPCOResidenciasFiscales](#sbtpcoresidenciasfiscales) | Listado de residencias. 
tieneGreenCard | String | Poseedor de la tarjeta verde o "Green Card" de los EEUU (S/N). 

### sBTPCOResidenciasFiscales

::: center 
Los campos del tipo de dato estructurado sBTPCOInformacionFATCA son los siguientes:

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigoTIN | String | Código TIN. 
correlativo | Short | Número de correlativo. 
pais | String | Nombre del país. 
paisId | Short | Identificador de país. 
:::
<!-- CIERRA SDT -->