import React, { useState } from "react";
import {
  FaIcons,
  FaRobot,
  FaCode,
  FaServer,
  FaPalette,
  FaPrint,
  FaDatabase,
  FaLink,
  FaFile,
  FaGraduationCap,
} from "react-icons/fa";
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

      links: [
        { name: "Cypress", url: "https://www.cypress.io/" },
        { name: "Playwright", url: "https://playwright.dev/" },
        { name: "Jest", url: "https://jestjs.io/" },
        { name: "Testing Library", url: "https://testing-library.com/" },
        { name: "Mocha", url: "https://mochajs.org/" },
        { name: "Chai", url: "https://www.chaijs.com/" },
        { name: "Vitest", url: "https://vitest.dev/" },
      ],
    },
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
        {
          name: "React Beautiful DnD",
          url: "https://github.com/atlassian/react-beautiful-dnd",
        },
        { name: "React Suite", url: "https://rsuitejs.com/" },
        { name: "Lenis", url: "https://lenis.darkroom.engineering/" },
      ],
    },
    {
      title: "Printing & Formatting",
      icon: <FaPrint />,

      links: [
        { name: "PrintJS", url: "https://printjs.crabbly.com/" },
        { name: "PDF.js", url: "https://mozilla.github.io/pdf.js/" },
        {
          name: "React-to-Print",
          url: "https://www.npmjs.com/package/react-to-print",
        },
        { name: "DocuSign", url: "https://www.docusign.com/" },
        { name: "DocSpring", url: "https://docspring.com/" },
        { name: "PDFShift", url: "https://pdfshift.io/" },
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
        { name: "Neon", url: "https://neon.tech/" },
        { name: "Prisma", url: "https://www.prisma.io/" },
        { name: "Hasura", url: "https://hasura.io/" },
        { name: "FaunaDB", url: "https://fauna.com/" },
      ],
    },
    {
      title: "Auth & Security",
      icon: <FaLink />,

      links: [
        { name: "Auth0", url: "https://auth0.com/" },
        {
          name: "Firebase Auth",
          url: "https://firebase.google.com/products/auth",
        },
        { name: "Clerk.dev", url: "https://clerk.dev/" },
        { name: "SuperTokens", url: "https://supertokens.com/" },
        { name: "Passkeys.dev", url: "https://passkeys.dev/" },
        { name: "JWT.io", url: "https://jwt.io/" },
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
        { name: "Miro", url: "https://miro.com/" },
        { name: "ClickUp", url: "https://clickup.com/" },
        { name: "Slack", url: "https://slack.com/" },
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

      links: [
        { name: "RapidAPI", url: "https://rapidapi.com/" },
        { name: "Public APIs", url: "https://public-apis.io/" },
        { name: "API List", url: "https://apilist.fun/" },
        {
          name: "Awesome-APIs",
          url: "https://github.com/Kikobeats/awesome-api",
        },
        { name: "OpenWeatherMap", url: "https://openweathermap.org/api" },
        { name: "NewsAPI", url: "https://newsapi.org/" },
        { name: "IP Geolocation API", url: "https://ipgeolocation.io/" },
        { name: "NASA Open APIs", url: "https://api.nasa.gov/" },
      ],
    },
    {
      title: "Analytics & Monitoring",
      icon: <FaCode />,

      links: [
        { name: "Google Analytics", url: "https://analytics.google.com/" },
        { name: "Mixpanel", url: "https://mixpanel.com/" },
        { name: "Hotjar", url: "https://www.hotjar.com/" },
        { name: "Amplitude", url: "https://amplitude.com/" },
        { name: "Segment", url: "https://segment.com/" },
        { name: "Plausible", url: "https://plausible.io/" },
        { name: "Fathom Analytics", url: "https://usefathom.com/" },
        { name: "Matomo", url: "https://matomo.org/" },
        { name: "Sentry", url: "https://sentry.io/" },
        { name: "LogRocket", url: "https://logrocket.com/" },
      ],
    },
    {
      title: "E-commerce Tools",
      icon: <FaLink />,

      links: [
        { name: "Shopify", url: "https://www.shopify.com/" },
        { name: "WooCommerce", url: "https://woocommerce.com/" },
        { name: "Stripe", url: "https://stripe.com/" },
        { name: "PayPal", url: "https://www.paypal.com/" },
        { name: "Square", url: "https://squareup.com/" },
        { name: "BigCommerce", url: "https://www.bigcommerce.com/" },
        { name: "Magento", url: "https://magento.com/" },
        { name: "Gumroad", url: "https://gumroad.com/" },
        { name: "Snipcart", url: "https://snipcart.com/" },
        { name: "Ecwid", url: "https://www.ecwid.com/" },
      ],
    },
    {
      title: "Marketing & SEO",
      icon: <FaLink />,

      links: [
        {
          name: "Google Search Console",
          url: "https://search.google.com/search-console",
        },
        { name: "SEMrush", url: "https://www.semrush.com/" },
        { name: "Ahrefs", url: "https://ahrefs.com/" },
        { name: "Moz", url: "https://moz.com/" },
        { name: "Yoast SEO", url: "https://yoast.com/" },
        { name: "Buffer", url: "https://buffer.com/" },
        { name: "Hootsuite", url: "https://hootsuite.com/" },
        { name: "Canva", url: "https://www.canva.com/" },
        { name: "Mailchimp", url: "https://mailchimp.com/" },
        { name: "ConvertKit", url: "https://convertkit.com/" },
      ],
    },
    {
      title: "DevOps & CI/CD",
      icon: <FaCode />,

      links: [
        { name: "GitHub Actions", url: "https://github.com/features/actions" },
        { name: "GitLab CI/CD", url: "https://docs.gitlab.com/ee/ci/" },
        { name: "Jenkins", url: "https://www.jenkins.io/" },
        { name: "CircleCI", url: "https://circleci.com/" },
        { name: "Travis CI", url: "https://travis-ci.org/" },
        { name: "Docker Hub", url: "https://hub.docker.com/" },
        { name: "Kubernetes", url: "https://kubernetes.io/" },
        { name: "Terraform", url: "https://www.terraform.io/" },
        { name: "Ansible", url: "https://www.ansible.com/" },
        { name: "AWS Console", url: "https://console.aws.amazon.com/" },
        { name: "Azure DevOps", url: "https://dev.azure.com/" },
        { name: "GCP Console", url: "https://console.cloud.google.com/" },
        { name: "Pulumi", url: "https://www.pulumi.com/" },
        { name: "Helm", url: "https://helm.sh/" },
        { name: "ArgoCD", url: "https://argoproj.github.io/cd/" },
        { name: "Flux", url: "https://fluxcd.io/" },
        { name: "Prometheus", url: "https://prometheus.io/" },
        { name: "Grafana", url: "https://grafana.com/" },
        { name: "Datadog", url: "https://www.datadoghq.com/" },
        { name: "New Relic", url: "https://newrelic.com/" },
      ],
    },
    {
      title: "Mobile Development",
      icon: <FaCode />,

      links: [
        { name: "React Native", url: "https://reactnative.dev/" },
        { name: "Flutter", url: "https://flutter.dev/" },
        { name: "Ionic", url: "https://ionicframework.com/" },
        { name: "NativeScript", url: "https://nativescript.org/" },
        { name: "Expo", url: "https://expo.dev/" },
        { name: "Xamarin", url: "https://dotnet.microsoft.com/apps/xamarin" },
        { name: "Swift", url: "https://swift.org/" },
        { name: "Kotlin", url: "https://kotlinlang.org/" },
        { name: "Android Studio", url: "https://developer.android.com/studio" },
        { name: "Xcode", url: "https://developer.apple.com/xcode/" },
        {
          name: "App Store Connect",
          url: "https://appstoreconnect.apple.com/",
        },
        { name: "Google Play Console", url: "https://play.google.com/console" },
        {
          name: "Firebase App Distribution",
          url: "https://firebase.google.com/products/app-distribution",
        },
        { name: "TestFlight", url: "https://developer.apple.com/testflight/" },
        { name: "Appium", url: "http://appium.io/" },
        { name: "Detox", url: "https://wix.github.io/Detox/" },
      ],
    },
    {
      title: "Game Development",
      icon: <FaCode />,

      links: [
        { name: "Unity", url: "https://unity.com/" },
        { name: "Unreal Engine", url: "https://www.unrealengine.com/" },
        { name: "Godot", url: "https://godotengine.org/" },
        { name: "GameMaker Studio", url: "https://gamemaker.io/" },
        { name: "Construct", url: "https://www.construct.net/" },
        { name: "Phaser", url: "https://phaser.io/" },
        { name: "Three.js", url: "https://threejs.org/" },
        { name: "Babylon.js", url: "https://www.babylonjs.com/" },
        { name: "A-Frame", url: "https://aframe.io/" },
        { name: "itch.io", url: "https://itch.io/" },
        { name: "Steamworks", url: "https://partner.steamgames.com/" },
        { name: "Epic Games Store", url: "https://dev.epicgames.com/portal/" },
        { name: "Unity Asset Store", url: "https://assetstore.unity.com/" },
        {
          name: "Unreal Marketplace",
          url: "https://www.unrealengine.com/marketplace",
        },
        { name: "Blender", url: "https://www.blender.org/" },
        {
          name: "Maya",
          url: "https://www.autodesk.com/products/maya/overview",
        },
      ],
    },
    {
      title: "Blockchain & Web3",
      icon: <FaLink />,

      links: [
        { name: "Ethereum", url: "https://ethereum.org/" },
        { name: "Solidity", url: "https://soliditylang.org/" },
        { name: "Web3.js", url: "https://web3js.readthedocs.io/" },
        { name: "Ethers.js", url: "https://docs.ethers.io/" },
        { name: "Hardhat", url: "https://hardhat.org/" },
        { name: "Truffle", url: "https://www.trufflesuite.com/" },
        { name: "Ganache", url: "https://www.trufflesuite.com/ganache" },
        { name: "OpenZeppelin", url: "https://openzeppelin.com/" },
        { name: "Remix IDE", url: "https://remix.ethereum.org/" },
        { name: "MetaMask", url: "https://metamask.io/" },
        { name: "Alchemy", url: "https://www.alchemy.com/" },
        { name: "Infura", url: "https://infura.io/" },
        { name: "Moralis", url: "https://moralis.io/" },
        { name: "Chainlink", url: "https://chain.link/" },
        { name: "IPFS", url: "https://ipfs.io/" },
        { name: "The Graph", url: "https://thegraph.com/" },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: <FaRobot />,

      links: [
        { name: "TensorFlow", url: "https://www.tensorflow.org/" },
        { name: "PyTorch", url: "https://pytorch.org/" },
        { name: "Keras", url: "https://keras.io/" },
        { name: "Scikit-learn", url: "https://scikit-learn.org/" },
        { name: "Hugging Face", url: "https://huggingface.co/" },
        { name: "OpenAI API", url: "https://openai.com/api/" },
        { name: "Google Colab", url: "https://colab.research.google.com/" },
        { name: "Kaggle", url: "https://www.kaggle.com/" },
        { name: "Weights & Biases", url: "https://wandb.ai/site" },
        { name: "MLflow", url: "https://mlflow.org/" },
        { name: "Jupyter", url: "https://jupyter.org/" },
        { name: "NumPy", url: "https://numpy.org/" },
        { name: "Pandas", url: "https://pandas.pydata.org/" },
        { name: "Matplotlib", url: "https://matplotlib.org/" },
        { name: "Seaborn", url: "https://seaborn.pydata.org/" },
        { name: "Streamlit", url: "https://streamlit.io/" },
      ],
    },
    {
      title: "Cloud Services",
      icon: <FaServer />,

      links: [
        { name: "AWS", url: "https://aws.amazon.com/" },
        { name: "Google Cloud", url: "https://cloud.google.com/" },
        { name: "Microsoft Azure", url: "https://azure.microsoft.com/" },
        { name: "DigitalOcean", url: "https://www.digitalocean.com/" },
        { name: "Linode", url: "https://www.linode.com/" },
        { name: "Vultr", url: "https://www.vultr.com/" },
        { name: "Heroku", url: "https://www.heroku.com/" },
        { name: "Railway", url: "https://railway.app/" },
        { name: "Supabase", url: "https://supabase.com/" },
        { name: "Vercel", url: "https://vercel.com/" },
        { name: "Netlify", url: "https://www.netlify.com/" },
        { name: "Cloudflare", url: "https://www.cloudflare.com/" },
        { name: "AWS Lambda", url: "https://aws.amazon.com/lambda/" },
        {
          name: "Google Cloud Functions",
          url: "https://cloud.google.com/functions",
        },
        {
          name: "Azure Functions",
          url: "https://azure.microsoft.com/en-us/products/functions",
        },
        { name: "Cloud Run", url: "https://cloud.google.com/run" },
      ],
    },
    {
      title: "Design & Prototyping",
      icon: <FaPalette />,

      links: [
        { name: "Figma", url: "https://www.figma.com/" },
        { name: "Adobe XD", url: "https://www.adobe.com/products/xd.html" },
        { name: "Sketch", url: "https://www.sketch.com/" },
        { name: "InVision", url: "https://www.invisionapp.com/" },
        { name: "Marvel", url: "https://marvelapp.com/" },
        { name: "Principle", url: "https://principleformac.com/" },
        { name: "Framer", url: "https://www.framer.com/" },
        { name: "Axure RP", url: "https://www.axure.com/" },
        { name: "Balsamiq", url: "https://balsamiq.com/" },
        { name: "Lucidchart", url: "https://www.lucidchart.com/" },
        { name: "Miro", url: "https://miro.com/" },
        { name: "Whimsical", url: "https://whimsical.com/" },
        { name: "Mural", url: "https://www.mural.co/" },
        { name: "Zeplin", url: "https://zeplin.io/" },
        { name: "Abstract", url: "https://www.abstract.com/" },
        { name: "Avocode", url: "https://avocode.com/" },
      ],
    },
    {
      title: "Content Management",
      icon: <FaFile />,

      links: [
        { name: "WordPress", url: "https://wordpress.org/" },
        { name: "Drupal", url: "https://www.drupal.org/" },
        { name: "Joomla", url: "https://www.joomla.org/" },
        { name: "Strapi", url: "https://strapi.io/" },
        { name: "Contentful", url: "https://www.contentful.com/" },
        { name: "Sanity", url: "https://www.sanity.io/" },
        { name: "Prismic", url: "https://prismic.io/" },
        { name: "Ghost", url: "https://ghost.org/" },
        { name: "Netlify CMS", url: "https://www.netlifycms.org/" },
        { name: "GraphCMS", url: "https://graphcms.com/" },
        { name: "Directus", url: "https://directus.io/" },
        { name: "KeystoneJS", url: "https://keystonejs.com/" },
        { name: "Payload", url: "https://payloadcms.com/" },
        { name: "ButterCMS", url: "https://buttercms.com/" },
        { name: "Storyblok", url: "https://www.storyblok.com/" },
        { name: "Agility CMS", url: "https://agilitycms.com/" },
      ],
    },
    {
      title: "API Documentation",
      icon: <FaLink />,

      links: [
        { name: "Swagger", url: "https://swagger.io/" },
        { name: "Postman", url: "https://www.postman.com/" },
        { name: "Insomnia", url: "https://insomnia.rest/" },
        { name: "Stoplight", url: "https://stoplight.io/" },
        { name: "ReadMe", url: "https://readme.com/" },
        { name: "Redocly", url: "https://redocly.com/" },
        { name: "Docusaurus", url: "https://docusaurus.io/" },
        { name: "GitBook", url: "https://www.gitbook.com/" },
        { name: "Slate", url: "https://github.com/slatedocs/slate" },
        { name: "API Blueprint", url: "https://apiblueprint.org/" },
        { name: "RAML", url: "https://raml.org/" },
        { name: "OpenAPI", url: "https://www.openapis.org/" },
        { name: "GraphQL", url: "https://graphql.org/" },
        { name: "Apollo GraphQL", url: "https://www.apollographql.com/" },
        { name: "Hasura", url: "https://hasura.io/" },
        { name: "PostGraphile", url: "https://www.graphile.org/postgraphile/" },
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
    ? categories
        .map((category) => ({
          ...category,
          links: category.links.filter((link) =>
            link.name.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }))
        .filter((category) => category.links.length > 0)
    : categories;

  return (
    <div className="app-container">
      <div className="categories-grid">
        {filteredCategories.map((category) => (
          <div
            key={category.title}
            className="category-card"
            style={{
              background:
                hoveredCategory === category.title
                  ? `linear-gradient(135deg, ${category.color} )`
                  : `linear-gradient(135deg, #ffffff )`,

              border:
                hoveredCategory === category.title
                  ? `2px solid ${category.color}`
                  : "2px solid rgba(49,130,206,0.12)",
            }}
            onMouseEnter={() => setHoveredCategory(category.title)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div
              className="category-header"
              onClick={() => handleCategoryClick(category.title)}
            >
              <span
                className={`category-icon${
                  expandedCategory === category.title ? " bounce" : ""
                }`}
              >
                {category.icon}
              </span>
              <h2>{category.title}</h2>
              <span className="link-count">{category.links.length}</span>
            </div>
            <div
              className={`links-container ${
                expandedCategory === category.title ? "expanded" : ""
              }`}
            >
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
