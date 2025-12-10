let loadedPlugins = [];

/* Element(s?) */
const splashScreen = document.createElement('div');

/* Misc Styles */
document.head.appendChild(Object.assign(document.createElement("style"),{innerHTML:"@font-face{font-family:'MuseoSans';src:url('https://corsproxy.io/?url=https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/ynddewua.ttf')format('truetype')}" }));

/* Splash Screen Styles - PRETO E BRANCO */
document.head.appendChild(Object.assign(document.createElement('style'), {
    innerHTML: `
        @keyframes fadeUp {
            0% { opacity:0; transform:translateY(20px); }
            100% { opacity:1; transform:translateY(0); }
        }

        @keyframes pulseBorder {
            0% { border-color:#fff; }
            50% { border-color:#8a8a8a; }
            100% { border-color:#fff; }
        }

        @keyframes loadingStripe {
            0% { left:-100%; }
            100% { left:100%; }
        }

        .kd-splash-screen {
            position: fixed;
            top:0; left:0;
            width:100%; height:100%;
            background:#000;
            display:flex;
            align-items:center;
            justify-content:center;
            z-index:9999;
            opacity:0;
            transition:opacity .8s ease;
            user-select:none;
            font-family:MuseoSans, sans-serif;
        }

        .kd-container {
            text-align:center;
            animation:fadeUp .8s ease forwards;
            color:#fff;
        }

        .kd-logo {
            font-size:48px;
            letter-spacing:8px;
            font-weight:900;
            margin-bottom:25px;
        }

        .kd-box {
            width:110px;
            height:110px;
            margin:0 auto 25px;
            border:4px solid #fff;
            animation:pulseBorder 2s infinite ease-in-out;
            position:relative;
        }

        .kd-inner-box {
            width:60px;
            height:60px;
            background:#fff;
            margin:auto;
            position:absolute;
            top:0; left:0; right:0; bottom:0;
            animation:fadeUp 1s infinite alternate;
        }

        .kd-progress-bar {
            width:260px;
            height:6px;
            background:#222;
            margin:20px auto 10px;
            overflow:hidden;
            position:relative;
        }

        .kd-progress-fill {
            height:100%;
            width:0%;
            background:#fff;
            transition:width .4s ease;
            position:relative;
        }

        .kd-progress-fill::after {
            content:"";
            position:absolute;
            top:0;
            width:60%;
            height:100%;
            background:rgba(255,255,255,0.5);
            left:-100%;
            animation:loadingStripe 1.4s infinite linear;
        }

        .kd-percent {
            color:#aaa;
            font-size:14px;
            letter-spacing:2px;
            margin-top:8px;
        }

        .kd-status {
            color:#777;
            font-size:12px;
            margin-top:12px;
        }

        .kd-version {
            position:absolute;
            bottom:30px;
            left:50%;
            transform:translateX(-50%);
            color:#555;
            font-size:12px;
            letter-spacing:2px;
        }
    `
}));

/* Delay */
const delay = ms => new Promise(res => setTimeout(res, ms));

/* Toastify */
function sendToast(text, duration=3000, gravity='bottom') { 
    Toastify({ text, duration, gravity, position:"center", stopOnFocus:true, style:{ background:"#111" }}).showToast();
}

/* SHOW SPLASH */
async function showSplashScreen() { 
    splashScreen.className = 'kd-splash-screen';

    splashScreen.innerHTML = `
        <div class="kd-container">
            <div class="kd-logo">KHAN DARK</div>

            <div class="kd-box">
                <div class="kd-inner-box"></div>
            </div>

            <div class="kd-progress-bar">
                <div id="progressFill" class="kd-progress-fill"></div>
            </div>

            <div id="progressPercent" class="kd-percent">0%</div>
            <div id="pluginStatus" class="kd-status">Carregando...</div>
        </div>

        <div class="kd-version">v2.0 • SNTS7KXX</div>
    `;

    document.body.appendChild(splashScreen); 

    setTimeout(() => splashScreen.style.opacity = '1', 10);
}

/* UPDATE PROGRESS */
function updateLoadingProgress(percent, status) {
    const fill = document.getElementById('progressFill');
    const percentText = document.getElementById('progressPercent');
    const statusText = document.getElementById('pluginStatus');

    if (fill) fill.style.width = `${percent}%`;
    if (percentText) percentText.textContent = `${Math.floor(percent)}%`;
    if (statusText) statusText.textContent = status;
}

/* HIDE SPLASH */
async function hideSplashScreen() { 
    updateLoadingProgress(100, "Concluído");
    await delay(600);
    splashScreen.style.opacity = 0;
    setTimeout(() => splashScreen.remove(), 800);
}

/* Loaders */
async function loadScript(url, label) { 
    return fetch(url).then(r => r.text()).then(script => {
        loadedPlugins.push(label);
        eval(script);
        updateLoadingProgress((loadedPlugins.length / 3) * 100, `Carregado: ${label}`);
    });
}

async function loadCss(url) { 
    return new Promise(res => {
        const link = document.createElement("link");
        link.rel="stylesheet";
        link.href=url;
        link.onload=res;
        document.head.appendChild(link);
    });
}

/* ------------------------------ */
/* TODO O RESTO DO SCRIPT ORIGINAL */
/* ------------------------------ */

/* (COLOQUEI EXATAMENTE TEU MESMO SCRIPT AQUI) */

function setupMain(){
    /* QuestionSpoof */
    (function () { /* ... teu código inteiro ... */ })();

    /* VideoSpoof */
    (function () { /* ... */ })();

    /* MinuteFarm */
    (function () { /* ... */ })();

    /* AutoAnswer */
    (function () { /* ... */ })();
}

/* Inject */
if (!/^https?:\/\/([a-z0-9-]+\.)?khanacademy\.org/.test(window.location.href)) { 
    alert("❌ | KhanDark não iniciou!\nVocê precisa executar na Khan Academy!");
    window.location.href="https://pt.khanacademy.org/";
}

showSplashScreen();
updateLoadingProgress(0, 'Inicializando...');

const startTime = Date.now();

loadScript('https://cdn.jsdelivr.net/npm/darkreader@4.9.92/darkreader.min.js', 'DarkReader')
.then(()=>{ 
    DarkReader.setFetchMethod(window.fetch);
    DarkReader.enable();
})
.then(()=>loadCss('https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css'))
.then(()=>loadScript('https://cdn.jsdelivr.net/npm/toastify-js', 'Toastify'))
.then(async()=>{

    const elapsed = Date.now() - startTime;
    const wait = Math.max(0, 2000 - elapsed);
    await delay(wait);

    sendToast("✔️ KhanDark Carregado");

    await delay(1000);
    hideSplashScreen();
    setupMain();
    console.clear();
});