let loadedPlugins = [];

/* Element(s?) */
const splashScreen = document.createElement('div');

/* Misc Styles */
document.head.appendChild(Object.assign(document.createElement("style"),{innerHTML:"@font-face{font-family:'MuseoSans';src:url('https://corsproxy.io/?url=https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/ynddewua.ttf')format('truetype')}" }));
document.head.appendChild(Object.assign(document.createElement('style'),{innerHTML:"::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: #ffffff; } ::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; } ::-webkit-scrollbar-thumb:hover { background: #555; }"}));

/* Splash Screen Styles - BLACK & WHITE VERSION */
document.head.appendChild(Object.assign(document.createElement('style'), {
    innerHTML: `
        @keyframes gridMove {
            0% { transform: translateY(0); }
            100% { transform: translateY(50px); }
        }
        
        @keyframes fadeInScale {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes slideDown {
            from { transform: translateY(-30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5); }
            50% { box-shadow: 0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 0.8), 0 0 80px rgba(255, 255, 255, 0.6); }
        }
        
        @keyframes rotate3d {
            0% { transform: rotateY(0deg) rotateX(0deg); }
            100% { transform: rotateY(360deg) rotateX(360deg); }
        }
        
        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.9; }
        }
        
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
        
        @keyframes dash {
            to { stroke-dashoffset: 0; }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
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
            font-family: MuseoSans, 'Segoe UI', Tahoma, sans-serif;
            overflow: hidden;
        }
        
        .kd-grid-background {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: gridMove 2s linear infinite;
            opacity: 0.6;
        }
        
        .kd-scanline {
            position: absolute;
            width: 100%;
            height: 100px;
            background: linear-gradient(transparent, rgba(255, 255, 255, 0.1), transparent);
            animation: scanline 4s linear infinite;
            pointer-events: none;
        }
        
        .kd-vignette {
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
            pointer-events: none;
        }
        
        .kd-splash-content {
            position: relative;
            z-index: 2;
            text-align: center;
            animation: fadeInScale 1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .kd-logo-container {
            position: relative;
            margin-bottom: 60px;
            animation: float 3s ease-in-out infinite;
        }
        
        .kd-logo-frame {
            position: relative;
            padding: 30px 60px;
            display: inline-block;
        }
        
        .kd-logo-frame::before,
        .kd-logo-frame::after {
            content: '';
            position: absolute;
            width: 80%;
            height: 80%;
            border: 2px solid white;
        }
        
        .kd-logo-frame::before {
            top: 0;
            left: 0;
            border-right: none;
            border-bottom: none;
        }
        
        .kd-logo-frame::after {
            bottom: 0;
            right: 0;
            border-left: none;
            border-top: none;
        }
        
        .kd-logo-text {
            font-size: 84px;
            font-weight: 900;
            letter-spacing: 8px;
            position: relative;
            display: inline-block;
            text-transform: uppercase;
        }
        
        .kd-logo-khan {
            color: white;
            text-shadow: 
                0 0 10px rgba(255, 255, 255, 0.5),
                0 0 20px rgba(255, 255, 255, 0.3),
                4px 4px 0px rgba(255, 255, 255, 0.1);
        }
        
        .kd-logo-dark {
            color: #ffffff;
            opacity: 0.7;
            margin-left: 15px;
            text-shadow: 
                0 0 20px rgba(255, 255, 255, 0.8),
                0 0 40px rgba(255, 255, 255, 0.5);
        }
        
        .kd-subtitle {
            color: rgba(255, 255, 255, 0.6);
            font-size: 14px;
            letter-spacing: 4px;
            margin-top: 20px;
            font-weight: 300;
            animation: slideDown 0.8s ease 0.3s both;
        }
        
        .kd-divider {
            width: 400px;
            height: 1px;
            background: linear-gradient(90deg, transparent, white, transparent);
            margin: 50px auto;
            position: relative;
            opacity: 0.3;
        }
        
        .kd-divider::before,
        .kd-divider::after {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            background: white;
            border-radius: 50%;
            top: -4.5px;
        }
        
        .kd-divider::before { 
            left: -5px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }
        .kd-divider::after { 
            right: -5px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }
        
        .kd-loader-container {
            margin: 50px 0;
        }
        
        .kd-cube-loader {
            width: 100px;
            height: 100px;
            margin: 0 auto;
            position: relative;
            transform-style: preserve-3d;
            animation: rotate3d 4s linear infinite;
        }
        
        .kd-cube {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 2px solid white;
            border-radius: 4px;
        }
        
        .kd-cube:nth-child(1) {
            transform: translateZ(50px);
            background: rgba(255, 255, 255, 0.05);
        }
        
        .kd-cube:nth-child(2) {
            transform: rotateY(90deg) translateZ(50px);
            background: rgba(255, 255, 255, 0.03);
        }
        
        .kd-cube:nth-child(3) {
            transform: rotateY(180deg) translateZ(50px);
            background: rgba(255, 255, 255, 0.05);
        }
        
        .kd-cube:nth-child(4) {
            transform: rotateY(-90deg) translateZ(50px);
            background: rgba(255, 255, 255, 0.03);
        }
        
        .kd-cube:nth-child(5) {
            transform: rotateX(90deg) translateZ(50px);
            background: rgba(255, 255, 255, 0.05);
        }
        
        .kd-cube:nth-child(6) {
            transform: rotateX(-90deg) translateZ(50px);
            background: rgba(255, 255, 255, 0.03);
        }
        
        .kd-loading-text {
            color: white;
            font-size: 16px;
            margin-top: 40px;
            font-weight: 400;
            letter-spacing: 3px;
            text-transform: uppercase;
            animation: pulse 2s ease-in-out infinite;
        }
        
        .kd-loading-dots {
            display: inline-block;
            width: 20px;
            text-align: left;
        }
        
        .kd-progress-container {
            width: 500px;
            margin: 40px auto 20px;
            position: relative;
        }
        
        .kd-progress-bar {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            position: relative;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .kd-progress-fill {
            height: 100%;
            background: linear-gradient(90deg, 
                rgba(255, 255, 255, 0.5), 
                rgba(255, 255, 255, 1), 
                rgba(255, 255, 255, 0.5)
            );
            background-size: 200% 100%;
            width: 0%;
            transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1);
            box-shadow: 
                0 0 20px rgba(255, 255, 255, 0.8),
                0 0 40px rgba(255, 255, 255, 0.5);
            animation: shimmer 2s linear infinite;
            position: relative;
        }
        
        .kd-progress-fill::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 20px;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8));
            filter: blur(5px);
        }
        
        .kd-progress-percent {
            text-align: center;
            color: rgba(255, 255, 255, 0.8);
            font-size: 18px;
            margin-top: 15px;
            font-weight: 500;
            letter-spacing: 2px;
            font-variant-numeric: tabular-nums;
        }
        
        .kd-plugin-status {
            color: rgba(255, 255, 255, 0.5);
            font-size: 13px;
            margin-top: 25px;
            min-height: 20px;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-weight: 300;
        }
        
        .kd-decorative-lines {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        
        .kd-line {
            position: absolute;
            background: white;
            opacity: 0.1;
        }
        
        .kd-line.horizontal {
            width: 100%;
            height: 1px;
        }
        
        .kd-line.vertical {
            width: 1px;
            height: 100%;
        }
        
        .kd-line:nth-child(1) { top: 10%; left: 0; }
        .kd-line:nth-child(2) { top: 90%; left: 0; }
        .kd-line:nth-child(3) { top: 0; left: 10%; }
        .kd-line:nth-child(4) { top: 0; left: 90%; }
        
        .kd-corner-accent {
            position: absolute;
            width: 40px;
            height: 40px;
            border: 2px solid white;
            opacity: 0.3;
        }
        
        .kd-corner-accent.top-left {
            top: 30px;
            left: 30px;
            border-right: none;
            border-bottom: none;
        }
        
        .kd-corner-accent.top-right {
            top: 30px;
            right: 30px;
            border-left: none;
            border-bottom: none;
        }
        
        .kd-corner-accent.bottom-left {
            bottom: 30px;
            left: 30px;
            border-right: none;
            border-top: none;
        }
        
        .kd-corner-accent.bottom-right {
            bottom: 30px;
            right: 30px;
            border-left: none;
            border-top: none;
        }
        
        .kd-version {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(255, 255, 255, 0.4);
            font-size: 11px;
            letter-spacing: 3px;
            font-weight: 300;
        }
    `
}));

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

        window.fetch = async function (