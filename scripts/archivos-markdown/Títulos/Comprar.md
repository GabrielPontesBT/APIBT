---
title: Comprar
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
::: note Método para comprar un título.

**Nombre publicación:** BTTitulos.Comprar

**Programa:** RBTPG496

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtCompra | [sBTCompraTitulo](#sbtcompratitulo) | Datos del título a comprar.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
operacionUId | Long | Identificador único de la operación.
movimientoUId | Long | Identificador único del movimiento.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador del mercado.
30002 | El valor del campo compra tiene que ser C o V.
30003 | El valor del campo ingresa tiene que ser I o V.
30004 | No se recibió el identificador de la especie.
30005 | No se recibió el identificador del cliente.
30006 | El valor del campo precio tiene que ser L o C.
30007 | Se tiene que ingresar plazo o vigencia hasta.
30008 | Se tiene que ingresar tasa o comisión.
30009 | No se recibió el identificador de la operación.
30010 | La forma de pago tiene que ser CC o CA.
30011 | No se recuperó la operación para el identificador recibido.
30012 | No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].
30013 | La operación ingresada no corresponde a una cuenta corriente.
30014 | La operación ingresada no corresponde a una cuenta de ahorro.
30015 | La operación no pertenece al cliente.
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
      <bts:BTTitulos.ComprarTitulo>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>D019598AFAA2ECCC4BA9BF31</bts:Token>
         </bts:Btinreq>
         <bts:sdtComprarTitulo>
            <bts:plazo>3</bts:plazo>
            <bts:tasa>60</bts:tasa>
            <bts:fecha>2020-08-11</bts:fecha>
            <bts:moneda>0</bts:moneda>
            <bts:especie>5787</bts:especie>
            <bts:tipo>C</bts:tipo>
            <bts:texto></bts:texto>
            <bts:mercado>51</bts:mercado>
            <bts:precio>1000</bts:precio>
            <bts:cuentaUId>221</bts:cuentaUId>
            <bts:otrosConceptos>
               <bts:SdtsBTConcepto>
                  <bts:texto></bts:texto>
                  <bts:valor></bts:valor>
                  <bts:concepto></bts:concepto>
               </bts:SdtsBTConcepto>
            </bts:otrosConceptos>
            <bts:valorNominal>0</bts:valorNominal>
            <bts:solicita>P</bts:solicita>
            <bts:comision></bts:comision>
            <bts:formaPago>CC</bts:formaPago>
            <bts:operacionUId>7</bts:operacionUId>
            <bts:ingresa>I</bts:ingresa>
            <bts:vigenciaHasta></bts:vigenciaHasta>
            <bts:tipoPrecio>L</bts:tipoPrecio>
         </bts:sdtComprarTitulo>
      </bts:BTTitulos.ComprarTitulo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTitulos?ComprarTitulo' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtComprarTitulo": {
      "plazo": 3,
      "tasa": 60,
      "fecha": "2020-08-11",
      "moneda": 0,
      "especie": 5787,
      "tipo": "C",
      "texto": "",
      "mercado": 51,
      "precio": 1000,
      "cuentaUId": 221,
      "otrosConceptos": {
      "SdtsBTConcepto": {
         "texto": "",
         "valor": "",
         "concepto": ""
      }
      },
      "valorNominal": 0,
      "solicita": "P",
      "comision": "",
      "formaPago": "CC",
      "operacionUId": 7,
      "ingresa": "I",
      "vigenciaHasta": "",
      "tipoPrecio": "L"
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
      <BTTitulos.ComprarTituloResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>be9fc8708b4A8B5C60A82434</Token>
         </Btinreq>
         <operacionUId>142</operacionUId>
         <movimientoUId>543</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>967</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTitulos.ComprarTitulo</Servicio>
            <Fecha>2017-12-22</Fecha>
            <Requerimiento/>
            <Hora>12:26:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTitulos.ComprarTituloResponse>
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
    "operacionUId": "142",
    "movimientoUId": "543",
    "Erroresnegocio": {
      "BTErrorNegocio": []
    },
   "Btoutreq": {
      "Numero": "786",
      "Estado": "OK",
      "Servicio": "BTTitulos.ComprarTitulo",
      "Fecha": "2017-12-15",
      "Requerimiento": "",
      "Hora": "16:35:22",
      "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCompraTitulo  

### sBTCompraTitulo

::: center 
Los campos del tipo de dato estructurado sBTCompraTitulo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clienteUId | Long | Identificador único del cliente.
comision | Short | Comisión.
especie | Int | Identificador de especie.
fecha | Date | Fecha compra.
formaPago | String | Forma de pago.
ingresa | String | Ingresa valor nominal o importe.
mercado | Short | Identificador del mercado.
moneda | Short | Identificador de moneda.
operacionUId | Long | Identificador único de la operación.
otrosConceptos | [sBTConcepto](#sbtconcepto) | Otros conceptos.
plazo | Int | Plazo.
precio | Double | Precio.
tasa | Double | Tasa.
texto | String | Texto adicional.
tipo | String | Tipo de compra.
tipoPrecio | String | Tipo de precio limite o cerrado.
valorNominal | Double | Valor nominal.
vigenciaHasta | Date | Fecha de vigencia hasta.

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.
:::
<!-- CIERRA SDT -->