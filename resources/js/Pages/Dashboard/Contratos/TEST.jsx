<div
                    className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
                    id="client_data"
                >
                    <h4 className="font-semibold">Opciones de Contrato</h4>
                    <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel
                                value="Tipo de Contrato"
                                id="contract_type"
                            />
                            <Dropdown
                                className="w-full"
                                value={data.contract_type}
                                options={contract_type}
                                optionValue="id"
                                optionLabel="name"
                                onChange={(e) =>
                                    setData("contract_type", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="% de Renta" id="profit" />
                            <Dropdown
                                className="w-full"
                                disabled={!data.contract_type}
                                value={data.profit}
                                options={profit.filter(
                                    (item) =>
                                        item.contract_type_id ===
                                        data.contract_type
                                )}
                                optionValue="id"
                                optionLabel="percent"
                                filter
                                valueTemplate={(option) => (
                                    <span className="text-sm">
                                        {option?.percent} %
                                    </span>
                                )}
                                itemTemplate={(option) => (
                                    <span className="text-sm">
                                        {option?.percent} %
                                    </span>
                                )}
                                onChange={(e) =>
                                    setData("profit", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Vigencia de Contrato"
                                id="contract_validity"
                            />
                            <Dropdown
                                className="w-full"
                                value={data.contract_validity}
                                options={contract_validities.filter(
                                    (item) => item.profit_id === data.profit
                                )}
                                optionValue="id"
                                optionLabel="quantity"
                                itemTemplate={(option) => (
                                    <span className="text-sm">
                                        {option.quantity}{" "}
                                        {option.unit === "day"
                                            ? "Días"
                                            : "Meses"}
                                    </span>
                                )}
                                onChange={(e) =>
                                    setData("contract_validity", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Capital" id="capital" />

                            <div className="p-inputgroup">
                                <Dropdown
                                    className="!w-5"
                                    panelClassName="!w-5"
                                    value={data.currency}
                                    options={[
                                        {
                                            label: "PEN",
                                            value: "S/",
                                        },
                                        {
                                            label: "USD",
                                            value: "$",
                                        },
                                    ]}
                                    /*  itemTemplate={(option) => (
                                    <span className="text-sm">
                                        {option.quantity}{" "}
                                        {option.unit === "day"
                                            ? "Días"
                                            : "Meses"}
                                    </span>
                                )} */
                                    onChange={(e) =>
                                        setData("currency", e.target.value)
                                    }
                                    placeholder="Moneda"
                                />
                                <InputNumber
                                    placeholder="Capital"
                                    onChange={(e) =>
                                        setData(
                                            "capital",
                                            `${data.currency} ${e.value}`
                                        )
                                    }
                                    mode="currency"
                                    locale={
                                        data.currency === "S/"
                                            ? "es-PE"
                                            : "en-US"
                                    }
                                    currency={
                                        data.currency === "S/" ? "PEN" : "USD"
                                    }
                                />
                            </div>
                        </div>
                    </section>
                    <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value="Fecha Inicio" id="start_date" />
                            <InputText
                                value={data.start_date}
                                name="start_date"
                                type="date"
                                onChange={(e) =>
                                    setData("start_date", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <InputLabel value="Fecha Fin" id="end_type" />
                            <InputText
                                value={data.end_date}
                                name="end_date"
                                type="date"
                                onChange={(e) =>
                                    setData("end_date", e.target.value)
                                }
                            />
                        </div>
                    </section>
                </div>
                {data.contract_type !== 1 && (
                    <div
                        className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
                        id="client_data"
                    >
                        <h4 className="font-semibold">Cronograma</h4>
                        <section className="lg:grid grid-cols-12 [&_input]:w-full gap-4 space-y-4">
                            <div className="col-span-4 md:col-span-4">
                                <div className="space-y-2">
                                    <div>
                                        <InputLabel
                                            value="Dia de pago"
                                            id="end_type"
                                        />
                                        <InputText
                                            value={data.end_date}
                                            name="end_date"
                                            type="date"
                                            onChange={(e) =>
                                                setData(
                                                    "end_date",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            value="Monto Mensual a Recibir"
                                            id="end_type"
                                        />
                                        <InputText
                                            value={data.end_date}
                                            name="end_date"
                                            type="date"
                                            onChange={(e) =>
                                                setData(
                                                    "end_date",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Button
                                            label="Agregar"
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-8">
                                <DataTable
                                    value={[]}
                                    className="p-datatable-striped p-datatable-gridlines"
                                >
                                    <Column field="fecha" header="Fecha" />
                                    <Column field="monto" header="Monto" />
                                    <Column header="Eliminar" />
                                </DataTable>
                            </div>
                        </section>
                    </div>
                )}
                <div
                    className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
                    id="client_data"
                >
                    <h4 className="font-semibold">Datos cuenta cliente</h4>
                    <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value="Banco del Cliente" id="bank" />
                            <Dropdown
                                className="w-full"
                                value={data.client_bank}
                                filter
                                options={bank}
                                optionValue="name"
                                optionLabel="name"
                                onChange={(e) =>
                                    setData("client_bank", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel value="Tipo de Cuenta" id="apellidos" />
                            <Dropdown
                                className="w-full"
                                value={data.type_account_bank}
                                filter
                                options={[
                                    {
                                        label: "Ahorro",
                                        value: "ahorro",
                                    },
                                    {
                                        label: "Corriente",
                                        value: "corriente",
                                    },
                                ]}
                                onChange={(e) =>
                                    setData("type_account_bank", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Nº de Cuenta"
                                id="tipo_doc"
                            />
                            <InputText
                                value={data.numero_doc}
                                name="numero_doc"
                                onChange={(e) =>
                                    setData("numero_doc", e.target.value)
                                }
                                keyfilter="num"
                            />
                        </div>
                        <div>
                            <InputLabel value="Nro CCI" id="numero_doc" />
                            <InputText
                                value={data.numero_doc}
                                name="numero_doc"
                                onChange={(e) =>
                                    setData("numero_doc", e.target.value)
                                }
                                keyfilter="num"
                            />
                        </div>
                    </section>
                </div>
                <div
                    className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
                    id="client_data"
                >
                    <h4 className="font-semibold">Datos cuenta - GJG</h4>
                    <section className="lg:grid grid-cols-4 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel
                                value={`Banco GJG ${
                                    data.currency === "S/" ? "Soles" : "Dólares"
                                }`}
                                id="bank"
                            />
                            <Dropdown
                                className="w-full"
                                value={data.gjg_bank}
                                options={
                                    data.currency === "S/"
                                        ? [
                                              {
                                                  label: `Banco Interbank Soles`,
                                                  value: "2003004202994",
                                              },
                                              {
                                                  label: `Banco BBVA Soles`,
                                                  value: "001103680100051143",
                                              },
                                          ]
                                        : [
                                              {
                                                  label: `Banco Interbank Dólares`,
                                                  value: "2003004203000",
                                              },
                                              {
                                                  label: `Banco BBVA Dólares`,
                                                  value: "001103680100051151",
                                              },
                                          ]
                                }
                                optionValue="value"
                                optionLabel="label"
                                onChange={(e) =>
                                    setData("gjg_bank", e.target.value)
                                }
                                placeholder="Seleccione"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value={`Cuenta en ${
                                    data.currency === "S/" ? "Soles" : "Dólares"
                                }`}
                                id="apellidos"
                            />
                            <InputText
                                disabled
                                value={data.gjg_bank}
                                name="apellidos"
                            />
                        </div>
                    </section>
                </div>
                <div
                    className="space-y-4 bg-base-200 rounded-xl p-4 shadow"
                    id="client_data"
                >
                    <h4 className="font-semibold">Archivos Adjuntos</h4>
                    <section className="lg:grid grid-cols-2 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel value="DNI" id="first_name" />
                            <InputText
                                value={data.nombres}
                                name="nombres"
                                onChange={(e) =>setData("nombres", e.target.value)
                                }
                                type="file"
                            />
                        </div>
                        <div>
                            <InputLabel value="DNI Reverso" id="apellidos" />
                            <InputText
                                value={data.apellidos}
                                name="apellidos"
                                onChange={(e) =>
                                    setData("apellidos", e.target.value)
                                }
                                type="file"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Declaración Jurada"
                                id="tipo_doc"
                            />
                            <InputText
                                value={data.apellidos}
                                name="apellidos"
                                onChange={(e) =>
                                    setData("apellidos", e.target.value)
                                }
                                type="file"
                            />
                        </div>
                        <div>
                            <InputLabel
                                value="Sustento Decl. Jurada"
                                id="numero_doc"
                            />
                            <InputText
                                value={data.numero_doc}
                                name="numero_doc"
                                onChange={(e) =>
                                    setData("numero_doc", e.target.value)
                                }
                                type="file"
                            />
                        </div>
                    </section>
                    <section className="grid grid-cols-2 [&_input]:w-full gap-4">
                        <div>
                            <InputLabel
                                value="Comprobantes de Pago"
                                id="departamento"
                            />
                            <InputText
                                value={data.numero_doc}
                                name="numero_doc"
                                onChange={(e) =>
                                    setData("numero_doc", e.target.value)
                                }
                                type="file"
                            />
                        </div>
                    </section>
                </div>