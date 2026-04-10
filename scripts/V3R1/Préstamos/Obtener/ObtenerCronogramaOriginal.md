---
title: Obtener Cronograma Original
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
::: note Método que devuelve el cronograma original de un préstamo.

**Nombre publicación:** BTPrestamos.ObtenerCronogramaOriginal

**Programa:** RBTPG291

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador de la operación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPrestamoOriginal | [sBTPrestamoOriginal](#sbtprestamooriginal) | Información del préstamo original.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de operación.
30002 | No se recuperó préstamo para el identificador:
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
      <bts:BTPrestamos.ObtenerCronogramaOriginal>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>480647346F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>10118</bts:operacionUId>
      </bts:BTPrestamos.ObtenerCronogramaOriginal>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ObtenerCronogramaOriginal' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"bts:Btinreq": {
	  "bts:Canal": "BTDIGITAL",
	  "bts:Requerimiento": "1",
	  "bts:Usuario": "BANTOTAL",
	  "bts:Token": "480647346F955E77534D3E02",
	  "bts:Device": "AC"
	},
	"operacionUId": 10118
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
      <BTPrestamos.ObtenerCronogramaOriginalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>480647346F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtPrestamoOriginal> 
            <producto> 
               <productoUId>105</productoUId> 
               <nombre>Amortización Automática TF</nombre> 
               <moneda>$</moneda> 
               <papel>$</papel> 
            </producto> 
            <sucursalId>1000</sucursalId> 
            <sucursal>Casa Matriz</sucursal> 
            <especie>Billete</especie> 
            <fechaValor>2018-05-15</fechaValor> 
            <tasa>23.000000</tasa> 
            <modalidad>Francés con Seg.e Impu.</modalidad> 
            <monedaId>0</monedaId> 
            <simboloMoneda>$</simboloMoneda> 
            <precio>0.00000000</precio> 
            <fechaVencimiento>2019-05-16</fechaVencimiento> 
            <totalCapital>19999.00</totalCapital> 
            <totalIntereses>2613.64</totalIntereses> 
            <totalMora>0.00</totalMora> 
            <totalComisiones>0.00</totalComisiones> 
            <totalImpuestos>0.00</totalImpuestos> 
            <totalSeguros>240.00</totalSeguros> 
            <totalPagar>22852.64</totalPagar> 
            <planDePagos> 
               <sBTCuotaPrestamoOriginal> 
                  <nroCuota>1</nroCuota> 
                  <fechaDesde>2018-05-15</fechaDesde> 
                  <fechaHasta>2018-06-18</fechaHasta> 
                  <plazo>34</plazo> 
                  <saldoCapital>19999.00</saldoCapital> 
                  <capital>1455.92</capital> 
                  <intereses>428.47</intereses> 
                  <impuestos>0.00</impuestos> 
                  <seguros>20.00</seguros> 
                  <comisiones>0.00</comisiones> 
                  <total>1904.39</total> 
                  <situacion>PAGA</situacion> 
               </sBTCuotaPrestamoOriginal> 
               <sBTCuotaPrestamoOriginal> 
                  <nroCuota>2</nroCuota> 
                  <fechaDesde>2018-06-18</fechaDesde> 
                  <fechaHasta>2018-07-16</fechaHasta> 
                  <plazo>28</plazo> 
                  <saldoCapital>18543.08</saldoCapital> 
                  <capital>1557.22</capital> 
                  <intereses>327.17</intereses> 
                  <impuestos>0.00</impuestos> 
                  <seguros>20.00</seguros> 
                  <comisiones>0.00</comisiones> 
                  <total>1904.39</total> 
                  <situacion>PAGA</situacion> 
               </sBTCuotaPrestamoOriginal> 
               <sBTCuotaPrestamoOriginal> 
                  <nroCuota>3</nroCuota> 
                  <fechaDesde>2018-07-16</fechaDesde> 
                  <fechaHasta>2018-08-16</fechaHasta> 
                  <plazo>31</plazo> 
                  <saldoCapital>16985.86</saldoCapital> 
                  <capital>1552.58</capital> 
                  <intereses>331.81</intereses> 
                  <impuestos>0.00</impuestos> 
                  <seguros>20.00</seguros> 
                  <comisiones>0.00</comisiones> 
                  <total>1904.39</total> 
                  <situacion>PAGA</situacion> 
               </sBTCuotaPrestamoOriginal> 
               <sBTCuotaPrestamoOriginal> 
                  <nroCuota>4</nroCuota> 
                  <fechaDesde>2018-08-16</fechaDesde> 
                  <fechaHasta>2018-09-17</fechaHasta> 
                  <plazo>32</plazo> 
                  <saldoCapital>15433.28</saldoCapital> 
                  <capital>1573.19</capital> 
                  <intereses>311.20</intereses> 
                  <impuestos>0.00</impuestos> 
                  <seguros>20.00</seguros> 
                  <comisiones>0.00</comisiones> 
                  <total>1904.39</total> 
                  <situacion>PAGA</situacion> 
               </sBTCuotaPrestamoOriginal> 
               <sBTCuotaPrestamoOriginal> 
                  <nroCuota>5</nroCuota> 
                  <fechaDesde>2018-09-17</fechaDesde> 
                  <fechaHasta>2018-10-16</fechaHasta> 
                  <plazo>29</plazo> 
                  <saldoCapital>13860.09</saldoCapital> 
                  <capital>1631.11</capital> 
                  <intereses>253.28</intereses> 
                  <impuestos>0.00</impuestos> 
                  <seguros>20.00</seguros> 
                  <comisiones>0.00</comisiones> 
                  <total>1904.39</total> 
                  <situacion>PAGA</situacion> 
               </sBTCuotaPrestamoOriginal> 
               <sBTCuotaPrestamoOriginal> 
                  <nroCuota>6</nroCuota> 
                  <fechaDesde>2018-10-16</fechaDesde> 
                  <fechaHasta>2018-11-16</fechaHasta> 
                  <plazo>31</plazo> 
                  <saldoCapital>12228.98</saldoCapital> 
                  <capital>1645.51</capital> 
                  <intereses>238.88</intereses> 
                  <impuestos>0.00</impuestos> 
                  <seguros>20.00</seguros> 
                  <comisiones>0.00</comisiones> 
                  <total>1904.39</total> 
                  <situacion>PAGA</situacion> 
               </sBTCuotaPrestamoOriginal> 
               <sBTCuotaPrestamoOriginal> 
                  <nroCuota>7</nroCuota> 
                  <fechaDesde>2018-11-16</fechaDesde> 
                  <fechaHasta>2018-12-17</fechaHasta> 
                  <plazo>31</plazo> 
                  <saldoCapital>10583.47</saldoCapital> 
                  <capital>1677.65</capital> 
                  <intereses>206.74</intereses> 
                  <impuestos>0.00</impuestos> 
                  <seguros>20.00</seguros> 
                  <comisiones>0.00</comisiones> 
                  <total>1904.39</total> 
                  <situacion>PAGA</situacion> 
               </sBTCuotaPrestamoOriginal> 
               <sBTCuotaPrestamoOriginal> 
                  <nroCuota>8</nroCuota> 
                  <fechaDesde>2018-12-17</fechaDesde> 
                  <fechaHasta>2019-01-16</fechaHasta> 
                  <plazo>30</plazo> 
                  <saldoCapital>8905.82</saldoCapital> 
                  <capital>1716.03</capital> 
                  <intereses>168.36</intereses> 
                  <impuestos>0.00</impuestos> 
                  <seguros>20.00</seguros> 
                  <comisiones>0.00</comisiones> 
                  <total>1904.39</total> 
                  <situacion>PAGA</situacion> 
               </sBTCuotaPrestamoOriginal> 
               <sBTCuotaPrestamoOriginal> 
                  <nroCuota>9</nroCuota> 
                  <fechaDesde>2019-01-16</fechaDesde> 
                  <fechaHasta>2019-02-18</fechaHasta> 
                  <plazo>33</plazo> 
                  <saldoCapital>7189.79</saldoCapital> 
                  <capital>1734.88</capital> 
                  <intereses>149.51</intereses> 
                  <impuestos>0.00</impuestos> 
                  <seguros>20.00</seguros> 
                  <comisiones>0.00</comisiones> 
                  <total>1904.39</total> 
                  <situacion>PAGA</situacion> 
               </sBTCuotaPrestamoOriginal> 
               <sBTCuotaPrestamoOriginal> 
                  <nroCuota>10</nroCuota> 
                  <fechaDesde>2019-02-18</fechaDesde> 
                  <fechaHasta>2019-03-18</fechaHasta> 
                  <plazo>28</plazo> 
                  <saldoCapital>5454.91</saldoCapital> 
                  <capital>1788.14</capital> 
                  <intereses>96.25</intereses> 
                  <impuestos>0.00</impuestos> 
                  <seguros>20.00</seguros> 
                  <comisiones>0.00</comisiones> 
                  <total>1904.39</total> 
                  <situacion>PAGA</situacion> 
               </sBTCuotaPrestamoOriginal> 
               <sBTCuotaPrestamoOriginal> 
                  <nroCuota>11</nroCuota> 
                  <fechaDesde>2019-03-18</fechaDesde> 
                  <fechaHasta>2019-04-16</fechaHasta> 
                  <plazo>29</plazo> 
                  <saldoCapital>3666.77</saldoCapital> 
                  <capital>1817.38</capital> 
                  <intereses>67.01</intereses> 
                  <impuestos>0.00</impuestos> 
                  <seguros>20.00</seguros> 
                  <comisiones>0.00</comisiones> 
                  <total>1904.39</total> 
                  <situacion>PAGA</situacion> 
               </sBTCuotaPrestamoOriginal> 
               <sBTCuotaPrestamoOriginal> 
                  <nroCuota>12</nroCuota> 
                  <fechaDesde>2019-04-16</fechaDesde> 
                  <fechaHasta>2019-05-16</fechaHasta> 
                  <plazo>30</plazo> 
                  <saldoCapital>1849.39</saldoCapital> 
                  <capital>1849.39</capital> 
                  <intereses>34.96</intereses> 
                  <impuestos>0.00</impuestos> 
                  <seguros>20.00</seguros> 
                  <comisiones>0.00</comisiones> 
                  <total>1904.35</total> 
                  <situacion>PAGA</situacion> 
               </sBTCuotaPrestamoOriginal> 
            </planDePagos> 
            <operacionUId>10118</operacionUId> 
            <idOperacionBT>0010100000101000000000000000002800000000000074001</idOperacionBT> 
            <cantidadCuotas>12</cantidadCuotas> 
         </sdtPrestamoOriginal>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerCronogramaOriginal</Servicio>
            <Fecha>2021-03-18</Fecha>
            <Hora>10:03:41</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8032</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerCronogramaOriginalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": 1, 
	  "Usuario": "BANTOTAL", 
	  "Token": "480647346F955E77534D3E02", 
	  "Device": "AC" 
	}, 
	"sdtPrestamoOriginal": { 
	  "producto": { 
		"productoUId": "105", 
		"nombre": "Amortización Automática TF", 
		"moneda": "$", 
		"papel": "$" 
	  }, 
	  "sucursalId": "1000", 
	  "sucursal": "Casa Matriz", 
	  "especie": "Billete", 
	  "fechaValor": "2018-05-15", 
	  "tasa": "23.000000", 
	  "modalidad": "Francés con Seg.e Impu.", 
	  "monedaId": "0", 
	  "simboloMoneda": "$", 
	  "precio": "0.00000000", 
	  "fechaVencimiento": "2019-05-16", 
	  "totalCapital": "19999.00", 
	  "totalIntereses": "2613.64", 
	  "totalMora": "0.00", 
	  "totalComisiones": "0.00", 
	  "totalImpuestos": "0.00", 
	  "totalSeguros": "240.00", 
	  "totalPagar": "22852.64", 
	  "planDePagos": { 
		"sBTCuotaPrestamoOriginal": [ 
		  { 
			"nroCuota": "1", 
			"fechaDesde": "2018-05-15", 
			"fechaHasta": "2018-06-18", 
			"plazo": "34", 
			"saldoCapital": "19999.00", 
			"capital": "1455.92", 
			"intereses": "428.47", 
			"impuestos": "0.00", 
			"seguros": "20.00", 
			"comisiones": "0.00", 
			"total": "1904.39", 
			"situacion": "PAGA" 
		  }, 
		  { 
			"nroCuota": "2", 
			"fechaDesde": "2018-06-18", 
			"fechaHasta": "2018-07-16", 
			"plazo": "28", 
			"saldoCapital": "18543.08", 
			"capital": "1557.22", 
			"intereses": "327.17", 
			"impuestos": "0.00", 
			"seguros": "20.00", 
			"comisiones": "0.00", 
			"total": "1904.39", 
			"situacion": "PAGA" 
		  }, 
		  { 
			"nroCuota": "3", 
			"fechaDesde": "2018-07-16", 
			"fechaHasta": "2018-08-16", 
			"plazo": "31", 
			"saldoCapital": "16985.86", 
			"capital": "1552.58", 
			"intereses": "331.81", 
			"impuestos": "0.00", 
			"seguros": "20.00", 
			"comisiones": "0.00", 
			"total": "1904.39", 
			"situacion": "PAGA" 
		  }, 
		  { 
			"nroCuota": "4", 
			"fechaDesde": "2018-08-16", 
			"fechaHasta": "2018-09-17", 
			"plazo": "32", 
			"saldoCapital": "15433.28", 
			"capital": "1573.19", 
			"intereses": "311.20", 
			"impuestos": "0.00", 
			"seguros": "20.00", 
			"comisiones": "0.00", 
			"total": "1904.39", 
			"situacion": "PAGA" 
		  }, 
		  { 
			"nroCuota": "5", 
			"fechaDesde": "2018-09-17", 
			"fechaHasta": "2018-10-16", 
			"plazo": "29", 
			"saldoCapital": "13860.09", 
			"capital": "1631.11", 
			"intereses": "253.28", 
			"impuestos": "0.00", 
			"seguros": "20.00", 
			"comisiones": "0.00", 
			"total": "1904.39", 
			"situacion": "PAGA" 
		  }, 
		  { 
			"nroCuota": "6", 
			"fechaDesde": "2018-10-16", 
			"fechaHasta": "2018-11-16", 
			"plazo": "31", 
			"saldoCapital": "12228.98", 
			"capital": "1645.51", 
			"intereses": "238.88", 
			"impuestos": "0.00", 
			"seguros": "20.00", 
			"comisiones": "0.00", 
			"total": "1904.39", 
			"situacion": "PAGA" 
		  }, 
		  { 
			"nroCuota": "7", 
			"fechaDesde": "2018-11-16", 
			"fechaHasta": "2018-12-17", 
			"plazo": "31", 
			"saldoCapital": "10583.47", 
			"capital": "1677.65", 
			"intereses": "206.74", 
			"impuestos": "0.00", 
			"seguros": "20.00", 
			"comisiones": "0.00", 
			"total": "1904.39", 
			"situacion": "PAGA" 
		  }, 
		  { 
			"nroCuota": "8", 
			"fechaDesde": "2018-12-17", 
			"fechaHasta": "2019-01-16", 
			"plazo": "30", 
			"saldoCapital": "8905.82", 
			"capital": "1716.03", 
			"intereses": "168.36", 
			"impuestos": "0.00", 
			"seguros": "20.00", 
			"comisiones": "0.00", 
			"total": "1904.39", 
			"situacion": "PAGA" 
		  }, 
		  { 
			"nroCuota": "9", 
			"fechaDesde": "2019-01-16", 
			"fechaHasta": "2019-02-18", 
			"plazo": "33", 
			"saldoCapital": "7189.79", 
			"capital": "1734.88", 
			"intereses": "149.51", 
			"impuestos": "0.00", 
			"seguros": "20.00", 
			"comisiones": "0.00", 
			"total": "1904.39", 
			"situacion": "PAGA" 
		  }, 
		  { 
			"nroCuota": "10", 
			"fechaDesde": "2019-02-18", 
			"fechaHasta": "2019-03-18", 
			"plazo": "28", 
			"saldoCapital": "5454.91", 
			"capital": "1788.14", 
			"intereses": "96.25", 
			"impuestos": "0.00", 
			"seguros": "20.00", 
			"comisiones": "0.00", 
			"total": "1904.39", 
			"situacion": "PAGA" 
		  }, 
		  { 
			"nroCuota": "11", 
			"fechaDesde": "2019-03-18", 
			"fechaHasta": "2019-04-16", 
			"plazo": "29", 
			"saldoCapital": "3666.77", 
			"capital": "1817.38", 
			"intereses": "67.01", 
			"impuestos": "0.00", 
			"seguros": "20.00", 
			"comisiones": "0.00", 
			"total": "1904.39", 
			"situacion": "PAGA" 
		  }, 
		  { 
			"nroCuota": "12", 
			"fechaDesde": "2019-04-16", 
			"fechaHasta": "2019-05-16", 
			"plazo": "30", 
			"saldoCapital": "1849.39", 
			"capital": "1849.39", 
			"intereses": "34.96", 
			"impuestos": "0.00", 
			"seguros": "20.00", 
			"comisiones": "0.00", 
			"total": "1904.35", 
			"situacion": "PAGA" 
		  } 
		] 
	  }, 
	  "operacionUId": "10118", 
	  "idOperacionBT": "0010100000101000000000000000002800000000000074001", 
	  "cantidadCuotas": "12" 
	}, 
	"Erroresnegocio": { 
	}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTPrestamos.ObtenerCronogramaOriginal", 
	  "Fecha": "2021-03-18", 
	  "Hora": "10:03:41", 
	  "Requerimiento": 1, 
	  "Numero": "8032", 
	  "Estado": "OK" 
	} 
} 
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPrestamoOriginal  

### sBTPrestamoOriginal

::: center 
Los campos del tipo de dato estructurado sBTPrestamoOriginal son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cantidadCuotas | Short | Cantidad de cuotas. 
especie | String | Especie del préstamo. 
fechaValor | Date | Fecha valor. 
fechaVencimiento | Date | Fecha vencimiento. 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
modalidad | String | Modalidad. 
monedaId | Short | Identificador de moneda. 
operacionUId | Long | Identificador de la operación. 
planDePagos | [sBTCuotaPrestamoOriginal](#sbtcuotaprestamooriginal) | Plan de pagos original. 
precio | Double | Precio. 
producto | [sBTProducto](#sbtproducto) | Información del producto. 
simboloMoneda | String | Símbolo de moneda. 
sucursal | String | Nombre de la sucursal. 
sucursalId | Int | Identificador de sucursal. 
tasa | Double | Tasa. 
totalCapital | Double | Capital total. 
totalComisiones | Double | Total comisiones. 
totalImpuestos | Double | Total de impuestos. 
totalIntereses | Double | Total de intereses. 
totalMora | Double | Total de mora. 
totalPagar | Double | Total a pagar. 
totalSeguros | Double | Total de seguros. 
 
### sBTProducto

::: center 
Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
moneda | String | Símbolo de la moneda. 
nombre | String | Nombre del producto. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Datos de otros conceptos.
papel | String | Símbolo del papel. 
productoUId | Long | Identificador único de producto. 

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.

### sBTCuotaPrestamoOriginal

::: center 
Los campos del tipo de dato estructurado sBTCuotaPrestamoOriginal son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
capital | Double | Capital. 
comisiones | Double | Comisiones. 
fechaDesde | Date | Fecha desde. 
fechaHasta | Date | Fecha hasta. 
impuestos | Double | Impuestos. 
intereses | Double | Intereses. 
nroCuota | Short | Número de cuota. 
plazo | Int | Plazo. 
saldoCapital | Double | Saldo capital. 
seguros | Double | Seguros. 
situacion | String | Situación. 
total | Double | Total de la cuota. 
:::
<!-- CIERRA SDT -->