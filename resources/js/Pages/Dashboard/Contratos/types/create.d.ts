type Cronograma = {
    fecha: string;
    monto: number;
};

type Props = {
    departamentos: [
        {
            id: number;
            nombre: string;
        }
    ];

    provincias: [
        {
            id: number;
            nombre: string;
            departamento_id: number;
        }
    ];

    distritos: [
        {
            id: number;
            nombre: string;
            provincia_id: number;
        }
    ];

    tipo_contratos: [
        {
            id: number;
            nombre: string;
        }
    ];

    rentabilidades: [
        {
            id: number;

            porcentaje: number;

            tipo_contrato_id: number;
        }
    ];

    vigencia_contratos: [
        {
            id: number;
            cantidad: number;
            unidad: string;
            rentabilidad_id: number;
        }
    ];
};

type Files = File[] | null;
