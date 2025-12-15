// i18n Translations System
const translations = {
  es: {
    // Navigation
    "nav.resume": "Resume",
    "nav.social": "Social Media",

    // Header
    "header.profileAlt": "Foto de Perfil",
    "header.summary": "Ingeniero de software en formación especializado en arquitecturas cloud y blockchain, con experiencia comprobada en el diseño y despliegue de sistemas automatizados escalables. Experto en Infrastructure as Code (Terraform), orquestación de workflows y desarrollo full-stack con JavaScript/Node.js. Dominio avanzado en AWS (EC2, Lambda, ECS), bases de datos (PostgreSQL, Redis) y protocolos Web3 para aplicaciones descentralizadas. Certificado en Avalanche Blockchain y con sólida experiencia en DevOps, CI/CD y arquitecturas serverless. Apasionado por crear soluciones innovadoras que combinan eficiencia operativa con tecnología de vanguardia.",

    // Personal
    "personal.title": "Personal",
    "personal.name": "Nombre:",
    "personal.position": "Cargo Actual:",
    "personal.positionValue": "Ingeniero de Software",
    "personal.email": "Correo:",
    "personal.location": "Dirección:",

    // Company
    "company.title": "Experiencia Empresarial",
    "company.location": "Wyoming, Estados Unidos",
    "company.website": "Sitio Web",
    "company.certificate": "Certificado LLC",

    // Skills
    "skills.title": "Habilidades",
    "skills.smartContracts": "Contratos Inteligentes",
    "skills.deployment": "Despliegue",
    "skills.configuration": "Configuración",
    "skills.integration": "Integración",
    "skills.storedProcedures": "Procedimientos Almacenados",
    "skills.administration": "Administración",
    "skills.n8nTitle": "N8N - Automatización de Flujos",

    // Languages
    "languages.title": "Idiomas",
    "languages.spanish": "Español",
    "languages.english": "Inglés",

    // Interests
    "interests.title": "Intereses",
    "interests.smartContracts": "Contratos Inteligentes",
    "interests.ai": "IA",

    // Experience
    "experience.title": "Experiencia Laboral",
    "experience.subtitle": "Experiencia laboral en formación",
    "experience.description": "Destaco en Python, Node.js y tengo dominio en el uso de Git y GitHub para control de versiones, tengo experiencia en SQL. He participado en comunidades de web3 con gobernanzas y votaciones descentralizadas por medio de plataformas de streaming, el cual se componen de un token nativo de la comunidad en el blockchain de Avalanche. En UltravioletaDAO LLC desarrollé un sistema de automatización end-to-end para Bounties, implementando N8N con PostgreSQL/Redis en EC2, bot Web3 serverless en Lambda, y aplicación full-stack con backend desacoplado. Gestioné toda la infraestructura con Terraform, logrando 100% de automatización y reducción del 70% en costos operativos.",

    // Education
    "education.title": "Educación",
    "education.highschool": "Bachiller",
    "education.software": "Ingeniería de Software",
    "education.certification": "Certificación",
    "education.blockchain": "Certificación en Blockchain",
    "education.viewCert": "→ Click para ver certificado",

    // Projects
    "projects.title": "Proyectos",
    "projects.website": "Sitio Web",
    "projects.avocaDesc": "Desarrollo de un sistema descentralizado de regulación de votaciones en conjuntos residenciales, priorizando la equidad y transparencia en la toma de decisiones, generando un impacto social respecto a la responsabilidad sobre el bien común.",
    "projects.avaxTeamTitle": "Miembro certificado del programa de Avax Team 1",
    "projects.avaxTeamDesc": "Miembro certificado del ecosistema Avalanche, con certificaciones como \"Avalanche Fundamentals\", participando activamente en la red, creando contenido como videos, concursando y ganando bounties, y desarrollando en su propia red, como el sistema de gobernanza habitacional o el sistema de apuestas $UVT, todo sobre Avalanche. Entusiasta de las novedades de la red, investigo y desarrollo sobre smart contracts L1 como el nuevo eERC-20, lo que hace de mi trabajo una pasión por el desarrollo WEB3.",
    "projects.certifiedMember": "Miembro Certificado",
    "projects.validatorTitle": "Despliegue de validador de Avalanche Con TEE",
    "projects.validatorSubtitle": "Práctica de Seguridad y Validación",
    "projects.validatorDesc": "Desplegué un validador de Avalanche con Avalanchego en WSL utilizando un Docker container para correr el validador. Se utilizó Scone SIM para realizar el entorno TEE donde se almacenaron las llaves privadas del validador. Aunque Avalanche no tiene Slashing, desplegué el entorno de pruebas TEE para hacer una práctica del despliegue.",
    "projects.bountiesTitle": "Sistema de Automatización de Bounties Web3",
    "projects.bountiesDesc": "Diseñé e implementé un sistema end-to-end de automatización de Bounties que integra N8N como orquestador de workflows, PostgreSQL y Redis en AWS EC2 para persistencia de alto rendimiento. Desarrollé un bot serverless en AWS Lambda para firmas de wallets Web3 que interactúa programáticamente con Snapshot. La solución incluye una aplicación full-stack en JavaScript con backend desacoplado en Lambda. Toda la infraestructura fue gestionada mediante Terraform (IaC), logrando automatización del 100% del flujo, reducción del 70% en costos operativos y despliegues reproducibles con CI/CD automatizado."
  },
  en: {
    // Navigation
    "nav.resume": "Resume",
    "nav.social": "Social Media",

    // Header
    "header.profileAlt": "Profile Photo",
    "header.summary": "Software engineer in training specialized in cloud and blockchain architectures, with proven experience in designing and deploying scalable automated systems. Expert in Infrastructure as Code (Terraform), workflow orchestration and full-stack development with JavaScript/Node.js. Advanced proficiency in AWS (EC2, Lambda, ECS), databases (PostgreSQL, Redis) and Web3 protocols for decentralized applications. Certified in Avalanche Blockchain with solid experience in DevOps, CI/CD and serverless architectures. Passionate about creating innovative solutions that combine operational efficiency with cutting-edge technology.",

    // Personal
    "personal.title": "Personal",
    "personal.name": "Name:",
    "personal.position": "Current Position:",
    "personal.positionValue": "Software Engineer",
    "personal.email": "Email:",
    "personal.location": "Location:",

    // Company
    "company.title": "Company Experience",
    "company.location": "Wyoming, United States",
    "company.website": "Website",
    "company.certificate": "LLC Certificate",

    // Skills
    "skills.title": "Skills",
    "skills.smartContracts": "Smart Contracts",
    "skills.deployment": "Deployment",
    "skills.configuration": "Configuration",
    "skills.integration": "Integration",
    "skills.storedProcedures": "Stored Procedures",
    "skills.administration": "Administration",
    "skills.n8nTitle": "N8N - Workflow Automation",

    // Languages
    "languages.title": "Languages",
    "languages.spanish": "Spanish",
    "languages.english": "English",

    // Interests
    "interests.title": "Interests",
    "interests.smartContracts": "Smart Contracts",
    "interests.ai": "AI",

    // Experience
    "experience.title": "Work Experience",
    "experience.subtitle": "Work experience in training",
    "experience.description": "I excel in Python, Node.js and have mastery in using Git and GitHub for version control, with experience in SQL. I have participated in web3 communities with decentralized governance and voting through streaming platforms, which consist of a native community token on the Avalanche blockchain. At UltravioletaDAO LLC I developed an end-to-end Bounty automation system, implementing N8N with PostgreSQL/Redis on EC2, serverless Web3 bot on Lambda, and full-stack application with decoupled backend. I managed all infrastructure with Terraform, achieving 100% automation and 70% reduction in operational costs.",

    // Education
    "education.title": "Education",
    "education.highschool": "High School Diploma",
    "education.software": "Software Engineering",
    "education.certification": "Certification",
    "education.blockchain": "Blockchain Certification",
    "education.viewCert": "→ Click to view certificate",

    // Projects
    "projects.title": "Projects",
    "projects.website": "Website",
    "projects.avocaDesc": "Development of a decentralized voting regulation system for residential communities, prioritizing equity and transparency in decision-making, generating social impact regarding responsibility for the common good.",
    "projects.avaxTeamTitle": "Certified member of Avax Team 1 program",
    "projects.avaxTeamDesc": "Certified member of the Avalanche ecosystem, with certifications like \"Avalanche Fundamentals\", actively participating in the network, creating content such as videos, competing and winning bounties, and developing on their own network, such as the housing governance system or the $UVT betting system, all on Avalanche. Enthusiast of network innovations, I research and develop smart contracts L1 like the new eERC-20, which makes my work a passion for WEB3 development.",
    "projects.certifiedMember": "Certified Member",
    "projects.validatorTitle": "Avalanche Validator Deployment with TEE",
    "projects.validatorSubtitle": "Security and Validation Practice",
    "projects.validatorDesc": "I deployed an Avalanche validator with Avalanchego on WSL using a Docker container to run the validator. Scone SIM was used to create the TEE environment where the validator's private keys were stored. Although Avalanche doesn't have Slashing, I deployed the TEE test environment as a deployment practice.",
    "projects.bountiesTitle": "Web3 Bounty Automation System",
    "projects.bountiesDesc": "I designed and implemented an end-to-end Bounty automation system that integrates N8N as workflow orchestrator, PostgreSQL and Redis on AWS EC2 for high-performance persistence. I developed a serverless bot on AWS Lambda for Web3 wallet signatures that programmatically interacts with Snapshot. The solution includes a full-stack JavaScript application with decoupled backend on Lambda. All infrastructure was managed through Terraform (IaC), achieving 100% flow automation, 70% reduction in operational costs and reproducible deployments with automated CI/CD."
  }
};

// i18n Class - Premium animated switcher
class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('preferredLang') || 'es';
    this.isAnimating = false;
    this.init();
  }

  init() {
    this.pill = document.querySelector('.lang-pill');
    this.buttons = document.querySelectorAll('.lang-btn');
    this.slider = document.querySelector('.lang-slider');

    this.updateUI();
    this.applyTranslations();
    this.bindEvents();
    document.documentElement.lang = this.currentLang;
  }

  bindEvents() {
    this.buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.isAnimating) return;
        const lang = e.currentTarget.getAttribute('data-lang');
        if (lang !== this.currentLang) {
          this.switchLanguage(lang);
        }
      });

      // Add hover sound effect feel with scale
      btn.addEventListener('mouseenter', () => {
        if (!btn.classList.contains('active')) {
          btn.style.transform = 'scale(1.05)';
        }
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
      });
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (e.altKey && e.key === 'l') {
        e.preventDefault();
        const newLang = this.currentLang === 'es' ? 'en' : 'es';
        this.switchLanguage(newLang);
      }
    });
  }

  switchLanguage(lang) {
    this.isAnimating = true;
    this.currentLang = lang;
    localStorage.setItem('preferredLang', lang);

    // Add pulse animation to slider
    this.slider.style.animation = 'none';
    this.slider.offsetHeight;
    this.slider.style.animation = 'gradientShift 3s ease infinite, sliderPulse 0.4s ease';

    this.updateUI();

    // Animate content change
    this.animateContent(() => {
      this.applyTranslations();
      document.documentElement.lang = lang;
    });

    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }

  updateUI() {
    // Update pill data attribute for slider position
    if (this.pill) {
      this.pill.setAttribute('data-active', this.currentLang);
    }

    // Update button states
    this.buttons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      const isActive = btnLang === this.currentLang;
      btn.classList.toggle('active', isActive);
      btn.style.transform = 'scale(1)';
    });
  }

  animateContent(callback) {
    const elements = document.querySelectorAll('[data-i18n]');

    // Fade out
    elements.forEach(el => {
      el.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
      el.style.opacity = '0';
      el.style.transform = 'translateY(-3px)';
    });

    setTimeout(() => {
      callback();

      // Fade in with stagger
      elements.forEach((el, i) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, i * 8);
      });
    }, 150);
  }

  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = translations[this.currentLang]?.[key];
      if (translation) el.textContent = translation;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      const translation = translations[this.currentLang]?.[key];
      if (translation) el.setAttribute('alt', translation);
    });
  }
}

// Initialize i18n
let i18n;
document.addEventListener("DOMContentLoaded", () => {
  i18n = new I18n();
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".fade-in");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.animation = "fadeInUp 0.6s ease forwards";
      }, index * 200);
    });
  });
  
  // Circular progress bars for languages
  const styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  
  // Spanish language - 75%
  styleEl.sheet.insertRule(`.language-progress:nth-child(1) {
    background: conic-gradient(#2d7788 0% 75%, #e0e0e0 75% 100%);
  }`, 0);
  
  // English language - 60%
  styleEl.sheet.insertRule(`.language-progress:nth-child(1) + .language-item .language-progress {
    background: conic-gradient(#2d7788 0% 60%, #e0e0e0 60% 100%);
  }`, 1);
  
  // Add any additional animations here
  const keyframesStyle = document.createElement("style");
  keyframesStyle.innerHTML = `
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  `;
  document.head.appendChild(keyframesStyle);

// Performance optimizations
document.addEventListener('DOMContentLoaded', () => {
  // Lazy load images
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => lazyImageObserver.observe(img));
  }

  // Event delegation for navigation
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.addEventListener('click', (e) => {
      const target = e.target.closest('.nav-link');
      if (target) {
        // Add active class
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        target.classList.add('active');
      }
    });
  }

  // Smooth scroll with reduced motion
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Debounce function for performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Handle window resize with debounce
  const handleResize = debounce(() => {
    // Update any layout-dependent elements
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }, 250);

  window.addEventListener('resize', handleResize, { passive: true });

  // Add loading states
  const addLoadingState = (element) => {
    if (element) {
      element.classList.add('skeleton');
      element.setAttribute('aria-busy', 'true');
    }
  };

  const removeLoadingState = (element) => {
    if (element) {
      element.classList.remove('skeleton');
      element.setAttribute('aria-busy', 'false');
    }
  };

  // Handle dynamic content loading
  const loadDynamicContent = async (url, targetElement) => {
    if (!targetElement) return;
    
    addLoadingState(targetElement);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.text();
      targetElement.innerHTML = data;
    } catch (error) {
      console.error('Error loading content:', error);
      targetElement.innerHTML = '<p>Error al cargar el contenido. Por favor, intente de nuevo.</p>';
    } finally {
      removeLoadingState(targetElement);
    }
  };

  // Initialize any dynamic content
  const dynamicContent = document.querySelector('[data-dynamic-content]');
  if (dynamicContent) {
    const contentUrl = dynamicContent.dataset.contentUrl;
    if (contentUrl) {
      loadDynamicContent(contentUrl, dynamicContent);
    }
  }
});

// Service Worker registration for offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('ServiceWorker registration successful');
    }).catch(err => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
