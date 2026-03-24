---
title: Obtener Ejecutivos
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
::: note Método para obtener un listado de los ejecutivos ingresados en Bantotal.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerEjecutivos

**Programa:** RBTPG046

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
sdtEjecutivos | [sBTEjecutivo](#sbtejecutivo) | Listado de ejecutivos.

@tab Errores

No aplica.
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
      <bts:BTConfiguracionBantotal.ObtenerEjecutivos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerEjecutivos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerEjecutivos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 7c588aa5-382d-d407-87f5-fc4d921f6868' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
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
      <BTConfiguracionBantotal.ObtenerEjecutivosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtEjecutivos>
            <sBTEjecutivo>
               <identificador>1</identificador>
               <nombre>Instalador</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>2</identificador>
               <nombre>Bantotal</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>3</identificador>
               <nombre>Grupo 1</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>4</identificador>
               <nombre>Grupo 2</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>5</identificador>
               <nombre>Grupo 3</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>6</identificador>
               <nombre>Grupo 4</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>7</identificador>
               <nombre>Grupo 5</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>8</identificador>
               <nombre>Grupo 7</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>9</identificador>
               <nombre>Grupo 8</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>10</identificador>
               <nombre>Grupo 9</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>11</identificador>
               <nombre>Grupo 11</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>12</identificador>
               <nombre>Grupo 12</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>13</identificador>
               <nombre>Grupo 13</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>14</identificador>
               <nombre>Grupo 15</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>15</identificador>
               <nombre>Grupo 14</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>100</identificador>
               <nombre>Grupo 100</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>101</identificador>
               <nombre>Grupo 101</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>102</identificador>
               <nombre>Grupo 102</nombre>
            </sBTEjecutivo>
            <sBTEjecutivo>
               <identificador>12345</identificador>
               <nombre>COLOCCONF</nombre>
            </sBTEjecutivo>
         </sdtEjecutivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>800</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerEjecutivos</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>18:02:56</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerEjecutivosResponse>
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
    "sdtEjecutivos": {
        "sBTEjecutivo": [
            {
                "identificador": "1",
                "nombre": "Instalador"
            },
            {
                "identificador": "2",
                "nombre": "Bantotal"
            },
            {
                "identificador": "3",
                "nombre": "Grupo 1"
            },
            {
                "identificador": "4",
                "nombre": "Grupo 2"
            },
            {
                "identificador": "5",
                "nombre": "Grupo 3"
            },
            {
                "identificador": "6",
                "nombre": "Grupo 4"
            },
            {
                "identificador": "7",
                "nombre": "Grupo 5"
            },
            {
                "identificador": "8",
                "nombre": "Grupo 7"
            },
            {
                "identificador": "9",
                "nombre": "Grupo 8"
            },
            {
                "identificador": "10",
                "nombre": "Grupo 9"
            },
            {
                "identificador": "11",
                "nombre": "Grupo 11"
            },
            {
                "identificador": "12",
                "nombre": "Grupo 12"
            },
            {
                "identificador": "13",
                "nombre": "Grupo 13"
            },
            {
                "identificador": "14",
                "nombre": "Grupo 15"
            },
            {
                "identificador": "15",
                "nombre": "Grupo 14"
            },
            {
                "identificador": "100",
                "nombre": "Grupo 100"
            },
            {
                "identificador": "101",
                "nombre": "Grupo 101"
            },
            {
                "identificador": "102",
                "nombre": "Grupo 102"
            },
            {
                "identificador": "12345",
                "nombre": "COLOCCONF"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "802",
        "Estado": "OK",
        "Servicio": "BTConfiguracionBantotal.ObtenerEjecutivos",
        "Fecha": "2017-12-17",
        "Requerimiento": "",
        "Hora": "18:03:54",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTEjecutivo  

### sBTEjecutivo

::: center 
Los campos del tipo de dato estructurado sBTEjecutivo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
identificador | Int | Identificador del ejecutivo.
nombre | String | Descripción de ejecutivo.
:::
<!-- CIERRA SDT -->