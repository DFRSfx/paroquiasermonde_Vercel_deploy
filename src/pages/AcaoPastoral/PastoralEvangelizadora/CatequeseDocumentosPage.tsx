import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiDownload, FiExternalLink, FiVideo } from 'react-icons/fi';

const documents = [
  {
    title: "A tua Primeira Comunhão – uma reflexão oportuna",
    url: "https://paroquiavilarandorinho.pt/wp-content/uploads/2025/06/A-tua-Primeira-Comunhao-uma-reflexao-oportuna.pdf",
    date: "Junho 2025"
  },
  {
    title: "Mensagem Papa Francisco para I JORNADA MUNDIAL DAS CRIANÇAS",
    url: "https://paroquiavilarandorinho.pt/wp-content/uploads/2024/05/Mensagem-Papa-Francisco-para-I-JORNADA-MUNDIAL-DAS-CRIANCAS-25-e-26-maio-2024.pdf",
    date: "Maio 2024"
  },
  {
    title: "O Itinerário de Iniciação à Vida Cristã",
    url: "https://paroquiavilarandorinho.pt/wp-content/uploads/2023/09/Itinerario-Catequese-Porto-julho2023.pdf",
    date: "Setembro 2023"
  },
  {
    title: "Ministério de Catequista",
    url: "https://paroquiavilarandorinho.pt/wp-content/uploads/2022/03/Reuniao-catequistas-Ministerio-de-Catequista.pdf",
    date: "Março 2022"
  }
];

const videos = [
  { title: "O Novo Diretório da Catequese para uma Sociedade Nova (1/5)", url: "https://www.youtube.com/watch?v=APtPdfxLPdk" },
  { title: "A Catequese na Comunidade (2/5)", url: "https://www.youtube.com/watch?v=A4Yu6ydMsjQ" },
  { title: "Catequista, um Soprador ao Ouvido (3/5)", url: "https://www.youtube.com/watch?v=QWYJ867WwuE" },
  { title: "Catequese para Fazer Perguntas (4/5)", url: "https://www.youtube.com/watch?v=8P13aJ6HspU" },
  { title: "A Catequese e o Mundo (5/5)", url: "https://www.youtube.com/watch?v=8CrnOuDCCWA" }
];

const CatequeseDocumentosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* HERO SECTION COM BREADCRUMBS (Substitui o cabeçalho fraco) */}
      <section 
        className="relative pt-40 pb-32 px-6 bg-cover bg-center" 
        style={{ backgroundImage: 'url("https://jf-sermonde.pt/images/igreja-sermonde.webp")' }}
      >
        {/* Overlay escuro para garantir leitura do texto branco */}
        <div className="absolute inset-0 bg-[#0f172a]/85"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <p className="text-sm text-gray-300 mb-4 font-medium">
            <a href="/" className="hover:text-white transition-colors">Início</a>
            <span className="mx-2 opacity-50">/</span>
            <a href="/pastoral/catequese" className="hover:text-white transition-colors">Ação Pastoral</a>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-white">Documentos e Recursos</span>
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight">
            Documentos e Recursos da Catequese
          </h1>
        </div>
      </section>

      {/* CONTENTOR PRINCIPAL DOS DADOS (Agora colado à Hero Section) */}
      <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-16">
        
        {/* SECÇÃO DE DOCUMENTOS */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-[#951B80] mb-6 border-b border-gray-200 pb-2">
            Ficheiros para Consulta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-red-50 text-red-600 rounded-lg shrink-0">
                    <FiFileText className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 leading-snug">{doc.title}</h3>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-2 block">{doc.date}</span>
                  </div>
                </div>
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={doc.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                  >
                    <FiExternalLink /> Ver PDF
                  </a>
                  <a 
                    href={doc.url} 
                    download
                    className="flex items-center justify-center gap-2 bg-[#41738C] hover:bg-[#325a6e] text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                  >
                    <FiDownload />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECÇÃO: O EDUCADOR CRISTÃO E O PAPA */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img 
                src="https://paroquiavilarandorinho.pt/wp-content/uploads/2022/09/snec.jpg" 
                alt="Nota Pastoral" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 p-8 md:p-10 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#41738C] uppercase tracking-widest">Nota Pastoral</span>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mt-2">O Educador Cristão, um guia no caminho</h2>
              </div>
              <div className="text-slate-600 space-y-4 text-sm leading-relaxed text-justify">
                <p>
                  A Comissão Episcopal da Educação Cristã e Doutrina da Fé realça o papel do educador cristão como aquele que «acompanha aqueles que lhe são confiados e orienta-os para saírem de si mesmos e se abrirem à vida, aos outros, à fé, ao amor e à esperança».
                </p>
                <p>
                  Neste caminho educativo é fundamental o envolvimento de todos: «Família, Escolas e outras instâncias da Igreja e da sociedade civil», em sinodalidade, para que os educadores cristãos trabalhem unidos e conjuguem os seus esforços.
                </p>
              </div>
              <a 
                href="https://paroquiavilarandorinho.pt/wp-content/uploads/2022/09/snec-notapastoral22_final_220927094051.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#951B80] font-medium hover:underline"
              >
                Ler Nota Pastoral Completa <FiExternalLink />
              </a>
            </div>
          </div>
        </section>

        {/* SECÇÃO: MENSAGEM DO PAPA */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3 shrink-0">
            <img 
              src="https://paroquiavilarandorinho.pt/wp-content/uploads/2022/09/pfrancis.jpg" 
              alt="Papa Francisco" 
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>
          <div className="md:w-2/3 space-y-4">
            <h3 className="text-xl font-serif font-bold text-slate-900">III Congresso Internacional da Catequese</h3>
            <p className="text-slate-600 text-sm">
              Discurso do Papa Francisco aos participantes do Congresso realizado a 10 de Setembro de 2022. Uma reflexão profunda sobre a missão do catequista no mundo contemporâneo.
            </p>
            <a 
                href="https://paroquiavilarandorinho.pt/wp-content/uploads/2022/09/Discurso-do-Papa-Francisco-aos-participantes-do-III-Congresso-Internacional-da-Catequese-10.09.2022.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors mt-2"
              >
                <FiFileText /> Ler Discurso do Papa
              </a>
          </div>
        </section>

        {/* SECÇÃO: VÍDEOS E DIRETÓRIO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#41738C] text-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-serif font-bold mb-2">Conversas Originais</h2>
            <p className="text-blue-100 text-sm mb-6">Refletindo sobre o Novo Diretório da Catequese com o Pe. Luís Miguel Rodrigues (Agência Ecclesia).</p>
            
            <ul className="space-y-3">
              {videos.map((video, idx) => (
                <li key={idx}>
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <div className="bg-white/20 p-2 rounded-full group-hover:bg-[#951B80] transition-colors shrink-0">
                      <FiVideo className="text-white" />
                    </div>
                    <span className="text-sm font-medium line-clamp-2">{video.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Novo Diretório da Catequese</h2>
              <p className="text-slate-600 text-sm">
                Documento fundamental apresentado pelo Vaticano para orientar a catequese numa sociedade nova.
              </p>
            </div>
            <a 
              href="http://www.educris.com/v3/catequese/10026-edicao-portuguesa-do-diretorio-para-a-catequese-apresentada-em-fatima-caudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group overflow-hidden rounded-xl shadow-md border border-gray-200"
            >
              <img 
                src="https://paroquiavilarandorinho.pt/wp-content/uploads/2022/04/diretoriocatequese.jpg" 
                alt="Diretório da Catequese" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </a>
            <a 
              href="https://paroquiavilarandorinho.pt/wp-content/uploads/2020/09/novo-diretorio-catequese.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#41738C] font-semibold hover:text-[#2a4d5e] transition-colors"
            >
              <FiDownload /> Descarregar Diretório (2020)
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CatequeseDocumentosPage;