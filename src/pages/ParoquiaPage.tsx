import React from 'react';
import { motion } from 'framer-motion';
import { FiMap, FiUser, FiClock, FiMapPin } from 'react-icons/fi';

const ParoquiaPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">

      {/* BANNER SOLENE */}
      <section
        className="relative pt-40 pb-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://jf-sermonde.pt/images/igreja-sermonde.webp")' }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/85" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-sm text-gray-300 mb-4 font-medium tracking-wide">
            <a href="/" className="hover:text-white transition-colors">Início</a>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">A Paróquia</span>
          </p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight"
          >
            A nossa Paróquia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl font-light mt-4"
          >
            Um percurso de fé, história e comunidade em Sermonde.
          </motion.p>
        </div>
      </section>

      {/* HISTÓRIA (Overlap Layout) */}
      {/* scroll-mt-32 ensures the fixed header doesn't cover this section when navigating to /paroquia#historia */}
      <section id="historia" className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 -mt-24 scroll-mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl text-slate-900 font-serif font-bold mb-6">A nossa história</h2>
              {/* Brand Accent Bar */}
              <div className="h-1 w-16 bg-[#951B80] mb-6"></div>
              
              <div className="prose prose-lg text-slate-600">
                <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-[#41738C] first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                  Fundada em [Ano], a Paróquia de Sermonde tem sido o centro espiritual da nossa comunidade por gerações. A nossa Igreja Matriz, de traça [Estilo Arquitetónico], foi construída com o esforço e devoção dos paroquianos ao longo dos séculos.
                </p>
                <p className="clear-left">
                  Convidamo-lo a redigir alguns parágrafos sobre a sua fundação, a devoção ao Santo Padroeiro e os marcos mais importantes da comunidade ao longo dos tempos. Uma história rica que se confunde com a própria história da nossa freguesia.
                </p>
              </div>
            </div>
            
            {/* Imagem tratada com Offset Drop-Shadow */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#41738C] rounded-2xl transform translate-x-4 translate-y-4 -z-10 opacity-20"></div>
              <img 
                src="https://jf-sermonde.pt/images/igreja-sermonde.webp" 
                alt="Igreja de Sermonde" 
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-slate-100"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ESPAÇOS E PÁROCO (Premium Cards Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* CARD: Espaços Paroquiais */}
          <motion.div 
            id="espacos"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-10 rounded-xl shadow-lg border-t-4 border-[#41738C] flex flex-col h-full scroll-mt-32"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#41738C]/10 rounded-lg">
                <FiMap className="text-3xl text-[#41738C]"/>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">Espaços Paroquiais</h3>
            </div>
            <div className="text-slate-600 flex-grow">
              <ul className="space-y-6 list-none pl-0">
                <li className="flex items-start gap-4">
                  <div className="bg-slate-100 p-2 rounded-full mt-1">
                    <FiMapPin className="text-[#951B80] shrink-0" />
                  </div>
                  <div>
                    <strong className="text-slate-900 text-lg">Igreja Matriz de Sermonde</strong>
                    <p className="text-sm mt-1 text-slate-500">Praça da Igreja, 4415-000 Sermonde</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-100 p-2 rounded-full mt-1">
                    <FiMapPin className="text-[#951B80] shrink-0" />
                  </div>
                  <div>
                    <strong className="text-slate-900 text-lg">Centro Paroquial</strong>
                    <p className="text-sm mt-1 text-slate-500">Salas de catequese, encontros e cartório.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* CARD: Atendimento do Pároco */}
          <motion.div 
            id="paroco"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-10 rounded-xl shadow-lg border-t-4 border-[#951B80] flex flex-col h-full scroll-mt-32"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#951B80]/10 rounded-lg">
                <FiUser className="text-3xl text-[#951B80]"/>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">O Pároco</h3>
            </div>
            <div className="text-slate-600 flex-grow">
              <p className="mb-6 leading-relaxed">
                O Pe. Vasco Soeiro encontra-se disponível para atendimento presencial no cartório paroquial para agendamentos, intenções de missa e confissões.
              </p>
              
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-100 mb-8 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Horários de Atendimento</h4>
                <li className="flex items-center gap-3">
                  <FiClock className="text-[#41738C] shrink-0" />
                  <span><strong>Quartas-feiras:</strong> 17:30 - 19:00</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiClock className="text-[#41738C] shrink-0" />
                  <span><strong>Sábados:</strong> 10:00 - 12:00</span>
                </li>
              </div>

              <div className="mt-auto">
                <a href="/paroquia/paroco" className="inline-flex items-center gap-2 text-[#951B80] font-bold hover:text-[#7a1568] transition-colors group">
                  Ler a biografia completa 
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default ParoquiaPage;