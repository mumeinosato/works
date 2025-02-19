import techStackIcons from './techStackIcons';

interface Project {
  name: string;
  description: string;
  github: string;
  demo?: string;
  techStack: (keyof typeof techStackIcons)[];
  image: string;
  role: string;
}

const projects: Project[] = [
  {
    name: '制作物紹介サイト',
    description: 'このサイトです。',
    github: 'https://github.com/mumeinosato/works',
    demo: 'https://works.mtayo.net/',
    techStack: ['Next.js', 'Ant Design', 'Tailwind CSS'],
    image: '',
    role: '全般',
  },
  {
    name: 'Feedo',
    description: '旧バージョンをリニューアルしたものです。',
    github: 'https://github.com/cube5963/feedo_front',
    demo: 'https://e55c631a-45d9-4671-7295-38c7f9b35eca.mtayo.net/',
    techStack: ['Next.js', 'Nest.js', 'MUI', 'PostgreSQL'],
    image: '',
    role: 'フロントエンド:データ処理,バックエンド:全般',
  },
  {
    name: 'Discord TTS Bot',
    description: 'VOICEVOX Engineを使ったDiscordのテキスト読み上げBotです。',
    github: 'https://github.com/mumeinosato/discord-tts',
    techStack: ['TypeScript', 'PostgreSQL'],
    image: '',
    role: '全般',
  },
  {
    name: 'ハカセジェネレーター',
    description: 'Discord BotのApplication Commandを使い「教えて!ハカセ」の画像を生成するBotです。',
    github: 'https://github.com/mumeinosato/hakase',
    demo: '',
    techStack: ['TypeScript'],
    image: '',
    role: '全般',
  },
  {
    name: '修学旅行のしおり',
    description: '自分たちが通っている高校の修学旅行で使用した、自分たちのクラスのためのしおりです。公開用にデータは仮のものに置き換えています。',
    github: 'https://github.com/cube5963/school_trip_public',
    demo: '',
    techStack: ['Remix', 'Tailwind CSS', 'MariaDB'],
    image: '',
    role: 'データ処理全般',
  },
  {
    name: '時刻表アプリ',
    description: 'Androidで動く電車の時刻表アプリです。学校の最寄り駅の時刻表を調べる時間を短縮するために作成しました。',
    github: 'https://github.com/mumeinosato/timetable',
    demo: '',
    techStack: ['Flutter'],
    image: '',
    role: '全般',
  },
  {
    name: 'Feedo（旧バージョン）',
    description: '同級生がStartUpWeekend静岡7thに参加した際に制作支援したアプリです。',
    github: 'https://github.com/cube5963/feedo_old',
    demo: 'https://ca55bad4-a542-2735-89ab-670a991e0c24.mtayo.net/',
    techStack: ['Nuxt.js', 'Nest.js', 'MariaDB'],
    image: '',
    role: 'フロントエンド:データ処理,バックエンド:全般',
  },
  {
    name: 'しかのこのこのここしたんたん',
    description: 'マルコフ連鎖を使用し「しかのこのこのここしたんたん」を生成します。',
    github: 'https://github.com/mumeinosato/shikanoko-nokonoko-koshitantan',
    demo: '',
    techStack: ['TypeScript'],
    image: '',
    role: '全般',
  }
];

export default projects;