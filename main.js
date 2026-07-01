// ==========================================
// 1. DATA ESTRUTURADA (Adicione novos serviços/abas aqui!)
// ==========================================
const servicesData = {
    "pf-services": {
        tabTitle: "Pessoa Física (PF)",
        services: [
            {
                icon: "fas fa-desktop",
                title: "Suporte & Otimização Física",
                desc: "Upgrade de hardware (Instalação de SSDs/RAM), formatação limpa e limpeza técnica para eliminar travamentos do sistema.",
                features: ["Instalações limpas e seguras", "Backup de segurança incluso"],
                priceLabel: "A partir de",
                price: "R$ 150",
                period: "por máquina + peças",
                whatsappText: "Olá Mateus! Gostaria de um orçamento para Suporte e Otimização Física (PF)."
            },
            {
                icon: "fas fa-user-shield",
                title: "Blindagem Antigolpes",
                desc: "Configuração de dupla autenticação em apps sensíveis, auditoria contra malwares e orientação prática para proteção de dados.",
                features: ["Proteção activa do WhatsApp", "Remoção profunda de Phishing"],
                priceLabel: "Investimento",
                price: "R$ 120",
                period: "por setup único",
                whatsappText: "Olá Mateus! Gostaria de fazer uma Blindagem Antigolpes nos meus dispositivos (PF)."
            },
            {
                icon: "fas fa-cloud-upload-alt",
                title: "Backups Automáticos",
                desc: "Estruturação de rotinas automáticas invisíveis em servidores de nuvem (Google Drive/OneDrive) para proteger mídias e arquivos importantes.",
                features: ["Sincronização em tempo real", "Armazenamento criptografado"],
                priceLabel: "Investimento",
                price: "R$ 90",
                period: "taxa única de setup",
                whatsappText: "Olá Mateus! Quero configurar um sistema de Backup Automático em nuvem (PF)."
            }
        ]
    },
    "pj-services": {
        tabTitle: "Pessoa Jurídica (PJ)",
        services: [
            {
                icon: "fab fa-python",
                title: "Automação de Processos Python",
                desc: "Desenvolvimento de scripts estruturados para ler arquivos PDF, extrair relatórios, alimentar sistemas locais e cruzar dados automaticamente.",
                features: ["Economia severa de horas manuais", "Entrega do código-fonte limpo"],
                priceLabel: "Projetos a partir de",
                price: "R$ 450",
                period: "por escopo/script",
                whatsappText: "Olá Mateus! Preciso de uma Automação em Python para minha empresa. Vamos conversar?"
            },
            {
                icon: "fas fa-shield-virus",
                title: "Segurança Digital Corporativa",
                desc: "Isolamento de redes Wi-Fi locais, auditoria pesada de força de senhas, rotinas antiransomware e conformidade técnica de TI.",
                features: ["Proteção de ativos da empresa", "Redução drástica de falhas internas"],
                priceLabel: "A partir de",
                price: "R$ 600",
                period: "avulso ou contrato de manutenção",
                whatsappText: "Olá Mateus! Quero fazer uma Auditoria de Segurança Digital na minha empresa (PJ)."
            },
            {
                icon: "fas fa-code",
                title: "Landing Pages & Presença Web",
                desc: "Desenvolvimento de páginas de conversão de alta performance e cartões de visita digitais focados em captar clientes locais.",
                features: ["Código leve em HTML/CSS nativo", "Otimizado para indexação do Google"],
                priceLabel: "Criação a partir de",
                price: "R$ 500",
                period: "página única + suporte de publicação",
                whatsappText: "Olá Mateus! Quero criar uma Landing Page profissional para o meu negócio (PJ)."
            }
        ]
    }
    // Para acrescentar uma aba nova (Ex: Consultoria), basta imitar a estrutura acima aqui.
};

// ==========================================
// 2. RENDERIZAÇÃO DINÂMICA DAS ABAS E CARDS
// ==========================================
function renderServices() {
    const headersContainer = document.getElementById('tabs-headers');
    const contentsContainer = document.getElementById('tabs-contents');
    
    if(!headersContainer || !contentsContainer) return;

    headersContainer.innerHTML = '';
    contentsContainer.innerHTML = '';

    Object.keys(servicesData).forEach((tabKey, index) => {
        const tabData = servicesData[tabKey];
        const isActive = index === 0 ? 'active' : '';

        // Renderiza Botão da Aba
        const btn = document.createElement('button');
        btn.className = `tab-btn ${isActive}`;
        btn.textContent = tabData.tabTitle;
        btn.addEventListener('click', (e) => switchTab(e, tabKey));
        headersContainer.appendChild(btn);

        // Renderiza Container do Conteúdo da Aba
        const contentDiv = document.createElement('div');
        contentDiv.id = tabKey;
        contentDiv.className = `tab-content ${isActive}`;

        // Cria os Cards
        tabData.services.forEach(service => {
            const featuresLI = service.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('');
            
            const cardHTML = `
                <div class="service-card price-card">
                    <div class="icon"><i class="${service.icon}"></i></div>
                    <h3>${service.title}</h3>
                    <p>${service.desc}</p>
                    <ul class="card-features">
                        ${featuresLI}
                    </ul>
                    <div class="price-tag">
                        <span class="price-label">${service.priceLabel}</span>
                        <span class="price-val">${service.price}</span>
                        <span class="price-period">${service.period}</span>
                    </div>
                    <a href="https://wa.me/5594999999999?text=${encodeURIComponent(service.whatsappText)}" target="_blank" class="btn btn-secondary btn-block">Contratar Serviço</a>
                </div>
            `;
            contentDiv.innerHTML += cardHTML;
        });

        contentsContainer.appendChild(contentDiv);
    });
}

// Alternar Abas
function switchTab(event, tabId) {
	const tabContents = document.querySelectorAll('.tab-content');
	tabContents.forEach(content => content.classList.remove('active'));
	
	const tabButtons = document.querySelectorAll('.tab-btn');
	tabButtons.forEach(btn => btn.classList.remove('active'));
	
	document.getElementById(tabId).classList.add('active');
	event.currentTarget.classList.add('active');
}

// ==========================================
// 3. INTERAÇÕES DE INTERFACE (UI)
// ==========================================

// Encolher Header ao Rolar
window.addEventListener('scroll', function() {
	const navbar = document.getElementById('navbar');
	if (window.scrollY > 50) {
		navbar.classList.add('scrolled');
	} else {
		navbar.classList.remove('scrolled');
	}
});

// Menu Mobile (Hamburguer)
const menuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

if(menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Fecha menu ao clicar em links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });
}

// Accordion do FAQ
document.querySelectorAll('.faq-question').forEach(question => {
	question.addEventListener('click', () => {
		const item = question.parentElement;
		item.classList.toggle('active');
	});
});

// Formulário de Contato do Rodapé
const contactForm = document.getElementById('web-contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const service = document.getElementById('service-type').value;
        const msg = document.getElementById('msg').value;
        
        const text = `Olá Mateus! Meu nome é ${name}. Vi seu site e gostaria de um orçamento para: ${service}. Detalhes: ${msg}`;
        const encodedText = encodeURIComponent(text);
        
        window.open(`https://wa.me/5594999999999?text=${encodedText}`, '_blank');
    });
}

// Inicializa os serviços ao carregar o script
document.addEventListener('DOMContentLoaded', renderServices);