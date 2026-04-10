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
::: note Método para obtener un listado de los productos de cuentas corrientes.

**Nombre publicación:** BTCuentasCorrientes.ObtenerProductos

**Programa:** RBTPG055

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
sdtProductos | [sBTProducto](#sbtproducto) | Listado de productos.

@tab Errores

No aplica.
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
      <bts:BTCuentasCorrientes.ObtenerProductos>
         <bts:Btinreq>             
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTCuentasCorrientes.ObtenerProductos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerProductos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: de821bcc-38ae-1793-b380-8ebc32eba879' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 9
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
      <BTCuentasCorrientes.ObtenerProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductos>
            <sBTProducto>
               <productoUId>41</productoUId>
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
               <moneda>$</moneda>
               <papel/>
               <otrosConceptos/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>42</productoUId>
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
               <moneda>USD</moneda>
               <papel/>
               <otrosConceptos/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>43</productoUId>
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Jurídica</nombre>
               <moneda>$</moneda>
               <papel/>
               <otrosConceptos/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>44</productoUId>
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Jurídica</nombre>
               <moneda>USD</moneda>
               <papel/>
               <otrosConceptos/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>45</productoUId>
               <nombre>CUENTAS VISTA, Depósitos Vista P. Físicas</nombre>
               <moneda>$</moneda>
               <papel/>
               <otrosConceptos/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>46</productoUId>
               <nombre>CUENTAS VISTA, Depósitos Vista P. Físicas</nombre>
               <moneda>USD</moneda>
               <papel/>
               <otrosConceptos/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>47</productoUId>
               <nombre>CUENTAS VISTA, Depósitos Vista P. Jurídicas</nombre>
               <moneda>$</moneda>
               <papel/>
               <otrosConceptos/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>48</productoUId>
               <nombre>CUENTAS VISTA, Depósitos Vista P. Jurídicas</nombre>
               <moneda>USD</moneda>
               <papel/>
               <otrosConceptos/>
            </sBTProducto>
         </sdtProductos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>932</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.ObtenerProductos</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:37:02</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerProductosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtProductos": {
        "sBTProducto": [
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "41",
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "42",
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "43",
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Jurídica"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "44",
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Jurídica"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "45",
                "nombre": "CUENTAS VISTA, Depósitos Vista P. Físicas"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "46",
                "nombre": "CUENTAS VISTA, Depósitos Vista P. Físicas"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "47",
                "nombre": "CUENTAS VISTA, Depósitos Vista P. Jurídicas"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "48",
                "nombre": "CUENTAS VISTA, Depósitos Vista P. Jurídicas"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "933",
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.ObtenerProductos",
        "Fecha": "2017-12-21",
        "Requerimiento": 1,
        "Hora": "17:37:18",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTProducto

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
:::
<!-- CIERRA SDT -->