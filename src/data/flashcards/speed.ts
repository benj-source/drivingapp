import type { FlashcardDeck } from '../types';

export const speedDeck: FlashcardDeck = {
  id: 'fc-speed',
  moduleId: 'speed-overtaking',
  title: 'Velocidad y adelantamiento',
  cards: [
    {
      id: 'fc-spd-01',
      front: {
        type: 'rule',
        text: 'Limites generales de velocidad en Suiza para vehiculos ligeros.',
      },
      back: {
        rule: '1) 50 km/h en areas urbanizadas (Innerorts), 2) 80 km/h fuera de areas urbanizadas (Ausserorts), 3) 100 km/h en carreteras de doble calzada (Autostrasse), 4) 120 km/h en autopistas (Autobahn).',
        germanName: 'Hoechstgeschwindigkeit',
        legalConsequence: 'Exceder los limites: multas progresivas. Superar en mas de 25 km/h dentro de localidad o 35 km/h en autopista: retiro del permiso.',
      },
    },
    {
      id: 'fc-spd-02',
      front: {
        type: 'rule',
        text: 'Formula de la distancia de detencion sin preparacion para frenar, en carretera seca.',
      },
      back: {
        rule: 'Distancia de detencion = (V/10) x (V/10) + 7. Ejemplo a 80 km/h: (8x8)+7 = 71 m. A 50 km/h: (5x5)+7 = 32 m. Incluye distancia de reaccion y frenado.',
        germanName: 'Anhalteweg',
        legalConsequence: 'No mantener distancia suficiente para detenerse: multa por seguir demasiado cerca.',
      },
    },
    {
      id: 'fc-spd-03',
      front: {
        type: 'rule',
        text: 'Distancia de reaccion: concepto y calculo.',
      },
      back: {
        rule: 'La distancia de reaccion es aprox. 3 m a 10 km/h. Formula: (V/10) x 3. A 60 km/h: 6x3 = 18 m. A 40 km/h: 4x3 = 12 m. El tiempo de reaccion es aprox. 1 segundo.',
        germanName: 'Reaktionsweg',
        legalConsequence: 'Si muestras preparacion para frenar, el tiempo de reaccion se reduce significativamente.',
      },
    },
    {
      id: 'fc-spd-04',
      front: {
        type: 'rule',
        text: 'Distancia de frenado en carretera mojada a 60 km/h.',
      },
      back: {
        rule: 'En carretera mojada: (V/10) x (V/10). A 60 km/h: 6x6 = 36 m. A 40 km/h: 4x4 = 16 m. La distancia de frenado en mojado es mayor que en seco.',
        germanName: 'Bremsweg nasse Strasse',
        legalConsequence: 'Adaptar la velocidad a las condiciones es obligatorio. No hacerlo: multa.',
      },
    },
    {
      id: 'fc-spd-05',
      front: {
        type: 'rule',
        text: 'Distancia de frenado en carretera seca a 60 km/h.',
      },
      back: {
        rule: 'En carretera seca: (V/10 x V/10) x 0.75. A 60 km/h: (6x6)x0.75 = 27 m. A 40 km/h: (4x4)x0.75 = 12 m.',
        germanName: 'Bremsweg trockene Strasse',
        legalConsequence: 'Conocer las distancias de frenado es esencial para mantener la distancia de seguridad.',
      },
    },
    {
      id: 'fc-spd-06',
      front: {
        type: 'rule',
        text: 'A 50 km/h, que distancia recorre un vehiculo en 3 segundos?',
      },
      back: {
        rule: 'A 50 km/h, el vehiculo recorre aproximadamente 45 metros en 3 segundos.',
        germanName: 'Geschwindigkeit und Strecke',
        legalConsequence: 'Dato importante para evaluar distancias de seguridad.',
      },
    },
    {
      id: 'fc-spd-07',
      front: {
        type: 'rule',
        text: 'Regla de los 2 segundos para la distancia de seguimiento.',
      },
      back: {
        rule: 'La distancia respecto al vehiculo delantero debe ser de al menos 2 segundos. Se debe aumentar cuando el vehiculo delantero conduce de manera insegura, la caravana avanza mas rapido, o la calzada esta cubierta de nieve o adoquines.',
        germanName: '2-Sekunden-Abstand',
        legalConsequence: 'No mantener distancia: multa. En autopista, si la distancia es inferior a 0.6 segundos: retiro del permiso.',
      },
    },
    {
      id: 'fc-spd-08',
      front: {
        type: 'rule',
        text: 'Regla basica de adelantamiento: por que lado se adelanta?',
      },
      back: {
        rule: 'Cruzar se realiza por la derecha, adelantar por la izquierda. Adelantar solo esta permitido cuando el espacio requerido es visible y libre y el trafico contrario no es obstaculizado.',
        germanName: 'Ueberholen links',
        legalConsequence: 'Adelantar por la derecha (excepto excepciones): infraccion grave, multa elevada.',
      },
    },
    {
      id: 'fc-spd-09',
      front: {
        type: 'rule',
        text: 'Donde esta prohibido adelantar?',
      },
      back: {
        rule: 'Prohibido adelantar en: curvas ciegas, justo antes de cruces ferroviarios sin barreras, antes de cimas, y en intersecciones solo si son visibles y la prioridad de otros no es obstaculizada.',
        germanName: 'Ueberholverbot',
        legalConsequence: 'Adelantar en zona prohibida: multa grave, posible retiro del permiso.',
      },
    },
    {
      id: 'fc-spd-10',
      front: {
        type: 'rule',
        text: 'Diferencia de velocidad minima para adelantar.',
      },
      back: {
        rule: 'La diferencia de velocidad para adelantar debe ser al menos de 20 km/h. La seccion visible debe ser el doble de la distancia de adelantamiento (por el trafico contrario).',
        germanName: 'Geschwindigkeitsdifferenz beim Ueberholen',
        legalConsequence: 'Adelantar sin suficiente diferencia de velocidad es peligroso y sancionable.',
      },
    },
    {
      id: 'fc-spd-11',
      front: {
        type: 'rule',
        text: 'Calculo de distancia de adelantamiento: coche 1 a 80 km/h, coche 2 a 60 km/h.',
      },
      back: {
        rule: 'Diferencia: 20 km/h. Distancia de adelantamiento: (80 x 80) / 20 = 320 m. La seccion visible necesaria es el doble: 640 m.',
        germanName: 'Ueberholweg berechnen',
        legalConsequence: 'Adelantar sin visibilidad suficiente: riesgo de colision frontal, infraccion muy grave.',
      },
    },
    {
      id: 'fc-spd-12',
      front: {
        type: 'situation',
        text: 'Conduces en zona urbana y se acercan ninos jugando cerca de la calzada.',
      },
      back: {
        rule: 'El conductor debe reducir su velocidad y, si es necesario, detenerse cuando ninos en el area de la carretera no esten prestando atencion al trafico.',
        germanName: 'Geschwindigkeit bei Kindern',
        legalConsequence: 'Debe tenerse especial cuidado con ninos, personas enfermas y ancianas. No hacerlo: multa agravada.',
      },
    },
    {
      id: 'fc-spd-13',
      front: {
        type: 'rule',
        text: 'Velocidad y visibilidad: regla de la distancia visible.',
      },
      back: {
        rule: 'El conductor solo puede conducir tan rapido que pueda detenerse dentro de la seccion visible. En carreteras de menos de 6 m de ancho, debe poder detenerse a media distancia de vision.',
        germanName: 'Sichtweite und Geschwindigkeit',
        legalConsequence: 'No adaptar velocidad a visibilidad: multa y responsabilidad total en accidente.',
      },
    },
    {
      id: 'fc-spd-14',
      front: {
        type: 'rule',
        text: 'Conduccion demasiado lenta: esta permitida?',
      },
      back: {
        rule: 'El conductor no debe conducir tan despacio que obstaculice un flujo uniforme de trafico sin razones obligatorias.',
        germanName: 'Behinderung durch Langsamfahren',
        legalConsequence: 'Conducir injustificadamente lento: multa por obstaculizar el trafico.',
      },
    },
    {
      id: 'fc-spd-15',
      front: {
        type: 'rule',
        text: 'Comportamiento del vehiculo adelantado.',
      },
      back: {
        rule: 'Cualquiera que sea adelantado no debe aumentar su velocidad. La carretera debe dejarse libre para cualquier vehiculo que este conduciendo mas rapido.',
        germanName: 'Verhalten des Ueberholten',
        legalConsequence: 'Acelerar mientras te adelantan: multa e infraccion de trafico.',
      },
    },
    {
      id: 'fc-spd-16',
      front: {
        type: 'rule',
        text: 'Que hacer despues de adelantar?',
      },
      back: {
        rule: 'Despues de adelantar, el conductor debe reincorporarse de nuevo al carril derecho tan pronto como no haya mas peligro para los usuarios que han sido adelantados.',
        germanName: 'Wiedereinordnen nach Ueberholen',
        legalConsequence: 'No reincorporarse: obstaculizacion del trafico contrario, multa.',
      },
    },
    {
      id: 'fc-spd-17',
      front: {
        type: 'rule',
        text: 'Adelantamiento con senal de "No adelantar": hay excepciones?',
      },
      back: {
        rule: 'Con senal "No adelantar", se pueden adelantar vehiculos motorizados que no superen 30 km/h: motores de un solo eje, carretillas motorizadas, carros de trabajo, vehiculos agricolas motorizados.',
        germanName: 'Ueberholverbot mit Ausnahmen',
        legalConsequence: 'Solo si es posible sin peligro. Adelantar otros vehiculos: infraccion grave.',
      },
    },
    {
      id: 'fc-spd-18',
      front: {
        type: 'rule',
        text: 'Condiciones de la carretera que exigen reduccion de velocidad.',
      },
      back: {
        rule: 'Reducir velocidad cuando la carretera este cubierta de nieve o hielo, follaje mojado, asfalto fresco o grava. Si la temperatura es de 3C o menos, anticipar hielo en puentes y areas sombreadas. Riesgo de aquaplaning con lluvia fuerte.',
        germanName: 'Geschwindigkeit bei schlechter Fahrbahn',
        legalConsequence: 'No adaptar velocidad a condiciones: responsabilidad agravada en accidente.',
      },
    },
    {
      id: 'fc-spd-19',
      front: {
        type: 'rule',
        text: 'Vehiculos de oruga: distancia y adelantamiento.',
      },
      back: {
        rule: 'Los conductores deben mantener una distancia lateral de al menos 1 m al cruzar y adelantar vehiculos de oruga. En carreteras estrechas, solo pueden adelantar cuando el conductor del vehiculo de orugas haya despejado la carretera.',
        germanName: 'Raupenfahrzeuge',
        legalConsequence: 'No mantener 1 m: multa. Adelantar sin espacio: infraccion grave.',
      },
    },
    {
      id: 'fc-spd-20',
      front: {
        type: 'rule',
        text: 'Sistema ABS: ventajas en el frenado.',
      },
      back: {
        rule: 'Para frenado de emergencia, es ventajoso que el vehiculo tenga ABS (sistema antibloqueo). Previene que las ruedas sean bloqueadas y mejora la maniobrabilidad y estabilidad de conduccion.',
        germanName: 'ABS - Antiblockiersystem',
        legalConsequence: 'No es obligatorio pero mejora significativamente la seguridad en frenados de emergencia.',
      },
    },
  ],
};
