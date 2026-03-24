---
title: Obtener Productos del Partner
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
::: note Método para obtener los productos habilitados del Partner.

**Nombre publicación:** BTPartners.ObtenerProductosPartner

**Programa:** RBTPN009

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPartner | [sBTPartnerInReq](#sbtpartnerinreq) | Datos del usuario.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtProductos | [sBTProducto](#sbtproducto) | Listado de los productos.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió Partner ni canal.
30002 | El Partner no se encuentra habilitado.
30003 | No existe Partner con ese identificador.
30012 | No se recibió punto de venta.
30013 | No se recibió vendedor.
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
      <bts:BTPartners.ObtenerProductosPartner>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1222A10B1A106FB813BD7AE9</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>3</bts:puntoVentaUId>
            <bts:vendedorUId>56</bts:vendedorUId>
            <bts:partnerUId>23</bts:partnerUId>
         </bts:sdtPartner>
      </bts:BTPartners.ObtenerProductosPartner>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ObtenerProductosPartner' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "3JPL6DC33CD84655A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
   "sdtPartner": {
      "puntoVentaUId": 3,
      "vendedorUId": 56,
      "partnerUId": 23
   },
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
      <BTPartners.ObtenerProductosPartnerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <sdtProductos>
            <sBTProducto>
               <moneda>CRC</moneda>
               <papel>$</papel>
               <otrosConceptos>
                  <SdtsBTConcepto>
                     <texto>N</texto>
                     <valor>0.00</valor>
                     <concepto>SOLICITA_BALLOON</concepto>
                  </SdtsBTConcepto>
               </otrosConceptos>
               <productoUId>200</productoUId>
               <nombre>Vehiculares</nombre>
            </sBTProducto>
            <sBTProducto>
               <moneda>CRC</moneda>
               <papel>$</papel>
               <otrosConceptos>
                  <SdtsBTConcepto>
                     <texto>N</texto>
                     <valor>0.00</valor>
                     <concepto>SOLICITA_BALLOON</concepto>
                  </SdtsBTConcepto>
               </otrosConceptos>
               <productoUId>198</productoUId>
               <nombre>Amortización Automática TF</nombre>
            </sBTProducto>
         </sdtProductos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>770</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.ObtenerProductosPartner</Servicio>
            <Fecha>2017-12-14</Fecha>
            <Requerimiento/>
            <Hora>18:17:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.ObtenerProductosPartnerResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtProductos": {
        "sBTProducto": [
        {
            "moneda": "CRC",
            "papel": "$",
            "otrosConceptos": {
            "SdtsBTConcepto": {
                "texto": "N",
                "valor": 0,
                "concepto": "SOLICITA_BALLOON"
            }
            },
            "productoUId": 200,
            "nombre": "Vehiculares"
        },
        {
            "moneda": "CRC",
            "papel": "$",
            "otrosConceptos": {
            "SdtsBTConcepto": {
                "texto": "N",
                "valor": 0,
                "concepto": "SOLICITA_BALLOON"
            }
            },
            "productoUId": 198,
            "nombre": "Amortización Automática TF"
        }
        ]
    },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPartners.ObtenerProductosPartner",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "17:08:56"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPartnerInReq  

### sBTPartnerInReq

::: center 
Los campos del tipo de dato estructurado sBTPartnerInReq son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
partnerUId | Int | Identificador del Partner.
puntoVentaUId | Int | Identificador del punto de venta.
vendedorUId | Int | Identificador del vendedor.
:::

::: details sBTProducto  

### sBTProducto

::: center 
Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
moneda | String | Símbolo de moneda.
nombre | String | Nombre de producto.
otrosConceptos | [sBTConcepto](#sbtconcepto) | Listado de otros conceptos.
papel | String | Símbolo de papel.
productoUId | Long | Identificador único de producto.

### sBTConcepto

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.
:::
<!-- CIERRA SDT -->