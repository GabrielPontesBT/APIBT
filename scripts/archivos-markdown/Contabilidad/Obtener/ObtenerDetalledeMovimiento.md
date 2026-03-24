---
title: Obtener Detalle de Movimiento
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
::: note Método para obtener el detalle de un movimiento contable.

**Nombre publicación:** BTContabilidad.ObtenerDetalleMovimiento

**Programa:** RBTPG228

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
movimientoUId | Long | Identificador único de movimiento.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtDetalleAsiento | [sBTDetalleAsiento](#sbtdetalleasiento) | Datos del movimiento.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de movimiento.
30103 | No existe registro para el identificador único.
40001 | No existe el asiento.
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
      <bts:BTContabilidad.ObtenerDetalleMovimiento>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>IN</bts:Usuario>
            <bts:Token>12420485CD285A89A23FBE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:movimientoUId>8</bts:movimientoUId>
      </bts:BTContabilidad.ObtenerDetalleMovimiento>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerDetalleMovimiento' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	 "Btinreq": {
		"Canal": "BTDIGITAL",
		"Requerimiento": "1",
		"Usuario": "IN",
		"Token": "12420485CD285A89A23FBE",
		"Device": "MC"
	 },
	 "movimientoUId": "8"
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
      <BTContabilidad.ObtenerDetalleMovimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>IN</Usuario>
            <Token>12420485CD285A89A23FBE</Token>
            <Device>MC</Device>
         </Btinreq>
         <sdtDetalleAsiento>
            <sucursalId>1</sucursalId>
            <descripcion>CAJA, Traspaso entre Cuentas</descripcion>
            <usuarioIngreso>BANTOTAL</usuarioIngreso>
            <usuarioConfirmacion>BANTOTAL</usuarioConfirmacion>
            <fechaContabilizacion>2018-10-15</fechaContabilizacion>
            <hora>13:08:23</hora>
            <fechaValor>2018-10-15</fechaValor>
			<anulado>N</anulado>
			<movimientoUIdOriginal>8</movimientoUIdOriginal>
			<movimientoUIdAnulacion>0</movimientoUIdAnulacion>
            <ordinales>
               <sBTOrdinal>
                  <operacionUId>10189</operacionUId>
                  <idOperacionBT>0010000100021000000000000000002700003000000000000</idOperacionBT>
                  <debitoCredito>D</debitoCredito>
                  <importe>10000.00</importe>
                  <producto>
                     <productoUId>0</productoUId>
                     <nombre>CAJAS DE AHORRO, GENÉRICA</nombre>
                     <moneda>$</moneda>
                     <papel>$</papel>
                     <otrosConceptos></otrosConceptos>
                  </producto>
               </sBTOrdinal>
               <sBTOrdinal>
                  <operacionUId>10191</operacionUId>
                  <idOperacionBT>0010000100020222200000000000002700002000000000000</idOperacionBT>
                  <debitoCredito>C</debitoCredito>
                  <importe>25.00</importe>
                  <producto>
                     <productoUId>0</productoUId>
                     <nombre>CUENTA CORRIENTE, GENÉRICA</nombre>
                     <moneda>USD</moneda>
                     <papel>$</papel>
                     <otrosConceptos></otrosConceptos>
                  </producto>
               </sBTOrdinal>
               <sBTOrdinal>
                  <operacionUId>10192</operacionUId>
                  <idOperacionBT>0010000100496222200000000000000000000000000000000</idOperacionBT>
                  <debitoCredito>D</debitoCredito>
                  <importe>25.00</importe>
                  <producto>
                     <productoUId>0</productoUId>
                     <nombre>POSICION MONEDA EXTRANJERA, POSICION MONEDA EXTRANJERA</nombre>
                     <moneda>USD</moneda>
                     <papel>$</papel>
                     <otrosConceptos></otrosConceptos>
                  </producto>
               </sBTOrdinal>
               <sBTOrdinal>
                  <operacionUId>10193</operacionUId>
                  <idOperacionBT>0010000100497000000000000000000000000000000000000</idOperacionBT>
                  <debitoCredito>C</debitoCredito>
                  <importe>10000.00</importe>
                  <producto>
                     <productoUId>0</productoUId>
                     <nombre>VALUACION MONEDA EXTRANJERA, VALUACION MONEDA EXTRANJERA</nombre>
                     <moneda>$</moneda>
                     <papel>$</papel>
                  </producto>
               </sBTOrdinal>
            </ordinales>
         </sdtDetalleAsiento>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTContabilidad.ObtenerDetalleMovimiento</Servicio>
            <Fecha>2020-10-29</Fecha>
            <Hora>16:13:11</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7704</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTContabilidad.ObtenerDetalleMovimientoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "IN", 
      "Token": "12420485CD285A89A23FBE", 
      "Device": "MC" 
    }, 
    "sdtDetalleAsiento": { 
      "sucursalId": "1", 
      "descripcion": "CAJA, Traspaso entre Cuentas", 
      "usuarioIngreso": "BANTOTAL", 
      "usuarioConfirmacion": "BANTOTAL", 
      "fechaContabilizacion": "2018-10-15", 
      "hora": "13:08:23", 
      "fechaValor": "2018-10-15", 
	  "anulado": "N", 
      "movimientoUIdOriginal": "8", 
      "movimientoUIdAnulacion": "0", 
      "ordinales": { 
        "sBTOrdinal": [ 
          { 
            "operacionUId": "10189", 
            "idOperacionBT": "0010000100021000000000000000002700003000000000000", 
            "debitoCredito": "D", 
            "importe": "10000.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "CAJAS DE AHORRO, GENÉRICA", 
              "moneda": "$", 
              "papel": "$",
              "otrosConceptos":"" 
            } 
          }, 
          { 
            "operacionUId": "10191", 
            "idOperacionBT": "0010000100020222200000000000002700002000000000000", 
            "debitoCredito": "C", 
            "importe": "25.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "CUENTA CORRIENTE, GENÉRICA", 
              "moneda": "USD", 
              "papel": "$",
              "otrosConceptos":"" 
            } 
          }, 
          { 
            "operacionUId": "10192", 
            "idOperacionBT": "0010000100496222200000000000000000000000000000000", 
            "debitoCredito": "D", 
            "importe": "25.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "POSICION MONEDA EXTRANJERA, POSICION MONEDA EXTRANJERA", 
              "moneda": "USD", 
              "papel": "$",
              "otrosConceptos":"" 
            } 
          }, 
          { 
            "operacionUId": "10193", 
            "idOperacionBT": "0010000100497000000000000000000000000000000000000", 
            "debitoCredito": "C", 
            "importe": "10000.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "VALUACION MONEDA EXTRANJERA, VALUACION MONEDA EXTRANJERA", 
              "moneda": "$", 
              "papel": "$",
              "otrosConceptos":"" 
            } 
          } 
        ] 
      } 
    }, 
    "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTContabilidad.ObtenerDetalleMovimiento", 
      "Fecha": "2020-10-29", 
      "Hora": "16:13:11", 
      "Requerimiento": "1", 
      "Numero": "7704", 
      "Estado": "OK" 
    } 
  }
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDetalleAsiento  

### sBTDetalleAsiento

::: center 
Los campos del tipo de dato estructurado sBTDetalleAsiento son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
anulado | String | ¿Anulado? (S/N) 
descripcion | String | Descripción del movimiento. 
fechaContabilizacion | Date | Fecha de contabilización. 
fechaValor | Date | Fecha valor. 
hora | String | Hora de contabilización. 
movimientoUIdAnulacion | Long | Identificador único de movimiento de anulación. 
movimientoUIdOriginal  | Long | Identificador único de movimiento original. 
ordinales | [sBTOrdinal](#sbtordinal) | Listado de ordinales del movimiento. 
sucursalId | Int | Identificador de sucursal. 
usuarioConfirmacion | String | Usuario de confirmación del movimiento. 
usuarioIngreso | String | Usuario de ingreso del movimiento. 
 
### sBTOrdinal

::: center 
Los campos del tipo de dato estructurado sBTOrdinal son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
debitoCredito | String | ¿Es débito o crédito? (Crédito: 'C', Débito: 'D'). 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
importe | Double | Importe. 
operacionUId | Long | Identificador único de operación. 
producto | [sBTProducto](#sbtproducto) | Datos del Producto. 

### sBTProducto

::: center 
Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
moneda | String | Símbolo de la moneda. 
nombre | String | Nombre del producto. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Datos de otros conceptos.
papel | String | Símbolo del papel. 
productoUId | Long | Identificador único de producto. 

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