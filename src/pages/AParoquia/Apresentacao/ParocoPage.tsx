import React from 'react';
import { motion } from 'framer-motion';

const paroco = {
  nome: 'Vasco Alexandre Domingues Soeiro',
  cargo: 'Pároco',
  foto: '/assets/paroco.jpg',
  email: 'paroquia@paroquiasermonde.pt',
  bio: [
    'Vasco Soeiro nasceu na Madalena, Gaia, em 1976. Iniciou o estudo da música sacra colaborando nas celebrações eucarísticas. Prosseguiu os estudos, a partir de 1997, na Escola Diocesana de Ministérios Laicais do Porto, tendo frequentado o curso de Música Litúrgica na classe de Órgão, sob orientação de António Mário Costa.',
    'Posteriormente frequentou o curso de Órgão do III Curso Nacional de Música Litúrgica (2003-2006), tendo sido orientado por Filipe Veríssimo, António Esteireiro e António Mário Costa, nas disciplinas de órgão literatura e órgão litúrgico. Durante o curso participou numa classe de aperfeiçoamento com o organista Luca Antoniotti (professor na Escola das Artes – Universidade Católica do Porto).',
    'Em 2005 ingressou na Universidade de Aveiro, no curso de Música, estudando Órgão com Domingos Peixoto e Edite Rocha. Em Setembro de 2006 participou numa masterclass em Lisboa com o organista titular de Saint Sulpice (França), Daniel Roth. Em Julho de 2008 participou na 43ª Academia Internacional de Verão de Órgão em Haarlem, na Holanda, tendo frequentado o curso de música antiga com Bernard Winsemius. Depois de concluída a licenciatura obteve o grau de mestre em performance em órgão.',
    'Foi organista na Igreja da Lapa no Porto, desempenhando também as funções de diretor de assembleia e coro, e elemento efetivo do coro da Sé Catedral do Porto, com o qual participou regularmente, como cantor, em vários concertos.',
    'Foi professor de órgão na Academia de Música de Paços de Brandão e na Escola de Música de Perosinho.',
    'Participou na audição integral da obra organística de Buxtehude, promovida pela AMPO – Associação Musical Pro Organo em 2007, bem como noutros recitais organizados pela mesma associação. Em 2008 participou no \'43rd International Summer Academy for Organist\' em Haarlem, na Holanda, tendo frequentado o curso de música antiga com Bernard Winsemius, e participou também no dia ECHO do Festival Internacional de Órgão e Lisboa na Igreja Evangélica Alemã.',
    'Depois de longo amadurecimento e discernimento vocacional, foi admitido no Seminário Maior do Porto, tendo concluído o Mestrado em Teologia.',
    'A 9 de julho de 2017 foi ordenado diácono na Catedral do Porto, tendo assumido a lecionação de órgão e maestro do coro, no Seminário Maior de Nossa Senhora da Conceição do Porto.',
    'Foi ordenado presbítero no dia 8 de julho de 2018 na Catedral do Porto, tendo sido nomeado Prefeito do Seminário do Bom Pastor e responsável pela música no Seminário do Bom Pastor e de Nossa Senhora da Conceição do Porto.',
    'Em 2019 foi nomeado Prefeito da Equipa Formadora do Seminário Maior de Nossa Senhora da Conceição, acumulando com a paroquialidade de Santa Maria de Nogueira e de Santa Maria de Silva Escura, na Maia, mantendo a responsabilidade da formação musical no Seminário Maior de Nossa Senhora da Conceição do Porto.',
    'Em 2020 foi dispensado das paróquias de Santa Maria de Nogueira e de Santa Maria de Silva Escura, ficando totalmente dedicado à formação no Seminário Maior de Nossa Senhora da Conceição do Porto.',
    'Em janeiro de 2023 foi nomeado Reitor do Santuário Diocesano do Monte da Virgem Imaculada, acumulando com as funções de Prefeito do Seminário Maior de Nossa Senhora da Conceição do Porto.',
    'Após 5 anos dedicados à formação nos seminários, foi dispensado do múnus de Prefeito do Seminário Maior de Nossa Senhora da Conceição do Porto, assumiu uma missão como Adjunto do Ecónomo Diocesano do Porto, acumulando com o múnus pastoral do Santuário Diocesano do Monte da Virgem Imaculada.',
    'A 14 de setembro de 2025, o P.e Vasco Soeiro inicia uma nova etapa da sua vida entregue na missão da Diocese do Porto, tendo sido nomeado para pároco da Paróquia de Sermonde, acumulando com a reitoria do Santuário Diocesano do Monte da Virgem Imaculada.',
  ],
};

const ParocoPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* BANNER */}
      <section
        className="relative h-56 flex items-end pb-10 px-6 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://jf-sermonde.pt/images/igreja-sermonde.webp")' }}
      >
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <p className="text-sm text-gray-300 mb-1">
            <a href="/" className="hover:underline">Início</a>
            <span className="mx-2 opacity-50">/</span>
            <a href="/paroquia" className="hover:underline">A Paróquia</a>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">O Pároco</span>
          </p>
          <h1 className="text-white text-4xl font-serif font-bold">O Pároco</h1>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-100 p-10 shadow-sm"
        >
          <h2 className="text-2xl font-serif font-bold text-center text-slate-900 mb-8">
            {paroco.nome}
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {paroco.foto && (
              <img
                src={paroco.foto}
                alt={`Fotografia de ${paroco.nome}`}
                className="w-full md:w-64 object-cover flex-shrink-0 border border-gray-100"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            )}

            <div className="space-y-4 text-slate-700 leading-relaxed text-justify">
              {paroco.bio.map((paragrafo, i) => (
                <p key={i}>{paragrafo}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ParocoPage;
