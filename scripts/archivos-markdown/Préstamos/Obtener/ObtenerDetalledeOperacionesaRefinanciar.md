---
title: Obtener Detalle de Operaciones a Refinanciar
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

<!-- ABRE LOS DATOS DEL MÉTODO -->
::: note Método para obtener detalle de las operaciones a refinanciar.

**Nombre publicación:** BTPrestamos.ObtenerDetalleOperacionesARefinanciar

**Programa:** RBTPG547

**Global/País:** Global
:::
<!-- CIERRA LOS DATOS DEL MÉTODO -->

<!-- ABRE LA TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtOperacionesARefinanciar | [sBTPrestamos](#sbtprestamos) | Datos de las operaciones a refinanciar.
productoUId | Long | Identificador único del producto.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
simulacionUId | Long | Identificador único de la simulación.
sdtPrestamosACancelar | [sBTPrestamoACancelar](#sbtprestamoacancelar) | Listado de préstamos a cancelar.
sdtConceptosPrestamo | [sBTConceptosPrestamo](#sbtconceptosprestamo) | Conceptos del préstamo.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente.
30002 | No se recuperó la cuenta para el Identificador: [Número de Identificador].
30003 | No se recibió el identificador de producto.
30004 | No se recuperó el producto para el Identificador: [Número de Identificador].
30005 | No se indicaron operaciones a refinanciar.
30013 | El producto indicado es incorrecto
:::
<!-- CIERRA LA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetalleOperacionesARefinanciar>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>A53FB4EFAB131F3431674966</bts:Token>
         </bts:Btinreq>
         <bts:sdtOperacionesARefinanciar>
            <bts:clienteUId>2</bts:clienteUId>
            <bts:fecha></bts:fecha>
            <bts:operaciones>
               <bts:Long>66322</bts:Long>
            </bts:operaciones>
         </bts:sdtOperacionesARefinanciar>
         <bts:productoUId>60</bts:productoUId>
      </bts:BTPrestamos.ObtenerDetalleOperacionesARefinanciar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
   'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleOperacionesARefinanciar' \
   -H 'cache-control: no-cache' \
   -H 'content-type: application/json' \
   -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
   -d '{
   "Btinreq": {
      "Requerimiento": 0,
      "Canal": "BTDIGITAL",
      "Device": "GZ",
      "Usuario": "Instalador",
      "Token": "8e3a8ef2dd99865B3A2E76CF"
   },
   "sdtOperacionesARefinanciar": {
      "clienteUId": 2,
      "fecha": "",
      "operaciones": {
      "Long": 66322
      }
   },
   "productoUId": 60
}'
```
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->
:::

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDetalleOperacionesARefinanciarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>A53FB4EFAB131F3431674966</Token>
         </Btinreq>
         <simulacionUId>21879</simulacionUId>
         <sdtPrestamosACancelar>
            <sBTPrestamoACancelar>
               <otrosConceptos>0.0</otrosConceptos>
               <fechaValor>2023-02-17</fechaValor>
               <capital>0.0</capital>
               <intereses>0.0</intereses>
               <totalComisiones>0.0</totalComisiones>
               <deudaTotal>0.0</deudaTotal>
               <operacionUId>66322</operacionUId>
               <totalSeguros>0.0</totalSeguros>
               <interesMora>0.0</interesMora>
               <fechaUltimoPago/>
               <fechaVencimiento/>
               <diasMora>0</diasMora>
               <producto>
                  <moneda>$</moneda>
                  <papel>$</papel>
                  <productoUId>60</productoUId>
                  <nombre>PRESTAMO VEHICULAR, Credito Convencional</nombre>
               </producto>
               <detalleConceptos></detalleConceptos>
               <totalImpuestos>0.0</totalImpuestos>
            </sBTPrestamoACancelar>
         </sdtPrestamosACancelar>
         <sdtConceptosPrestamo>
            <totalSeguros>0.0</totalSeguros>
            <otrosSeguros>0.0</otrosSeguros>
            <detalleSeguros></detalleSeguros>
            <detalleConceptos></detalleConceptos>
            <totalComisiones>0.0</totalComisiones>
            <intereses>0.0</intereses>
            <precio>0.0</precio>
            <impuestoComision>0.0</impuestoComision>
            <otrosConceptos>0.0</otrosConceptos>
            <impuestoInteres>0.0</impuestoInteres>
            <impuestoMora>0.0</impuestoMora>
            <tipoCambio>0.0</tipoCambio>
            <interesMora>0.0</interesMora>
            <deudaTotal>0.0</deudaTotal>
            <capital>0.0</capital>
            <seguroIncendio>0.0</seguroIncendio>
            <comisionMora>0.0</comisionMora>
            <impuestoComisionMora>0.0</impuestoComisionMora>
            <seguroVehicular>0.0</seguroVehicular>
            <totalImpuestos>0.0</totalImpuestos>
            <comisionesCuota>0.0</comisionesCuota>
            <seguroVida>0.0</seguroVida>
            <signoImportes/>
         </sdtConceptosPrestamo>
         <Erroresnegocio/>
         <Btoutreq>
            <Numero>733122</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDetalleOperacionesARefinanciar</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2024-05-23</Fecha>
            <Hora>17:11:20</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleOperacionesARefinanciarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": "GP",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "c2cfd09eff4A8B5C60A82434"
   },
   "simulacionUId": 21879,
   "sdtPrestamosACancelar": {
      "sBTPrestamoACancelar": {
      "otrosConceptos": 0,
      "fechaValor": "2023-02-17",
      "capital": 0,
      "intereses": 0,
      "totalComisiones": 0,
      "deudaTotal": 0,
      "operacionUId": 66322,
      "totalSeguros": 0,
      "interesMora": 0,
      "fechaUltimoPago": "",
      "fechaVencimiento": "",
      "diasMora": 0,
      "producto": {
         "moneda": "$",
         "papel": "$",
         "productoUId": 60,
         "nombre": "PRESTAMO VEHICULAR, Credito Convencional"
      },
      "detalleConceptos": "",
      "totalImpuestos": 0
      }
   },
   "sdtConceptosPrestamo": {
      "totalSeguros": 0,
      "otrosSeguros": 0,
      "detalleSeguros": "",
      "detalleConceptos": "",
      "totalComisiones": 0,
      "intereses": 0,
      "precio": 0,
      "impuestoComision": 0,
      "otrosConceptos": 0,
      "impuestoInteres": 0,
      "impuestoMora": 0,
      "tipoCambio": 0,
      "interesMora": 0,
      "deudaTotal": 0,
      "capital": 0,
      "seguroIncendio": 0,
      "comisionMora": 0,
      "impuestoComisionMora": 0,
      "seguroVehicular": 0,
      "totalImpuestos": 0,
      "comisionesCuota": 0,
      "seguroVida": 0,
      "signoImportes": ""
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Canal": "BTDIGITAL",
      "Servicio": "BTPrestamos.ObtenerDetalleOperacionesARefinanciar",
      "Fecha": "2021-03-18",
      "Hora": "10:03:41",
      "Requerimiento": 1,
      "Numero": 8032,
      "Estado": "OK"
   }
}
         
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPrestamos

### sBTPrestamos

::: center 
Los campos del tipo de dato estructurado sBTPrestamos son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :---------
clienteUId | Long | Identificador único del cliente.
fecha | Date | Fecha.
operaciones | Long | Listado de operaciones.
:::

::: details sBTPrestamoACancelar

### sBTPrestamoACancelar

::: center
Los campos del tipo de dato estructurado sBTPrestamoACancelar son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :---------
capital | Double | Capital.
detalleConceptos | [sBTConcepto](#sbtconcepto) | Listado de detalles concepto.
deudaTotal | Double | Deuda total.
diasMora | Int | Días de mora.
fechaUltimoPago | Date | Fecha del último pago.
fechaValor | Date | Fecha valor de la operación.
fechaVencimiento | Date | Fecha de vencimiento.
intereses | Double | Total de intereses.
interesMora | Double | Interés mora.
operacionUId | Long | Identificador único de la operación.
otrosConceptos | Double | Total de otros conceptos.
producto | [sBTProducto](#sbtproducto) | Datos del producto.
totalComisiones | Double | Total de comisiones.
totalImpuestos | Double | Total de impuestos.
totalSeguros | Double | Total de seguros.

### sBTConcepto

::: center
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :---------
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.

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

::: details sBTConceptosPrestamo

### sBTConceptosPrestamo

::: center 
Los campos del tipo de dato estructurado sBTConceptosPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :---------
capital | Double | Capital.
comisionesCuota | Double | Comisiones de las cuotas.
comisionMora | Double | Comisión de mora.
detalleConceptos | sBTConcepto | Listado del detalle de los conceptos.
detalleSeguros | sBTConcepto | Listado del detalle de los seguros.
deudaTotal | Double | Deuda total.
impuestoComision | Double | Total de impuestos de comisión. 
impuestoComisionMora | Double | Impuesto de comisión de mora.
impuestoInteres | Double | Total de impuesto de intereses.
impuestoMora | Double | Impuesto de mora.
intereses | Double | Total de intereses.
interesMora | Double | Interés de mora.
otrosConceptos | Double | Total de otros conceptos.
otrosSeguros | Double | Total de otros seguros.
precio | Double | Precio.
seguroIncendio | Double | Seguro de incendio.
seguroVehicular | Double | Seguro vehicular.
seguroVida | Double | Seguro de vida.
signoImportes | String | Signo de importes.
tipoCambio | Double | Tipo de cambio.
totalComisiones | Double | Total de comisiones.
totalImpuestos | Double | Total de impuestos.
totalSeguros | Double | Total de seguros.
:::
<!-- CIERRA SDT -->