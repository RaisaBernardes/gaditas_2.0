"use client";

import Image from "next/image";
import ScrollFadeSection from "@/components/animations/ScrollFadeSectionFramer";

export default function ValuesSplitLeftText() {
  return (
    <section
      id="sobre"
      className="bg-white px-4 md:px-10 py-24 md:py-36"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end lg:gap-12">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 space-y-3 md:space-y-6">
          <ScrollFadeSection
            delay = {0.2}
            duration = {0.2}
            offsetY={10}>
            
            <span className="text-accent text-[12px] font-bold uppercase tracking-widest mb-2 block text-[var(--green)] manrope-bold">QUEM SOMOS</span>
            <h2 className="text-3xl md:text-4xl text-[var(--black)] manrope-bold">
              Mais do que uma construtora. Um parceiro de confiança.
            </h2>
          </ScrollFadeSection>
          <ScrollFadeSection 
            delay = {0.2}
            duration = {0.4}
            offsetY={10}>
            <p className="text-gray-400 text-base md:text-lg manrope-light">
            Somos uma construtora sediada em Campo Grande–MS, com atuação pautada por responsabilidade técnica, transparência e proximidade em cada projeto.
            Desenvolvemos obras residenciais, comerciais, reformas, ampliações, áreas de lazer e projetos personalizados sempre com planejamento cuidadoso e execução criteriosa.
            </p>
          </ScrollFadeSection>
        </div>

        {/* RIGHT IMAGE */} 
        <ScrollFadeSection>          
        <div className="relative self-end -mb-4 md:-mb-20">
            <Image
              src="/images/estrutura.png"
              alt="Estrutura"
              width={1400}
              height={1000}
              className="object-contain w-[140%] max-w-none h-auto"
              priority
            />
          </div>
          </ScrollFadeSection>
      </div>
    </section>
  );
}
