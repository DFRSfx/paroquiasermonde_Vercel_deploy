import React from 'react';
import { motion, type Variants } from 'framer-motion';

const grupos = [
  { name: 'Catequese de Infância', description: 'Atividades e horários para as crianças.', color: '#b45309' },
  { name: 'Grupo de Jovens', description: 'Encontros semanais e ações sociais.', color: '#0369a1' },
  { name: 'Conferência S. Vicente de Paulo', description: 'Ação sócio-caritativa na paróquia.', color: '#111827' },
  // ... outros grupos ...
];

const GruposPage: React.FC = () => {
  const containerVariants: Variants = {
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    hidden: { opacity: 0 },
  };

  const itemVariants: Variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hidden: { opacity: 0, y: 15 },
  };

  return (
    <div className="bg-cream">
       
      {/* BANNER SOLENE BLOCO */}
      <section className="bg-slate-950 text-white border-b border-amber-800 py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-light text-amber-500 uppercase tracking-widest mb-1">Ação Pastoral</p>
            <h1 className="text-5xl font-serif mb-4 text-white">Grupos & Movimentos</h1>
            <p className="text-lg text-slate-300 max-w-2xl font-light">Comunidades de fé, oração e serviço que dão vida à nossa paróquia.</p>
          </motion.div>
        </div>
      </section>

      {/* GRID DE GRUPOS EM BLOCO RÍGIDO */}
      <section className="py-16 px-6 relative z-0">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {grupos.map((grupo) => (
              <motion.div
                key={grupo.name}
                variants={itemVariants}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                className="bg-white border border-gray-100 rounded-none group overflow-hidden h-full flex flex-col shadow-sm"
              >
                {/* Barra lateral rígida Vilar Style */}
                <div style={{ backgroundColor: grupo.color }} className="w-2 h-full absolute top-0 left-0 group-hover:w-3 transition-all"/>

                <div className="p-8 pl-10 flex flex-col flex-grow">
                  <h3 style={{ color: grupo.color }} className="text-2xl font-bold font-serif mb-3">{grupo.name}</h3>
                  <p className="text-slate-700 text-sm mb-6 flex-grow">{grupo.description}</p>
                  <a href="#" style={{ color: grupo.color }} className="mt-auto font-semibold hover:opacity-80 flex items-center gap-1 group text-sm">Mais detalhes <span className="group-hover:translate-x-1 transition-transform">-&gt;</span></a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default GruposPage;