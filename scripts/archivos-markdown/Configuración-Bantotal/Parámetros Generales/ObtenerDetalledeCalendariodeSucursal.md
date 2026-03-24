---
title: Obtener Detalle de Calendario de Sucursal
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
::: note Método para obtener el detalle de los días del calendario de una determinada sucursal.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerDetalleCalendarioDeSucursal

**Programa:** RBTPG323

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sucursalId | Int | Identificador de la sucursal.
fechaInicio | Date | Fecha inicio de la consulta.
fechaFin | Date | Fecha fin de la consulta.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
calendarioId | Short | Identificador de calendario
descripcionCalendario | String | Descripción del calendario
sdtDetalleCalendario | [sBTDiaCalendario](#sbtdiacalendario) | Detalle de la consulta del calendario.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se encontró un calendario para la sucursal indicada.
30002 | No se recibió fecha de inicio.
30003 | No se recibió fecha de fin.
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
      <bts:BTConfiguracionBantotal.ObtenerDetalleCalendarioDeSucursal>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1749872094F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:sucursalId>1</bts:sucursalId>
         <bts:fechaInicio>2020-11-11</bts:fechaInicio>
         <bts:fechaFin>2020-12-12</bts:fechaFin>
      </bts:BTConfiguracionBantotal.ObtenerDetalleCalendarioDeSucursal>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerDetalleCalendarioDeSucursal' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"bts:Btinreq": {
	  "bts:Canal": "BTDIGITAL",
	  "bts:Requerimiento": "1",
	  "bts:Usuario": "BANTOTAL",
	  "bts:Token": "1749872094F955E77534D3E0",
	  "bts:Device": "AC"
	},
	"sucursalId": 1,
	"fechaInicio": "2020-11-11",
	"fechaFin": "2020-12-12"
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
      <BTConfiguracionBantotal.ObtenerDetalleCalendarioDeSucursalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1749872094F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <calendarioId>1</calendarioId>
         <descripcionCalendario>Calendario 1</descripcionCalendario>
         <sdtDetalleCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-11</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-12</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-13</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-14</fecha>
               <habil>N</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-15</fecha>
               <habil>N</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-16</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-17</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-18</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-19</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-20</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-21</fecha>
               <habil>N</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-22</fecha>
               <habil>N</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-23</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-24</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-25</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-26</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-27</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-28</fecha>
               <habil>N</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-29</fecha>
               <habil>N</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-11-30</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-12-01</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-12-02</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-12-03</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-12-04</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-12-05</fecha>
               <habil>N</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-12-06</fecha>
               <habil>N</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-12-07</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-12-08</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-12-09</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-12-10</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-12-11</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-12-12</fecha>
               <habil>N</habil>
            </sBTDiaCalendario>
         </sdtDetalleCalendario>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTConfiguracionBantotal.ObtenerDetalleCalendarioDeSucursal</Servicio>
            <Fecha>2021-03-15</Fecha>
            <Hora>14:29:49</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8025</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerDetalleCalendarioDeSucursalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
 {
	"Btinreq": {
	  "Device": "AC",
	  "Usuario": "INSTALADOR",
	  "Requerimiento": "1",
	  "Canal": "BTDIGITAL",
	  "Token": "120320211555340000388219"
	},
	"calendarioId": "1",
	"descripcionCalendario": "Calendario 1",
	"sdtDetalleCalendario": {
	  "sBTDiaCalendario": [
        {
          "fecha": "2020-11-11",
          "habil": "S"
        },
        {
          "fecha": "2020-11-12",
          "habil": "S"
        },
        {
          "fecha": "2020-11-13",
          "habil": "S"
        },
        {
          "fecha": "2020-11-14",
          "habil": "N"
        },
        {
          "fecha": "2020-11-15",
          "habil": "N"
        },
        {
          "fecha": "2020-11-16",
          "habil": "S"
        },
        {
          "fecha": "2020-11-17",
          "habil": "S"
        },
        {
          "fecha": "2020-11-18",
          "habil": "S"
        },
        {
          "fecha": "2020-11-19",
          "habil": "S"
        },
        {
          "fecha": "2020-11-20",
          "habil": "S"
        },
        {
          "fecha": "2020-11-21",
          "habil": "N"
        },
        {
          "fecha": "2020-11-22",
          "habil": "N"
        },
        {
          "fecha": "2020-11-23",
          "habil": "S"
        },
        {
          "fecha": "2020-11-24",
          "habil": "S"
        },
        {
          "fecha": "2020-11-25",
          "habil": "S"
        },
        {
          "fecha": "2020-11-26",
          "habil": "S"
        },
        {
          "fecha": "2020-11-27",
          "habil": "S"
        },
        {
          "fecha": "2020-11-28",
          "habil": "N"
        },
        {
          "fecha": "2020-11-29",
          "habil": "N"
        },
        {
          "fecha": "2020-11-30",
          "habil": "S"
        },
        {
          "fecha": "2020-12-01",
          "habil": "S"
        },
        {
          "fecha": "2020-12-02",
          "habil": "S"
        },
        {
          "fecha": "2020-12-03",
          "habil": "S"
        },
        {
          "fecha": "2020-12-04",
          "habil": "S"
        },
        {
          "fecha": "2020-12-05",
          "habil": "N"
        },
        {
          "fecha": "2020-12-06",
          "habil": "N"
        },
        {
          "fecha": "2020-12-07",
          "habil": "S"
        },
        {
          "fecha": "2020-12-08",
          "habil": "S"
        },
        {
          "fecha": "2020-12-09",
          "habil": "S"
        },
        {
          "fecha": "2020-12-10",
          "habil": "S"
        },
        {
          "fecha": "2020-12-11",
          "habil": "S"
        },
        {
          "fecha": "2020-12-12",
          "habil": "N"
        }
      ]
    },
	"Erroresnegocio": {},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTConfiguracionBantotal.ObtenerDetalleCalendarioDeSucursal",
	  "Fecha": "2021-03-15",
	  "Hora": "14:29:49",
	  "Requerimiento": "1",
	  "Numero": "8025",
	  "Estado": "OK"
	}
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDiaCalendario  

### sBTDiaCalendario

::: center 
Los campos del tipo de dato estructurado sBTDiaCalendario son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
fecha | Date | Día del calendario.
habil | String | ¿Día hábil? (S/N)
:::
<!-- CIERRA SDT -->