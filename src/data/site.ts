// ---------------------------------------------------------------
// All of your portfolio content lives in this one file.
// Replace the placeholders below; the pages update automatically.
// ---------------------------------------------------------------

export const site = {
  name: 'Samiya Asif',
  monogram: 'SA',
  role: 'Mobile app developer & designer',
  email: 'samiyaasif12@gmail.com',
  location: 'Tirana, Albania',
  // Hero style on the home page: 'showcase' (interactive phones) or 'art' (your illustration)
  heroStyle: 'art' as 'showcase' | 'art',
  // Shows the little "Hero style" switch at the bottom. Set to false (and delete
  // src/pages/hero-art.astro) once you've picked one.
  showHeroSwitcher: false,
  socials: [
    { label: 'GitHub', href: 'https://github.com/Sumiyaasif' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sumaiya-asif-65259428b/' },
    { label: 'CodePen', href: 'https://codepen.io/sumaiya_liri' },
    // { label: 'Behance', href: 'https://behance.net/' },
    // { label: 'Instagram', href: 'https://instagram.com/' },
  ],
};

export type App = {
  slug: string;
  name: string;
  tagline: string;
  color: string; // accent used for the phone mockup placeholder
  playStore: string;
  role: string;
  stack: string[];
  year: string;
  // Paths to screenshots in /public/images/apps/... (leave empty to show the placeholder screen)
  screenshots: string[];
  problem: string;
  solution: string;
  result: string;
};

export const apps: App[] = [
  {
    slug: 'trivia-knowledge-booster',
    name: 'Trivia Knowledge Booster Quiz',
    tagline: 'Trivia Knowledge Booster: an Android quiz game I designed and built, with image and advanced trivia modes, daily streaks, a hint-coin reward system and seven unlockable themes, all playable offline.',
    color: '#3D2FD6',
    playStore: 'https://play.google.com/store/apps/details?id=com.codelady.triviaknowledgebooster',
    role: 'Development, UI/UX design, Launch',
    stack: ['Android', 'Flutter/Dart','Kotlin', 'Firebase', 'AdMob', 'Google Play Console'],
    year: '2025',
    screenshots: ["/images/apps/trivia-1.jpeg", "/images/apps/trivia-2.jpeg", "/images/apps/trivia-3.jpeg", "/images/apps/trivia-4.jpeg", "/images/apps/trivia-5.jpeg", "/images/apps/trivia-6.jpeg"],
   problem: `Most trivia apps either feel like a school test or turn into pure luck, and many need an internet connection to play. I wanted a quiz game that is actually educational but still fun enough to come back to every day. The hard part was behind the scenes: gathering hundreds of accurate questions across many categories, making sure players don't keep seeing the same ones, and keeping the game fast and stable on many different Android phones.`,

   solution: `I built an offline trivia game with three ways to play: Image Trivia for visual clues, Advanced Trivia for harder general knowledge, and a Daily Challenge that gives a reason to return. I organised the question bank by category and difficulty, with logic that avoids repeats. To keep it fun rather than stressful, I added a reward loop with gold, hint coins that remove wrong answers, collectible owl avatars and seven unlockable themes. I kept the UI clean and simple, and tested and debugged on multiple devices to remove crashes before release.`,

   result: `Trivia Knowledge Booster is live on Google Play and works fully offline, so it can be played anywhere, from commutes to family game nights. It covers more than a dozen categories, from science and history to technology and movies, and has a progression system that lets players move forward without pressure.`,
  },
  {
    slug: 'quran-audio-reading-offline',
    name: 'Quran, Audio & Reading Offline',
    tagline: 'An Android app I built so people can read and listen to the full Quran offline, with a clean, distraction-free design and no data collection.',
    color: '#0F7B62',
    playStore: 'https://play.google.com/store/apps/details?id=com.codelady.quran',
    role: 'Development, UI/UX design, Launch', 
    stack: ['Flutter/Dart', 'Kotlin', 'Play Console'],
    year: '2025',
    screenshots: ["/images/apps/quran-1.jpg", "/images/apps/quran-2.jpg","/images/apps/quran-3.jpg", "/images/apps/quran-4.jpeg", "/images/apps/quran-5.jpg"],
   problem: `Many Quran apps are cluttered with ads, need an internet connection, or make it hard to focus on reading and reflection. I wanted a calm, distraction-free app for both reading and listening that works anywhere. Building it was a challenge in its own right: finding a reliable Quran data source took a long time, displaying Arabic correctly alongside other languages was tricky, and getting timers and notifications to work reliably on Android took a lot of trial and error.`,

solution: `I built a free Quran app with no ads, using an authentic Mushaf layout so the pages look the way readers expect. Every surah has audio recitation, and both reading and listening work fully offline. I added English translation and tafsir, bookmarks for favourite ayahs and pages, and a player that remembers where you last stopped, and to help users in memorizing the Quran, I added a progress tracking feature. The app's interface can be shown in more than one language, and timers and notifications help users keep a daily reading habit. The design stays simple and clean, so nothing gets in the way of the Quran itself.`,

result: `The app is live on Google Play, completely free and ad-free. It gives users the full Quran with recitation, translation and tafsir in one place, available anytime, even without a connection.`,
  },
];

export type DesignWork = {
  title: string;
  category: 'Graphic design' | 'Art';
  image: string; // path in /public
  ratio: 'tall' | 'wide' | 'square';
};

// Graphic design and art share one section; visitors can filter between them.
export const design: DesignWork[] = [
  { title: 'Lemons & Lantern', category: 'Art', image: '/images/design/lemons-and-lantern.webp', ratio: 'tall' },
  { title: 'Logo designs', category: 'Graphic design', image: '/images/design/logo-designs.webp', ratio: 'tall' },
  { title: 'Mosque of Córdoba', category: 'Art', image: '/images/design/cordoba-mosque.webp', ratio: 'tall' },
  { title: 'Web course poster', category: 'Graphic design', image: '/images/design/web-course-poster.webp', ratio: 'tall' },
  { title: 'Floating tree', category: 'Graphic design', image: '/images/design/floating-tree.webp', ratio: 'tall' },
  { title: 'Alhambra', category: 'Art', image: '/images/design/alhambra.webp', ratio: 'tall' },
  { title: 'Menu design', category: 'Graphic design', image: '/images/design/menu.png', ratio: 'tall' },
  { title: 'Butterfly', category: 'Art', image: '/images/design/butterfly.webp', ratio: 'tall' },
  { title: 'Honeybee', category: 'Art', image: '/images/design/honeybee.webp', ratio: 'tall' },
  { title: 'Ramadan Mubarak', category: 'Art', image: '/images/design/calligraphy-ramadan.webp', ratio: 'tall' },
  { title: 'Hubb (Love)', category: 'Art', image: '/images/design/calligraphy-love.webp', ratio: 'tall' },
  { title: 'Allah', category: 'Art', image: '/images/design/calligraphy-allah.webp', ratio: 'tall' },

];

export type WebProject = {
  name: string;
  description: string;
  stack: string;
  href: string;
  image: string; // homepage screenshot in /public/images/web/ (1680×800)
};

export const web: WebProject[] = [
  {
    name: 'Furry Friends',
    description: 'An online pet store with services, pricing and sign-up.',
    stack: 'HTML, CSS, JS',
    href: 'https://furryfriends-sumaiya.netlify.app/',
    image: '/images/web/furry-friends.webp',
  },
  {
    name: 'Lara Beauty',
    description: 'A beauty salon site with services and booking.',
    stack: 'HTML, CSS, JS',
    href: 'https://lara-beauty-sumi.netlify.app/',
    image: '/images/web/lara-beauty.webp',
  },
];

export const skills = {
  Apps: ['Flutter/Dart','Kotlin','Jetpack Compose', 'Firebase', 'Play Console', 'AdMob', 'Google Analytics', 'Crashlytics', 'Github'],
  Design: ['Figma', 'UI/UX', 'Illustrator', 'Photoshop', 'Procreate', 'Graphic design','Canva', 'Calligraphy', 'Typography', 'Branding', 'Poster design', 'Logo design'],
  Web: ['HTML/CSS/JS', 'Astro', 'React', 'Responsive design'],
};