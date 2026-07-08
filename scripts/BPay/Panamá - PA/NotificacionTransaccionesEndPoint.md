---
title: Notificacion de Transacciones
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
::: note Método para realizar Notificacion de Transacciones

**Nombre publicación:** BTPayCaddy.NotificacionTransaccionesEndPoint


**Programa:** rbtbptd09

**Global/País:** Panama
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre            | Tipo   | Comentarios |
 ---------------------------------- | ------ | ------------------------------------------------------------------------------- |
 password                           | String | Contraseña o clave de autenticación para validar la operación                   |
 c1Tipo                             | String | Tipo de mensaje o transacción                            |
 c2CardId                           | String | Identificador de la tarjeta asociada a la transacción                           |
 c3CodigoProceso                    | String | Código de proceso que define el tipo de operación  |
 c4ImporteTransaccion               | String | Monto de la transacción             |
 c7FechaHoraTransaccion             | String | Fecha y hora de la transacción                 |
 BDateUtcCreate                     | String | Fecha de creación del registro                                  |
 c11NumeroIdentificativoTransaccion | String | Número único de identificación de la transacción                     |
 c18CodigoActividadEstablecimiento  | String | Código de categoría del comercio                  |
 c19CodigoPaisAdquirente            | String | Código del país del adquirente                            |
 c38NumeroAutorizacion              | String | Código de autorización generado por el emisor                                   |
 c41TerminalId                      | String | Identificador del terminal donde se realiza la operación                        |
 c42Comercio                        | String | Identificador del comercio                                      |
 c43IdentificadorComercio           | String | Nombre o descripción del comercio                                               |


@tab Datos de Salida

Nombre            | Tipo   | Comentarios |
:--------- | :--------- | :--------- | :---------
 ErroresNegocio | Collection | Lista de errores de negocio |


::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab xml
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
     <bts:BTPayCaddy.NotificacionTransaccionesEndPoint>
         <bts:Btinreq>
            <Canal>BTINTERNO</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>088459081EF05E4F9E3B2B7A</Token>
         </bts:Btinreq>
         <bts:password>SecurePass123</bts:password>
         <bts:c1Tipo>0200</bts:c1Tipo>
         <bts:c2CardId>16843331-08d3-4ed1-a101-0192df055e86</bts:c2CardId>
         <bts:c3CodigoProceso>000000</bts:c3CodigoProceso>  
         <bts:c4ImporteTransaccion>10000</bts:c4ImporteTransaccion>
         <bts:c7FechaHoraTransaccion>0506123045</bts:c7FechaHoraTransaccion>
         <bts:BDateUtcCreate>2026-05-06T12:30:45Z</bts:BDateUtcCreate>
         <bts:c11NumeroIdentificativoTransaccion>123456</bts:c11NumeroIdentificativoTransaccion>
         <bts:c18CodigoActividadEstablecimiento>5411</bts:c18CodigoActividadEstablecimiento>
         <bts:c19CodigoPaisAdquirente>858</bts:c19CodigoPaisAdquirente>
         <bts:c38NumeroAutorizacion>ABC123</bts:c38NumeroAutorizacion>
         <bts:c41TerminalId>TERM001</bts:c41TerminalId>
         <bts:c42Comercio>COM123456789</bts:c42Comercio>
         <bts:c43IdentificadorComercio>SUPERMERCADO</bts:c43IdentificadorComercio>
      </bts:BTPayCaddy.NotificacionTransaccionesEndPoint>
   </soapenv:Body>
</soapenv:Envelope>
```

:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab xml
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPayCaddy.NotificacionTransaccionesEndPointResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>088459081EF05E4F9E3B2B7A</Token>
         </Btinreq>
         <ErroresNegocio></ErroresNegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2026-05-06</Fecha>
            <Hora>12:40:45</Hora>
            <Numero>920208</Numero>
            <Servicio>BTPayCaddy.NotificacionTransaccionesEndPoint</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPayCaddy.NotificacionTransaccionesEndPointResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->