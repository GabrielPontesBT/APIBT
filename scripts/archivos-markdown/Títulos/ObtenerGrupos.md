---
title: Obtener Grupos
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
::: note Método para obtener los grupos de papeles parametrizados.

**Nombre publicación:** BTTitulos.ObtenerGrupos

**Programa:** RBTPG626

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.


@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtGrupos | [sBTGrupo](#sbtgrupo) | Listado de grupos.

@tab Errores

Código | Descripción
:--------- | :-----------
40001 | No hay grupos de papeles parametrizados.

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
      <bts:BTTitulos.ObtenerGrupos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>D798D921DBD49B4BB5706756</bts:Token>
         </bts:Btinreq>
      </bts:BTTitulos.ObtenerGrupos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTitulos?ObtenerGrupos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
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
      <BTTitulos.ObtenerGruposResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>D798D921DBD49B4BB5706756</Token>
         </Btinreq>
         <sdtGrupos>
            <sBTGrupo>
               <codigo>1</codigo>
               <nombre>Acción Ordinaria</nombre>
            </sBTGrupo>
            <sBTGrupo>
               <codigo>2</codigo>
               <nombre>Bono</nombre>
            </sBTGrupo>
            <sBTGrupo>
               <codigo>3</codigo>
               <nombre>Títulos a Descuento</nombre>
            </sBTGrupo>
            <sBTGrupo>
               <codigo>4</codigo>
               <nombre>Fondo</nombre>
            </sBTGrupo>
            <sBTGrupo>
               <codigo>5</codigo>
               <nombre>Acción Preferida</nombre>
            </sBTGrupo>
            <sBTGrupo>
               <codigo>6</codigo>
               <nombre>ETF</nombre>
            </sBTGrupo>
            <sBTGrupo>
               <codigo>7</codigo>
               <nombre>Nota Estructurada</nombre>
            </sBTGrupo>
            <sBTGrupo>
               <codigo>91</codigo>
               <nombre>Bono Caja Bancaria</nombre>
            </sBTGrupo>
         </sdtGrupos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-23</Fecha>
            <Hora>14:44:10</Hora>
            <Numero>24989</Numero>
            <Servicio>BTTitulos.ObtenerGrupos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTitulos.ObtenerGruposResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "sdtGrupos": {
      "sBTGrupo": [
         {
            "codigo": 1,
            "nombre": "Acción Ordinaria"
         },
         {
            "codigo": 2,
            "nombre": "Bono"
         },
         {
            "codigo": 3,
            "nombre": "Títulos a Descuento"
         },
         {
            "codigo": 4,
            "nombre": "Fondo"
         },
         {
            "codigo": 5,
            "nombre": "Acción Preferida"
         },
         {
            "codigo": 6,
            "nombre": "ETF"
         },
         {
            "codigo": 7,
            "nombre": "Nota Estructurada"
         },
         {
            "codigo": 91,
            "nombre": "Bono Caja Bancaria"
         }
      ]
   },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTTitulos.ObtenerGrupos",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTGrupo  

### sBTGrupo

::: center 
Los campos del tipo de dato estructurado sBTGrupo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | int | Código del grupo.
nombre | String | Descripción del grupo.

:::
<!-- CIERRA SDT -->