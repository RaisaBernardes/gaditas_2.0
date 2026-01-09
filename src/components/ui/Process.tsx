import React from 'react'

const Process = () => {
  return (
    <section className="py-24 md:py-32 bg-white " id="process">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
            <div className="text-center mb-16">
            <span className="text-accent text-[12px] font-bold uppercase tracking-widest mb-2 block text-[var(--yellow)] manrope-bold">Nosso Processo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--black)] manrope-bold md:pb-12">Nosso método e execução</h2>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-gray-200 -z-10"></div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="size-12 rounded-full bg-white border-2 border-accent text-accent font-bold text-lg flex items-center justify-center mb-6 text-[var(--yellow)] border-[var(--yellow)] ">01</div>
                        <h3 className="text-lg font-bold text-[var(--black)] mb-2 manrope-bold">Alinhamento inicial</h3>
                        <p className="text-sm text-gray-500 leading-relaxed manrope-light">
                        Entendemos sua necessidade, avaliamos a viabilidade do projeto e definimos escopo, orçamento e prazos com clareza desde o início. Esse alinhamento evita surpresas e garante decisões seguras.
                        </p>
                    </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="size-12 rounded-full bg-white border-2 font-bold text-lg flex items-center justify-center mb-6 text-[var(--yellow)] border-[var(--yellow)]">02</div>
                    <h3 className="text-lg font-bold text-[var(--black)] mb-2 manrope-bold">Planejamento técnico</h3>
                    <p className="text-sm text-gray-500 leading-relaxed manrope-light">
                        Estruturamos o projeto com critério técnico: engenharia, materiais, cronograma e etapas bem definidas. Cada detalhe é planejado antes do início da execução.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="size-12 rounded-full bg-white border-2 font-bold text-lg flex items-center justify-center mb-6 text-[var(--yellow)] border-[var(--yellow)]">03</div>
                        <h3 className="text-lg font-bold text-[var(--black)] mb-2 manrope-bold">Execução controlada</h3>
                        <p className="text-sm text-gray-500 leading-relaxed manrope-light">
                            A obra é conduzida com disciplina, organização e acompanhamento constante. Você recebe informações claras sobre o andamento, com foco em qualidade, prazos e boa execução.
                        </p>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left ">
                    <div className="size-12 rounded-full bg-white border-2 font-bold text-lg flex items-center justify-center mb-6 text-[var(--yellow)] border-[var(--yellow)]">04</div>
                        <h3 className="text-lg font-bold text-[var(--black)] mb-2 manrope-bold">Entrega responsável</h3>
                        <p className="text-sm text-gray-500 leading-relaxed manrope-light">
                            Realizamos uma verificação final criteriosa, cuidamos dos acabamentos e entregamos a obra somente quando tudo está conforme o combinado — pronta para uso, sem pendências.
                        </p>
                    </div>
                </div>
        </div>
</section>
  )
}

export default Process