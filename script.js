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
