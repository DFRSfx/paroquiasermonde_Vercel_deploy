import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronDown } from 'react-icons/fi';

const STORAGE_KEY = 'cookie_consent';

interface ConsentState {
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

const defaultConsent: ConsentState = {
  preferences: false,
  statistics: false,
  marketing: false,
};

const categories = [
  {
    key: 'functional' as const,
    label: 'Funcional',
    alwaysActive: true,
    description:
      'O armazenamento ou acesso técnico é estritamente necessário para o fim legítimo de permitir a utilização de um serviço expressamente solicitado pelo utilizador.',
  },
  {
    key: 'preferences' as const,
    label: 'Preferências',
    alwaysActive: false,
    description:
      'O armazenamento ou acesso técnico é necessário para o propósito legítimo de armazenamento de preferências não solicitadas pelo utilizador.',
  },
  {
    key: 'statistics' as const,
    label: 'Estatísticas',
    alwaysActive: false,
    description:
      'O armazenamento técnico ou acesso que é usado exclusivamente para fins estatísticos anónimos.',
  },
  {
    key: 'marketing' as const,
    label: 'Marketing',
    alwaysActive: false,
    description:
      'O armazenamento ou acesso técnico é necessário para criar perfis de utilizador para enviar publicidade ou para rastrear o utilizador para fins de marketing.',
  },
];

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [consent, setConsent] = useState<ConsentState>(defaultConsent);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  const saveConsent = (accepted: ConsentState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(accepted));
    setVisible(false);
  };

  const acceptAll = () =>
    saveConsent({ preferences: true, statistics: true, marketing: true });

  const denyAll = () =>
    saveConsent({ preferences: false, statistics: false, marketing: false });

  const savePreferences = () => saveConsent(consent);

  const toggle = (key: keyof ConsentState) =>
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="cmplz-cookiebanner-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 right-4 z-[200] w-[min(420px,calc(100vw-2rem))] bg-white border border-gray-200 rounded-xl shadow-2xl text-slate-800 text-sm"
          role="dialog"
          aria-modal="true"
          aria-live="polite"
          aria-label="Gerir o Consentimento de Cookies"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-100">
            <span className="font-bold text-base text-slate-900">
              Gerir o Consentimento de Cookies
            </span>
            <button
              onClick={denyAll}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Fechar janela"
            >
              <FiX className="text-lg" />
            </button>
          </div>

          {/* Body */}
          <div className="px-5 py-4 space-y-3 max-h-[60vh] overflow-y-auto">
            <p className="text-slate-600 leading-relaxed">
              Para fornecer as melhores experiências, usamos tecnologias como cookies para
              armazenar e/ou aceder a informações do dispositivo. Consentir permite-nos
              processar dados como comportamento de navegação neste site.
            </p>

            {/* Categories — only shown when "Ver preferências" is clicked */}
            <AnimatePresence>
              {showPreferences && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1 overflow-hidden"
                >
                  {categories.map((cat) => (
                    <div key={cat.key} className="border border-gray-100 rounded-lg overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 transition-colors"
                        onClick={() =>
                          setOpenCategory(openCategory === cat.key ? null : cat.key)
                        }
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{cat.label}</span>
                          {cat.alwaysActive ? (
                            <span className="text-xs text-[#41738C] font-semibold">
                              Sempre ativo
                            </span>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggle(cat.key as keyof ConsentState);
                              }}
                              className={`relative w-9 h-5 rounded-full transition-colors ${
                                consent[cat.key as keyof ConsentState]
                                  ? 'bg-[#951B80]'
                                  : 'bg-gray-300'
                              }`}
                              aria-label={`Toggle ${cat.label}`}
                            >
                              <span
                                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                                  consent[cat.key as keyof ConsentState]
                                    ? 'translate-x-4'
                                    : 'translate-x-0'
                                }`}
                              />
                            </button>
                          )}
                        </div>
                        <FiChevronDown
                          className={`text-slate-400 transition-transform ${
                            openCategory === cat.key ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openCategory === cat.key && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.15 }}
                            className="overflow-hidden"
                          >
                            <p className="px-4 pb-3 text-slate-500 text-xs leading-relaxed">
                              {cat.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Links */}
          <div className="px-5 pb-2 flex gap-3 text-xs text-[#41738C]">
            <a href="/politica-cookies" className="hover:underline">
              Política de Cookies
            </a>
            <a href="/politica-privacidade" className="hover:underline">
              Política de Privacidade
            </a>
          </div>

          {/* Buttons */}
          <div className="px-5 pb-4 pt-1 flex flex-wrap gap-2">
            <button
              onClick={acceptAll}
              className="flex-1 min-w-[100px] bg-[#951B80] hover:bg-[#7a1569] text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Aceitar
            </button>
            <button
              onClick={denyAll}
              className="flex-1 min-w-[100px] border border-gray-300 hover:bg-slate-50 text-slate-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Negar
            </button>
            {showPreferences ? (
              <button
                onClick={savePreferences}
                className="w-full border border-[#951B80] text-[#951B80] hover:bg-purple-50 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
              >
                Guardar preferências
              </button>
            ) : (
              <button
                onClick={() => setShowPreferences(true)}
                className="w-full border border-gray-300 hover:bg-slate-50 text-slate-600 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
              >
                Ver preferências
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
