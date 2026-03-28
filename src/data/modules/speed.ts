import type { TheoryModule } from '../types';

export const speedModule: TheoryModule = {
  id: 'speed-overtaking',
  title: 'Velocidad y Adelantamiento',
  description: 'Limites de velocidad, distancias de frenado y reaccion, reglas de adelantamiento y casos especiales',
  icon: '⚡',
  sections: [
    {
      id: 'speed-limits',
      title: 'Limites generales de velocidad',
      germanTerm: 'Geschwindigkeitsbegrenzungen',
      content: `El conductor del vehiculo puede conducir solo tan rapido que el pueda detenerse dentro de la seccion visible; donde cruzar es dificil, el debe poder detenerse a media distancia de vision (menos de 6 m de ancho de carretera).

A una velocidad de 50 km/h, el vehiculo recorre una distancia de aproximadamente 45 m en 3 segundos.

En condiciones favorables de carretera, trafico y visibilidad, el limite general de velocidad para vehiculos es:

1. **50 km/h** en areas urbanizadas (Innerorts)
2. **80 km/h** fuera de areas urbanizadas, excepto en autopistas (Ausserorts)
3. **100 km/h** en carreteras de doble calzada, siempre indicado por senales
4. **120 km/h** en autopistas (Autobahn)

El conductor del vehiculo no debe conducir tan despacio que el obstaculice un flujo uniforme de trafico sin razones obligatorias.

Las senales "Velocidad maxima" (2.30) y "Velocidad maxima 50 general" (2.30.1) indican la velocidad en km/h que los vehiculos no deben exceder incluso en condiciones favorables de carretera, trafico y visibilidad.`,
      keyRules: [
        '50 km/h en areas urbanizadas (Innerorts)',
        '80 km/h fuera de areas urbanizadas (Ausserorts)',
        '100 km/h en carreteras de doble calzada (senalizado)',
        '120 km/h en autopistas (Autobahn)',
        'A 50 km/h se recorren aprox. 45 m en 3 segundos',
        'Conducir demasiado lento sin razon tambien esta prohibido',
      ],
    },
    {
      id: 'speed-special-conditions',
      title: 'Velocidad en condiciones especiales',
      germanTerm: 'Geschwindigkeit bei besonderen Verhältnissen',
      content: `El conductor debe conducir despacio cuando la carretera este cubierta de nieve o hielo, con follaje mojado, asfalto fresco o con grava, especialmente cuando se lleven remolques.

Si la carretera esta cubierta de hielo o no puede ser comprobado con frenado cuidadoso a baja velocidad. Cuando la temperatura exterior es de **3 grados C o mas baja**, debe anticiparse una carretera helada en puentes y en areas sombreadas.

Cuando una carretera esta mojada, especialmente cuando hay lluvia fuerte y un vehiculo esta conduciendo rapido asi como con neumaticos con poca banda de rodadura, hay un peligro de **aquaplaning** y la velocidad debe ser reducida debido al riesgo de desvio.

El conductor debe reducir su velocidad y, si es necesario, detenerse, cuando ninos en el area de la carretera no esten prestando atencion al trafico y cuando animales esten en la carretera.

**Zonas especiales de velocidad:**
- **Zona 30** (2.59.1): Velocidad maxima 30 km/h en vecindarios y areas residenciales
- **Begegnungszone** / Espacio compartido (2.59.5): Velocidad maxima 20 km/h, peatones tienen prioridad
- **Zona peatonal** (2.59.3): Solo a paso de peaton si se permite trafico excepcionalmente`,
      keyRules: [
        'A 3 grados C o menos, anticipar hielo en puentes y zonas sombreadas',
        'Peligro de aquaplaning con carretera mojada y neumaticos desgastados',
        'Zona 30: maximo 30 km/h',
        'Begegnungszone (espacio compartido): maximo 20 km/h, peatones tienen prioridad',
        'Zona peatonal: solo a paso de peaton',
        'Reducir velocidad ante ninos y animales en la carretera',
      ],
    },
    {
      id: 'speed-stopping-distance',
      title: 'Distancia de detencion',
      germanTerm: 'Anhalteweg',
      content: `La distancia de detencion es la distancia desde el punto donde el peligro emerge hasta el punto donde el vehiculo se detiene. La distancia de detencion consiste en **distancia de reaccion** y **distancia de frenado**.

**Regla practica de la distancia de detencion** sin preparacion para frenar y en carretera seca:

**Formula:** (velocidad/10) x (velocidad/10) + 7 = distancia de detencion aprox.

Ejemplos:
- A **80 km/h:** (80:10) x (80:10) + 7 = 8x8+7 = aprox. **71 m**
- A **60 km/h:** (60:10) x (60:10) + 7 = 6x6+7 = aprox. **43 m**
- A **50 km/h:** (50:10) x (50:10) + 7 = 5x5+7 = aprox. **32 m**
- A **40 km/h:** (40:10) x (40:10) + 7 = 4x4+7 = aprox. **23 m**`,
      keyRules: [
        'Distancia de detencion = distancia de reaccion + distancia de frenado',
        'Formula: (V/10) x (V/10) + 7 metros (carretera seca, sin preparacion)',
        'A 50 km/h: aprox. 32 m de distancia de detencion',
        'A 80 km/h: aprox. 71 m de distancia de detencion',
      ],
    },
    {
      id: 'speed-reaction-distance',
      title: 'Distancia de reaccion',
      germanTerm: 'Reaktionsweg',
      content: `La distancia de reaccion es aprox. **3 m a una velocidad de 10 km/h**. El tiempo de reaccion es aprox. **1 segundo**. Si muestras preparacion para frenar, el tiempo de reaccion se reduce significativamente.

**Formula:** velocidad/10 x 3 = distancia de reaccion

Ejemplos:
- A **60 km/h:** 60:10 x 3 = 6x3 = **18 m** de distancia de reaccion
- A **40 km/h:** 40:10 x 3 = 4x3 = **12 m** de distancia de reaccion`,
      keyRules: [
        'Tiempo de reaccion: aprox. 1 segundo',
        'Formula distancia de reaccion: (V/10) x 3 metros',
        'A 60 km/h: 18 m de distancia de reaccion',
        'Preparacion para frenar reduce significativamente el tiempo de reaccion',
      ],
    },
    {
      id: 'speed-braking-distance',
      title: 'Distancia de frenado',
      germanTerm: 'Bremsweg',
      content: `Ademas de la velocidad, la distancia de frenado depende de si la carretera esta seca, mojada o sucia y de cual sea la condicion del vehiculo (neumaticos, frenos, amortiguadores).

Para frenado de emergencia, es ventajoso si el vehiculo esta equipado con un **ABS** (sistema antibloqueo). Tal sistema previene que las ruedas sean bloqueadas y mejora la maniobrabilidad y estabilidad de conduccion.

**En carreteras mojadas** (distancia de frenado se duplica):
- A 60 km/h: 60:10 x 60:10 = 6x6 = **36 m**
- A 40 km/h: 40:10 x 40:10 = 4x4 = **16 m**

**En carreteras secas** (factor 0.75):
- A 60 km/h: (60:10 x 60:10) x 0.75 = 36x0.75 = **27 m**
- A 40 km/h: (40:10 x 40:10) x 0.75 = 16x0.75 = **12 m**`,
      keyRules: [
        'Carretera mojada: distancia de frenado se duplica respecto a la seca',
        'Formula frenado mojado: (V/10) x (V/10) metros',
        'Formula frenado seco: (V/10) x (V/10) x 0.75 metros',
        'El ABS previene bloqueo de ruedas y mejora maniobrabilidad',
        'Neumaticos, frenos y amortiguadores afectan la distancia de frenado',
      ],
    },
    {
      id: 'speed-overtaking-rules',
      title: 'Reglas generales de adelantamiento',
      germanTerm: 'Überholen',
      content: `Cruzar debe ser realizado a la derecha, adelantar a la izquierda.

Adelantar y pasar obstaculos esta permitido solo cuando el espacio requerido es visible y libre y el trafico contrario no es obstaculizado. En trafico en fila, adelantar puede ser realizado solo por un participante de carretera que este seguro de que el puede reincorporarse a tiempo y sin obstaculizar otros vehiculos.

Cualquiera que adelante debe mostrar particular consideracion por los otros usuarios de la via, especialmente aquellos a quienes el desea adelantar.

Despues de adelantar, el conductor del vehiculo debe reincorporarse de nuevo, tan pronto como no haya mas peligro para los usuarios de la via que han sido adelantados.

**Prohibido adelantar:**
- En curvas ciegas
- Justo antes de cruces ferroviarios sin barreras
- Antes de cimas
- En intersecciones solo si son visibles y la prioridad de otros no es obstaculizada

**No se debe adelantar** cuando el conductor indica su intencion de girar a la izquierda o cuando se detiene antes de un paso peatonal para permitir a peatones cruzar.

Cualquiera que sea adelantado **no debe aumentar su velocidad**.`,
      keyRules: [
        'Regla basica: cruzar por la derecha, adelantar por la izquierda',
        'Solo adelantar cuando hay espacio visible y libre, sin obstaculizar trafico contrario',
        'Prohibido adelantar en curvas ciegas, antes de cimas y cruces ferroviarios sin barreras',
        'No adelantar vehiculos que indican giro a la izquierda o se detienen ante paso peatonal',
        'El vehiculo adelantado no debe aumentar su velocidad',
        'Despues de adelantar, reincorporarse lo antes posible sin peligro',
      ],
    },
    {
      id: 'speed-overtaking-special',
      title: 'Adelantamiento en casos especiales',
      germanTerm: 'Überholen in besonderen Fällen',
      content: `En carreteras que no esten direccionalmente separadas con tres carriles, el conductor del vehiculo no debe usar el carril mas exterior a la izquierda -- en tales carreteras con cuatro carriles, la mitad izquierda de la calzada -- para adelantar.

El conductor del vehiculo no debe adelantar a un vehiculo que esta adelantando a otro vehiculo, excepto cuando:
1. Ambos vehiculos adelantados no son mas anchos que un metro cada uno y la carretera es ancha y visible
2. El esta en una carretera direccionalmente separada con al menos tres carriles en la misma direccion

Vehiculos que se han puesto en carril para girar a la izquierda pueden ser adelantados solo por la derecha.

Donde aparezcan las senales "No adelantar" (2.44) y "No adelantar para camiones" (2.45), los conductores pueden, si es posible sin que ocurra ningun peligro, adelantar vehiculos motorizados que no puedan conducir mas rapido de **30 km/h** (motores de un solo eje, carros motorizados, carretillas motorizadas, carros de trabajo, vehiculos agricolas motorizados).

Conductores pueden adelantar autobuses escolares marcados que se detienen y tienen sus luces de advertencia encendidas solo despacio y con cuidado particular; si es necesario, deben detenerse.`,
      keyRules: [
        'No adelantar por el carril mas exterior en carreteras de 3 carriles sin separacion',
        'Prohibido adelantar a un vehiculo que esta adelantando (salvo excepciones)',
        'Vehiculos en carril de giro a la izquierda: adelantar solo por la derecha',
        'Con senal de No adelantar: se permite adelantar vehiculos que no superan 30 km/h',
        'Autobuses escolares detenidos con luces: adelantar solo despacio y con cuidado',
      ],
    },
    {
      id: 'speed-overtaking-distance',
      title: 'Calculo de la distancia de adelantamiento',
      germanTerm: 'Überholweg',
      content: `La diferencia de velocidad para adelantar debe ser al menos **20 km/h**. La seccion visible debe ser el **doble** de la distancia de adelantamiento (por el trafico contrario).

**Ejemplo 1:**
- Velocidad del coche 1: 80 km/h
- Velocidad del coche 2: 60 km/h
- Diferencia: 20 km/h
- Distancia de adelantamiento: 80 x 80 / 20 = **320 m**
- Seccion visible necesaria: **640 m**

**Ejemplo 2 (mayor diferencia de velocidad):**
- Velocidad del coche 1: 80 km/h
- Velocidad del coche 2: 40 km/h
- Diferencia: 40 km/h
- Distancia de adelantamiento: 80 x 80 / 40 = **160 m**
- Seccion visible necesaria: **320 m**

A velocidades mas altas, se requiere mayor distancia. Conductores de vehiculos deben mantener una distancia lateral de al menos **1 m** al cruzar y adelantar vehiculos de oruga.`,
      keyRules: [
        'Diferencia minima de velocidad para adelantar: 20 km/h',
        'La seccion visible debe ser el doble de la distancia de adelantamiento',
        'Distancia lateral minima de 1 m al adelantar vehiculos de oruga',
        'Formula: distancia = velocidad_propia x velocidad_propia / diferencia_velocidad',
      ],
    },
    {
      id: 'speed-following-distance',
      title: 'Conduccion en caravana y distancia de seguimiento',
      germanTerm: 'Kolonnenfahren',
      content: `Al circular en fila, el conductor debe mantener suficiente distancia para poder detenerse a tiempo incluso si el vehiculo de delante frena de repente.

La distancia respecto al vehiculo delantero debe ser de al menos **2 segundos**.

El frenado y la detencion bruscos solo estan permitidos si no circula otro vehiculo detras y en casos de emergencia.

En trafico lento, el conductor no debe detenerse sobre pasos peatonales ni, en los cruces, sobre la calzada de la via transversal.

Debe aumentar la distancia cuando:
- El vehiculo delantero conduzca de manera insegura
- La caravana avance mas rapido
- La calzada este cubierta de nieve o sobre adoquines`,
      keyRules: [
        'Mantener minimo 2 segundos de distancia con el vehiculo de delante',
        'Frenado brusco solo permitido en emergencias o sin vehiculo detras',
        'No detenerse sobre pasos peatonales ni cruces en trafico lento',
        'Aumentar distancia en condiciones adversas (nieve, conduccion insegura del delantero)',
      ],
    },
  ],
};
