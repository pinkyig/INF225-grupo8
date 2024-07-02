# Pruebas Con JMeter

Estas son las pruebas de rendimiento echas para la probrar nuestra aplicacion bajo stress con JMeter

# Pimera prueba
<div style="display: flex; justify-content: space-around;">
    <img src="https://github.com/pinkyig/INF225-grupo8/blob/main/proyecto/%E2%80%9Cloadtests/Grafico1.png" alt="Logo de GitHub" width="500" height="300">
    <img src="https://github.com/pinkyig/INF225-grupo8/blob/main/proyecto/%E2%80%9Cloadtests/Latencia1.png" alt="Logo de GitHub" width="500" height="300">
</div>

## Análisis de Resultados de la Prueba en JMeter

### Descripción de la Prueba

La prueba realizada en JMeter consiste en enviar múltiples solicitudes GET a una API de manera continua hasta que el servidor no pueda manejar la carga y comience a fallar o a ralentizarse significativamente. El objetivo de esta prueba es evaluar la capacidad del servidor y determinar el punto de saturación.

## Razones por las que se Alcanzan o No se Alcanzan los Resultados Esperados

### Caso 1: La API se Satura y Comienza a Fallar

**Razones por las que no alcanza el resultado esperado:**

1. **Capacidad del Servidor:** El servidor tiene una capacidad limitada para manejar solicitudes concurrentes. A medida que el número de solicitudes aumenta, los recursos del servidor (CPU, memoria, ancho de banda) se agotan, lo que lleva a tiempos de respuesta más largos y eventualmente a errores en las respuestas, el aumento en los tiempos de respuesta se vuelve visible en la imagen conjunta al grafico.
   
2. **Conexiones Simultáneas:** Un alto número de conexiones simultáneas puede sobrecargar el servidor, especialmente si no está configurado para manejar una gran cantidad de conexiones concurrentes. Esto puede resultar en fallas en la conexión y en tiempos de espera agotados (timeouts).

3. **Cola de Solicitudes:** Si el servidor utiliza una cola para manejar las solicitudes entrantes, una cantidad excesiva de solicitudes puede llenar la cola, causando que las nuevas solicitudes sean rechazadas o que tengan que esperar mucho tiempo para ser procesadas.


# Segunda prueba

<div style="display: flex; justify-content: space-around;">
    <img src="https://github.com/pinkyig/INF225-grupo8/blob/main/proyecto/%E2%80%9Cloadtests/POST-settings.jpg" alt="Logo de GitHub" width="600" height="300">
    <img src="https://github.com/pinkyig/INF225-grupo8/blob/main/proyecto/%E2%80%9Cloadtests/POST-bodyData.jpg" alt="Logo de GitHub" width="400" height="300">
</div>

![FotoError](https://github.com/pinkyig/INF225-grupo8/blob/main/proyecto/%E2%80%9Cloadtests/POST-Error.png)


## Descripción de la Prueba

La prueba realizada en JMeter consiste en enviar múltiples solicitudes POST a una API para crear usuarios en el sistema de manera continua. El objetivo de esta prueba es evaluar la capacidad del sistema para manejar una alta carga de operaciones de escritura y determinar el punto de saturación de la base de datos. Durante la prueba, se observó que la base de datos falló y el proyecto dejó de funcionar.

## Razones por las que se Alcanzan o No se Alcanzan los Resultados Esperados

### Caso: La Base de Datos Falla y el Proyecto Deja de Funcionar

**Posibles razones por las que se obtuvo este resultado:**

1. **Capacidad de la Base de Datos:** La base de datos tiene una capacidad limitada para manejar operaciones concurrentes de escritura. La creación de un gran número de usuarios en un corto período de tiempo puede saturar la base de datos, llevando a tiempos de respuesta más largos y, eventualmente, a fallos en las transacciones.

2. **Bloqueos y Contenciones:** La alta concurrencia de operaciones de escritura puede causar bloqueos y contenciones en la base de datos, donde múltiples transacciones compiten por los mismos recursos. Esto puede resultar en un aumento en los tiempos de espera y en la posibilidad de que las transacciones fallen.

3. **Configuración de Recursos Insuficiente:** La configuración de los recursos del servidor de la base de datos (CPU, memoria, almacenamiento) puede no ser adecuada para manejar la alta carga generada por la prueba. Esto puede llevar a un agotamiento de los recursos y a la interrupción del servicio.

4. **Falta de Optimización de la Base de Datos:** La base de datos puede no estar optimizada para manejar un alto volumen de operaciones de escritura. La falta de índices adecuados, consultas ineficientes y un esquema de base de datos no optimizado pueden contribuir a la sobrecarga y eventual fallo.


# Tercera prueba

<div style="display: flex; justify-content: space-around;">
    <img src="https://github.com/pinkyig/INF225-grupo8/blob/main/proyecto/%E2%80%9Cloadtests/Grafico3.png.jpg" alt="Logo de GitHub" width="500" height="300">
    <img src="https://github.com/pinkyig/INF225-grupo8/blob/main/proyecto/%E2%80%9Cloadtests/TiemposDeRespuesta3.jpg" alt="Logo de GitHub" width="500" height="300">
</div>

## Descripción de la Prueba

La prueba realizada en JMeter consiste en enviar múltiples solicitudes GET a una API para obtener todas las horas de un paciente específico de manera continua. El objetivo de esta prueba es evaluar la capacidad del servidor para manejar una alta carga de solicitudes de lectura y observar el impacto en el tiempo de respuesta. Durante la prueba, se observó que el tiempo de respuesta del servidor aumentó, pero no hubo fallos.

## Razones por las que se Alcanzan o No se Alcanzan los Resultados Esperados

### Caso: La Prueba se Ejecuta Perfectamente con Aumento en el Tiempo de Respuesta

**Razones por las que se alcanza el resultado esperado:**

1. **Capacidad de Manejo de Carga del Servidor:** El servidor está configurado para manejar múltiples solicitudes concurrentes de lectura. Aunque el aumento en el número de solicitudes afecta el tiempo de respuesta, el servidor puede procesar todas las solicitudes sin fallar.

2. **Optimización de Consultas:** Las consultas a la base de datos para obtener las horas del paciente están bien optimizadas. Esto significa que las consultas utilizan índices y otras técnicas de optimización para minimizar el impacto en el rendimiento.

3. **Recursos Adecuados:** El servidor tiene suficientes recursos (CPU, memoria, ancho de banda) para manejar la carga aumentada. Aunque el aumento en las solicitudes genera una mayor demanda de recursos, estos no se agotan y el servidor sigue funcionando correctamente.

