import Paper from "@/Components/paper/Paper";
import React from "react";
import Clausula from "./Partials/Clausula";
import SubClausula from "./Partials/SubClausula";

type Props = {
    logo?: boolean;
    nombres: string;
    apellidos: string;
    capital: string;
    tipo_cuenta_cliente: string;
    numero_cuenta_cliente: string;
    banco_cliente: string;
};

const Miss = ({ title }: { title: string }) => (
    <span className="text-red-500 text-lg underline">{title}</span>
);

export default function CortoPlazo(props: Props) {
    const {
        nombres,
        apellidos,
        logo,
        capital,
        tipo_cuenta_cliente,
        numero_cuenta_cliente,
        banco_cliente,
    } = props;
    return (
        <div>
            <Paper title="CONTRATO N° D19-08-1025 / 2023- GJG" logo={logo}>
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
                    <b>“EL INVERSOR”</b>; y de la otra parte, la señora{" "}
                    <b>
                        {nombres} {apellidos}
                    </b>
                    , identificada con DNI N° 41983598, con domicilio en Calle
                    sigma F32 dpto. 1B Urb. Juan XXIII , Distrito de SAN BORJA,
                    Provincia de LIMA y Departamento de LIMA, a quien se le
                    denominará <b>“LA INVERSIONISTA”</b>, bajo los siguiente
                    términos y condiciones:
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
                    <SubClausula sectionNumber="1.2" title="EL INVERSIONISTA">
                        es una persona natural, docente universitario, por el
                        cual percibe una contraprestación, que acumulada en el
                        tiempo constituye el monto de lo que pretende invertir
                        en el presente contrato, declarando bajo juramento la
                        procedencia lícita de dicho fondo, tal como consta en la
                        declaración jurada que forma parte integrante del
                        presente contrato.
                    </SubClausula>
                </Clausula>
                <Clausula clausula="Segunda" subtitle="Objeto">
                    <SubClausula sectionNumber="2.1">
                        El presente contrato tiene por objeto la voluntad de{" "}
                        <b>EL INVERSIONISTA</b> en realizar el financiamiento
                        con un aporte de capital dentro de los proyectos que{" "}
                        <b>EL INVERSOR</b> tiene o está proyectando realizar,
                        generándole a <b>EL INVERSIONISTA</b> una rentabilidad
                        que las partes pactan en el presente contrato.
                    </SubClausula>
                    <SubClausula sectionNumber="1.2" title="EL INVERSIONISTA">
                        es una persona natural, docente universitario, por el
                        cual percibe una contraprestación, que acumulada en el
                        tiempo constituye el monto de lo que pretende invertir
                        en el presente contrato, declarando bajo juramento la
                        procedencia lícita de dicho fondo, tal como consta en la
                        declaración jurada que forma parte integrante del
                        presente contrato.
                    </SubClausula>
                </Clausula>
                <Clausula
                    clausula="TERCERA"
                    subtitle="MONTO DE INVERSIÓN Y RENTABILIDAD"
                >
                    <SubClausula sectionNumber="3.1">
                        Mediante la presente, EL INVERSIONISTA aporta al
                        financiamiento de los proyectos de inversión que
                        ejecutará EL INVERSOR con un monto ascendente a la suma
                        de {capital}( Cinco Mil Con 00/100 soles), la cual fue
                        depositada en la cuenta {tipo_cuenta_cliente} N.º{" "}
                        {numero_cuenta_cliente} del {banco_cliente}.
                    </SubClausula>
                    <SubClausula sectionNumber="3.2">
                        Como contraprestación del financiamiento que
                        voluntariamente realiza <b>EL INVERSIONISTA,</b> <b>EL INVERSOR</b> {" "}
                        entregará el monto de S/ 5,750.00 (Cinco Mil Setecientos
                        Cincuenta Con 00/100 soles) cuyo monto total será
                        depositado en la cuenta ahorro N° 163-3132563126 / CCI:
                        003-163-013132563126-38 a nombre el señor RICARDO JORGE
                        SEVILLANO SINCA del Banco Interbank .
                    </SubClausula>
                </Clausula>
            </Paper>
        </div>
    );
}
