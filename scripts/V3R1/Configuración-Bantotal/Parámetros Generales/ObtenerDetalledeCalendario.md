---
title: Obtener Detalle de Calendario
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
::: note Método para obtener el detalle de los días de un determinado calendario.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerDetalleCalendario

**Programa:** RBTPG285

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
calendarioId | Short | Identificador de calendario.
fechaInicio | Date | Fecha de inicio de visualización de calendario.
fechaFin | Date | Fecha de fin de visualización de calendario.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
descripcionCalendario | String | Descripción del calendario.
sdtDetalleCalendario | [sBTDiaCalendario](#sbtdiacalendario) | Detalle de la consulta del calendario.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió identificador de calendario.
30002 | No se recibió fecha de inicio.
30003 | No se recibió fecha de fin.
40001 | No existe calendario con el identificador ingresado.
40002 | No se pudo obtener detalle para los datos ingresados ingresados.
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
      <bts:BTConfiguracionBantotal.ObtenerDetalleCalendario>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>MC</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>200f0b8b654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:calendarioId>1</bts:calendarioId>
         <bts:fechaInicio>2020-10-01</bts:fechaInicio>
         <bts:fechaFin>2020-10-31</bts:fechaFin>
      </bts:BTConfiguracionBantotal.ObtenerDetalleCalendario>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X GET \
   'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerEstados' \
   -H 'cache-control: no-cache' \
   -H 'content-type: application/json' \
   -d '{
   "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "faa36bd33f4A8B5C60A82434"
    },
	"calendarioId":1,
	"fechaInicio":"2020-10-01",
	"fechaFin":"2020-10-31",
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
      <BTConfiguracionBantotal.ObtenerDetalleCalendarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>MC</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>200f0b8b654A8B5C60A82434</Token>
         </Btinreq>
         <descripcionCalendario>Calendario 1</descripcionCalendario>
         <sdtDetalleCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-01</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-02</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-03</fecha>  
               <habil>N</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-04</fecha>  
               <habil>N</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-05</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-06</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-07</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-08</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-09</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-10</fecha>  
               <habil>N</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-11</fecha>  
               <habil>N</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-12</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-13</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-14</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-15</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-16</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-17</fecha>  
               <habil>N</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-18</fecha>  
               <habil>N</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-19</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-20</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-21</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-22</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-23</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-24</fecha>  
               <habil>N</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-25</fecha>  
               <habil>N</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-26</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-27</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-28</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-29</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-30</fecha>  
               <habil>S</habil>  
            </sBTDiaCalendario>  
            <sBTDiaCalendario>  
               <fecha>2020-10-31</fecha>  
               <habil>N</habil>  
            </sBTDiaCalendario>  
         </sdtDetalleCalendario> 
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>109132</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerDetalleCalendario</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-11-24</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>10:41:08</Hora>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerDetalleCalendarioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
		"Device": "MC",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "200f0b8b654A8B5C60A82434"
	},
	"descripcionCalendario": "Calendario 1",
	"sdtDetalleCalendario": {  
	  "sBTDiaCalendario": [  
		{  
		  "fecha": "2020-10-01",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-02",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-03",  
		  "habil": "N"  
		},  
		{  
		  "fecha": "2020-10-04",  
		  "habil": "N"  
		},  
		{  
		  "fecha": "2020-10-05",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-06",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-07",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-08",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-09",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-10",  
		  "habil": "N"  
		},  
		{  
		  "fecha": "2020-10-11",  
		  "habil": "N"  
		},  
		{  
		  "fecha": "2020-10-12",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-13",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-14",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-15",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-16",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-17",  
		  "habil": "N"  
		},  
		{  
		  "fecha": "2020-10-18",  
		  "habil": "N"  
		},  
		{  
		  "fecha": "2020-10-19",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-20",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-21",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-22",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-23",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-24",  
		  "habil": "N"  
		},  
		{  
		  "fecha": "2020-10-25",  
		  "habil": "N"  
		},  
		{  
		  "fecha": "2020-10-26",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-27",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-28",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-29",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-30",  
		  "habil": "S"  
		},  
		{  
		  "fecha": "2020-10-31",  
		  "habil": "N"  
		}  
	  ]  
	},  
	"Btoutreq": {
	  "Numero": "109132",
	  "Estado": "OK",
	  "Servicio": "BTConfiguracionBantotal.ObtenerDetalleCalendario",
	  "Requerimiento": "1",
	  "Fecha": "2020-11-24",
	  "Canal": "BTDIGITAL",
	  "Hora": "10:41:08"
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
:--------- | :--------- | :--------- 
fecha | Date | Día del calendario.
habil | String | ¿Día hábil? (S/N)
:::
<!-- CIERRA SDT -->