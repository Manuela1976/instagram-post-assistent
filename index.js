import { useEffect, useState } from "react";

const commonHashtags = "#instagood #picoftheday #potd #shootingoftheday #photo #photolove #photographer #photoshoot #photographie #photojob #ilovemyjob #wismar #rostock #schwerin #grevesmühlen #fotostudio_wismar #fotograf_wismar";

const babybauchHashtags = "#baldmami #momentewiediese #kugelrundundglücklich #pureliebe #waitingforyou #lovemylife #instamom #instastyle #lebenmitkindern #balddreifachmama #instamama #bauchbewohner #inspirepregnancy #großeschwester #momlife #schwestern #bauchgefühl #wismar #fotostudio_wismar #fotograf_wismar #wismarfotograf #picoftheday #photooftheday #shootingoftheday #beautiful #happy #photolove #photoshoot #photojob #ilovemyjob";

const animalHashtags = "#instagood #picoftheday #potd #shootingoftheday #dog #dogs #cute #pet #pets #animal #happy #funny #photographer #catsanddogs #cat #cats #beautiful #sweet #photo #photolove #animalphotographer #photoshoot #photographie #photojob #ilovemyjob #wismar #fotostudio_wismar #fotograf_wismar #wismarfotograf";

const portraitHashtags = "#fotografie #fotograf #fotoshooting #wismarfotograf #fotograf_wismar #fotostudio_manuela_pagels #fotostudio_wismar #wismar #rostock #schwerin #lübeck #grevesmühlen #fotografieren #photography #foto #kunst #fotos #portrait #photos #fashion #model #love #cute #couple #family #kids #instagood #happy #beautiful #photooftheday #like #picoftheday #ilovemyjob #photojob #photoshoot";

const posts = [
  {
    category: "Babybauch",
    imageUrl: "https://drive.google.com/uc?id=1HsKH5f05oOJZFZUfT6VZEKGNGhWtQvz6&export=view",
    text: "So viel Liebe auf so kleinem Raum 💛 Die ersten Wochen mit einem neuen Leben sind voller Magie.",
    quote: "Das Leben findet einen Weg. – Jurassic Park",
    hashtags: `#babybauch #babybauchshooting #familienglück #wismar #fotoliebe ${babybauchHashtags}`
  },
  {
    category: "Portrait",
    imageUrl: "https://drive.google.com/uc?id=1eY66slCpsX3zznvL2dJGc5n2TIK2qc11&export=view",
    text: "Ein gutes Portrait zeigt nicht nur ein Gesicht – sondern eine Geschichte.",
    quote: "Ich bin der König der Welt! – Titanic",
    hashtags: `#portraitfotografie #authentisch #charakterstark #fotografieauswismar #fotografie #fotograf #fotoshooting #wismarfotograf #fotograf_wismar #fotostudio_manuela_pagels #fotostudio_wismar #wismar #rostock #schwerin #lübeck #grevesmühlen #fotografieren #photography #foto #kunst #fotos #portrait #photos #fashion #model #love #cute #couple #family #kids #instagood #happy #beautiful #photooftheday #like #picoftheday #ilovemyjob #photojob #photoshoot`
  },
  {
    category: "Familie",
    imageUrl: "https://drive.google.com/uc?id=16Le3nZvEpYdD9udnsC4sELiU-C4JKsYQ&export=view",
    text: "Zusammen ist man weniger allein ❤️ Familienzeit ist die schönste Zeit.",
    quote: "Ohana heißt Familie. Familie heißt, niemand wird zurückgelassen. – Lilo & Stitch",
    hashtags: `#familienfotos #familienzeit #zusammenhalt #wismar #fotoliebe ${commonHashtags}`
  },
  {
    category: "Pärchen und Freunde",
    imageUrl: "https://drive.google.com/uc?id=1BUxQi5318ixyGQmbNrf36YTFJMHZoJH-&export=view",
    text: "Freundschaft + Kamera = Lieblingsbilder 💛 Ob Liebe oder Lachen – echte Verbindungen sieht man einfach.",
    quote: "Ich sehe was, was du nicht siehst – und das bist du. – Die fabelhafte Welt der Amélie",
    hashtags: `#freundschaft #pärchenshooting #bffgoals #wismar #fotoliebe ${commonHashtags}`
  },
  {
    category: "Bewerbungsfotos und Businessportraits",
    imageUrl: "https://drive.google.com/uc?id=1xTyG0g7s3uWO6BXwV7d-ecWr1VWWobPZ&export=view",
    text: "Kompetenz hat ein Gesicht – und das darf man ruhig sehen. Professionell, sympathisch und echt.",
    quote: "Dress for the job you want, not the job you have. – Der Teufel trägt Prada",
    hashtags: `#bewerbungsfoto #businessportrait #selbstbewusst #wismar #authentisch ${commonHashtags}`
  },
  {
    category: "Tiere",
    imageUrl: "https://drive.google.com/uc?id=1hDh2TIc-izRJ3f9adX02CS-aIw1cSprU&export=view",
    text: "Ob wuschelig, schnurrend oder mit Schlappohren – tierisch gute Fotos gehen immer 🐾",
    quote: "Man kann auch ohne Hund leben – aber es lohnt sich nicht. – Heinz Rühmann",
    hashtags: `#tierfoto #haustier #fellnase ${animalHashtags}`
  }
];

const getTodayPost = () => {
  const now = new Date();
  const localDay = new Date(now.getTime() - now.getTimezoneOffset() * 60000).getDay();

  if (![1, 3, 5].includes(localDay)) return null;

  // Freitag = immer Familie
  if (localDay === 5) {
    const familyPost = posts.find(p => p.category === "Familie");
    return familyPost || null;
  }

  // An anderen Tagen: Zufallspost
  const randomIndex = Math.floor(Math.random() * posts.length);
  return posts[randomIndex];
};

export default function Home() {
  const [post, setPost] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPost(getTodayPost());
  }, []);

  const copyToClipboard = () => {
    if (!post) return;
    const fullText = `${post.text}\n\n„${post.quote}“\n\n${post.hashtags}`;
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!post) {
    return <div style={{ padding: 20, textAlign: "center", color: "#888" }}>
      Heute ist kein Post-Tag. Schau Montag, Mittwoch oder Freitag wieder vorbei 👋
    </div>;
  }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <div style={{ border: "1px solid #eee", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
        <img src={post.imageUrl} alt={post.category} style={{ width: "100%", height: 300, objectFit: "cover" }} />
        <div style={{ padding: 20 }}>
          <h2 style={{ fontSize: 20, fontWeight: "bold" }}>{post.category}</h2>
          <p style={{ marginTop: 10 }}>{post.text}</p>
          <p style={{ fontStyle: "italic", fontSize: 14, color: "#666", marginTop: 10 }}>„{post.quote}“</p>
          <p style={{ fontSize: 14, color: "#999", marginTop: 10 }}>{post.hashtags}</p>
          <button onClick={copyToClipboard} style={{ marginTop: 20, padding: "10px 20px", borderRadius: 8, backgroundColor: "#111", color: "#fff", border: "none", cursor: "pointer" }}>
            {copied ? "✔️ Kopiert!" : "📋 Text kopieren"}
          </button>
        </div>
      </div>
    </div>
  );
}
