let loadedPlugins = [];

/* Element(s?) */
const splashScreen = document.createElement('div');

/* Misc Styles */
document.head.appendChild(Object.assign(document.createElement("style"),{innerHTML:"@font-face{font-family:'MuseoSans';src:url('https://corsproxy.io/?url=https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/ynddewua.ttf')format('truetype')}" }));
document.head.appendChild(Object.assign(document.createElement('style'),{innerHTML:"::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: #ffffff; } ::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; } ::-webkit-scrollbar-thumb:hover { background: #555; }"}));

/* Splash Screen Styles - VERSÃO ULTRA DETALHADA */
document.head.appendChild(Object.assign(document.createElement('style'), {
    innerHTML: `
        @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
            25% { transform: translateY(-15px) translateX(10px) rotate(2deg); }
            50% { transform: translateY(-8px) translateX(-10px) rotate(-1deg); }
            75% { transform: translateY(-20px) translateX(5px) rotate(1deg); }
        }
        
        @keyframes slideUp {
            from { transform: translateY(80px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes glow {
            0%, 100% { 
                text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
                            0 0 40px rgba(255, 255, 255, 0.6),
                            0 0 60px rgba(255, 255, 255, 0.4);
            }
            50% { 
                text-shadow: 0 0 30px rgba(255, 255, 255, 1),
                            0 0 60px rgba(255, 255, 255, 0.8),
                            0 0 90px rgba(255, 255, 255, 0.6),
                            0 0 120px rgba(255, 255, 255, 0.4);
            }
        }
        
        @keyframes hexSpin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes pulse {
            0%, 100% { 
                transform: scale(1); 
                opacity: 1;
                box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
            }
            50% { 
                transform: scale(1.3); 
                opacity: 0.6;
                box-shadow: 0 0 40px rgba(255, 255, 255, 1);
            }
        }
        
        @keyframes fadeInOut {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
        }
        
        @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
        }
        
        @keyframes slide {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(200%); opacity: 0; }
        }
        
        @keyframes gridMove {
            0% { transform: translateY(0) translateX(0); }
            100% { transform: translateY(40px) translateX(40px); }
        }
        
        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
        }
        
        @keyframes particleFloat {
            0% { transform: translate(0, 0) scale(1); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
        
        @keyframes borderGlow {
            0%, 100% { 
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.3),
                           inset 0 0 10px rgba(255, 255, 255, 0.1);
            }
            50% { 
                box-shadow: 0 0 20px rgba(255, 255, 255, 0.6),
                           0 0 40px rgba(255, 255, 255, 0.4),
                           inset 0 0 20px rgba(255, 255, 255, 0.2);
            }
        }
        
        @keyframes rotate3d {
            0% { transform: perspective(1000px) rotateY(0deg) rotateX(0deg); }
            100% { transform: perspective(1000px) rotateY(360deg) rotateX(360deg); }
        }
        
        @keyframes cornerExpand {
            0%, 100% { width: 30px; height: 30px; }
            50% { width: 50px; height: 50px; }
        }
        
        .kd-splash-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 0;
            transition: opacity 1s ease;
            user-select: none;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            overflow: hidden;
        }
        
        .kd-grid-background {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(255, 255, 255, 0.03) 2px, transparent 2px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 2px, transparent 2px),
                linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
            background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
            animation: gridMove 8s linear infinite;
            opacity: 0.7;
        }
        
        .kd-particles {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
        }
        
        .kd-particle {
            position: absolute;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent);
            border-radius: 50%;
            animation: particleFloat 8s infinite ease-in-out;
            --tx: 0;
            --ty: 0;
        }
        
        .kd-scanline {
            position: absolute;
            width: 100%;
            height: 150px;
            background: linear-gradient(
                to bottom,
                transparent,
                rgba(255, 255, 255, 0.03),
                rgba(255, 255, 255, 0.08),
                rgba(255, 255, 255, 0.03),
                transparent
            );
            animation: scanline 6s linear infinite;
            pointer-events: none;
        }
        
        .kd-vignette {
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(
                ellipse at center,
                transparent 0%,
                rgba(0, 0, 0, 0.3) 60%,
                rgba(0, 0, 0, 0.8) 100%
            );
            pointer-events: none;
        }
        
        .kd-splash-content {
            position: relative;
            z-index: 2;
            text-align: center;
            animation: slideUp 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .kd-logo-container {
            position: relative;
            margin-bottom: 50px;
            padding: 40px;
            animation: float 6s ease-in-out infinite;
        }
        
        .kd-logo-frame {
            position: relative;
            padding: 40px 80px;
            display: inline-block;
        }
        
        .kd-logo-border {
            position: absolute;
            border: 2px solid rgba(255, 255, 255, 0.3);
            animation: borderGlow 3s ease-in-out infinite;
        }
        
        .kd-logo-border.outer {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
        
        .kd-logo-border.inner {
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            border-color: rgba(255, 255, 255, 0.2);
            animation-delay: 0.5s;
        }
        
        .kd-corner-accent {
            position: absolute;
            width: 30px;
            height: 30px;
            border: 3px solid white;
            animation: cornerExpand 2s ease-in-out infinite;
        }
        
        .kd-corner-accent.tl {
            top: -5px;
            left: -5px;
            border-right: none;
            border-bottom: none;
        }
        
        .kd-corner-accent.tr {
            top: -5px;
            right: -5px;
            border-left: none;
            border-bottom: none;
            animation-delay: 0.5s;
        }
        
        .kd-corner-accent.bl {
            bottom: -5px;
            left: -5px;
            border-right: none;
            border-top: none;
            animation-delay: 1s;
        }
        
        .kd-corner-accent.br {
            bottom: -5px;
            right: -5px;
            border-left: none;
            border-top: none;
            animation-delay: 1.5s;
        }
        
        .kd-logo-text {
            font-size: 96px;
            font-weight: 900;
            letter-spacing: 12px;
            position: relative;
            display: inline-block;
            text-transform: uppercase;
        }
        
        .kd-logo-khan {
            color: white;
            text-shadow: 
                0 0 10px rgba(255, 255, 255, 0.8),
                0 0 20px rgba(255, 255, 255, 0.6),
                0 0 30px rgba(255, 255, 255, 0.4),
                5px 5px 0px rgba(255, 255, 255, 0.1),
                10px 10px 0px rgba(255, 255, 255, 0.05);
            position: relative;
        }
        
        .kd-logo-khan::before {
            content: 'KHAN';
            position: absolute;
            left: 3px;
            top: 3px;
            z-index: -1;
            opacity: 0.3;
        }
        
        .kd-logo-dark {
            color: #ffffff;
            margin-left: 20px;
            text-shadow: 
                0 0 20px rgba(255, 255, 255, 1),
                0 0 40px rgba(255, 255, 255, 0.8),
                0 0 60px rgba(255, 255, 255, 0.6);
            animation: glow 3s ease-in-out infinite;
            position: relative;
        }
        
        .kd-subtitle {
            color: rgba(255, 255, 255, 0.7);
            font-size: 16px;
            letter-spacing: 6px;
            margin-top: 25px;
            font-weight: 300;
            text-transform: uppercase;
        }
        
        .kd-divider-container {
            margin: 60px 0;
            position: relative;
        }
        
        .kd-divider {
            width: 500px;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.2),
                rgba(255, 255, 255, 0.8),
                rgba(255, 255, 255, 0.2),
                transparent
            );
            margin: 0 auto;
            position: relative;
        }
        
        .kd-divider::before,
        .kd-divider::after {
            content: '';
            position: absolute;
            width: 12px;
            height: 12px;
            background: white;
            border-radius: 50%;
            top: -5px;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.8),
                       0 0 30px rgba(255, 255, 255, 0.5);
            animation: pulse 2s ease-in-out infinite;
        }
        
        .kd-divider::before { 
            left: -6px;
        }
        
        .kd-divider::after { 
            right: -6px;
            animation-delay: 1s;
        }
        
        .kd-divider-line-small {
            width: 100px;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            margin: 15px auto 0;
        }
        
        .kd-loader-container {
            margin: 60px 0;
            position: relative;
        }
        
        .kd-hexagon-loader {
            width: 120px;
            height: 120px;
            margin: 0 auto;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .kd-hexagon {
            position: absolute;
            border: 3px solid transparent;
            border-radius: 15px;
            animation: hexSpin 3s linear infinite;
        }
        
        .kd-hexagon:nth-child(1) {
            width: 80px;
            height: 80px;
            border-top-color: rgba(255, 255, 255, 0.8);
            border-bottom-color: rgba(255, 255, 255, 0.8);
        }
        
        .kd-hexagon:nth-child(2) {
            width: 60px;
            height: 60px;
            border-top-color: rgba(255, 255, 255, 0.6);
            border-bottom-color: rgba(255, 255, 255, 0.6);
            animation-duration: 2s;
            animation-direction: reverse;
        }
        
        .kd-hexagon:nth-child(3) {
            width: 40px;
            height: 40px;
            border-top-color: rgba(255, 255, 255, 0.4);
            border-bottom-color: rgba(255, 255, 255, 0.4);
            animation-duration: 1.5s;
        }
        
        .kd-hexagon-core {
            width: 25px;
            height: 25px;
            background: radial-gradient(circle, white, rgba(255, 255, 255, 0.5));
            border-radius: 50%;
            box-shadow: 
                0 0 20px rgba(255, 255, 255, 0.8),
                0 0 40px rgba(255, 255, 255, 0.6),
                0 0 60px rgba(255, 255, 255, 0.4);
            animation: pulse 2s ease-in-out infinite;
        }
        
        .kd-loading-text {
            color: white;
            font-size: 20px;
            margin-top: 30px;
            font-weight: 500;
            letter-spacing: 4px;
            animation: fadeInOut 2.5s ease-in-out infinite;
            text-transform: uppercase;
        }
        
        .kd-loading-dots {
            display: inline-block;
            width: 30px;
            text-align: left;
        }
        
        .kd-progress-container {
            width: 600px;
            margin: 50px auto 25px;
            position: relative;
        }
        
        .kd-progress-wrapper {
            position: relative;
            padding: 5px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        
        .kd-progress-bar {
            width: 100%;
            height: 8px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            overflow: hidden;
            position: relative;
            box-shadow: 
                inset 0 2px 5px rgba(0, 0, 0, 0.5),
                0 0 10px rgba(255, 255, 255, 0.1);
        }
        
        .kd-progress-fill {
            height: 100%;
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.4),
                rgba(255, 255, 255, 0.9),
                rgba(255, 255, 255, 1),
                rgba(255, 255, 255, 0.9),
                rgba(255, 255, 255, 0.4)
            );
            background-size: 200% 100%;
            width: 0%;
            transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
            box-shadow: 
                0 0 20px rgba(255, 255, 255, 0.8),
                0 0 40px rgba(255, 255, 255, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.5);
            animation: shimmer 2s linear infinite;
            position: relative;
            border-radius: 15px;
        }
        
        .kd-progress-fill::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 50%;
            background: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.3),
                transparent
            );
            border-radius: 15px 15px 0 0;
        }
        
        .kd-progress-fill::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 30px;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.8)
            );
            filter: blur(8px);
            animation: slide 2s infinite;
        }
        
        .kd-progress-percent {
            text-align: center;
            color: rgba(255, 255, 255, 0.9);
            font-size: 22px;
            margin-top: 20px;
            font-weight: 600;
            letter-spacing: 3px;
            font-variant-numeric: tabular-nums;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        
        .kd-plugin-status {
            color: rgba(255, 255, 255, 0.6);
            font-size: 14px;
            margin-top: 30px;
            min-height: 25px;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-weight: 400;
        }
        
        .kd-decorative-circles {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        
        .kd-circle {
            position: absolute;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            animation: pulse 4s ease-in-out infinite;
        }
        
        .kd-circle:nth-child(1) {
            width: 300px;
            height: 300px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        
        .kd-circle:nth-child(2) {
            width: 500px;
            height: 500px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation-delay: 1s;
        }
        
        .kd-circle:nth-child(3) {
            width: 700px;
            height: 700px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation-delay: 2s;
        }
        
        .kd-version {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(255, 255, 255, 0.4);
            font-size: 12px;
            letter-spacing: 4px;
            font-weight: 300;
            text-transform: uppercase;
        }
        
        .kd-tech-lines {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        
        .kd-tech-line {
            position: absolute;
            background: rgba(255, 255, 255, 0.05);
        }
        
        .kd-tech-line.h1 { width: 100%; height: 1px; top: 15%; }
        .kd-tech-line.h2 { width: 100%; height: 1px; top: 85%; }
        .kd-tech-line.v1 { width: 1px; height: 100%; left: 15%; }
        .kd-tech-line.v2 { width: 1px; height: 100%; left: 85%; }
    `
}));

let dotsInterval;
async function showSplashScreen() { 
    const splashScreen = document.createElement('div');
    splashScreen.className = 'kd-splash-screen';

    // Criar partículas
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'kd-particles';
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'kd-particle';
        const size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 6) + 's';
        particlesContainer.appendChild(particle);
    }

    splashScreen.innerHTML = `
        <div class="kd-grid-background"></div>
        <div class="kd-scanline"></div>
        <div class="kd-vignette"></div>
        
        <div class="kd-tech-lines">
            <div class="kd-tech-line h1"></div>
            <div class="kd-tech-line h2"></div>
            <div class="kd-tech-line v1"></div>
            <div class="kd-tech-line v2"></div>
        </div>
        
        <div class="kd-decorative-circles">
            <div class="kd-circle"></div>
            <div class="kd-circle"></div>
            <div class="kd-circle"></div>
        </div>

        <div class="kd-splash-content">
            <div class="kd-logo-container">
                <div class="kd-corner-accent tl"></div>
                <div class="kd-corner-accent tr"></div>
                <div class="kd-corner-accent bl"></div>
                <div class="kd-corner-accent br"></div>
                
                <div class="kd-logo-frame">
                    <div class="kd-logo-border outer"></div>
                    <div class="kd-logo-border inner"></div>
                    
                    <div class="kd-logo-text">
                        <span class="kd-logo-khan">KHAN</span><span class="kd-logo-dark">DARK</span>
                    </div>
                </div>
                <div class="kd-subtitle">ADVANCED LEARNING SYSTEM</div>
            </div>

            <div class="kd-divider-container">
                <div class="kd-divider"></div>
                <div class="kd-divider-line-small"></div>
            </div>

            <div class="kd-loader-container">
                <div class="kd-hexagon-loader">
                    <div class="kd-hexagon"></div>
                    <div class="kd-hexagon"></div>
                    <div class="kd-hexagon"></div>
                    <div class="kd-hexagon-core"></div>
                </div>
            </div>

            <div class="kd-loading-text">
                <span id="loadingText">INICIALIZANDO</span><span class="kd-loading-dots" id="loadingDots"></span>
            </div>

            <div class="kd-progress-container">
                <div class="kd-progress-wrapper">
                    <div class="kd-progress-bar">
                        <div class="kd-progress-fill" id="progressFill"></div>
                    </div>
                </div>
                <div class="kd-progress-percent" id="progressPercent">0%</div>
            </div>

            <div class="kd-plugin-status" id="pluginStatus">Preparando módulos do sistema...</div>
        </div>

        <div class="kd-version">v2.0 • SNTS7KXX • BLACK & WHITE PREMIUM EDITION</div>
    `; 

    splashScreen.insertBefore(particlesContainer, splashScreen.firstChild);
    document.body.appendChild(splashScreen); 
    setTimeout(() => splashScreen.style.opacity = '1', 10);
    
    // Animação dos dots
    let dots = 0;
    dotsInterval = setInterval(() => {
        const dotsEl = document.getElementById('loadingDots');
        if (dotsEl) {
            dots = (dots + 1) % 4;
            dotsEl.textContent = '.'.repeat(dots);
        }
    }, 400);
    
    return splashScreen;
}

function updateLoadingProgress(percent, status) {
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const pluginStatus = document.getElementById('pluginStatus');

    if (progressFill) progressFill.style.width = `${percent}%`;
    if (progressPercent) progressPercent.textContent = `${Math.floor(percent)}%`;
    if (pluginStatus) pluginStatus.textContent = status;
}

async function hideSplashScreen(splashScreen) { 
    if (dotsInterval) clearInterval(dotsInterval);
    const loadingText = document.getElementById('loadingText');
    const loadingDots = document.getElementById('loadingDots');
    if (loadingText) loadingText.textContent = 'CONCLUÍDO';
    if (loadingDots) loadingDots.textContent = '';
    
    await new Promise(resolve => setTimeout(resolve, 800));
    splashScreen.style.opacity = '0'; 
    setTimeout(() => splashScreen.remove(), 1000); 
}

// Exemplo de uso:
// const splash = await showSplashScreen();
// updateLoadingProgress(33, 'Carregando módulo 1...');
// updateLoadingProgress(66, 'Carregando módulo 2...');
// updateLoadingProgress(100, 'Finalizado!');
// await hideSplashScreen(splash);
/* Emmiter */
class EventEmitter{constructor(){this.events={}}on(t,e){"string"==typeof t&&(t=[t]),t.forEach(t=>{this.events[t]||(this.events[t]=[]),this.events[t].push(e)})}off(t,e){"string"==typeof t&&(t=[t]),t.forEach(t=>{this.events[t]&&(this.events[t]=this.events[t].filter(t=>t!==e))})}emit(t,...e){this.events[t]&&this.events[t].forEach(t=>{t(...e)})}once(t,e){"string"==typeof t&&(t=[t]);let s=(...i)=>{e(...i),this.off(t,s)};this.on(t,s)}};
const plppdo = new EventEmitter();

new MutationObserver((mutationsList) => { for (let mutation of mutationsList) if (mutation.type === 'childList') plppdo.emit('domChanged'); }).observe(document.body, { childList: true, subtree: true });

/* Misc Functions */
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const findAndClickBySelector = selector => { const element = document.querySelector(selector); if (element) { element.click(); } };

function sendToast(text, duration=5000, gravity='bottom') { Toastify({ text: text, duration: duration, gravity: gravity, position: "center", stopOnFocus: true, style: { background: "#000000", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" } }).showToast(); };

let dotsInterval;
async function showSplashScreen() { 
    splashScreen.className = 'kd-splash-screen';

    splashScreen.innerHTML = `
        <div class="kd-grid-background"></div>
        <div class="kd-scanline"></div>
        <div class="kd-vignette"></div>
        
        <div class="kd-decorative-lines">
            <div class="kd-line horizontal"></div>
            <div class="kd-line horizontal"></div>
            <div class="kd-line vertical"></div>
            <div class="kd-line vertical"></div>
        </div>
        
        <div class="kd-corner-accent top-left"></div>
        <div class="kd-corner-accent top-right"></div>
        <div class="kd-corner-accent bottom-left"></div>
        <div class="kd-corner-accent bottom-right"></div>

        <div class="kd-splash-content">
            <div class="kd-logo-container">
                <div class="kd-logo-frame">
                    <div class="kd-logo-text">
                        <span class="kd-logo-khan">KHAN</span><span class="kd-logo-dark">DARK</span>
                    </div>
                </div>
                <div class="kd-subtitle">ADVANCED LEARNING SYSTEM</div>
            </div>

            <div class="kd-divider"></div>

            <div class="kd-loader-container">
                <div class="kd-cube-loader">
                    <div class="kd-cube"></div>
                    <div class="kd-cube"></div>
                    <div class="kd-cube"></div>
                    <div class="kd-cube"></div>
                    <div class="kd-cube"></div>
                    <div class="kd-cube"></div>
                </div>
            </div>

            <div class="kd-loading-text">
                <span id="loadingText">INICIALIZANDO</span><span class="kd-loading-dots" id="loadingDots"></span>
            </div>

            <div class="kd-progress-container">
                <div class="kd-progress-bar">
                    <div class="kd-progress-fill" id="progressFill"></div>
                </div>
                <div class="kd-progress-percent" id="progressPercent">0%</div>
            </div>

            <div class="kd-plugin-status" id="pluginStatus">Preparando módulos do sistema...</div>
        </div>

        <div class="kd-version">v2.0 • SNTS7KXX • BLACK & WHITE EDITION</div>
    `; 

    document.body.appendChild(splashScreen); 
    setTimeout(() => splashScreen.style.opacity = '1', 10);
    
    // Animação dos dots
    let dots = 0;
    dotsInterval = setInterval(() => {
        const dotsEl = document.getElementById('loadingDots');
        if (dotsEl) {
            dots = (dots + 1) % 4;
            dotsEl.textContent = '.'.repeat(dots);
        }
    }, 500);
}

function updateLoadingProgress(percent, status) {
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const pluginStatus = document.getElementById('pluginStatus');

    if (progressFill) progressFill.style.width = `${percent}%`;
    if (progressPercent) progressPercent.textContent = `${Math.floor(percent)}%`;
    if (pluginStatus) pluginStatus.textContent = status;
}

async function hideSplashScreen() { 
    if (dotsInterval) clearInterval(dotsInterval);
    const loadingText = document.getElementById('loadingText');
    const loadingDots = document.getElementById('loadingDots');
    if (loadingText) loadingText.textContent = 'CONCLUÍDO';
    if (loadingDots) loadingDots.textContent = '';
    await delay(800);
    splashScreen.style.opacity = '0'; 
    setTimeout(() => splashScreen.remove(), 1000); 
}

async function loadScript(url, label) { 
    return fetch(url).then(response => response.text()).then(script => { 
        loadedPlugins.push(label); 
        eval(script);
        updateLoadingProgress((loadedPlugins.length / 3) * 100, `Módulo carregado: ${label}`);
    }); 
}

async function loadCss(url) { 
    return new Promise((resolve) => { 
        const link = document.createElement('link'); 
        link.rel = 'stylesheet'; 
        link.type = 'text/css'; 
        link.href = url; 
        link.onload = () => resolve(); 
        document.head.appendChild(link); 
    }); 
}

/* Main Functions */ 
function setupMain(){
    /* QuestionSpoof */
    (function () {
        const originalFetch = window.fetch;
        const correctAnswers = new Map();

        const toFraction = (d) => { if (d === 0 || d === 1) return String(d); const decimals = (String(d).split('.')[1] || '').length; let num = Math.round(d * Math.pow(10, decimals)), den = Math.pow(10, decimals); const gcd = (a, b) => { while (b) [a, b] = [b, a % b]; return a; }; const div = gcd(Math.abs(num), Math.abs(den)); return den / div === 1 ? String(num / div) : `${num / div}/${den / div}`; };

        window.fetch = async function(input, init) {
            const url = input instanceof Request ? input.url : input;
            let body = input instanceof Request ? await input.clone().text() : init?.body;

            if (url.includes('getAssessmentItem') && body) {
                const res = await originalFetch.apply(this, arguments);
                const clone = res.clone();

                try {
                    const data = await clone.json();

                    let item = null;
                    if (data?.data) {
                        for (const key in data.data) {
                            if (data.data[key]?.item) {
                                item = data.data[key].item;
                                break;
                            }
                        }
                    }

                    if (!item?.itemData) return res;

                    let itemData = JSON.parse(item.itemData);
                    const answers = [];

                    for (const [key, w] of Object.entries(itemData.question.widgets)) {
                        if (w.type === 'radio' && w.options?.choices) {
                            const choices = w.options.choices.map((c, i) => ({ ...c, id: c.id || `radio-choice-${i}` }));
                            const correct = choices.find(c => c.correct);
                            if (correct) answers.push({ type: 'radio', choiceId: correct.id, widgetKey: key });
                        }
                        else if (w.type === 'numeric-input' && w.options?.answers) {
                            const correct = w.options.answers.find(a => a.status === 'correct');
                            if (correct) {
                                const val = correct.answerForms?.some(f => f === 'proper' || f === 'improper') 
                                    ? toFraction(correct.value) : String(correct.value);
                                answers.push({ type: 'numeric', value: val, widgetKey: key });
                            }
                        }
                        else if (w.type === 'expression' && w.options?.answerForms) {
                            const correct = w.options.answerForms.find(f => f.considered === 'correct' || f.form === true);
                            if (correct) answers.push({ type: 'expression', value: correct.value, widgetKey: key });
                        }
                        else if (w.type === 'grapher' && w.options?.correct) {
                            const c = w.options.correct;
                            if (c.type && c.coords) answers.push({ 
                                type: 'grapher', graphType: c.type, coords: c.coords, 
                                asymptote: c.asymptote || null, widgetKey: key 
                            });
                        }
                    }

                    if (answers.length > 0) {
                        correctAnswers.set(item.id, answers);
                        sendToast(`🔎 | ${answers.length} respostas encontradas!`, 750);
                    }

                    if (itemData.question.content?.[0] === itemData.question.content[0].toUpperCase()) {
                        itemData.answerArea = { calculator: false, chi2Table: false, periodicTable: false, tTable: false, zTable: false };
                        itemData.question.content = "\n\nModificado por snts7kxx" + `[[☃ radio 1]]`;
                        itemData.question.widgets = {
                            "radio 1": {
                                type: "radio", alignment: "default", static: false, graded: true,
                                options: {
                                    choices: [
                                        { content: "⬜", correct: true, id: "correct-choice" }
                                    ],
                                    randomize: false, multipleSelect: false, displayCount: null, deselectEnabled: false
                                },
                                version: { major: 1, minor: 0 }
                            }
                        };

                        const modified = { ...data };

                        if (modified.data) {
                            for (const key in modified.data) {
                                if (modified.data[key]?.item?.itemData) {
                                    modified.data[key].item.itemData = JSON.stringify(itemData);
                                    break;
                                }
                            }
                        }

                        sendToast("🎉 | Questão concluída!", 1500);
                        return new Response(JSON.stringify(modified), { 
                            status: res.status, statusText: res.statusText, headers: res.headers 
                        });
                    }
                } catch (e) { console.error(`🚨 Error @ questionSpoof.js\n${e}`); }
                return res;
            }

            if (body?.includes('"operationName":"attemptProblem"')) {
                try {
                    let bodyObj = JSON.parse(body);
                    const itemId = bodyObj.variables?.input?.assessmentItemId;
                    const answers = correctAnswers.get(itemId);

                    if (answers?.length > 0) {
                        const content = [], userInput = {};
                        let state = bodyObj.variables.input.attemptState ? JSON.parse(bodyObj.variables.input.attemptState) : null;

                        answers.forEach(a => {
                            if (a.type === 'radio') {
                                content.push({ selectedChoiceIds: [a.choiceId] });
                                userInput[a.widgetKey] = { selectedChoiceIds: [a.choiceId] };
                            }
                            else if (a.type === 'numeric') {
                                content.push({ currentValue: a.value });
                                userInput[a.widgetKey] = { currentValue: a.value };
                                if (state?.[a.widgetKey]) state[a.widgetKey].currentValue = a.value;
                            }
                            else if (a.type === 'expression') {
                                content.push(a.value);
                                userInput[a.widgetKey] = a.value;
                                if (state?.[a.widgetKey]) state[a.widgetKey].value = a.value;
                            }
                            else if (a.type === 'grapher') {
                                const graph = { type: a.graphType, coords: a.coords, asymptote: a.asymptote };
                                content.push(graph);
                                userInput[a.widgetKey] = graph;
                                if (state?.[a.widgetKey]) state[a.widgetKey].plot = graph;
                            }
                        });

                        bodyObj.variables.input.attemptContent = JSON.stringify([content, []]);
                        bodyObj.variables.input.userInput = JSON.stringify(userInput);
                        if (state) bodyObj.variables.input.attemptState = JSON.stringify(state);

                        body = JSON.stringify(bodyObj);
                        if (input instanceof Request) input = new Request(input, { body });
                        else init.body = body;
                        sendToast(`✏️ | ${answers.length} respostas marcadas!`, 2000);
                    }
                } catch (e) { console.error(`🚨 Error @ questionSpoof.js\n${e}`); }
            }

            return originalFetch.apply(this, arguments);
        };
    })();

    /* VideoSpoof */
    (function () {
        const originalFetch = window.fetch;

        window.fetch = async function (input, init) {
            let body;
            if (input instanceof Request) body = await input.clone().text();
            else if (init && init.body) body = init.body;
            if (body && body.includes('"operationName":"updateUserVideoProgress"')) {
                try {
                    let bodyObj = JSON.parse(body);
                    if (bodyObj.variables && bodyObj.variables.input) {
                        const durationSeconds = bodyObj.variables.input.durationSeconds;
                        bodyObj.variables.input.secondsWatched = durationSeconds;
                        bodyObj.variables.input.lastSecondWatched = durationSeconds;
                        body = JSON.stringify(bodyObj);
                        if (input instanceof Request) { input = new Request(input, { body: body }); } 
                        else init.body = body; 
                        sendToast("🔄 | Vídeo concluído!", 1000)
                    }
                } catch (e) { console.error(`🚨 Error @ videoSpoof.js\n${e}`); }
            }
            return originalFetch.apply(this, arguments);
        };
    })();

        /* MinuteFarm */
    (function () {
        const originalFetch = window.fetch;

        window.fetch = async function (input, init = {}) {
            let body;
            if (input instanceof Request) body = await input.clone().text();
            else if (init.body) body = init.body;
            if (body && input.url.includes("mark_conversions")) {
                try {
                    if (body.includes("termination_event")) { sendToast("🚫 | Limite de Tempo Bloqueado!", 1200); return; }
                } catch (e) { console.error(`🚨 Error @ minuteFarm.js\n${e}`); }
            }
            return originalFetch.apply(this, arguments);
        };
    })();

    /* AutoAnswer */
    (function () {
        const baseSelectors = [
            `.perseus_hm3uu-sq`,
            `[data-testid="exercise-check-answer"]`, 
            `[data-testid="exercise-next-question"]`, 
            `._1wi2tma4`
        ];

        khanDarkDominates = true;

        (async () => { 
            while (khanDarkDominates) {                    
                const selectorsToCheck = [...baseSelectors];

                for (const q of selectorsToCheck) {
                    findAndClickBySelector(q);
                    if (document.querySelector(q+"> div") && document.querySelector(q+"> div").innerText === "Mostrar resumo") {
                        sendToast("🎉 | Questão concluída!", 1500);
                    }
                }
                await delay(1900);
            }
        })();
    })();
}

/* Inject */
if (!/^https?:\/\/([a-z0-9-]+\.)?khanacademy\.org/.test(window.location.href)) { 
    alert("❌ | KhanDark não iniciou!\n\nVocê precisa executar o Script na Plataforma Khan Academy! (https://pt.khanacademy.org/)"); 
    window.location.href = "https://pt.khanacademy.org/"; 
}

showSplashScreen();
updateLoadingProgress(0, 'Inicializando...');

const startTime = Date.now();

loadScript('https://cdn.jsdelivr.net/npm/darkreader@4.9.92/darkreader.min.js', 'DarkReader')
.then(()=>{ 
    DarkReader.setFetchMethod(window.fetch); 
    DarkReader.enable(); 
    updateLoadingProgress(33, 'DarkReader carregado');
})
.then(() => loadCss('https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css'))
.then(() => {
    updateLoadingProgress(66, 'Estilos carregados');
    return loadScript('https://cdn.jsdelivr.net/npm/toastify-js', 'Toastify');
})
.then(async () => {    
    updateLoadingProgress(100, 'Finalizado!');

    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, 3000 - elapsedTime);
    await delay(remainingTime);

    sendToast("💜 | KhanDark iniciou!");

    await delay(2000);

    hideSplashScreen();
    setupMain();

    console.clear();
});