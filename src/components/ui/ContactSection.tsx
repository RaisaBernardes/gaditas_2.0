import ContactForm from "./ContactForm";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ScrollFadeSection from "@/components/animations/ScrollFadeSectionFramer";

export default function ContactSection() {
  return (
    <section id="contato" className="bg-white px-4 md:px-10 py-24 md:py-40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-3 md:gap-12">
        
        {/* LEFT SIDE */}
       
        <div className="space-y-3 md:space-y-6">
           <ScrollFadeSection  
              delay = {0.2}
              duration = {0.6}
              offsetY={10}>
          <h2 className="text-4xl md:text-5xl text-[var(--black)] manrope-bold">
          Seu projeto começa com uma decisão bem conduzida.
          </h2>
          </ScrollFadeSection>
          <p className="text-lg text-gray-500 max-w-md manrope-light">
            Preencha o formulário e receba um atendimento claro, ágil e alinhado com o que você realmente precisa.
          </p>

          <div className="pt-6 text-base md:text-sm text-[#071A2D] space-y-4">
            <p className="roboto-condensed-700 tracking-tight manrope-bold">Detalhes de Contato</p>
            <address className="not-italic space-y-3">
              
              {/* Localização */}
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[var(--black)]  manrope-regular" />
                <span>Campo Grande - MS</span>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-[var(--black)] " />
                <a
                  href="https://wa.me/5571981065728" // numero whatsapp
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[var(--black)] "
                >
                  (71) 9.8106-5728
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[var(--black)]" />
                <span>orçamento@gaditascontato.com</span>
              </div>
            </address>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div>
          <ScrollFadeSection  
              delay = {0.2}
              duration = {0.4}
              offsetY={10}>
            <ContactForm />
          </ScrollFadeSection>
        </div>
      </div>
    </section>
  );
}
