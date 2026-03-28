import type { TheoryModule } from '../types';

export const specialModule: TheoryModule = {
  id: 'special-rules',
  title: 'Reglas Especiales Suizas',
  description: 'Tranvias, tuneles, Blue Zones, Bergpoststrassen, estacionamiento, uso de luces, accidentes y autopistas',
  icon: '🇨🇭',
  sections: [
    {
      id: 'special-trams',
      title: 'Comportamiento frente a tranvias',
      germanTerm: 'Strassenbahn / Tram',
      content: `Las vias deben quedar libres para los tranvias, a los cuales se les debe dar prioridad. Si el tranvia circula por una calle secundaria, debe ceder el paso a los vehiculos de la via principal.

El tranvia en movimiento se adelanta **por la derecha**. Si esto no es posible, puede adelantarse por la izquierda. Si no se aproximan tranvias, los vehiculos que giran a la izquierda pueden utilizar su espacio de circulacion para incorporarse al carril.

El conductor debe moverse hacia la izquierda si es necesario, cuando un tranvia se aproxima en sentido contrario por el borde derecho de la calzada.

Si el tranvia circula por la izquierda, el conductor que va en la misma direccion debe dejar suficiente espacio para que el trafico en sentido contrario pueda desplazarse hacia la izquierda.

El tranvia que no circula por el borde de la calzada solo puede adelantarse por la izquierda cuando no haya cruces de calles y se descarte cualquier obstaculo para el trafico en sentido contrario.

Si los pasajeros de un tren o tranvia deben descender por el lado del trafico en paradas sin islas de proteccion, los vehiculos que circulen por el mismo lado de la via **deben detenerse** hasta que los pasajeros hayan despejado la calzada.

El tranvia detenido solo puede cruzarse o adelantarse **lentamente**. Se adelanta por la derecha donde haya isla de proteccion, de lo contrario unicamente por la izquierda.

Los vehiculos no deben detenerse sobre la via del tranvia ni a menos de **1,50 m** de la via mas cercana.`,
      keyRules: [
        'Los tranvias generalmente tienen prioridad (excepto si vienen de calle secundaria)',
        'Tranvia en movimiento: adelantar por la derecha; si no es posible, por la izquierda',
        'En paradas sin isla de proteccion: detenerse hasta que los pasajeros despejen la calzada',
        'Tranvia detenido: cruzar o adelantar solo lentamente',
        'No detenerse sobre la via del tranvia ni a menos de 1,50 m de la via',
        'En pasos peatonales sin semaforo, peatones tienen prioridad excepto frente a tranvias',
      ],
    },
    {
      id: 'special-tunnels',
      title: 'Conduccion en tuneles',
      germanTerm: 'Tunnel',
      content: `Retroceder y girar esta **prohibido** en tuneles.

Conductores de vehiculos motorizados y bicicletas deben encender sus **luces bajas**, incluso si el tunel esta iluminado.

Conductores de vehiculos pueden detenerse en tuneles **solo en emergencias**. El motor debe ser apagado inmediatamente.

**Comportamiento en tuneles:**
- Encender luz baja
- Mantener distancia
- Encender radio
- Ajustar a frecuencia senalizada

**Atasco en tunel:**
- Encender luces de advertencia
- Detenerse hacia un lado

La senal **4.07 Tunel** designa un tramo que atraviesa un tunel, en el que se aplican las reglas especiales para el trafico en tuneles. La senal se encuentra en la entrada del tunel y adicionalmente como senal anticipada.`,
      keyRules: [
        'Prohibido retroceder y girar en tuneles',
        'Encender luces bajas siempre, incluso si el tunel esta iluminado',
        'Solo detenerse en emergencias; apagar motor inmediatamente',
        'Encender la radio y ajustar a la frecuencia senalizada',
        'En atasco: encender luces de advertencia y detenerse hacia un lado',
      ],
    },
    {
      id: 'special-blue-zone',
      title: 'Blaue Zone (Zona Azul) y estacionamiento',
      germanTerm: 'Blaue Zone / Parkieren',
      content: `**Blaue Zone (4.18 Estacionamiento con disco de estacionamiento):**
Cualquier persona que estacione un vehiculo motorizado en un area de trafico senalizada debe colocar inmediatamente la flecha en la linea siguiente a la hora de llegada en el disco de estacionamiento y colocar el disco detras del parabrisas de manera que sea claramente visible. La configuracion del disco de estacionamiento **no debe cambiarse** hasta que el conductor se retire.

**Reglas generales de estacionamiento:**

Detenerse en el lado izquierdo de la carretera esta permitido solo:
1. Si una via de tranvia corre a lo largo del lado derecho
2. Si "no detenerse" o "no estacionar" esta indicado en el lado derecho
3. En carreteras estrechas con trafico ligero
4. En calles de un solo sentido

**Estacionar esta prohibido:**
1. En carreteras principales fuera de areas edificadas
2. En carreteras principales en areas edificadas si no queda espacio para cruce de dos vehiculos (aprox. 6 m)
3. En carriles de bicicletas y en la calzada junto a dichos carriles
4. Mas cerca de 50 m de cruces ferroviarios fuera de areas edificadas y 20 m en areas edificadas
5. En puentes
6. Frente a accesos a edificios o propiedades que no sean del conductor`,
      keyRules: [
        'Blaue Zone: colocar disco de estacionamiento con flecha en la linea siguiente a la hora de llegada',
        'Disco visible en el parabrisas; no cambiar la configuracion hasta retirarse',
        'Prohibido estacionar en carreteras principales fuera de areas edificadas',
        'Prohibido estacionar a menos de 50 m de cruces ferroviarios (fuera) o 20 m (dentro)',
        'Prohibido estacionar en puentes y carriles de bicicletas',
        'Lado izquierdo solo en calles de un sentido o cuando el derecho tiene restricciones',
      ],
    },
    {
      id: 'special-bergpoststrasse',
      title: 'Bergpoststrassen y carreteras de montana',
      germanTerm: 'Bergpoststrassen',
      content: `En **Bergpoststrassen** (carreteras postales de montana), los conductores de vehiculos deben prestar atencion a las senales e indicaciones de los conductores de vehiculos de servicio regular cuando enfrentan cruces y adelantamientos dificiles.

La senal **4.05 Bergpoststrasse** designa estas carreteras especiales y la senal **4.06** indica el fin de la Bergpoststrasse.

**Reglas en carreteras de montana y pendientes pronunciadas:**

En carreteras con una pendiente pronunciada y en carreteras de montana, los vehiculos deben ser conducidos de tal manera que los frenos no se usen en exceso.

El conductor del vehiculo debe dar al trafico contrario el derecho de paso cuando el cruce esta impedido por un obstaculo en su mitad de la calzada.

Si el cruce no es posible en una carretera estrecha, las unidades camion-remolque tienen derecho de paso antes que otros vehiculos, los vehiculos motorizados pesados antes que los ligeros y los autobuses antes que los camiones. Entre vehiculos del mismo tipo, el vehiculo que este mas cercano a una zona de apartadero debe retroceder.

Donde el cruce es dificil, principalmente el vehiculo que conduce **hacia abajo** debe detenerse a tiempo. Si el cruce no es posible, el vehiculo que conduce hacia abajo debe **retroceder**, a menos que el otro vehiculo este obviamente mas cerca de un apartadero.`,
      keyRules: [
        'En Bergpoststrassen, obedecer indicaciones de vehiculos de servicio publico',
        'En pendientes: no usar los frenos en exceso (usar marchas bajas)',
        'Prioridad de cruce: camion-remolque > vehiculo pesado > autobus > camion > ligero',
        'Vehiculo que va hacia abajo debe detenerse/retroceder para permitir cruce',
        'Entre vehiculos del mismo tipo: retrocede el mas cercano a un apartadero',
      ],
    },
    {
      id: 'special-lights',
      title: 'Uso de las luces',
      germanTerm: 'Beleuchtung / Lichtgebrauch',
      content: `**Conduccion obligatoria con luces durante el dia:**
Los vehiculos motorizados (turismos, furgonetas, camiones, automoviles), motocicletas y bicicletas electricas deben circular con las luces encendidas durante el dia.

**Uso de las luces durante la conduccion:**
1. Desde el anochecer hasta el amanecer, en condiciones de mala visibilidad y en tuneles: usar luces de cruce
2. En otros casos: luces diurnas o de cruce
3. Luces largas: se pueden usar si es necesario; evitar en zonas urbanas

**Las luces largas deben cambiarse a luces de cruce:**
1. Con antelacion, al menos **200 m** antes de cruzarse con otro usuario de la via
2. Inmediatamente cuando el conductor de frente lo solicite encendiendo y apagando sus propias luces largas
3. Al circular detras de otro vehiculo y al dar marcha atras

Las luces largas deben iluminar suficientemente la calzada a una distancia minima de **100 m**.

Los **faros antiniebla** y las luces traseras antiniebla solo pueden usarse cuando la visibilidad este gravemente reducida por niebla, nevada o lluvia intensa.

**Vehiculos estacionados:** deben estar iluminados con las luces de estacionamiento y traseras. En vehiculos de hasta 6,00 m de largo y 2,00 m de ancho en areas urbanas, es suficiente la luz de estacionamiento del lado del trafico. No se necesita iluminacion en plazas de aparcamiento senalizadas.`,
      keyRules: [
        'Luces encendidas obligatorias durante el dia para todos los vehiculos motorizados',
        'Cambiar a luces de cruce al menos 200 m antes de cruzarse con otro vehiculo',
        'Luces largas: minimo 100 m de iluminacion',
        'Faros antiniebla: solo con visibilidad gravemente reducida (niebla, nieve, lluvia intensa)',
        'Vehiculos estacionados: iluminar con luces de estacionamiento (salvo en plazas senalizadas)',
      ],
    },
    {
      id: 'special-accidents',
      title: 'Comportamiento en caso de accidentes',
      germanTerm: 'Verhalten bei Unfällen',
      content: `Si ocurriera un accidente que involucre un vehiculo motorizado o una bicicleta, todos los participantes en el accidente deben **detenerse inmediatamente**. Deben asegurar la seguridad del trafico tanto como sea posible. Si hay personas heridas, todos los involucrados en el accidente deben prestar ayuda; las personas no involucradas deben hacerlo en la medida de lo razonable para ellas.

**Orden de actuacion:** Asegurar el trafico, cuidar a los heridos, informar a la policia.

En caso de accidentes que involucren lesiones a personas, la policia debe ser informada inmediatamente si alguien tiene heridas externas o se anticipa que haya heridas internas. Una victima del accidente inconsciente debe ser colocada en una **posicion lateral** y debe ser monitoreada.

Observar si su respiracion esta sin obstrucciones. En caso de **shock**, la persona esta visiblemente palida y su pulso apenas puede sentirse.

No es necesario informar a la policia en caso de abrasiones o moretones menores; sin embargo, la parte que causa la lesion debe indicar su nombre y direccion a la persona herida.

La situacion en el sitio del accidente solo puede cambiarse antes de la llegada de la policia para proteger a las personas heridas o para salvaguardar el trafico. El sitio original del accidente debe ser **marcado** en la carretera antes de cualquier cambio.

Si un conductor se da cuenta posteriormente de que estuvo o pudo haber estado involucrado en un accidente, debe **regresar inmediatamente** al sitio o presentarse en la siguiente estacion de policia.

En caso de accidentes en **pasos a nivel**, las partes involucradas deben informar inmediatamente a la administracion ferroviaria.

**Tel. de llamada de emergencia de la policia: 117**`,
      keyRules: [
        'Detenerse inmediatamente en caso de accidente',
        'Orden: 1. Asegurar trafico, 2. Cuidar heridos, 3. Informar policia',
        'Victima inconsciente: posicion lateral, monitorear respiracion',
        'Marcar posicion original del accidente antes de mover nada',
        'Si se descubre un accidente tarde: regresar al sitio o ir a la policia',
        'Accidentes en pasos a nivel: informar a la administracion ferroviaria',
        'Telefono de emergencia policia: 117',
      ],
    },
    {
      id: 'special-highway',
      title: 'Uso de autopistas y carreteras de doble calzada',
      germanTerm: 'Autobahnen und Autostrassen',
      content: `Solo vehiculos motorizados que puedan alcanzar una velocidad de al menos **80 km/h** estan permitidos en autopistas y carreteras de doble calzada.

**Limites de velocidad:**
- 100 km/h en carreteras de doble calzada
- 120 km/h en autopistas

En autopistas con al menos tres carriles en la misma direccion, el **carril mas exterior a la izquierda** solo puede ser usado por vehiculos motorizados que alcancen una velocidad de mas de **100 km/h**.

Los usuarios de autopistas y carreteras de doble calzada tienen prioridad antes que los vehiculos en las carreteras de acceso (carril de aceleracion). El principio del **cierre de cremallera (Reissverschluss)** aplica en trafico lento.

**Adelantar por la derecha saliendo y volviendo a entrar esta prohibido.** Sin embargo, se permite adelantar por la derecha en:
1. Trafico en linea en el carril izquierdo o central
2. Secciones con destinos designados para carriles individuales
3. Si el carril izquierdo esta delimitado por linea de seguridad
4. En el carril de desaceleracion de salidas

**Dar la vuelta y retroceder estan prohibidos.** Los arcenes y espacios de estacionamiento solo se usan para paradas de emergencia.

Cuando los vehiculos se mueven a velocidad de caminata o estan detenidos, deben formar un **carril libre** para vehiculos de emergencia entre el carril extremo izquierdo y el carril inmediatamente a la derecha sin ocupar el arcen.`,
      keyRules: [
        'Solo vehiculos que alcancen min. 80 km/h pueden usar autopistas',
        'Carril izquierdo en autopistas de 3+ carriles: solo vehiculos > 100 km/h',
        'Prohibido adelantar por la derecha saliendo y volviendo a entrar',
        'Prohibido dar la vuelta y retroceder en autopistas',
        'Cremallera (Reissverschluss): obligatorio al eliminar carriles',
        'En atasco: formar carril de emergencia entre carril izquierdo y el siguiente a la derecha',
        'Arcenes y aparcamientos: solo para paradas de emergencia',
      ],
    },
    {
      id: 'special-zipper',
      title: 'Sistema de cremallera (Reissverschluss)',
      germanTerm: 'Reissverschlusssystem',
      content: `El sistema de cremallera es ahora **obligatorio** al eliminar carriles. Esto aplica donde sea que los carriles terminen: por ejemplo, al cambiar de tres a dos carriles, en caso de accidentes o trabajos en la carretera.

En este caso, se conduce en ambos carriles hasta que los carriles se eliminen. Alli, cada usuario de la via en el carril continuo permite a un usuario de la via del carril eliminado incorporarse delante de ellos de acuerdo con el principio de cremallera.

Los conductores deben permitir que vehiculos se incorporen desde el carril eliminado. Esto esta destinado a prevenir que los vehiculos cambien demasiado temprano al carril restante cuando se eliminan carriles, como ocurre a menudo hoy. Esto permite que el trafico fluya mas suavemente.

Sin embargo, los conductores que se desvian **no estan autorizados a forzar la brecha**; todavia tienen el derecho de paso los vehiculos en el carril continuo.

El sistema de cremallera ahora tambien aplica en **entradas de autopistas** en trafico lento.

**No cumplir con el principio de cremallera es punible con una multa.**`,
      keyRules: [
        'Cremallera obligatoria al eliminar carriles (multa por incumplimiento)',
        'Conducir hasta el final del carril que se elimina, luego incorporarse alternadamente',
        'Se aplica tambien en entradas de autopistas en trafico lento',
        'El vehiculo del carril eliminado no puede forzar la brecha',
        'Cada vehiculo del carril continuo deja pasar a uno del carril eliminado',
      ],
    },
    {
      id: 'special-signals-indicators',
      title: 'Uso de los indicadores y senales de averia',
      germanTerm: 'Zeichengebung / Pannendreieck',
      content: `**Uso de los indicadores:**
Todo cambio de direccion debe anunciarse con suficiente antelacion mediante el intermitente o con senales claras de la mano. Esto aplica especialmente a:
1. Incorporarse al carril, cambiar de carril y girar
2. Adelantar y dar la vuelta
3. Incorporarse al trafico y detenerse al borde de la calzada

El uso del intermitente **no exime** al conductor de la obligacion de actuar con precaucion.

**Senal de averia (Pannendreieck):**
La senal de averia prescrita debe ser facilmente alcanzable en el vehiculo. Debe colocarse en el borde de la calzada tan pronto como un vehiculo sea detenido por razones urgentes en la calzada contrariamente a las regulaciones.

Debe colocarse al menos **50 m** detras del vehiculo, en carreteras con trafico rapido al menos **100 m** detras del vehiculo. La senal de averia tambien debe ser fijada a la parte trasera de los vehiculos remolcados.

**Luces de advertencia de peligro** pueden usarse solo para advertir de peligros:
1. En el vehiculo estacionario, ademas de la senal de averia
2. En el vehiculo en movimiento, especialmente antes de un sitio de accidente inesperado, un atasco o en autopistas y carreteras de doble calzada al remolcar`,
      keyRules: [
        'Indicar con intermitente todo cambio de direccion con suficiente antelacion',
        'El intermitente no exime de actuar con precaucion',
        'Senal de averia: min. 50 m detras del vehiculo (100 m en carreteras rapidas)',
        'La senal de averia debe estar facilmente accesible en el vehiculo',
        'Luces de advertencia: solo para situaciones de peligro real',
      ],
    },
    {
      id: 'special-alcohol-drugs',
      title: 'Alcohol, drogas y aptitud para conducir',
      germanTerm: 'Alkohol und Drogen',
      content: `Cualquiera que no este en condiciones de conducir debido a cansancio excesivo, estar bajo la influencia de alcohol, medicacion, drogas o por otra razon no debe conducir un vehiculo. En viajes largos, deben tomarse suficientes pausas de descanso.

Una persona esta bajo la influencia de alcohol cuando el o ella tiene una concentracion de alcohol en sangre de **0,10 por mil o mas**.

La incapacidad para conducir debido a la influencia del alcohol (embriaguez) siempre esta probada si el conductor del vehiculo tiene una concentracion de alcohol en sangre de **0,5 por mil o mas**. Cualquiera que conduzca un vehiculo motorizado en estado de embriaguez es castigado con prision o una multa monetaria.

Se tarda aproximadamente **8 horas** hasta que un contenido de alcohol de 1,0 por mil se haya degradado en la sangre.

**Conducir bajo la influencia de alcohol esta prohibido** para titulares de licencia de aprendiz, instructores de conduccion, y choferes profesionales.

**Tolerancia cero con las drogas:** conducir bajo la influencia de drogas es siempre una violacion seria que conduce a la **revocacion de la licencia de conducir**.

Conductores involucrados en accidentes pueden ser sometidos a una prueba de aliento de alcohol; la negativa es punible. Ciertos medicamentos, junto con el alcohol, pueden disminuir la capacidad de conducir.`,
      keyRules: [
        'Limite de alcohol: 0,5 por mil = incapacidad para conducir probada',
        'Influencia de alcohol: desde 0,10 por mil',
        '8 horas para degradar 1,0 por mil de alcohol en sangre',
        'Tolerancia cero: aprendices, instructores, choferes profesionales',
        'Tolerancia cero absoluta con drogas: revocacion de licencia',
        'Negarse a prueba de aliento es punible',
      ],
    },
  ],
};
