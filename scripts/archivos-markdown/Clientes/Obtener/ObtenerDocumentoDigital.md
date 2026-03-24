---
title: Obtener Documento Digital
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
::: note Método para obtener los datos de un documento digital determinado de una cuenta cliente.

**Nombre publicación:** BTClientes.ObtenerDocumentoDigital

**Programa:** RBTPG192

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
documentoId | Long | Identificador de documento digital.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtDocumentosDigitales | [sBTVersionDocumentoDigital](#sbtversiondocumentodigital) | Versión de documento digital.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la cuenta.
30002 | No se recibió el identificador de documento.
30024 | No existe registro con el identificador indicado.
30031 | El documento digital no existe.
30032 | Ocurrió un error al obtener la última versión del documento.
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
      <bts:BTClientes.ObtenerDocumentoDigital>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0868626a064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>10.12.10.159</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
         <bts:documentoId>56</bts:documentoId>
      </bts:BTClientes.ObtenerDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerDocumentoDigital=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: a12f013d-9875-6451-dd62-ad7bb0217b5c' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"clienteUId": "61",
	"documentoId": "56",
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
      <BTClientes.ObtenerDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0868626a064A8B5C60A82434</Token>
         </Btinreq>
         <sdtDocumentosDigitales>
            <sBTVersionDocumentoDigital>
               <FechaEmision>2017-03-24</FechaEmision>
               <Archivo>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</Archivo>
               <FechaVencimiento>2018-03-24</FechaVencimiento>
               <TipoDocumentoDigital>Balance</TipoDocumentoDigital>
               <Version>1</Version>
               <Nombre>Balance General.PDF</Nombre>
               <documentoId>56</documentoId>
            </sBTVersionDocumentoDigital>
         </sdtDocumentosDigitales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>840</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerDocumentoDigital</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-13</Fecha>
            <Hora>12:32:19</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerDocumentoDigitalResponse>
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
    "sdtDocumentosDigitales": {
        "sBTVersionDocumentoDigital": [
            {
                "FechaEmision": "2017-03-24",
                "Archivo": "RG9jdW1lbnRvIGRlIGVqZW1wbG8=",
                "FechaVencimiento": "2018-03-24",
                "TipoDocumentoDigital": "Balance",
                "Version": 1,
                "Nombre": "Balance General.PDF",
                "documentoId": 56
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 842,
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerDocumentoDigital",
        "Requerimiento": "1",
        "Fecha": "2018-11-13",
        "Hora": "12:38:20",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTVersionDocumentoDigital  

### sBTVersionDocumentoDigital

::: center 
Los campos del tipo de dato estructurado sBTVersionDocumentoDigital son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
archivo | String | Documento digital codificado en Base 64. 
documentoId | Long | Titulo del documento digital. 
fechaEmision | Date | Fecha de emisión del documento digital. 
fechaVencimiento | Date | Fecha de vencimiento del documento digital. 
nombre | String | Nombre del documento digital. 
tipoDocumentoDigital | String | Tipo del documento digital. 
version | Int | Número de versión del documento digital. 
:::
<!-- CIERRA SDT -->