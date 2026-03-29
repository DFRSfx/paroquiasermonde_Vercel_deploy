import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { FiChevronDown, FiChevronRight, FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';

interface NavSubItem {
  name: string;
  path?: string;
  submenu?: NavSubItem[];
}

interface NavItem {
  name: string;
  path?: string;
  submenu?: NavSubItem[];
}

const navItems: NavItem[] = [
  { name: 'Início', path: '/' },
  {
    name: 'A Paróquia',
    submenu: [
      {
        name: 'Apresentação',
        submenu: [
          { name: 'Mensagem de Boas-Vindas', path: '/paroquia/boas-vindas' },
          { name: 'O Pároco', path: '/paroquia/paroco' },
        ],
      },
      { name: 'História', path: '/paroquia/historia' },
      { name: 'Espaços', path: '/paroquia/espacos' },
    ],
  },
  {
    name: 'Ação Pastoral',
    submenu: [
      { name: 'Conselho Pastoral Paroquial', path: '/paroquia/conselho-pastoral' },
      {
        name: 'Pastoral Evangelizadora',
        submenu: [
          {
            name: 'Catequese',
            submenu: [
              { name: 'Apresentação', path: '/pastoral/catequese' },
              { name: 'Funcionamento e Informações Úteis', path: '/pastoral/catequese/funcionamento' },
              { name: 'Documentos/Formação', path: '/pastoral/catequese/documentos' },
            ],
          },
          {
            name: 'Batismo',
            submenu: [
              { name: 'Apresentação', path: '/sacramentos/batismo' },
              { name: 'Equipa e Funcionamento', path: '/sacramentos/batismo/equipa' },
            ],
          },
          {
            name: 'Juventude',
            submenu: [
              { name: 'Geral', path: '/pastoral/juventude' },
            ],
          },
          {
            name: 'Pastoral da Família',
            submenu: [
              { name: 'Apresentação', path: '/pastoral/familia' },
            ],
          },
          {
            name: 'Apostolado da Oração',
            submenu: [
              { name: 'Apresentação', path: '/pastoral/apostolado-oracao' },
              { name: 'Funcionamento e Informações Úteis', path: '/pastoral/apostolado-oracao/funcionamento' },
            ],
          },
        ],
      },
      {
        name: 'Pastoral Litúrgica',
        submenu: [
          { name: 'Sacristães e Zeladores', path: '/pastoral/sacristoes' },
          {
            name: 'Acólitos',
            submenu: [
              { name: 'Apresentação', path: '/pastoral/acolitos' },
            ],
          },
          {
            name: 'Leitores',
            submenu: [
              { name: 'Apresentação', path: '/pastoral/leitores' },
              { name: 'Funcionamento e Informações Úteis', path: '/pastoral/leitores/funcionamento' },
            ],
          },
          { name: 'Grupos Corais', path: '/pastoral/grupos-corais' },
        ],
      },
      {
        name: 'Pastoral Sócio-Caritativa',
        submenu: [
          { name: 'Pastoral da Saúde', path: '/pastoral/saude' },
          { name: 'Conferência S. Vicente de Paulo', path: '/pastoral/sao-vicente-paulo' },
        ],
      },
      { name: 'Conselho Económico', path: '/paroquia/conselho-economico' },
    ],
  },
  { name: 'Sacramentos', path: '/sacramentos' },
  { name: 'Agenda', path: '/agenda' },
  { name: 'Contactos', path: '/contactos' },
];

/* --- DESKTOP VARIANTS --- */
const menuVariants: Variants = {
  hidden: { opacity: 0, y: -8, scaleY: 0.95 },
  visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.18, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, scaleY: 0.95, transition: { duration: 0.12, ease: 'easeIn' } },
};


const containsPath = (item: NavItem | NavSubItem, currentPath: string): boolean => {
  if (item.path === currentPath) return true;
  if (item.submenu) return item.submenu.some((child) => containsPath(child, currentPath));
  return false;
};

/* --- DESKTOP SUBMENU COMPONENT --- */
const SubMenuItem: React.FC<{ item: NavSubItem; depth?: number; currentPath: string }> = ({ item, depth = 0, currentPath }) => {
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const submenuRef = useRef<HTMLDivElement>(null);

  // Deteção de colisão com margem de segurança maior
  useEffect(() => {
    if (open && submenuRef.current) {
      const rect = submenuRef.current.getBoundingClientRect();
      if (rect.right > window.innerWidth - 40) {
        setDirection('left');
      }
    } else {
      setDirection('right');
    }
  }, [open]);

  const dynamicVariants: Variants = {
    hidden: { opacity: 0, x: direction === 'right' ? -8 : 8 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.15, ease: 'easeOut' } },
    exit: { opacity: 0, x: direction === 'right' ? -8 : 8, transition: { duration: 0.1, ease: 'easeIn' } },
  };

  const isActive = containsPath(item, currentPath);

  if (item.submenu) {
    return (
      <li
        className="relative group"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button className={`w-full flex items-center justify-between px-6 py-3 transition-colors border-l-2 text-sm text-left ${
            open
              ? 'bg-slate-50 border-[#951B80] text-[#951B80] font-semibold'
              : isActive
              ? 'bg-purple-50 border-[#951B80] text-[#951B80] font-semibold'
              : 'border-transparent hover:border-[#41738C] hover:bg-slate-50 text-slate-900 font-medium'
          }`}
        >
          <span>{item.name}</span>
          <FiChevronRight className={`text-xs transition-transform duration-200 ${open || isActive ? 'text-[#951B80]' : 'opacity-60'} ${direction === 'left' && open ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              ref={submenuRef}
              variants={dynamicVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ zIndex: 60 + depth }}
              className={`absolute top-0 ${
                direction === 'right' 
                  ? 'left-full pl-1' 
                  : 'right-full pr-2 drop-shadow-2xl' 
              }`}
            >
              <ul className={`w-[260px] bg-white shadow-xl border border-gray-100 rounded-md py-2 overflow-visible ${
                direction === 'left' ? 'translate-x-3' : ''
              }`}>
                {item.submenu.map((child) => (
                  <SubMenuItem key={child.name} item={child} depth={depth + 1} currentPath={currentPath} />
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    );
  }

  return (
    <li>
      <a
        href={item.path}
        className={`block px-6 py-3 transition-colors border-l-2 font-medium text-sm ${
          isActive
            ? 'bg-purple-50 border-[#951B80] text-[#951B80] font-semibold'
            : 'border-transparent hover:border-[#41738C] hover:bg-slate-50 text-slate-900'
        }`}
      >
        {item.name}
      </a>
    </li>
  );
};

/* --- MOBILE ACCORDION ITEM COMPONENT --- */
const MobileMenuItem: React.FC<{ item: NavItem | NavSubItem; closeMenu: () => void; currentPath: string; depth?: number }> = ({ item, closeMenu, currentPath, depth = 0 }) => {
  const isActive = containsPath(item, currentPath);
  const [isOpen, setIsOpen] = useState(isActive);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  if (hasSubmenu) {
    return (
      <div className="border-b border-gray-100">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between py-4 pr-6 text-left hover:bg-slate-50 transition-colors ${
            depth === 0 ? 'font-bold text-base pl-6' : 'font-medium text-sm pl-10'
          } ${isActive ? 'text-[#951B80]' : 'text-slate-900'}`}
        >
          <span className={isOpen || isActive ? 'text-[#951B80]' : ''}>{item.name}</span>
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            <FiChevronRight className={`text-xl ${isOpen || isActive ? 'text-[#951B80]' : 'text-slate-400'}`} />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="overflow-hidden bg-slate-50/50"
            >
              {item.submenu!.map((sub, idx) => (
                <MobileMenuItem key={idx} item={sub} closeMenu={closeMenu} currentPath={currentPath} depth={depth + 1} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <a
      href={item.path}
      onClick={closeMenu}
      className={`block py-4 pr-6 transition-colors border-b border-gray-100 ${
        depth === 0 ? 'font-bold text-base pl-6' : 'font-medium text-sm pl-10'
      } ${isActive ? 'text-[#951B80] bg-purple-50' : 'text-slate-600 hover:bg-slate-50'}`}
    >
      {item.name}
    </a>
  );
};

/* --- MAIN HEADER COMPONENT --- */
const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
      setIsHeaderHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      leaveTimer.current = setTimeout(() => setIsHeaderHovered(false), 80);
    }
  };

  const isSolid = isScrolled || isMobileMenuOpen || isHeaderHovered;

  return (
    <header
      className="fixed top-0 w-full z-50 py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <nav className={`flex items-center justify-between px-4 sm:px-6 py-2 rounded-xl transition-[background-color,box-shadow] duration-300 ${
        isSolid ? 'bg-white shadow-md text-slate-900' : 'text-white'
      }`}>
        {/* LOGO */}
        <a href="/" className="flex flex-col z-50" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <span className="text-2xl font-serif font-bold tracking-tight">Paróquia</span>
          <span className={`text-sm font-bold uppercase tracking-widest -mt-1 transition-colors ${
            isSolid ? 'text-[#951B80]' : 'text-gray-200'
          }`}>
            Sermonde
          </span>
        </a>

        {/* --- NAVEGAÇÃO DESKTOP --- */}
        <div className="hidden md:flex items-center gap-6" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setActiveMenu(item.name)}
              onMouseLeave={() => item.submenu && setActiveMenu(null)}
            >
              {item.path ? (
                <a
                  href={item.path}
                  className={`py-2 flex items-center gap-1 font-medium transition-colors hover:text-[#951B80] relative ${
                    pathname === item.path ? 'text-[#951B80]' : ''
                  }`}
                >
                  {item.name}
                  {pathname === item.path && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#951B80] rounded-full" />
                  )}
                </a>
              ) : (
                <button
                  className={`py-2 flex items-center gap-1 font-medium transition-colors hover:text-[#951B80] relative ${
                    activeMenu === item.name || containsPath(item, pathname) ? 'text-[#951B80]' : ''
                  }`}
                >
                  {item.name}
                  <FiChevronDown className={`mt-0.5 text-xs transition-colors ${
                    activeMenu === item.name || containsPath(item, pathname) ? 'text-[#951B80]' : 'opacity-70'
                  }`} />
                  {containsPath(item, pathname) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#951B80] rounded-full" />
                  )}
                </button>
              )}

              {item.submenu && (
                <AnimatePresence>
                  {activeMenu === item.name && (
                    <motion.div
                      variants={menuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{ originY: 0 }}
                      className="absolute left-0 mt-2 w-64 bg-white shadow-xl border border-gray-100 rounded-md z-40 overflow-visible text-slate-900"
                    >
                      <ul className="py-2">
                        {item.submenu.map((sub) => (
                          <SubMenuItem key={sub.name} item={sub} currentPath={pathname} />
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* --- HAMBURGER BUTTON (MOBILE) --- */}
        <button 
          className="md:hidden p-2 -mr-2 focus:outline-none z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FiX className={`text-3xl ${isSolid ? 'text-slate-900' : 'text-white'}`} />
          ) : (
            <FiMenu className={`text-3xl ${isSolid ? 'text-slate-900' : 'text-white'}`} />
          )}
        </button>
      </nav>
      </div>

      {/* --- MOBILE SIDEBAR OVERLAY & MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-900/70 z-[60] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.25 }}
              className="fixed top-0 right-0 h-[100dvh] w-[85%] max-w-sm bg-white border-l border-gray-200 z-[70] md:hidden flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-bold tracking-tight text-slate-900">Paróquia</span>
                  <span className="text-xs font-bold uppercase tracking-widest -mt-1 text-[#951B80]">
                    Sermonde
                  </span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* Scrollable Nav Items */}
              <div className="flex-1 overflow-y-auto py-2">
                <nav className="flex flex-col">
                  {navItems.map((item, idx) => (
                    <MobileMenuItem key={idx} item={item} closeMenu={() => setIsMobileMenuOpen(false)} currentPath={pathname} />
                  ))}
                </nav>
              </div>

              {/* Sticky Contact Footer */}
              <div className="bg-[#41738C] text-white border-t-4 border-[#951B80] p-6 shrink-0">
                <div className="space-y-4">
                  <a href="tel:220000000" className="flex items-center gap-3 text-sm font-medium hover:text-[#951B80] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <FiPhone className="text-white" />
                    </div>
                    <span>+351 220 000 000</span>
                  </a>
                  <a href="mailto:paroquia@paroquiasermonde.pt" className="flex items-center gap-3 text-sm font-medium hover:text-[#951B80] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <FiMail className="text-white" />
                    </div>
                    <span className="truncate">paroquia@paroquiasermonde.pt</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;