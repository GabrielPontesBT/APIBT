---
title: Obtener Facultades
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
::: note Método para obtener un listado de las facultades de una cuenta cliente.

**Nombre publicación:** BTClientes.ObtenerFacultades

**Programa:** RBTPG452

**Global/País:** Global
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
:--------- | :----------- | :-----------
sdtFacultades | [sBTFacultad](#sbtfacultad) | Listado de datos de facultades.
sdtFirmantes | [sBTFacultadFirmante](#sbtfacultadfirmante) | Listado de datos de firmantes.

@tab Errores

Código | Descripción
:--------- | :-----------
30001	| No se recibió el identificador único de cliente.
30006	| No se recuperó la cuenta para el Identificador: [Número de identificador].
40003	| No existe registro con la cuenta indicada.
40004	| No existe registro con el identificador indicado.
40005	| No se recibió identificador de cuenta a consultar.
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
      <bts:BTClientes.ObtenerFacultades>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>papa</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>BC79E967434CDFE2512C069E</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>342</bts:clienteUId>
      </bts:BTClientes.ObtenerFacultades>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
          "Requerimiento": 0,
          "Canal": "BTDIGITAL",
          "Device": "papa",
          "Usuario": "INSTALADOR",
          "Token": "BC79E967434CDFE2512C069E"
        },
        "clienteUId": 342
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
      <BTClientes.ObtenerFacultadesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>30F74741A02C318CEFD55684</Token>
            <Device>GL</Device>
         </Btinreq>
         <sdtFacultades>
            <SdtsBTFacultad>
                <grupos></grupos>
                <firmantes></firmantes>
                <descripcion>Firma de Cheques</descripcion>
                <tipo>Categoría</tipo>
                <codigo>1</codigo>
            </SdtsBTFacultad>
            <SdtsBTFacultad>
                <grupos>
                    <SdtsBTFacultadGrupo>
                        <moneda>$</moneda>
                        <codigoMoneda>0</codigoMoneda>
                        <vigenciaHasta>2022-10-04</vigenciaHasta>
                        <monto>99999990.00</monto>
                        <habilitado>S</habilitado>
                        <firmantes>
                            <SdtsBTFacultadFirmante>
                                <potestad>Titular</potestad>
                                <personaUId>161</personaUId>
                                <nombre>AZQUEZ SZENTANDRASI LEJANDRO</nombre>
                                <categoria/>
                            </SdtsBTFacultadFirmante>
                        </firmantes>
                        <codigoPapel>0</codigoPapel>
                        <papel>$</papel>
                        <numero>1</numero>
                        <vigenciaDesde>2020-01-02</vigenciaDesde>
                    </SdtsBTFacultadGrupo>
                </grupos>
                <firmantes></firmantes>
                <descripcion>Retiro de cuentas vista</descripcion>
                <tipo>Persona</tipo>
                <codigo>2</codigo>
            </SdtsBTFacultad>
        </sdtFacultades>
        <sdtFirmantes>
            <SdtsBTFacultadFirmante>
                <potestad>Titular</potestad>
                <personaUId>161</personaUId>
                <nombre>AZQUEZ SZENTANDRASI LEJANDRO</nombre>
                <categoria/>
            </SdtsBTFacultadFirmante>
        </sdtFirmantes>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTClientes.ObtenerFacultades</Servicio>
            <Fecha>2022-11-29</Fecha>
            <Hora>10:23:37</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>486</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTClientes.ObtenerFacultadesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
          "Canal": "BTDIGITAL",
          "Requerimiento": 1,
          "Usuario": "INSTALADOR",
          "Token": "30F74741A02C318CEFD55684",
          "Device": "GL"
        },
        "sdtFacultades": {
          "SdtsBTFacultad": [
            {
              "grupos": "",
              "firmantes": "",
              "descripcion": "Firma de Cheques",
              "tipo": "Categoría",
              "codigo": 1
            },
            {
              "grupos": {
                "SdtsBTFacultadGrupo": {
                  "moneda": "$",
                  "codigoMoneda": 0,
                  "vigenciaHasta": "2022-10-04",
                  "monto": 99999990,
                  "habilitado": "S",
                  "firmantes": {
                    "SdtsBTFacultadFirmante": {
                      "potestad": "Titular",
                      "personaUId": 161,
                      "nombre": "AZQUEZ SZENTANDRASI LEJANDRO",
                      "categoria": ""
                    }
                  },
                  "codigoPapel": 0,
                  "papel": "$",
                  "numero": 1,
                  "vigenciaDesde": "2020-01-02"
                }
              },
              "firmantes": "",
              "descripcion": "Retiro de cuentas vista",
              "tipo": "Persona",
              "codigo": 2
            }
          ]
        },
        "sdtFirmantes": {
          "SdtsBTFacultadFirmante": {
            "potestad": "Titular",
            "personaUId": 161,
            "nombre": "AZQUEZ SZENTANDRASI LEJANDRO",
            "categoria": ""
          }
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTClientes.ObtenerFacultades",
          "Fecha": "2022-11-29",
          "Hora": "10:23:37",
          "Requerimiento": 1,
          "Numero": 486,
          "Estado": "OK"
        }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTFacultad  

### sBTFacultad

::: center 
Los campos del tipo de dato estructurado sBTFacultad son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Short | Código. 
descripcion | String | Descripción. 
firmantes | [sBTFacultadFirmante](#sbtfacultadfirmante) | Listado de firmantes de la facultad. 
grupos | [sBTFacultadGrupo](#sbtfacultadgrupo) | Listado de grupos de la facultad. 
tipo | String | Tipo. 

### sBTFacultadGrupo

::: center 
Los campos del tipo de dato estructurado sBTFacultadGrupo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigoMoneda | Int | Código de moneda. 
codigoPapel | Long | Código de papel. 
firmantes | [sBTFacultadFirmante](#sbtfacultadfirmante) | Listado de firmantes. 
habilitado | String | ¿Habilitado? (S/N). 
moneda | String | Moneda. 
monto | Long | Monto. 
numero | Short | Número de grupo. 
papel | String | Papel. 
vigenciaDesde | Date | Fecha de vigencia desde. 
vigenciaHasta | Date | Fecha de vigencia hasta. 
:::

::: details sBTFacultadFirmante

### sBTFacultadFirmante

::: center 
Los campos del tipo de dato estructurado sBTFacultadFirmante son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
categoria | String | Categoría. 
nombre | String | Nombre. 
personaUId | long | Identificador único de persona. 
potestad | String | Potestad. 
:::
<!-- CIERRA SDT -->