"use client";

import '@ant-design/v5-patch-for-react-19';
import { Card } from 'antd';
import * as React from 'react';

const projects = [
  {
    name: '制作物紹介サイト',
    description: 'このサイトです。',
    github: 'https://github.com/mumeinosato/works',
    demo: 'https://works.mtayo.net/',
  },
  {
    name: 'Feedo',
    description: '旧バージョンをリニューアルしたものです。',
    github: 'https://github.com/cube5963/feedo_front',
    demo: 'https://e55c631a-45d9-4671-7295-38c7f9b35eca.mtayo.net/',
  },
  {
    name: 'Discord TTS Bot',
    description: 'VOICEVOX Engineを使ったDiscordのテキスト読み上げBotです。',
    github: 'https://github.com/mumeinosato/discord-tts',
  },
  {
    name: 'ハカセジェネレーター',
    description: 'Discord BotのApplication Commandを使い「教えて!ハカセ」の画像を生成するBotです。',
    github: 'https://github.com/mumeinosato/hakase',
    demo: '',
  },
  {
    name: '修学旅行のしおり',
    description: '自分たちが通っている高校の修学旅行で使用した、自分たちのクラスのためのしおりです。公開用にデータは仮のものに置き換えています。',
    github: 'https://github.com/cube5963/school_trip_public',
    demo: '',
  },
  {
    name: '時刻表アプリ',
    description: 'Androidで動く電車の時刻表アプリです。学校の最寄り駅の時刻表を調べる時間を短縮するために作成しました。',
    github: 'https://github.com/mumeinosato/timetable',
    demo: '',
  },
  {
    name: 'Feedo（旧バージョン）',
    description: '同級生がStartUpWeekend静岡7thに参加した際に制作支援したアプリです。',
    github: 'https://github.com/cube5963/feedo_old',
    demo: 'https://ca55bad4-a542-2735-89ab-670a991e0c24.mtayo.net/',
  },
  {
    name: 'しかのこのこのここしたんたん',
    description: 'マルコフ連鎖を使用し「しかのこのこのここしたんたん」を生成します。',
    github: 'https://github.com/mumeinosato/shikanoko-nokonoko-koshitantan',
    demo: '',
  }
];

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-8 transition-colors duration-500">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white drop-shadow-lg">Works</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.name}
            title={project.name}
            className="shadow-2xl transform transition duration-500 hover:scale-105 bg-white dark:bg-gray-800 bg-opacity-90"
          >
            <div className="flex flex-col h-full">
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline"
                >
                  GitHub Repository
                </a>
                <br />
                {project.demo && (
                  <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline"
                  >
                  Demo Page
                  </a>
                )}
                </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;