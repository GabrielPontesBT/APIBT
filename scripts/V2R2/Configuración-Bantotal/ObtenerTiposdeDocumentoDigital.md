---
title: Obtener Tipos de Documento Digital
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
::: note Método para obtener un listado de los tipos de documento digital ingresados en Bantotal.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerTiposDeDocumentosDigitales

**Programa:** RBTPG178

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtTiposDeDocumentoDigital | [sBTTipoDocumentoDigital](#sbttipodocumentodigital) | Listado de tipos de documento digital.

@tab Errores

Código | Descripción
:--------- | :---------
30011 | No existen tipos de documentos digitales ingresados en el sistema.
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
      <bts:BTConfiguracionBantotal.ObtenerTiposDeDocumentoDigital>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0868626a064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>10.12.10.159</bts:Device>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerTiposDeDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerTiposDeDocumentoDigital=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 44ba1342-ce61-303e-bd55-62945147dfe0' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
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
      <BTConfiguracionBantotal.ObtenerTiposDeDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0868626a064A8B5C60A82434</Token>
         </Btinreq>
         <sdtTiposDeDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Cédula de Identidad</descripcion> 
               <codigo>1</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Balance</descripcion> 
               <codigo>2</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Contrato</descripcion> 
               <codigo>3</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Plan de Pagos</descripcion> 
               <codigo>4</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Acta de Consitución de la empresa</descripcion> 
               <codigo>5</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Contrato de Arrendamiento</descripcion> 
               <codigo>6</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Avalúo (del vehículo/equipo usado)</descripcion> 
               <codigo>9</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Constancia de pagos de Ingresos por Honorarios</descripcion> 
               <codigo>10</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Constitución de Prenda</descripcion> 
               <codigo>11</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Consulta en la APC - Codeudor</descripcion> 
               <codigo>12</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Consulta en la APC - Titular</descripcion> 
               <codigo>13</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Contrato de Arrendamiento Financiero</descripcion> 
               <codigo>14</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Contrato de Cesión</descripcion> 
               <codigo>15</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Contrato de Préstamo Garantizado</descripcion> 
               <codigo>16</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Contrato de Préstamo Personal</descripcion> 
               <codigo>17</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Copia de Licencia de Conducir</descripcion> 
               <codigo>18</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Enmienda de Depósito a Plazo Fijo</descripcion> 
               <codigo>20</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Escritura</descripcion> 
               <codigo>21</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Esquema de Pagos Variables</descripcion> 
               <codigo>22</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Factura de Agua o Luz o Recibo de Alquiler</descripcion> 
               <codigo>23</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Fianza Solidaria</descripcion> 
               <codigo>24</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Fotocopia Cédula de Identidad - Codeudor</descripcion> 
               <codigo>25</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Fotocopia Cédula Id. - Representante Legal S. A.</descripcion> 
               <codigo>26</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Fotocopia Cédula de Identidad - Titular</descripcion> 
               <codigo>27</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Fotocopia Pasaporte - Codeudor</descripcion> 
               <codigo>28</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Fotocopia Pasaporte - Titular</descripcion> 
               <codigo>29</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Pagaré</descripcion> 
               <codigo>31</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Proforma de Agencia (cotización vehículo/equipos)</descripcion> 
               <codigo>33</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Recibo de Abono en la Agencia</descripcion> 
               <codigo>35</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Solicitud de Préstamo - Persona Natural</descripcion> 
               <codigo>36</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Solicitud de crédito - P.Natural - Codeudor</descripcion> 
               <codigo>37</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Verificación de World Compliance</descripcion> 
               <codigo>38</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Poliza de Seguro de Vida</descripcion> 
               <codigo>39</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Cédula de Identidad Vigente o Comprobante</descripcion> 
               <codigo>40</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Firma</descripcion> 
               <codigo>90</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Acta de Accionistas</descripcion> 
               <codigo>100</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Acta de Junta Directiva</descripcion> 
               <codigo>101</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Autorización de Desc Volunt, Bancos y Financieras</descripcion> 
               <codigo>102</codigo> 
            </sBTTipoDocumentoDigital> 
            <sBTTipoDocumentoDigital> 
               <descripcion>Carta de Descuentos ACP Empleados</descripcion> 
               <codigo>105</codigo> 
            </sBTTipoDocumentoDigital> 
		 </sdtTiposDeDocumentoDigital>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>753</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerTiposDeDocumentoDigital</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-12</Fecha>
            <Hora>15:08:14</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerTiposDeDocumentoDigitalResponse>
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
   "sdtTiposDeDocumentoDigital": { 
      "sBTTipoDocumentoDigital": [ 
         { 
         "descripcion": "Cédula de Identidad", 
         "codigo": 1 
         }, 
         { 
         "descripcion": "Balance", 
         "codigo": 2 
         }, 
         { 
         "descripcion": "Contrato", 
         "codigo": 3 
         }, 
         { 
         "descripcion": "Plan de Pagos", 
         "codigo": 4 
         }, 
         { 
         "descripcion": "Acta de Consitución de la empresa", 
         "codigo": 5 
         }, 
         { 
         "descripcion": "Contrato de Arrendamiento", 
         "codigo": 6 
         }, 
         { 
         "descripcion": "Avalúo (del vehículo/equipo usado)", 
         "codigo": 9 
         }, 
         { 
         "descripcion": "Constancia de pagos de Ingresos por Honorarios", 
         "codigo": 10 
         }, 
         { 
         "descripcion": "Constitución de Prenda", 
         "codigo": 11 
         }, 
         { 
         "descripcion": "Consulta en la APC - Codeudor", 
         "codigo": 12 
         }, 
         { 
         "descripcion": "Consulta en la APC - Titular", 
         "codigo": 13 
         }, 
         { 
         "descripcion": "Contrato de Arrendamiento Financiero", 
         "codigo": 14 
         }, 
         { 
         "descripcion": "Contrato de Cesión", 
         "codigo": 15 
         }, 
         { 
         "descripcion": "Contrato de Préstamo Garantizado", 
         "codigo": 16 
         }, 
         { 
         "descripcion": "Contrato de Préstamo Personal", 
         "codigo": 17 
         }, 
         { 
         "descripcion": "Copia de Licencia de Conducir", 
         "codigo": 18 
         }, 
         { 
         "descripcion": "Enmienda de Depósito a Plazo Fijo", 
         "codigo": 20 
         }, 
         { 
         "descripcion": "Escritura", 
         "codigo": 21 
         }, 
         { 
         "descripcion": "Esquema de Pagos Variables", 
         "codigo": 22 
         }, 
         { 
         "descripcion": "Factura de Agua o Luz o Recibo de Alquiler", 
         "codigo": 23 
         }, 
         { 
         "descripcion": "Fianza Solidaria", 
         "codigo": 24 
         }, 
         { 
         "descripcion": "Fotocopia Cédula de Identidad - Codeudor", 
         "codigo": 25 
         }, 
         { 
         "descripcion": "Fotocopia Cédula Id. - Representante Legal S. A.", 
         "codigo": 26 
         }, 
         { 
         "descripcion": "Fotocopia Cédula de Identidad - Titular", 
         "codigo": 27 
         }, 
         { 
         "descripcion": "Fotocopia Pasaporte - Codeudor", 
         "codigo": 28 
         }, 
         { 
         "descripcion": "Fotocopia Pasaporte - Titular", 
         "codigo": 29 
         }, 
         { 
         "descripcion": "Pagaré", 
         "codigo": 31 
         }, 
         { 
         "descripcion": "Proforma de Agencia (cotización vehículo/equipos)", 
         "codigo": 33 
         }, 
         { 
         "descripcion": "Recibo de Abono en la Agencia", 
         "codigo": 35 
         }, 
         { 
         "descripcion": "Solicitud de Préstamo - Persona Natural", 
         "codigo": 36 
         }, 
         { 
         "descripcion": "Solicitud de crédito - P.Natural - Codeudor", 
         "codigo": 37 
         }, 
         { 
         "descripcion": "Verificación de World Compliance", 
         "codigo": 38 
         }, 
         { 
         "descripcion": "Poliza de Seguro de Vida", 
         "codigo": 39 
         }, 
         { 
         "descripcion": "Cédula de Identidad Vigente o Comprobante", 
         "codigo": 40 
         }, 
         { 
         "descripcion": "Firma", 
         "codigo": 90 
         }, 
         { 
         "descripcion": "Acta de Accionistas", 
         "codigo": 100 
         }, 
         { 
         "descripcion": "Acta de Junta Directiva", 
         "codigo": 101 
         }, 
         { 
         "descripcion": "Autorización de Desc Volunt, Bancos y Financieras", 
         "codigo": 102 
         }, 
         { 
         "descripcion": "Carta de Descuentos ACP Empleados", 
         "codigo": 105 
         }, 
         { 
         "descripcion": "Carta de Descuento Empleados de la CSS", 
         "codigo": 106 
         }, 
         { 
         "descripcion": "Carta de Descuento Empresa Privada", 
         "codigo": 108 
         }, 
         { 
         "descripcion": "Certificación de Registro Público", 
         "codigo": 111 
         } 
      ] 
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": 754,
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerTiposDeDocumentoDigital",
      "Requerimiento": "1",
      "Fecha": "2018-11-12",
      "Hora": "15:10:56",
      "Canal": "BTDIGITAL"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTipoDocumentoDigital  

### sBTTipoDocumentoDigital

::: center 
Los campos del tipo de dato estructurado sBTTipoDocumentoDigital son los siguientes:

Campo | Tipo | Comentarios
:--------- | :--------- | :---------
codigo | Long | Identificador de tipo de documento digital.
descripcion | String | Descripción del tipo de documento digital.
:::
<!-- CIERRA SDT -->
