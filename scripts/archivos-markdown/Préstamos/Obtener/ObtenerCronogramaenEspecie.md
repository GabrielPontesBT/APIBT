---
title: Obtener Cronograma en Especie
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
::: note Método para obtener el cronograma de un préstamo expresado en especie.

**Nombre publicación:** BTPrestamos.ObtenerCronogramaEnEspecie

**Programa:** RBTPG342

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.
expresadoEn | String | [Hidden: Valor fijo 'E' para este método].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtCuotaPrestamo | [sBTCuotaPrestamo](#sbtcuotaprestamo) | Cronograma del préstamo.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de operación.
30002 | No se recuperó la operación para el Identificador.
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
      <bts:BTPrestamos.ObtenerCronogramaEnEspecie>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>361</bts:operacionUId>
      </bts:BTPrestamos.ObtenerCronogramaEnEspecie>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerCronogramaEnEspecie=' \
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
    "operacionUId": 361
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
      <BTPrestamos.ObtenerCronogramaEnEspecieResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>1</nroCuota> 
               <fechaPago>2018-11-05</fechaPago> 
               <tipoCuota>I</tipoCuota> 
               <concepto>Interés Vencido</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>0.00</capital> 
               <intereses>0.00</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>0.00</total> 
               <estado>Paga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>2018-11-05</fechaUltimoPago> 
               <importePago>12.87</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>2</nroCuota> 
               <fechaPago>2018-12-05</fechaPago> 
               <tipoCuota>I</tipoCuota> 
               <concepto>Interés Vencido</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>0.00</capital> 
               <intereses>12.87</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>12.87</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>3</nroCuota> 
               <fechaPago>2018-12-05</fechaPago> 
               <tipoCuota>K</tipoCuota> 
               <concepto>Capital</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>250.00</capital> 
               <intereses>0.00</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>2.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>252.00</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>4</nroCuota> 
               <fechaPago>2019-01-07</fechaPago> 
               <tipoCuota>I</tipoCuota> 
               <concepto>Interés Vencido</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>0.00</capital> 
               <intereses>20.27</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>20.27</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>5</nroCuota> 
               <fechaPago>2019-01-07</fechaPago> 
               <tipoCuota>K</tipoCuota> 
               <concepto>Capital</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>250.00</capital> 
               <intereses>0.00</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>2.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>252.00</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>6</nroCuota> 
               <fechaPago>2019-02-05</fechaPago> 
               <tipoCuota>I</tipoCuota> 
               <concepto>Interés Vencido</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>0.00</capital> 
               <intereses>6.22</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>6.22</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>7</nroCuota> 
               <fechaPago>2019-02-05</fechaPago> 
               <tipoCuota>K</tipoCuota> 
               <concepto>Capital</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>250.00</capital> 
               <intereses>0.00</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>2.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>252.00</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>8</nroCuota> 
               <fechaPago>2019-03-05</fechaPago> 
               <tipoCuota>K</tipoCuota> 
               <concepto>Capital</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>250.00</capital> 
               <intereses>0.00</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>2.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>252.00</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
         </sdtCuotaPrestamo> 
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>898</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerCronogramaEnEspecie</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>11:44:49</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerCronogramaEnEspecieResponse>
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
    "sdtCuotaPrestamo": { 
        "sBTCuotaPrestamo": [ 
            { 
                "impuestos": "0.00", 
                "importePago": "12.87", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "0.00", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Interés Vencido", 
                "interesMora": "0.00", 
                "capital": "0.00", 
                "diasMora": "0", 
                "tipoCuota": "I", 
                "nroCuota": "1", 
                "seguros": "0.00", 
                "fechaUltimoPago": "2018-11-05", 
                "estado": "Paga", 
                "fechaPago": "2018-11-05", 
                "total": "0.00" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "12.87", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Interés Vencido", 
                "interesMora": "0.00", 
                "capital": "0.00", 
                "diasMora": "0", 
                "tipoCuota": "I", 
                "nroCuota": "2", 
                "seguros": "0.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2018-12-05", 
                "total": "12.87" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "0.00", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Capital", 
                "interesMora": "0.00", 
                "capital": "250.00", 
                "diasMora": "0", 
                "tipoCuota": "K", 
                "nroCuota": "3", 
                "seguros": "2.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2018-12-05", 
                "total": "252.00" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "20.27", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Interés Vencido", 
                "interesMora": "0.00", 
                "capital": "0.00", 
                "diasMora": "0", 
                "tipoCuota": "I", 
                "nroCuota": "4", 
                "seguros": "0.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2019-01-07", 
                "total": "20.27" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "0.00", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Capital", 
                "interesMora": "0.00", 
                "capital": "250.00", 
                "diasMora": "0", 
                "tipoCuota": "K", 
                "nroCuota": "5", 
                "seguros": "2.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2019-01-07", 
                "total": "252.00" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "6.22", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Interés Vencido", 
                "interesMora": "0.00", 
                "capital": "0.00", 
                "diasMora": "0", 
                "tipoCuota": "I", 
                "nroCuota": "6", 
                "seguros": "0.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2019-02-05", 
                "total": "6.22" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "0.00", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Capital", 
                "interesMora": "0.00", 
                "capital": "250.00", 
                "diasMora": "0", 
                "tipoCuota": "K", 
                "nroCuota": "7", 
                "seguros": "2.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2019-02-05", 
                "total": "252.00" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "0.00", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Capital", 
                "interesMora": "0.00", 
                "capital": "250.00", 
                "diasMora": "0", 
                "tipoCuota": "K", 
                "nroCuota": "8", 
                "seguros": "2.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2019-03-05", 
                "total": "252.00" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "901", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerCronogramaEnEspecie", 
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
:--------- | :----------- | :----------- 
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
:--------- | :----------- | :----------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.
:::
<!-- CIERRA SDT -->