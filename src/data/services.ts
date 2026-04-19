import { asset } from '@/utils/asset';

export interface ServiceDetail {
  slug: string;
  title: string;
  icon: string;
  image: string;
  shortDescription: string;
  description: string;
  benefits: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'acupuntura',
    title: 'Acupuntura',
    icon: asset('/services/1.png'),
    image: asset('/services/1.png'),
    shortDescription: 'Equilibrio energetico para alivio de dores e melhora do bem-estar.',
    description:
      'A acupuntura e uma tecnica milenar que utiliza estimulos em pontos especificos do corpo para reduzir dores, equilibrar funcoes e apoiar o tratamento de tensoes fisicas e emocionais.',
    benefits: [
      'Auxilia no controle de dores cronicas e agudas',
      'Reduz estresse, ansiedade e tensao muscular',
      'Melhora a qualidade do sono e da recuperacao',
      'Contribui para equilibrio geral do organismo',
    ],
  },
  {
    slug: 'osteopatia',
    title: 'Osteopatia',
    icon: asset('/services/2.png'),
    image: asset('/services/2.png'),
    shortDescription: 'Abordagem manual para restaurar mobilidade e funcionalidade do corpo.',
    description:
      'A osteopatia avalia o corpo como um sistema integrado. Com tecnicas manuais, busca corrigir disfuncoes de mobilidade, aliviar sobrecargas e melhorar o funcionamento global.',
    benefits: [
      'Melhora mobilidade articular e postura',
      'Alivia dores lombares, cervicais e cefaleias',
      'Apoia prevencao de lesoes recorrentes',
      'Promove maior consciencia corporal',
    ],
  },
  {
    slug: 'rpg',
    title: 'RPG (Reeducacao Postural Global)',
    icon: asset('/services/3.png'),
    image: asset('/services/3.png'),
    shortDescription: 'Correcao postural personalizada com foco em alinhamento e respiracao.',
    description:
      'A RPG trabalha cadeias musculares de forma individualizada para corrigir desvios posturais, melhorar padrao respiratorio e reduzir compensacoes do dia a dia.',
    benefits: [
      'Corrige alteracoes posturais com precisao',
      'Reduz dores relacionadas a maus habitos',
      'Melhora flexibilidade e respiracao',
      'Aumenta desempenho funcional em atividades diarias',
    ],
  },
  {
    slug: 'microfisioterapia',
    title: 'Microfisioterapia',
    icon: asset('/services/4.png'),
    image: asset('/services/4.png'),
    shortDescription: 'Toque terapeutico para identificar e tratar memorias de traumas no corpo.',
    description:
      'A microfisioterapia utiliza um toque especifico e suave para localizar cicatrizes emocionais e fisicas no organismo, estimulando a autorregulacao biologica.',
    benefits: [
      'Apoia regulacao de sintomas cronicos',
      'Contribui para equilibrio fisico e emocional',
      'Estimula mecanismos naturais de recuperacao',
      'Pode complementar outros tratamentos terapeuticos',
    ],
  },
  {
    slug: 'shiatsu',
    title: 'Shiatsu',
    icon: asset('/services/5.png'),
    image: asset('/services/5.png'),
    shortDescription: 'Pressao em pontos estrategicos para aliviar tensoes e recuperar energia.',
    description:
      'O shiatsu e uma terapia manual de origem japonesa que aplica pressoes ritmadas ao longo do corpo para promover relaxamento profundo e restaurar vitalidade.',
    benefits: [
      'Diminui tensao muscular e fadiga',
      'Promove relaxamento e reducao de estresse',
      'Melhora circulacao e disposicao',
      'Auxilia no alivio de desconfortos corporais',
    ],
  },
  {
    slug: 'drenagem-linfatica',
    title: 'Drenagem Linfatica',
    icon: asset('/services/6.png'),
    image: asset('/services/6.png'),
    shortDescription: 'Tecnica suave para reduzir retencao e melhorar a circulacao linfatica.',
    description:
      'A drenagem linfatica estimula o sistema linfatico por meio de manobras suaves, ajudando no controle de edemas, eliminacao de liquidos e sensacao de leveza.',
    benefits: [
      'Reduz inchaco e retencao de liquidos',
      'Melhora circulacao e desintoxicacao natural',
      'Apoia recuperacao pos-operatoria',
      'Proporciona sensacao de bem-estar e leveza',
    ],
  },
  {
    slug: 'fisioterapia',
    title: 'Fisioterapia',
    icon: asset('/services/7.png'),
    image: asset('/services/7.png'),
    shortDescription: 'Reabilitacao funcional com protocolos personalizados para cada necessidade.',
    description:
      'A fisioterapia atua na prevencao e no tratamento de disfuncoes musculoesqueleticas, neurologicas e respiratorias, com plano terapeutico baseado em avaliacao individual.',
    benefits: [
      'Recupera movimentos e funcionalidade',
      'Diminui dor e risco de recidivas',
      'Acelera retorno seguro as atividades',
      'Fortalece o corpo com orientacao profissional',
    ],
  },
  {
    slug: 'pilates',
    title: 'Pilates',
    icon: asset('/services/8.png'),
    image: asset('/services/8.png'),
    shortDescription: 'Metodo de condicionamento com foco em controle, forca, mobilidade e postura.',
    description:
      'O pilates combina exercicios de solo e aparelhos para fortalecer o centro do corpo, melhorar postura e ampliar mobilidade de forma segura e progressiva.',
    benefits: [
      'Fortalece musculatura profunda e estabilizadora',
      'Melhora postura, equilibrio e flexibilidade',
      'Auxilia na prevencao de dores e lesoes',
      'Aumenta consciencia corporal e qualidade de vida',
    ],
  },
];
