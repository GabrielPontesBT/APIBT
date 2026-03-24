---
title: Obtener Detalle de Cancelación Total
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
::: note Método para obtener el detalle de la cancelación total de un préstamo.

**Nombre publicación:** BTPrestamos.ObtenerDetalleCancelacionTotal

**Programa:** RBTPG539

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de la operación.
fecha | Date | Fecha.
perdonaIntereses | String | ¿Perdona intereses? (S/N).
cancelacionTotal | String | ¿Es cancelación total? (S/N).
expresadoEn | String | [M-Moneda / E-Especie].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtConceptosPrestamo | [sBTConceptosPrestamo](#sbtconceptosprestamo) | Datos de la cancelación total del préstamo.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de operación.
30002 | No se recuperó préstamo para el identificador: [Número de Identificador].
30003 | No se recibió el modo expresado.
30004 | El valor de expresadoEn no es correcto.
30005 | No se recibió si es cancelacion total.
30006 | El valor de cancelacionTotal no es correcto.
30007 | No se recibió si se perdona intereses.
30008 | El valor de perdonaIntereses no es correcto.
40001 | La Fecha para Consultas es anterior a la de la Operación.
40002 | La Operación no es válida para la Solicitud realizada.
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
      <bts:BTPrestamos.ObtenerDetalleCancelacionTotal>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>b6a06c447cCD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>56</bts:operacionUId>
         <bts:fecha></bts:fecha>
         <bts:perdonaIntereses>S</bts:perdonaIntereses>
         <bts:cancelacionTotal>S</bts:cancelacionTotal>
         <bts:expresadoEn>M</bts:expresadoEn>
      </bts:BTPrestamos.ObtenerDetalleCancelacionTotal>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleCancelacionTotal' \
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
    "operacionUId": 227,
    "fecha": "",
    "perdonaIntereses": "S",
    "cancelacionTotal": "S",
    "expresadoEn": "M"
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
      <BTPrestamos.ObtenerDetalleCancelacionTotalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b6a06c447cCD285A89A23FBE</Token>
         </Btinreq>
         <sdtConceptosPrestamo>
            <totalSeguros>0.00</totalSeguros>
            <fecha>2024-01-06</fecha>
            <otrosSeguros>0.00</otrosSeguros>
            <detalleSeguros></detalleSeguros>
            <detalleConceptos>
               <sBTConcepto>
                  <texto>Impuesto Canon</texto>
                  <valor>10676.119999999999</valor>
                  <concepto>IMPUESTO_CANON</concepto>
               </sBTConcepto>
               <sBTConcepto>
                  <texto>Total Interes Punitorio</texto>
                  <valor>3231.39</valor>
                  <concepto>PUNITORIO</concepto>
               </sBTConcepto>
            </detalleConceptos>
            <totalComisiones>0.00</totalComisiones>
            <intereses>656.41</intereses>
            <precio>0.00</precio>
            <impuestoComision>0.00</impuestoComision>
            <porcentaje>0.00</porcentaje>
            <otrosConceptos>0.00</otrosConceptos>
            <impuestoInteres>2169.47</impuestoInteres>
            <impuestoMora>2174.47</impuestoMora>
            <tipoCambio>1.00</tipoCambio>
            <interesMora>7123.25</interesMora>
            <deudaTotal>25429.44</deudaTotal>
            <capital>10074.45</capital>
            <seguroIncendio>0.00</seguroIncendio>
            <comisionMora>0.00</comisionMora>
            <impuestoComisionMora>0.00</impuestoComisionMora>
            <seguroVehicular>0.00</seguroVehicular>
            <perdon>0.00</perdon>
            <totalImpuestos>4343.94</totalImpuestos>
            <comisionesCuota>0.00</comisionesCuota>
            <seguroVida>0.00</seguroVida>
            <signoImportes>$</signoImportes>
         </sdtConceptosPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>269</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDetalleCancelacionTotal</Servicio>
            <Fecha>2024-05-07</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>12:42:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleCancelacionTotalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "sdtConceptosPrestamo": {
    "totalSeguros": 0,
    "fecha": "2024-01-06",
    "otrosSeguros": 0,
    "detalleSeguros": "",
    "detalleConceptos": {
      "sBTConcepto": [
        {
          "texto": "Impuesto Canon",
          "valor": 10676.119999999999,
          "concepto": "IMPUESTO_CANON"
        },
        {
          "texto": "Total Interes Punitorio",
          "valor": 3231.39,
          "concepto": "PUNITORIO"
        }
      ]
    },
    "totalComisiones": 0,
    "intereses": 656.41,
    "precio": 0,
    "impuestoComision": 0,
    "porcentaje": 0,
    "otrosConceptos": 0,
    "impuestoInteres": 2169.47,
    "impuestoMora": 2174.47,
    "tipoCambio": 1,
    "interesMora": 7123.25,
    "deudaTotal": 25429.44,
    "capital": 10074.45,
    "seguroIncendio": 0,
    "comisionMora": 0,
    "impuestoComisionMora": 0,
    "seguroVehicular": 0,
    "perdon": 0,
    "totalImpuestos": 4343.94,
    "comisionesCuota": 0,
    "seguroVida": 0,
    "signoImportes": "$"
    },
    "Erroresnegocio": "",
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerDetalleCancelacionTotal",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTConceptosPrestamo  

### sBTConceptosPrestamo

::: center 
Los campos del tipo de dato estructurado sBTConceptosPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
capital | Double | Capital.
comisionesCuota | Double | Total de comisiones de las cuotas. 
comisionMora | Double | Comisión de mora.
detalleConceptos | [sBTConcepto](#sbtconcepto) | Detalle de los conceptos adicionales.
detalleSeguros | [sBTConcepto](#sbtconcepto) | Listado de los seguros.
deudaTotal | Double | Deuda total.
fecha | Date | Fecha.
impuestoComision | Double | Impuesto de la comisión.
impuestoComisionMora | Double | Impuesto de comisión de mora.
impuestoInteres | Double | Impuesto de intereses.
impuestoMora | Double | Impuesto de mora.
intereses | Double | Intereses.
interesMora | Double | Interés de mora.
otrosConceptos | Double | Total de los conceptos adicionales.
otrosSeguros | Double | Total de los otros seguros.
perdon | Double | Perdón.
porcentaje | Double | Porcentaje.
precio | Double | Precio.
seguroIncendio | Double | Seguro de incendio.
seguroVehicular | Double | Seguro vehicular.
seguroVida | Double | Seguro de vida.
signoImportes | String | Signo de importe.
tipoCambio | Double | Tipo de cambio.
totalComisiones | Double | Total de las comisiones.
totalImpuestos | Double | Total de impuestos.
totalSeguros | Double | Total de seguros.

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Date | Importe.
:::
<!-- CIERRA SDT -->