---
title: Obtener Paquetes
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
::: note Método para obtener un listado de los paquetes ingresados en Bantotal.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerPaquetes

**Programa:** RBTPG187

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
sdtPaquetes | [sBTPaquete](#sbtpaquete) | Listado de paquetes.

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
      <bts:BTConfiguracionBantotal.ObtenerPaquetes>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerPaquetes>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerPaquetes=' \
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
      <BTConfiguracionBantotal.ObtenerPaquetesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtPaquetes>
            <sBTPaquete>
               <codigo>1</codigo>
               <descripcion>Cuenta Persona</descripcion>
               <vigente>S</vigente>
               <productos>
                  <SdtsBTProductoPaquete>
                     <productoUId>154</productoUId>
                     <nombre/>
                     <moneda>PESOS</moneda>
                     <papel>Billete</papel>
                     <cantidad>0</cantidad>
                  </SdtsBTProductoPaquete>
                  <SdtsBTProductoPaquete>
                     <productoUId>93</productoUId>
                     <nombre>Cuenta corriente P.Física</nombre>
                     <moneda>PESOS</moneda>
                     <papel>Billete</papel>
                     <cantidad>1</cantidad>
                  </SdtsBTProductoPaquete>
                  <SdtsBTProductoPaquete>
                     <productoUId>134</productoUId>
                     <nombre>Caja de Ahorro P.Física</nombre>
                     <moneda>DÓLAR ESTADOUNIDENSE</moneda>
                     <papel>Billete</papel>
                     <cantidad>1</cantidad>
                  </SdtsBTProductoPaquete>
                  <SdtsBTProductoPaquete>
                     <productoUId>155</productoUId>
                     <nombre>TARJETA DE DEBITO</nombre>
                     <moneda>PESOS</moneda>
                     <papel>Billete</papel>
                     <cantidad>0</cantidad>
                  </SdtsBTProductoPaquete>
               </productos>
            </sBTPaquete>
         </sdtPaquetes>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>788</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerPaquetes</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>16:47:42</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerPaquetesResponse>
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
   "paquetes": {
         "sBTPaquete": {
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
               {
               "productoUId": "155",
               "nombre": "TARJETA DE DEBITO",
               "moneda": "PESOS",
               "papel": "Billete",
               "cantidad": "0"
               }
            ]
         }
         }
      },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "790",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerPaquetes",
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
::: details sBTPaquete  

### sBTPaquete

::: center 
Los campos del tipo de dato estructurado sBTPaquete son los siguientes:

Campo | Tipo | Comentarios
:--------- | :--------- | :---------
codigo | Int | Código de paquete.
descripcion | String | Descripción de paquete.
productos | [sBTProductoPaquete](#sbtproductopaquete) | Listado de productos incluidos en el paquete.
vigente | String | Indica si está vigente el paquete (S/N).

### sBTProductoPaquete

Los campos del tipo de dato estructurado sBTProductoPaquete son los siguientes:

Campo | Tipo | Comentarios
:--------- | :--------- | :---------
cantidad | Short | Cantidad de productos de este tipo incluidos en el paquete.
moneda | String | Símbolo de moneda.
nombre | String | Nombre de producto.
papel | String | Símbolo de papel.
productoUId | Long | Identificador único de producto.
:::
<!-- CIERRA SDT -->