import { router } from "@inertiajs/react";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";

export default function FooterOptions({
    setOpenModalPreview,
    openModalPreview,
    withLogo,
    setWithLogo,
    handlePreview,
    handleSubmmit,
}) {
    return (
        <div className="fixed bottom-0 z-[1000]  w-full bg-base-200 shadow-2xl border p-4 flex justify-end gap-4 items-center">
            <section className={openModalPreview ? "visible" : "invisible"}>
                <div className="flex items-center gap-4">
                    <h4>Mostrar Logo</h4>
                    <InputSwitch
                        checked={withLogo}
                        onChange={(e) => setWithLogo(e.value as boolean)}
                    />
                </div>
            </section>
            <section className="space-x-4">
                {openModalPreview ? (
                    <>
                        <Button
                            onClick={() => setOpenModalPreview(false)}
                            severity="secondary"
                            label="Cancelar"
                        />
                        <Button onClick={handleSubmmit} label="Guardar" />
                    </>
                ) : (
                    <>
                        <Button
                            onClick={() =>
                                router.get(route("dashboard.contratos.index"))
                            }
                            severity="secondary"
                            label="Cancelar"
                        />
                        <Button onClick={handlePreview} label="Previsualizar" />
                    </>
                )}
            </section>
        </div>
    );
}
