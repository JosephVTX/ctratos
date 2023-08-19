import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-5">
            {typeof children}
        </div>
    );
};

export default function Test() {
    return (
        <div>
            <Card>
                
            </Card>
        </div>
    );
}
