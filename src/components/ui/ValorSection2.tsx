"use client";

import VerifiedIcon from "@mui/icons-material/Verified";
import HandymanIcon from "@mui/icons-material/Handyman";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TuneIcon from "@mui/icons-material/Tune";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ConstructionIcon from "@mui/icons-material/Construction";
import DeckIcon from "@mui/icons-material/Deck";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Link from 'next/link'

const features = [
  {
    title: "Entrega sem surpresas",
    description: "Você recebe um orçamento realista, cronograma bem definido e uma entrega que respeita exatamente o que foi combinado.",
    icon: <VerifiedIcon className="text-[#00D3FE]" />,
  },
  {
    title: "Qualidade em cada detalhe",
    description: "Cuidamos de cada etapa como se fosse única, com precisão técnica e acabamento que fala por si.",
    icon: <HandymanIcon className="text-[#00D3FE]" />,
  },
  {
    title: "Transparência Total",
    description: "Você participa, entende e aprova cada passo com clareza.",
    icon: <ChatBubbleOutlineIcon className="text-[#00D3FE]" />,
  },
  {
    title: "Flexibilidade",
    description:
      "Projetos sob medida para a sua realidade. Residenciais, reformas, lazer ou infraestrutura: nos adaptamos ao que você precisa, com inteligência e compromisso.",
    icon: <TuneIcon className="text-[#00D3FE]" />,
  },
];

const services = [
  {
    title: "Entrega sem surpresas",
    description: "Você recebe um orçamento realista, cronograma bem definido e uma entrega que respeita exatamente o que foi combinado.",
    icon: <HomeWorkIcon />,
  },
  {
    title: "Qualidade em cada detalhe",
    description: "Cuidamos de cada etapa como se fosse única, com precisão técnica e acabamento que fala por si.",
    icon: <ConstructionIcon />,
  },
  {
    title: "Transparência Total",
    description: "Você participa, entende e aprova cada passo com clareza.",
    icon: <DeckIcon />,
  },
  {
    title: "Flexibilidade",
    description:
      "Projetos sob medida para a sua realidade. Residenciais, reformas, lazer ou infraestrutura: nos adaptamos ao que você precisa, com inteligência e compromisso.",
    icon: <AddRoadIcon />,
  },
  {
    title: "Gestão responsável",
    description: "Planejamos, acompanhamos e gerenciamos cada etapa com responsabilidade técnica, controle de prazos e tomada de decisão consciente",
    icon: <StorefrontIcon />,
  },
];

export default function ValuesSplitCentered() {
  return (
    <section className="py-24 md:py-48 bg-gray-50" id="services">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--black)]  mb-2 manrope-bold">Como conduzimos cada obra</h2>
            <p className="text-gray-500 max-w-md manrope-light">Execução construtiva completa para clientes que valorizam rigor e qualidade.</p>
             <div className="mt-6">
              <Link
                  href="#contato"
                  scroll={true}
                  className="text-sm font-light hover:bg-[var(--darkergreen)] bg-[var(--darkgreen)] px-4 py-2 rounded-sm text-[var(--gray)] border-1 transition manrope-regular"
                >
                  Solicitar avaliação
                </Link>
              </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-lg border border-transparent transition-all duration-300 shadow-sm shadow-[#ece9e9]"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--gray)] flex items-center justify-center text-[#2d4c53] mb-6 group-hover:bg-[#2d4c53] group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--black)] mb-3 manrope-regular">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed manrope-light">
                {service.description}
              </p>
            </div>
          ))}

          <div className="group bg-[var(--green)] p-8 rounded-lg flex flex-col justify-center items-start shadow-sm hover:shadow-md">
            <h3 className="text-xl font-bold text-white mb-3 manrope-regular">Precisa de uma solução específica?</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 manrope-light">
              Atendemos demandas construtivas fora do padrão. Entre em contato para avaliar sua necessidade e definir a melhor solução técnica.
            </p>
            <button className="bg-white text-[var(--green)] px-4 py-2 rounded text-sm font-bold hover:bg-gray-100 transition-colors manrope-light">
              Falar com equipe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}