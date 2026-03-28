import type { TheoryModule } from '../types';

export const priorityModule: TheoryModule = {
  id: 'priority',
  title: 'Prioridad e Intersecciones',
  description: 'Reglas de prioridad, rotondas, giros, semaforos, senales policiales y jerarquia de senales',
  icon: '🔀',
  sections: [
    {
      id: 'priority-rechtsvortritt',
      title: 'Prioridad por la derecha (Rechtsvortritt)',
      germanTerm: 'Rechtsvortritt',
      content: `En las intersecciones, el vehiculo que viene por la derecha tiene prioridad. Esta es la regla fundamental de prioridad en Suiza conocida como **Rechtsvortritt**.

Antes de girar a la izquierda, se debe ceder el paso a los vehiculos que vienen de frente.

Si varios vehiculos llegan a una interseccion donde rige la prioridad por la derecha, los conductores deben comunicarse con senales manuales.

Si dos o mas carreteras con senales de "Stop" o "Ceda el paso" confluyen en el mismo punto hacia una carretera prioritaria, los conductores de esas carreteras deben respetar la prioridad de la derecha entre si.`,
      keyRules: [
        'En intersecciones sin senalizacion, el vehiculo que viene por la derecha tiene prioridad (Rechtsvortritt)',
        'Antes de girar a la izquierda, siempre ceder el paso al trafico que viene de frente',
        'Si varios vehiculos llegan a una interseccion con Rechtsvortritt, deben comunicarse con senales manuales',
        'En confluencia de carreteras con Stop/Ceda el paso, se respeta la prioridad de la derecha entre si',
      ],
    },
    {
      id: 'priority-main-road',
      title: 'Carreteras principales y secundarias',
      germanTerm: 'Hauptstrasse / Nebenstrasse',
      content: `Los vehiculos en carreteras principales designadas tienen prioridad, incluso si vienen desde la izquierda. La regulacion mediante senales o por la policia sigue teniendo efecto.

La senal **3.03 Via principal** designa carreteras con derecho de paso e indica al conductor que el derecho de paso legal por la derecha (Rechtsvortritt) no se aplica en las siguientes intersecciones.

La senal **3.04 Fin de la via principal** indica que el derecho de paso ya no aplica y que el Rechtsvortritt vuelve a aplicarse en las intersecciones.

Los conductores que salen de fabricas, fincas, garajes, caminos rurales, ciclovias, aparcamientos, gasolineras u otros accesos similares, o que crucen una acera hacia una carretera principal o secundaria, deben ceder el paso a los usuarios de estas vias. Si la visibilidad es reducida, deben detenerse.`,
      keyRules: [
        'Vehiculos en carreteras principales tienen prioridad incluso si vienen desde la izquierda',
        'La senal 3.03 (Via principal) anula el Rechtsvortritt en las intersecciones siguientes',
        'La senal 3.04 (Fin de via principal) restaura el Rechtsvortritt',
        'Al salir de garajes, aparcamientos o accesos similares, siempre ceder el paso',
      ],
    },
    {
      id: 'priority-roundabout',
      title: 'Interseccion de rotonda (Kreisverkehr)',
      germanTerm: 'Kreisverkehr',
      content: `Antes de entrar en una interseccion de rotonda, el conductor debe reducir su velocidad y dar prioridad a los vehiculos que se acercan desde la izquierda en la rotonda.

El conductor no tiene que indicar su direccion al entrar en la interseccion de rotonda y, a menos que ocurra un cambio de carril, al conducir en la rotonda.

La salida de la rotonda **debe ser indicada** con el intermitente.

La senal **2.41.1 Interseccion de rotonda** indica la direccion que el trafico debe cumplir en la rotonda; se encuentra antes de la entrada y debajo de la senal "Ceda el paso" (3.02). En conjunto con la senal "Interseccion de rotonda", la senal "Ceda el paso" indica al conductor que debe ceder el paso a los vehiculos que se aproximan desde la izquierda en la rotonda.`,
      keyRules: [
        'Dar prioridad a los vehiculos que ya circulan en la rotonda (vienen por la izquierda)',
        'No es necesario indicar al entrar en la rotonda',
        'Es obligatorio indicar con intermitente al salir de la rotonda',
        'La senal 2.41.1 se combina con Ceda el paso (3.02) en la entrada de rotondas',
      ],
    },
    {
      id: 'priority-turning',
      title: 'Ponerse en carril y girar',
      germanTerm: 'Einspuren und Abbiegen',
      content: `Conductores que deseen girar a la derecha deben detenerse en el lado derecho de la carretera; conductores que deseen girar a la izquierda deben detenerse hacia el medio de la carretera.

Conductores de vehiculos deben ponerse en carril en una etapa temprana. Ellos tambien deben ponerse en carril al girar fuera de intersecciones y, en la medida de lo posible, en carreteras estrechas.

Al ponerse en carril hacia la izquierda, el conductor del vehiculo no debe usar el espacio destinado al trafico contrario.

En carreteras de tres carriles con o sin senalizacion, el puede usar el carril central con el cuidado requerido.

Vehiculos que vienen en direcciones contrarias que ambos quieran girar a la izquierda en una interseccion deben cruzar hacia la izquierda.

En intersecciones con regulacion de trafico, conductores que giran deben dar a peatones o usuarios de equipos similares a vehiculos prioridad para cruzar el cruce. Esto no aplica cuando hay semaforos y conducir esta aprobado por una flecha verde y ninguna luz amarilla intermitente esta encendida.`,
      keyRules: [
        'Para girar a la derecha: colocarse en el lado derecho; para girar a la izquierda: hacia el centro',
        'Ponerse en carril con suficiente antelacion',
        'Vehiculos opuestos que giran a la izquierda deben cruzar hacia la izquierda',
        'Al girar, ceder el paso a peatones que cruzan (salvo flecha verde sin ambar intermitente)',
      ],
    },
    {
      id: 'priority-traffic-lights',
      title: 'Semaforos (Ampeln)',
      germanTerm: 'Ampeln / Lichtsignale',
      content: `**Luz roja** significa "Detenerse".

**Luz verde** significa que el trafico puede ir. Vehiculos que giran deben dar prioridad al trafico contrario y a los peatones o usuarios de equipos similares a vehiculos en el cruce. Antes de girar a la izquierda, debe darse prioridad a los vehiculos que vienen de frente.

**Las flechas verdes** permiten la circulacion en la direccion indicada. Si al mismo tiempo parpadea una luz ambar junto a ellas, los vehiculos que giran deben ceder el paso al trafico en sentido contrario y a los peatones en el cruce.

**La luz ambar** significa:
1. Si sigue a la luz verde: detenerse los vehiculos que aun puedan hacerlo antes de la interseccion.
2. Si aparece junto con la luz roja: prepararse para continuar la marcha y esperar la luz verde.

**La luz ambar intermitente** advierte al conductor que debe tener especial precaucion.

En los cruces con semaforos, las senales de "Stop" y "Ceda el paso" se obedecen solo si el trafico **no esta regulado** por semaforos.`,
      keyRules: [
        'Luz roja: detenerse obligatoriamente',
        'Luz verde: circular, pero al girar ceder paso a trafico contrario y peatones',
        'Ambar tras verde: detenerse si es posible antes de la interseccion',
        'Ambar con roja: prepararse para arrancar, esperar la verde',
        'Ambar intermitente: precaucion especial',
        'Stop/Ceda el paso solo se obedecen si los semaforos no estan funcionando',
      ],
    },
    {
      id: 'priority-police-signals',
      title: 'Senales y ordenes policiales',
      germanTerm: 'Polizeiliche Zeichen und Weisungen',
      content: `Son vinculantes para la conducta en la via las senales y ordenes de:

- Miembros uniformados de la policia y policia auxiliar
- Organismos de transporte militar, bomberos uniformados y autoridades de proteccion civil
- Miembros identificados de los servicios escolares, de fabrica y de cadetes de transporte
- Personal en obras viales
- Autoridades aduaneras en puestos de control y en areas cercanas a fronteras
- Personal de servicio en pasos a nivel

Si el trafico esta regulado por la policia, los usuarios de la via deben esperar sus senales, excepto cuando circulan en una caravana en movimiento y mientras no se de una senal de alto.

**Las senales manuales significan:**
1. **Brazo levantado:** detenerse antes de la interseccion en todas las direcciones
2. **Brazo extendido:** detenerse el trafico que viene por detras
3. **Ambos brazos extendidos hacia los lados:** detenerse el trafico de frente y por detras
4. **Senal de avance con el brazo:** libre para circular en la direccion correspondiente
5. **Movimiento del brazo arriba y abajo:** reducir la velocidad`,
      keyRules: [
        'Las senales de la policia tienen la maxima prioridad sobre todas las demas regulaciones',
        'Brazo levantado = detenerse en todas las direcciones',
        'Brazo extendido = detenerse el trafico que viene por detras',
        'Ambos brazos extendidos = detenerse trafico de frente y por detras',
        'Movimiento del brazo arriba y abajo = reducir velocidad',
      ],
    },
    {
      id: 'priority-hierarchy',
      title: 'Jerarquia de senales',
      germanTerm: 'Signalhierarchie',
      content: `En el trafico suizo existe una jerarquia clara de regulaciones que determina cual tiene prioridad cuando hay conflicto:

1. **Senales policiales** - Tienen la maxima prioridad absoluta
2. **Semaforos (Lichtsignale)** - Los semaforos tienen prioridad sobre las reglas generales de prioridad, las senales de prioridad y las marcas viales
3. **Senales de prioridad** - Las senales como Stop (3.01), Ceda el paso (3.02), Via principal (3.03)
4. **Regla general de prioridad por la derecha (Rechtsvortritt)** - Se aplica cuando no hay ninguna de las regulaciones anteriores

Las senales de luz tienen precedencia sobre las reglas generales de derecho de paso, senales de derecho de paso y marcas.

En los cruces con semaforos, las senales de "Stop" y "Ceda el paso" se obedecen solo si el trafico no esta regulado por semaforos.`,
      keyRules: [
        'Jerarquia: Policia > Semaforos > Senales de prioridad > Rechtsvortritt',
        'Los semaforos anulan las senales de Stop y Ceda el paso cuando estan en funcionamiento',
        'Las senales de luz tienen precedencia sobre marcas viales y senales de prioridad',
        'Sin ninguna regulacion, se aplica la prioridad por la derecha (Rechtsvortritt)',
      ],
    },
    {
      id: 'priority-emergency-vehicles',
      title: 'Vehiculos de emergencia',
      germanTerm: 'Einsatzfahrzeuge',
      content: `Todos los usuarios de la via deben ceder el paso a los vehiculos de bomberos, ambulancias y policia que se anuncien con luz azul y sirena, incluso cuando el trafico este regulado por semaforos.

Cuando sea esencial despejar inmediatamente la calzada, los conductores deben subirse a la acera con la precaucion necesaria.

Los conductores de vehiculos no motorizados, ciclistas, jinetes y guias de caballos u otros animales grandes tienen los mismos derechos de prioridad que los conductores de vehiculos motorizados.`,
      keyRules: [
        'Vehiculos con luz azul y sirena tienen prioridad absoluta sobre todos los usuarios',
        'Se debe ceder el paso a vehiculos de emergencia incluso con semaforo en verde',
        'Si es necesario, subirse a la acera con precaucion para despejar la via',
        'Ciclistas y vehiculos no motorizados tienen los mismos derechos de prioridad que los motorizados',
      ],
    },
    {
      id: 'priority-pedestrians',
      title: 'Prioridad de peatones',
      germanTerm: 'Fussgaenger-Vortritt',
      content: `Antes de pasos peatonales sin regulacion de trafico, el conductor del vehiculo debe conceder prioridad a cualquier peaton o usuario de un equipo similar a un vehiculo que ya este en el cruce o que este esperando delante de el y visiblemente quiera cruzar la carretera. El debe reducir su velocidad a tiempo y, si es necesario, detenerse, para que el pueda cumplir esta obligacion.

En pasos peatonales sin regulacion de trafico, peatones tienen prioridad, excepto frente a tranvias. Sin embargo, ellos no deben usar su prioridad si el vehiculo ya esta tan cerca que no podria detenerse a tiempo.

En pasos peatonales sin regulacion de trafico que estan divididos por una isla de trafico, cada parte del cruce es considerada un cruce separado.

El derecho de paso debe siempre ser concedido a personas ciegas no acompanadas cuando ellos levantan su baston blanco para indicar que ellos quieren cruzar la carretera.

Delante de pasos peatonales, una linea de no detenerse (amarilla, continua; 6.18) de al menos 10 m de longitud prohibe detenerse voluntariamente en la carretera y la acera adyacente.`,
      keyRules: [
        'En pasos peatonales sin semaforo, los peatones tienen prioridad (excepto frente a tranvias)',
        'El conductor debe reducir velocidad a tiempo y detenerse si es necesario ante un paso peatonal',
        'Personas ciegas con baston blanco siempre tienen derecho de paso',
        'Pasos peatonales divididos por isla de trafico: cada parte es un cruce separado',
        'Linea amarilla continua (min. 10 m) prohibe detenerse frente a pasos peatonales',
      ],
    },
  ],
};
