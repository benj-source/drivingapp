import type { FlashcardDeck } from '../types';

export const signsDeck: FlashcardDeck = {
  id: 'fc-signs',
  moduleId: 'traffic-signs',
  title: 'Senales de trafico suizas',
  cards: [
    {
      id: 'fc-sgn-01',
      front: {
        type: 'sign',
        text: 'Triangulo rojo invertido con borde rojo y fondo blanco.',
        imageUrl: '/images/sign-3.02.jpg',
      },
      back: {
        rule: 'Senal de "Ceda el paso" (Ceder la prioridad). Debes reducir la velocidad y ceder el paso a los vehiculos con prioridad.',
        germanName: 'Kein Vortritt',
        legalConsequence: 'No respetar: multa de CHF 250+ y responsabilidad en accidente.',
      },
    },
    {
      id: 'fc-sgn-02',
      front: {
        type: 'sign',
        text: 'Octogono rojo con letras blancas "STOP".',
        imageUrl: '/images/sign-3.01.jpg',
      },
      back: {
        rule: 'Senal de Stop. Debes detenerte completamente antes de la linea de detencion y ceder el paso a todos los vehiculos de la carretera prioritaria.',
        germanName: 'Stop',
        legalConsequence: 'No detenerse completamente: multa de CHF 250+. En caso de accidente, responsabilidad total.',
      },
    },
    {
      id: 'fc-sgn-03',
      front: {
        type: 'sign',
        text: 'Rombo amarillo con borde blanco.',
        imageUrl: '/images/sign-3.05.jpg',
      },
      back: {
        rule: 'Senal de carretera principal (Hauptstrasse). Indica que tienes prioridad en las intersecciones.',
        germanName: 'Hauptstrasse',
        legalConsequence: 'Los vehiculos de calles secundarias deben cederte el paso.',
      },
    },
    {
      id: 'fc-sgn-04',
      front: {
        type: 'sign',
        text: 'Rombo amarillo con borde blanco tachado por una linea negra diagonal.',
        imageUrl: '/images/sign-3.06.jpg',
      },
      back: {
        rule: 'Fin de carretera principal. A partir de aqui, se aplica la prioridad por la derecha (Rechtsvortritt) si no hay otras senales.',
        germanName: 'Ende der Hauptstrasse',
        legalConsequence: 'No estar atento al cambio de prioridad puede causar accidentes.',
      },
    },
    {
      id: 'fc-sgn-05',
      front: {
        type: 'sign',
        text: 'Circulo rojo con fondo blanco y una barra horizontal blanca en el centro.',
        imageUrl: '/images/sign-2.02.jpg',
      },
      back: {
        rule: 'Prohibido el paso (Fahrverbot). No se puede entrar en esta via con ningun vehiculo.',
        germanName: 'Fahrverbot',
        legalConsequence: 'Multa grave. Si causa accidente, consecuencias penales.',
      },
    },
    {
      id: 'fc-sgn-06',
      front: {
        type: 'sign',
        text: 'Circulo rojo con fondo blanco, vacio (sin simbolo interior).',
        imageUrl: '/images/sign-2.01.jpg',
      },
      back: {
        rule: 'Prohibido el trafico en ambas direcciones. Ningun vehiculo puede circular por esta via.',
        germanName: 'Allgemeines Fahrverbot',
        legalConsequence: 'Multa elevada por circular en zona prohibida.',
      },
    },
    {
      id: 'fc-sgn-07',
      front: {
        type: 'sign',
        text: 'Circulo rojo con numero "50" en el centro sobre fondo blanco.',
        imageUrl: '/images/sign-2.30.1.jpg',
      },
      back: {
        rule: 'Limite de velocidad maxima: 50 km/h. Limite general en areas urbanizadas (Innerorts).',
        germanName: 'Hoechstgeschwindigkeit 50',
        legalConsequence: 'Exceder el limite: multas progresivas segun exceso. Mas de 25 km/h sobre el limite: retiro del permiso.',
      },
    },
    {
      id: 'fc-sgn-08',
      front: {
        type: 'sign',
        text: 'Circulo rojo con numero "80" en el centro sobre fondo blanco.',
        imageUrl: '/images/sign-2.30.jpg',
      },
      back: {
        rule: 'Limite de velocidad maxima: 80 km/h. Limite general fuera de areas urbanizadas.',
        germanName: 'Hoechstgeschwindigkeit 80',
        legalConsequence: 'Exceder en mas de 30 km/h fuera de localidad: retiro del permiso minimo 3 meses.',
      },
    },
    {
      id: 'fc-sgn-09',
      front: {
        type: 'sign',
        text: 'Circulo rojo con numero "120" en el centro sobre fondo blanco.',
        imageUrl: '/images/sign-2.30.jpg',
      },
      back: {
        rule: 'Limite de velocidad maxima: 120 km/h. Limite general en autopistas (Autobahn).',
        germanName: 'Hoechstgeschwindigkeit 120',
        legalConsequence: 'Exceder en mas de 35 km/h en autopista: retiro del permiso.',
      },
    },
    {
      id: 'fc-sgn-10',
      front: {
        type: 'sign',
        text: 'Circulo rojo con dos coches (negro y rojo) uno al lado del otro, simbolizando adelantamiento.',
        imageUrl: '/images/sign-2.44.jpg',
      },
      back: {
        rule: 'Prohibido adelantar. No se puede adelantar a vehiculos motorizados, excepto vehiculos que no superen 30 km/h.',
        germanName: 'Ueberholverbot',
        legalConsequence: 'Adelantar en zona prohibida: multa grave, posible retiro del permiso.',
      },
    },
    {
      id: 'fc-sgn-11',
      front: {
        type: 'sign',
        text: 'Circulo azul con flechas blancas circulares (tres flechas en sentido antihorario).',
        imageUrl: '/images/sign-2.41.1.jpg',
      },
      back: {
        rule: 'Rotonda (Kreisverkehr). Circular en sentido contrario a las agujas del reloj. Dar prioridad a vehiculos dentro de la rotonda.',
        germanName: 'Kreisverkehr',
        legalConsequence: 'Circular en sentido incorrecto: infraccion muy grave.',
      },
    },
    {
      id: 'fc-sgn-12',
      front: {
        type: 'sign',
        text: 'Triangulo rojo con un signo de exclamacion (!) en el centro.',
        imageUrl: '/images/sign-1.30.jpg',
      },
      back: {
        rule: 'Peligro general. Advierte de un peligro no especificado por otra senal. Reducir velocidad y extremar precaucion.',
        germanName: 'Andere Gefahren',
        legalConsequence: 'Ignorar la senal y tener un accidente: responsabilidad agravada.',
      },
    },
    {
      id: 'fc-sgn-13',
      front: {
        type: 'sign',
        text: 'Triangulo rojo con curva en S.',
        imageUrl: '/images/sign-1.03.jpg',
      },
      back: {
        rule: 'Curvas peligrosas. Reducir velocidad y adaptar la conduccion. No adelantar en curvas sin visibilidad.',
        germanName: 'Doppelkurve',
        legalConsequence: 'Velocidad excesiva en curvas: multa y responsabilidad total en accidente.',
      },
    },
    {
      id: 'fc-sgn-14',
      front: {
        type: 'sign',
        text: 'Triangulo rojo con silueta de peaton en paso de cebra.',
        imageUrl: '/images/sign-1.22.jpg',
      },
      back: {
        rule: 'Paso peatonal (Fussgaengerstreifen). Reducir velocidad, estar preparado para detenerse. Peatones tienen prioridad en el paso.',
        germanName: 'Fussgaengerstreifen',
        legalConsequence: 'No ceder el paso a peaton en paso de cebra: multa minima CHF 250, posible retiro del permiso.',
      },
    },
    {
      id: 'fc-sgn-15',
      front: {
        type: 'sign',
        text: 'Triangulo rojo con silueta de ninos.',
        imageUrl: '/images/sign-1.23.jpg',
      },
      back: {
        rule: 'Atencion ninos. Zona frecuentada por ninos (escuelas, parques). Reducir velocidad significativamente.',
        germanName: 'Kinder',
        legalConsequence: 'Especial cuidado obligatorio. Accidente con menor: consecuencias penales agravadas.',
      },
    },
    {
      id: 'fc-sgn-16',
      front: {
        type: 'sign',
        text: 'Triangulo rojo con simbolo de un tren y barreras.',
        imageUrl: '/images/sign-1.15.jpg',
      },
      back: {
        rule: 'Paso a nivel con barreras. Detenerse cuando las barreras esten bajandose o bajadas.',
        germanName: 'Bahnuebergang mit Schranken',
        legalConsequence: 'Cruzar con barreras bajadas: infraccion gravissima, retiro del permiso.',
      },
    },
    {
      id: 'fc-sgn-17',
      front: {
        type: 'sign',
        text: 'Triangulo rojo con simbolo de un tren sin barreras.',
        imageUrl: '/images/sign-1.16.jpg',
      },
      back: {
        rule: 'Paso a nivel sin barreras. Extremar precaucion, mirar a ambos lados. Detenerse si se acerca un tren. Prohibido adelantar justo antes.',
        germanName: 'Bahnuebergang ohne Schranken',
        legalConsequence: 'No detenerse cuando se acerca un tren: consecuencias penales graves.',
      },
    },
    {
      id: 'fc-sgn-18',
      front: {
        type: 'sign',
        text: 'Circulo azul con silueta blanca de peaton.',
      },
      back: {
        rule: 'Camino para peatones. Solo peatones pueden usar esta via. Vehiculos y bicicletas prohibidos.',
        germanName: 'Fussweg',
        legalConsequence: 'Circular con vehiculo: multa.',
      },
    },
    {
      id: 'fc-sgn-19',
      front: {
        type: 'sign',
        text: 'Circulo azul con silueta blanca de bicicleta.',
      },
      back: {
        rule: 'Pista de bicicleta obligatoria. Los ciclistas deben usar esta pista. Otros vehiculos no deben circular por ella.',
        germanName: 'Radweg',
        legalConsequence: 'Los conductores deben dar prioridad a ciclistas al cruzar pistas de bicicleta.',
      },
    },
    {
      id: 'fc-sgn-20',
      front: {
        type: 'sign',
        text: 'Rectangulo azul con la palabra "Autobahn" y simbolo de autopista (puente con coche).',
        imageUrl: '/images/sign-4.02.jpg',
      },
      back: {
        rule: 'Inicio de autopista (Autobahn). Limite de velocidad: 120 km/h. Solo vehiculos que puedan alcanzar 80 km/h. Prohibido detenerse, retroceder, girar.',
        germanName: 'Autobahn',
        legalConsequence: 'Circular a menos de 80 km/h o detenerse sin emergencia: multa grave.',
      },
    },
    {
      id: 'fc-sgn-21',
      front: {
        type: 'sign',
        text: 'Rectangulo verde con simbolo de autopista.',
        imageUrl: '/images/sign-4.04.jpg',
      },
      back: {
        rule: 'Autostrasse (carretera de doble calzada). Limite: 100 km/h. Reglas similares a autopista pero con velocidad inferior.',
        germanName: 'Autostrasse',
        legalConsequence: 'Superar 100 km/h: multa segun exceso.',
      },
    },
    {
      id: 'fc-sgn-22',
      front: {
        type: 'sign',
        text: 'Circulo rojo con numero "30" y texto "Zone" debajo.',
        imageUrl: '/images/sign-2.59.1.jpg',
      },
      back: {
        rule: 'Zona 30 (Tempo-30-Zone). Velocidad maxima 30 km/h. Generalmente en areas residenciales. Prioridad por la derecha aplica si no hay otras senales.',
        germanName: 'Tempo-30-Zone',
        legalConsequence: 'Exceder 30 km/h en zona 30: multa agravada por ser zona sensible.',
      },
    },
    {
      id: 'fc-sgn-23',
      front: {
        type: 'sign',
        text: 'Rectangulo azul con "Begegnungszone" y numero "20".',
        imageUrl: '/images/sign-2.59.5.jpg',
      },
      back: {
        rule: 'Zona de encuentro (Begegnungszone). Velocidad maxima 20 km/h. Peatones tienen prioridad absoluta sobre vehiculos. Pueden usar toda la calzada.',
        germanName: 'Begegnungszone',
        legalConsequence: 'No respetar la prioridad de peatones: multa grave.',
      },
    },
    {
      id: 'fc-sgn-24',
      front: {
        type: 'sign',
        text: 'Rectangulo azul con letra "P" blanca.',
        imageUrl: '/images/sign-4.17.jpg',
      },
      back: {
        rule: 'Zona de estacionamiento permitido. Respetar las restricciones de tiempo indicadas en senales adicionales.',
        germanName: 'Parkieren gestattet',
        legalConsequence: 'Estacionar fuera de las condiciones indicadas: multa por estacionamiento indebido.',
      },
    },
    {
      id: 'fc-sgn-25',
      front: {
        type: 'sign',
        text: 'Circulo rojo con una "X" formada por dos lineas rojas cruzadas, sobre fondo azul con "P".',
      },
      back: {
        rule: 'Prohibido estacionar. Se puede hacer una parada breve (hasta 5 minutos o para subir/bajar pasajeros).',
        germanName: 'Parkverbot',
        legalConsequence: 'Estacionar donde esta prohibido: multa y posible remolque del vehiculo.',
      },
    },
    {
      id: 'fc-sgn-26',
      front: {
        type: 'sign',
        text: 'Circulo rojo con una linea diagonal roja sobre fondo azul.',
      },
      back: {
        rule: 'Prohibido detenerse y estacionar. Ni siquiera una parada breve esta permitida.',
        germanName: 'Halte- und Parkverbot',
        legalConsequence: 'Detenerse: multa inmediata y posible remolque.',
      },
    },
    {
      id: 'fc-sgn-27',
      front: {
        type: 'sign',
        text: 'Triangulo rojo con simbolo de pendiente (porcentaje) descendente.',
        imageUrl: '/images/sign-1.10.jpg',
      },
      back: {
        rule: 'Bajada peligrosa. Reducir velocidad, usar marcha baja. No sobrecargar los frenos. En carreteras de montana, conducir de manera que los frenos no se usen en exceso.',
        germanName: 'Gefaehrliches Gefaelle',
        legalConsequence: 'Frenos sobrecalentados pueden fallar: accidente con responsabilidad total.',
      },
    },
    {
      id: 'fc-sgn-28',
      front: {
        type: 'sign',
        text: 'Triangulo rojo con simbolo de pendiente ascendente.',
        imageUrl: '/images/sign-1.11.jpg',
      },
      back: {
        rule: 'Subida pronunciada. Mantener velocidad adecuada. En cruces dificiles en carreteras de montana, el vehiculo que baja debe detenerse o retroceder.',
        germanName: 'Starke Steigung',
        legalConsequence: 'No ceder el paso en carretera de montana: multa.',
      },
    },
    {
      id: 'fc-sgn-29',
      front: {
        type: 'sign',
        text: 'Rectangulo azul con una flecha blanca hacia arriba.',
        imageUrl: '/images/sign-4.08.jpg',
      },
      back: {
        rule: 'Calle de un solo sentido. Solo se puede circular en la direccion indicada. Esta prohibido retroceder, excepto al estacionar o acoplar remolques.',
        germanName: 'Einbahnstrasse',
        legalConsequence: 'Circular en sentido contrario: infraccion muy grave.',
      },
    },
    {
      id: 'fc-sgn-30',
      front: {
        type: 'sign',
        text: 'Senal de trafico contraria (1.26): rectangulo blanco con flecha roja y flecha negra opuesta.',
        imageUrl: '/images/sign-1.26.jpg',
      },
      back: {
        rule: 'Fin de calle de un solo sentido / trafico en ambos sentidos. A partir de aqui, hay trafico en ambas direcciones.',
        germanName: 'Gegenverkehr',
        legalConsequence: 'No estar atento al cambio: riesgo de colision frontal.',
      },
    },
    {
      id: 'fc-sgn-31',
      front: {
        type: 'sign',
        text: 'Triangulo rojo con simbolo de obra (trabajador con pala).',
        imageUrl: '/images/sign-1.14.jpg',
      },
      back: {
        rule: 'Obras en la via. Reducir velocidad, estar atento a trabajadores y maquinaria. Seguir indicaciones del personal de obras.',
        germanName: 'Baustelle',
        legalConsequence: 'Las ordenes del personal en obras son vinculantes como las de la policia.',
      },
    },
    {
      id: 'fc-sgn-32',
      front: {
        type: 'sign',
        text: 'Circulo azul con flecha blanca apuntando a la derecha.',
        imageUrl: '/images/sign-2.32.jpg',
      },
      back: {
        rule: 'Direccion obligatoria a la derecha. Los vehiculos deben girar o circular en la direccion indicada.',
        germanName: 'Vorgeschriebene Fahrtrichtung rechts',
        legalConsequence: 'No seguir la direccion obligatoria: multa.',
      },
    },
    {
      id: 'fc-sgn-33',
      front: {
        type: 'sign',
        text: 'Circulo blanco con borde rojo y numero "3.5t".',
        imageUrl: '/images/sign-2.16.jpg',
      },
      back: {
        rule: 'Prohibido el paso a vehiculos de mas de 3.5 toneladas. Se aplica al peso total del vehiculo.',
        germanName: 'Gewichtsbeschraenkung',
        legalConsequence: 'Circular con vehiculo que exceda el peso: multa y posible inmovilizacion.',
      },
    },
    {
      id: 'fc-sgn-34',
      front: {
        type: 'sign',
        text: 'Triangulo rojo con simbolo de vehiculo derrapando.',
        imageUrl: '/images/sign-1.05.jpg',
      },
      back: {
        rule: 'Calzada resbaladiza. Riesgo de derrape especialmente en mojado. Reducir velocidad y evitar maniobras bruscas.',
        germanName: 'Schleudergefahr',
        legalConsequence: 'No adaptar la conduccion: responsabilidad agravada en accidente.',
      },
    },
    {
      id: 'fc-sgn-35',
      front: {
        type: 'sign',
        text: 'Triangulo rojo con simbolo de estrechamiento de calzada.',
        imageUrl: '/images/sign-1.07.jpg',
      },
      back: {
        rule: 'Estrechamiento de calzada. Reducir velocidad. Si el cruce no es posible, reglas de prioridad especiales aplican (camiones antes que ligeros).',
        germanName: 'Engpass / Fahrbahnverengung',
        legalConsequence: 'No ceder el paso en estrechamiento: multa.',
      },
    },
    {
      id: 'fc-sgn-36',
      front: {
        type: 'sign',
        text: 'Linea continua amarilla (6.18) en el suelo frente a un paso peatonal.',
      },
      back: {
        rule: 'Linea de no detenerse. Al menos 10 m de longitud, a 50-100 cm del borde derecho. Prohibe detenerse en la carretera y en la acera adyacente.',
        germanName: 'Halteverbot vor Fussgaengerstreifen',
        legalConsequence: 'Detenerse sobre la linea amarilla: multa.',
      },
    },
    {
      id: 'fc-sgn-37',
      front: {
        type: 'sign',
        text: 'Linea continua blanca en el centro de la carretera.',
      },
      back: {
        rule: 'Linea de barrera (Sperrlinien). No se puede conducir ni cruzar. Los vehiculos deben circular siempre a la derecha de estas lineas.',
        germanName: 'Sperrlinie',
        legalConsequence: 'Cruzar linea continua: multa y puntos. En caso de accidente, culpa presunta.',
      },
    },
    {
      id: 'fc-sgn-38',
      front: {
        type: 'sign',
        text: 'Linea discontinua blanca al lado de una linea continua blanca.',
      },
      back: {
        rule: 'Linea doble (continua + discontinua). Los vehiculos del lado de la linea de barrera (continua) no deben cruzar. Los del lado de la linea discontinua pueden cruzar con precaucion.',
        germanName: 'Doppellinie',
        legalConsequence: 'Cruzar por el lado de la linea continua: multa.',
      },
    },
    {
      id: 'fc-sgn-39',
      front: {
        type: 'sign',
        text: 'Rectangulo azul con "P" y un reloj indicando horarios.',
        imageUrl: '/images/sign-4.18.jpg',
      },
      back: {
        rule: 'Zona Azul (Blaue Zone). Estacionamiento gratuito con disco de estacionamiento (Parkscheibe). Tiempo maximo generalmente 1 hora durante dias laborables.',
        germanName: 'Blaue Zone / Parkscheibe',
        legalConsequence: 'Estacionar sin disco o exceder el tiempo: multa.',
      },
    },
    {
      id: 'fc-sgn-40',
      front: {
        type: 'sign',
        text: 'Senal cuadrada con fondo azul y simbolo blanco de tunel.',
        imageUrl: '/images/sign-4.07.jpg',
      },
      back: {
        rule: 'Tunel. Encender luces bajas obligatoriamente incluso si esta iluminado. Prohibido retroceder y girar. Detenerse solo en emergencias.',
        germanName: 'Tunnel',
        legalConsequence: 'No encender luces en tunel: multa. Detenerse sin emergencia: multa grave.',
      },
    },
  ],
};
