---
title: Obtener Valores
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
::: note Método para obtener los títulos disponibles para un grupo y sus respectivos valores.

**Nombre publicación:** BTTitulos.ObtenerValores

**Programa:** RBTPG494

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
grupoId | Byte | Identificador del grupo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtTitulos | [sBTTitulo](#sbttitulo) | Listado de títulos del cliente.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador del grupo.
30002 | No se pudieron obtener los títulos con el identificador ingresado.
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
      <bts:BTTitulos.ObtenerValores>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>6F467D9554D22BE00B36E963</bts:Token>
         </bts:Btinreq>
         <bts:grupoId>1</bts:grupoId>
      </bts:BTTitulos.ObtenerValores>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTitulos?ObtenerValores' \
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
    "grupoId": 1,
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
      <BTTitulos.ObtenerValoresResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>be9fc8708b4A8B5C60A82434</Token>
         </Btinreq>
         <sdtTitulo>
            <sBTTitulo>
					<moneda>2222</moneda>
					<simbolo>USD</simbolo>
					<pais>UNITED STATES OF AMERICA (USA)</pais>
					<grupoId>1</grupoId>
					<grupo>Acción Ordinaria</grupo>
					<codigo>703</codigo>
					<nombre>APPLIED MICRO CIRCUITS CORP.</nombre>
					<precioActual>0.00</precioActual>
					<otrosConceptos>
						<SdtsBTConcepto>
							<texto>Fecha de vencimiento.</texto>
							<valor>0.00</valor>
							<concepto>31/12/99</concepto>
						</SdtsBTConcepto>
					</otrosConceptos>
				</sBTTitulo>
				<sBTTitulo>
					<moneda>2222</moneda>
					<simbolo>USD</simbolo>
					<pais>UNITED STATES OF AMERICA (USA)</pais>
					<grupoId>1</grupoId>
					<grupo>Acción Ordinaria</grupo>
					<codigo>704</codigo>
					<nombre>APPLE COMPUTER INC.COM</nombre>
					<precioActual>0.00</precioActual>
					<otrosConceptos>
						<SdtsBTConcepto>
							<texto>Fecha de vencimiento.</texto>
							<valor>0.00</valor>
							<concepto>31/12/99</concepto>
						</SdtsBTConcepto>
					</otrosConceptos>
				</sBTTitulo>
         </sdtTitulo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>967</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTitulos.ObtenerValores</Servicio>
            <Fecha>2017-12-22</Fecha>
            <Requerimiento/>
            <Hora>12:26:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTitulos.ObtenerValoresResponse>
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
   "sdtTitulo": {
      "sBTTitulo": [
      {
         "moneda": 2222,
         "simbolo": "USD",
         "pais": "UNITED STATES OF AMERICA (USA)",
         "grupoId": 1,
         "grupo": "Acción Ordinaria",
         "codigo": 703,
         "nombre": "APPLIED MICRO CIRCUITS CORP.",
         "precioActual": 0,
         "otrosConceptos": {
            "SdtsBTConcepto": {
            "texto": "Fecha de vencimiento.",
            "valor": 0,
            "concepto": "31/12/99"
            }
         }
      },
      {
         "moneda": 2222,
         "simbolo": "USD",
         "pais": "UNITED STATES OF AMERICA (USA)",
         "grupoId": 1,
         "grupo": "Acción Ordinaria",
         "codigo": 704,
         "nombre": "APPLE COMPUTER INC.COM",
         "precioActual": 0,
         "otrosConceptos": {
            "SdtsBTConcepto": {
            "texto": "Fecha de vencimiento.",
            "valor": 0,
            "concepto": "31/12/99"
            }
         }
      }
      ]
   },
    "Erroresnegocio": {
      "BTErrorNegocio": []
    },
   "Btoutreq": {
      "Numero": "786",
      "Estado": "OK",
      "Servicio": "BTTitulos.ObtenerValores",
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
::: details sBTTitulo  

### sBTTitulo

::: center 
Los campos del tipo de dato estructurado sBTTitulo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Int | Código del título.
grupo | String | Nombre del grupo.
grupoId | Byte | Identificador del grupo.
moneda | Short | Identificador de moneda.
nombre | String | Nombre del título.
otrosConceptos | [sBTConcepto](#sbtconcepto) | Listado de otros conceptos. 
pais | String | Nombre del país.
precioActual | Double | Precio actual.
simbolo | String | Símbolo de moneda.

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