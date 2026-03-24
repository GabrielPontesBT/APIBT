---
title: Obtener Estado de Cuenta
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
::: note Método para obtener el estado de cuenta del ahorro.

**Nombre publicación:** BTAhorroProgramado.ObtenerEstadoDeCuenta

**Programa:** RBTPG249

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
ahorroUId | Long | Identificador único del ahorro.
fechaDesde | Date | Fecha desde la cual se emite el estado de cuenta
fechaHasta | Date | Fecha hasta la cual se emite el estado de cuenta

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtEstadoCuentaAhorro | [sBTEstadoCuentaAhorro](#sbtestadocuentaahorro) | Estado de cuenta del ahorro.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de la operación.
30011 | No se recupero la operación para el identificador recibido.
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
      <bts:BTAhorroProgramado.ObtenerEstadoDeCuenta>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>AC</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>01d52592724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:ahorroUId>205</bts:ahorroUId>
         <bts:fechaDesde>2017-03-06</bts:fechaDesde>
         <bts:fechaHasta>2017-11-30</bts:fechaHasta>
      </bts:BTAhorroProgramado.ObtenerEstadoDeCuenta>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerEstadoDeCuenta=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4' \
  -d '{
	"Btinreq": {
        "Device": "AV",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "75e20bd1614A8B5C60A82434"
    },
    "ahorroUId": 205,
	"fechaDesde": "2017-03-06",
   "fechaHasta": "2017-11-30"
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
      <BTAhorroProgramado.ObtenerEstadoDeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>2a721032f94A8B5C60A82434</Token>
         </Btinreq>
         <sdtEstadoCuentaAhorro>
            <ahorroUId>205</ahorroUId>
            <abonoActual>5000.00</abonoActual>
            <periodicidad>1</periodicidad>
            <periodosGraciaUtilizados>0</periodosGraciaUtilizados>
            <totalInteresesGenerados>0.00</totalInteresesGenerados>
            <clienteUId>61</clienteUId>
            <fechaProximoVencimiento>2017-07-07</fechaProximoVencimiento>
            <productoUId>82</productoUId>
            <observacion>Se cumplió con la cantidad máxima de periodos de renovación.</observacion>
            <intentosIncremento>0</intentosIncremento>
            <diaIncremento>9</diaIncremento>
            <movimientos>
               <sBTMovimientoAhorro>
                  <saldoAhorro>1000.00</saldoAhorro>
                  <fecha>2017-03-06</fecha>
                  <interes>0.00</interes>
                  <capital>1000.00</capital>
                  <concepto>Depósito inicial</concepto>
               </sBTMovimientoAhorro>
               <sBTMovimientoAhorro>
                  <saldoAhorro>6000.00</saldoAhorro>
                  <fecha>2017-04-10</fecha>
                  <interes>0.00</interes>
                  <capital>5000.00</capital>
                  <concepto>Incremento de ahorro</concepto>
               </sBTMovimientoAhorro>
               <sBTMovimientoAhorro>
                  <saldoAhorro>6016.77</saldoAhorro>
                  <fecha>2017-05-08</fecha>
                  <interes>16.77</interes>
                  <capital>6000.00</capital>
                  <concepto>Renovación del ahorro</concepto>
               </sBTMovimientoAhorro>
               <sBTMovimientoAhorro>
                  <saldoAhorro>11016.77</saldoAhorro>
                  <fecha>2017-05-09</fecha>
                  <interes>0.00</interes>
                  <capital>5000.00</capital>
                  <concepto>Incremento de ahorro</concepto>
               </sBTMovimientoAhorro>
               <sBTMovimientoAhorro>
                  <saldoAhorro>11200.75</saldoAhorro>
                  <fecha>2017-11-30</fecha>
                  <interes>183.98</interes>
                  <capital>11055.89</capital>
                  <concepto>Acreditación del ahorro</concepto>
               </sBTMovimientoAhorro>
            </movimientos>
            <totalDepositado>11000.00</totalDepositado>
            <totalInteresesAcreditados>200.75</totalInteresesAcreditados>
            <renueva>No</renueva>
            <operacionUIdOrigen>2</operacionUIdOrigen>
            <operacionUIdDestino>2</operacionUIdDestino>
            <estado>Cancelado</estado>
         </sdtEstadoCuentaAhorro>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>9354</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ObtenerEstadoDeCuenta</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:22:36</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ObtenerEstadoDeCuentaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
    "Btinreq": { 
        "Device": "AV", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "", 
        "Canal": "BTDIGITAL", 
        "Token": "2a721032f94A8B5C60A82434" 
    }, 
    "sdtEstadoCuentaAhorro": { 
        "ahorroUId": 205, 
        "abonoActual": 5000, 
        "periodicidad": 1, 
        "periodosGraciaUtilizados": 0, 
        "totalInteresesGenerados": 0, 
        "clienteUId": 61, 
        "fechaProximoVencimiento": "2017-07-07", 
        "productoUId": 82, 
        "observacion": "Se cumplió con la cantidad máxima de periodos de renovación.", 
        "intentosIncremento": 0, 
        "diaIncremento": 9, 
        "movimientos": { 
            "sBTMovimientoAhorro": [ 
                { 
                    "saldoAhorro": 1000, 
                    "fecha": "2017-03-06", 
                    "interes": 0, 
                    "capital": 1000, 
                    "concepto": "Depósito inicial" 
                }, 
                { 
                    "saldoAhorro": 6000, 
                    "fecha": "2017-04-10", 
                    "interes": 0, 
                    "capital": 5000, 
                    "concepto": "Incremento de ahorro" 
                }, 
                { 
                    "saldoAhorro": 6016.77, 
                    "fecha": "2017-05-08", 
                    "interes": 16.77, 
                    "capital": 6000, 
                    "concepto": "Renovación del ahorro" 
                }, 
                { 
                    "saldoAhorro": 11016.77, 
                    "fecha": "2017-05-09", 
                    "interes": 0, 
                    "capital": 5000, 
                    "concepto": "Incremento de ahorro" 
                }, 
                { 
                    "saldoAhorro": 11200.75, 
                    "fecha": "2017-11-30", 
                    "interes": 183.98, 
                    "capital": 11055.89, 
                    "concepto": "Acreditación del ahorro" 
                } 
            ] 
        }, 
        "totalDepositado": 11000, 
        "totalInteresesAcreditados": 200.75, 
        "renueva": "No", 
        "operacionUIdOrigen": 2, 
        "operacionUIdDestino": 2, 
        "estado": "Cancelado" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 9355, 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.ObtenerEstadoDeCuenta", 
        "Fecha": "2019-11-19", 
        "Requerimiento": "", 
        "Hora": "11:26:34", 
        "Canal": "BTDIGITAL" 
    } 
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTEstadoCuentaAhorro  

### sBTEstadoCuentaAhorro

::: center 
Los campos del tipo de dato estructurado sBTEstadoCuentaAhorro son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
abonoActual | Double | Abono actual.
ahorroUId | Long | Identificador único del ahorro.
clienteUId | Long | Identificador único del cliente.
díaIncremento | Short | Día en que se da el incremento.
estado | String | Estado del ahorro.
fechaProximoVencimiento | Date | Fecha del próximo vencimiento del ahorro.
intentosIncremento | Short | Intentos de incremento permitidos.
movimientos | [sBTMovimientoAhorro](#sbtmovimientoahorro) | Listado de movimientos del ahorro.
observacion | String | Observación.
operacionUIdDestino | Long | Identificador único de la operación de destino.
operacionUIdOrigen | Long | Identificador único de la operación de origen.
periodicidad | Short | Periodicidad del ahorro en días.
periodosGraciaUtilizados | Short | Períodos de gracia utilizados.
productoUId | Long | Identificador único de producto.
renueva | String | ¿Renueva? (S/N).
totalDepositado | Double | Saldo total depositado.
totalInteresesAcreditados | Double | Total de intereses acreditados.
totalInteresesGenerados | Double | Total de intereses generados.

### sBTMovimientoAhorro

::: center 
Los campos del tipo de dato estructurado sBTMovimientoAhorro son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
capital | Double | Capital de movimiento.
concepto | String | Concepto de movimiento.
fecha | Date | Fecha de movimiento.
intereses | Double | Intereses del movimiento.
saldoAhorro | Double | Saldo del ahorro.
:::
<!-- CIERRA SDT -->