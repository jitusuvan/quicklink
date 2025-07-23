import React, { useState } from "react";
import { FaIcons, FaRobot, FaCode, FaServer, FaPalette, FaPrint, FaDatabase, FaLink, FaFile, FaGraduationCap } from "react-icons/fa";
import "./QuickLinks.css";
import logo from "/Devdecks_App_Logo_with_Vibrant_Contrast-removebg-preview (1).png";

const QuickLinks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [

    {
      title: "AI Code Assistants",
      icon: <FaCode />,
      color: "#9D50BB",
      links: [
        { name: "ChatGPT", url: "https://chatgpt.com/" },
    { name: "Claude AI", url: "https://claude.ai/" },
    { name: "Perplexity AI", url: "https://www.perplexity.ai/" },
    { name: "Gemini", url: "https://gemini.google.com/" },
    { name: "Suno AI", url: "https://www.suno.com/" },
    { name: "Leonardo AI", url: "https://leonardo.ai/" },
    { name: "Runway ML", url: "https://runwayml.com/" },
    { name: "Midjourney", url: "https://www.midjourney.com/" },
    { name: "Phind", url: "https://www.phind.com/" },
    { name: "DeepSeek AI", url: "https://www.deepseek.com/" },
    { name: "Bolt AI", url: "https://bolt.new/" },
    { name: "ElevenLabs", url: "https://elevenlabs.io/" },
    { name: "Cursor AI", url: "https://www.cursor.so/" },
    { name: "Blackbox AI", url: "https://www.useblackbox.io/" },
    { name: "v0.dev", url: "https://v0.dev/" },
      ],
    },
    {
      title: "UI Generators & Builders",
      icon: <FaPalette />,
      color: "#FF7E5F",
      links: [
        { name: "v0.dev", url: "https://v0.dev/" },
        { name: "Builder.io", url: "https://www.builder.io/" },
        { name: "Shuffle UI", url: "https://shuffle.dev/" },
        { name: "Reddy ai", url: "https://readdy.ai/" },
        { name: "Figma to Code", url: "https://figma-to-code.com/" },
        { name: "CodeMyUI", url: "https://codemyui.com/" },
        { name: "UIverse", url: "https://uiverse.io/" },
        { name: "HyperUI", url: "https://www.hyperui.dev/" },
        { name: "Tailwind Components", url: "https://tailwindcomponents.com/" },
      ],
    },
    {
      title: "Deployment & Hosting",
      icon: <FaServer />,
      color: "#43cea2", // green
      links: [
        { name: "Vercel", url: "https://vercel.com/" },
        { name: "Netlify", url: "https://www.netlify.com/" },
        { name: "Render", url: "https://render.com/" },
        { name: "Railway", url: "https://railway.app/" },
        { name: "Firebase", url: "https://firebase.google.com/" },
        { name: "Heroku", url: "https://www.heroku.com/" },
        { name: "DigitalOcean", url: "https://www.digitalocean.com/" },
        { name: "Cloudflare Pages", url: "https://pages.cloudflare.com/" },
        { name: "Surge", url: "https://surge.sh/" },
        { name: "GitHub Pages", url: "https://pages.github.com/" },
        { name: "Glitch", url: "https://glitch.com/" },
        { name: "Kinsta", url: "https://kinsta.com/" },
      ],
    },
    {
      title: "Developer Tools",
      icon: <FaCode />,
      color: "#fc5c7d", // pink
      links: [
        { name: "GitHub", url: "https://github.com/" },
        { name: "Stack Overflow", url: "https://stackoverflow.com/" },
        { name: "CodeSandbox", url: "https://codesandbox.io/" },
        { name: "JSFiddle", url: "https://jsfiddle.net/" },
        { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
        { name: "Postman", url: "https://www.postman.com/" },
        { name: "Insomnia", url: "https://insomnia.rest/" },
        { name: "Swagger UI", url: "https://swagger.io/tools/swagger-ui/" },
        { name: "Replit", url: "https://replit.com/" },
        { name: "Gitpod", url: "https://www.gitpod.io/" },
        { name: "StackBlitz", url: "https://stackblitz.com/" },
        { name: "Codespaces", url: "https://github.com/features/codespaces" },
        { name: "Mocky", url: "https://mocky.io/" },
        { name: "Beeceptor", url: "https://beeceptor.com/" },
        { name: "ReqRes", url: "https://reqres.in/" },
        { name: "MockAPI", url: "https://mockapi.io/" },
      ],
    },
    {
      title: "Testing Tools",
      icon: <FaCode />,
      color: "#c94b4b",
      links: [
        { name: "Cypress", url: "https://www.cypress.io/" },
        { name: "Playwright", url: "https://playwright.dev/" },
        { name: "Jest", url: "https://jestjs.io/" },
        { name: "Testing Library", url: "https://testing-library.com/" },
        { name: "Mocha", url: "https://mochajs.org/" },
        { name: "Chai", url: "https://www.chaijs.com/" },
        { name: "Vitest", url: "https://vitest.dev/" },
      ]
    },    
    {
      title: "Icons & Graphics",
      icon: <FaIcons />,
      color: "#6a82fb", // blue-purple
      links: [
        { name: "LottieFiles", url: "https://lottiefiles.com/" },
        { name: "Flaticon", url: "https://www.flaticon.com/" },
        { name: "FontAwesome", url: "https://fontawesome.com/" },
        { name: "Icons8", url: "https://icons8.com/" },
        { name: "Heroicons", url: "https://heroicons.com/" },
        { name: "SVG Repo", url: "https://www.svgrepo.com/" },
        { name: "Remix Icons", url: "https://remixicon.com/" },
        { name: "UnDraw", url: "https://undraw.co/" },
        { name: "IconScout", url: "https://iconscout.com/" },
        { name: "Lordicon", url: "https://lordicon.com/" },
        { name: "Iconmonstr", url: "https://iconmonstr.com/" },
        { name: "SVGBox", url: "https://svgbox.net/" },
        { name: "Iconshock", url: "https://www.iconshock.com/" },
        { name: "Noun Project", url: "https://thenounproject.com/" },
        { name: "Hero Patterns", url: "https://heropatterns.com/" },
        { name: "Iconfinder", url: "https://www.iconfinder.com/" },

      ],
    },
    {
      title: "UI Libraries & Design",
      icon: <FaPalette />,
      color: "#11998e", // teal
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
        { name: "Framer Motion", url: "https://www.framer.com/motion/" },
        { name: "React Beautiful DnD", url: "https://github.com/atlassian/react-beautiful-dnd" },
        { name: "React Suite", url: "https://rsuitejs.com/" },
        { name: "Lenis", url: "https://lenis.darkroom.engineering/" },
      ],
    },
    {
      title: "Printing & Formatting",
      icon: <FaPrint />,
      color: "#f953c6", // magenta
      links: [
        { name: "PrintJS", url: "https://printjs.crabbly.com/" },
        { name: "PDF.js", url: "https://mozilla.github.io/pdf.js/" },
        { name: "React-to-Print", url: "https://www.npmjs.com/package/react-to-print" },
        { name: "DocuSign", url: "https://www.docusign.com/" },
        { name: "DocSpring", url: "https://docspring.com/" },
        { name: "PDFShift", url: "https://pdfshift.io/" },
      ],
    },
    {
      title: "Databases & Backend",
      icon: <FaDatabase />,
      color: "#43e97b", // green
      links: [
        { name: "MongoDB", url: "https://www.mongodb.com/" },
        { name: "Firebase Firestore", url: "https://firebase.google.com/" },
        { name: "Supabase", url: "https://supabase.com/" },
        { name: "PlanetScale", url: "https://planetscale.com/" },
        { name: "Redis", url: "https://redis.io/" },
        { name: "Neon", url: "https://neon.tech/" },
        { name: "Prisma", url: "https://www.prisma.io/" },
        { name: "Hasura", url: "https://hasura.io/" },
        { name: "FaunaDB", url: "https://fauna.com/" },
      ],
    },
    {
      title: "Auth & Security",
      icon: <FaLink />,
      color: "#FF416C",
      links: [
        { name: "Auth0", url: "https://auth0.com/" },
        { name: "Firebase Auth", url: "https://firebase.google.com/products/auth" },
        { name: "Clerk.dev", url: "https://clerk.dev/" },
        { name: "SuperTokens", url: "https://supertokens.com/" },
        { name: "Passkeys.dev", url: "https://passkeys.dev/" },
        { name: "JWT.io", url: "https://jwt.io/" },
      ],
    },
    {
      title: "Productivity & Utilities",
      icon: <FaLink />,
      color: "#f77062", // coral
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
        { name: "Miro", url: "https://miro.com/" },
        { name: "ClickUp", url: "https://clickup.com/" },
        { name: "Slack", url: "https://slack.com/" },
      ],
    },
    {
      title: "File & Data Tools",
      icon: <FaFile />,
      color: "#36d1c4", // cyan
      links: [
        { name: "Remove.bg", url: "https://www.remove.bg/" },
        { name: "TinyPNG", url: "https://tinypng.com/" },
        { name: "CloudConvert", url: "https://cloudconvert.com/" },
        { name: "iLovePDF", url: "https://www.ilovepdf.com/" },
        { name: "Zamzar", url: "https://www.zamzar.com/" },
        { name: "Smallpdf", url: "https://smallpdf.com/" },
        { name: "PDF24 Tools", url: "https://tools.pdf24.org/en/" },
        { name: "Convertio", url: "https://convertio.co/" },
        { name: "PineTools", url: "https://pinetools.com/" },
        { name: "Online-Convert", url: "https://www.online-convert.com/" },
        { name: "Edit PDF", url: "https://www.pdfescape.com/" },
        { name: "Merge PDF", url: "https://combinepdf.com/" },
        { name: "Image Resizer", url: "https://imageresizer.com/" },
        { name: "EZGIF", url: "https://ezgif.com/" },
        { name: "ILoveIMG", url: "https://www.iloveimg.com/" },
      ],
    },
    {
      title: "Learning Platforms",
      icon: <FaGraduationCap />,
      color: "#fdc830", // yellow
      links: [
        { name: "Udemy", url: "https://udemy.com/" },
        { name: "Coursera", url: "https://coursera.org/" },
        { name: "Khan Academy", url: "https://khanacademy.org/" },
        { name: "edX", url: "https://edx.org/" },
        { name: "Frontend Masters", url: "https://frontendmasters.com/" },
        { name: "Scrimba", url: "https://scrimba.com/" },
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
        { name: "Pluralsight", url: "https://www.pluralsight.com/" },
        { name: "Egghead", url: "https://egghead.io/" },
      ],
    },
    {
      title: "APIs & Public Data",
      icon: <FaLink />,
      color: "#8fd3f4", // light blue
      links: [
        { name: "RapidAPI", url: "https://rapidapi.com/" },
        { name: "Public APIs", url: "https://public-apis.io/" },
        { name: "API List", url: "https://apilist.fun/" },
        { name: "Awesome-APIs", url: "https://github.com/Kikobeats/awesome-api" },
        { name: "OpenWeatherMap", url: "https://openweathermap.org/api" },
        { name: "NewsAPI", url: "https://newsapi.org/" },
        { name: "IP Geolocation API", url: "https://ipgeolocation.io/" },
        { name: "NASA Open APIs", url: "https://api.nasa.gov/" },
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
          <img src={logo} alt="Quick Links Logo" width="100" height="100" />
          {/* <h1 style={{ color: "#FFFFFF" }}>DevDecks</h1> */}
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
          <div
            key={category.title}
            className="category-card"
            style={{
              background: `linear-gradient(135deg, ${category.color} 0%, #232526 100%)`,
              border: `2px solid ${hoveredCategory === category.title ? category.color : "rgba(49,130,206,0.12)"}`,
              boxShadow: hoveredCategory === category.title
                ? `0 0 12px 2px ${category.color}80` // 80 = 50% opacity
                : "0 8px 32px 0 rgba(31, 38, 135, 0.18)"
            }}
            onMouseEnter={() => setHoveredCategory(category.title)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div
              className="category-header"
              onClick={() => handleCategoryClick(category.title)}
            >
              <span className={`category-icon${expandedCategory === category.title ? ' bounce' : ''}`}>{category.icon}</span>
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
