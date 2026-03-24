---
title: Visualizar Resultado Procesamiento
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
::: note Método para visualizar el resultado del procesamiento de un archivo.

**Nombre publicación:** BTCASHManagement.VisualizarResultadoProcesamiento

**Programa:** RBTPGC20

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
archivoId | Long | Identificador de archivo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
cantidadLineas | Int | Cantidad de líneas del archivo.
moneda | Short | Moneda del archivo.
importe | Double | Importe total del pago.
cantidadProcesadasOK | Int | Cantidad de líneas procesadas.
importePagado | Double | Importe total efectivamente pago.
cantidadLineasError | Int | Cantidad de líneas en error.
cantidadPendientes | Int | Cantidad de líneas pendientes de procesar.
estado | String | Estado del archivo.
situacionLineas | [sBTSituacionLinea](#sbtsituacionlinea) | Lista de las líneas con su estado.

@tab Errores

Código | Descripción
:--------- | :-----------
1030711 | No se recuperó información para el identificador de archivo recibido.
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
      <bts:BTCASHManagement.VisualizarResultadoProcesamiento>
         <bts:Btinreq>
            <bts:Device>001</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:archivoId>95</bts:archivoId>
      </bts:BTCASHManagement.VisualizarResultadoProcesamiento>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?VisualizarResultadoProcesamiento=' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 1c730fd2-5de9-415a-855d-9bfdb517098a,bf88767f-74e5-4941-80fd-4f8cfb1f888a' \
  -H 'cache-control: no-cache' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "archivoId": "95"
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
      <BTCASHManagement.VisualizarResultadoProcesamientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>001</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1e39d33c824A8B5C60A82434</Token>
         </Btinreq>
         <cantidadLineas>2</cantidadLineas>
         <moneda>0</moneda>
         <importe>25.0</importe>
         <cantidadProcesadasOK>0</cantidadProcesadasOK>
         <importePagado>0.0</importePagado>
         <cantidadLineasError>0</cantidadLineasError>
         <cantidadPendientes>2</cantidadPendientes>
         <estado>Z</estado>
         <situacionLineas>
            <sBTSituacionLineas>
               <mensajesError></mensajesError>
               <linea>DAYANARA PAEZ,3-34-1593,7,001020110000771009,3,13.00,32,REF*TXT**PAGO ultima DE QUINCENA \</linea>
               <estado>V</estado>
            </sBTSituacionLineas>
            <sBTSituacionLineas>
               <mensajesError></mensajesError>
               <linea>BETZAIRA LIMA,8-766-1860,7,025021110000479001,3,12.00,32,REF*TXT**PAGO DE QUINCENA \</linea>
               <estado>V</estado>
            </sBTSituacionLineas>
         </situacionLineas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>7187</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCASHManagement.VisualizarResultadoProcesamiento</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-04-24</Fecha>
            <Hora>17:27:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.VisualizarResultadoProcesamientoResponse>
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
    "cantidadLineas": 2,
    "moneda": 0,
    "importe": 25,
    "cantidadProcesadasOK": 0,
    "importePagado": 0,
    "cantidadLineasError": 0,
    "cantidadPendientes": 2,
    "estado": "Z",
    "situacionLineas": {
        "sBTSituacionLineas": [
            {
                "mensajesError": {
                    "internal": []
                },
                "linea": "DAYANARA PAEZ,3-34-1593,7,001020110000771009,3,13.00,32,REF*TXT**PAGO ultima DE QUINCENA \\",
                "estado": "V"
            },
            {
                "mensajesError": {
                    "internal": []
                },
                "linea": "BETZAIRA LIMA,8-766-1860,7,025021110000479001,3,12.00,32,REF*TXT**PAGO DE QUINCENA \\",
                "estado": "V"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 7188,
        "Estado": "OK",
        "Servicio": "BTCASHManagement.VisualizarResultadoProcesamiento",
        "Requerimiento": "1",
        "Fecha": "2019-04-24",
        "Hora": "17:28:39",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSituacionLinea

### sBTSituacionLinea

::: center
Los campos del tipo de dato estructurado sBTSituacionLinea son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
estado | String | Estado de la línea.
linea | String | Línea de texto.
mensajesError | String | Lista de mensajes de la línea.
:::
<!-- CIERRA SDT -->