"use client";

export default function TestimonialSection() {
  return (
    <>
      {/* Google Material Symbols */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0&icon_names=format_quote"

      />
      
      <section className="py-24 bg-white">
        <div className="max-w-[1024px] mx-auto px-6 md:px-10 text-center">
          <span className="material-symbols-outlined text-[var(--yellow)] opacity-70 block mb-8" style={{ fontSize: "120px" }}>
            format_quote
          </span>
          <h3 className="text-3xl md:text-4xl lg:text-4xl font-serif text-[var(--black)] mb-10 max-w-5xl mx-auto merriweather-light leading-tight">
            "Desde o primeiro contato, senti que estava lidando com uma empresa séria e comprometida. A equipe da Gaditas nos acompanhou em cada etapa da obra, sempre com transparência, organização e atenção aos detalhes. O resultado ficou além do que imaginávamos! Recomendo muito!"
          </h3>
          <div className="flex flex-col items-center gap-1">
            <cite className="not-italic font-bold text-[#121617] text-lg">Maria do Carmo</cite>
            <span className="text-sm text-gray-500 font-medium tracking-widest uppercase">Cliente residencial</span>
          </div>
        </div>
      </section>
    </>
  );
}