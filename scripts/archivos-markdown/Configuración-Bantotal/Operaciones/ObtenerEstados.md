---
title: Obtener Estados
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
::: note Método para obtener un listado de los estados de producto ingresados en Bantotal.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerEstados

**Programa:** RBTPG801

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtEstados | [sBTEstadoOperacion](#sbtestadooperacion) | Listado de estados.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No hay estados parametrizados.
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
      <bts:BTConfiguracionBantotal.ObtenerEstados>
         <bts:Btinreq>
            <bts:Device>bms</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerEstados>
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
    }
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
      <BTConfiguracionBantotal.ObtenerEstadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>bms</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f99a68ce154A8B5C60A82434</Token>
         </Btinreq>
         <sdtEstados>
            <sBTEstadoOperacion>
               <permiteOperar>S</permiteOperar>
               <descripcion>NORMAL</descripcion>
               <codigo>0</codigo>
            </sBTEstadoOperacion>
            <sBTEstadoOperacion>
               <permiteOperar>N</permiteOperar>
               <descripcion>ORDEN DE NO PAGAR</descripcion>
               <codigo>5</codigo>
            </sBTEstadoOperacion>
            <sBTEstadoOperacion>
               <permiteOperar>C</permiteOperar>
               <descripcion>BLOQUEO P/ FONDO DESEMPLEO</descripcion>
               <codigo>8</codigo>
            </sBTEstadoOperacion>
            <sBTEstadoOperacion>
               <permiteOperar>D</permiteOperar>
               <descripcion>BLOQUEO DE CREDITOS</descripcion>
               <codigo>10</codigo>
            </sBTEstadoOperacion>
            <sBTEstadoOperacion>
               <permiteOperar>C</permiteOperar>
               <descripcion>BLOQUEO DE DEBITOS</descripcion>
               <codigo>11</codigo>
            </sBTEstadoOperacion>
            <sBTEstadoOperacion>
               <permiteOperar>A</permiteOperar>
               <descripcion>BLOQUEO CON AUTORIZACION</descripcion>
               <codigo>12</codigo>
            </sBTEstadoOperacion>
            <sBTEstadoOperacion>
               <permiteOperar>S</permiteOperar>
               <descripcion>CUENTA UNIFICADA</descripcion>
               <codigo>13</codigo>
            </sBTEstadoOperacion>
            <sBTEstadoOperacion>
               <permiteOperar>C</permiteOperar>
               <descripcion>EMBARGO JUDICIAL</descripcion>
               <codigo>15</codigo>
            </sBTEstadoOperacion>
            <sBTEstadoOperacion>
               <permiteOperar>S</permiteOperar>
               <descripcion>Cuenta 50952 en Factoring</descripcion>
               <codigo>20</codigo>
            </sBTEstadoOperacion>
            <sBTEstadoOperacion>
               <permiteOperar>N</permiteOperar>
               <descripcion>Bloqueo por juicio</descripcion>
               <codigo>25</codigo>
            </sBTEstadoOperacion>
            <sBTEstadoOperacion>
               <permiteOperar>N</permiteOperar>
               <descripcion>CANCELADA</descripcion>
               <codigo>99</codigo>
            </sBTEstadoOperacion>
         </sdtEstados>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1098</Numero>
            <Servicio>BTConfiguracionBantotal.ObtenerEstados</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-10-30</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>18:32:26</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerEstadosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "faa36bd33f4A8B5C60A82434"
    },
    "sdtEstados": {
        "sBTEstadoOperacion": [
            {
                "permiteOperar": "S",
                "descripcion": "NORMAL",
                "codigo": 0
            },
            {
                "permiteOperar": "N",
                "descripcion": "ORDEN DE NO PAGAR",
                "codigo": 5
            },
            {
                "permiteOperar": "C",
                "descripcion": "BLOQUEO P/ FONDO DESEMPLEO",
                "codigo": 8
            },
            {
                "permiteOperar": "D",
                "descripcion": "BLOQUEO DE CREDITOS",
                "codigo": 10
            },
            {
                "permiteOperar": "C",
                "descripcion": "BLOQUEO DE DEBITOS",
                "codigo": 11
            },
            {
                "permiteOperar": "A",
                "descripcion": "BLOQUEO CON AUTORIZACION",
                "codigo": 12
            },
            {
                "permiteOperar": "S",
                "descripcion": "CUENTA UNIFICADA",
                "codigo": 13
            },
            {
                "permiteOperar": "C",
                "descripcion": "EMBARGO JUDICIAL",
                "codigo": 15
            },
            {
                "permiteOperar": "S",
                "descripcion": "Cuenta 50952 en Factoring",
                "codigo": 20
            },
            {
                "permiteOperar": "N",
                "descripcion": "Bloqueo por juicio",
                "codigo": 25
            },
            {
                "permiteOperar": "N",
                "descripcion": "CANCELADA",
                "codigo": 99
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1104,
        "Servicio": "BTConfiguracionBantotal.ObtenerEstados",
        "Estado": "OK",
        "Fecha": "2020-11-02",
        "Requerimiento": "0",
        "Hora": "14:13:38",
        "Canal": "BTDIGITAL"
    }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTEstadoOperacion

### sBTEstadoOperacion

::: center
Los campos del tipo de dato estructurado sBTEstadoOperacion son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
codigo | Short | Código del estado.
descripcion | String | Descripción del estado.
permiteOperar | String | ¿Permite Operar?
:::
<!-- CIERRA SDT -->