---
title: Obtener Impuestos
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
::: note Método para obtener un listado de los impuestos ingresados en Bantotal.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerImpuestos

**Programa:** RBTPG710

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
sdtImpuestos | [sBTImpuesto](#sbtimpuesto) | Listado de impuestos.

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
      <bts:BTConfiguracionBantotal.ObtenerImpuestos>
         <bts:Btinreq>
            <bts:Device>BTDIGITAL</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>670752960CD285A89A23FBEE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerImpuestos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerImpuestos' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": 1,
	  "Usuario": "BANTOTAL",
	  "Token": "558273287F955E77534D3E02",
	  "Device": "AC"
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
      <BTConfiguracionBantotal.ObtenerImpuestosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>670752960CD285A89A23FBEE</Token>
            <Device>BTDIGITAL</Device>
         </Btinreq>
         <sdtImpuestos>
            <sBTImpuesto>
               <codigo>1</codigo>
               <descripcion>I.V.A.</descripcion>
               <condiciones>
                  <sBTImpuestoCondicion>
                     <codigo>1</codigo>
                     <descripcion>Gravado</descripcion>
                     <tipo>A</tipo>
                  </sBTImpuestoCondicion>
                  <sBTImpuestoCondicion>
                     <codigo>2</codigo>
                     <descripcion>Responsable Inscripto</descripcion>
                     <tipo>J</tipo>
                  </sBTImpuestoCondicion>
                  <sBTImpuestoCondicion>
                     <codigo>4</codigo>
                     <descripcion>Exento o  No Alcanzado</descripcion>
                     <tipo>A</tipo>
                  </sBTImpuestoCondicion>
               </condiciones>
            </sBTImpuesto>
            <sBTImpuesto>
               <codigo>2</codigo>
               <descripcion>Ingresos Brutos Percepciones</descripcion>
               <condiciones>
                  <sBTImpuestoCondicion>
                     <codigo>1</codigo>
                     <descripcion>Gravado</descripcion>
                     <tipo/>
                  </sBTImpuestoCondicion>
                  <sBTImpuestoCondicion>
                     <codigo>2</codigo>
                     <descripcion>Responsable Inscripto</descripcion>
                     <tipo/>
                  </sBTImpuestoCondicion>
               </condiciones>
            </sBTImpuesto>
            <sBTImpuesto>
               <codigo>4</codigo>
               <descripcion>Impuesto de Sellos</descripcion>
               <condiciones>
                  <sBTImpuestoCondicion>
                     <codigo>1</codigo>
                     <descripcion>Gravado</descripcion>
                     <tipo/>
                  </sBTImpuestoCondicion>
                  <sBTImpuestoCondicion>
                     <codigo>2</codigo>
                     <descripcion>Exento</descripcion>
                     <tipo/>
                  </sBTImpuestoCondicion>
               </condiciones>
            </sBTImpuesto>
            <sBTImpuesto>
               <codigo>5</codigo>
               <descripcion>Ret. Impuesto a las Ganancias</descripcion>
               <condiciones>
                  <sBTImpuestoCondicion>
                     <codigo>1</codigo>
                     <descripcion>Gravado</descripcion>
                     <tipo/>
                  </sBTImpuestoCondicion>
                  <sBTImpuestoCondicion>
                     <codigo>4</codigo>
                     <descripcion>Excento</descripcion>
                     <tipo/>
                  </sBTImpuestoCondicion>
               </condiciones>
            </sBTImpuesto>
         </sdtImpuestos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTConfiguracionBantotal.ObtenerImpuestos</Servicio>
            <Fecha>2021-05-27</Fecha>
            <Hora>11:58:08</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8353</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerImpuestosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
 { 
   "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": 1, 
      "Usuario": "INSTALADOR", 
      "Token": "670752960CD285A89A23FBEE", 
      "Device": "BTDIGITAL" 
   }, 
   "sdtImpuestos": { 
      "sBTImpuesto": [ 
         { 
            "codigo": 1, 
            "descripcion": "I.V.A.", 
            "condiciones": { 
               "sBTImpuestoCondicion": [ 
                  { 
                     "codigo": 1, 
                     "descripcion": "Gravado", 
                     "tipo": "A" 
                  }, 
                  { 
                     "codigo": 2, 
                     "descripcion": "Responsable Inscripto", 
                     "tipo": "J" 
                  }, 
                  { 
                     "codigo": 4, 
                     "descripcion": "Exento o  No Alcanzado", 
                     "tipo": "A" 
                  } 
               ] 
            } 
         }, 
         { 
            "codigo": 2, 
            "descripcion": "Ingresos Brutos Percepciones", 
            "condiciones": { 
               "sBTImpuestoCondicion": [ 
                  { 
                     "codigo": 1, 
                     "descripcion": "Gravado", 
                     "tipo": null 
                  }, 
                  { 
                     "codigo": 2, 
                     "descripcion": "Responsable Inscripto", 
                     "tipo": null 
                  } 
               ] 
            } 
         }, 
         { 
            "codigo": 4, 
            "descripcion": "Impuesto de Sellos", 
            "condiciones": { 
               "sBTImpuestoCondicion": [ 
                  { 
                     "codigo": 1, 
                     "descripcion": "Gravado", 
                     "tipo": null 
                  }, 
                  { 
                     "codigo": 2, 
                     "descripcion": "Exento", 
                     "tipo": null 
                  } 
               ] 
            } 
         }, 
         { 
            "codigo": 5, 
            "descripcion": "Ret. Impuesto a las Ganancias", 
            "condiciones": { 
               "sBTImpuestoCondicion": [ 
                  { 
                     "codigo": 1, 
                     "descripcion": "Gravado", 
                     "tipo": null 
                  }, 
                  { 
                     "codigo": 4, 
                     "descripcion": "Excento", 
                     "tipo": null 
                  } 
               ] 
            } 
         } 
      ] 
   }, 
   "Erroresnegocio": null, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTConfiguracionBantotal.ObtenerImpuestos", 
      "Fecha": "2021-05-27", 
      "Hora": "11:58:08", 
      "Requerimiento": 1, 
      "Numero": 8353, 
      "Estado": "OK" 
   } 
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTImpuesto  

### sBTImpuesto

::: center 
Los campos del tipo de dato estructurado sBTImpuesto son los siguientes: 

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
codigo | Short | Código de impuesto.
condiciones | [sBTImpuestoCondicion](#sbtimpuestocondicion) | Listado de condiciones del impuesto.
descripcion | String | Descripción del impuesto.
:::

::: details sBTImpuestoCondicion

### sBTImpuestoCondicion

Los campos del tipo de dato estructurado sBTImpuestoCondicion son los siguientes: 

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
codigo | Short | Código de condición.
descripcion | String | Descripción de condición.
tipo | String | Tipo de condición.
:::

<!-- CIERRA SDT -->

