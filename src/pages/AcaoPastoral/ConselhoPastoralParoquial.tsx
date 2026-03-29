import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiActivity, FiDownload, FiCheckCircle, FiGrid } from 'react-icons/fi';

const ConselhoPastoralParoquial: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">

      {/* BANNER SOLENE */}
      <section
        className="relative pt-40 pb-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://jf-sermonde.pt/images/igreja-sermonde.webp")' }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/85" />
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <p className="text-xs sm:text-sm text-gray-300 mb-4 font-medium tracking-wide flex flex-wrap items-center gap-2">
            <a href="/" className="hover:text-white transition-colors">Início</a>
            <span className="opacity-50">/</span>
            <span className="cursor-default">Ação Pastoral</span>
            <span className="opacity-50">/</span>
            <span className="text-white">Conselho Pastoral</span>
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight"
          >
            Conselho Pastoral Paroquial
          </motion.h1>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 relative z-20 -mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-12 lg:p-16 transform-gpu overflow-hidden"
        >
          <div className="max-w-none text-slate-600 leading-relaxed">

            {/* Introdução */}
            <p className="text-xl md:text-2xl text-slate-800 font-light leading-snug mb-14 pb-8 border-b border-gray-100">
              O <strong className="font-bold text-[#41738C]">Conselho Pastoral Paroquial</strong> é o organismo que, a nível da Paróquia, em união com o Pároco e em comunhão com a Igreja diocesana, anima a vida da comunidade cristã e coordena, ao seu serviço, os dons e carismas dos seus membros.
            </p>

            {/* Secção: Atribuições */}
            <div className="mb-16">
              <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-slate-900 mb-8">
                <div className="p-2 bg-[#41738C]/10 rounded-lg"><FiTarget className="text-[#41738C]" /></div>
                Atribuições do Conselho
              </h2>
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 list-none pl-0 m-0">
                {[
                  "Animar a Paróquia como comunidade eclesial.",
                  "Coordenar as ações programadas no âmbito da pastoral paroquial e diocesana.",
                  "Examinar os problemas e carências de ordem pastoral.",
                  "Incentivar a cooperação entre todos os organismos paroquiais.",
                  "Promover a ligação com os órgãos pastorais de nível vicarial, regional e diocesano."
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <FiCheckCircle className="text-[#41738C] mt-1 shrink-0 text-xl" />
                    <span className="text-base text-slate-700">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Secção: Membros */}
            <div className="mb-16">
              <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-slate-900 mb-8">
                <div className="p-2 bg-[#951B80]/10 rounded-lg"><FiUsers className="text-[#951B80]" /></div>
                Membros do Conselho
              </h2>
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 list-none pl-0 m-0">
                {[
                  "O Pároco por inerência do cargo.",
                  "Em Sermonde – o Diácono.",
                  "Um delegado das Casas Religiosas existentes na Paróquia.",
                  "Os delegados dos sectores proféticos, comunitário e litúrgico.",
                  "Os delegados das associações religiosas canonicamente erectas.",
                  "Outras pessoas que o Pároco nomeie como tais."
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#951B80] mt-2 shrink-0 shadow-sm" />
                    <span className="text-base text-slate-700">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Secção: Órgãos */}
            <div className="mb-16">
              <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-slate-900 mb-8">
                <div className="p-2 bg-slate-100 rounded-lg"><FiGrid className="text-slate-700" /></div>
                Estrutura e Órgãos
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 relative overflow-hidden flex flex-col hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#41738C]"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">O Presidente</h3>
                  <p className="text-sm text-slate-600 m-0 leading-relaxed">
                    Será, por inerência do cargo, o Pároco. No tempo de vacatura, a presidência será exercida por um delegado do Ordinário.
                  </p>
                </div>

                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 relative overflow-hidden flex flex-col hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#951B80]"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">A Comissão Permanente</h3>
                  <p className="text-sm text-slate-600 m-0 mb-4 leading-relaxed">
                    Constituída por 5 a 15 membros eleitos pelo Plenário. A Comissão escolherá um para <strong>Secretário</strong>.
                  </p>
                  <p className="text-sm text-slate-600 m-0 leading-relaxed">
                    Reúne sob a presidência do Pároco ordinariamente uma vez por mês para apoiar de forma continuada o CPP.
                  </p>
                </div>

                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 relative overflow-hidden flex flex-col hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-800"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">O Plenário</h3>
                  <p className="text-sm text-slate-600 m-0 mb-4 leading-relaxed">
                    Constituído pelo conjunto dos membros do CPP e presidido pelo Pároco. Reúne três vezes por ano.
                  </p>
                  <p className="text-sm text-slate-600 m-0 leading-relaxed">
                    <strong>Competência:</strong> Pronunciar-se sobre a atividade pastoral. Resoluções necessitam da concordância do Pároco.
                  </p>
                </div>
              </div>
            </div>

            {/* Secção: Expressão Dinâmica */}
            <div className="mb-6">
              <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-slate-900 mb-8">
                <div className="p-2 bg-[#41738C]/10 rounded-lg"><FiActivity className="text-[#41738C]" /></div>
                Expressão Dinâmica
              </h2>
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 list-none pl-0 m-0">
                <li className="flex items-start gap-4">
                  <FiCheckCircle className="text-[#41738C] mt-1 shrink-0 text-xl" />
                  <span className="text-base text-slate-700">Da unidade da família paroquial e seu empenhamento apostólico.</span>
                </li>
                <li className="flex items-start gap-4">
                  <FiCheckCircle className="text-[#41738C] mt-1 shrink-0 text-xl" />
                  <span className="text-base text-slate-700">Da colaboração entre leigos, sacerdote e diácono para o crescimento e santificação.</span>
                </li>
                <li className="flex items-start gap-4 md:col-span-2">
                  <FiCheckCircle className="text-[#41738C] mt-1 shrink-0 text-xl" />
                  <span className="text-base text-slate-700">Da corresponsabilidade na obra comum imposta pela missão da Igreja: Evangelho, Santificar e Salvar.</span>
                </li>
              </ul>
            </div>

            {/* Citação Final */}
            <blockquote className="relative p-8 sm:p-12 my-16 bg-white rounded-2xl border-y border-slate-200 text-center">
              <p className="relative z-10 text-xl sm:text-2xl text-slate-800 font-serif leading-relaxed font-bold">
                "A Paróquia dá-nos um exemplo claro do apostolado comunitário porque congrega numa unidade toda a diversidade humana que aí se encontra e a insere na universalidade da Igreja"
              </p>
              <footer className="mt-6 text-sm text-[#41738C] font-bold uppercase tracking-widest">— A.A. n.º 10</footer>
            </blockquote>

            {/* Documento Download CTA */}
            <div className="mt-12 flex flex-col items-center justify-center">
              <a
                href="https://paroquiavilarandorinho.pt/wp-content/uploads/2025/11/CONSELHO-PASTORAL-2025-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row items-center gap-4 bg-[#951B80] hover:bg-[#7a1568] text-white px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-center w-full sm:w-auto"
              >
                <FiDownload className="text-3xl sm:text-2xl group-hover:-translate-y-1 transition-transform" />
                <span className="text-lg">Descarregar Conselho Pastoral (PDF)</span>
              </a>
            </div>

          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default ConselhoPastoralParoquial;
