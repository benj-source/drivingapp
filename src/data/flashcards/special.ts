import type { FlashcardDeck } from '../types';

export const specialDeck: FlashcardDeck = {
  id: 'fc-special',
  moduleId: 'special-rules',
  title: 'Reglas especiales suizas',
  cards: [
    {
      id: 'fc-spc-01',
      front: {
        type: 'rule',
        text: 'Comportamiento obligatorio al entrar en un tunel.',
      },
      back: {
        rule: 'En tuneles: encender luz baja (incluso si esta iluminado), mantener distancia, encender radio y ajustar a frecuencia senalizada. Prohibido retroceder y girar. Motor apagado inmediatamente si te detienes.',
        germanName: 'Tunnelverhalten',
        legalConsequence: 'No encender luces: multa. Detenerse sin emergencia: multa grave.',
      },
    },
    {
      id: 'fc-spc-02',
      front: {
        type: 'situation',
        text: 'Hay un atasco dentro de un tunel.',
      },
      back: {
        rule: 'En caso de atasco en tunel: encender luces de advertencia (intermitentes de emergencia) y detenerse hacia un lado para dejar espacio para vehiculos de emergencia.',
        germanName: 'Stau im Tunnel',
        legalConsequence: 'No dejar paso para emergencias en tunel: multa grave. Situacion de alto riesgo.',
      },
    },
    {
      id: 'fc-spc-03',
      front: {
        type: 'rule',
        text: 'Reglas del tranvia (Strassenbahn): por que lado se adelanta?',
      },
      back: {
        rule: 'El tranvia en movimiento se adelanta por la derecha. Si no es posible, puede adelantarse por la izquierda. El tranvia detenido solo puede cruzarse o adelantarse lentamente.',
        germanName: 'Strassenbahn ueberholen',
        legalConsequence: 'Adelantar un tranvia incorrectamente: multa y riesgo de accidente con pasajeros.',
      },
    },
    {
      id: 'fc-spc-04',
      front: {
        type: 'rule',
        text: 'Tranvia detenido en parada sin isla de proteccion.',
      },
      back: {
        rule: 'Si los pasajeros de un tranvia deben descender por el lado del trafico en paradas sin islas de proteccion, los vehiculos deben detenerse hasta que los pasajeros hayan despejado la calzada.',
        germanName: 'Tramhaltestelle ohne Schutzinsel',
        legalConsequence: 'No detenerse: multa grave y alto riesgo de atropello de pasajeros.',
      },
    },
    {
      id: 'fc-spc-05',
      front: {
        type: 'rule',
        text: 'Distancia minima a las vias del tranvia para detenerse.',
      },
      back: {
        rule: 'Los vehiculos no deben detenerse sobre la via del tranvia ni a menos de 1,50 m de la via mas cercana.',
        germanName: 'Abstand zu Tramschienen',
        legalConsequence: 'Detenerse sobre las vias: multa y riesgo de colision con tranvia.',
      },
    },
    {
      id: 'fc-spc-06',
      front: {
        type: 'rule',
        text: 'Carreteras postales de montana (Bergpoststrassen).',
      },
      back: {
        rule: 'En Bergpoststrassen, los conductores deben prestar atencion a las senales e indicaciones de los conductores de vehiculos de servicio regular (autobuses postales) en cruces y adelantamientos dificiles.',
        germanName: 'Bergpoststrassen',
        legalConsequence: 'No obedecer al autobus postal de montana: multa. El autobus postal tiene prioridad.',
      },
    },
    {
      id: 'fc-spc-07',
      front: {
        type: 'situation',
        text: 'En una carretera de montana estrecha, tu vehiculo sube y otro baja. El cruce no es posible.',
      },
      back: {
        rule: 'Donde el cruce es dificil, el vehiculo que baja debe detenerse a tiempo. Si no es posible el cruce, el vehiculo que baja debe retroceder, a menos que el otro este mas cerca de un apartadero.',
        germanName: 'Kreuzen auf Bergstrassen',
        legalConsequence: 'No ceder el paso en carretera de montana: multa y riesgo de accidente grave.',
      },
    },
    {
      id: 'fc-spc-08',
      front: {
        type: 'rule',
        text: 'Prioridad en cruces estrechos segun tipo de vehiculo.',
      },
      back: {
        rule: 'En carreteras estrechas donde el cruce no es posible: unidades camion-remolque primero, vehiculos pesados antes que ligeros, autobuses antes que camiones. Entre vehiculos del mismo tipo, el mas cercano a un apartadero retrocede.',
        germanName: 'Ausweichregeln bei Engpass',
        legalConsequence: 'No respetar la jerarquia: multa.',
      },
    },
    {
      id: 'fc-spc-09',
      front: {
        type: 'rule',
        text: 'Zona Azul (Blaue Zone) para estacionamiento.',
      },
      back: {
        rule: 'En Zonas Azules, el estacionamiento es gratuito pero requiere un disco de estacionamiento (Parkscheibe) colocado visiblemente. Tiempo maximo generalmente 1 hora durante horario laboral.',
        germanName: 'Blaue Zone / Parkscheibe',
        legalConsequence: 'Sin disco o exceder el tiempo: multa de CHF 40+.',
      },
    },
    {
      id: 'fc-spc-10',
      front: {
        type: 'rule',
        text: 'Zona de encuentro (Begegnungszone): reglas especiales.',
      },
      back: {
        rule: 'Velocidad maxima 20 km/h. Los peatones tienen prioridad absoluta y pueden usar toda la calzada. Los vehiculos deben adaptarse completamente a los peatones.',
        germanName: 'Begegnungszone',
        legalConsequence: 'Exceder 20 km/h o no ceder a peatones: multa agravada.',
      },
    },
    {
      id: 'fc-spc-11',
      front: {
        type: 'rule',
        text: 'Alcohol: limite legal para conductores nuevos y profesionales.',
      },
      back: {
        rule: 'Conducir bajo la influencia del alcohol esta prohibido para titulares de licencia de aprendiz, instructores de conduccion, conductores en trayectos de ensenanza y choferes profesionales. Limite: 0.10 por mil (tolerancia cero).',
        germanName: 'Alkohol-Nulltoleranz',
        legalConsequence: 'Superar 0.10 por mil: sancion grave, posible revocacion de licencia.',
      },
    },
    {
      id: 'fc-spc-12',
      front: {
        type: 'rule',
        text: 'Alcohol: limite general y embriaguez.',
      },
      back: {
        rule: 'Una persona esta bajo influencia del alcohol con 0.10 por mil o mas. La embriaguez se presume con 0.5 por mil o mas. Tarda aprox. 8 horas en degradarse 1.0 por mil de alcohol.',
        germanName: 'Alkohol am Steuer',
        legalConsequence: 'Conducir con 0.5 por mil o mas: prision o multa monetaria. Retiro del permiso.',
      },
    },
    {
      id: 'fc-spc-13',
      front: {
        type: 'rule',
        text: 'Drogas y conduccion.',
      },
      back: {
        rule: 'Tolerancia cero con las drogas: conducir bajo la influencia de drogas es siempre una violacion seria que conduce a la revocacion de la licencia de conducir.',
        germanName: 'Drogen am Steuer',
        legalConsequence: 'Revocacion inmediata de la licencia. Consecuencias penales.',
      },
    },
    {
      id: 'fc-spc-14',
      front: {
        type: 'rule',
        text: 'Conduccion de ensenanza: requisitos del acompanante.',
      },
      back: {
        rule: 'El acompanante debe tener al menos 23 anos y haber poseido la licencia correspondiente por al menos 3 anos. Debe poder alcanzar y operar el freno de mano facilmente.',
        germanName: 'Lernfahrten - Begleitperson',
        legalConsequence: 'No cumplir los requisitos: la conduccion de ensenanza no es valida. Multa.',
      },
    },
    {
      id: 'fc-spc-15',
      front: {
        type: 'rule',
        text: 'Senal "L" para conductores aprendices.',
      },
      back: {
        rule: 'Vehiculos conducidos por titulares de licencia de aprendiz deben portar una senal azul con "L" blanca en la parte trasera, en posicion claramente visible. Debe retirarse cuando no se realiza conduccion de ensenanza.',
        germanName: 'L-Schild',
        legalConsequence: 'No portar la senal: multa. No retirarla: tambien sancionable.',
      },
    },
    {
      id: 'fc-spc-16',
      front: {
        type: 'rule',
        text: 'Luces obligatorias durante el dia en Suiza.',
      },
      back: {
        rule: 'Los vehiculos motorizados (turismos, furgonetas, camiones, motocicletas y bicicletas electricas) deben circular con las luces encendidas durante el dia (luces diurnas o luces de cruce).',
        germanName: 'Tagfahrlicht',
        legalConsequence: 'No llevar luces encendidas de dia: multa de CHF 40.',
      },
    },
    {
      id: 'fc-spc-17',
      front: {
        type: 'rule',
        text: 'Faros antiniebla: cuando se pueden usar?',
      },
      back: {
        rule: 'Los faros antiniebla y las luces traseras antiniebla solo pueden usarse cuando la visibilidad este gravemente reducida por niebla, nevada o lluvia intensa.',
        germanName: 'Nebelscheinwerfer',
        legalConsequence: 'Usar antiniebla sin necesidad: multa por deslumbramiento a otros conductores.',
      },
    },
    {
      id: 'fc-spc-18',
      front: {
        type: 'rule',
        text: 'Cambiar de luces largas a luces de cruce: cuando es obligatorio?',
      },
      back: {
        rule: 'Cambiar a luces de cruce: 1) Al menos 200 m antes de cruzarse con otro usuario, 2) Inmediatamente cuando el otro conductor lo solicite encendiendo/apagando sus luces, 3) Detras de otro vehiculo y al dar marcha atras.',
        germanName: 'Abblenden',
        legalConsequence: 'No cambiar a luces de cruce: multa por deslumbramiento.',
      },
    },
    {
      id: 'fc-spc-19',
      front: {
        type: 'rule',
        text: 'Uso del intermitente: cuando es obligatorio?',
      },
      back: {
        rule: 'Obligatorio senalizar con antelacion: 1) Incorporarse al carril, cambiar de carril y girar, 2) Adelantar y dar la vuelta, 3) Incorporarse al trafico y detenerse al borde. El uso del intermitente no exime de actuar con precaucion.',
        germanName: 'Richtungsanzeiger',
        legalConsequence: 'No senalizar: multa y responsabilidad en caso de accidente.',
      },
    },
    {
      id: 'fc-spc-20',
      front: {
        type: 'rule',
        text: 'Licencia de aprendiz: edad minima y requisitos.',
      },
      back: {
        rule: 'La solicitud para licencia de aprendizaje puede hacerse a los 17 anos. Se emite tras aprobar la prueba teorica basica. Cualquier menor de 20 anos debe tener al menos 12 meses de experiencia con licencia de aprendizaje antes del examen practico.',
        germanName: 'Lernfahrausweis',
        legalConsequence: 'Conducir sin licencia valida: consecuencias penales graves.',
      },
    },
  ],
};
