import React from "react"

import { Forms, TitleText, TypingText } from "@/components"

const Contact: React.FC = () => {
    return (
        <div className="flex justify-center items-center flex-col gap-4 py-4">
            <TypingText title="| Entre em contato para explorar oportunidades profissionais" />
            <TitleText title="Construindo parcerias de sucesso para o futuro" />
            <Forms />
        </div>
    )
}

export default Contact