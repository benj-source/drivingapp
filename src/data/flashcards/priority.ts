import type { FlashcardDeck } from '../types';

export const priorityDeck: FlashcardDeck = {
  id: 'fc-priority',
  moduleId: 'priority',
  title: 'Prioridad e intersecciones',
  cards: [
    {
      id: 'fc-pri-01',
      front: {
        type: 'situation',
        text: 'Llegas a una interseccion sin senales. Un vehiculo se acerca por la derecha.',
      },
      back: {
        rule: 'En las intersecciones, el vehiculo que viene por la derecha tiene prioridad (Rechtsvortritt). Debes ceder el paso.',
        germanName: 'Rechtsvortritt',
        legalConsequence: 'No respetar la prioridad de la derecha: multa y puntos de penalizacion. En caso de accidente, responsabilidad total.',
      },
    },
    {
      id: 'fc-pri-02',
      front: {
        type: 'situation',
        text: 'Quieres girar a la izquierda en una interseccion. Un vehiculo viene de frente.',
      },
      back: {
        rule: 'Antes de girar a la izquierda, se debe ceder el paso a los vehiculos que vienen de frente (art. 36 LCR).',
        germanName: 'Linksvortritt beim Linksabbiegen',
        legalConsequence: 'Multa y responsabilidad en caso de colision. Error de 3 puntos en el examen.',
      },
    },
    {
      id: 'fc-pri-03',
      front: {
        type: 'situation',
        text: 'Circulas por una carretera principal senalizada. Un vehiculo se acerca desde la izquierda por una calle secundaria.',
      },
      back: {
        rule: 'Los vehiculos en carreteras principales designadas (Hauptstrasse) tienen prioridad, incluso si el otro vehiculo viene desde la izquierda.',
        germanName: 'Hauptstrasse',
        legalConsequence: 'El vehiculo de la calle secundaria debe detenerse. Si no lo hace, multa grave.',
      },
    },
    {
      id: 'fc-pri-04',
      front: {
        type: 'situation',
        text: 'Llegas a una rotonda (Kreisverkehr). Un vehiculo ya esta circulando dentro de la rotonda y se acerca desde la izquierda.',
      },
      back: {
        rule: 'Antes de entrar en una rotonda, el conductor debe reducir su velocidad y dar prioridad a los vehiculos que se acercan desde la izquierda dentro de la rotonda.',
        germanName: 'Kreisverkehr',
        legalConsequence: 'Multa por no ceder el paso en rotonda. Riesgo de colision lateral.',
      },
    },
    {
      id: 'fc-pri-05',
      front: {
        type: 'situation',
        text: 'Estas saliendo de una rotonda.',
      },
      back: {
        rule: 'La salida de la rotonda debe ser indicada con el intermitente derecho. No es necesario indicar al entrar, salvo cambio de carril.',
        germanName: 'Kreisverkehr Ausfahrt',
        legalConsequence: 'No senalizar la salida puede causar confusion y accidentes. Multa posible.',
      },
    },
    {
      id: 'fc-pri-06',
      front: {
        type: 'situation',
        text: 'Sales de un garaje privado hacia una carretera principal.',
      },
      back: {
        rule: 'Los conductores que salen de fabricas, fincas, garajes, aparcamientos, gasolineras u otros accesos similares deben ceder el paso a todos los usuarios de la via.',
        germanName: 'Ausfahrt aus Grundstuecken',
        legalConsequence: 'Si la visibilidad es reducida, deben detenerse completamente. Multa y responsabilidad total en accidente.',
      },
    },
    {
      id: 'fc-pri-07',
      front: {
        type: 'situation',
        text: 'Un vehiculo de bomberos con luz azul y sirena se acerca por detras en una interseccion regulada por semaforos.',
      },
      back: {
        rule: 'Todos los usuarios de la via deben ceder el paso a vehiculos de bomberos, ambulancias y policia con luz azul y sirena, incluso cuando el trafico este regulado por semaforos.',
        germanName: 'Blaulicht und Sirene',
        legalConsequence: 'No ceder el paso a vehiculos de emergencia: multa grave, posible retiro del permiso.',
      },
    },
    {
      id: 'fc-pri-08',
      front: {
        type: 'situation',
        text: 'Un policia levanta el brazo en una interseccion.',
      },
      back: {
        rule: 'Brazo levantado del policia: detenerse antes de la interseccion en todas las direcciones. Las senales policiales prevalecen sobre semaforos y senales.',
        germanName: 'Polizeiliche Handzeichen',
        legalConsequence: 'Ignorar una senal policial es una infraccion grave. Multa elevada y posible denuncia.',
      },
    },
    {
      id: 'fc-pri-09',
      front: {
        type: 'situation',
        text: 'En una interseccion con semaforo, la luz esta verde pero hay una senal de "Ceda el paso" pintada en el suelo.',
      },
      back: {
        rule: 'En cruces con semaforos, las senales de "Stop" y "Ceda el paso" se obedecen solo si el trafico no esta regulado por semaforos. Si el semaforo funciona, este prevalece.',
        germanName: 'Lichtsignal vor Verkehrszeichen',
        legalConsequence: 'Seguir la senal de ceda en lugar del semaforo puede causar confusion. Sigue siempre el semaforo si funciona.',
      },
    },
    {
      id: 'fc-pri-10',
      front: {
        type: 'situation',
        text: 'Dos carreteras con senal de "Stop" confluyen en el mismo punto hacia una carretera prioritaria. Otro vehiculo llega por tu derecha.',
      },
      back: {
        rule: 'Si dos o mas carreteras con senales de "Stop" o "Ceda el paso" confluyen hacia una carretera prioritaria, los conductores deben respetar la prioridad de la derecha entre si.',
        germanName: 'Rechtsvortritt bei gleichrangigen Strassen',
        legalConsequence: 'Multa por no respetar la prioridad. Riesgo de accidente en la confluencia.',
      },
    },
    {
      id: 'fc-pri-11',
      front: {
        type: 'situation',
        text: 'Un peaton espera visiblemente en un paso peatonal sin regulacion de trafico. Tu te acercas con el vehiculo.',
      },
      back: {
        rule: 'El conductor debe conceder prioridad a cualquier peaton que ya este en el cruce o que este esperando y visiblemente quiera cruzar. Debe reducir velocidad y detenerse si es necesario.',
        germanName: 'Fussgaengerstreifen',
        legalConsequence: 'No ceder el paso en paso peatonal: multa de CHF 250+, puntos en el registro, posible retiro temporal del permiso.',
      },
    },
    {
      id: 'fc-pri-12',
      front: {
        type: 'situation',
        text: 'Una persona ciega no acompanada levanta su baston blanco en el borde de la carretera.',
      },
      back: {
        rule: 'El derecho de paso debe ser siempre concedido a personas ciegas no acompanadas cuando levantan su baston blanco para indicar que quieren cruzar.',
        germanName: 'Blinde Personen',
        legalConsequence: 'Obligacion absoluta. Ignorar esta regla puede tener consecuencias penales.',
      },
    },
    {
      id: 'fc-pri-13',
      front: {
        type: 'situation',
        text: 'Giras a la derecha en un semaforo en verde. Un peaton cruza la calle a la que quieres entrar.',
      },
      back: {
        rule: 'En intersecciones con regulacion de trafico, los conductores que giran deben dar prioridad a peatones y usuarios de equipos similares a vehiculos para cruzar el cruce.',
        germanName: 'Vortritt beim Abbiegen',
        legalConsequence: 'Multa y responsabilidad total si se produce un atropello.',
      },
    },
    {
      id: 'fc-pri-14',
      front: {
        type: 'situation',
        text: 'Varios vehiculos llegan simultaneamente a una interseccion donde rige la prioridad por la derecha y ninguno puede avanzar.',
      },
      back: {
        rule: 'Si varios vehiculos llegan a una interseccion donde rige la prioridad por la derecha, los conductores deben comunicarse con senales manuales para resolver la situacion.',
        germanName: 'Verstaendigung bei Rechtsvortritt',
        legalConsequence: 'Avanzar sin comunicacion puede causar accidente. Se recomienda ceder el paso con gesto de mano.',
      },
    },
    {
      id: 'fc-pri-15',
      front: {
        type: 'situation',
        text: 'Un autobus de linea en zona urbana activa el intermitente para salir de una parada senalizada.',
      },
      back: {
        rule: 'Si un autobus de linea en zona urbana senaliza que desea incorporarse desde una parada senalizada, los vehiculos detras deben reducir velocidad o detenerse para permitirle salir.',
        germanName: 'Busvorfahrt an Haltestellen',
        legalConsequence: 'No aplica si la parada esta en el borde izquierdo de la calzada. Multa por no ceder.',
      },
    },
    {
      id: 'fc-pri-16',
      front: {
        type: 'situation',
        text: 'Quieres incorporarte al trafico desde el borde de la carretera. Vehiculos circulan por la via.',
      },
      back: {
        rule: 'El conductor que quiera incorporarse al trafico, dar la vuelta o retroceder no debe entorpecer a otros usuarios de la via; estos tienen prioridad.',
        germanName: 'Einbiegen in den Verkehr',
        legalConsequence: 'Multa y responsabilidad en caso de accidente por incorporacion incorrecta.',
      },
    },
    {
      id: 'fc-pri-17',
      front: {
        type: 'situation',
        text: 'Circulas por una carretera y un ciclista va por una pista de bicicleta paralela. Quieres girar a la derecha cruzando la pista.',
      },
      back: {
        rule: 'Al girar, los conductores de vehiculos motorizados deben conceder a los ciclistas el derecho de paso en pistas y carriles de bicicleta.',
        germanName: 'Vortritt fuer Radfahrer',
        legalConsequence: 'Multa y alta responsabilidad en caso de accidente con ciclista.',
      },
    },
    {
      id: 'fc-pri-18',
      front: {
        type: 'situation',
        text: 'Un tranvia circula por una calle secundaria y se acerca a una interseccion con una via principal.',
      },
      back: {
        rule: 'Los tranvias tienen prioridad general, pero si circulan por una calle secundaria, deben ceder el paso a los vehiculos de la via principal.',
        germanName: 'Strassenbahn auf Nebenstrasse',
        legalConsequence: 'El tranvia en via secundaria no tiene prioridad sobre la via principal.',
      },
    },
    {
      id: 'fc-pri-19',
      front: {
        type: 'situation',
        text: 'En un paso peatonal sin regulacion dividido por una isla de trafico, un peaton cruza la primera parte.',
      },
      back: {
        rule: 'En pasos peatonales sin regulacion divididos por una isla de trafico, cada parte del cruce es considerada un cruce separado.',
        germanName: 'Geteilter Fussgaengerstreifen',
        legalConsequence: 'El peaton tiene prioridad en cada seccion. Debes estar atento a ambas partes.',
      },
    },
    {
      id: 'fc-pri-20',
      front: {
        type: 'situation',
        text: 'Los peatones tienen prioridad en un paso peatonal, pero un tranvia se acerca al mismo paso.',
      },
      back: {
        rule: 'En pasos peatonales sin regulacion, los peatones tienen prioridad excepto frente a tranvias. No deben usar su prioridad si el vehiculo esta tan cerca que no podria detenerse.',
        germanName: 'Fussgaengerstreifen und Strassenbahn',
        legalConsequence: 'Los peatones deben ser prudentes frente a tranvias por la distancia de frenado.',
      },
    },
    {
      id: 'fc-pri-21',
      front: {
        type: 'situation',
        text: 'Un semaforo muestra flecha verde a la derecha con luz ambar intermitente al lado.',
      },
      back: {
        rule: 'Las flechas verdes permiten la circulacion en la direccion indicada. Si al mismo tiempo parpadea una luz ambar, los vehiculos que giran deben ceder el paso al trafico contrario y peatones.',
        germanName: 'Gruener Pfeil mit Blinklicht',
        legalConsequence: 'No ceder paso con flecha verde y ambar intermitente: multa y riesgo de accidente.',
      },
    },
    {
      id: 'fc-pri-22',
      front: {
        type: 'rule',
        text: 'Jerarquia de regulacion del trafico: policia, semaforos, senales, reglas generales.',
      },
      back: {
        rule: 'Orden de prioridad: 1) Senales y ordenes policiales, 2) Semaforos, 3) Senales de trafico y marcas viales, 4) Regla general de prioridad por la derecha.',
        germanName: 'Rangordnung der Verkehrsregeln',
        legalConsequence: 'Seguir la jerarquia incorrecta puede causar infracciones graves.',
      },
    },
    {
      id: 'fc-pri-23',
      front: {
        type: 'situation',
        text: 'La luz ambar del semaforo se enciende despues de la luz verde.',
      },
      back: {
        rule: 'Si la luz ambar sigue a la verde: los vehiculos que aun puedan hacerlo deben detenerse antes de la interseccion. Si ya estan en la interseccion, deben despejarla.',
        germanName: 'Gelbes Licht nach Gruen',
        legalConsequence: 'Cruzar con ambar cuando es posible detenerse: multa.',
      },
    },
    {
      id: 'fc-pri-24',
      front: {
        type: 'situation',
        text: 'La luz ambar aparece junto con la luz roja en el semaforo.',
      },
      back: {
        rule: 'Si la luz ambar aparece junto con la roja: prepararse para continuar la marcha y esperar la luz verde. No avanzar todavia.',
        germanName: 'Gelb-Rot Phase',
        legalConsequence: 'Arrancar antes de que se ponga verde: multa por pasar en rojo.',
      },
    },
    {
      id: 'fc-pri-25',
      front: {
        type: 'situation',
        text: 'Un vehiculo no motorizado (jinete a caballo) se acerca a una interseccion desde la derecha.',
      },
      back: {
        rule: 'Los conductores de vehiculos no motorizados, ciclistas, jinetes y guias de caballos u otros animales grandes tienen los mismos derechos de prioridad que los conductores de vehiculos motorizados.',
        germanName: 'Gleichberechtigte Verkehrsteilnehmer',
        legalConsequence: 'Debes respetar la prioridad de la derecha tambien para estos usuarios.',
      },
    },
    {
      id: 'fc-pri-26',
      front: {
        type: 'situation',
        text: 'Necesitas despejar la calzada urgentemente porque se acerca un vehiculo de emergencia con sirena.',
      },
      back: {
        rule: 'Cuando sea esencial despejar inmediatamente la calzada, los conductores deben subirse a la acera con la precaucion necesaria.',
        germanName: 'Rettungsgasse',
        legalConsequence: 'No facilitar el paso a vehiculos de emergencia: infraccion grave.',
      },
    },
    {
      id: 'fc-pri-27',
      front: {
        type: 'situation',
        text: 'Un policia tiene ambos brazos extendidos hacia los lados.',
      },
      back: {
        rule: 'Ambos brazos extendidos hacia los lados: el trafico de frente y por detras debe detenerse. El trafico lateral puede continuar.',
        germanName: 'Polizeiliche Handzeichen - beide Arme',
        legalConsequence: 'Ignorar la senal policial: multa elevada y posible denuncia.',
      },
    },
    {
      id: 'fc-pri-28',
      front: {
        type: 'rule',
        text: 'Quienes deben obedecer senales y ordenes en la via publica.',
      },
      back: {
        rule: 'Son vinculantes las senales de: policia uniformada, bomberos, transporte militar, proteccion civil, servicios escolares, personal en obras viales, autoridades aduaneras y personal de pasos a nivel.',
        germanName: 'Weisungsbefugte Personen',
        legalConsequence: 'Desobedecer sus ordenes tiene las mismas consecuencias que desobedecer a la policia.',
      },
    },
    {
      id: 'fc-pri-29',
      front: {
        type: 'situation',
        text: 'Un vehiculo se detiene antes de un paso peatonal para dejar cruzar a un peaton. Tu circulas en el carril contiguo.',
      },
      back: {
        rule: 'Vehiculos no deben ser adelantados cuando se detienen antes de un paso peatonal para permitir a peatones cruzar la carretera.',
        germanName: 'Ueberholverbot am Fussgaengerstreifen',
        legalConsequence: 'Adelantar en esta situacion: multa grave y alto riesgo de atropello.',
      },
    },
    {
      id: 'fc-pri-30',
      front: {
        type: 'situation',
        text: 'Un vehiculo indica con el intermitente izquierdo que quiere girar a la izquierda. Tu quieres adelantarlo.',
      },
      back: {
        rule: 'Vehiculos no deben ser adelantados cuando el conductor indica su intencion de girar a la izquierda. Sin embargo, vehiculos posicionados en carril para girar a la izquierda pueden ser adelantados solo por la derecha.',
        germanName: 'Ueberholverbot bei Linksabbieger',
        legalConsequence: 'Adelantar por la izquierda a un vehiculo que gira a la izquierda: multa y alto riesgo de colision.',
      },
    },
  ],
};
