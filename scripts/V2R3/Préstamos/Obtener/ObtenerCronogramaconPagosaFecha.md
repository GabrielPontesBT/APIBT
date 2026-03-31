---
title: Obtener Cronograma con Pagos a Fecha
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
::: note Método para obtener el cronograma de un préstamo teniendo en cuenta solamente los pagos hasta la fecha indicada.

**Nombre publicación:** BTPrestamos.ObtenerCronogramaConPagosAFecha

**Programa:** RBTPG440

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.
fecha | Date | Fecha de los pagos.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtCuotasPrestamos | [sBTCuotaPrestamo](#sbtcuotaprestamo) | Cronograma del préstamo.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de operación. 
30002 | No se recuperó la operación para el Identificador. 
30003 | No se recibió fecha para consulta. 
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
      <bts:BTPrestamos.ObtenerCronogramaConPagosAFecha>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>9aaec33a3bCD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>8892</bts:operacionUId>
         <bts:fecha>2022-11-16</bts:fecha>
      </bts:BTPrestamos.ObtenerCronogramaConPagosAFecha>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerCronogramaConPagosAFecha=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId" : 8892,
    "fecha" : "2022-11-16"
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
      <BTPrestamos.ObtenerCronogramaConPagosAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
        <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
        </Btinreq>
        <sdtCuotasPrestamos>
            <SdtsBTCuotaPrestamo>
                <impuestos>0</impuestos>
                <importePago>292.6</importePago>
                <subsidios>0</subsidios>
                <detalleConceptos>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto al Interés</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a la Mora</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a las Comisiones</concepto>
                    </SdtsBTConcepto>
                </detalleConceptos>
                <fechaVencimiento></fechaVencimiento>
                <intereses>0</intereses>
                <estadoDsc></estadoDsc>
                <comisiones>0</comisiones>
                <otrosConceptos>0</otrosConceptos>
                <concepto>Capital/Interés</concepto>
                <interesMora>0</interesMora>
                <capital>0</capital>
                <diasMora>0</diasMora>
                <tipoCuota>M</tipoCuota>
                <nroCuota>1</nroCuota>
                <seguros>0</seguros>
                <fechaUltimoPago>2022-11-07</fechaUltimoPago>
                <redondeo>0</redondeo>
                <estado>Paga</estado>
                <fechaPago>2022-09-21</fechaPago>
                <total>0</total>
            </SdtsBTCuotaPrestamo>
            ...
        </sdtCuotasPrestamos>
        <Erroresnegocio></Erroresnegocio>
        <Btoutreq>
            <Numero>898</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerCronogramaConPagosAFechaResponse</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>11:44:49</Hora>
            <Canal>BTDIGITAL</Canal>
        </Btoutreq>
      </BTPrestamos.ObtenerCronogramaConPagosAFechaResponse>
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
    "sdtCuotasPrestamos": {
        "SdtsBTCuotaPrestamo": [
            {
                "impuestos": 0,
                "importePago": 292.6,
                "subsidios": 0,
                "detalleConceptos": {
                    "SdtsBTConcepto": [
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto al Interés"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a la Mora"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a las Comisiones"
                        }
                    ]
                },
                "fechaVencimiento": "\n\t\t",
                "intereses": 0,
                "estadoDsc": "",
                "comisiones": 0,
                "otrosConceptos": 0,
                "concepto": "Capital/Interés",
                "interesMora": 0,
                "capital": 0,
                "diasMora": 0,
                "tipoCuota": "M",
                "nroCuota": 1,
                "seguros": 0,
                "fechaUltimoPago": "2022-11-07",
                "redondeo": 0,
                "estado": "Paga",
                "fechaPago": "2022-09-21",
                "total": 0
            },
            ...
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "901",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerCronograma",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "12:27:52",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCuotaPrestamo  

### sBTCuotaPrestamo

::: center 
Los campos del tipo de dato estructurado sBTCuotaPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
capital | Double | Capital de la cuota. 
comisiones | Double | Comisiones de la cuota. 
concepto | String |  (Capital / Interés / Capital-Interés / Pago Mínimo / Cuota Fija). 
detalleConceptos | [sBTConcepto](#sbtconcepto) | Detalle de los conceptos adicionales. 
diasMora | Int | Días de mora de la cuota. 
estado | String | Estado de la cuota. 
estadoDsc | String | Descripción del estado de la cuota. 
fechaPago | Date | Fecha de pago prevista . 
fechaUltimoPago | Date | Fecha de último pago de la cuota. 
importePago | Double | Importe pagado. 
impuestos | Double | Impuestos de la cuota. 
intereses | Double | Intereses de la cuota. 
interesMora | Double | Intereses de mora de la cuota. 
nroCuota | Int | Número de cuota. 
otrosConceptos | Double | Importe otros conceptos. 
redondeo | Double | Redondeo. 
seguros | Double | Seguros de la cuota. 
subsidios | Double | Subsidios  de la cuota. 
tipoCuota | String | Tipo de cuota (Capital - K / Interés - I / Capital-Interés - M / Pago Mínimo - T / Cuota Fija - F). 
total | Double | Total de la cuota. 

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