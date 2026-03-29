import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { FiBookOpen, FiClock } from 'react-icons/fi';

const sacramentos = [
  { 
    name: 'Batismo', 
    description: 'Nascimento para a vida de Deus.', 
    color: '#0369a1', /* sky-700 - Azure (Inspirado no teto) */
    requirements: ['Cópia CC da criança', 'Cópia CC dos padrinhos', 'Certidão de Batismo dos padrinhos', 'Entrevista com o pároco'],
    prepTime: '2 meses'
  },
  { 
    name: 'Confirmação (Crisma)', 
    description: 'Fortalecimento do dom do Espírito Santo.', 
    color: '#b45309', /* amber-700 - Terracotta (Inspirado na telha) */
    requirements: ['Certidão de Batismo', '2 anos de preparação', 'Escolha do padrinho'],
    prepTime: 'Anual'
  },
  { 
    name: 'Eucaristia (Primeira Comunhão)', 
    description: 'Recebimento do Corpo e Sangue de Cristo.', 
    color: '#d4af37', /* Gilded Gold - Ouro Envelhecido (Inspirado no retábulo) */
    requirements: ['Certidão de Batismo', '3 anos de catequese', 'Confissão prévia'],
    prepTime: 'Maio/Junho'
  },
  // ... outros sacramentos com cores inspiradas ...
];

const SacramentosPage: React.FC = () => {
  const containerVariants: Variants = {
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    hidden: { opacity: 0 },
  };

  const itemVariants: Variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hidden: { opacity: 0, y: 15 },
  };

  return (
    <div className="bg-chalk">
      
      {/* BANNER SOLENE BLOCO (Fundo Primary) */}
      <section className="bg-slate-950 text-white border-b border-amber-800 py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-light text-amber-500 uppercase tracking-widest mb-1">Caminhos de Fé</p>
            <h1 className="text-5xl font-serif mb-4 text-white">Sacramentos</h1>
            <p className="text-lg text-slate-300 max-w-2xl font-light">"Sinais visíveis da graça invisível", instituídos por Jesus Cristo para santificar a nossa vida comunitária e pessoal.</p>
          </motion.div>
        </div>
      </section>

      {/* GRID DE SACRAMENTOS EM BLOCO RÍGIDO (Fundo Creme Suave) */}
      <section className="bg-cream py-16 px-6 relative z-0">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {sacramentos.map((sac) => (
              <motion.div
                key={sac.name}
                variants={itemVariants}
                whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                className="bg-white border border-gray-100 rounded-none shadow-sm group relative overflow-hidden h-full flex flex-col"
              >
                {/* Barra de cor Primary Topo (Rígida) */}
                <div style={{ backgroundColor: sac.color }} className="h-2 w-full absolute top-0 left-0"/>

                <div className="p-8 pt-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                     <FiBookOpen style={{ color: sac.color }} className="text-3xl"/>
                     <h2 style={{ color: sac.color }} className="text-2xl font-bold font-serif">{sac.name}</h2>
                  </div>
                  <p className="text-slate-700 text-sm mb-6 flex-grow">{sac.description}</p>
                  
                  {/* Tempo de Preparação (Badge Quadrada) */}
                  <div className="flex items-center gap-2 mb-6 text-slate-500">
                    <FiClock className="text-sm"/>
                    <span className="text-xs uppercase tracking-wider font-semibold">Preparação: {sac.prepTime}</span>
                  </div>

                  {/* REQUISITOS - DROPDOWN QUADRADO (Vilar Style) */}
                  <details className="mt-auto group border border-slate-100 bg-slate-50 rounded-none">
                    <summary className="font-semibold text-slate-800 px-5 py-3 cursor-pointer select-none flex items-center justify-between text-sm group-open:bg-slate-100 group-open:border-b border-slate-100">
                      Ver Documentos Necessários
                      <FiBookOpen className="text-amber-700 group-open:rotate-180 transition-transform"/>
                    </summary>
                    <div className="px-6 py-4 border-t border-slate-100 bg-white">
                      <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                        {sac.requirements.map(req => <li key={req}>{req}</li>)}
                      </ul>
                      <a href="mailto:sacramentos@paroquiasermonde.pt" className="mt-5 text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 group">Esclarecer dúvida<span className="group-hover:translate-x-1 transition-transform">-&gt;</span></a>
                    </div>
                  </details>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default SacramentosPage;