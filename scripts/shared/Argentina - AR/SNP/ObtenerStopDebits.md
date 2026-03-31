---
title: Obtener Stop Debits
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
::: note Método para obtener los stop debits asociados a un cliente.

**Nombre publicación:** BTSNP.ObtenerStopDebits

**Programa:** RBTPG343

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único del cliente.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtConsultaStopDebit | [sBTConsultaStopDebit](#sbtconsultastopdebit) | Datos del alta de Stop Debits.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió identificador del cliente.
30002 | No se encontró un cliente para el identificador: [Número de identificador].
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
      <bts:BTSNP.ObtenerStopDebits>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>fbd47e2319F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTSNP.ObtenerStopDebits>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?ObtenerStopDebits' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{   
		"Btinreq": {
			"Device": "AC",
			"Usuario": "BANTOTAL",
			"Requerimiento": "",
			"Canal": "BTDIGITAL",
			"Token": "fbd47e2319F955E77534D3E0"
		},
		"clienteUId": 2
	}
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
      <BTSNP.ObtenerStopDebitsResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>bc479c1c0eF955E77534D3E0</Token>
         </Btinreq>
         <sdtConsultaStopDebit>
            <sBTConsultaStopDebit>
               <montoMaximoDebito>M</montoMaximoDebito>
               <fechaBaja>0001-01-01</fechaBaja>
               <moneda>80</moneda>
               <importe>1000.00</importe>
               <fechaAlta>2021-06-14</fechaAlta>
               <stopDebit>
                  <prestacion>DEB RIO</prestacion>
                  <referencia/>
                  <empresaOriginante>3050001626</empresaOriginante>
                  <clienteUId>4</clienteUId>
                  <idCliente>5550101516490000005000</idCliente>
                  <fechaDesde>0001-01-01</fechaDesde>
                  <fechaVencimiento>0001-01-01</fechaVencimiento>
                  <fechaHasta>0001-01-01</fechaHasta>
                  <tipoDeDebito>1</tipoDeDebito>
               </stopDebit>
               <correlativo>1</correlativo>
               <estado>AC</estado>
            </sBTConsultaStopDebit>
            <sBTConsultaStopDebit>
               <montoMaximoDebito>F</montoMaximoDebito>
               <fechaBaja>0001-01-01</fechaBaja>
               <moneda>80</moneda>
               <importe>1000.00</importe>
               <fechaAlta>2021-06-14</fechaAlta>
               <stopDebit>
                  <prestacion>MERIDIO PE</prestacion>
                  <referencia/>
                  <empresaOriginante>3050005116</empresaOriginante>
                  <clienteUId>4</clienteUId>
                  <idCliente>1255162160500000000000</idCliente>
                  <fechaDesde>0001-01-01</fechaDesde>
                  <fechaVencimiento>0001-01-01</fechaVencimiento>
                  <fechaHasta>0001-01-01</fechaHasta>
                  <tipoDeDebito>1</tipoDeDebito>
               </stopDebit>
               <correlativo>2</correlativo>
               <estado>AC</estado>
            </sBTConsultaStopDebit>
         </sdtConsultaStopDebit>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1639</Numero>
            <Estado>OK</Estado>
            <Servicio>BTSNP.ObtenerStopDebits</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2021-06-18</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>16:39:45</Hora>
         </Btoutreq>
      </BTSNP.ObtenerStopDebitsResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Device": "AC",
        "Usuario": "BANTOTAL",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "fbd47e2319F955E77534D3E0"
    },
    "sdtConsultaStopDebit": {
        "sBTConsultaStopDebit": [
            {
                "montoMaximoDebito": "M",
                "importe": 1000,
                "moneda": 2,
                "stopDebit": {
                    "prestacion": "DEB RIO",
                    "referencia": "",
                    "empresaOriginante": "3050001626",
                    "clienteUId": 2,
                    "idCliente": "2750101459380000006000",
                    "fechaDesde": "0001-01-01",
                    "fechaVencimiento": "0001-01-01",
                    "fechaHasta": "0001-01-01",
                    "tipoDeDebito": 1
                },
                "correlativo": 1,
                "estado": "AC"
            },
            {
                "montoMaximoDebito": "F",
                "importe": 2000,
                "moneda": 80,
                "stopDebit": {
                    "prestacion": "DEB RIO",
                    "referencia": "",
                    "empresaOriginante": "3050001626",
                    "clienteUId": 2,
                    "idCliente": "2750101516490000004000",
                    "fechaDesde": "0001-01-01",
                    "fechaVencimiento": "0001-01-01",
                    "fechaHasta": "0001-01-01",
                    "tipoDeDebito": 1
                },
                "correlativo": 2,
                "estado": "AC"
            },
            ...
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1638,
        "Servicio": "BTSNP.ObtenerStopDebits",
        "Estado": "OK",
        "Fecha": "2021-06-18",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Hora": "16:05:58"
    }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTConsultaStopDebit  

### sBTConsultaStopDebit

::: center 
Los campos del tipo de dato estructurado sBTConsultaStopDebit son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
correlativo | Short | Correlativo del stop debit.
estado | String | Estado del Stop Debit.
fechaAlta | Date | Fecha de alta.
fechaBaja | Date | Fecha de baja.
importe | Double | Importe del Stop Debit.
moneda | Short | Identificador de moneda.
montoMaximoDebito | String | Monto máximo de débito (m=mensual/f=factura).
stopDebit | [sBTStopDebit](#sbtstopdebit) | Datos del Stop Debit.
 
### sBTStopDebit

::: center 
Los campos del tipo de dato estructurado sBTStopDebit son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
clienteUId | Long | Identificador único del cliente.
empresaOriginante | String | Identificador de la empresa originante.
fechaDesde | Date | Fecha desde para aplicar el Stop Debit.
fechaHasta | Date | Fecha hasta para aplicar el Stop Debit.
fechaVencimiento | Date | Fecha de vencimiento
idCliente | String | Identificador del Cliente SNP.
prestacion | String | Identificador de prestación.
referencia | String | Referencia del débito.
tipoDeDebito | Byte | Tipo de débito (1=Abierto/2=Cerrado).
:::
<!-- CIERRA SDT -->