/* ====================================
   KHANDARK - DETECTOR DE BARRAS
   Execute este código no Console do Khan Academy
   ==================================== */

console.clear();
console.log('%c🔍 KHANDARK DETECTOR INICIADO', 'color: #af00ff; font-size: 20px; font-weight: bold;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #af00ff;');

// Array para armazenar todos os elementos encontrados
const foundElements = [];

// Função para detectar barras de progresso
function detectProgressBars() {
    console.log('\n%c📊 PROCURANDO BARRAS DE PROGRESSO...', 'color: #00ff00; font-weight: bold;');
    
    // Seletores comuns para barras de progresso
    const selectors = [
        '[role="progressbar"]',
        '[class*="progress" i]',
        '[class*="bar" i]',
        '[class*="level" i]',
        '[class*="xp" i]',
        '[class*="energy" i]',
        '[data-test-id*="progress" i]',
        'progress',
        'meter'
    ];
    
    selectors.forEach(selector => {
        try {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                elements.forEach(el => {
                    const info = {
                        tag: el.tagName.toLowerCase(),
                        classes: Array.from(el.classList),
                        id: el.id || 'sem-id',
                        role: el.getAttribute('role') || 'sem-role',
                        ariaValueNow: el.getAttribute('aria-valuenow') || 'N/A',
                        ariaValueMax: el.getAttribute('aria-valuemax') || 'N/A',
                        width: el.offsetWidth,
                        height: el.offsetHeight,
                        visible: el.offsetParent !== null,
                        element: el
                    };
                    
                    // Só adiciona se for visível e tiver tamanho razoável
                    if (info.visible && info.width > 50 && info.height > 5) {
                        foundElements.push(info);
                    }
                });
            }
        } catch (e) {
            // Ignora erros de seletores inválidos
        }
    });
    
    // Detectar elementos SVG (círculos de progresso)
    const svgCircles = document.querySelectorAll('circle[stroke], circle[fill]');
    svgCircles.forEach(circle => {
        const parent = circle.closest('svg');
        if (parent && parent.offsetWidth > 30) {
            foundElements.push({
                tag: 'svg-circle',
                classes: Array.from(parent.classList || []),
                id: parent.id || 'sem-id',
                stroke: circle.getAttribute('stroke'),
                fill: circle.getAttribute('fill'),
                radius: circle.getAttribute('r'),
                visible: true,
                element: circle
            });
        }
    });
}

// Função para analisar estilos computados
function analyzeStyles(element) {
    const computed = window.getComputedStyle(element);
    return {
        background: computed.background || computed.backgroundColor,
        width: computed.width,
        height: computed.height,
        borderRadius: computed.borderRadius
    };
}

// Executar detecção
detectProgressBars();

// Remover duplicatas
const uniqueElements = foundElements.filter((item, index, self) =>
    index === self.findIndex(t => t.element === item.element)
);

console.log(`\n%c✅ ENCONTRADOS: ${uniqueElements.length} elementos`, 'color: #00ff00; font-weight: bold;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #af00ff;');

// Mostrar resultados detalhados
if (uniqueElements.length > 0) {
    console.log('\n%c📋 DETALHES DOS ELEMENTOS:', 'color: #ffaa00; font-weight: bold; font-size: 14px;');
    
    uniqueElements.forEach((info, index) => {
        console.log(`\n%c[${index + 1}] ${info.tag.toUpperCase()}`, 'color: #af00ff; font-weight: bold;');
        console.log('   Classes:', info.classes.join(', ') || 'Nenhuma');
        console.log('   ID:', info.id);
        console.log('   Role:', info.role);
        if (info.ariaValueNow !== 'N/A') {
            console.log(`   Progresso: ${info.ariaValueNow}/${info.ariaValueMax}`);
        }
        console.log(`   Dimensões: ${info.width}x${info.height}px`);
        
        // Analisar estilos
        const styles = analyzeStyles(info.element);
        console.log('   Background:', styles.background);
        
        // Adicionar borda temporária para visualização
        info.element.style.outline = '3px solid #af00ff';
        info.element.style.outlineOffset = '2px';
        
        console.log('   👁️ Elemento marcado com borda roxa!');
    });
    
    // Gerar código CSS automaticamente
    console.log('\n%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #af00ff;');
    console.log('%c🎨 CÓDIGO CSS GERADO:', 'color: #00ff00; font-weight: bold; font-size: 16px;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #af00ff;');
    
    let cssCode = '/* XP Bar RGB - Auto-gerado */\n';
    
    uniqueElements.forEach(info => {
        if (info.tag === 'svg-circle') {
            cssCode += `circle[stroke] {\n`;
            cssCode += `    stroke: url(#rgbGradient) !important;\n`;
            cssCode += `    filter: drop-shadow(0 0 8px rgba(121, 40, 202, 0.8));\n`;
            cssCode += `}\n\n`;
        } else {
            // Gerar seletores por classe
            if (info.classes.length > 0) {
                info.classes.forEach(className => {
                    cssCode += `.${className} {\n`;
                    cssCode += `    background: linear-gradient(90deg, #ff0080, #7928ca, #0070f3, #00dfd8, #7928ca, #ff0080) !important;\n`;
                    cssCode += `    background-size: 300% 100% !important;\n`;
                    cssCode += `    animation: rgbSlide 3s linear infinite !important;\n`;
                    cssCode += `    box-shadow: 0 0 15px rgba(121, 40, 202, 0.6) !important;\n`;
                    cssCode += `}\n\n`;
                });
            }
            
            // Gerar seletor por role
            if (info.role !== 'sem-role') {
                cssCode += `[role="${info.role}"] {\n`;
                cssCode += `    background: linear-gradient(90deg, #ff0080, #7928ca, #0070f3, #00dfd8, #7928ca, #ff0080) !important;\n`;
                cssCode += `    background-size: 300% 100% !important;\n`;
                cssCode += `    animation: rgbSlide 3s linear infinite !important;\n`;
                cssCode += `}\n\n`;
            }
        }
    });
    
    cssCode += `@keyframes rgbSlide {\n`;
    cssCode += `    0% { background-position: 0% 50%; }\n`;
    cssCode += `    100% { background-position: 300% 50%; }\n`;
    cssCode += `}\n`;
    
    console.log('%c' + cssCode, 'color: #ffffff; background: #1a1a1a; padding: 10px; border-radius: 5px;');
    
    // Copiar para clipboard (se disponível)
    if (navigator.clipboard) {
        navigator.clipboard.writeText(cssCode).then(() => {
            console.log('\n%c📋 CÓDIGO COPIADO PARA A ÁREA DE TRANSFERÊNCIA!', 'color: #00ff00; font-weight: bold; font-size: 14px;');
        });
    }
    
    console.log('\n%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #af00ff;');
    console.log('%c💡 DICA: Os elementos foram marcados com borda roxa!', 'color: #ffaa00;');
    console.log('%cProcure na página pelas bordas roxas para ver o que foi detectado.', 'color: #ffaa00;');
    console.log('\n%c🔧 PRÓXIMOS PASSOS:', 'color: #00ff00; font-weight: bold;');
    console.log('%c1. Verifique se as bordas roxas estão nas barras certas', 'color: #ffffff;');
    console.log('%c2. Copie o código CSS gerado acima', 'color: #ffffff;');
    console.log('%c3. Adicione no módulo RGB do KhanDark', 'color: #ffffff;');
    
    // Remover bordas após 10 segundos
    setTimeout(() => {
        uniqueElements.forEach(info => {
            info.element.style.outline = '';
            info.element.style.outlineOffset = '';
        });
        console.log('\n%c✨ Bordas roxas removidas!', 'color: #af00ff;');
    }, 10000);
    
} else {
    console.log('\n%c❌ NENHUMA BARRA ENCONTRADA!', 'color: #ff0000; font-weight: bold;');
    console.log('%cTente:', 'color: #ffaa00;');
    console.log('%c- Navegar para uma página com barras de XP/progresso', 'color: #ffffff;');
    console.log('%c- Fazer um exercício ou assistir um vídeo', 'color: #ffffff;');
    console.log('%c- Executar o script novamente', 'color: #ffffff;');
}

console.log('\n%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #af00ff;');
console.log('%c🔍 DETECTOR FINALIZADO!', 'color: #af00ff; font-size: 16px; font-weight: bold;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'color: #af00ff;');