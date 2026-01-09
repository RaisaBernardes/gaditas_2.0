import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
    className="bg-[var(--darkgreen)]  relative  text-[#E7E9EC] dark:text-neutral-300 text-sm py-12 px-4"
   
  >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 mb-6">

        {/* Follow us + Socials */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-[#E7E9EC]">Gaditas</p>
          <div className="flex gap-3 text-xl text-[#E7E9EC]">
            <a href="https://instagram.com/gaditas" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="hover:text-white transition" />
            </a>
            <a href="https://wa.me/5571981065728" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-white transition" />
            </a>
           
            
             
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-center text-xs text-[#E7E9EC]]">
          © {new Date().getFullYear()} Gaditas Engenharia. Todos os direitos reservados.
        </div>

        {/* Links */}
        <div className="flex flex-col items-end gap-2 text-right text-xs">
          <a href="/politicadeprivacidade" className="underline hover:text-white transition text-neutral-300">
            Política de Privacidade
          </a>

          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-white" />
            <span className="text-[#E7E9EC]">Campo Grande - MS</span>
        </div>
        </div>
      </div>

      <hr className=" border-[#8E9BA7] my-4" />

      {/* Acknowledgment */}
      <div className="max-w-5xl mx-auto text-center text-[#E7E9EC] text-sm">
        A Gaditas Engenharia reconhece e valoriza as comunidades locais e o solo onde construímos nossos projetos. 
        Nosso compromisso é desenvolver com respeito, responsabilidade e impacto positivo duradouro para todos que 
        compartilham este espaço conosco.
      </div>

      {/* Site credit */}
      <div className="text-right text-xs mt-4 text-[#E7E9EC]">
        <a href="https://wa.me/5581999458630" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Desenvolvido por Millon
        </a>
      </div>
    </footer>
  );
}
