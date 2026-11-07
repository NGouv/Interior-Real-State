const whatsappNumber = "5511991782727";
const propertyData = [
  {
    slug: "residencial-jardim-aurora", name: "Residencial Jardim Aurora", region: "Zona Leste",
    bedrooms: 2, area: "42–48 m²*", parking: "1 vaga*", mcmv: true, price: "Entrada demonstrativa a partir de R$ 800*",
    status: "Lançamento demonstrativo", image: "photo-1460317442991-0ec209397118",
    description: "Um projeto pensado para trazer praticidade e conforto para a rotina. Conheça as possibilidades deste empreendimento demonstrativo e converse com nossa equipe sobre o seu próximo passo.",
    amenities: ["Plantas bem distribuídas", "Área de convivência", "Espaço para toda a família"],
    gallery: ["photo-1460317442991-0ec209397118", "photo-1545324418-cc1a3fa10c00", "photo-1600607687939-ce8a6c25118c"]
  },
  {
    slug: "vila-celeste-condominio", name: "Vila Celeste Condomínio", region: "Zona Norte",
    bedrooms: 2, area: "44–52 m²*", parking: "1 vaga*", mcmv: true, price: "Condições demonstrativas",
    status: "Em obras demonstrativo", image: "photo-1449158743715-0a90ebb6d2d8",
    description: "Um endereço demonstrativo que combina ambientes acolhedores e uma proposta prática para o dia a dia. Consulte a disponibilidade e as condições vigentes com um consultor.",
    amenities: ["Ambientes integrados", "Condomínio planejado", "Opções de lazer"],
    gallery: ["photo-1449158743715-0a90ebb6d2d8", "photo-1600607687920-4e2a09cf159d", "photo-1600210492486-724fe5c67fb0"]
  },
  {
    slug: "edificio-horizonte", name: "Edifício Horizonte", region: "Zona Oeste",
    bedrooms: 3, area: "68–76 m²*", parking: "1 vaga*", mcmv: false, price: "Valor demonstrativo sob consulta",
    status: "Disponibilidade demonstrativa", image: "photo-1486406146926-c627a92ad1ab",
    description: "Uma referência ilustrativa de apartamento com espaços generosos e localização na Zona Oeste. As informações apresentadas são demonstrativas e devem ser confirmadas com a equipe.",
    amenities: ["Três dormitórios", "Planta funcional", "Áreas comuns"],
    gallery: ["photo-1486406146926-c627a92ad1ab", "photo-1600607687939-ce8a6c25118c", "photo-1600210492486-724fe5c67fb0"]
  },
  {
    slug: "parque-das-palmeiras", name: "Parque das Palmeiras", region: "Zona Sul",
    bedrooms: 2, area: "43–50 m²*", parking: "1 vaga*", mcmv: true, price: "Condições demonstrativas",
    status: "Lançamento demonstrativo", image: "photo-1511818966892-d7d671e672a2",
    description: "Um projeto residencial demonstrativo com foco em bem-estar e praticidade. Converse com um consultor para entender quais opções podem fazer sentido para o seu momento.",
    amenities: ["Paisagismo", "Espaços de convivência", "Plantas versáteis"],
    gallery: ["photo-1511818966892-d7d671e672a2", "photo-1600607687920-4e2a09cf159d", "photo-1600607687939-ce8a6c25118c"]
  },
  {
    slug: "residencial-vista-verde", name: "Residencial Vista Verde", region: "Zona Leste",
    bedrooms: 3, area: "64–72 m²*", parking: "1 vaga*", mcmv: false, price: "Valor demonstrativo sob consulta",
    status: "Em obras demonstrativo", image: "photo-1464938050520-ef2270bb8ce8",
    description: "Uma opção demonstrativa para quem busca mais espaço e uma rotina confortável. Consulte a equipe para conhecer as informações atualizadas deste perfil de imóvel.",
    amenities: ["Três dormitórios", "Ambientes iluminados", "Condomínio com lazer"],
    gallery: ["photo-1464938050520-ef2270bb8ce8", "photo-1600210492486-724fe5c67fb0", "photo-1600607687939-ce8a6c25118c"]
  },
  {
    slug: "condominio-bela-vista", name: "Condomínio Bela Vista", region: "Zona Sul",
    bedrooms: 2, area: "45–53 m²*", parking: "1 vaga*", mcmv: true, price: "Entrada demonstrativa a partir de R$ 800*",
    status: "Disponibilidade demonstrativa", image: "photo-1487958449943-2429e8be8625",
    description: "Um empreendimento ilustrativo que reúne conforto e funcionalidade em uma proposta acolhedora. Consulte as condições, a disponibilidade e os detalhes antes de tomar sua decisão.",
    amenities: ["Dois dormitórios", "Área de convivência", "Plantas funcionais"],
    gallery: ["photo-1487958449943-2429e8be8625", "photo-1545324418-cc1a3fa10c00", "photo-1600607687920-4e2a09cf159d"]
  }
];

const imageUrl = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const waLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
const defaultMessage = "Olá! Conheci a Interior Real State pelo site e gostaria de conversar sobre um apartamento.";
const whatsappIcon = () => '<svg class="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

function propertyCard(property) {
  return `<a class="property-card" href="/imoveis/${property.slug}" aria-label="Conhecer ${property.name}">
    <div class="property-photo"><img src="${imageUrl(property.image, 700)}" alt="Imagem ilustrativa de empreendimento residencial" loading="lazy">
      ${property.mcmv ? '<span class="badge">Minha Casa Minha Vida</span>' : ""}
    </div>
    <div class="property-card-content">
      <span class="eyebrow">${property.region} · ${property.status}</span>
      <h3>${property.name}</h3>
      <div class="property-meta"><span>${property.bedrooms} dormitórios</span><span>${property.area}</span><span>${property.parking}</span></div>
      <p class="property-price">${property.price}</p>
      <span class="text-link">Conhecer imóvel <span aria-hidden="true">↗</span></span>
    </div>
  </a>`;
}

function header(contactMessage = defaultMessage) {
  return `<header class="site-header"><div class="nav-wrap">
    <a class="brand" href="/" aria-label="Interior Real State - início"><span class="brand-name">Interior Real State</span></a>
    <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="main-nav" aria-label="Navegação principal">
      <a href="/">Início</a><a href="/imoveis">Imóveis</a><a href="/minha-casa-minha-vida">Minha Casa Minha Vida</a><a href="/#sobre">Sobre</a><a href="/#contato">Contato</a>
    </nav>
    <a class="button button-gold nav-cta" href="${waLink(contactMessage)}" target="_blank" rel="noopener noreferrer">${whatsappIcon()} Fale pelo WhatsApp</a>
  </div></header>`;
}

function footer(contactMessage = defaultMessage) {
  return `<footer class="site-footer"><div class="container footer-grid">
    <div><a class="brand footer-brand" href="/"><span class="brand-name">Interior Real State</span></a>
      <p>Orientação próxima para você descobrir as possibilidades de conquistar seu primeiro apartamento.</p></div>
    <div><h3>Navegue</h3><a href="/">Início</a><a href="/imoveis">Imóveis</a><a href="/minha-casa-minha-vida">Minha Casa Minha Vida</a><a href="/#sobre">Sobre nós</a></div>
    <div><h3>Vamos conversar?</h3><a href="${waLink(contactMessage)}" target="_blank" rel="noopener noreferrer">${whatsappIcon()} WhatsApp · (11) 99178-2727</a><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a><span>São Paulo · SP</span></div>
  </div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} Interior Real State</span><span>Prévia demonstrativa. Imóveis, fotos, valores e condições são ilustrativos.</span></div></footer>`;
}

const homeFaqs = [
  ["A simulação tem algum custo?", "Não. A conversa inicial e a simulação são gratuitas e não representam aprovação de crédito ou garantia de condições."],
  ["Posso utilizar meu FGTS?", "Em algumas situações, o FGTS pode ser utilizado conforme as regras vigentes e a análise do caso. Converse com um consultor para entender as possibilidades."],
  ["Como funciona o Minha Casa Minha Vida?", "O programa pode oferecer condições para a compra da casa própria a famílias elegíveis. As regras e condições dependem da legislação vigente e da análise individual."],
  ["Preciso dar entrada para comprar?", "A necessidade e o valor da entrada variam conforme o imóvel, a análise de crédito e as condições disponíveis. Nenhum valor demonstrativo é uma oferta garantida."],
  ["Como faço para conhecer um apartamento?", "Entre em contato pelo WhatsApp. Nossa equipe pode conversar sobre as opções e orientar os próximos passos para uma visita, conforme disponibilidade."]
];

function faq(items = homeFaqs) {
  return `<div class="faq-list">${items.map(([question, answer]) => `<details class="faq-item"><summary>${question}<span aria-hidden="true">+</span></summary><p>${answer}</p></details>`).join("")}</div>`;
}

function homePage() {
  const featured = propertyData.slice(0, 3);
  return `<main>
    <section class="hero home-hero"><div class="hero-image" role="img" aria-label="Vista panorâmica de São Paulo e seus edifícios residenciais"></div><div class="container hero-content">
      <p class="eyebrow eyebrow-light"><span class="eyebrow-line"></span> SEU NOVO CAPÍTULO COMEÇA AQUI</p>
      <h1>O próximo endereço começa com uma <em>boa conversa</em>.</h1>
      <p class="hero-copy">Encontre oportunidades para conquistar seu apartamento em São Paulo com o apoio da Interior Real State.</p>
      <div class="button-row"><a class="button button-gold" href="${waLink("Olá! Gostaria de fazer uma simulação para conquistar meu primeiro apartamento.")}" target="_blank" rel="noopener noreferrer">${whatsappIcon()} Simular pelo WhatsApp</a><a class="button button-outline" href="/imoveis">Conhecer imóveis <span>↓</span></a></div>
      <span class="hero-note">Atendimento próximo, do primeiro passo em diante.</span>
    </div></section>

    <section class="entry-section"><div class="container entry-grid">
      <div><p class="eyebrow">UMA POSSIBILIDADE PARA COMEÇAR</p><h2>Um primeiro passo<br>que cabe nos <em>planos.</em></h2></div>
      <div class="entry-offer"><span class="entry-label">ENTRADA DEMONSTRATIVA A PARTIR DE</span><strong>R$ 800<span>*</span></strong><p>*Exemplo ilustrativo. Sujeito às condições do programa, disponibilidade e análise de crédito.</p><a class="text-link" href="/minha-casa-minha-vida">Entenda como pode funcionar <span>↗</span></a></div>
      <div class="entry-stamp">UM PASSO<br>DE CADA VEZ</div>
    </div></section>

    <section class="section featured-section"><div class="container"><div class="section-heading"><div><p class="eyebrow">OPORTUNIDADES PARA DESCOBRIR</p><h2>Seu próximo endereço<br>pode estar <em>aqui.</em></h2></div><a class="text-link" href="/imoveis">Ver todos os imóveis <span>↗</span></a></div>
      <div class="property-grid">${featured.map(propertyCard).join("")}</div>
      <p class="demo-note">*Imóveis, imagens, localizações e condições apresentados são demonstrativos.</p>
    </div></section>

    <section class="benefits-section"><div class="container"><div class="section-heading light-heading"><div><p class="eyebrow eyebrow-light">MAIS CLAREZA EM CADA ESCOLHA</p><h2>Um caminho possível,<br>com alguém ao <em>seu lado.</em></h2></div><p>Comprar o primeiro imóvel traz dúvidas. Você não precisa passar por cada etapa sem orientação.</p></div>
      <div class="benefit-grid"><article><span class="benefit-number">01</span><span class="benefit-icon">⌂</span><h3>Seu primeiro imóvel</h3><p>Descubra opções que conversam com o momento e os planos da sua família.</p></article><article><span class="benefit-number">02</span><span class="benefit-icon">◇</span><h3>Possibilidades de subsídio</h3><p>Entenda quais alternativas podem existir para o seu perfil, sem promessas prontas.</p></article><article><span class="benefit-number">03</span><span class="benefit-icon">↗</span><h3>Orientação de verdade</h3><p>Conte com atendimento próximo para tirar dúvidas e compreender os próximos passos.</p></article><article><span class="benefit-number">04</span><span class="benefit-icon">▱</span><h3>Apartamentos novos</h3><p>Conheça oportunidades demonstrativas de imóveis em diferentes regiões de São Paulo.</p></article></div>
    </div></section>

    <section class="trust-section"><div class="container trust-inner"><div><p class="eyebrow">CONVERSA TRANSPARENTE, ESCOLHA CONSCIENTE</p><h2>Informação clara para<br>decidir com <em>confiança.</em></h2></div><p>Sem promessas fáceis. A equipe ajuda você a entender cada possibilidade e a encontrar respostas para o seu momento.</p><a class="button button-dark" href="${waLink("Olá! Quero conversar sobre as possibilidades de comprar meu primeiro apartamento.")}" target="_blank" rel="noopener noreferrer">${whatsappIcon()} Converse com a equipe</a></div></section>

    <section class="section simulation-section" id="simulacao"><div class="container simulation-grid"><div class="simulation-intro"><p class="eyebrow">PRIMEIRO, CONTE UM POUCO</p><h2>Vamos começar<br>pela sua <em>realidade.</em></h2><p>Responda três perguntas rápidas. A mensagem segue direto para o WhatsApp — seus dados não são armazenados pelo site.</p><div class="privacy-note"><span>↗</span> Conversa direta e sem compromisso.</div></div>
      <form class="simulation-form" id="simulation-form"><div class="form-step"><span>01</span><label for="income">Qual é sua renda familiar aproximada?</label><select id="income" name="income" required><option value="" selected disabled>Selecione uma faixa</option><option>Até R$ 2.000</option><option>De R$ 2.001 a R$ 4.000</option><option>De R$ 4.001 a R$ 7.000</option><option>Acima de R$ 7.000</option><option>Prefiro conversar sobre isso</option></select></div>
      <div class="form-step"><span>02</span><label for="region">Em qual região de São Paulo procura?</label><select id="region" name="region" required><option value="" selected disabled>Escolha uma região</option><option>Zona Leste</option><option>Zona Norte</option><option>Zona Oeste</option><option>Zona Sul</option><option>Ainda estou avaliando</option></select></div>
      <div class="form-step"><span>03</span><label for="bedrooms">Quantos dormitórios deseja?</label><select id="bedrooms" name="bedrooms" required><option value="" selected disabled>Escolha uma opção</option><option>1 dormitório</option><option>2 dormitórios</option><option>3 dormitórios</option><option>Ainda não sei</option></select></div>
      <button class="button button-gold form-submit" type="submit">${whatsappIcon()} Ver possibilidades pelo WhatsApp</button><p class="form-disclaimer">As respostas não são salvas. A elegibilidade e as condições dependem de análise individual.</p></form>
    </div></section>

    <section class="about-section" id="sobre"><div class="about-photo"><img src="/assets/hero2.png" alt="Ponte Estaiada e edifícios de São Paulo" loading="lazy"><span>SÃO PAULO, UM CENÁRIO<br>PARA NOVAS HISTÓRIAS</span></div><div class="about-copy"><p class="eyebrow">SOBRE A INTERIOR REAL STATE</p><h2>O próximo endereço<br>começa com uma boa <em>conversa.</em></h2><p>A Interior Real State aproxima pessoas das possibilidades de conquistar um apartamento em São Paulo. Nosso atendimento é pensado para acolher dúvidas, explicar caminhos e orientar cada etapa com clareza.</p><p>Porque cada conquista tem seu tempo — e merece ser vivida com tranquilidade.</p><a class="text-link" href="${waLink("Olá! Gostaria de conhecer melhor o atendimento da Interior Real State.")}" target="_blank" rel="noopener noreferrer">${whatsappIcon()} Conheça nosso atendimento</a></div></section>

    <section class="section faq-section"><div class="container faq-grid"><div><p class="eyebrow">DÚVIDAS FREQUENTES</p><h2>É normal ter<br>perguntas. <em>Vamos lá?</em></h2><p class="faq-help">Ainda ficou com alguma dúvida? Nossa equipe pode conversar com você.</p><a class="text-link" href="${waLink("Olá! Tenho algumas dúvidas sobre a compra do meu primeiro apartamento.")}" target="_blank" rel="noopener noreferrer">${whatsappIcon()} Fale com um consultor</a></div>${faq()}</div></section>

    <section class="contact-section" id="contato"><div class="container contact-inner"><p class="eyebrow eyebrow-light">O PRÓXIMO PASSO PODE SER UMA CONVERSA</p><h2>Vamos encontrar seu<br>próximo <em>endereço?</em></h2><p>Conte o que você procura. A gente ajuda a entender as possibilidades.</p><div class="button-row"><a class="button button-gold" href="${waLink("Olá! Quero encontrar meu próximo endereço. Podemos conversar?")}" target="_blank" rel="noopener noreferrer">${whatsappIcon()} Falar com um consultor</a><a class="contact-instagram" href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram ↗</a></div></div></section>
  </main>`;
}

function catalogPage() {
  return `<main><section class="page-banner catalog-banner"><div class="container banner-content"><p class="eyebrow eyebrow-light">IMÓVEIS PARA DESCOBRIR</p><h1>Encontre o apartamento<br>ideal para <em>você.</em></h1><p>Conheça oportunidades demonstrativas em diferentes regiões de São Paulo e descubra por onde começar.</p><span class="banner-index">CURADORIA INTERIOR REAL STATE · 2026</span></div><div class="banner-image"></div></section>
    <section class="section catalog-section"><div class="container"><div class="catalog-top"><div><p class="eyebrow">ESCOLHA POR ONDE COMEÇAR</p><h2>Possibilidades com o seu jeito.</h2></div><span class="result-count" id="result-count">06 opções demonstrativas</span></div>
      <div class="filter-row" role="group" aria-label="Filtrar imóveis"><button class="filter-chip active" type="button" data-filter="all">Todos <span>06</span></button><button class="filter-chip" type="button" data-filter="mcmv">Minha Casa Minha Vida</button><button class="filter-chip" type="button" data-filter="2">2 dormitórios</button><button class="filter-chip" type="button" data-filter="3">3 dormitórios</button></div>
      <div class="property-grid catalog-grid" id="catalog-grid">${propertyData.map(propertyCard).join("")}</div>
      <p class="demo-note">As características, imagens, preços, condições e status são demonstrativos e não representam oferta efetiva. Consulte informações atualizadas com um consultor.</p>
    </div></section></main>`;
}

function detailPage(property) {
  const message = `Olá! Conheci a Interior Real State pelo site e gostaria de receber mais informações sobre o ${property.name}.`;
  const gallery = property.gallery.map((id, index) => `<button class="gallery-thumb ${index === 0 ? "active" : ""}" type="button" data-image="${imageUrl(id, 1200)}" aria-label="Ver foto ${index + 1}"><img src="${imageUrl(id, 260)}" alt="Imagem ilustrativa ${index + 1} de ${property.name}" loading="lazy"></button>`).join("");
  const similar = propertyData.filter(item => item.slug !== property.slug).slice(0, 3);
  return `<main class="detail-page"><div class="container detail-container"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Início</a><span>/</span><a href="/imoveis">Imóveis</a><span>/</span><span>${property.name}</span></nav>
    <div class="detail-heading"><div><p class="eyebrow">${property.region} · IMÓVEL DEMONSTRATIVO</p><h1>${property.name}</h1><p class="detail-location">São Paulo, SP <span>·</span> Região ${property.region}</p></div>${property.mcmv ? '<span class="badge detail-badge">Minha Casa Minha Vida</span>' : ""}</div>
    <div class="detail-layout"><div class="detail-main">
      <div class="gallery"><img id="gallery-main" src="${imageUrl(property.gallery[0], 1300)}" alt="Imagem ilustrativa do empreendimento ${property.name}"><div class="gallery-thumbs">${gallery}</div><span class="gallery-caption">Imagens ilustrativas · ${property.name}</span></div>
      <div class="spec-grid"><div><span>DORMITÓRIOS</span><strong>${property.bedrooms}</strong></div><div><span>ÁREA PRIVATIVA</span><strong>${property.area}</strong></div><div><span>VAGAS</span><strong>${property.parking}</strong></div><div><span>STATUS</span><strong>${property.status}</strong></div></div>
      <section class="detail-content"><p class="eyebrow">SOBRE O EMPREENDIMENTO</p><h2>Um lugar para chamar de <em>seu.</em></h2><p>${property.description}</p><p>Este conteúdo foi criado para apresentação visual. A localização, as características e a disponibilidade são demonstrativas e precisam ser confirmadas.</p></section>
      <section class="detail-content leisure-content"><p class="eyebrow">LAZER DO CONDOMÍNIO</p><h2>Espaços para aproveitar <em>junto.</em></h2><p>As áreas de lazer são ilustrativas nesta apresentação. Consulte um consultor para confirmar os espaços e as comodidades do empreendimento.</p></section>
      <section class="detail-content neighborhood-content"><p class="eyebrow">UM POUCO SOBRE A REGIÃO</p><h2>São Paulo, do seu <em>jeito.</em></h2><p>A região indicada é ilustrativa. Converse com um consultor para conhecer a localização real, os serviços no entorno e as opções de transporte disponíveis para o imóvel de seu interesse.</p></section>
    </div><aside class="price-card"><p class="eyebrow eyebrow-light">CONDIÇÕES DEMONSTRATIVAS</p><h2>Uma possibilidade<br>para <em>considerar.</em></h2><div class="price-highlight">${property.price}</div><p>Os valores e condições podem variar e não constituem oferta. Disponibilidade, elegibilidade e aprovação estão sujeitas à confirmação e análise individual.</p><a class="button button-gold price-cta" href="${waLink(message)}" target="_blank" rel="noopener noreferrer">${whatsappIcon()} Solicitar informações</a><div class="price-footnote"><span>✓</span> Atendimento personalizado, sem compromisso.</div></aside></div>
    <section class="similar-section"><div class="section-heading"><div><p class="eyebrow">CONTINUE DESCOBRINDO</p><h2>Imóveis <em>semelhantes.</em></h2></div><a class="text-link" href="/imoveis">Ver catálogo completo <span>↗</span></a></div><div class="property-grid">${similar.map(propertyCard).join("")}</div></section>
  </div></main>`;
}

const mcmvFaqs = [
  ["Quem pode participar?", "A participação depende dos critérios e regras vigentes do programa, além de análise de crédito e documentação. Um consultor pode ajudar a entender seu perfil."],
  ["A entrada de R$ 800 é garantida?", "Não. Esse valor é somente ilustrativo para esta prévia e não representa oferta. Entrada e condições dependem do imóvel, da disponibilidade e da análise individual."],
  ["Posso usar meu FGTS?", "O uso do FGTS pode ser possível conforme os critérios vigentes e a situação de cada pessoa. Consulte um profissional para analisar o seu caso."]
];

function mcmvPage() {
  const mcmvProperties = propertyData.filter(item => item.mcmv).slice(0, 3);
  return `<main><section class="page-banner mcmv-banner"><div class="container banner-content"><p class="eyebrow eyebrow-light">MINHA CASA MINHA VIDA</p><h1>O primeiro apê pode<br>ser o começo de <em>tudo.</em></h1><p>Conheça possibilidades para conquistar seu espaço, com orientação clara em cada etapa.</p><a class="button button-gold" href="${waLink("Olá! Gostaria de verificar meu perfil para o Minha Casa Minha Vida.")}" target="_blank" rel="noopener noreferrer">Verificar meu perfil <span>↗</span></a></div><div class="banner-image mcmv-image"></div></section>
    <section class="mcmv-offer"><div class="container mcmv-offer-grid"><div><p class="eyebrow">UMA REFERÊNCIA PARA COMEÇAR A CONVERSA</p><h2>Entrada demonstrativa<br>a partir de <em>R$ 800*</em></h2></div><p>*Valor ilustrativo desta prévia. Sujeito às condições vigentes do programa, disponibilidade do imóvel e análise de crédito. Consulte um profissional.</p></div></section>
    <section class="section eligibility-section"><div class="container eligibility-grid"><div><p class="eyebrow">CADA HISTÓRIA É DIFERENTE</p><h2>Quem pode <em>participar?</em></h2><p>O programa é voltado a famílias que atendem aos critérios definidos nas regras vigentes. A elegibilidade pode depender da composição familiar, renda, documentação, imóvel e análise de crédito.</p><p>As condições podem mudar. Não há aprovação ou benefício garantido antes de uma análise individual.</p><a class="button button-dark" href="${waLink("Olá! Gostaria de verificar meu perfil para o Minha Casa Minha Vida.")}" target="_blank" rel="noopener noreferrer">${whatsappIcon()} Verificar meu perfil</a></div><div class="eligibility-note"><h3>Comece com uma conversa.</h3><p>Um consultor pode ajudar você a entender quais informações são necessárias e quais possibilidades podem se aplicar ao seu caso.</p><span class="note-line"></span><span class="eyebrow">SEM PROMESSAS. COM ORIENTAÇÃO.</span></div></div></section>
    <section class="steps-section"><div class="container"><div class="section-heading light-heading"><div><p class="eyebrow eyebrow-light">DO PLANO ÀS CHAVES</p><h2>Um passo de cada <em>vez.</em></h2></div><p>O processo depende do seu perfil e das regras vigentes. Esta é uma visão geral ilustrativa.</p></div><div class="steps-grid"><article><span>01</span><h3>Simulação</h3><p>Converse sobre seu momento e conheça possibilidades iniciais.</p></article><article><span>02</span><h3>Análise de crédito</h3><p>Entenda a documentação e a avaliação realizada pelas instituições responsáveis.</p></article><article><span>03</span><h3>Escolha do imóvel</h3><p>Conheça opções e confirme características e condições de cada empreendimento.</p></article><article><span>04</span><h3>Conquista das chaves</h3><p>Com as etapas concluídas, acompanhe os próximos passos com orientação.</p></article></div></div></section>
    <section class="section mcmv-properties"><div class="container"><div class="section-heading"><div><p class="eyebrow">OPÇÕES DEMONSTRATIVAS</p><h2>Inspire-se para encontrar<br>seu <em>lugar.</em></h2></div><a class="text-link" href="/imoveis">Ver todos os imóveis <span>↗</span></a></div><div class="property-grid">${mcmvProperties.map(propertyCard).join("")}</div></div></section>
    <section class="section faq-section mcmv-faq"><div class="container faq-grid"><div><p class="eyebrow">SOBRE O PROGRAMA</p><h2>Informação para<br>seguir com <em>segurança.</em></h2><p class="faq-help">As condições dependem das regras vigentes e do perfil de cada família.</p></div>${faq(mcmvFaqs)}</div></section>
    <section class="mcmv-final"><div class="container"><p class="eyebrow">O PRÓXIMO PASSO COMEÇA AQUI</p><h2>Vamos conversar sobre<br>seu <em>primeiro apê?</em></h2><a class="button button-dark" href="${waLink("Olá! Quero fazer uma simulação para o Minha Casa Minha Vida.")}" target="_blank" rel="noopener noreferrer">${whatsappIcon()} Simular pelo WhatsApp</a></div></section>
  </main>`;
}

function mount() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const detailSlug = path.startsWith("/imoveis/") ? path.split("/").filter(Boolean)[1] : null;
  const property = detailSlug ? propertyData.find(item => item.slug === detailSlug) : null;
  const isDetail = Boolean(property);
  const contactMessage = isDetail
    ? `Olá! Conheci a Interior Real State pelo site e gostaria de receber mais informações sobre o ${property.name}.`
    : path === "/minha-casa-minha-vida"
      ? "Olá! Gostaria de conversar sobre o Minha Casa Minha Vida."
      : path === "/imoveis"
        ? "Olá! Conheci o catálogo de imóveis da Interior Real State e gostaria de receber mais informações."
        : defaultMessage;
  let page = path === "/imoveis" ? catalogPage() : path === "/minha-casa-minha-vida" ? mcmvPage() : isDetail ? detailPage(property) : homePage();
  document.title = isDetail ? `${property.name} | Interior Real State` : path === "/imoveis" ? "Imóveis | Interior Real State" : path === "/minha-casa-minha-vida" ? "Minha Casa Minha Vida | Interior Real State" : "Interior Real State | Seu próximo endereço";
  document.getElementById("app").innerHTML = `${header(contactMessage)}${page}${footer(contactMessage)}${isDetail ? `<div class="mobile-contact"><a class="button button-gold" href="${waLink(contactMessage)}" target="_blank" rel="noopener noreferrer">${whatsappIcon()} Solicitar informações</a></div>` : `<a class="floating-wa" href="${waLink(contactMessage)}" target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp">${whatsappIcon()}<b>Vamos conversar?</b></a>`}`;
  wireInteractions();
}

function wireInteractions() {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  menuToggle?.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menuToggle.setAttribute("aria-label", expanded ? "Abrir menu" : "Fechar menu");
    nav.classList.toggle("open", !expanded);
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }));
  document.querySelectorAll(".filter-chip").forEach(chip => chip.addEventListener("click", () => {
    const filter = chip.dataset.filter;
    document.querySelectorAll(".filter-chip").forEach(item => item.classList.toggle("active", item === chip));
    const visible = propertyData.filter(property => filter === "all" || (filter === "mcmv" ? property.mcmv : property.bedrooms === Number(filter)));
    document.getElementById("catalog-grid").innerHTML = visible.map(propertyCard).join("");
    document.getElementById("result-count").textContent = `${String(visible.length).padStart(2, "0")} ${visible.length === 1 ? "opção demonstrativa" : "opções demonstrativas"}`;
  }));
  document.querySelectorAll(".gallery-thumb").forEach(thumb => thumb.addEventListener("click", () => {
    document.getElementById("gallery-main").src = thumb.dataset.image;
    document.querySelectorAll(".gallery-thumb").forEach(item => item.classList.toggle("active", item === thumb));
  }));
  document.getElementById("simulation-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const answers = new FormData(form);
    const message = `Olá! Gostaria de fazer uma simulação com a Interior Real State.\n\nRenda familiar aproximada: ${answers.get("income")}\nRegião de interesse: ${answers.get("region")}\nDormitórios desejados: ${answers.get("bedrooms")}\n\nSei que a simulação não garante aprovação ou condições.`;
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  });
}

mount();
