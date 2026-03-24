---
title: Obtener Paquete
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
::: note Método para obtener los datos de un paquete.

**Nombre publicación:** BTCuentasVista.ObtenerPaquete

**Programa:** RBTPG321

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
paqueteId | Int | Identificador de paquete.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtPaquete | [sBTPaquete](#sbtpaquete) | Datos del paquete.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se encontraron paquetes para el identificador ingresado.
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
      <bts:BTCuentasVista.ObtenerPaquete>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1752711512CD285A89A23FBE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:paqueteId>1</bts:paqueteId>
      </bts:BTCuentasVista.ObtenerPaquete>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?ObtenerPaquete=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \
  -d '{
	"Btinreq": {
		"Device": "GP",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "1752711512CD285A89A23FBE"
	},
   "paqueteId": "1"
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
      <BTCuentasVista.ObtenerPaqueteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1752711512CD285A89A23FBE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtPaquete>
            <codigo>1</codigo>
            <descripcion>Cuenta Persona</descripcion>
            <vigente>S</vigente>
            <productos>
               <sBTProductoPaquete>
                  <productoUId>154</productoUId>
                  <nombre/>
                  <moneda>PESOS</moneda>
                  <papel>Billete</papel>
                  <cantidad>0</cantidad>
               </sBTProductoPaquete>
               <sBTProductoPaquete>
                  <productoUId>93</productoUId>
                  <nombre>Cuenta corriente P.Física</nombre>
                  <moneda>PESOS</moneda>
                  <papel>Billete</papel>
                  <cantidad>1</cantidad>
               </sBTProductoPaquete>
               <sBTProductoPaquete>
                  <productoUId>134</productoUId>
                  <nombre>Caja de Ahorro P.Física</nombre>
                  <moneda>DÓLAR ESTADOUNIDENSE</moneda>
                  <papel>Billete</papel>
                  <cantidad>1</cantidad>
               </sBTProductoPaquete>
            </productos>
         </sdtPaquete>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCuentasVista.ObtenerPaquete</Servicio>
            <Fecha>2021-03-02</Fecha>
            <Hora>15:53:26</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8020</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCuentasVista.ObtenerPaqueteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "GP",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "1752711512CD285A89A23FBE"
	},
   "sdtPaquete": {
      "codigo": "1",
      "descripcion": "Cuenta Persona",
      "vigente": "S",
      "productos": {
         "SdtsBTProductoPaquete": [
            {
            "productoUId": "154",
            "moneda": "PESOS",
            "papel": "Billete",
            "cantidad": "0"
            },
            {
            "productoUId": "93",
            "nombre": "Cuenta corriente P.Física",
            "moneda": "PESOS",
            "papel": "Billete",
            "cantidad": "1"
            },
            {
            "productoUId": "134",
            "nombre": "Caja de Ahorro P.Física",
            "moneda": "DÓLAR ESTADOUNIDENSE",
            "papel": "Billete",
            "cantidad": "1"
            },
         ]
      }
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "790",
      "Estado": "OK",
      "Servicio": "BTCuentasVista.ObtenerPaquete",
      "Fecha": "2021-03-02",
      "Requerimiento": "1",
      "Hora": "15:53:26",
      "Canal": "BTDIGITAL"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPaquete  

### sBTPaquete

::: center 
Los campos del tipo de dato estructurado sBTPaquete son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Int | Código de paquete. 
descripcion | String | Descripción de paquete. 
productos | [sBTProductoPaquete](#sbtproductopaquete) | Listado de productos incluidos en el paquete. 
vigente | String | Indica si está vigente el paquete (S/N). 

### sBTProductoPaquete

::: center 
Los campos del tipo de dato estructurado sBTProductoPaquete son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
cantidad | Short | Cantidad de productos de este tipo incluidos en el paquete. 
moneda | String | Símbolo de moneda. 
nombre | String | Nombre de producto. 
papel | String | Símbolo de papel. 
productoUId | Long | Identificador único de producto. 
:::
<!-- CIERRA SDT -->