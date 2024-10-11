import Image from "next/image";
import Link from "next/link";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl my-20 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="flex flex-row justify-center lg:justify-center items-center gap-4 mb-4">
        <Image
          src="/logo-YnnovaRent.jpg"
          width={140}
          height={20}
          className="mb-4 rounded-full w-auto h-auto max-w-[150px] max-h-[140px] lg:max-w-[200px] lg:max-h-[140px]"
          alt="YnnovaRent-logo"
        />
        <div className="sm:flex left-1/2 w-1 bg-gray-200 h-28"></div>
        <Image
          width={140}
          height={20}
          src="/logo-renting.png"
          alt="Logo Renting Colombia"
          className="w-auto h-auto max-w-[150px] max-h-[140px] lg:max-w-[200px] lg:max-h-[140px]"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-blue-700">
        Política de Tratamiento de Datos
      </h1>
      <p className="text-gray-700 mb-4">
        RENTING COLOMBIA S.A.S. (la “Compañía”), establecimiento comercial,
        identificado con el NIT. 811.011.779-8, con domicilio principal en la
        dirección Carrera 52 # 14 – 30 Etapa 2, Oficina 340 Medellín, Colombia,
        línea gratuita nacional 01 8000 524 444, PBX (604) 514 44 44, correo
        electrónico{" "}
        <a
          href="mailto:servicio@rentingcolombia.com"
          className="text-blue-600 hover:underline"
        >
          servicio@rentingcolombia.com
        </a>
        , reconoce la importancia de la seguridad, privacidad y confidencialidad
        de los datos personales de sus clientes, usuarios, colaboradores,
        proveedores, accionistas, aliados y en general de todos sus grupos de
        interés respecto de los cuales ejerce tratamiento de información
        personal. En cumplimiento de las disposiciones constitucionales y
        legales, la Compañía adoptó la presente{" "}
        <strong>POLÍTICA PARA EL TRATAMIENTO DE DATOS PERSONALES</strong>.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        1. Normatividad Aplicable
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Artículo 15 de la Constitución Política de Colombia</li>
        <li>Ley Estatutaria 1266 de 2008</li>
        <li>Ley 1273 de 2009</li>
        <li>Ley Estatutaria 1581 de 2012</li>
        <li>Decreto 1377 de 2013</li>
        <li>Decreto 886 de 2014</li>
        <li>Decreto 1074 de 2015</li>
        <li>
          Título V de la Circular Única de la Superintendencia de Industria y
          Comercio
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        2. Contexto y Alcance
      </h2>
      <p className="text-gray-700 mb-4">
        De acuerdo con el artículo 15 de la Constitución Política de Colombia,
        todas las personas tienen derecho a conocer, actualizar y rectificar la
        información que se tenga de ellas en las centrales de datos. Por su
        parte, la Ley 1581 de 2012, estableció el régimen general de Protección
        de Datos Personales en Colombia, desarrollando los principios
        constitucionales bajo los cuales toda persona tiene derecho a conocer,
        actualizar y rectificar la información personal que repose en bases de
        datos o archivos (manuales o automatizados), y a recibir información
        veraz y verificable.
      </p>
      <p className="text-gray-700 mb-4">
        En la Compañía, como responsables o encargados de la información, según
        sea el caso, contamos con una regulación especial sobre la Protección de
        los Datos de nuestros grupos de interés, y definimos procesos y
        políticas que buscan garantizar la confianza, seguridad y calidad en el
        uso de la información. La compañía recibe, registra, conserva, modifica,
        reporta, consulta, entrega, comparte y elimina información con la
        autorización del titular de esta. Los datos nos permiten ofrecer y
        suministrar información de los productos y servicios para consultar,
        reportar y actualizar ante los operadores de información y riesgo;
        actualizar el estado de las relaciones contractuales, dar cumplimiento a
        las obligaciones pactadas, prevenir el riesgo de lavado de activos,
        financiación del terrorismo, entre otras. Renting Colombia S.A.S.
        obtiene la autorización del titular de los datos a través de diferentes
        medios, como autorización escrita, verbal o por diferentes medios
        virtuales para las finalidades descritas en la presente política.
      </p>

      <p className="text-gray-700 mb-4">
        Así mismo, la Compañía, en el desarrollo de su actividad y gestión, y
        con el fin de brindar colaboración empresarial entre las empresas del
        grupo, durante la ejecución de sus actividades podrá efectuar el
        tratamiento de datos personales de forma conjunta con las entidades que
        pertenezcan o llegaren a pertenecer al GRUPO BANCOLOMBIA, o a quien
        represente sus derechos u ostente en el futuro la calidad de acreedor,
        cesionario, o cualquier calidad frente a los titulares de la
        información. Se entenderán que son parte del GRUPO BANCOLOMBIA, la
        Compañía y las entidades que pertenezcan o puedan llegar a pertenecer al
        Grupo de acuerdo con la ley, sus filiales y/o subsidiarias, o las
        entidades en las cuales estas, directa o indirectamente, tengan
        participación accionaria o sean asociados, domiciliadas en Colombia y/o
        en el exterior.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        3. Destinatarios
      </h2>
      <p className="text-gray-700 mb-4">
        La presente política, está dirigida a nuestros clientes, usuarios,
        colaboradores, proveedores, aliados y en general nuestros grupos de
        interés sobre los cuales la Compañía realiza tratamiento de información
        personal.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        4. Definiciones
      </h2>
      <p className="text-gray-700 mb-4">
        Se tendrán en cuenta las siguientes definiciones para efectos de la
        presente política:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Autorización</strong>: es el consentimiento previo, expreso e
          informado del titular de la información para llevar a cabo el
          tratamiento de datos personales.
        </li>
        <li>
          <strong>Aviso de privacidad</strong>: es la comunicación verbal o
          escrita que tiene como fin el informar al titular de los datos sobre
          la política de protección de datos de la Compañía.
        </li>
        <li>
          <strong>Base de Datos</strong>: conjunto organizado de datos
          personales objeto de tratamiento.
        </li>
        <li>
          <strong>Causahabiente</strong>: persona que ha sucedido a otra en
          razón a su fallecimiento.
        </li>
        <li>
          <strong>Dato Personal</strong>: cualquier información vinculada o que
          pueda asociarse a una o varias personas naturales determinadas o
          determinables.
        </li>
        <li>
          <strong>Dato Público</strong>: dato que la ley o la Constitución
          determina como tal, así como todos aquellos que no sean semiprivados o
          privados.
        </li>
        <li>
          <strong>Dato Privado</strong>: es aquel dato que por su naturaleza
          íntima o reservada sólo es relevante para el titular de la
          información.
        </li>
        <li>
          <strong>Dato Semiprivado</strong>: es aquel dato que no tiene
          naturaleza íntima, reservada, ni pública y cuyo conocimiento o
          divulgación puede interesar no sólo a su titular sino a cierto sector
          o grupo de personas.
        </li>
        <li>
          <strong>Dato Sensible</strong>: es el dato que afecta la intimidad del
          titular o cuyo uso indebido puede generar su discriminación.
        </li>
        <li>
          <strong>Encargado del Tratamiento</strong>: persona natural o
          jurídica, pública o privada, que por sí misma o en asocio con otros,
          realice el tratamiento de datos personales por cuenta del responsable
          del tratamiento.
        </li>
        <li>
          <strong>Responsable del Tratamiento</strong>: persona natural o
          jurídica, pública o privada, que por sí misma o en asocio con otros,
          realice el tratamiento de datos personales.
        </li>
        <li>
          <strong>Titular</strong>: persona natural cuyos datos personales sean
          objeto de tratamiento. Para la Compañía serán titulares de la
          información los clientes, usuarios, colaboradores, proveedores,
          aliados, accionistas, visitantes, nuestros grupos de interés y
          cualquier otra persona natural cuyos datos sean objeto de tratamiento
          por la Compañía, ya sea directa o indirectamente.
        </li>
        <li>
          <strong>Transferencia de datos</strong>: tiene lugar cuando el
          responsable y/o encargado del tratamiento de datos personales, ubicado
          en Colombia, envía la información o los datos personales a un
          receptor, que a su vez es responsable del tratamiento y se encuentra
          dentro o fuera del país.
        </li>
        <li>
          <strong>Transmisión de Datos</strong>: tratamiento de datos personales
          que implica la comunicación de estos dentro o fuera del territorio de
          la República de Colombia cuando tenga por objeto la realización de un
          tratamiento por el encargado por cuenta del responsable.
        </li>
        <li>
          <strong>Tratamiento</strong>: cualquier operación o conjunto de
          operaciones sobre datos personales, tales como la recolección,
          almacenamiento, uso, circulación o supresión.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        5. Principios Rectores del Tratamiento de Datos Personales
      </h2>
      <p className="text-gray-700 mb-4">
        La Compañía se compromete con los titulares de la información a tratar
        sus datos personales, de conformidad con los siguientes principios:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>
            Principio de legalidad en materia de tratamiento de datos:
          </strong>{" "}
          la Compañía es consciente de que el tratamiento al que se refiere la
          Ley 1581 de 2012 es una actividad reglada que debe sujetarse a lo
          establecido en ella y en las demás disposiciones que la desarrollen.
        </li>
        <li>
          <strong>Principio de finalidad:</strong> la Compañía tratará los datos
          con una finalidad legítima.
        </li>
        <li>
          <strong>Principio de libertad:</strong> la Compañía tratará los datos
          sólo con el consentimiento, previo, expreso e informado del titular.
          Los datos personales no podrán ser obtenidos o divulgados sin
          autorización previa, o en ausencia de mandato legal o judicial.
        </li>
        <li>
          <strong>Principio de veracidad o calidad:</strong> la información que
          sea objeto de tratamiento debe ser veraz, completa, actualizada,
          comprobable y comprensible. En la Compañía está prohibido el
          tratamiento de datos, fraccionados o que induzcan a error.
        </li>
        <li>
          <strong>Principio de transparencia:</strong> la Compañía conoce que
          los titulares de la información tienen derecho a obtener en cualquier
          momento y sin restricciones, información acerca de la existencia de
          datos que le conciernan.
        </li>
        <li>
          <strong>Principio de acceso y circulación restringida:</strong> el
          tratamiento está sujeto a los límites derivados de la naturaleza de
          los datos personales, de lo dispuesto en la ley 1581 de 2012 y la
          Constitución. En este sentido, el tratamiento sólo podrá hacerse por
          personas autorizadas por el titular y/o por las personas previstas en
          la ley. Con excepción de la información pública, la Compañía no pondrá
          a disposición los datos personales en Internet u otros medios de
          divulgación o comunicación masiva, salvo que el acceso sea
          técnicamente controlable para brindar un conocimiento restringido sólo
          a los titulares o terceros autorizados conforme a la ley 1581 de 2012.
        </li>
        <li>
          <strong>Principio de seguridad:</strong> la Compañía manejará la
          información sujeta a tratamiento a que se refiere la Ley 1581 de 2012,
          con las medidas técnicas, humanas y administrativas que sean
          necesarias para otorgar seguridad a los registros evitando su
          adulteración, pérdida, consulta, uso o acceso no autorizado o
          fraudulento.
        </li>
        <li>
          <strong>Principio de confidencialidad:</strong> todas las personas que
          intervengan en el tratamiento de datos personales que no tengan la
          naturaleza de públicos están obligadas a garantizar la reserva de la
          información, inclusive después de finalizada su relación con alguna de
          las labores que comprende el tratamiento, pudiendo sólo realizar
          suministro o comunicación de datos personales cuando ello corresponda
          al desarrollo de las actividades autorizadas en la ley 1581 de 2012 y
          en los términos de esta.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        6. Autorizaciones
      </h2>
      <p className="text-gray-700 mb-4">
        La Compañía solicitará la autorización de manera que el titular de la
        información otorgue su consentimiento previo, expreso e informado del
        tratamiento al cual son sujetos sus datos personales. La autorización
        también podrá obtenerse a partir de conductas inequívocas del titular
        del dato, las cuales permitan concluir de manera razonable que éste
        otorgó su consentimiento para el tratamiento de su información. Dichas
        conductas deben exteriorizar de manera clara la voluntad de autorizar el
        tratamiento. El consentimiento del titular se podrá obtener por
        cualquier medio que pueda ser objeto de consulta posterior, tales como,
        comunicación escrita, verbal, virtual o por conductas inequívocas. En
        virtud de su naturaleza y objeto social, la Compañía recibe, recolecta,
        registra, conserva, almacena, modifica, reporta, consulta, entrega,
        transmite, transfiere, comparte y elimina información personal, para lo
        cual obtiene la previa autorización del titular.
      </p>
      <p className="text-gray-700 mb-4">
        La Compañía como operador de la franquicia de LOCALIZA RENT A CAR,
        solicitará autorización a los clientes vinculados a través de la
        franquicia, para transferir los datos personales, a nivel nacional e
        internacional, del titular a Localiza Rent a Car Brasil como
        franquiciante. La autorización que le otorgan los titulares de la
        información a la Compañía permite entre otras cosas, la realización de
        las siguientes finalidades: ofrecer y suministrar información de los
        productos y servicios, así como consultar, reportar y actualizar sus
        datos ante los operadores de información y riesgo; actualizar las
        relaciones contractuales vigentes y dar cumplimiento a las obligaciones
        pactadas, entre otras (ver numeral 7 finalidades). La Compañía
        conservará prueba de dichas autorizaciones de manera adecuada, velando y
        respetando los principios de privacidad y confidencialidad de la
        información.
      </p>

      <p className="text-gray-700 mb-4">
        Así mismo, en la Compañía cuando se trate de información que se
        relacione con los siguientes tipos de datos, se tendrán las siguientes
        consideraciones especiales:
      </p>

      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>a. Datos sencibles:</strong> Para el tratamiento de datos
          sensibles, la Compañía informará al titular de los datos lo siguiente:
          <ul>
            <li>
              • Para el tratamiento de este tipo de información el titular no
              está obligado a dar su autorización o consentimiento.
            </li>
            <li>
              • Se informará de forma explícita y previa qué tipo de datos
              sensibles serán solicitados.
            </li>
            <li>
              • Se comunicará el tratamiento y la finalidad que se le dará a los
              datos sensibles.
            </li>
            <li>
              • La autorización de los datos sensibles será previa, expresa y
              clara.
            </li>
          </ul>
        </li>
        <li>
          <strong>b. Datos de niñis, niñas y adolescentes:</strong> La Compañía
          se asegurará que el tratamiento de este tipo de datos se realice de
          conformidad con los derechos de los niños, niñas y adolescentes. En
          este sentido, se protegerá su carácter especial y velará por el
          respeto de sus derechos fundamentales, de acuerdo con lo dispuesto en
          los artículos 5, 6 y 7 de la Ley 1581 de 2012, y en los artículos 6 y
          12 del Decreto 1377 de 2013, y demás normas que los modifiquen o
          adicionen. Para efectos de cumplir lo anterior, la Compañía actuará de
          conformidad con lo siguiente: Se solicitará autorización del
          representante legal del niño, niña o adolescente previo ejercicio del
          menor de su derecho a ser escuchado, opinión que será valorada
          teniendo en cuenta la madurez, autonomía y capacidad para entender el
          asunto, a efectos de realizar el tratamiento de sus datos personales.
          Se informará el carácter facultativo de responder preguntas acerca de
          los datos de los niños, niñas o adolescentes. Se informará de forma
          explícita y previa cuáles son los datos objeto de tratamiento y la
          finalidad de este. La Compañía informa a todos sus grupos de interés
          que, de conformidad con el artículo 10 de la Ley 1581 de 2012, la
          autorización del titular no será necesaria cuando se trate de: <br />{" "}
          <strong>1.</strong> Información requerida por una entidad pública o
          administrativa en ejercicio de sus funciones legales o por orden
          judicial. <br /> <strong>2.</strong> Datos de naturaleza pública.{" "}
          <br /> <strong>3.</strong> Casos de urgencia médica o sanitaria.{" "}
          <br /> <strong>4.</strong> Tratamiento de información autorizado por
          la ley para fines históricos, estadísticos o científicos. <br />{" "}
          <strong>5.</strong> Datos relacionados con el Registro Civil de las
          Personas.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        7. Finalidades
      </h2>
      <p className="text-gray-700 mb-4">
        Las siguientes son las principales finalidades con las que la Compañía
        realiza el tratamiento de la información personal:
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        Clientes y/o usuarios
      </h3>
      <ul className="list-disc list-inside mb-4">
        <li>Establecer, mantener y terminar la relación contractual.</li>
        <li>
          Cumplir y hacer cumplir las obligaciones derivadas de los contratos
          comerciales entre la Compañía y el cliente.
        </li>
        <li>
          Conocer su comportamiento financiero, comercial y crediticio y el
          cumplimiento de sus obligaciones legales.
        </li>
        <li>
          Realizar todas las gestiones necesarias tendientes a confirmar y
          actualizar la información del cliente.
        </li>
        <li>
          Validar y verificar la identidad del cliente para el ofrecimiento y
          administración de productos y servicios, así mismo para compartir la
          información con diversos actores del mercado.
        </li>
        <li>
          Ofrecer y prestar productos o servicios a través de cualquier medio o
          canal de acuerdo con el perfil del cliente y los avances tecnológicos.
        </li>
        <li>
          Entregar información a las entidades del Grupo Bancolombia para el
          ofrecimiento de campañas comerciales actuales y futuras, promoción de
          productos y servicios tanto propios como de terceros, y demás
          comunicaciones necesarias para mantener comunicado y enterado al
          cliente mediante: llamada telefónica, mensaje de texto, correo
          electrónico, Facebook, Twitter, Instagram o cualquier red social de
          integración o mensajería instantánea, entre otros.
        </li>
        <li>
          Realizar la gestión de cobranza y recuperación de cartera, ya sea
          directamente o mediante un tercero contratado para tal función.
        </li>
        <li>
          Suministrar información comercial, legal, de productos, de seguridad,
          de servicio o de cualquier otra índole.
        </li>
        <li>
          Compartir información del cliente a los aliados de la Compañía con el
          fin de acceder o redimir beneficios otorgados por la adquisición de
          bienes y servicios.
        </li>
        <li>
          Conocer la ubicación, geolocalización y datos de contacto del cliente
          para efectos de notificaciones con fines de seguridad, monitoreo,
          ofrecimiento de beneficios y ofertas comerciales.
        </li>
        <li>
          Efectuar análisis e investigaciones comerciales, estadísticas, de
          riesgos y de mercado, financiera, incluyendo contactar al cliente para
          estos fines.
        </li>
        <li>
          Conocer el estado de las operaciones (activas, pasivas o de cualquier
          naturaleza) o las que en el futuro llegue a celebrar el cliente con
          cualquier entidad del GRUPO BANCOLOMBIA, con otras entidades
          financieras o comerciales, con cualquier agente o sujeto del mercado
          financiero, operador de información, administrador de bases de datos o
          cualquier otra entidad similar que en un futuro se establezca y que
          tenga por objeto cualquiera de las anteriores actividades.
        </li>
        <li>
          Prevenir el lavado de activos, la financiación del terrorismo, así
          como detectar el fraude, corrupción, y otras actividades ilegales.
        </li>
        <li>
          Realizar, validar, autorizar o verificar transacciones, incluyendo,
          cuando sea requerido, la consulta y reproducción de datos sensibles
          tales como la huella digital, imagen o voz, entre otros.
        </li>
        <li>
          Realizar encuestas de satisfacción concerniente a los servicios
          prestados o productos vendidos.
        </li>
        <li>
          Consultar multas y sanciones ante las diferentes autoridades
          administrativas y judiciales o bases de datos públicas que tengan como
          función la administración de datos de esta naturaleza.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        Proveedores y aliados
      </h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          La información solicitada al proveedor o aliado podrá incluir
          información de la persona natural o jurídica según corresponda. Así
          mismo, es posible que se solicite información de los empleados del
          proveedor o aliado que se encuentren dedicados a cumplir alguna
          función o relación con la Compañía que por la labor desempeñada
          requieran acceso a las instalaciones, a los aplicativos y/o sistemas u
          otros de la organización.
        </li>
        <li>
          Realizar el proceso de vinculación del proveedor o aliado con la
          Organización, generando el desarrollo de los procedimientos internos,
          los cuales son de relacionamiento, contables, financieros,
          comerciales, logísticos, entre otros.
        </li>
        <li>
          Administrar y verificar antecedentes comerciales, reputacionales y los
          riesgos de lavado de activos y financiación del terrorismo, así como
          para detectar y/o prevenir el fraude, corrupción y otras actividades
          ilegales, por parte del proveedor o sus empleados en relación con la
          operación de la Compañía.
        </li>
        <li>
          Gestionar y fortalecer las relaciones contractuales con el proveedor o
          aliado, permitiendo un mayor control en las obligaciones asumidas por
          las partes.
        </li>
        <li>
          Revisar y evaluar los resultados del proveedor o aliado, con el fin de
          fortalecer los procesos de contratación dentro de la Compañía.
        </li>
        <li>
          Ofrecer y prestar productos o servicios a través de cualquier medio o
          canal de acuerdo con el perfil del proveedor o aliado, y de acuerdo
          con los avances tecnológicos.
        </li>
        <li>
          Efectuar análisis e investigaciones comerciales, estadísticas, de
          riesgos, de mercado y financiera a partir de los resultados del
          proveedor o aliado.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">Aspirantes</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          Realizar la evaluación de ingreso y el proceso de vinculación del
          aspirante.
        </li>
        <li>
          Verificar la información personal, familiar, laboral, profesional e
          histórica de los candidatos que participan en los diferentes procesos
          de la Compañía, el cumplimiento de las normas constitucionales,
          legales y reglamentarias.
        </li>
        <li>
          Realizar estadísticas demográficas, sociales y económicas y
          actualización de datos personales.
        </li>
        <li>Invitación a otros procesos de selección.</li>
        <li>
          Celebrar convenios con terceros que faciliten el cumplimiento de estas
          finalidades y cualquier otro fin legítimo que permita ejercer el
          cumplimiento de las finalidades definidas en esta política.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">Empleados</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          El tratamiento de la información personal de nuestros colaboradores
          tiene como finalidad la gestión de las relaciones laborales existentes
          con éstos, así como el desarrollo de las diferentes actividades
          establecidas por la organización. Entre las cuales resaltamos las
          siguientes:
        </li>
        <li>
          Dar cumplimiento a las obligaciones y derechos derivados de su
          actividad como empleador, y a las actividades propias de su objeto
          social principal y conexo, las cuales pueden ser realizadas
          directamente o con el apoyo de terceros con los que se compartirá su
          información para los fines relacionados con el objeto del contrato.
        </li>
        <li>
          Compartir sus datos personales con las autoridades (judiciales o
          administrativas) nacionales o extranjeras cuando la solicitud se base
          en razones legales, procesales, y/o tributarias.
        </li>
        <li>
          Acceso y autorización de los beneficios establecidos por el empleador,
          según los requisitos definidos en cada caso.
        </li>
        <li>
          Consulta de sus datos en las listas internas de control, en
          cumplimiento de las normas nacionales y políticas internas asociadas
          al Sistema de Prevención del Riesgo de Lavado de Activos y
          Financiación del Terrorismo, así como el cumplimiento con estándares
          de ética e integridad establecidos por la Compañía.
        </li>
        <li>
          Tratar la información de EL EMPLEADO con ocasión del relacionamiento
          de éste con los fondos de empleados, fondos mutuos de inversión,
          bancos, corredores de seguros, entidades relacionadas con el Grupo
          Bancolombia y cajas de compensación, u otros terceros que cumplan
          funciones similares a las de estas entidades, o que puedan ofrecer
          productos de interés a EL EMPLEADO y a las cuales EL EMPLEADO haya
          autorizado previamente para conocer su información.
        </li>
        <li>
          Tratándose de excolaboradores, la Compañía almacenará, aun después de
          finalizado el contrato de trabajo, la información necesaria para
          cumplir con las obligaciones que puedan derivarse de la relación
          laboral, tales como consultas sobre antecedentes laborales y
          reputacionales.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">Otros</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          Realizar análisis de la satisfacción del cliente, las relaciones
          comerciales, de ventas, entre otros.
        </li>
        <li>
          Desarrollar actividades de mercadeo, publicidad, promoción y
          comunicación comercial relacionadas con la Compañía.
        </li>
        <li>
          Cumplir con la obligación legal de conservar registros de información
          de acuerdo con la normatividad vigente.
        </li>
        <li>
          Efectuar los análisis estadísticos y de comportamiento del mercado
          sobre productos, servicios y otras variables relacionadas con la
          actividad de la Compañía.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        8. Almacenamiento de la Información
      </h2>
      <p className="text-gray-700 mb-4">
        El almacenamiento de la información se realiza de manera física y/o
        digital en medios y ambientes que cuentan con los controles adecuados
        para la protección de los datos personales. Estos incluyen controles de
        seguridad física e informática, tecnológicos y de tipo ambiental en
        áreas restringidas en instalaciones propias y/o centros documentales
        administrados por terceros.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        9. Duración del Tratamiento y Vigencia de las Bases de Datos
      </h2>
      <p className="text-gray-700 mb-4">
        Los datos personales estarán sujetos a tratamiento por la Compañía
        durante el término contractual en el que el titular de la información
        tenga el producto, servicio, contrato o relación, más el término que
        establezca la ley.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        10. Derechos del Titular
      </h2>
      <p className="text-gray-700 mb-4">
        Los titulares de la información que es objeto de tratamiento por la
        Compañía podrán:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Conocer, actualizar, rectificar, suprimir o revocar sus datos
          personales y ser informados del tratamiento que la Compañía realiza
          sobre los datos personales.
        </li>
        <li>
          Solicitar prueba de la autorización otorgada a la Compañía, salvo
          cuando expresamente se exceptúe como requisito para el Tratamiento.
        </li>
        <li>
          Ser informado por parte de la Compañía, previa solicitud, respecto del
          uso que les ha dado a sus datos personales.
        </li>
        <li>
          Presentar solicitudes y reclamos relacionados con la regulación
          vigente en materia de Protección de Datos Personales.
        </li>
        <li>
          Solicitar revocatoria de la autorización y/o supresión de un dato
          personal en el caso de determinarse que la Compañía presenta una
          conducta contraria a la regulación vigente. La solicitud de supresión
          o revocatoria no procederá cuando los titulares tengan el deber legal
          o contractual de permanecer en la base de datos de la Compañía.
        </li>
        <li>
          Acceder en forma gratuita a sus datos personales que hayan sido objeto
          de Tratamiento.
        </li>
      </ul>
      <p className="text-gray-700 mb-4">
        En concordancia con el art. 20 del Decreto 1377 de 2013, el ejercicio de
        los derechos anteriormente mencionados podrá ejercerse por las
        siguientes personas:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Por el titular, quien deberá acreditar su identidad en forma
          suficiente por los distintos medios que le ponga a disposición el
          responsable.
        </li>
        <li>Por sus causahabientes, quienes deberán acreditar tal calidad.</li>
        <li>
          Por el representante y/o apoderado del titular, previa acreditación de
          la representación o apoderamiento.
        </li>
        <li>Por estipulación a favor de otro o para otro.</li>
        <li>
          Los derechos de los niños, niñas o adolescentes se ejercerán por las
          personas que estén facultadas para representarlos.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        11. Deberes de RENTING COLOMBIA S.A.S
      </h2>
      <p className="text-gray-700 mb-4">
        La Compañía, como responsable de los datos personales almacenados en sus
        bases de datos, se compromete a:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Garantizar al titular el pleno y efectivo ejercicio de sus derechos.
        </li>
        <li>
          Solicitar y conservar copia de la autorización otorgada por el titular
          o prueba de ésta.
        </li>
        <li>
          Informar al titular sobre las finalidades de la recolección, los usos
          de sus datos personales y sus derechos en razón a la autorización
          otorgada.
        </li>
        <li>
          Conservar la información en condiciones de seguridad para prevenir su
          adulteración, pérdida, consulta, uso o acceso no autorizado.
        </li>
        <li>
          Garantizar que la información suministrada a terceros o encargados del
          tratamiento sea veraz, completa, exacta, actualizada, comprobable y
          comprensible.
        </li>
        <li>
          Actualizar la información que tenga algún tercero o encargado,
          respecto de todas las novedades en relación con los datos
          suministrados y adoptar las medidas necesarias para que la información
          esté actualizada.
        </li>
        <li>
          Rectificar la información cuando tome conocimiento de que es
          incorrecta.
        </li>
        <li>
          Velar por que los terceros y/o encargados del tratamiento de la
          información personal de la cual es responsable la Compañía cuenten con
          medidas y políticas efectivas para garantizar el adecuado tratamiento
          de dicha información. Asimismo, les exigirá acogerse y dar aplicación
          a lo previsto en la presente Política de Tratamiento de Datos
          Personales y demás lineamientos establecidos por la Compañía o
          certificar que sus políticas internas recogen cuando menos las
          disposiciones aquí previstas. En caso de no ser posible la emisión de
          la certificación, la Compañía deberá corroborar que las políticas
          internas de los terceros y/o encargados recogen criterios de seguridad
          y/o privacidad equivalentes o superiores a los aquí previstos. En este
          sentido, los terceros y/o encargados deberán adoptar las medidas y
          condiciones de seguridad y privacidad para los datos personales que
          sean compartidos con estos, cuando menos al mismo nivel de protección
          adoptado por la Compañía.
        </li>
        <li>
          Darle trámite a las consultas y reclamos formulados de conformidad con
          lo previsto en la presente Política y en la ley.
        </li>
        <li>
          Informar a la autoridad de protección de datos cuando se presenten
          violaciones de seguridad y existan riesgos en la administración de la
          información de los titulares.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        12. Atención de Consultas, Quejas y Reclamos
      </h2>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">a. Consultas</h3>
      <p className="text-gray-700 mb-4">
        Los titulares, sus causahabientes o cualquier otra persona que pueda
        tener un interés legítimo, podrán solicitar que se les informe sobre los
        datos personales del titular que se encuentren almacenados en cualquier
        base de datos de la Compañía. La Compañía garantizará el derecho de
        consulta, dándole a conocer la información personal vinculada al
        titular. Las consultas que versen sobre temas de acceso a la
        información, constancias de la autorización otorgada por el titular,
        usos y finalidades de la información personal, o cualquier otra consulta
        relacionada con la información personal entregada por parte del titular,
        deberán presentarse por medio de los canales habilitados por la
        Compañía.
      </p>
      <p className="text-gray-700 mb-4">
        La consulta será atendida en un término máximo de diez (10) días hábiles
        contados a partir de la fecha de recibo de esta. Cuando no sea posible
        atender la consulta dentro del término previsto, se informará al
        interesado, señalando los motivos de la demora y la fecha en que se
        atenderá la consulta, la cual no superará los cinco (5) días hábiles
        siguientes al vencimiento del primer término, de conformidad con lo
        establecido en el artículo 14 de la Ley 1581 de 2012.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">b. Reclamos</h3>
      <p className="text-gray-700 mb-4">
        Los titulares, sus causahabientes o cualquier otra persona con un
        interés legítimo, que considere que la información contenida en alguna
        de las bases de datos de la Compañía deba ser objeto de corrección,
        actualización o supresión o que adviertan un posible incumplimiento de
        los deberes establecidos en la Ley 1581 de 2012 y sus decretos
        reglamentarios, podrán presentar un reclamo siguiendo los requisitos del
        artículo 15 de la misma ley.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        c. Requisitos para Presentar un Reclamo
      </h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          Identificación del titular o de quien está presentando la reclamación,
          señalando su nombre y número de identificación.
        </li>
        <li>
          Describir el motivo del reclamo de forma clara y expresa, donde se
          establezcan los hechos que originaron el mismo, presentando los
          documentos que pretenda hacer valer.
        </li>
        <li>
          Acreditar el interés legítimo con el que actúa quien presenta el
          reclamo y adjuntar, en caso de ser necesarios, los soportes
          correspondientes.
        </li>
        <li>
          Señalar el teléfono, la dirección física o electrónica a la que se
          deba notificar y remitirse la respuesta de la solicitud.
        </li>
      </ul>

      <p className="text-gray-700 mb-4">
        En todo caso, si el reclamo está incompleto se requerirá al interesado
        dentro de los cinco (5) días siguientes a la recepción de este para que
        subsane las fallas. Si transcurridos dos (2) meses desde la fecha del
        requerimiento, sin que el solicitante presente la información requerida,
        la Compañía entenderá que ha desistido del reclamo.
      </p>
      <p className="text-gray-700 mb-4">
        Cuando la Compañía no sea la entidad competente para resolver el reclamo
        presentado, se dará traslado a quien corresponda en un término máximo de
        dos (2) días hábiles, y se informará de dicha situación al interesado.
      </p>
      <p className="text-gray-700 mb-4">
        En el caso que el reclamo sea recibido completo, se incluirá en la base
        de datos una leyenda que diga `en trámite` y el motivo de este, en un
        término no mayor a dos (2) días hábiles. Esta leyenda permanecerá hasta
        que el reclamo sea resuelto y se ajustará de acuerdo con los
        procedimientos internos. Ahora bien, el término máximo para atender el
        reclamo será de quince (15) días hábiles contados a partir del día
        siguiente a la fecha de su recibo. Cuando no fuere posible atenderlo
        dentro de dicho término, se informará al interesado los motivos de la
        demora y la fecha en que se resolverá su reclamo, la cual en ningún caso
        podrá superar los ocho (8) días hábiles siguientes al vencimiento del
        primer término.
      </p>
      <p className="text-gray-700 mb-4">
        Los titulares, sus causahabientes o cualquier otra persona con un
        interés legítimo, podrán presentar queja ante la Superintendencia de
        Industria y Comercio, pero sólo una vez hayan agotado el trámite de
        consulta o reclamo ante la Compañía como responsable y/o cualquier
        encargado, de conformidad con lo previsto en el artículo 16 de la Ley
        1581 de 2012.
      </p>
      <p className="text-gray-700 mb-4">
        En caso de solicitar la supresión de toda o parte de su información
        personal, deberá tener en cuenta que la Compañía analizará el
        requerimiento realizado. Sin embargo, no procederá la supresión de la
        información en caso de que el titular tenga algún deber legal o
        contractual de permanecer en la base de datos que administra la
        Compañía.
      </p>
      <p className="text-gray-700 mb-4">
        En caso de solicitar la revocatoria de la autorización de sus datos
        personales, la Compañía analizará el requerimiento realizado y
        comunicará al titular si esta revocatoria procede. No obstante, no
        procederá la revocatoria de la autorización en caso de que el titular
        tenga algún deber legal o contractual de permanecer en la base de datos
        que administra la Compañía.
      </p>
      <p className="text-gray-700 mb-4">
        Las consultas y reclamaciones presentadas se tramitarán de acuerdo con
        los procesos y procedimientos internos.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        d. Canales de Atención de Consultas, Quejas y Reclamos
      </h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          El correo electrónico{" "}
          <a
            href="mailto:servicio@rentingcolombia.com"
            className="text-blue-600 hover:underline"
          >
            servicio@rentingcolombia.com
          </a>
        </li>
        <li>
          Área de Riesgos de Renting Colombia en la dirección: Carrera 52 #
          14-30 Etapa 2, oficina 340, Medellín, Colombia.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        13. Transferencia y Transmisión de Datos Personales
      </h2>
      <p className="text-gray-700 mb-4">
        Eventualmente la Compañía, como responsable de la información personal
        almacenada en sus bases de datos y en desarrollo de las finalidades
        descritas en el presente documento, podrá realizar transferencia o
        transmisión nacional o internacional de datos. La Compañía está
        comprometida con verificar el nivel de los estándares de protección y
        seguridad del país receptor de la información personal, realizar la
        declaración de conformidad (cuando aplique) y suscribir contrato de
        transferencia u otro instrumento jurídico que garantice la protección de
        los datos personales objeto de transferencia.
      </p>
      <p className="text-gray-700 mb-4">
        En virtud de esta relación de intercambio, la Compañía ha adoptado
        diversos lineamientos para la relación con terceros, con el fin de
        proteger la información objeto de esta actividad. En aras de proteger la
        información, la Compañía verificará si la Superintendencia de Industria
        y Comercio ha incluido al país respectivo en la lista de países que
        ofrecen un nivel adecuado de protección de datos o revisará la normativa
        vigente en el país receptor de la información, para determinar si se
        cuenta con las condiciones idóneas para garantizar niveles adecuados de
        seguridad para la información objeto de transmisión o transferencia.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        Relacionamiento con Terceros y/o Encargados
      </h3>
      <p className="text-gray-700 mb-4">
        En desarrollo de esta Política y las disposiciones internas para el
        manejo adecuado de datos personales, la Compañía velará porque los
        terceros con que se vincule o con los que establezca relaciones
        comerciales, laborales o alianzas, adecuen sus conductas al régimen de
        protección de datos personales en Colombia.
      </p>
      <p className="text-gray-700 mb-4">
        En atención a lo anterior, la Compañía, sin perjuicio de toda la
        documentación, modelos y medios previstos para la solicitud de la
        autorización para el tratamiento, los avisos de privacidad, registros y
        coberturas contractuales y/o legales, podrá solicitar a terceros y/o
        encargados información idónea y pertinente para verificar y observar el
        cumplimiento de las disposiciones contenidas en la presente política y
        en el régimen de protección de datos personales en Colombia.
      </p>
      <p className="text-gray-700 mb-4">
        En este sentido, la Compañía podrá solicitar a terceros y/o encargados
        que acrediten de manera previa, durante o de forma posterior a la
        relación que los vincule, el cumplimiento de los requisitos del régimen
        de protección de datos personales. De tal forma que se podrá solicitar
        una revisión y supervisión de forma eventual o periódica, del
        cumplimiento de los requisitos legales y/o contractuales, mediante
        evidencias o soportes de la gestión realizada, realizar visitas a las
        instalaciones del tercero, entre otras actividades que podrán
        coordinarse para validar el cumplimiento.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">14. Cookies</h2>
      <p className="text-gray-700 mb-4">
        La Compañía en aras de mejorar su servicio en los sitios web y
        aplicativos digitales, utiliza cookies propias y de terceros con el fin
        de optimizar la experiencia de los clientes y usuarios, monitorear
        información estadística, presentar contenidos y publicidad relacionados
        con las preferencias de los usuarios cuando naveguen por nuestro sitio
        web, plataformas y/o aplicativos tecnológicos y/o digitales.
      </p>
      <p className="text-gray-700 mb-4">
        La información que se recopila mediante las cookies se encuentra cifrada
        y no será utilizada para identificar y/o revelar la información del
        usuario. De igual forma no se recopilan datos de los usuarios, tales
        como: número de tarjetas débito o crédito, u otra información de
        carácter financiero o crediticio.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        15. Política y lineamientos complementarios y modificaciones de la
        presente política
      </h2>
      <p className="text-gray-700 mb-4">
        En virtud, de la presente política, la Compañía podrá desarrollar
        políticas sobre aspectos específicos (por ejemplo, política de cookies),
        así como lineamientos, directrices y circulares orientadas a su
        implementación, siempre que sean consistentes con el marco normativo y
        esta política.
      </p>
      <p className="text-gray-700 mb-4">
        Esta política puede ser modificada en cualquier momento con el objeto de
        adaptarla a nuevas prácticas que se desarrollen o a novedades
        legislativas o jurisprudenciales en la materia. Cualquier actualización
        se pondrá a disposición de los titulares de la información personal en
        la página web www.rentingcolombia.com sección Política de Tratamiento de
        Datos o en cualquier otro medio que se considere pertinente, indicando
        la fecha de entrada en vigor de la correspondiente modificación o
        actualización, según sea el caso.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        16. Vigencia
      </h2>
      <p className="text-gray-700 mb-4">
        La presente Política de Tratamiento de Datos Personales empieza a regir
        a partir de la fecha de su aprobación (25 de junio de 2024).
      </p>

      <Link
        href="/"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Volver
      </Link>
    </div>
  );
};

export default PrivacyPolicy;
