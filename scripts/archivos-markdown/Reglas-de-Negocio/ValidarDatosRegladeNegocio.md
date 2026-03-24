---
title: Validar Datos Regla de Negocio
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
::: note Método para validar los datos de una determinada regla de negocio.

**Nombre publicación:** BTReglasNegocio.ValidarDatosReglaNegocio

**Programa:** RBTPGR56

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
reglaId | Long | Código de regla de negocio.
sdtVariables | [sBTVariable](#sbtvariable) | Listado de variables.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
resultado | String | Resultado de la evaluación.
sdtRetornos | [sBTRetorno](#sbtretorno) | Listado de retornos.
cantidadResultados | Long | Cantidad de resultados.

@tab Errores

Código | Descripción
:--------- | :-----------
1011050 | No se recibió ID de Regla.
40001 | Error de Parametrización
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
      <bts:BTReglasNegocio.ValidarDatosReglaNegocio>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>86b12d9cbaCD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:reglaId>4</bts:reglaId>
         <bts:sdtVariables>
            <bts:SdtsBTVariable>
               <bts:valor>S</bts:valor>
               <bts:nombre>CHECKAUX2</bts:nombre>
            </bts:SdtsBTVariable>
         </bts:sdtVariables>
      </bts:BTReglasNegocio.ValidarDatosReglaNegocio>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTReglasNegocio?ValidarDatosReglaNegocio' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "bc8b678bc44A8B5C60A82434"
    },
    "reglaId": "4",
    "sdtVariables": {
        "SdtsBTVariable": {
            "valor": "S",
            "nombre": "CHECKAUX2"
        },
    },
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
      <BTReglasNegocio.ValidarDatosReglaNegocioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>86b12d9cbaCD285A89A23FBE</Token>
         </Btinreq>
         <cantidadResultados>1</cantidadResultados>
         <sdtRetornos>
            <SdtsBTRetorno>
               <retorno>3</retorno>
            </SdtsBTRetorno>
         </sdtRetornos>
         <resultado>VERDADERO</resultado>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>45114</Numero>
            <Estado>OK</Estado>
            <Servicio>BTReglasNegocio.ValidarDatosReglaNegocio</Servicio>
            <Fecha>2022-06-02</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:28:57</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTReglasNegocio.ValidarDatosReglaNegocioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "c2cfd09eff4A8B5C60A82434" 
    }, 
    "cantidadResultados": "1", 
    "sdtRetornos": { 
        "SdtsBTRetorno": { 
            "retorno": "3" 
        } 
    }, 
    "resultado": "VERDADERO", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "45114", 
        "Estado": "OK", 
        "Servicio": "BTReglasNegocio.ValidarDatosReglaNegocio", 
        "Fecha": "2022-06-02", 
        "Requerimiento": "1", 
        "Hora": "12:28:57", 
        "Canal": "BTDIGITAL" 
    } 
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT --> 
::: details sBTVariable  

### sBTVariable

::: center 
Los campos del tipo de dato estructurado sBTVariable son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
nombre | String | Nombre de variable. 
valor | String | Valor de variable.  
:::

::: details sBTRetorno  

### sBTRetorno

::: center 
Los campos del tipo de dato estructurado sBTRetorno son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
retorno | String | Retorno de la evaluación.  
:::
<!-- CIERRA SDT -->