import React, { useState } from "react";
import { FaIcons, FaRobot, FaCode, FaServer, FaPalette, FaPrint, FaDatabase, FaLink, FaFile, FaGraduationCap } from "react-icons/fa";
import "./QuickLinks.css";
import logo from "/quick2.png";

const QuickLinks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = [
    {
      title: "Icons & Graphics",
      icon: <FaIcons />,
      links: [
        { name: "LottieFiles", url: "https://lottiefiles.com/" },
        { name: "Flaticon", url: "https://www.flaticon.com/" },
        { name: "FontAwesome", url: "https://fontawesome.com/" },
        { name: "Icons8", url: "https://icons8.com/" },
        { name: "Heroicons", url: "https://heroicons.com/" },
        { name: "SVG Repo", url: "https://www.svgrepo.com/" },
        { name: "Remix Icons", url: "https://remixicon.com/" },
        { name: "UnDraw", url: "https://undraw.co/" },
      ],
    },
    {
      title: "AI Tools & Assistants",
      icon: <FaRobot />,
      links: [
        { name: "ChatGPT", url: "https://chatgpt.com/" },
        { name: "Claude AI", url: "https://claude.ai/" },
        { name: "Deepseek AI", url: "https://www.deepseek.com/" },
        { name: "Bolt AI", url: "https://bolt.new/" },
        { name: "Suno AI", url: "https://www.suno.com/" },
        { name: "Leonardo AI", url: "https://leonardo.ai/" },
        { name: "Runway ML", url: "https://runwayml.com/" },
        { name: "ElevenLabs", url: "https://elevenlabs.io/" },
      ],
    },
    {
      title: "Deployment & Hosting",
      icon: <FaServer />,
      links: [
        { name: "Vercel", url: "https://vercel.com/" },
        { name: "Netlify", url: "https://www.netlify.com/" },
        { name: "Render", url: "https://render.com/" },
        { name: "Railway", url: "https://railway.app/" },
        { name: "Firebase", url: "https://firebase.google.com/" },
        { name: "Heroku", url: "https://www.heroku.com/" },
        { name: "DigitalOcean", url: "https://www.digitalocean.com/" },
        { name: "Cloudflare Pages", url: "https://pages.cloudflare.com/" },
      ],
    },
    {
      title: "Developer Tools",
      icon: <FaCode />,
      links: [
        { name: "GitHub", url: "https://github.com/" },
        { name: "Stack Overflow", url: "https://stackoverflow.com/" },
        { name: "CodeSandbox", url: "https://codesandbox.io/" },
        { name: "JSFiddle", url: "https://jsfiddle.net/" },
        { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
        { name: "Postman", url: "https://www.postman.com/" },
        { name: "Insomnia", url: "https://insomnia.rest/" },
        { name: "Swagger UI", url: "https://swagger.io/tools/swagger-ui/" },
      ],
    },
    {
      title: "UI Libraries & Design",
      icon: <FaPalette />,
      links: [
        { name: "Material-UI", url: "https://mui.com/" },
        { name: "Ant Design", url: "https://ant.design/" },
        { name: "Shadcn", url: "https://ui.shadcn.com/" },
        { name: "Chakra UI", url: "https://chakra-ui.com/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
        { name: "Bootstrap", url: "https://getbootstrap.com/" },
        { name: "Radix UI", url: "https://www.radix-ui.com/" },
        { name: "DaisyUI", url: "https://daisyui.com/" },
        { name: "React Spring", url: "https://react-spring.dev/" },
      ],
    },
    {
      title: "Printing & Formatting",
      icon: <FaPrint />,
      links: [
        { name: "PrintJS", url: "https://printjs.crabbly.com/" },
        { name: "PDF.js", url: "https://mozilla.github.io/pdf.js/" },
        { name: "React-to-Print", url: "https://www.npmjs.com/package/react-to-print" },
      ],
    },
    {
      title: "Databases & Backend",
      icon: <FaDatabase />,
      links: [
        { name: "MongoDB", url: "https://www.mongodb.com/" },
        { name: "Firebase Firestore", url: "https://firebase.google.com/" },
        { name: "Supabase", url: "https://supabase.com/" },
        { name: "PlanetScale", url: "https://planetscale.com/" },
        { name: "Redis", url: "https://redis.io/" },
      ],
    },
    {
      title: "Productivity & Utilities",
      icon: <FaLink />,
      links: [
        { name: "Excalidraw", url: "https://excalidraw.com/" },
        { name: "Figma", url: "https://www.figma.com/" },
        { name: "Notion", url: "https://www.notion.so/" },
        { name: "Trello", url: "https://trello.com/" },
        { name: "Asana", url: "https://asana.com/" },
        { name: "Obsidian", url: "https://obsidian.md/" },
        { name: "JSON Formatter", url: "https://jsonformatter.org/" },
        { name: "Regex101", url: "https://regex101.com/" },
        { name: "Lorem Ipsum Generator", url: "https://loremipsum.io/" },
      ],
    },
    {
      title: "File & Data Tools",
      icon: <FaFile />,
      links: [
        { name: "Remove.bg", url: "https://www.remove.bg/" },
        { name: "TinyPNG", url: "https://tinypng.com/" },
        { name: "CloudConvert", url: "https://cloudconvert.com/" },
        { name: "iLovePDF", url: "https://www.ilovepdf.com/" },
      ],
    },
    {
      title: "Learning Platforms",
      icon: <FaGraduationCap />,
      links: [
        { name: "Udemy", url: "https://udemy.com/" },
        { name: "Coursera", url: "https://coursera.org/" },
        { name: "Khan Academy", url: "https://khanacademy.org/" },
        { name: "edX", url: "https://edx.org/" },
        { name: "Frontend Masters", url: "https://frontendmasters.com/" },
      ],
    },
  ];

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCategoryClick = (title) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  const filteredCategories = searchTerm 
    ? categories.map(category => ({
        ...category,
        links: category.links.filter(link => 
          link.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.links.length > 0)
    : categories;

  return (
    <div className="app-container">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="Quick Links Logo" width="50" height="50" />
          <h1 style={{color:"#FFFFFF"}}>Quick Links</h1>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="categories-grid">
        {filteredCategories.map((category) => (
          <div key={category.title} className="category-card">
            <div 
              className="category-header"
              onClick={() => handleCategoryClick(category.title)}
            >
              <span className="category-icon">{category.icon}</span>
              <h2>{category.title}</h2>
              <span className="link-count">{category.links.length}</span>
            </div>
            <div className={`links-container ${expandedCategory === category.title ? 'expanded' : ''}`}>
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