---
title: Obtener Datos
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
::: note Método para obtener los datos de un producto de cuenta corriente.

**Nombre publicación:** BTCuentasCorrientes.ObtenerDatos

**Programa:** RBTPG009

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtCuentaCorriente | [sBTCuentaCorriente](#sbtcuentacorriente) | Datos del producto.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de operación.
30002 | No se recuperó la operación para el identificador: [Número de identificador].
30003 | La operación ingresada no corresponde a una cuenta Corriente.
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
      <bts:BTCuentasCorrientes.ObtenerDatos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>9</bts:operacionUId>
      </bts:BTCuentasCorrientes.ObtenerDatos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerDatos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 78cd760f-5ec8-ae9c-5780-0564a89b999d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 142
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
      <BTCuentasCorrientes.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtCuentaCorriente>
            <cobraIntereses>S</cobraIntereses>
            <producto>
               <papel/>
               <moneda>$</moneda>
               <productoUId>0</productoUId>
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
            </producto>
            <idOperacionBT>0010100000020000000000000000002700001000000000001</idOperacionBT>
            <saldoPorConfirmar>0.00</saldoPorConfirmar>
            <sobregiroAutorizado>N</sobregiroAutorizado>
            <descPaquete/>
            <idOperacionFmt>000000027_001</idOperacionFmt>
            <ejecutivo>Instalador</ejecutivo>
            <saldoCobertura>15786.45</saldoCobertura>
            <pagaInteresSobregiro>N</pagaInteresSobregiro>
            <saldoDisponible>26601092.87</saldoDisponible>
            <pagaComisCantMovimientos>S</pagaComisCantMovimientos>
            <saldoBloqueado>0.00</saldoBloqueado>
            <pagaComisBajoPromedio>S</pagaComisBajoPromedio>
            <frecuenciaEmisionEC>Mensual</frecuenciaEmisionEC>
            <operacionUId>9</operacionUId>
            <chequeras/>
            <diasSobregiro>0</diasSobregiro>
            <saldoContable>26585306.42</saldoContable>
            <estado>Normal</estado>
            <fechaApertura>2013-12-01</fechaApertura>
            <sucursal>Casa Matriz</sucursal>
            <pagaComisEstadoCuenta/>
            <paquete>N</paquete>
         </sdtCuentaCorriente>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>925</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.ObtenerDatos</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:30:40</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerDatosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtCuentaCorriente": {
        "cobraIntereses": "",
        "producto": {
            "papel": "",
            "moneda": "$",
            "productoUId": "0",
            "nombre": "LEASING, Amort. - Capital F./Empr.- T/F"
        },
        "idOperacionBT": "0010000100115000000000000000002700000000000326001",
        "saldoPorConfirmar": "0.00",
        "sobregiroAutorizado": "",
        "descPaquete": "",
        "idOperacionFmt": "000000027_000",
        "ejecutivo": "Instalador",
        "saldoCobertura": "0.00",
        "pagaInteresSobregiro": "",
        "saldoDisponible": "-174180.15",
        "pagaComisCantMovimientos": "",
        "saldoBloqueado": "0.00",
        "pagaComisBajoPromedio": "",
        "frecuenciaEmisionEC": "",
        "operacionUId": "142",
        "chequeras": "",
        "diasSobregiro": "1",
        "saldoContable": "-174180.15",
        "estado": "Normal",
        "fechaApertura": "2018-05-18",
        "sucursal": "Sucursal Beta",
        "pagaComisEstadoCuenta": "",
        "paquete": "N"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "926",
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.ObtenerDatos",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "17:31:29",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCuentaCorriente  

### sBTCuentaCorriente

::: center 
Los campos del tipo de dato estructurado sBTCuentaCorriente son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
chequeras | String | Datos de la chequera. 
cobraIntereses | String | ¿Cobra intereses? (S/N). 
descPaquete | String | Descripción de paquete. 
diasSobregiro | Short | Días de Sobregiro. 
ejecutivo | String | Nombre de ejecutivo de alta. 
estado | String | Descrición de estado de la operación. 
fechaApertura | Date | Fecha de alta. 
frecuenciaEmisionEC | String | Frecuencia de emisión de estado de cuenta. 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
operacionUId | Long | Identificador único de operación. 
pagaComisBajoPromedio | String | ¿Paga comisión por bajo promedio? (S/N). 
pagaComisCantMovimientos | String | ¿Paga comisión por cantidad de movimientos? (S/N). 
pagaComisEstadoCuenta | String | ¿Paga Comisión por estado de cuenta? (S/N). 
paquete | String | ¿Tiene paquete? (S/N). 
producto | [sBTProducto](#sbtproducto) | Datos del producto. 
saldoBloqueado | Double | Saldo bloqueado. 
saldoCobertura | Double | Saldo de cobertura. 
saldoContable | Double | Saldo total. 
saldoDisponible | Double | Saldo disponible. 
saldoPorConfirmar | Double | Saldo pendiente de confirmación. 
sobregiroAutorizado | String | ¿Sobregiro autorizado? (S/N). 
sucursal | String | Nombre de la sucursal de alta. 

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