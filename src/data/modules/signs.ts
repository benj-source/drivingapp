import type { TheoryModule } from '../types';

export const signsModule: TheoryModule = {
  id: 'traffic-signs',
  title: 'Senales de Trafico',
  description: 'Senales de advertencia, regulatorias, de prioridad e informativas del sistema vial suizo',
  icon: '🚸',
  sections: [
    {
      id: 'signs-warning-general',
      title: 'Senales de peligro - Generalidades (1.xx)',
      germanTerm: 'Gefahrensignale',
      content: `En general, las senales de peligro tienen la forma de un **triangulo equilatero**, un borde rojo y un simbolo negro sobre fondo blanco. Los conductores deben ajustar su velocidad y adaptarse al peligro.

Las senales de peligro estan sujetas a disposiciones que difieren para senales individuales:

1. Poco antes de sitios de peligro en **areas edificadas**; si estan mas de 50 m delante, la distancia se indica en una "senal de distancia" adjunta (5.01)
2. **150-250 m** antes del sitio de peligro en **areas no edificadas**; si esta regla no puede cumplirse, la distancia se indica en una "senal de distancia" adjunta
3. En **autopistas y carreteras de doble calzada** en el sitio de peligro mismo o un maximo de 100 m antes de el, adicionalmente como senales anticipadas con "senal de distancia" adjunta **500-1000 m** antes del sitio de peligro`,
      keyRules: [
        'Forma: triangulo equilatero, borde rojo, simbolo negro sobre fondo blanco',
        'En areas edificadas: poco antes del peligro (>50 m se indica distancia)',
        'Fuera de areas edificadas: 150-250 m antes del peligro',
        'En autopistas: en el sitio + senal anticipada 500-1000 m antes',
      ],
    },
    {
      id: 'signs-warning-road',
      title: 'Senales de peligro - Carretera',
      germanTerm: 'Gefahrensignale - Strasse',
      content: `**1.01 Curva a la derecha / 1.02 Curva a la izquierda:** Advierten de curvas que obligan a los conductores a reducir su velocidad debido a su composicion (por ejemplo, falta de peralte, curvatura fuerte o desigual de la calzada). En general, no se usan senales de curva en areas edificadas.

**1.03 Curva doble comenzando a la derecha / 1.04 Curva doble comenzando a la izquierda:** Si varias curvas se suceden en intervalos cortos, se coloca la senal correspondiente a la primera curva o curva doble con una "senal de longitud de seccion" adicional (5.03).

**1.05 Peligro por deslizamiento:** Advierte de una superficie de calzada excesivamente resbaladiza, ranuras en carriles o secciones de carretera particularmente expuestas a la formacion de hielo.

**1.06 Calzada desigual:** Advierte de irregularidades (por ejemplo, bultos, hundimientos) de la calzada que podrian causar golpes peligrosos al vehiculo o perdida de adherencia.

**1.07 Cuello de botella:** Indica que la calzada es estrecha a ambos lados y que el cruce se dificulta.

**1.08/1.09 Cuello de botella a la derecha/izquierda:** Indica que la calzada es estrecha en un lado o que el borde tiene proyecciones peligrosas y que cruzar es dificil.`,
      keyRules: [
        '1.01/1.02: Curvas peligrosas - reducir velocidad (no se usan en areas edificadas)',
        '1.05: Peligro por deslizamiento - superficie resbaladiza o hielo',
        '1.06: Calzada desigual - bultos, hundimientos',
        '1.07: Cuello de botella - calzada estrecha a ambos lados',
      ],
    },
    {
      id: 'signs-warning-slope-hazards',
      title: 'Senales de peligro - Pendientes y peligros naturales',
      germanTerm: 'Gefahrensignale - Steigungen und Naturgefahren',
      content: `**1.10 Pendiente peligrosa:** Advierte de secciones con inclinacion descendente de al menos 10%; la mayor inclinacion de la seccion se indica en las senales.

**1.11 Pendiente fuerte hacia arriba:** Advierte de secciones con pendiente ascendente de al menos 10%; la mayor pendiente ascendente de la seccion se indica en las senales. Tambien advierte de grava suelta en la calzada.

**1.13 Caida de rocas:** Advierte de caida de rocas o piedras en la calzada. La senal puede mostrarse invertida lateralmente, segun las condiciones locales.

**1.14 Sitio de construccion:** Advierte de obras en la calzada (por ejemplo, construccion, medicion, senalizacion) y los obstaculos asociados (por ejemplo, depositos de materiales, pozos abiertos, irregularidades y cuellos de botella en la calzada).

**1.15 Barreras / 1.16 Paso a nivel sin barreras:** Sirven para advertir de pasos a nivel. La senal "Barreras" tambien advierte de barreras en aerodromos y similares.

**1.18 Tranvia:** Advierte de vehiculos sobre rieles en las carreteras, especialmente de cruces con vehiculos sobre rieles.`,
      keyRules: [
        '1.10: Pendiente descendente de al menos 10%',
        '1.11: Pendiente ascendente de al menos 10%',
        '1.13: Caida de rocas en la calzada',
        '1.14: Obras en la calzada con posibles obstaculos',
        '1.15/1.16: Pasos a nivel con y sin barreras',
        '1.18: Presencia de tranvias',
      ],
    },
    {
      id: 'signs-warning-users',
      title: 'Senales de peligro - Usuarios y trafico',
      germanTerm: 'Gefahrensignale - Verkehrsteilnehmer',
      content: `**1.22 Paso peatonal:** Anuncia pasos peatonales que el conductor no puede ver con suficiente anticipacion (por ejemplo, debido a curvas o crestas) o pasos peatonales en carreteras con trafico rapido.

**1.23 Ninos:** Indica que con frecuencia hay ninos en la calzada; se coloca en las cercanias de escuelas, parques infantiles y similares.

**1.24 Paso de ciervos:** Indica que se debe anticipar fauna salvaje en la calzada. Si aparece fauna salvaje, frene, baje las luces y toque el claxon.

**1.25 Animales:** Advierte de animales sin supervision en la calzada; el simbolo del animal muestra la especie principal involucrada.

**1.26 Trafico en sentido contrario:** Advierte de vehiculos que vienen en sentido contrario. Se encuentra en autopistas si un carril esta reservado para trafico opuesto, al inicio de carreteras de doble calzada despues de una autopista, y al final de calles de un solo sentido.

**1.27 Semaforos:** Anuncia semaforos donde el conductor puede necesitar detenerse.

**1.30 Otros peligros:** Advierte de peligros en la calzada para los cuales no hay senal especial.

**1.31 Atascos:** Advierte de filas de vehiculos detenidos o en movimiento lento. Solo puede colocarse permanentemente donde los atascos son frecuentes.

**1.32 Ciclistas:** Indica que ciclistas con frecuencia ingresan o cruzan la calzada; solo puede colocarse fuera de cruces.`,
      keyRules: [
        '1.22: Paso peatonal no visible con anticipacion',
        '1.23: Zona con ninos frecuentemente (escuelas, parques)',
        '1.24: Fauna salvaje - frenar, bajar luces, tocar claxon',
        '1.26: Trafico en sentido contrario (cambios de carril en autopistas)',
        '1.27: Semaforos adelante',
        '1.30: Otros peligros sin senal especifica',
        '1.31: Atascos frecuentes',
      ],
    },
    {
      id: 'signs-regulatory-prohibitions',
      title: 'Senales regulatorias - Prohibiciones (2.xx)',
      germanTerm: 'Vorschriftssignale - Verbote',
      content: `Las senales regulatorias indican una instruccion (obligatoria) o prohibicion; generalmente son **redondas**. Las senales de prohibicion generalmente tienen un **borde rojo y un simbolo negro sobre fondo blanco**. Las senales de instruccion tienen un **borde blanco estrecho y un simbolo blanco sobre fondo azul**.

**2.01 Prohibicion general de conduccion en ambos sentidos:** Ningun vehiculo puede circular en ninguno de los dos sentidos. No se aplica a carros de mano de max. 1 m de ancho, cochecitos, sillas de ruedas, bicicletas empujadas y motocicletas de dos ruedas empujadas con motor apagado.

**2.02 Prohibido el paso:** No se permite el paso a ningun vehiculo; sin embargo, se permite el trafico en direccion contraria.

**2.03 Prohibido vehiculos motorizados:** Se aplica a todos los vehiculos motorizados multirrueda, incluidas motocicletas con sidecars.

**2.07 Prohibido camiones:** Se aplica a todos los vehiculos pesados para transporte de material.

**2.09 Prohibido remolques:** Se aplica a todos los vehiculos motorizados con remolques, excepto remolques agricolas.

**2.10.1 Prohibido vehiculos con cargas peligrosas:** Se aplica a todos los vehiculos que deben estar etiquetados correspondientemente.

**2.11 Prohibido vehiculos con carga contaminante de agua:** Se aplica a todos los vehiculos que transportan materiales contaminantes del agua.`,
      keyRules: [
        'Senales de prohibicion: redondas, borde rojo, simbolo negro sobre fondo blanco',
        'Senales de instruccion: redondas, borde blanco, simbolo blanco sobre fondo azul',
        '2.01: Prohibicion total - excepto peatones, sillas de ruedas, bicicletas empujadas',
        '2.02: Prohibido el paso (trafico contrario permitido)',
        '2.09: Prohibido remolques (excepto agricolas)',
      ],
    },
    {
      id: 'signs-regulatory-dimensions-speed',
      title: 'Senales regulatorias - Dimensiones y velocidad',
      germanTerm: 'Vorschriftssignale - Masse und Geschwindigkeit',
      content: `**2.16 Peso maximo:** Prohibe vehiculos y combinaciones de vehiculos cuyo peso operativo exceda el valor indicado.

**2.17 Carga por eje:** Prohibe vehiculos en los cuales un eje exceda la carga indicada. Ejes que estan a menos de 1 m entre si no deben exceder el valor indicado en total.

**2.18 Ancho maximo:** Prohibe vehiculos cuyo ancho, incluida la carga, exceda el valor indicado.

**2.19 Altura maxima:** Prohibe vehiculos cuya altura, incluida la carga, exceda el valor indicado. Se encuentra delante de pasos subterraneos, tuneles, galerias, puentes cubiertos, estructuras que sobresalen en la calzada y similares si vehiculos de 4 m de altura no pueden pasar sin peligro.

**2.20 Longitud maxima:** Prohibe vehiculos y combinaciones de vehiculos que excedan la longitud indicada con la carga incluida.

**2.30 Velocidad maxima:** Las senales indican la velocidad en km/h que los vehiculos no deben exceder incluso en condiciones favorables.

**2.30.1 Velocidad maxima 50 general:** Indica el limite general de 50 km/h en areas urbanizadas.

**2.31 Velocidad minima:** Indica la velocidad minima en condiciones favorables. Vehiculos que no pueden conducir tan rapido no deben continuar.`,
      keyRules: [
        '2.16: Peso maximo del vehiculo o combinacion',
        '2.19: Altura maxima incluyendo carga (referencia: 4 m)',
        '2.30: Velocidad maxima indicada en la senal',
        '2.30.1: Velocidad maxima 50 general (areas urbanizadas)',
        '2.31: Velocidad minima - vehiculos mas lentos no deben continuar',
      ],
    },
    {
      id: 'signs-regulatory-overtaking-direction',
      title: 'Senales regulatorias - Adelantamiento y direccion',
      germanTerm: 'Vorschriftssignale - Überholen und Richtung',
      content: `**2.44 Prohibido adelantar:** Prohibe a los conductores de vehiculos motorizados adelantar vehiculos motorizados multirrueda y tranvias. Aun se permite adelantar vehiculos que no superan 30 km/h (motores de un solo eje, carros motorizados, vehiculos agricolas). Los vehiculos pueden pasar tranvias en movimiento por la derecha.

**2.45 Prohibido adelantar para camiones:** Prohibe a conductores de vehiculos cuyo peso total exceda 3,5 t adelantar vehiculos motorizados multirrueda y tranvias; los autocares estan exceptuados.

**2.42 Prohibido girar a la derecha / 2.43 Prohibido girar a la izquierda:** Indica que no se permite girar en la direccion indicada en el lugar senalizado.

**2.46 Prohibido girar:** Prohibe a los vehiculos girar en el lugar indicado.

**2.32/2.33 Direccion obligatoria a la derecha/izquierda:** El conductor debe girar en la direccion indicada antes de la senal.

**2.36 Conduzca recto:** El conductor no puede girar ni a la derecha ni a la izquierda.

**2.41.1 Interseccion de rotonda:** En rotondas, indica la direccion que el trafico debe cumplir; se encuentra antes de la entrada y debajo de la senal "Ceda el paso" (3.02).`,
      keyRules: [
        '2.44: Prohibido adelantar (excepto vehiculos < 30 km/h)',
        '2.45: Prohibido adelantar para camiones > 3.5 t (excepto autocares)',
        '2.42/2.43: Prohibido girar a derecha/izquierda',
        '2.46: Prohibido girar (dar la vuelta)',
        '2.32/2.33: Direccion obligatoria',
        '2.36: Conducir solo recto',
      ],
    },
    {
      id: 'signs-priority',
      title: 'Senales de derecho de paso (3.xx)',
      germanTerm: 'Vortrittsignale',
      content: `Las senales de derecho de paso indican que el conductor debe ceder el paso a otros vehiculos o que el tiene derecho de paso sobre otros vehiculos.

**3.01 Alto (Stop):** Obliga al conductor a detenerse y a ceder el paso a los vehiculos en la via que se aproxima. La parte delantera del vehiculo no debe sobrepasar la linea de alto.

**3.02 Sin derecho de paso (Ceda el paso):** Obliga al conductor a ceder el paso a los vehiculos en la via que se aproxima. En intersecciones con semaforos, las senales de "Alto" y "Sin derecho de paso" se deben cumplir solo si el trafico no esta regulado por semaforos.

**3.03 Via principal:** Designa carreteras con derecho de paso e indica al conductor que el Rechtsvortritt no se aplica en las siguientes intersecciones.

**3.04 Fin de la via principal:** Indica que el derecho de paso ya no aplica y que el Rechtsvortritt vuelve a aplicarse.

**3.05 Interseccion con carretera sin derecho de paso:** Indica al conductor en carreteras secundarias que el tiene derecho de paso en la siguiente interseccion.

**3.06 Interseccion con derecho de paso por la derecha:** En carreteras secundarias, anuncia una interseccion en la que aplica el Rechtsvortritt.

**3.09 Ceder paso al trafico opuesto:** Obliga a ceder paso al trafico opuesto en estrechamientos de calzada.

**3.10 Derecho de paso sobre trafico opuesto:** Indica que el conductor puede continuar en estrechamientos y que el trafico contrario debe esperar.`,
      keyRules: [
        '3.01 Stop: detenerse completamente y ceder el paso',
        '3.02 Ceda el paso: ceder paso sin necesidad de detenerse completamente',
        '3.03 Via principal: anula el Rechtsvortritt',
        '3.04 Fin de via principal: restaura el Rechtsvortritt',
        '3.09/3.10: Regulacion de paso en estrechamientos',
        'Stop y Ceda el paso solo aplican si los semaforos no funcionan',
      ],
    },
    {
      id: 'signs-informative',
      title: 'Senales de aviso e informativas (4.xx)',
      germanTerm: 'Hinweissignale',
      content: `Las senales de aviso que incluyen reglas de comportamiento son rectangulares o cuadradas. En general, tienen un **simbolo blanco o un simbolo en un campo interno blanco, sobre fondo azul**.

**4.01 Autopista:** Designa carreteras reservadas para trafico de vehiculos motorizados (120 km/h). Elimina todas las restricciones previamente senalizadas.

**4.03 Carretera de doble calzada:** Designa carreteras reservadas para trafico de vehiculos motorizados (100 km/h). Elimina todas las restricciones previamente senalizadas.

**4.05 Bergpoststrasse (carretera postal de montana):** Designa carreteras en las que el conductor debe prestar atencion a las senales e indicaciones de los conductores de vehiculos de servicio publico regular al enfrentar cruces dificiles y adelantamientos.

**4.07 Tunel:** Designa un tramo que atraviesa un tunel con reglas especiales. Los conductores deben encender las luces de cruce, incluso si el tunel esta iluminado.

**4.08 Calle de un solo sentido (Einbahnstrasse):** Los vehiculos solo pueden circular en la direccion indicada. Al otro extremo esta la senal "Prohibido el paso" (2.02).

**4.11 Ubicacion de un paso peatonal:** Resalta la ubicacion de un paso peatonal. Siempre se encuentra en areas no urbanizadas y en pasos peatonales inesperados en areas urbanizadas.

**4.17 Estacionamiento permitido:** Designa areas de estacionamiento. Restricciones de tiempo y derechos se indican en senal adicional.

**4.18 Estacionamiento con disco (Blaue Zone):** El conductor debe colocar la flecha en el disco de estacionamiento en la linea siguiente a la hora de llegada y colocar el disco detras del parabrisas de manera claramente visible. La configuracion no debe cambiarse hasta que el conductor se retire.`,
      keyRules: [
        'Senales informativas: rectangulares/cuadradas, simbolo blanco sobre fondo azul',
        '4.01 Autopista: 120 km/h, elimina restricciones previas',
        '4.03 Doble calzada: 100 km/h, elimina restricciones previas',
        '4.05 Bergpoststrasse: obedecer indicaciones de vehiculos postales de montana',
        '4.07 Tunel: encender luces de cruce aunque este iluminado',
        '4.08 Einbahnstrasse: circulacion en una sola direccion',
        '4.18 Blaue Zone: usar disco de estacionamiento visible en el parabrisas',
      ],
    },
    {
      id: 'signs-zones-direction',
      title: 'Senales de zona y direccion',
      germanTerm: 'Zonensignale und Wegweiser',
      content: `**2.59.1 Zona 30:** Designa carreteras en vecindarios o areas residenciales en las que los conductores deben circular con cuidado y consideracion particulares. La velocidad maxima es **30 km/h**.

**2.59.3 Zona peatonal (Fussgängerzone):** Reservado para peatones y usuarios de equipos similares a vehiculos. Si se permite trafico limitado de vehiculos, estos no pueden circular mas rapido que a **paso de peaton**; los peatones tienen prioridad.

**2.59.5 Espacio compartido (Begegnungszone):** Designa calles en areas residenciales o comerciales en las que peatones y usuarios de equipos similares a vehiculos pueden usar toda el area de trafico. Tienen derecho de paso sobre los conductores de vehiculos. La velocidad maxima es **20 km/h**.

**Senales de direccion:**
- Letras blancas sobre **fondo verde**: direccion hacia autopistas o carreteras de doble calzada
- Letras blancas sobre **fondo azul**: carreteras principales
- Letras negras sobre **fondo blanco**: carreteras secundarias
- Fondo **naranja**: desvios

**4.27/4.28 Entrada/Salida de la ciudad por carreteras principales:** Senales de lugar con letras blancas sobre fondo azul.

**4.29/4.30 Entrada/Salida por carreteras secundarias:** Senales de lugar con letras negras sobre fondo blanco.`,
      keyRules: [
        'Zona 30: maximo 30 km/h, cuidado especial',
        'Zona peatonal: solo a paso de peaton, peatones tienen prioridad',
        'Begegnungszone: maximo 20 km/h, peatones tienen prioridad',
        'Senales verdes: autopistas/doble calzada; azules: principales; blancas: secundarias; naranjas: desvios',
        'Letras blancas sobre azul: carreteras principales (entrada/salida ciudad)',
      ],
    },
  ],
};
