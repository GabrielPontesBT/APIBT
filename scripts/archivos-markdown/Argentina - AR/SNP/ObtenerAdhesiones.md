---
title: Obtener Adhesiones
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
::: note Método para obtener las adhesiones de un cliente a una determinada empresa originante.

**Nombre publicación:** BTSNP.ObtenerAdhesiones

**Programa:** RBTPG324

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
empresaOriginante | String | Identificador de la empresa originante.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtAdhesiones | [sBTAdhesion](#sbtadhesion) | Listado de adhesiones.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador del cliente.
30002 | No se encontró un cliente para el identificador: [Número de identificador].
30003 | No se recibió empresa originante.
40001 | No existe la empresa originante.
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
      <bts:BTSNP.ObtenerAdhesiones>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>e8c844e3a0F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
         <bts:empresaOriginante>3050001626</bts:empresaOriginante>
      </bts:BTSNP.ObtenerAdhesiones>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?ObtenerEmpresasOriginantes' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{   
		"Btinreq": {
			"Device": "AC",
			"Usuario": "BANTOTAL",
			"Requerimiento": "",
			"Canal": "BTDIGITAL",
			"Token": "e8c844e3a0F955E77534D3E0"
		},
		"clienteUId": 4,
		"empresaOriginante": "3050001626"
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
      <BTSNP.ObtenerAdhesionesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>e8c844e3a0F955E77534D3E0</Token>
         </Btinreq>
         <sdtAdhesiones>
            <sBTAdhesion>
               <CBU2>20004129980018</CBU2>
               <CBU1>02700052</CBU1>
               <estado>PP</estado>
               <prestacion>DEB RIO</prestacion>
               <empresaOriginante>3050001626</empresaOriginante>
               <fechaDeBaja>0001-01-01</fechaDeBaja>
               <clienteUId>4</clienteUId>
               <idCliente>5550101516490000005000</idCliente>
               <fechaDeAlta>2021-06-14</fechaDeAlta>
               <transaccionInfoAd>3</transaccionInfoAd>
               <transaccionCod>38</transaccionCod>
               <dscEmpresaOri>ACE SEGUROS S.A.</dscEmpresaOri>
               <tipoDeDebito>1</tipoDeDebito>
            </sBTAdhesion>
         </sdtAdhesiones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1629</Numero>
            <Servicio>BTSNP.ObtenerAdhesiones</Servicio>
            <Estado>OK</Estado>
            <Fecha>2021-06-18</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:11:29</Hora>
         </Btoutreq>
      </BTSNP.ObtenerAdhesionesResponse>
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
        "Token": "e8c844e3a0F955E77534D3E0"
    },
    "sdtAdhesiones": {
        "sBTAdhesion": [
            {
                "CBU2": "20004129980018",
                "CBU1": "02700052",
                "estado": "PP",
                "prestacion": "DEB RIO",
                "empresaOriginante": "3050001626",
                "fechaDeBaja": "0001-01-01",
                "clienteUId": 4,
                "idCliente": "5550101516490000005000",
                "fechaDeAlta": "2021-06-14",
                "transaccionInfoAd": 3,
                "transaccionCod": 38,
                "dscEmpresaOri": "ACE SEGUROS S.A.",
                "tipoDeDebito": 1
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1621,
        "Servicio": "BTSNP.ObtenerAdhesiones",
        "Estado": "OK",
        "Fecha": "2021-06-17",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Hora": "12:14:12"
    }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTAdhesion  

### sBTAdhesion

::: center 
Los campos del tipo de dato estructurado sBTAdhesion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
CBU1 | String | Primer bloque del CBU.
CBU2 | String | Segundo bloque del CBU.
clienteUId | Long | Identificador único del cliente.
dscEmpresaOri | String | Descripción empresa originante.
empresaOriginante | String | Identificador de la empresa originante.
estado | String | Estado de la adhesión.
fechaDeAlta | Date | Fecha de alta
fechaDeBaja | Date | Fecha de baja.
idCliente | String | Identificador del Cliente SNP.
prestacion | String | Identificador de prestación.
tipoDeDebito | Byte | Tipo de débito (1=Abierto/2=Cerrado).
transaccionCod | Byte | Código de transacción.
transaccionInfoAd | Byte | Código de transacción para información adicional.
:::
<!-- CIERRA SDT -->