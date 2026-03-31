---
title: Obtener Domicilios
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
::: note Método para obtener un listado de los domicilios asociados a un cliente.

**Nombre publicación:** BTClientes.ObtenerDomicilios

**Programa:** RBTPG184

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
domicilios | [sBTDomicilio1](#sbtdomicilio1) | Listado de domicilios.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de la cuenta.
30002 | El identificador de la cuenta no es correcto.
30011 | No se encontraron domicilios para la cuenta.
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
      <bts:BTClientes.ObtenerDomicilios>
         <bts:Btinreq>
            <bts:Device>10.12.10.159</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>772a871c734A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>21</bts:clienteUId>
      </bts:BTClientes.ObtenerDomicilios>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerDomicilios=' \
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
    "clienteUId": "21",
}'
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerDomiciliosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>772a871c734A8B5C60A82434</Token>
         </Btinreq>
         <domicilios>
            <sBTDomicilio1>
               <paisDomicilioId>845</paisDomicilioId>
               <paisDomicilio>URUGUAY</paisDomicilio>
               <departamentoId>2</departamentoId>
               <departamento>Canelones</departamento>
               <localidadId>1497</localidadId>
               <localidad>Parque de Solymar</localidad>
               <barrioId>0</barrioId>
               <barrio/>
               <calle>70</calle>
               <numeroPuerta>46</numeroPuerta>
               <apartamento/>
               <codigoPostal>15005</codigoPostal>
               <tipoDeDomicilioId>1</tipoDeDomicilioId>
               <tipoDeDomicilio>Residencia</tipoDeDomicilio>
               <direccion>CALLE 70 NRO 46</direccion>
               <referencia>Casa Azul</referencia>
            </sBTDomicilio1>
            <sBTDomicilio1>
               <paisDomicilioId>845</paisDomicilioId>
               <paisDomicilio>URUGUAY</paisDomicilio>
               <departamentoId>3</departamentoId>
               <departamento>Cerro Largo</departamento>
               <localidadId>1738</localidadId>
               <localidad>Plácido Rosas</localidad>
               <barrioId>0</barrioId>
               <barrio/>
               <calle>101</calle>
               <numeroPuerta>-</numeroPuerta>
               <apartamento/>
               <codigoPostal>15024</codigoPostal>
               <tipoDeDomicilioId>3</tipoDeDomicilioId>
               <tipoDeDomicilio>Negocio</tipoDeDomicilio>
               <direccion>CALLE 101 NRO -</direccion>
               <referencia>Casa Roja</referencia>
            </sBTDomicilio1>
         </domicilios>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2971</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerDomicilios</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-08</Fecha>
            <Hora>15:34:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerDomiciliosResponse>
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
    "domicilios": {
        "sBTDomicilio1": [
            {
                "localidad": "Parque de Solymar",
                "paisDomicilio": "URUGUAY",
                "barrioId": "0",
                "departamento": "Canelones",
                "numeroPuerta": "46",
                "barrio": "",
                "localidadId": "1497",
                "tipoDeDomicilioId": "1",
                "codigoPostal": "15005",
                "calle": "70",
                "apartamento": "",
                "tipoDeDomicilio": "Residencia",
                "departamentoId": "2",
                "paisDomicilioId": "845",
                "direccion": "CALLE 70 NRO 46",
                "referencia": "Casa Azul"
            },
            {
                "localidad": "Plácido Rosas",
                "paisDomicilio": "URUGUAY",
                "barrioId": "0",
                "departamento": "Cerro Largo",
                "numeroPuerta": "-",
                "barrio": "",
                "localidadId": "1738",
                "tipoDeDomicilioId": "3",
                "codigoPostal": "15024",
                "calle": "101",
                "apartamento": "",
                "tipoDeDomicilio": "Negocio",
                "departamentoId": "3",
                "paisDomicilioId": "845",
                "direccion": "CALLE 101 NRO -",
                "referencia": "Casa Roja"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "2973",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerDomicilios",
        "Requerimiento": "1",
        "Fecha": "2018-11-08",
        "Hora": "15:34:36",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDomicilio1  

### sBTDomicilio1

::: center 
Los campos del tipo de dato estructurado sBTDomicilio1 son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
apartamento | String | Número de apartamento. 
barrio | String | Nombre del barrio. 
barrioId | Int | Identificador del barrio. 
calle | String | Calle del domicilio. 
codigoPostal | String | Código postal. 
departamento | String | Nombre del departamento. 
departamentoId | Int | Identificador del departamento. 
dirección | String | Dirección. 
localidad | String | Nombre de la localidad. 
localidadId | Int | Identificador de la localidad. 
numeroPuerta | String | Número de puerta. 
paisDomicilio | String | Nombre del país. 
paisDomicilioId | Short | Identificador del país. 
referencia | String | Referencia. 
tipoDeDomicilio | String | Nombre del tipo de domicilio. 
tipoDeDomicilioId | Byte | Identificador del tipo de domicilio. 
:::
<!-- CIERRA SDT -->