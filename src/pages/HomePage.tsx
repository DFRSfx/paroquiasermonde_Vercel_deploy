import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { FiClock, FiCalendar, FiBell, FiMapPin, FiArrowRight } from 'react-icons/fi';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const HomePage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* FULL BLEED HERO SECTION */}
      {/* Aumentei a altura para acomodar a sobreposição dos cartões */}
      <section className="relative h-[85vh] min-h-[650px] flex items-center justify-center text-center px-6 pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://jf-sermonde.pt/images/igreja-sermonde.webp")' }} 
        />
        <div className="absolute inset-0 bg-[#0f172a]/75 z-10" /> {/* Overlay escuro */}

        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center gap-6 mt-16">
          <motion.h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Paróquia de Sermonde
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-2xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Uma comunidade viva, de portas abertas para o acolher na fé e na partilha da Palavra.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Botões atualizados para usar cores da marca diretamente caso o index.css falhe */}
            <a href="/agenda" className="px-8 py-3 bg-[#951B80] text-white font-medium rounded hover:bg-[#7a1568] transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl group">
              Horários das Missas <FiClock className="ml-2 group-hover:rotate-12 transition-transform"/>
            </a>
            <a href="/avisos" className="px-8 py-3 bg-white/15 text-white border border-white/30 font-medium rounded hover:bg-white/25 transition-all duration-300 inline-flex items-center group">
              Avisos da Semana <FiCalendar className="ml-2 group-hover:scale-110 transition-transform"/>
            </a>
          </motion.div>
        </div>
      </section>

      {/* DESTAQUES EM BLOCO - Sobreposição (Negative Margin) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative z-30 -mt-24 sm:-mt-32 mb-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Card 1 - Avisos (Magenta) */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-[#951B80] hover:-translate-y-1 transition-transform duration-300 cursor-pointer group flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#951B80]/10 rounded-lg">
                <FiBell className="text-2xl text-[#951B80]"/>
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">Avisos da Semana</h3>
            </div>
            <p className="text-slate-600 flex-grow">Celebrações da Semana Santa 2026. <span className="font-semibold text-[#951B80] group-hover:underline">Ler agora</span></p>
            <p className="text-slate-400 text-xs mt-4 uppercase tracking-wider font-semibold">Atualizado: 15/03/2026</p>
          </motion.div>

          {/* Card 2 - Localização (Teal) */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-[#41738C] hover:-translate-y-1 transition-transform duration-300 cursor-pointer group flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#41738C]/10 rounded-lg">
                <FiMapPin className="text-2xl text-[#41738C]"/>
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">Como Chegar</h3>
            </div>
            <p className="text-slate-600 flex-grow">Igreja Matriz de Sermonde<br/>Rua da Igreja, s/n. Sermonde</p>
            <p className="text-[#41738C] text-sm mt-4 font-mono bg-slate-50 p-2 rounded inline-block w-fit">41.05, -8.60</p>
          </motion.div>

          {/* Card 3 - Catequese (Slate Escuro para equilibrar) */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-slate-800 hover:-translate-y-1 transition-transform duration-300 cursor-pointer group flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-slate-100 rounded-lg">
                <img src="/assets/icons/catequese.svg" alt="Catequese" className="w-6 h-6 opacity-80" 
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} 
                />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">Inscrições</h3>
            </div>
            <p className="text-slate-600 flex-grow">Ano Catequético 2026/2027 abertas para todas as faixas etárias.</p>
            <p className="text-slate-800 text-sm mt-4 font-bold bg-amber-100 px-3 py-1 rounded w-fit">Até 15 Setembro</p>
          </motion.div>
        </motion.div>
      </section>

      {/* SECÇÃO DE HISTÓRIA */}
      <section className="bg-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl text-slate-900 font-serif font-bold mb-6 leading-tight">Uma história de fé em Sermonde</h2>
            <div className="h-1 w-20 bg-[#951B80] mb-8"></div>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Fundada em [Ano], a Paróquia de Sermonde tem sido o centro espiritual da nossa comunidade por gerações. A nossa Igreja Matriz, de traça [Estilo Arquitetónico], foi construída com o esforço e devoção dos paroquianos ao longo dos séculos.
            </p>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Convidamo-lo a conhecer a nossa história rica e a partilhar connosco a nossa fé vibrante.
            </p>
            <a href="/paroquia/historia" className="inline-flex items-center gap-2 text-[#41738C] font-bold text-lg hover:text-[#2d5062] transition-colors group">
              Conhecer a história 
              <FiArrowRight className="group-hover:translate-x-2 transition-transform"/>
            </a>
          </motion.div>
          
          {/* Imagem tratada corretamente */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-[#41738C] rounded-2xl transform translate-x-4 translate-y-4 -z-10 opacity-20"></div>
            <img 
              src="https://jf-sermonde.pt/images/igreja-sermonde.webp" 
              alt="Igreja Matriz de Sermonde" 
              className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;