import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ParoquiaPage from './pages/ParoquiaPage';
import SacramentosPage from './pages/SacramentosPage';
import GruposPage from './pages/GruposPage';
import AgendaPage from './pages/AgendaPage';
import ContactosPage from './pages/ContactosPage';

// A Paróquia
import BoasVindasPage from './pages/AParoquia/Apresentacao/BoasVindasPage';
import ParocoPage from './pages/AParoquia/Apresentacao/ParocoPage';

// Ação Pastoral
import ConselhoPastoralParoquial from './pages/AcaoPastoral/ConselhoPastoralParoquial';
import ConselhoEconomicoPage from './pages/AcaoPastoral/ConselhoEconomicoPage';
import CatequesePage from './pages/AcaoPastoral/PastoralEvangelizadora/CatequesePage';
import CatequeseFuncionamentoPage from './pages/AcaoPastoral/PastoralEvangelizadora/CatequeseFuncionamentoPage';
import CatequeseDocumentosPage from './pages/AcaoPastoral/PastoralEvangelizadora/CatequeseDocumentosPage';
import BatismoPage from './pages/AcaoPastoral/PastoralEvangelizadora/BatismoPage';
import BatismoEquipaPage from './pages/AcaoPastoral/PastoralEvangelizadora/BatismoEquipaPage';
import JuventudePage from './pages/AcaoPastoral/PastoralEvangelizadora/JuventudePage';
import FamiliaPage from './pages/AcaoPastoral/PastoralEvangelizadora/FamiliaPage';
import ApostoladoOracaoPage from './pages/AcaoPastoral/PastoralEvangelizadora/ApostoladoOracaoPage';
import ApostoladoOracaoFuncionamentoPage from './pages/AcaoPastoral/PastoralEvangelizadora/ApostoladoOracaoFuncionamentoPage';
import SacristoesMinistrantes from './pages/AcaoPastoral/PastoralLiturgica/SacristoesMinistrantes';
import AcolitosPage from './pages/AcaoPastoral/PastoralLiturgica/AcolitosPage';
import LeitoresPage from './pages/AcaoPastoral/PastoralLiturgica/LeitoresPage';
import LeitoresFuncionamentoPage from './pages/AcaoPastoral/PastoralLiturgica/LeitoresFuncionamentoPage';
import GruposCoraisPage from './pages/AcaoPastoral/PastoralLiturgica/GruposCoraisPage';
import PastoralSaudePage from './pages/AcaoPastoral/PastoralSocioCaritativa/PastoralSaudePage';
import SaoVicentePauloPage from './pages/AcaoPastoral/PastoralSocioCaritativa/SaoVicentePauloPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          {/* A Paróquia */}
          <Route path="/paroquia/boas-vindas" element={<BoasVindasPage />} />
          <Route path="/paroquia/paroco" element={<ParocoPage />} />
          <Route path="/paroquia/historia" element={<ParoquiaPage />} />
          <Route path="/paroquia/espacos" element={<ParoquiaPage />} />

          {/* Ação Pastoral */}
          <Route path="/paroquia/conselho-pastoral" element={<ConselhoPastoralParoquial />} />
          <Route path="/paroquia/conselho-economico" element={<ConselhoEconomicoPage />} />

          {/* Pastoral Evangelizadora */}
          <Route path="/pastoral/catequese" element={<CatequesePage />} />
          <Route path="/pastoral/catequese/funcionamento" element={<CatequeseFuncionamentoPage />} />
          <Route path="/pastoral/catequese/documentos" element={<CatequeseDocumentosPage />} />
          <Route path="/sacramentos/batismo" element={<BatismoPage />} />
          <Route path="/sacramentos/batismo/equipa" element={<BatismoEquipaPage />} />
          <Route path="/pastoral/juventude" element={<JuventudePage />} />
          <Route path="/pastoral/familia" element={<FamiliaPage />} />
          <Route path="/pastoral/apostolado-oracao" element={<ApostoladoOracaoPage />} />
          <Route path="/pastoral/apostolado-oracao/funcionamento" element={<ApostoladoOracaoFuncionamentoPage />} />

          {/* Pastoral Litúrgica */}
          <Route path="/pastoral/sacristoes" element={<SacristoesMinistrantes />} />
          <Route path="/pastoral/acolitos" element={<AcolitosPage />} />
          <Route path="/pastoral/leitores" element={<LeitoresPage />} />
          <Route path="/pastoral/leitores/funcionamento" element={<LeitoresFuncionamentoPage />} />
          <Route path="/pastoral/grupos-corais" element={<GruposCoraisPage />} />

          {/* Pastoral Sócio-Caritativa */}
          <Route path="/pastoral/saude" element={<PastoralSaudePage />} />
          <Route path="/pastoral/sao-vicente-paulo" element={<SaoVicentePauloPage />} />

          {/* Outras páginas */}
          <Route path="/sacramentos" element={<SacramentosPage />} />
          <Route path="/grupos" element={<GruposPage />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/contactos" element={<ContactosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
