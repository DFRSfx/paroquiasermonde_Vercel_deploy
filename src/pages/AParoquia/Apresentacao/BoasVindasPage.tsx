import React from 'react';
import { motion } from 'framer-motion';

const BoasVindasPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">

      {/* BANNER - Fixed height and positioning for better scaling */}
      <section
        className="relative pt-40 pb-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://jf-sermonde.pt/images/igreja-sermonde.webp")' }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/85" /> {/* Slightly darker for premium feel */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-sm text-gray-300 mb-4 font-medium tracking-wide">
            <a href="/" className="hover:text-white transition-colors">Início</a>
            <span className="mx-2 opacity-50">/</span>
            <a href="/paroquia" className="hover:text-white transition-colors">A Paróquia</a>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Mensagem de Boas-Vindas</span>
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight"
          >
            Mensagem de Boas-Vindas
          </motion.h1>
        </div>
      </section>

      {/* CONTEÚDO - Expanded to max-w-7xl to use more desktop space safely */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 -mt-16 sm:-mt-24">
        {/* Added transform-gpu to force hardware acceleration and kill the mobile rendering glitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl flex flex-col lg:flex-row border border-gray-100 transform-gpu overflow-hidden"
        >

          {/* SIDEBAR DO PÁROCO - Widened on desktop */}
          <aside className="lg:w-1/3 xl:w-1/4 bg-slate-50 border-b lg:border-b-0 lg:border-r border-gray-100 p-8 lg:p-10 relative">
            <div className="lg:sticky lg:top-32 flex flex-col items-center text-center">
              <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-md mb-6 bg-slate-200 shrink-0">
                <img
                  src="/assets/padre_vasco.jpg"
                  alt="Pe. Vasco Soeiro"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Pe.+Vasco';
                  }}
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">Pe. Vasco Soeiro</h3>
              <p className="text-[#41738C] font-bold text-xs uppercase tracking-widest mt-2 mb-6">
                Pároco de Sermonde
              </p>
              <div className="h-px w-16 bg-gray-300 mb-6"></div>
              <p className="text-base text-slate-500 italic px-2">
                "Um espaço de encontro, partilha e crescimento na fé."
              </p>
            </div>
          </aside>

          {/* A CARTA / MENSAGEM */}
          <main className="lg:w-2/3 xl:w-3/4 p-6 sm:p-10 lg:p-16 xl:p-20 bg-white">
            <div className="prose prose-lg lg:prose-xl max-w-none text-slate-600 leading-relaxed">

              <div className="mb-6">
                <span className="float-left text-7xl font-serif text-[#951B80] pr-4 pt-2 leading-none">É</span>
                <p>
                  com um sorriso que lhe damos as boas-vindas a esta página da Paróquia de Sermonde.
                  Nesta página ao alcance de todos com um simples clique, uma nova apresentação: mais dinâmica,
                  apelativa e completa. Os mesmos espaços formativos e informativos, de nível paroquial,
                  diocesano ou global.
                </p>
              </div>

              <p className="clear-left">
                Através dela queremos dar a conhecer a nossa identidade, a nossa finalidade e a missão que
                desenvolvemos, segundo o mandato de Jesus Cristo:
              </p>

              <blockquote className="relative p-6 sm:p-10 my-10 bg-[#41738C]/5 rounded-2xl border-l-4 border-[#41738C] shadow-sm">
                <svg className="absolute top-6 left-6 w-10 h-10 text-[#41738C]/10 transform -translate-x-2 -translate-y-2" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                </svg>
                <p className="relative z-10 text-lg sm:text-xl italic text-slate-800 font-serif leading-relaxed">
                  "Ide, pois, e ensinai a todas as nações; batizai-as em nome do Pai, do Filho e do Espírito Santo.
                  Ensinai-as a observar tudo o que vos prescrevi. Eis que estou convosco todos os dias, até o fim do mundo."
                </p>
                <footer className="mt-6 text-base font-bold text-[#951B80] tracking-wider uppercase">— Mt. 28, 19-20</footer>
              </blockquote>

              <p>
                A Igreja deve deitar mão de todos os meios ao seu alcance para cumprir esta missão.
                Este é um meio eficaz que torna mais longo e largo o horizonte da inter-relação, da partilha
                de ideias e experiências, de sentimentos e saberes, de colaboração a todos os níveis.
              </p>

              <p>
                Através dele, estaremos mais perto de todos, sobretudo dos nossos conterrâneos imigrantes e
                emigrantes. O objetivo final será o mesmo de sempre: a vivência duma fé esclarecida,
                contribuindo para um maior sentido de comunidade.
              </p>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-slate-500 mb-2 text-base uppercase tracking-wider font-semibold">Um forte abraço,</p>
                <p className="text-3xl font-serif text-slate-900 font-bold">Pe. Vasco Soeiro</p>
              </div>

            </div>
          </main>
        </motion.div>
      </section>
    </div>
  );
};

export default BoasVindasPage;
