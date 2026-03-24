---
title: Obtener Cronograma de Abonos
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
::: note Método para obtener el cronograma de abonos de un ahorro programado.

**Nombre publicación:** BTAhorroProgramado.ObtenerCronogramaDeAbonos

**Programa:** RBTPG528

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de la operación.
filtroAbono | Byte | Tipo de filtro de abono. Se pueden enviar los siguientes [valores](#valores1).

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtSituacionAhorro | [sBTSituacionAhorro ](#sbtsituacionahorro) | Datos de la situación del cronograma.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de operación.
30002 | No se recibió el valor de filtroCuota.
30011 | No se recupero la operación para el identificador recibido.
40001 | El filtro de la cuota no es válido.
::: 
<!-- CIERRA TABLA DE DATOS -->

<!-- ABRE VALORES -->
::: details Valores Filtro Abono

### Valores1

::: center 

Este campo tiene tres opciones:

Valor | Comentarios
:--------- | :-----------
1 | Plan original.
2 | Abonos realizados.
3 | Abonos pendientes.
:::

<!-- CIERRA VALORES -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTAhorroProgramado.ObtenerCronogramaDeAbonos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>6CBBF8D88D2AEF23978B3C38</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>94</bts:operacionUId>
         <bts:filtroAbono>1</bts:filtroAbono>
      </bts:BTAhorroProgramado.ObtenerCronogramaDeAbonos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerCronogramaDeAbonos' \
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
		"operacionUId": 94,
      "filtroAbono": 1
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
      <BTAhorroProgramado.ObtenerCronogramaDeAbonosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6CBBF8D88D2AEF23978B3C38</Token>
         </Btinreq>
         <sdtSituacionAhorro>
            <capitalAhorro>10000.0</capitalAhorro>
            <moneda>$</moneda>
            <estado>Normal</estado>
            <intereses>575.9</intereses>
            <fechaProximoAbono/>
            <titular>PRANKA VISENTIN ERIKA VERONICA</titular>
            <clienteUId>4</clienteUId>
            <operacionUId>94</operacionUId>
            <abonos>
               <SdtsBTAbono>
                  <abono>1000.0</abono>
                  <numeroAbono>1</numeroAbono>
                  <capital>1000.0</capital>
                  <TAN>0.0</TAN>
                  <tasa>10.0</tasa>
                  <TAE>0.0</TAE>
                  <fechaPago>2025-02-28</fechaPago>
                  <interes>8.49</interes>
                  <plazo>0</plazo>
               </SdtsBTAbono>
               <SdtsBTAbono>
                  <abono>1000.0</abono>
                  <numeroAbono>2</numeroAbono>
                  <capital>2000.0</capital>
                  <TAN>0.0</TAN>
                  <tasa>10.0</tasa>
                  <TAE>0.0</TAE>
                  <fechaPago>2025-03-31</fechaPago>
                  <interes>16.44</interes>
                  <plazo>0</plazo>
               </SdtsBTAbono>
               <SdtsBTAbono>
                  <abono>1000.0</abono>
                  <numeroAbono>3</numeroAbono>
                  <capital>3000.0</capital>
                  <TAN>0.0</TAN>
                  <tasa>10.0</tasa>
                  <TAE>0.0</TAE>
                  <fechaPago>2025-04-30</fechaPago>
                  <interes>24.66</interes>
                  <plazo>0</plazo>
               </SdtsBTAbono>
               <SdtsBTAbono>
                  <abono>1000.0</abono>
                  <numeroAbono>4</numeroAbono>
                  <capital>4000.0</capital>
                  <TAN>0.0</TAN>
                  <tasa>10.0</tasa>
                  <TAE>0.0</TAE>
                  <fechaPago>2025-05-30</fechaPago>
                  <interes>33.97</interes>
                  <plazo>0</plazo>
               </SdtsBTAbono>
               <SdtsBTAbono>
                  <abono>1000.0</abono>
                  <numeroAbono>5</numeroAbono>
                  <capital>5000.0</capital>
                  <TAN>0.0</TAN>
                  <tasa>10.0</tasa>
                  <TAE>0.0</TAE>
                  <fechaPago>2025-06-30</fechaPago>
                  <interes>41.1</interes>
                  <plazo>0</plazo>
               </SdtsBTAbono>
               <SdtsBTAbono>
                  <abono>1000.0</abono>
                  <numeroAbono>6</numeroAbono>
                  <capital>6000.0</capital>
                  <TAN>0.0</TAN>
                  <tasa>10.0</tasa>
                  <TAE>0.0</TAE>
                  <fechaPago>2025-07-30</fechaPago>
                  <interes>54.25</interes>
                  <plazo>0</plazo>
               </SdtsBTAbono>
               <SdtsBTAbono>
                  <abono>1000.0</abono>
                  <numeroAbono>7</numeroAbono>
                  <capital>7000.0</capital>
                  <TAN>0.0</TAN>
                  <tasa>10.0</tasa>
                  <TAE>0.0</TAE>
                  <fechaPago>2025-09-01</fechaPago>
                  <interes>113.15</interes>
                  <plazo>0</plazo>
               </SdtsBTAbono>
               <SdtsBTAbono>
                  <abono>1000.0</abono>
                  <numeroAbono>8</numeroAbono>
                  <capital>8000.0</capital>
                  <TAN>0.0</TAN>
                  <tasa>10.0</tasa>
                  <TAE>0.0</TAE>
                  <fechaPago>2025-10-30</fechaPago>
                  <interes>70.14</interes>
                  <plazo>0</plazo>
               </SdtsBTAbono>
               <SdtsBTAbono>
                  <abono>1000.0</abono>
                  <numeroAbono>9</numeroAbono>
                  <capital>9000.0</capital>
                  <TAN>0.0</TAN>
                  <tasa>10.0</tasa>
                  <TAE>0.0</TAE>
                  <fechaPago>2025-12-01</fechaPago>
                  <interes>147.95</interes>
                  <plazo>0</plazo>
               </SdtsBTAbono>
               <SdtsBTAbono>
                  <abono>1000.0</abono>
                  <numeroAbono>10</numeroAbono>
                  <capital>10000.0</capital>
                  <TAN>0.0</TAN>
                  <tasa>10.0</tasa>
                  <TAE>0.0</TAE>
                  <fechaPago>2026-01-30</fechaPago>
                  <interes>65.75</interes>
                  <plazo>0</plazo>
               </SdtsBTAbono>
            </abonos>
            <total>10575.9</total>
            <producto>AHORRO ANUAL</producto>
            <sucursal>Casa Matriz</sucursal>
         </sdtSituacionAhorro>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>34846</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ObtenerCronogramaDeAbonos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-04-15</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:47:57</Hora>
         </Btoutreq>
      </BTAhorroProgramado.ObtenerCronogramaDeAbonosResponse>
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
    "sdtSituacionAhorro": {
          "capitalAhorro": 10000,
          "moneda": "$",
          "estado": "Normal",
          "intereses": 575.9,
          "fechaProximoAbono": "",
          "titular": "PRANKA VISENTIN ERIKA VERONICA",
          "clienteUId": 4,
          "operacionUId": 94,
          "abonos": {
            "SdtsBTAbono": [
              {
                "abono": 1000,
                "numeroAbono": 1,
                "capital": 1000,
                "TAN": 0,
                "tasa": 10,
                "TAE": 0,
                "fechaPago": "2025-02-28",
                "interes": 8.49,
                "plazo": 0
              },
              {
                "abono": 1000,
                "numeroAbono": 2,
                "capital": 2000,
                "TAN": 0,
                "tasa": 10,
                "TAE": 0,
                "fechaPago": "2025-03-31",
                "interes": 16.44,
                "plazo": 0
              },
              {
                "abono": 1000,
                "numeroAbono": 3,
                "capital": 3000,
                "TAN": 0,
                "tasa": 10,
                "TAE": 0,
                "fechaPago": "2025-04-30",
                "interes": 24.66,
                "plazo": 0
              },
              {
                "abono": 1000,
                "numeroAbono": 4,
                "capital": 4000,
                "TAN": 0,
                "tasa": 10,
                "TAE": 0,
                "fechaPago": "2025-05-30",
                "interes": 33.97,
                "plazo": 0
              },
              {
                "abono": 1000,
                "numeroAbono": 5,
                "capital": 5000,
                "TAN": 0,
                "tasa": 10,
                "TAE": 0,
                "fechaPago": "2025-06-30",
                "interes": 41.1,
                "plazo": 0
              },
              {
                "abono": 1000,
                "numeroAbono": 6,
                "capital": 6000,
                "TAN": 0,
                "tasa": 10,
                "TAE": 0,
                "fechaPago": "2025-07-30",
                "interes": 54.25,
                "plazo": 0
              },
              {
                "abono": 1000,
                "numeroAbono": 7,
                "capital": 7000,
                "TAN": 0,
                "tasa": 10,
                "TAE": 0,
                "fechaPago": "2025-09-01",
                "interes": 113.15,
                "plazo": 0
              },
              {
                "abono": 1000,
                "numeroAbono": 8,
                "capital": 8000,
                "TAN": 0,
                "tasa": 10,
                "TAE": 0,
                "fechaPago": "2025-10-30",
                "interes": 70.14,
                "plazo": 0
              },
              {
                "abono": 1000,
                "numeroAbono": 9,
                "capital": 9000,
                "TAN": 0,
                "tasa": 10,
                "TAE": 0,
                "fechaPago": "2025-12-01",
                "interes": 147.95,
                "plazo": 0
              },
              {
                "abono": 1000,
                "numeroAbono": 10,
                "capital": 10000,
                "TAN": 0,
                "tasa": 10,
                "TAE": 0,
                "fechaPago": "2026-01-30",
                "interes": 65.75,
                "plazo": 0
              }
            ]
          },
          "total": 10575.9,
          "producto": "AHORRO ANUAL",
          "sucursal": "Casa Matriz"
        },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "401",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ObtenerCronogramaDeAbonos",
        "Fecha": "2018-05-03",
        "Requerimiento": "1",
        "Hora": "11:10:49",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSituacionAhorro  

### sBTSituacionAhorro

::: center 
Los campos del tipo de dato estructurado sBTSituacionAhorro son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
abonos | [sBTAbono](#sbtabono) | Listado de abonos.
capitalAhorro | Double | Capital.
clienteUId | Long | Indentificador único del cliente.
estado | String | Estado.
fechaProximoAbono | Date | Fecha del proximo abono.
intereses | Double | Intereses.
moneda | String | Símbolo de la moneda.
operacionUId | Long | Identificador único de la operación.
producto | String | Nombre del producto.
sucursal | String | Nombre de la sucursal.
titular | String | Titular. 
total | Double | Total.

### sBTAbono

::: center 
Los campos del tipo de dato estructurado sBTAbono son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
abono | Double | Abono.
capital | Double | Capital del abono.
fechaPago | Date | Fecha de pago.
intereses | Double | Intereses del abono.
numeroAbono | Int | Número de abono.
plazo | int | Plazo del abono.
TAE | Double | TAE.
TAN | Double | TAN.
tasa | Double | Tasa del abono.
:::
<!-- CIERRA SDT -->