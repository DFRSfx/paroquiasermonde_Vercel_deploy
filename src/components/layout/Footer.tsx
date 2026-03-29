import { NavLink } from 'react-router-dom';

const principal = {
  morada: 'Praça da Igreja, Sermonde',
  codigoPostal: '4415-000 Sermonde',
  telefone: null as string | null,
  email: 'paroquia@paroquiasermonde.pt',
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t-4 border-[#951B80] mt-auto text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          
          {/* COLUNA 1: Identidade */}
          <div className="space-y-6">
            {/* FIX 1: High Contrast Title. 
              We use pure white text for readability. 
            */}
            <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
              Paróquia de Sermonde
            </h2>
            <address className="not-italic text-sm leading-relaxed text-slate-300 space-y-1">
              <p>{principal.morada}</p>
              <p>{principal.codigoPostal}</p>
              
              <div className="pt-4 space-y-2">
                {principal.telefone && (
                  <p>
                    <a href={`tel:${principal.telefone}`} className="hover:text-white transition-colors duration-200 group flex items-center gap-2">
                      <span className="text-[#41738C] group-hover:text-[#951B80] transition-colors">Tel:</span>
                      {principal.telefone}
                    </a>
                  </p>
                )}
                {principal.email && (
                  <p>
                    <a href={`mailto:${principal.email}`} className="hover:text-white transition-colors duration-200 group flex items-center gap-2">
                      <span className="text-[#41738C] group-hover:text-[#951B80] transition-colors">Email:</span>
                      {principal.email}
                    </a>
                  </p>
                )}
              </div>
            </address>
          </div>

          {/* COLUNA 2: Links Rápidos */}
          <nav aria-label="Links rápidos no rodapé">
            {/* FIX 2: Brightened the section headers for structural clarity */}
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-100 border-b border-slate-800 pb-3">
              Acesso Rápido
            </h3>
            <ul className="space-y-4 text-sm">
              {[
                { label: 'Horários das Missas', to: '/#horarios' },
                { label: 'Sacramentos', to: '/sacramentos' },
                { label: 'Catequese', to: '/grupos' },
                { label: 'Contactos', to: '/contactos' },
                { label: 'Agenda Paroquial', to: '/agenda' },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-slate-400 hover:text-white transition-all duration-200 flex items-center gap-3 group"
                  >
                    {/* The brand color is kept to the indicator dot */}
                    <span className="w-1.5 h-1.5 rounded-full bg-[#41738C] group-hover:bg-[#951B80] transition-colors shadow-[0_0_8px_rgba(149,27,128,0)] group-hover:shadow-[0_0_8px_rgba(149,27,128,0.6)]" />
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* COLUNA 3: Diocese */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-100 border-b border-slate-800 pb-3">
              Diocese
            </h3>
            {/* Kept the Magenta border, brightened the text */}
            <p className="text-sm text-slate-300 leading-relaxed border-l-2 border-[#951B80] pl-4">
              Paróquia de Sermonde pertencente à Diocese do Porto.
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Paróquia de Sermonde. Todos os direitos reservados.</p>
          <NavLink 
            to="/privacidade" 
            className="hover:text-white transition-colors duration-200"
          >
            Política de Privacidade
          </NavLink>
        </div>
      </div>
    </footer>
  );
}