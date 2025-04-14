
import { useEffect, useState } from "react";

const posts = [
  {
    category: "Babybauch",
    imageUrl: "https://drive.google.com/uc?id=1HsKH5f05oOJZFZUfT6VZEKGNGhWtQvz6&export=view",
    text: "So viel Liebe auf so kleinem Raum 💛 Die ersten Wochen mit einem neuen Leben sind voller Magie.",
    quote: "Das Leben findet einen Weg. – Jurassic Park",
    hashtags: "#babybauch #babybauchshooting #familienglück #wismar #fotoliebe"
  },
  {
    category: "Portrait",
    imageUrl: "https://drive.google.com/uc?id=1eY66slCpsX3zznvL2dJGc5n2TIK2qc11&export=view",
    text: "Ein gutes Portrait zeigt nicht nur ein Gesicht – sondern eine Geschichte.",
    quote: "Ich bin der König der Welt! – Titanic",
    hashtags: "#portraitfotografie #authentisch #charakterstark #fotografieauswismar"
  },
  {
    category: "Familie",
    imageUrl: "https://drive.google.com/uc?id=16Le3nZvEpYdD9udnsC4sELiU-C4JKsYQ&export=view",
    text: "Zusammen ist man weniger allein ❤️ Familienzeit ist die schönste Zeit.",
    quote: "Ohana heißt Familie. Familie heißt, niemand wird zurückgelassen. – Lilo & Stitch",
    hashtags: "#familienfotos #familienzeit #zusammenhalt #wismar #fotoliebe"
  }
];

const getTodayPost = () => {
  const day = new Date().getDay();
  if (![1, 3, 5].includes(day)) return null;
  const index = day % posts.length;
  return posts[index];
};

export default function Home() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(getTodayPost());
  }, []);

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
        </div>
      </div>
    </div>
  );
}
