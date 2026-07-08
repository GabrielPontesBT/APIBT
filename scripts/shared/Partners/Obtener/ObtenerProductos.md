---
title: Obtener Productos
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
::: note Método para retornar los productos de la concesionaria.

**Nombre publicación:** BTPartners.ObtenerProductos

**Programa:** RBTPNV06

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPartner | [sBTPartnerInReq](#sbtpartnerinreq) | Datos del usuario.
sdtVehiculo | [sBTVehiculo](#sbtvehiculo) | Datos del vehículo.
stringAux | String | [Hidden: Valor fijo 'S' para este método].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtProductos | [sBTProducto](#sbtproducto) | Listado de los productos.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió Partner ni canal.
30002 | El Partner no se encuentra habilitado.
30003 | No existe Partner con ese identificador.
30012 | No se recibió punto de venta.
30013 | No se recibió vendedor.
30020 | No se recibió identificador de la versión.
30021 | No se recibió estado del vehículo.
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
      <bts:BTPartners.ObtenerProductos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>DF1F942C6EC60E8B95BBEA69</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>2</bts:puntoVentaUId>
            <bts:vendedorUId>3</bts:vendedorUId>
            <bts:partnerUId>1</bts:partnerUId>
         </bts:sdtPartner>
         <bts:sdtVehiculo>
            <bts:monedaPrecio></bts:monedaPrecio>
            <bts:estadoId>1</bts:estadoId>
            <bts:datosAdicionales>
               <bts:sBTConcepto>
                  <bts:texto></bts:texto>
                  <bts:valor></bts:valor>
                  <bts:concepto></bts:concepto>
               </bts:sBTConcepto>
            </bts:datosAdicionales>
            <bts:versionUId>1</bts:versionUId>
            <bts:precio></bts:precio>
         </bts:sdtVehiculo>
      </bts:BTPartners.ObtenerProductos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ObtenerProductos' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "INSTALADOR",
        "Token": "DF1F942C6EC60E8B95BBEA69"
    },
    "sdtPartner": {
        "puntoVentaUId": 2,
        "vendedorUId": 3,
        "partnerUId": 1
    },
    "sdtVehiculo": {
        "monedaPrecio": "",
        "estadoId": 1,
        "datosAdicionales": {
            "sBTConcepto": {
                "texto": "",
                "valor": "",
                "concepto": ""
            }
        },
        "versionUId": 1,
        "precio": ""
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
      <BTPartners.ObtenerProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
                  <sBTConcepto>
                     <texto>N</texto>
                     <valor>0.00</valor>
                     <concepto>SOLICITA_BALLOON</concepto>
                  </sBTConcepto>
               </otrosConceptos>
               <productoUId>200</productoUId>
               <nombre>Vehiculares</nombre>
            </sBTProducto>
            <sBTProducto>
               <moneda>CRC</moneda>
               <papel>$</papel>
               <otrosConceptos>
                  <sBTConcepto>
                     <texto>N</texto>
                     <valor>0.00</valor>
                     <concepto>SOLICITA_BALLOON</concepto>
                  </sBTConcepto>
               </otrosConceptos>
               <productoUId>198</productoUId>
               <nombre>Amortización Automática TF</nombre>
            </sBTProducto>
         </sdtProductos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16867</Numero>
            <Servicio>BTPartners.ObtenerProductos</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-27</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>13:47:58</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.ObtenerProductosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
        "Device": "GZ",
        "Usuario": "INSTALADOR",
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Token": "DF1F942C6EC60E8B95BBEA69"
    },
    "sdtProductos": {
        "sBTProducto": [
            {
                "moneda": "CRC",
                "papel": "$",
                "otrosConceptos": {
                    "sBTConcepto": {
                        "texto": "N",
                        "valor": 0.00,
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
                    "sBTConcepto": {
                        "texto": "N",
                        "valor": 0.00,
                        "concepto": "SOLICITA_BALLOON"
                    }
                },
                "productoUId": 198,
                "nombre": "Amortización Automática TF"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 16867,
        "Servicio": "BTPartners.ObtenerProductos",
        "Estado": "OK",
        "Fecha": "2023-10-27",
        "Requerimiento": 0,
        "Hora": "13:47:58",
        "Canal": "BTDIGITAL"
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
:--------- | :--------- | :--------- 
partnerUId | Int | Identificador del Partner.
puntoVentaUId | Int | Identificador del punto de venta.
vendedorUId | Int | Identificador del vendedor.
:::

::: details sBTVehiculo  

### sBTVehiculo

::: center 
Los campos del tipo de dato estructurado sBTVehiculo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
datosAdicionales | [sBTConcepto](#sbtconcepto) | Listado de datos adicionales.		
estadoId | Short | Identificador del estado.
monedaPrecio | Short | Precio de la moneda.
precio | Double | Precio.
versionUId | Long | Identificador de la versión.
:::

::: details sBTConcepto

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.
:::

::: details sBTProducto  

### sBTProducto

::: center 
Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
moneda | String | Moneda.
nombre | String | Nombre.
otrosConceptos | [sBTConcepto](#sbtconcepto) | Listado de otros conceptos.
papel | String | Papel.
productoUId | Long | Identificador del producto.
:::

::: details sBTConcepto

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.
:::

<!-- CIERRA SDT -->

