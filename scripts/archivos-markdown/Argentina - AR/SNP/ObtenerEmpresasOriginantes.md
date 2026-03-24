---
title: Obtener Empresas Originantes
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
::: note Método para obtener las empresas originantes para las cuales tiene adhesiones activas un cliente.

**Nombre publicación:** BTSNP.ObtenerEmpresasOriginantes

**Programa:** RBTPG325

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtEmpresas | [sBTEmpresaOriginante](#sbtempresaoriginante) | Listado de empresas originantes.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador del cliente.
30002 | No se encontró un cliente para el identificador: [Número de identificador].
40001 | No se encontraron empresas originantes para este cliente.
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
      <bts:BTSNP.ObtenerEmpresasOriginantes>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>fbd47e2319F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTSNP.ObtenerEmpresasOriginantes>
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
			"Token": "fbd47e2319F955E77534D3E0"
		},
		"clienteUId": 4
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
      <BTSNP.ObtenerEmpresasOriginantesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>fbd47e2319F955E77534D3E0</Token>
         </Btinreq>
         <sdtEmpresas>
            <sBTEmpresaOriginante>
               <identificador>3050001626</identificador>
               <prestaciones>
                  <sBTPrestacion>
                     <descripcion>ACE SEGUROS S.A.</descripcion>
                     <codigo>DEB RIO</codigo>
                  </sBTPrestacion>
               </prestaciones>
            </sBTEmpresaOriginante>
            <sBTEmpresaOriginante>
               <identificador>3050005116</identificador>
               <prestaciones>
                  <sBTPrestacion>
                     <descripcion>LA MERIDIONAL</descripcion>
                     <codigo>MERIDIO PE</codigo>
                  </sBTPrestacion>
               </prestaciones>
            </sBTEmpresaOriginante>
         </sdtEmpresas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1628</Numero>
            <Servicio>BTSNP.ObtenerEmpresasOriginantes</Servicio>
            <Estado>OK</Estado>
            <Fecha>2021-06-18</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:10:46</Hora>
         </Btoutreq>
      </BTSNP.ObtenerEmpresasOriginantesResponse>
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
    "sdtEmpresas": {
        "sBTEmpresaOriginante": [
            {
                "identificador": "3050001626",
                "prestaciones": {
                    "sBTPrestacion": [
                        {
                            "descripcion": "ACE SEGUROS S.A.",
                            "codigo": "DEB RIO"
                        }
                    ]
                }
            },
            {
                "identificador": "3050005116",
                "prestaciones": {
                    "sBTPrestacion": [
                        {
                            "descripcion": "LA MERIDIONAL",
                            "codigo": "MERIDIO PE"
                        }
                    ]
                }
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1608,
        "Estado": "OK",
        "Servicio": "BTSNP.ObtenerEmpresasOriginantes",
        "Requerimiento": "",
        "Fecha": "2021-06-16",
        "Hora": "16:19:38",
        "Canal": "BTDIGITAL"
    }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTEmpresaOriginante  

### sBTEmpresaOriginante

::: center 
Los campos del tipo de dato estructurado sBTEmpresaOriginante son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
identificador | String | Identificador de la empresa originante.
prestaciones | [sBTPrestacion](#sbtprestacion) | Listado de prestaciones.
:::

### sBTPrestacion

::: center 
Los campos del tipo de dato estructurado sBTPrestacion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | String | Código identificador de la prestación.
descripcion | String | Descripción de la prestación.
:::
<!-- CIERRA SDT -->