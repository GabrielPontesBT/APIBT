---
title: Obtener Datos del Próximo Vencimiento
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
::: note Método para obtener los datos de próximo vencimiento de cuota.

**Nombre publicación:** BTPrestamos.ObtenerDatosProxVencimiento

**Programa:** RBTPG526

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de préstamo.
fechaConsulta | Date | Fecha de consulta.
modoConsulta | String | [Hidden: Valor fijo '' para este método].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtProxVencimiento | [sBTProximoVto](#sbtproximovto) | Datos del próximo vencimiento del préstamo.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de operación.
30002 | No se recuperó préstamo para el identificador: [Número de Identificador].
30006 | La Fecha para Consultas es anterior a la de la Operación.
30007 | La Operación no es válida para la Solicitud realizada.
30008 | La Operación se encuentra cancelada.
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
      <bts:BTPrestamos.ObtenerDatosProxVencimiento>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>DF1F942C6EC60E8B95BBEA69</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>9</bts:operacionUId>
         <bts:fechaConsulta>2020-08-09</bts:fechaConsulta>
      </bts:BTPrestamos.ObtenerDatosProxVencimiento>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDatosProxVencimiento' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "INSTALADOR",
        "Token": "DF1F942C6EC60E8B95BBEA69"
    },
    "operacionUId": 9,
    "fechaConsulta": "2020-08-09"
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
      <BTPrestamos.ObtenerDatosProxVencimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <sdtProxVencimiento>
            <otrosConceptos></otrosConceptos>
            <fechaPrimerIncumplimiento>2020-05-09</fechaPrimerIncumplimiento>
            <deudaVencida>41395.15</deudaVencida>
            <cantCuoImpagas>12</cantCuoImpagas>
            <monto>41395.15</monto>
            <fechaProxVencimiento>2020-08-09</fechaProxVencimiento>
            <cantCuoPagas>0</cantCuoPagas>
            <fechaUltPago/>
            <cantCuoImpVenc>4</cantCuoImpVenc>
            <cuotaVigente>0.00</cuotaVigente>
         </sdtProxVencimiento>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16849</Numero>
            <Servicio>BTPrestamos.ObtenerDatosProxVencimiento</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-26</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>12:27:02</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDatosProxVencimientoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Device": "GZ",
    "Usuario": "INSTALADOR",
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Token": "DF1F942C6EC60E8B95BBEA69"
  },
  "sdtProxVencimiento": {
    "fechaPrimerIncumplimiento": "2020-05-09",
    "deudaVencida": 41395.15,
    "cantCuoImpagas": 12,
    "monto": 41395.15,
    "fechaProxVencimiento": "2020-08-09",
    "cantCuoPagas": 0,
    "fechaUltPago": "",
    "cantCuoImpVenc": 4,
    "cuotaVigente": 0,
    "otrosConceptos": {
      "concepto": "",
      "texto": "",
      "valor": 0
    }
  },
  "Erroresnegocio": {
    "BTErrorNegocio": []
  },
  "Btoutreq": {
    "Numero": 16849,
    "Servicio": "BTPrestamos.ObtenerDatosProxVencimiento",
    "Estado": "OK",
    "Fecha": "2023-10-26",
    "Requerimiento": 0,
    "Hora": "12:27:02",
    "Canal": "BTDIGITAL"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTProximoVto

### sBTProximoVto

::: center
Los campos del tipo de dato estructurado sBTProximoVto son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
cantCuoImpVenc | Int | Cantidad de cuotas impagas vencidas.
cantCuoPagas | Int | Cantidad de cuotas pagas.
cuotaVigente | Decimal | Cuota vigente.
deudaVencida | Decimal | Deuda vencida.
fechaPrimerIncumplimiento | Date | Fecha de primer incumplimiento.
fechaProxVencimiento | Date | Identificador de información adicional.
fechaUltPago | Date | Fecha de último pago.
monto | Decimal | Valor de información adicional.
otrosConceptos | [sBTConcepto](#sbtconcepto) | Datos de otros conceptos.
:::

::: details sBTConcepto

### sBTConcepto

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.
:::

<!-- CIERRA SDT -->

