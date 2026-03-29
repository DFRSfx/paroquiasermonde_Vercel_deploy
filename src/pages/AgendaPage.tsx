import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiBell, FiCalendar, FiMapPin, FiInfo, FiChevronRight } from 'react-icons/fi';

// Dados fictícios para demonstrar o UI (no futuro virão de uma API/CMS)
const avisosData = [
  {
    id: 1,
    categoria: "Celebração",
    titulo: "Celebrações da Semana Santa 2026",
    data: "15 Março, 2026",
    resumo: "Convidamos toda a comunidade a participar ativamente nas celebrações do Tríduo Pascal. Consulte o programa detalhado para os horários do Lava-Pés, Via-Sacra e Vigília Pascal.",
    destaque: true
  },
  {
    id: 2,
    categoria: "Catequese",
    titulo: "Inscrições para o Novo Ano Catequético",
    data: "10 Março, 2026",
    resumo: "As inscrições para o ano 2026/2027 decorrem na secretaria paroquial às terças e quintas-feiras. É necessária a apresentação da cédula de vida cristã.",
    destaque: false
  },
  {
    id: 3,
    categoria: "Comunidade",
    titulo: "Recolha de Bens Alimentares",
    data: "05 Março, 2026",
    resumo: "A Conferência Vicentina apela à generosidade de todos para a recolha mensal de bens não perecíveis (leite, azeite, enlatados) no próximo fim de semana.",
    destaque: false
  }
];

const AgendaPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">

      {/* BANNER SOLENE */}
      <section
        className="relative pt-40 pb-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://jf-sermonde.pt/images/igreja-sermonde.webp")' }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/85" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-xs sm:text-sm text-gray-300 mb-4 font-medium tracking-wide flex flex-wrap items-center gap-2">
            <a href="/" className="hover:text-white transition-colors">Início</a>
            <span className="opacity-50">/</span>
            <span className="text-white">Agenda & Avisos</span>
          </p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight drop-shadow-md"
          >
            Agenda Paroquial
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl font-light mt-4"
          >
            Acompanhe as celebrações da semana, horários de missas e notícias da nossa comunidade cristã.
          </motion.p>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL (Grid Assimétrico 2/3 + 1/3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 -mt-24">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* COLUNA ESQUERDA: Avisos Semanais */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 order-last lg:order-first transform-gpu"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10">
              <h2 className="flex items-center gap-3 text-3xl font-serif font-bold text-slate-900 mb-8 border-b border-gray-100 pb-6">
                <FiBell className="text-[#41738C]" />
                Avisos Comunitários
              </h2>

              <div className="space-y-6">
                {avisosData.map((aviso) => (
                  <div 
                    key={aviso.id} 
                    className={`group relative bg-white border rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg ${
                      aviso.destaque 
                        ? 'border-[#951B80]/30 shadow-md overflow-hidden' 
                        : 'border-slate-100 hover:border-[#41738C]/30'
                    }`}
                  >
                    {/* Linha de Destaque Magenta */}
                    {aviso.destaque && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#951B80]"></div>
                    )}
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit ${
                        aviso.destaque ? 'bg-[#951B80]/10 text-[#951B80]' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {aviso.categoria}
                      </span>
                      <span className="text-sm text-slate-400 flex items-center gap-2">
                        <FiCalendar className="shrink-0" />
                        {aviso.data}
                      </span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-[#41738C] transition-colors">
                      {aviso.titulo}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {aviso.resumo}
                    </p>
                    
                    <a href={`/avisos/${aviso.id}`} className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${
                      aviso.destaque ? 'text-[#951B80] hover:text-[#7a1568]' : 'text-[#41738C] hover:text-slate-900'
                    }`}>
                      Ler aviso completo <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                ))}
              </div>

              {/* Botão de Ver Mais */}
              <div className="mt-10 text-center">
                <button className="px-6 py-3 border-2 border-slate-200 text-slate-600 font-medium rounded-xl hover:border-[#41738C] hover:text-[#41738C] transition-colors">
                  Carregar mais avisos
                </button>
              </div>
            </div>
          </motion.div>

          {/* COLUNA DIREITA: Horários das Missas (Sticky) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 order-first lg:order-last transform-gpu"
          >
            {/* position: sticky mantém este bloco visível a rolar no desktop */}
            <div className="bg-white rounded-2xl shadow-xl border-t-4 border-[#41738C] p-6 sm:p-8 lg:sticky lg:top-32">
              <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-slate-900 mb-6">
                <FiClock className="text-[#41738C]" />
                Horários das Missas
              </h2>

              <div className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden mb-6">
                {/* Cabeçalho da Tabela */}
                <div className="bg-slate-100 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Dia</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Hora</span>
                </div>
                
                {/* Linhas da Tabela */}
                <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center hover:bg-white transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#41738C]/10 flex items-center justify-center shrink-0">
                      <FiMapPin className="text-[#41738C] text-sm" />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900">Sábado</span>
                      <span className="text-xs text-slate-500">Missa Vespertina</span>
                    </div>
                  </div>
                  <span className="font-mono text-lg font-semibold text-[#41738C]">18:00</span>
                </div>

                <div className="px-5 py-4 flex justify-between items-center hover:bg-white transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#951B80]/10 flex items-center justify-center shrink-0">
                      <FiMapPin className="text-[#951B80] text-sm" />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900">Domingo</span>
                      <span className="text-xs text-slate-500">Eucaristia</span>
                    </div>
                  </div>
                  <span className="font-mono text-lg font-semibold text-[#951B80]">10:30</span>
                </div>
              </div>

              {/* Informação Extra */}
              <div className="flex items-start gap-3 bg-[#41738C]/5 p-4 rounded-xl border border-[#41738C]/10">
                <FiInfo className="text-[#41738C] text-xl shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600 leading-relaxed">
                  Os horários podem sofrer alterações em dias festivos. Consulte sempre os avisos semanais para exceções.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default AgendaPage;