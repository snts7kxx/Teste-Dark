let loadedPlugins = [];

/* Element(s?) */
const splashScreen = document.createElement('div');

/* Misc Styles */
document.head.appendChild(Object.assign(document.createElement("style"),{innerHTML:"@font-face{font-family:'MuseoSans';src:url('https://corsproxy.io/?url=https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/ynddewua.ttf')format('truetype')}" }));
document.head.appendChild(Object.assign(document.createElement('style'),{innerHTML:"::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: #ffffff; } ::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; } ::-webkit-scrollbar-thumb:hover { background: #555; }"}));

/* Splash Screen Styles - BLACK & WHITE ULTRA */
document.head.appendChild(Object.assign(document.createElement('style'), {
    innerHTML: `
        @keyframes fadeInScale {
            0% { opacity: 0; transform: scale(0.85); }
            100% { opacity: 1; transform: scale(1); }
        }

        @keyframes pulseRing {
            0% { transform: scale(0.8); opacity: 0.3; }
            100% { transform: scale(1.6); opacity: 0; }
        }

        @keyframes loadingBar {
            0% { width: 0%; }
            100% { width: 100%; }
        }

        .bw-splash {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            z-index: 9999;
            opacity: 0;
            transition: opacity .9s ease;
            font-family: Arial, sans-serif;
        }

        .bw-logo {
            color: #fff;
            font-size: 60px;
            font-weight: 900;
            letter-spacing: 6px;
            margin-bottom: 20px;
            animation: fadeInScale 0.8s ease forwards;
        }

        .bw-ring {
            width: 110px;
            height: 110px;
            border-radius: 50%;
            position: relative;
            margin-bottom: 30px;
        }