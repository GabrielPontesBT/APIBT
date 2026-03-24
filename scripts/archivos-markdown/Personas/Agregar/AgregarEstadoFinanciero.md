---
title: Agregar Estado Financiero
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
::: note Método para agregar los estados financieros a una persona.

**Nombre publicación:** BTPersonas.AgregarEstadoFinanciero

**Programa:** RBTPG580

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de la persona.
sdtEstadoFinanciero | [sBTEstadoFinanciero ](#sbtestadofinanciero) | Datos del estado financiero.
sdtCondicionTributaria | [sBTCondicionTributaria ](#sbtcondiciontributaria) | Datos de la condición tributaria.
sdtConceptosEstadoFinanciero | [sBTDetallesEstadosFinancieros ](#sbtdetallesestadosfinancieros) | Listado de los conceptos financieros. 

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtEstadoFinanciero | [sBTEstadoFinanciero ](#sbtestadofinanciero) | Datos del estado financiero.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de persona.
30002 | No se recibió la fecha de elaboración.
30003 | No se recibió el código de la moneda.
30005 | Ya existe un Estado Financiero con esa fecha de elaboración.
30006 | El código de moneda no coincide.
30007 | El valor de activo no corresponde.
30008 | La fecha de Elaborado en EEFF no puede ser mayor a la fecha de Hoy.
30009 | El concepto [Nombre del concepto] tiene valor [valor del concepto] el cual no está parametrizado.
30010 | El concepto [Identificador del concepto] no está parametrizado.
30011 | Los "Activos Totales" son diferente al "Total Pasivo + Patrimonio".
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
      <bts:BTPersonas.AgregarEstadoFinanciero>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>90A4D82C0D53C36114131B14</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>234</bts:personaUId>
         <bts:sdtEstadoFinanciero>
            <bts:Id></bts:Id>
            <bts:Auditado>S</bts:Auditado>
            <bts:Moneda>0</bts:Moneda>
            <bts:FechadeElaborado>2024-09-7</bts:FechadeElaborado>
            <bts:UsuariodeIngreso>INSTALADOR</bts:UsuariodeIngreso>
            <bts:FechaRegistro>2024-09-18</bts:FechaRegistro>
         </bts:sdtEstadoFinanciero>
         <bts:sdtCondicionTributaria>
            <bts:VentasAnuales>1</bts:VentasAnuales>
            <bts:RUC>1</bts:RUC>
            <bts:Activo>S</bts:Activo>
            <bts:RegimenTributario>12</bts:RegimenTributario>
         </bts:sdtCondicionTributaria>
         <bts:sdtConceptosEstadoFinanciero>
            <bts:sBTConceptoEstadoFinanciero>
               <bts:idConcepto>1</bts:idConcepto>
               <bts:valorConcepto></bts:valorConcepto>
            </bts:sBTConceptoEstadoFinanciero>
         </bts:sdtConceptosEstadoFinanciero>
      </bts:BTPersonas.AgregarEstadoFinanciero>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?AgregarEstadoFinanciero' \
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
		"personaUId": 234,
        "sdtEstadoFinanciero": {
          "Id": "",
          "Auditado": "S",
          "Moneda": 0,
          "FechadeElaborado": "2024-09-7",
          "UsuariodeIngreso": "INSTALADOR",
          "FechaRegistro": "2024-09-18"
        },
        "sdtCondicionTributaria": {
          "VentasAnuales": 1,
          "RUC": 1,
          "Activo": "S",
          "RegimenTributario": 12
        },
        "sdtConceptosEstadoFinanciero": {
          "sBTConceptoEstadoFinanciero": {
            "idConcepto": 1,
            "valorConcepto": ""
          }
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
      <BTPersonas.AgregarEstadoFinancieroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>90A4D82C0D53C36114131B14</Token>
         </Btinreq>
         <sdtEstadoFinanciero>
            <Id>31</Id>
            <Auditado>S</Auditado>
            <Moneda>0</Moneda>
            <FechadeElaborado>2024-09-07</FechadeElaborado>
            <UsuariodeIngreso>INSTALADOR</UsuariodeIngreso>
            <FechaRegistro>2024-09-18</FechaRegistro>
         </sdtEstadoFinanciero>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35226</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.AgregarEstadoFinanciero</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-05-14</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>14:53:41</Hora>
         </Btoutreq>
      </BTPersonas.AgregarEstadoFinancieroResponse>
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
    "sdtEstadoFinanciero": {
          "Id": 31,
          "Auditado": "S",
          "Moneda": 0,
          "FechadeElaborado": "2024-09-07",
          "UsuariodeIngreso": "INSTALADOR",
          "FechaRegistro": "2024-09-18"
        },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "401",
        "Estado": "OK",
        "Servicio": "BTPersonas.AgregarEstadoFinanciero",
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
::: details sBTEstadoFinanciero  

### sBTEstadoFinanciero

::: center 
Los campos del tipo de dato estructurado sBTEstadoFinanciero son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
auditado | String | ¿Es auditado? (S/N).
fechaDeElaborado | Date | Fecha de elaborado.
fechaRegistro | Date | Fecha de registro. 
id | int | Identificador de estado financiero.
moneda | Short | Identificador de moneda.
usuarioDeIngreso | String | Usuario de ingreso.
:::

::: details sBTCondicionTributaria 

### sBTCondicionTributaria

::: center 
Los campos del tipo de dato estructurado sBTCondicionTributaria son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
activo | String | ¿Está activo? (S/N).
regimenTributario | String | Régimen tributario.
RUC | String | RUC.
ventasAnuales | Double | Total de ventas anuales.
:::

::: details sBTDetallesEstadosFinancieros  

### sBTDetallesEstadosFinancieros

::: center 
Los campos del tipo de dato estructurado sBTDetallesEstadosFinancieros son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
idConcepto | int | Identificador del concepto del estado financiero.
valorConcepto | Double | Valor del concepto del estado financiero.
:::
<!-- CIERRA SDT -->