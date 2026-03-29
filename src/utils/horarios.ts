import type { Missa, DiaSemana } from '../types';

const DIA_SEMANA_INDEX: Record<DiaSemana, number> = {
  Domingo: 0,
  Segunda: 1,
  Terça: 2,
  Quarta: 3,
  Quinta: 4,
  Sexta: 5,
  Sábado: 6,
};

/** Devolve a próxima missa a partir de "agora", ou null se não encontrar. */
export function getProximaMissa(missas: Missa[]): Missa | null {
  if (missas.length === 0) return null;

  const agora = new Date();
  const diaAtual = agora.getDay();        // 0 = domingo
  const horasAtual = agora.getHours();
  const minutosAtual = agora.getMinutes();
  const minutosAgora = horasAtual * 60 + minutosAtual;

  // Ordenar por (dia relativo à semana, hora)
  const candidatas = missas
    .map((m) => {
      const diaMissa = DIA_SEMANA_INDEX[m.diaSemana];
      const [h, min] = m.hora.split(':').map(Number);
      const minutosMissa = h * 60 + min;

      // Quantos dias faltam até esta missa (0 = hoje)
      let diasAte = (diaMissa - diaAtual + 7) % 7;

      // Se é hoje mas já passou a hora, empurra para a semana seguinte
      if (diasAte === 0 && minutosMissa <= minutosAgora) {
        diasAte = 7;
      }

      return { missa: m, diasAte, minutosMissa };
    })
    .sort((a, b) => {
      if (a.diasAte !== b.diasAte) return a.diasAte - b.diasAte;
      return a.minutosMissa - b.minutosMissa;
    });

  return candidatas[0]?.missa ?? null;
}

/** Formata "10:00" → "10h00" */
export function formatarHora(hora: string): string {
  return hora.replace(':', 'h');
}
