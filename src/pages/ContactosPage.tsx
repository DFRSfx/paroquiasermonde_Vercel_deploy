import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiClock, FiUser, FiSend } from 'react-icons/fi';

const ContactosPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">

      {/* BANNER SOLENE */}
      <section
        className="relative pt-40 pb-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://jf-sermonde.pt/images/igreja-sermonde.webp")' }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/85" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <p className="text-xs sm:text-sm text-gray-300 mb-4 font-medium tracking-wide flex flex-wrap items-center gap-2">
            <a href="/" className="hover:text-white transition-colors">Início</a>
            <span className="opacity-50">/</span>
            <span className="text-white">Contactos</span>
          </p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight drop-shadow-md"
          >
            Fale connosco
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl font-light mt-4"
          >
            Estamos disponíveis para o acolher. Encontre aqui os nossos horários, localização e formulário de contacto.
          </motion.p>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL (Overlap Layout) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20 -mt-24">
        {/* Adicionado transform-gpu e overflow-visible para garantir que os shadows e cards não são cortados no mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="transform-gpu"
        >
          {/* GRID DE CONTACTOS RÁPIDOS */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            
            {/* Card: Secretaria */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#41738C] flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#41738C]/10 rounded-lg shrink-0">
                  <FiPhone className="text-2xl text-[#41738C]"/>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900">Secretaria</h3>
              </div>
              <div className="space-y-3 text-slate-600 flex-grow">
                <p className="flex items-center gap-2"><strong className="text-slate-900 font-medium">Tel:</strong> 220 000 000</p>
                <p className="flex items-center gap-2"><strong className="text-slate-900 font-medium">Email:</strong> geral@paroquiasermonde.pt</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-start gap-2 text-sm text-slate-500">
                <FiClock className="mt-0.5 text-[#41738C]" />
                <span><strong className="text-slate-700">Terças e Quintas:</strong><br/>10:00h - 12:00h</span>
              </div>
            </div>

            {/* Card: Pároco */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#951B80] flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#951B80]/10 rounded-lg shrink-0">
                  <FiUser className="text-2xl text-[#951B80]"/>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900">O Pároco</h3>
              </div>
              <div className="space-y-3 text-slate-600 flex-grow">
                <p className="flex items-center gap-2"><strong className="text-slate-900 font-medium">Email:</strong> paroco@paroquiasermonde.pt</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-start gap-2 text-sm text-slate-500">
                <FiClock className="mt-0.5 text-[#951B80]" />
                <span><strong className="text-slate-700">Atendimento:</strong><br/>Sujeito a agendamento prévio.</span>
              </div>
            </div>

            {/* Card: Localização */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-slate-800 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-100 rounded-lg shrink-0">
                  <FiMapPin className="text-2xl text-slate-700"/>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900">Localização</h3>
              </div>
              <div className="space-y-3 text-slate-600 flex-grow">
                <p>Igreja Matriz de Sermonde<br/>Rua da Igreja, s/n.<br/>4415-000 Sermonde</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-sm text-slate-500 font-mono bg-slate-50 px-3 py-2 rounded-lg text-center">
                41.05, -8.60
              </div>
            </div>
            
          </div>

          {/* SECÇÃO FORMULÁRIO E MAPA */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              
              {/* Formulário de Contacto */}
              <div className="p-8 sm:p-12 lg:p-16">
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Enviar Mensagem</h2>
                <p className="text-slate-500 mb-8">Preencha o formulário abaixo e entraremos em contacto o mais brevemente possível.</p>
                
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="nome" className="text-sm font-semibold text-slate-700">Nome</label>
                      <input type="text" id="nome" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-[#41738C] focus:ring-1 focus:ring-[#41738C] transition-colors" placeholder="O seu nome" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                      <input type="email" id="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-[#41738C] focus:ring-1 focus:ring-[#41738C] transition-colors" placeholder="O seu email" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="assunto" className="text-sm font-semibold text-slate-700">Assunto</label>
                    <input type="text" id="assunto" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-[#41738C] focus:ring-1 focus:ring-[#41738C] transition-colors" placeholder="Assunto da mensagem" />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="mensagem" className="text-sm font-semibold text-slate-700">Mensagem</label>
                    <textarea id="mensagem" rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-[#41738C] focus:ring-1 focus:ring-[#41738C] transition-colors resize-none" placeholder="Como podemos ajudar?"></textarea>
                  </div>

                  <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#951B80] hover:bg-[#7a1568] text-white px-8 py-4 rounded-xl font-medium transition-colors duration-300 shadow-md hover:shadow-lg mt-2">
                    <FiSend /> Enviar Mensagem
                  </button>
                </form>
              </div>

              {/* Mapa (Iframe Embutido) */}
              <div className="bg-slate-100 min-h-[400px] lg:min-h-full relative">
                {/* Substitui o src abaixo pelo iframe real do Google Maps da Igreja de Sermonde. 
                  Deixei um placeholder de mapa funcional para veres o efeito.
                */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8225576766427!2d-8.6022222!3d41.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAzJzAwLjAiTiA4wrAzNicwOC4wIlc!5e0!3m2!1spt-PT!2spt!4v1650000000000!5m2!1spt-PT!2spt" 
                  className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa da Paróquia de Sermonde"
                ></iframe>
              </div>

            </div>
          </div>

        </motion.div>
      </section>

    </div>
  );
};

export default ContactosPage;