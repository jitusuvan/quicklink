import React from "react";
import {
  FaFilm,
  FaRobot,
  FaImage,
  FaIcons,
  FaCode,
  FaGoogle,
  FaMusic,
  FaGlobe,
  FaGamepad,
  FaBook,
  FaNewspaper,
  FaTools,
} from "react-icons/fa";
import "./QuickLinks.css";
import logo from "/quick2.png";
const QuickLinks = () => {
  const categories = [
    {
      title: "Entertainment",
      icon: <FaFilm />,
      links: [
        { name: "Netflix", url: "https://netflix.com" },
        { name: "YouTube", url: "https://youtube.com" },
        { name: "Prime Video", url: "https://primevideo.com" },
        { name: "Disney+", url: "https://disneyplus.com" },
        { name: "Hulu", url: "https://hulu.com" },
      ],
    },
    {
      title: "AI Tools",
      icon: <FaRobot />,
      links: [
        { name: "ChatGPT", url: "https://chat.openai.com" },
        { name: "Midjourney", url: "https://midjourney.com" },
        { name: "Hugging Face", url: "https://huggingface.co" },
        { name: "Leonardo AI", url: "https://leonardo.ai" },
        { name: "Runway ML", url: "https://runwayml.com" },
      ],
    },
    {
      title: "Image Resources",
      icon: <FaImage />,
      links: [
        { name: "Unsplash", url: "https://unsplash.com" },
        { name: "Pexels", url: "https://pexels.com" },
        { name: "Pixabay", url: "https://pixabay.com" },
        { name: "Freepik", url: "https://freepik.com" },
        { name: "Canva", url: "https://canva.com" },
      ],
    },
    {
      title: "Icons",
      icon: <FaIcons />,
      links: [
        { name: "Font Awesome", url: "https://fontawesome.com" },
        { name: "Flaticon", url: "https://flaticon.com" },
        { name: "Icons8", url: "https://icons8.com" },
        { name: "Material Icons", url: "https://fonts.google.com/icons" },
      ],
    },
    {
      title: "Developer Tools",
      icon: <FaCode />,
      links: [
        { name: "GitHub", url: "https://github.com" },
        { name: "Stack Overflow", url: "https://stackoverflow.com" },
        { name: "CodePen", url: "https://codepen.io" },
        { name: "JSFiddle", url: "https://jsfiddle.net" },
        { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
      ],
    },


    {
      title: "MP3 Music",
      icon: <FaMusic />,
      links: [
        { name: "Spotify", url: "https://spotify.com" },
        { name: "SoundCloud", url: "https://soundcloud.com" },
        { name: "Apple Music", url: "https://music.apple.com" },
        { name: "Amazon Music", url: "https://music.amazon.com" },
        { name: "YouTube Music", url: "https://music.youtube.com" },
      ],
    },
    
    {
      title: "E-Learning",
      icon: <FaBook />,
      links: [
        { name: "Udemy", url: "https://udemy.com" },
        { name: "Coursera", url: "https://coursera.org" },
        { name: "Khan Academy", url: "https://khanacademy.org" },
        { name: "edX", url: "https://edx.org" },
      ],
    },
    
    {
        title: "IT Tools",
        icon: <FaTools />,
        links: [
          { name: "Image Converter", url: "https://image-converter.com" },
          { name: "Image Reducer", url: "https://reduceimages.com" },
          { name: "Background Remover", url: "https://remove.bg" },
          { name: "PDF Converter", url: "https://ilovepdf.com" },
        ],
      },
  ];

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="app-container">
      <div style={{ display: "flex",justifyContent:"center", alignItems: "center", gap: "10px" }}>
        <img src={logo} alt="Quick Links Logo" width="50" height="50" />
        <h1>Quick Links</h1>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.title} className="category-card">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h2>{category.title}</h2>
            </div>
            <div className="links-container">
              {category.links.map((link) => (
                <button
                  key={link.name}
                  className="link-button"
                  onClick={() => handleClick(link.url)}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
