// ===== script.js =====

(function() {
  // Данные продуктов с подробными описаниями и характеристиками
  const products = [
    { 
      title: "ИНФРАСКАН 3151", 
      shortDesc: "Инфракрасный анализатор для зерна и масличных. Быстрый анализ без реактивов.", 
      price: "2 550 000",
      mainImage: "assets/1-1.jpg",
      images: [
        "assets/1-1.jpg",
        "assets/1-2.jpg",
        "assets/1-3.jpg"
      ],
      details: "Анализирует широкий спектр показателей: белок, влага, количество и качество клейковины (ИДК), жир/масличность, водопоглотительная способность и др. Встроенный информационно-вычислительный комплекс позволяет разрабатывать сложные калибровочные уравнения.",
      features: [
        "Спектральный диапазон: 1400–2500 нм",
        "Время анализа: до 2 минут",
        "Память до 1 млн результатов",
        "Самотестирование при каждом запуске",
        "Универсальная кювета",
        "Калибровки для оценки влажности и белка в цельном зерне",
        "Возможность расчёта аминокислотного состава",
        "Погрешность соответствует ГОСТ",
        "Габариты: 530×370×590 мм",
        "Масса: 30 кг"
      ]
    },
    { 
      title: "Анализатор САПФИР", 
      shortDesc: "Определение показателей качества: белок, влага, жир, клетчатка.", 
      price: "2 530 000",
      mainImage: "assets/2-1.jpg",
      images: [
        "assets/2-1.jpg",
        "assets/2-2.jpg",
        "assets/2-3.jpg"
      ],
      details: "Прибор реализует метод оптико-компьютерной диагностики. Получает изображение каждого отдельного объекта в видимом и ближнем инфракрасном диапазоне. Анализ осуществляется с помощью искусственной нейронной сети, что минимизирует влияние человеческого фактора.",
      features: [
        "Время анализа пробы 50 г: до 300 сек",
        "Автоматическое определение массы 1000 зёрен",
        "Влажность анализируемого зерна: до 25%",
        "Архивирование результатов",
        "Простой пользовательский интерфейс",
        "Лёгкая очистка",
        "Потребляемая мощность: 100 Вт",
        "Габариты: 550×450×700 мм",
        "Масса: 40 кг",
        "Срок службы: 5 лет"
      ]
    },
    { 
      title: "Сушильный шкаф АСЭШ 8-1", 
      shortDesc: "Лабораторная сушка, термостатирование, нагрев до 250°C.", 
      price: "239 000",
      mainImage: "assets/3-1.jpg",
      images: [
        "assets/3-1.jpg",
        "assets/3-2.jpg",
        "assets/3-3.jpg"
      ],
      details: "Реализует термогравиметрический метод определения влаги. Сушильная камера состоит из 8 независимых ячеек общей вместимостью 16 бюкс. Зарегистрирован в Госреестре средств измерений №58526-14.",
      features: [
        "Диапазон измерений влаги: 0.5–80%",
        "Диапазон температур: 45–160°C",
        "Погрешность поддержания температуры: ±2°C",
        "Абсолютная погрешность: ±0.5%",
        "4 независимые секции с отдельными дверцами",
        "Встроенные таймеры со звуковым сигналом",
        "Выход на режим: 30 минут",
        "Потребляемая мощность: 1200 Вт",
        "Габариты: 260×240×570 мм",
        "Масса: 23.6 кг"
      ]
    },
    { 
      title: "Мельница ВЬЮГА 3М", 
      shortDesc: "Лабораторная мельница для размола проб зерна.", 
      price: "269 000",
      mainImage: "assets/4-1.jpg",
      images: [
        "assets/4-1.jpg",
        "assets/4-2.jpg",
        "assets/4-3.jpg"
      ],
      details: "Предназначена для подготовки проб при определении влажности, белка, жира, клетчатки. Два программируемых режима: «Подсолнечник» (для масличных) и «Зерновые. Корма». Входит в состав установки АСЭШ-8.",
      features: [
        "Объём чашки: 260 мл",
        "Производительность: 1.6 кг/час",
        "Время размола 50 г: 15–20 сек",
        "Скорость вращения: 5000–25000 об/мин",
        "Минимальная навеска: 25 г",
        "Максимальная навеска: 70 г",
        "Потребляемая мощность: 1050 Вт",
        "Габариты: 290×190×470 мм",
        "Масса: 11 кг",
        "Уровень шума: 65–70 дБ"
      ]
    },
    { 
      title: "Белизномер БАРС", 
      shortDesc: "Определение белизны муки и зернопродуктов.", 
      price: "205 000",
      mainImage: "assets/5-1.jpg",
      images: [
        "assets/5-1.jpg",
        "assets/5-2.jpg",
        "assets/5-3.jpg"
      ],
      details: "Принцип работы основан на измерении зонального коэффициента отражения муки. Двухканальная конструкция позволяет проводить параллельные измерения одновременно. Зарегистрирован в Госреестре средств измерений №78409-20.",
      features: [
        "Диапазон измерения индекса белизны: 72–86%",
        "Абсолютная погрешность: ≤1%",
        "Спектральный диапазон: 510–580 нм",
        "Время измерения: до 20 сек",
        "Автоматическая настройка по встроенному эталону",
        "Архив на 100 измерений",
        "Электрическое прижимное устройство",
        "Потребляемая мощность: 65 Вт",
        "Габариты: 210×210×290 мм",
        "Масса: 6.3 кг"
      ]
    }
  ];

  const clients = [
    { name: "Мираторг", logo: "assets/logo-miratorg.png" },
    { name: "ЭФКО", logo: "assets/logo-efko.png" },
    { name: "Приосколье", logo: "assets/log-priskol.png" },
    { name: "ЦОКЗ", logo: "assets/logo-cokz.png" },
    { name: "ГК Доминант", logo: "assets/logo-dominant.png" },
    { name: "РК‑Премика", logo: "assets/logo-region.png" },
    { name: "Завод премиксов №1", logo: "assets/logo-zavod.png" }
  ];

  // Данные для акций
  const promos = [
    {
      title: "Трейд-ин оборудования",
      description: "Обменяйте ваше оборудование на новое с доплатой.",
      icon: "fa-exchange-alt",
      color: "#e79a27"
    },
    {
      title: "Выкуп вашего ИК",
      description: "Продайте нам ваше оборудование по выгодной цене. Быстрая оценка и оплата.",
      icon: "fa-money-bill-wave",
      color: "#e79a27"
    },
    {
      title: "ТО за 3 часа и год гарантии",
      description: "Техобслуживание за 3 часа с выездом к вам. Год гарантии!",
      icon: "fa-clock",
      color: "#e79a27"
    },
    {
      title: "Обмен старого ИК на новый",
      description: "Специальная программа обмена.",
      icon: "fa-sync-alt",
      color: "#e79a27"
    },
    {
      title: "Приезд специалиста в любую точку РФ",
      description: "Наши инженеры выезжают в любой регион России.",
      icon: "fa-map-marker-alt",
      color: "#e79a27"
    }
  ];

  // ===== РЕНДЕР КАТАЛОГА =====
  function renderCatalog() {
    const catalogGrid = document.getElementById('catalogGrid');
    if (!catalogGrid) return;

    let html = '';
    
    for (let i = 0; i < products.length; i++) {
      const p = products[i];
      html += `
        <div class="product-card" data-index="${i}">
          <div class="product-img">
            <img src="${p.mainImage}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/400x300/1e2329/e79a27?text=${encodeURIComponent(p.title)}'">
          </div>
          <div class="product-title">${p.title}</div>
          <div class="product-desc">${p.shortDesc}</div>
          <div class="product-price">${p.price} ₽</div>
          <div style="margin-top: 10px; color: var(--accent-primary);">
            <i class="fas fa-info-circle"></i> подробнее
          </div>
        </div>
      `;
    }
    
    html += `
      <div class="product-card consult-card">
        <div class="consult-title">Нужна консультация?</div>
        <div class="consult-text">Поможем подобрать оборудование под ваши задачи</div>
        <a href="https://t.me/Slewin30" target="_blank" class="btn btn--telegram">
          <i class="fab fa-telegram"></i> Написать
        </a>
      </div>
    `;
    
    catalogGrid.innerHTML = html;
  }

  // ===== РЕНДЕР КЛИЕНТОВ (БЕГУЩАЯ ЛЕНТА) =====
  function renderClients() {
    const clientsTrack = document.getElementById('clientsTrack');
    if (!clientsTrack) return;
    
    // Дублируем список для бесконечной анимации
    const allClients = [...clients, ...clients];
    
    let html = '';
    allClients.forEach(client => {
      if (client.logo) {
        html += `<span class="client-logo" style="--logo-url: url('${client.logo}')">${client.name}</span>`;
      } else {
        html += `<span class="client-logo no-logo">${client.name}</span>`;
      }
    });
    
    clientsTrack.innerHTML = html;
  }

  // ===== ФУНКЦИЯ РЕНДЕРА АКЦИЙ =====
  function renderPromos() {
    const swiperWrapper = document.querySelector('.promo-swiper .swiper-wrapper');
    if (!swiperWrapper) return;
    
    let slidesHtml = '';
    
    promos.forEach((promo, index) => {
      slidesHtml += `
        <div class="swiper-slide">
          <div class="promo-card" style="border-top: 4px solid ${promo.color}">
            <div class="promo-icon" style="background: ${promo.color}20; color: ${promo.color}">
              <i class="fas ${promo.icon}"></i>
            </div>
            <h3 class="promo-title">${promo.title}</h3>
            <p class="promo-description">${promo.description}</p>
            <a href="https://t.me/Slewin30" target="_blank" class="btn promo-btn" style="background: ${promo.color}">Узнать подробнее</a>
          </div>
        </div>
      `;
    });
    
    swiperWrapper.innerHTML = slidesHtml;
    
    initPromoSlider();
  }

  // ===== СЛАЙДЕР АКЦИЙ (SWIPER) =====
  function initPromoSlider() {
    new Swiper('.promo-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.promo-swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.promo-swiper-next',
        prevEl: '.promo-swiper-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }
    });
  }

  // ===== МОДАЛКА СО СЛАЙДЕРОМ =====
  function initModal() {
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalProductTitle');
    const modalPrice = document.getElementById('modalProductPrice');
    const modalDesc = document.getElementById('modalDesc');
    const modalFeatures = document.getElementById('modalFeatures');
    const sliderTrack = document.getElementById('sliderTrack');
    const closeModalBtn = document.getElementById('closeModal');
    const slidePrev = document.getElementById('slidePrev');
    const slideNext = document.getElementById('slideNext');
    
    let currentSlide = 0;

    function updateModal(index) {
      const p = products[index];
      modalTitle.innerText = p.title;
      modalPrice.innerText = p.price + ' ₽';
      
      // Основное описание
      modalDesc.innerText = p.details;

      // Характеристики списком
      let featuresHtml = '<ul class="modal-features-list">';
      p.features.forEach(feature => {
        featuresHtml += `<li><i class="fas fa-check-circle"></i> ${feature}</li>`;
      });
      featuresHtml += '</ul>';
      modalFeatures.innerHTML = featuresHtml;

      // Создаем слайды без подписей
      let slidesHtml = '';
      p.images.forEach((img, idx) => {
        slidesHtml += `
          <div class="slider-slide">
            <img src="${img}" alt="${p.title} - фото ${idx + 1}" onerror="this.src='https://via.placeholder.com/800x600/1e2329/e79a27?text=${encodeURIComponent(p.title)}+${idx + 1}'">
          </div>
        `;
      });
      
      sliderTrack.innerHTML = slidesHtml;
      
      currentSlide = 0;
      updateSliderPosition();
    }

    function updateSliderPosition() {
      const slides = document.querySelectorAll('#sliderTrack .slider-slide');
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
      });
    }

    // Клик по карточкам товара
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card:not(.consult-card)');
      if (card) {
        const idx = card.dataset.index;
        if (idx !== undefined) {
          updateModal(parseInt(idx));
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      }
    });

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    if (slideNext) {
      slideNext.addEventListener('click', () => {
        const slidesCount = document.querySelectorAll('#sliderTrack .slider-slide').length;
        if (slidesCount === 0) return;
        currentSlide = (currentSlide + 1) % slidesCount;
        updateSliderPosition();
      });
    }

    if (slidePrev) {
      slidePrev.addEventListener('click', () => {
        const slidesCount = document.querySelectorAll('#sliderTrack .slider-slide').length;
        if (slidesCount === 0) return;
        currentSlide = (currentSlide - 1 + slidesCount) % slidesCount;
        updateSliderPosition();
      });
    }
  }

  // ===== ГАМБУРГЕР =====
  function initBurger() {
    const burger = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');

    function closeMenu() {
      if (burger) burger.classList.remove('active');
      if (mobileMenu) mobileMenu.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    function openMenu() {
      burger.classList.add('active');
      mobileMenu.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    if (burger) {
      burger.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
          closeMenu();
        } else {
          openMenu();
        }
      });
    }

    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    window.closeMenu = closeMenu;

    document.querySelectorAll('.mobile-menu .nav__link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // ===== ПЛАВНЫЙ СКРОЛЛ =====
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#" || href === "") return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerHeight = 80;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ===== ИНИЦИАЛИЗАЦИЯ =====
  window.addEventListener('load', () => {
    renderCatalog();
    renderClients();
    renderPromos();
    initModal();
    initBurger();
    initSmoothScroll();
  });
})();