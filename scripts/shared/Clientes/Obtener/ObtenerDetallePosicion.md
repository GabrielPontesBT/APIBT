---
title: Obtener Detalle de Posición
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
::: note Método para obtener el detalle de una posición de los títulos de un cliente.

**Nombre publicación:** BTClientes.ObtenerDetallePosicion

**Programa:** RBTPG540

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único del cliente.
monedaId | Short | Identificador de la moneda.
fecha | Date | Fecha.
identificadorClaseActivo | Int | Identificador de la clase del activo.
numeradorConsulta | Int | Numerador de la consulta.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
totalGeneral | Double | Total general.
sdtDetalleClaseActivo | [sBTDetalleClaseActivo](#sbtdetalleclaseactivo) | Datos del detalle de la clase del activo.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente.
30002 | Debe ingresar la fecha.
30003 | No se recibió el identificador de la clase de activo.
30004 | No se recibió el numerador de la consulta.
30013 | No existe registro con la cuenta indicada.
40001 | No se recuperó el componente del portafolio para el identificador: [Número de Identificador].
40002 | No se encontraron datos de la posición del cliente, ejecutar el servicio de consultar posición del cliente.
40021 | Error - No hay precio para el papel [Número de Identificador].
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
      <bts:BTClientes.ObtenerDetallePosicion>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>E362E52FED059AA3BF86A6E3</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>341</bts:clienteUId>
         <bts:monedaId>2222</bts:monedaId>
         <bts:fecha>2020-08-06</bts:fecha>
         <bts:identificadorClaseActivo>10</bts:identificadorClaseActivo>
         <bts:numeradorConsulta>12928</bts:numeradorConsulta>
      </bts:BTClientes.ObtenerDetallePosicion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDetallePosicion' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "BANTOTAL",
        "Token": "E362E52FED059AA3BF86A6E3"
    },
    "clienteUId": 341,
    "monedaId": 2222,
    "fecha": "2020-08-06",
    "identificadorClaseActivo": 10,
    "numeradorConsulta": 12928
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
      <BTClientes.ObtenerDetallePosicionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>BANTOTAL</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>E362E52FED059AA3BF86A6E3</Token>
         </Btinreq>
         <totalGeneral>527406.43</totalGeneral>
         <sdtDetalleClaseActivo>
            <sBTDetalleClaseActivo>
               <nombreElemento>Depósitos a plazo fijo</nombreElemento>
               <datosSinManejoEspecie>
                  <sBTDatoSinManejoEspecie>
                     <signo>$</signo>
                     <monedaId>0</monedaId>
                     <total>5263.16</total>
                     <cantidadOperaciones>2</cantidadOperaciones>
                     <totalOrigen>200000.00</totalOrigen>
                  </sBTDatoSinManejoEspecie>
               </datosSinManejoEspecie>
               <porcentajeComposicion>1.00</porcentajeComposicion>
               <datosConManejoEspecie></datosConManejoEspecie>
               <total>5263.16</total>
            </sBTDetalleClaseActivo>
            <sBTDetalleClaseActivo>
               <nombreElemento>Cuenta Corrientes</nombreElemento>
               <datosSinManejoEspecie>
                  <sBTDatoSinManejoEspecie>
                     <signo>USD</signo>
                     <monedaId>2222</monedaId>
                     <total>496723.14</total>
                     <cantidadOperaciones>2</cantidadOperaciones>
                     <totalOrigen>522143.27</totalOrigen>
                  </sBTDatoSinManejoEspecie>
               </datosSinManejoEspecie>
               <porcentajeComposicion>99.00</porcentajeComposicion>
               <datosConManejoEspecie></datosConManejoEspecie>
               <total>522143.27</total>
            </sBTDetalleClaseActivo>
         </sdtDetalleClaseActivo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-08</Fecha>
            <Hora>12:46:22</Hora>
            <Numero>744</Numero>
            <Servicio>BTClientes.ObtenerDetallePosicion</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerDetallePosicionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Canal": "BTDIGITAL",
    "Usuario": "BANTOTAL",
    "Device": "GZ",
    "Requerimiento": 0,
    "Token": "E362E52FED059AA3BF86A6E3"
  },
  "totalGeneral": 527406.43,
  "sdtDetalleClaseActivo": {
    "sBTDetalleClaseActivo": [
      {
        "nombreElemento": "Depósitos a plazo fijo",
        "datosSinManejoEspecie": {
          "sBTDatoSinManejoEspecie": {
            "signo": "$",
            "monedaId": 0,
            "total": 5263.16,
            "cantidadOperaciones": 2,
            "totalOrigen": 200000
          }
        },
        "porcentajeComposicion": 1,
        "total": 5263.16,
        "datosConManejoEspecie": {
          "descripcion": "",
          "papelId": 0,
          "resultado": 0,
          "totalEfectivo": 0,
          "totalNominal": 0
        }
      },
      {
        "nombreElemento": "Cuenta Corrientes",
        "datosSinManejoEspecie": {
          "sBTDatoSinManejoEspecie": {
            "signo": "USD",
            "monedaId": 2222,
            "total": 496723.14,
            "cantidadOperaciones": 2,
            "totalOrigen": 522143.27
          }
        },
        "porcentajeComposicion": 99,
        "total": 522143.27,
        "datosConManejoEspecie": {
          "descripcion": "",
          "papelId": 0,
          "resultado": 0,
          "totalEfectivo": 0,
          "totalNominal": 0
        }
      }
    ]
  },
  "Erroresnegocio": {
    "BTErrorNegocio": []
  },
  "Btoutreq": {
    "Estado": "OK",
    "Fecha": "2024-10-08",
    "Hora": "12:46:22",
    "Numero": 744,
    "Servicio": "BTClientes.ObtenerDetallePosicion",
    "Requerimiento": 0,
    "Canal": "BTDIGITAL"
  }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDetalleClaseActivo  

### sBTDetalleClaseActivo

::: center 
Los campos del tipo de dato estructurado sBTDetalleClaseActivo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
datosConManejoEspecie | [sBTDatoConManejoEspecie](#sbtdatoconmanejoespecie) | Listado de datos con manejo de especie.
datosSinManejoEspecie | [sBTDatoSinManejoEspecie](#sbtdatosinmanejoespecie) | Listado de datos sin manejo de especie.
nombreElemento | String | Nombre del elemento del detalle. 
porcentajeComposicion | Double | Porcentaje de composición del elemento del detalle.
total | Double | Total del elemento del detalle.
:::

::: details sBTDatoConManejoEspecie

### sBTDatoConManejoEspecie
 
Los campos del tipo de dato estructurado sBTDatoConManejoEspecie son los siguientes:

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción.
papelId | Int | Identificador del papel.
resultado | Double | Resultado.
totalEfectivo | Double | Total en efectivo.
totalNominal | Double | Total nominal.
:::

::: details sBTDatoSinManejoEspecie

### sBTDatoSinManejoEspecie
 
Los campos del tipo de dato estructurado sBTDatoSinManejoEspecie son los siguientes:

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cantidadOperaciones | Int | Cantidad de operaciones. 
monedaId | Short | Identificador de la moneda.
signo | String | Signo de la moneda.
total | Double | Total.
totalOrigen | Double | Total del origen.
:::

<!-- CIERRA SDT -->

