import React from 'react';

const LeitoresPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <section
        className="relative pt-40 pb-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://jf-sermonde.pt/images/igreja-sermonde.webp")' }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/85" />
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <p className="text-sm text-gray-300 mb-4">
            <a href="/" className="hover:text-white transition-colors">Início</a>
            <span className="mx-2 opacity-50">/</span>
            <span>Ação Pastoral</span>
            <span className="mx-2 opacity-50">/</span>
            <span>Pastoral Litúrgica</span>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Leitores</span>
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight">
            Leitores
          </h1>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 relative z-20 -mt-24">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-12">
          <p className="text-slate-500 text-center py-16 text-lg">Página em construção.</p>
        </div>
      </section>
    </div>
  );
};

export default LeitoresPage;
