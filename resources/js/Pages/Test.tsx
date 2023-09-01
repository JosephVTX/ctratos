import Step from "@/Components/step/Step";

export default function Test() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <Step>
                <div>
                    <img src="/img/voucher.jpg" />
                </div>
                <div>
                    <img src="/img/voucher_2.jpg" />
                </div>
                <div>
                    <img src="/img/voucher_3.jpg" />
                </div>
                <div>
                    <img src="/img/voucher.jpg" />
                </div>
                <div>
                    <img src="/img/voucher.jpg" />
                </div>
            </Step>
        </div>
    );
}
