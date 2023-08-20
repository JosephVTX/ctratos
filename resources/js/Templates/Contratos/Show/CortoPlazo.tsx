import Paper from "@/Components/paper/Paper";
import { PaperImageUrl } from "@/Components/paper/PaperMedia";
import { formatCurrency } from "@/Helpers/Money";
import { numberToText } from "@/Helpers/Text";
import SubClausula from "../Partials/SubClausula";
import Clausula from "../Partials/Clausula";

export type Props = {
    id: number;
    logo?: boolean;
    nombres: string;
    apellidos: string;
    capital: string;
    tipo_cuenta_cliente: string;
    numero_cuenta_cliente: string;
    banco_cliente: string;
    tipo_doc: string;
    numero_doc: string;
    direccion: string;
    distrito: string;
    provincia: {
        nombre: string;
    };

    departamento: {
        nombre: string;
    };
    genero: string;
    numero_cci_cliente: string;
    vigencia_contrato: {
        cantidad: number;
        unidad: string;
    };
    fecha_inicio: string;
    fecha_fin: string;
    correo: string;
    celular: string;
    dni_anverso: string;
    dni_reverso: string;
    declaracion_jurada: string[];
    sustento_declaracion_jurada: string[];
    comprobantes_pago: string[];
    ocupacion: string;
    moneda: string;
    banco_gjg: {
        nombre: string;
        cuenta: string;
    };
    rentabilidad: {
        porcentaje: number;
    };
    user: {
        codigo: string;
    };
    titulo_contrato: string;
};

const cR = (capital: string, rentabilidad: number) =>
    parseInt(capital) * (rentabilidad / 100) + parseInt(capital);

const Miss = ({ title }: { title: string }) => (
    <span className="text-red-500 text-lg underline">{title}</span>
);

const formatDay = (day: string) => {
    const f = numberToText(day);

    const capilatized = f
        .split(" ")
        .map((word) => {
            return word[0].toUpperCase() + word.slice(1);
        })
        .join(" ");

    return capilatized;
};

export default function CortoPlazo(props: Props) {
    const {
        nombres,
        apellidos,
        logo,
        capital,
        tipo_cuenta_cliente,
        numero_cuenta_cliente,
        numero_cci_cliente,
        banco_cliente,
        tipo_doc,
        numero_doc,
        direccion,
        distrito,
        provincia,
        departamento,
        genero,
        vigencia_contrato,
        fecha_inicio,
        fecha_fin,
        correo,
        celular,
        dni_anverso,
        dni_reverso,
        declaracion_jurada,
        sustento_declaracion_jurada,
        comprobantes_pago,
        ocupacion,
        moneda,
        banco_gjg,
        rentabilidad,
        titulo_contrato,
    } = props;

    const paperTitle = `${titulo_contrato}`;

    return (
        <div className="space-y-4">
            <Paper title={paperTitle} logo={logo}>
                <p>
                    Conste por el presente documento, el Contrato de Inversión
                    de Capital con fines de Inversión en ejecución de proyectos
                    con Rentabilidad a Corto Plazo, que celebran por una parte,
                    la Empresa <b>SOLUCIONES EMPRESARIALES GJG S.A.C.,</b> con{" "}
                    <b>RUC: 20609571021,</b> inscrita en la Partida Electrónica
                    N° 14994523 del Registro de Personas Jurídicas de Lima,
                    debidamente representada por su Gerente General el Sr.{" "}
                    <b>GUSTAVO CHAVEZ HURTADO,</b> identificado con DNI N°
                    44572979, con domicilio fiscal en Avenida Larco 101, Piso
                    13, Distrito de Miraflores, Provincia y Departamento de
                    Lima, quien para efectos del presente se le denominará{" "}
                    <b>“EL INVERSOR”</b>; y de la otra parte,{" "}
                    {genero === "masculino" ? "el señor " : "la señora "}
                    <b>
                        <span className="uppercase">
                            {nombres} {apellidos}
                        </span>
                    </b>
                    , identificada con <span>{tipo_doc}</span> N° {numero_doc},
                    con domicilio en {direccion} , Distrito de {distrito},
                    Provincia de {provincia.nombre} y Departamento de{" "}
                    {departamento.nombre}, a quien se le denominará{" "}
                    <b>
                        {genero === "masculino"
                            ? "“EL INVERSIONISTA”"
                            : "“LA INVERSIONISTA”"}
                    </b>
                    , bajo los siguiente términos y condiciones:
                </p>

                <Clausula clausula="Primera" subtitle="Antecedentes">
                    <SubClausula sectionNumber="1.1" title="EL INVERSOR">
                        en una persona jurídica dedicada a la asesoría y
                        consultoría empresarial en al ámbito financiero y a la
                        gestión de proyectos ya sea en el sector público o
                        privado, nacional e internacional, a corto, mediano y
                        largo plazo, realizando inversiones con financiamiento
                        propio y/o de terceros.
                    </SubClausula>
                    <SubClausula
                        sectionNumber="1.2"
                        title={
                            genero === "masculino"
                                ? "EL INVERSIONISTA"
                                : "LA INVERSIONISTA"
                        }
                    >
                        es una persona natural, {ocupacion}, por el cual percibe
                        una contraprestación, que acumulada en el tiempo
                        constituye el monto de lo que pretende invertir en el
                        presente contrato, declarando bajo juramento la
                        procedencia lícita de dicho fondo, tal como consta en la
                        declaración jurada que forma parte integrante del
                        presente contrato.
                    </SubClausula>
                </Clausula>
                <Clausula clausula="Segunda" subtitle="Objeto">
                    <SubClausula sectionNumber="2.1">
                        El presente contrato tiene por objeto la voluntad de{" "}
                        <b>
                            {genero === "masculino"
                                ? "EL INVERSIONISTA"
                                : "LA INVERSIONISTA"}
                        </b>{" "}
                        en realizar el financiamiento con un aporte de capital
                        dentro de los proyectos que <b>EL INVERSOR</b> tiene o
                        está proyectando realizar, generándole a{" "}
                        <b>
                            {genero === "masculino"
                                ? "EL INVERSIONISTA"
                                : "LA INVERSIONISTA"}
                        </b>{" "}
                        una rentabilidad que las partes pactan en el presente
                        contrato.
                    </SubClausula>
                </Clausula>
                <Clausula
                    clausula="TERCERA"
                    subtitle="MONTO DE INVERSIÓN Y RENTABILIDAD"
                >
                    <SubClausula sectionNumber="3.1">
                        Mediante la presente,{" "}
                        <b>
                            {genero === "masculino"
                                ? "EL INVERSIONISTA"
                                : "LA INVERSIONISTA"}
                        </b>{" "}
                        aporta al financiamiento de los proyectos de inversión
                        que ejecutará <b>EL INVERSOR</b> con un monto ascendente
                        a la suma de {formatCurrency(capital, moneda === "$")},
                        la cual fue depositada en la cuenta{" "}
                        {tipo_cuenta_cliente} N.º {banco_gjg.cuenta} del{" "}
                        {banco_gjg.nombre}.
                    </SubClausula>
                    <SubClausula sectionNumber="3.2">
                        Como contraprestación del financiamiento que
                        voluntariamente realiza <b>EL INVERSIONISTA,</b>{" "}
                        <b>EL INVERSOR</b> entregará el monto de{" "}
                        {formatCurrency(
                            `${cR(capital, rentabilidad.porcentaje)}`,
                            moneda === "$"
                        )}{" "}
                        cuyo monto total será depositado en la cuenta{" "}
                        {tipo_cuenta_cliente} N°
                        {numero_cuenta_cliente} / CCI: {numero_cci_cliente} a
                        nombre el señor{" "}
                        <b className="uppercase">
                            {nombres} {apellidos}
                        </b>{" "}
                        del {banco_cliente}.
                    </SubClausula>
                </Clausula>
                <Clausula clausula="CUARTA" subtitle="VIGENCIA Y PLAZOS">
                    <SubClausula sectionNumber="4.1">
                        El presente contrato tendrá una vigencia de{" "}
                        {vigencia_contrato.cantidad} {vigencia_contrato.unidad}{" "}
                        hábiles contados a partir del día {fecha_inicio} y
                        culminará el {fecha_fin}.
                    </SubClausula>
                    <SubClausula sectionNumber="4.2">
                        EL INVERSOR tendrá un plazo máximo de{" "}
                        {numberToText(vigencia_contrato.cantidad)} (
                        {vigencia_contrato.cantidad}) días hábiles contados a
                        partir del día hábil siguiente de la fecha inicio
                        pactada en el 4.1, para devolver el monto invertido más
                        la rentabilidad ofrecida a favor de{" "}
                        <b>
                            {genero === "masculino"
                                ? "EL INVERSIONISTA"
                                : "LA INVERSIONISTA"}
                        </b>
                        .
                    </SubClausula>
                </Clausula>
            </Paper>
            <Paper title={paperTitle} showTitle={false} logo={logo}>
                <Clausula
                    clausula="Quinta"
                    subtitle="OBLIGACIONES Y DERECHOS DE LAS PARTES"
                >
                    <h6 className="font-bold">
                        {genero === "masculino"
                            ? "DEL INVERSIONISTA"
                            : "DE LA INVERSIONISTA"}
                    </h6>
                    <SubClausula sectionNumber="5.1">
                        Entregar a EL INVERSOR el monto de capital consignado en
                        el numeral 3.1 del contrato, dentro del plazo
                        establecido en el numeral 4.2 del presente contrato.
                    </SubClausula>
                    <SubClausula sectionNumber="5.2">
                        Ceder a favor de EL INVERSOR los derechos emanados de la
                        titularidad del monto de inversión.
                    </SubClausula>
                    <SubClausula sectionNumber="5.3">
                        Es obligación{" "}
                        {genero === "masculino"
                            ? "DEL INVERSIONISTA"
                            : "DE LA INVERSIONISTA"}{" "}
                        entregar la factura correspondiente para el pago de la
                        rentabilidad pactada, esto en un plazo no mayor de 05
                        (cinco) días útiles antes del vencimiento de la cuota
                        respectiva, caso contrario y como corresponde, esta
                        rentabilidad no podrá ser abonada a{" "}
                        <b>
                            {genero === "masculino"
                                ? "EL INVERSIONISTA"
                                : "LA INVERSIONISTA"}
                        </b>
                        , no siendo de responsabilidad de EL INVERSOR esta
                        situación, por tanto, no genera ningún tipo de
                        penalidad, bajo ninguna modalidad.
                    </SubClausula>
                    <SubClausula sectionNumber="5.4">
                        Con motivo del presente contrato,{" "}
                        <b>
                            {genero === "masculino"
                                ? "EL INVERSIONISTA"
                                : "LA INVERSIONISTA"}
                        </b>{" "}
                        expresamente autoriza a EL INVERSOR a realizar el pago
                        de los impuestos de ley, encontrándose debidamente
                        facultado a realizar todos los actos necesarios con tal
                        fin.
                    </SubClausula>
                    <h6 className="font-bold">DEL INVERSOR</h6>

                    <SubClausula sectionNumber="5.5">
                        Invertir el monto del capital de{" "}
                        <b>
                            {genero === "masculino"
                                ? "EL INVERSIONISTA"
                                : "LA INVERSIONISTA"}
                        </b>{" "}
                        en proyectos que viene gestionando o administrando de
                        acuerdo con su objeto social.
                    </SubClausula>
                    <SubClausula sectionNumber="5.6">
                        Devolver a <b>LA INVERSIONISTA</b> el monto del capital
                        invertido más la rentabilidad pactada dentro del plazo
                        establecido.
                    </SubClausula>
                </Clausula>
                <Clausula
                    clausula="Sexta"
                    subtitle="MODIFICACIONES CONVENCIONALES"
                >
                    <SubClausula sectionNumber="6.1">
                        El presente contrato se puede modificar por mutuo
                        acuerdo de las partes, para lo cual bastará la
                        comunicación de una de ellas y la aceptación de la otra,
                        procediendo a suscribir la adenda correspondiente.
                    </SubClausula>
                </Clausula>
                <Clausula clausula="SÉPTIMA" subtitle="PENALIDADES">
                    <SubClausula sectionNumber="7.1">
                        Por la naturaleza del presente contrato,{" "}
                        <b>
                            {genero === "masculino"
                                ? "EL INVERSIONISTA"
                                : "LA INVERSIONISTA"}
                        </b>{" "}
                        no podrá solicitar una parte o el total del capital de
                        inversión original invertido durante todo el periodo de
                        vigencia estipulado en el presente contrato; en ese
                        sentido, las partes intervinientes de mutuo acuerdo
                        pactan una penalidad equivalente al 50%(Cincuenta por
                        Ciento) del monto invertido, la cual será descontada del
                        capital inicialmente invertido en el momento de proceder
                        la devolución sin el reconocimiento de ninguna
                        rentabilidad a favor de{" "}
                        <b>
                            {genero === "masculino"
                                ? "EL INVERSIONISTA"
                                : "LA INVERSIONISTA"}
                        </b>
                        .
                    </SubClausula>
                    <SubClausula sectionNumber="7.2">
                        EL INVERSOR, en caso de retraso injustificado que impida
                        el cumplimiento del abono en el plazo establecido en la
                        cláusula cuarta, se le aplicará una penalidad
                        equivalente al 1% (Uno por Ciento) del monto capital de
                        inversión por día hábil, este numeral no resulta
                        aplicable en caso EL INVERSOR resuelva el contrato de
                        manera unilateral, tal y como está detallado en el
                        numeral 8.3.
                    </SubClausula>
                    <SubClausula sectionNumber="7.3">
                        En caso de producirse eventos de caso fortuito o fuerza
                        mayor no imputables a las partes intervinientes, estas
                        quedarán exceptuadas de la aplicación de penalidades y
                        procederán de mutuo acuerdo a suspender el plazo de
                        ejecución del contrato hasta que se supere dichos
                        eventos, para lo cual suscribirán la adenda
                        correspondiente.
                    </SubClausula>
                </Clausula>
            </Paper>

            <Paper title={paperTitle} showTitle={false} logo={logo}>
                <Clausula clausula="Octava" subtitle="RESOLUCIÓN DE CONTRATO">
                    <SubClausula sectionNumber="8.1">
                        En caso de incumplimiento de las obligaciones
                        contractuales, la parte afectada puede resolver el
                        contrato. Para ello, previamente, deberá requerir a la
                        otra parte el cumplimiento de sus obligaciones
                        contractuales mediante carta notarial en el plazo de
                        siete (07) días hábiles contados a partir del día
                        siguiente de producido el incumplimiento.
                    </SubClausula>
                    <SubClausula sectionNumber="8.1" showSectionNumber={false}>
                        Transcurrido el plazo sin que la otra parte haya
                        cumplido con sus obligaciones contractuales o no
                        habiendo respuesta sobre el requerimiento, la parte
                        afectada puede notificar notarialmente la resolución del
                        contrato.
                    </SubClausula>
                    <SubClausula sectionNumber="8.2">
                        Las partes, ante situaciones de caso fortuito o fuerza
                        mayor no imputables a ellas, pueden resolver de mutuo
                        acuerdo el contrato, para lo cual bastará comunicación
                        escrita de una de ellas y la aceptación de la otra,
                        haciéndose concesiones recíprocas con la finalidad de no
                        generar perjuicio alguna de las partes.
                    </SubClausula>
                    <SubClausula sectionNumber="8.3">
                        No obstante lo expuesto en los numerales 8.1 y 8.2
                        anteriores, mediante la presente y por acuerdo expreso
                        entre las partes intervinientes, EL INVERSOR en
                        cualquier momento podrá resolver de manera unilateral el
                        contrato principal y su o sus adendas, esto sin
                        expresión de causa, para esta pactada situación, EL
                        INVERSOR deberá devolver el íntegro del capital
                        invertido, además de la rentabilidad generada hasta el
                        día mismo de la resolución unilateral del contrato, para
                        la aplicación de esta resolución unilateral, esta no
                        estará afecta a ninguna penalidad y/o sanción, dado que
                        se está cumpliendo con devolver el íntegro del dinero
                        invertido así como cancelar la rentabilidad pactada.
                        Para el proceso de la resolución unilateral descrita en
                        el párrafo que antecede, EL INVERSOR notificará de este
                        hecho mediante correo electrónico a{" "}
                        <b>
                            {genero === "masculino"
                                ? "EL INVERSIONISTA"
                                : "LA INVERSIONISTA"}
                        </b>
                        , teniendo un plazo no mayor de 03(tres) días hábiles de
                        enviado el correo electrónico para realizar el depósito
                        del íntegro del dinero que corresponda, en caso no se
                        cumpla con el depósito dentro del plazo, la resolución
                        unilateral queda sin efecto, corriendo el plazo
                        correspondiente de acuerdo al contrato salvo excepciones
                        de ejecución de la misma expresadas en los artículos
                        1314 y 1315 del Código Civil.
                    </SubClausula>
                </Clausula>
                <Clausula
                    clausula="Novena"
                    subtitle="SOLUCIÓN DE CONTROVERSIAS"
                >
                    <SubClausula sectionNumber="9.1">
                        Las controversias que surjan entre las partes durante la
                        ejecución del contrato se resuelven mediante mutuo
                        acuerdo o ante centro de conciliación o arbitraje, según
                        el acuerdo de las partes.
                    </SubClausula>
                    <SubClausula sectionNumber="9.2">
                        En caso las controversias sean resueltas mediante
                        arbitraje, las partes acuerdan someterse ante la Cámara
                        de Comercio de Lima, mediante la designación de árbitro
                        único y sujetos a las reglas que establezca dicha
                        institución arbitral. El laudo arbitral emitido es
                        inapelable, definitivo y obligatorio para las partes
                        desde el día siguiente de su notificación.
                    </SubClausula>
                </Clausula>
                <Clausula
                    clausula="Décima"
                    subtitle="FACULTAD DE ELEVAR A ESCRITURA PÚBLICA"
                >
                    <SubClausula sectionNumber="10.1">
                        Cualquiera de las partes podrá elevar el presente
                        contrato a escritura pública asumiendo todos los gastos
                        que demande esta formalidad.
                    </SubClausula>
                </Clausula>
                <Clausula
                    clausula="Undécima"
                    subtitle="LAS COMUNICACIONES ESCRITAS Y VIRTUALES"
                >
                    <SubClausula sectionNumber="11.1">
                        Las comunicaciones escritas realizadas durante la
                        ejecución del contrato surtirán efecto desde el día
                        siguiente de notificadas físicamente en los domicilios
                        consignados en la parte introductoria del contrato.
                    </SubClausula>
                </Clausula>
            </Paper>
            <Paper title={paperTitle} showTitle={false} logo={logo}>
                <SubClausula sectionNumber="11.2">
                    Las comunicaciones virtuales realizadas durante la ejecución
                    del contrato surtirán efecto desde el día de recibidas en
                    los correos electrónicos y números de WhatsApp declarados
                    por las partes (se establece que el día será computado desde
                    las 09:00 am hasta las 17:00 pm, en caso la comunicación se
                    produzca fuera de dicho horario, será computada a partir del
                    siguiente día útil y/o hábil).
                </SubClausula>
                <SubClausula sectionNumber="11.3">
                    Para la administración del presente contrato, las partes
                    declaran los siguientes correos electrónicos y numero de
                    WhatsApp:
                </SubClausula>

                <SubClausula showSectionNumber={false} sectionNumber="11.3">
                    <div className="space-y-6">
                        <h4 className="font-bold">EL INVERSOR</h4>
                        <div className="grid grid-cols-2">
                            <div className="space-y-4">
                                <p>Correo electrónico:</p>
                                <p>Numero de whatsapp:</p>
                            </div>
                            <div className="space-y-4">
                                <p>atencionalcliente@gjgsoluciones.com.pe</p>
                                <p>+51 950 795 730</p>
                            </div>
                        </div>
                        <h4 className="font-bold">
                            <b>
                                {genero === "masculino"
                                    ? "EL INVERSIONISTA"
                                    : "LA INVERSIONISTA"}
                            </b>
                        </h4>
                        <div className="grid grid-cols-2">
                            <div className="space-y-4">
                                <p>Correo electrónico:</p>
                                <p>Numero de whatsapp:</p>
                            </div>
                            <div className="space-y-4">
                                <p>{correo}</p>
                                <p>+51 {celular}</p>
                            </div>
                        </div>
                    </div>
                </SubClausula>

                <Clausula
                    clausula="Duodécima"
                    subtitle="NORMA SUPLETORIA APLICABLE"
                >
                    <SubClausula sectionNumber="12.1">
                        En todo lo no previsto en el presente Contrato, serán de
                        aplicación las normas contenidas en el Código Civil que
                        las partes declaran conocer.
                    </SubClausula>
                </Clausula>
                <Clausula
                    clausula="DÉCIMO TERCERA"
                    subtitle="DISPOSICIÓN FINAL"
                >
                    <SubClausula sectionNumber="13.1">
                        Las partes declaran que celebran el presente contrato
                        con plena y amplia voluntad sin que medie presión o
                        vicio que altere su voluntad, por lo que renuncian desde
                        ya a cualquier acción judicial que traiga su anulación
                        y, de ser el caso, renuncian a los fueros de sus
                        domicilios personales y se someten a lo establecido en
                        cláusula novena del presente contrato.
                    </SubClausula>
                    <SubClausula sectionNumber="13.1" showSectionNumber={false}>
                        En señal de conformidad las partes suscriben el presente
                        documento, en la ciudad de Lima en la fecha 24 de Julio
                        de 2023.
                    </SubClausula>
                </Clausula>

                <section className="grid grid-cols-2 gap-12 pt-32 uppercase">
                    <div className="font-bold text-center border-t border-black">
                        SOLUCIONES EMPRESARIALES GJG S.A.C <br />
                        GERENTE GENERAL <br />
                        EL INVERSOR
                    </div>
                    <div className="font-bold text-center border-t border-black">
                        {nombres} {apellidos} <br />
                        {tipo_doc} Nº {numero_doc} <br />
                        {genero === "masculino"
                            ? "EL INVERSIONISTA"
                            : "LA INVERSIONISTA"}
                    </div>
                </section>
            </Paper>

            <Paper title={paperTitle} showTitle={false} logo={logo}>
                <img src={dni_anverso} alt="" />
                <img src={dni_reverso} alt="" />
            </Paper>

            {declaracion_jurada.map((url, index) => (
                <PaperImageUrl
                    title={paperTitle}
                    logo={logo}
                    url={url}
                    key={index}
                />
            ))}

            {sustento_declaracion_jurada.map((url, index) => (
                <PaperImageUrl
                    title={paperTitle}
                    logo={logo}
                    url={url}
                    key={index}
                />
            ))}

            {comprobantes_pago.map((url, index) => (
                <PaperImageUrl
                    title={paperTitle}
                    logo={logo}
                    url={url}
                    key={index}
                />
            ))}
        </div>
    );
}
