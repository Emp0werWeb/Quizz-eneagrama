// ---------------------------
// DATA
// ---------------------------

const TYPES = {
  1: {name:"1 • Perfeccionista", words:["Ordem","Correção","Perfeição","Justiça","Disciplina"], color:"#a78bfa"},
  2: {name:"2 • Prestativo", words:["Cuidado","Apoio","Generosidade","Empatia","Bondade"], color:"#f472b6"},
  3: {name:"3 • Bem-sucedido", words:["Sucesso","Realização","Ambição","Competência","Metas"], color:"#fb923c"},
  4: {name:"4 • Romântico", words:["Emoção","Sensibilidade","Originalidade","Profundidade","Autenticidade"], color:"#60a5fa"},
  5: {name:"5 • Observador", words:["Conhecimento","Análise","Intelecto","Lógica","Estudo"], color:"#34d399"},
  6: {name:"6 • Questionador", words:["Segurança","Prevenção","Lealdade","Prudência","Vigilância"], color:"#fbbf24"},
  7: {name:"7 • Sonhador", words:["Aventura","Diversão","Liberdade","Positividade","Versatilidade"], color:"#22d3ee"},
  8: {name:"8 • Confrontador", words:["Poder","Liderança","Determinação","Coragem","Influência"], color:"#f87171"},
  9: {name:"9 • Pacifista", words:["Paz","Harmonia","Calma","Tolerância","Conciliação"], color:"#93c5fd"},
};

// 19 questões. Cada opção (1..9) soma para o tipo correspondente (1..9).
// Textos baseados no “Teste de Eneagrama de Personalidade” fornecido (usuario).
const QUESTIONS = [
  {
    title:"1) Eu tenho por hábito:",
    options:[
      "Manter as coisas em ordem.",
      "Falar de assuntos do dia a dia.",
      "Fazer as coisas bem feitas, a ponto de impressionar.",
      "Observar meus sentimentos.",
      "Não decidir sem refletir o suficiente.",
      "Analisar os prós e os contras.",
      "Falar de ideias positivas e inovadoras.",
      "Procurar desafios.",
      "Querer evitar conflitos."
    ]
  },
  {
    title:"2) Eu perco minha paciência:",
    options:[
      "Quando os outros não percebem o que é certo.",
      "Quando apesar do meu esforço não reconhecem meu valor.",
      "Quando dependo do grupo e eles não se empenham.",
      "Quando alguém não percebe o senso de ridículo.",
      "Quando alguém afirma algo sem pensar direito.",
      "Quando alguém não é confiável.",
      "Quando teimam em apontar meus erros.",
      "Quando alguém não me respeita.",
      "Quando me pressionam sabendo que estou me esforçando."
    ]
  },
  {
    title:"3) Sempre me sinto bem:",
    options:[
      "Em ambientes limpos e organizados.",
      "Com pessoas que gostam de mim.",
      "Fazendo algo que sei que vai dar resultado.",
      "Não sei.",
      "Quando estou só com meus pensamentos e reflexões.",
      "Quando me sinto seguro.",
      "Em um clima alegre e descontraído.",
      "No comando das ações.",
      "Quando não sofro pressão."
    ]
  },
  {
    title:"4) Ao expressar a opinião sobre um assunto polêmico:",
    options:[
      "Sou claro a respeito do meu ponto de vista.",
      "Tenho a tendência a proteger o lado mais fraco.",
      "Esforço-me para que minha opinião seja compreendida.",
      "Minha opinião tende a ser pessoal.",
      "Procuro ser mais lógico e direto.",
      "Preocupo-me em não me contradizer e ser congruente com meus princípios.",
      "Tenho a tendência a falar o que penso.",
      "Sou franco e assertivo, se preciso me imponho.",
      "Procuro ver os dois lados para conciliar e manter o clima cordial."
    ]
  },
  {
    title:"5) Quando meus amigos falam de seus problemas:",
    options:[
      "Penso em termos do que é certo e errado e então opino.",
      "Conforme a situação, me envolvo e logo procuro ajudar.",
      "Penso no que se quer alcançar e ofereço soluções.",
      "Tenho tendência a compará-los com os meus.",
      "Prefiro analisar e depois emitir opinião.",
      "Às vezes questiono quais as intenções por trás.",
      "Rapidamente ofereço ideias, mas nem sempre quero me envolver.",
      "Procuro motivá-los para que assumam desafios.",
      "Procuro acalmar os ânimos e sugerir atitudes conciliadoras."
    ]
  },
  {
    title:"6) Acho que as pessoas gostam de mim:",
    options:[
      "Porque sou uma pessoa correta.",
      "Porque sou prestativo, simpático e faço com que gostem de mim.",
      "Porque sou um realizador.",
      "Porque sou autêntico.",
      "Porque sou equilibrado.",
      "Porque sou leal e confiável.",
      "Porque sou animado e extrovertido.",
      "Porque sou justo.",
      "Porque aceito os outros."
    ]
  },
  {
    title:"7) Diante de uma circunstância nova:",
    options:[
      "Tenho facilidade em detectar erros.",
      "Procuro logo ser cordial e simpático.",
      "Procuro encontrar oportunidades.",
      "Tenho facilidade em analisar criticamente.",
      "Estudo e analiso todo o contexto.",
      "Percebo possíveis riscos.",
      "Procuro ver o lado positivo.",
      "Sinto como se fosse um desafio.",
      "Prefiro perceber a reação dos outros e depois me situar."
    ]
  },
  {
    title:"8) Me identifico mais com a frase:",
    options:[
      "“O que é certo é certo, o que é errado é errado”.",
      "“Sei lidar com o sentimento das pessoas”.",
      "“O resultado é o que interessa”.",
      "“Deve haver um sentido mais profundo”.",
      "“Quem muito fala, pouco pensa“.",
      "“A lei é dura, mas é lei”.",
      "“Faço do limão uma limonada”.",
      "“Sei como fazer as coisas”.",
      "“Não há nada que o tempo não ajeite”."
    ]
  },
  {
    title:"9) Em um trabalho é importante:",
    options:[
      "Cada um assumir sua responsabilidade.",
      "Haver uma boa integração entre as pessoas.",
      "Foco nos resultados.",
      "Valorização das diferenças individuais.",
      "Respeito às opiniões alheias.",
      "Poder confiar nos outros.",
      "Liberdade para inovar.",
      "Uma liderança forte.",
      "Não nos concentrarmos nos conflitos."
    ]
  },
  {
    title:"10) Não gosto que me vejam:",
    options:[
      "Como negligente e irresponsável.",
      "Sendo repreendido ou recriminado.",
      "Falhando; prezo a imagem de competente.",
      "Como uma pessoa comum e normal.",
      "Em situação onde tenho que expor meus sentimentos.",
      "Com desconfiança.",
      "Como chato.",
      "Como fraco e sem importância.",
      "Como bobo e ingênuo."
    ]
  },
  {
    title:"11) Gostaria que as pessoas fossem mais:",
    options:[
      "Disciplinadas.",
      "Compassivas.",
      "Confiantes no potencial de mudar.",
      "Sensíveis.",
      "Racionais.",
      "Leais.",
      "Cabeça aberta.",
      "Lutadoras.",
      "Tranquilas."
    ]
  },
  {
    title:"12) Relação pensar, sentir e fazer que mais coincide comigo:",
    options:[
      "Vejo o que não está como deveria e sinto indignação.",
      "Percebo necessidades dos outros e sinto vontade de lidar com eles.",
      "Estou atento ao que os outros falam e procuro causar boa impressão.",
      "Tendo a comparar meus sentimentos e forma de ser.",
      "Observo e analiso racionalmente; evito decidir no calor da emoção.",
      "Percebo riscos e me posiciono para eliminá-los.",
      "Concentro nos aspectos positivos, evitando a parte densa.",
      "Sei manter minha posição e me oponho quando invadem meu espaço.",
      "Compreendo motivos dos outros e prefiro concordar a criar clima hostil."
    ]
  },
  {
    title:"13) Considero-me uma pessoa:",
    options:[
      "Cumpridora de deveres, honesta e disciplinada.",
      "Com muita vontade e determinação.",
      "Ambiciosa, diplomata, competente e focada em sucesso.",
      "Sensível, criativa, que reconhece valores humanos.",
      "Séria, tranquila, ponderada e na minha.",
      "Leal, colaboradora, que gosta de participar do grupo.",
      "Alegre, jovial, entusiasta, criativa.",
      "Bondosa, justa, direta e objetiva.",
      "Pacífica, compreensiva, mediadora e tranquila."
    ]
  },
  {
    title:"14) Também sou:",
    options:[
      "Crítico e intolerante.",
      "Manipulador e chantagista.",
      "Frio e calculista.",
      "Queixoso e melancólico.",
      "Calado e introspectivo.",
      "Desconfiado e precavido.",
      "Individualista e por vezes insensível.",
      "Ríspido e autoritário.",
      "Indeciso e procrastinador."
    ]
  },
  {
    title:"15) O que eu gosto:",
    options:[
      "Ser e ver tudo perfeito, em ordem.",
      "Ajudar pessoas e trazer felicidade.",
      "Realizar e ter sucesso.",
      "Ser especial e diferente.",
      "Possuir conhecimento, saber.",
      "Ser seguro e pragmático.",
      "Estar feliz e me sentir bem.",
      "Ter poder, comando e liderança.",
      "Estar em paz comigo e com os outros."
    ]
  },
  {
    title:"16) O que eu não gosto e evito:",
    options:[
      "Desordem e bagunça.",
      "Atividades solitárias e sem sentimento.",
      "Fracassar em uma atividade.",
      "Superficialidade e mediocridade.",
      "Conversa fútil e festa barulhenta.",
      "Correr riscos; ser impulsivo.",
      "Tristeza, dor e sofrimento.",
      "Injustiça e falta de respeito.",
      "Conflito, desentendimento e briga."
    ]
  },
  {
    title:"17) Percebo mais do que a maioria:",
    options:[
      "A forma correta e prática de fazer as coisas.",
      "Como ajudar os outros.",
      "Como criar uma boa imagem.",
      "Como a maioria é insensível.",
      "A lógica que liga os fatos.",
      "A possibilidade de risco.",
      "O aspecto positivo.",
      "Como fazer as coisas.",
      "Que muitas discussões não adiantam."
    ]
  },
  {
    title:"18) Não abro mão quando:",
    options:[
      "Sei o que é certo.",
      "Não quero ferir sentimentos dos outros.",
      "O sucesso está comprometido.",
      "Sinto que é meu direito.",
      "Percebo falta de razão.",
      "Não confio nas circunstâncias.",
      "Minha liberdade está em jogo.",
      "Necessito do comando.",
      "Não aguento mais ser pressionado."
    ]
  },
  {
    title:"19) A pior sensação é:",
    options:[
      "Não estar fazendo a coisa certa.",
      "Humilhação.",
      "Ser um ninguém no futuro.",
      "Ser comum, trivial, normal.",
      "Ter que lidar com intolerância burra.",
      "Parecer que vão me atacar ou culpar.",
      "Estar preso e condicionado.",
      "Ter que me submeter à vontade dos outros.",
      "Não ter tranquilidade para nada."
    ]
  },
];

// Descrições resumidas por tipo (base em “Perfis Eneagrama – resumo”, adaptado).
const TYPE_DESCRIPTIONS = {
  1: {
    headline:"Prático, ético, orientado a padrões elevados.",
    strengths:["Determinado","Responsável","Senso de justiça"],
    watchouts:["Exigência excessiva","Rigidez","Autocrítica"],
    blurb:"Atenção dirigida ao que precisa ser melhorado. Procura fazer o ‘certo’ e elevar o padrão, tornando-se crítico quando algo foge do ideal."
  },
  2: {
    headline:"Empático, relacional, move-se para ajudar.",
    strengths:["Carisma","Disponibilidade","Calor humano"],
    watchouts:["Autoesquecimento","Dependência de aprovação","Intrusão"],
    blurb:"Percebe sutilezas emocionais e necessidades alheias. Busca ser querido e útil, podendo exagerar ao fazer pelo outro o que este poderia fazer."
  },
  3: {
    headline:"Focado em metas, flexível, orientado a resultados.",
    strengths:["Motivação","Adaptação","Eficiência"],
    watchouts:["Imagem acima da essência","Competitividade excessiva","Impessoalidade"],
    blurb:"Lê o ambiente em função do sucesso. Ajusta-se para performar e vencer, correndo risco de confundir valor pessoal com desempenho."
  },
  4: {
    headline:"Profundo, original, sensível à identidade.",
    strengths:["Autenticidade","Criatividade","Humanização"],
    watchouts:["Comparação constante","Melancolia","Idealização do ausente"],
    blurb:"Atenção no que falta e no que é singular. Busca significado e intensidade emocional, podendo oscilar entre idealização e desvalorização."
  },
  5: {
    headline:"Analítico, reservado, orientado a entender.",
    strengths:["Ponderação","Especialização","Clareza lógica"],
    watchouts:["Distanciamento","Acúmulo de informação","Avareza de energia"],
    blurb:"Observa para compreender antes de agir. Valoriza autonomia e privacidade, economizando recursos emocionais enquanto organiza o conhecimento."
  },
  6: {
    headline:"Leal, cooperativo, atento a riscos.",
    strengths:["Compromisso","Senso de grupo","Prudência"],
    watchouts:["Ansiedade","Desconfiança","Controle defensivo"],
    blurb:"Explora cenários ‘e se?’ para antecipar problemas. Procura segurança em valores, pessoas ou sistemas confiáveis."
  },
  7: {
    headline:"Otimista, curioso, busca possibilidades.",
    strengths:["Improviso","Entusiasmo","Visão de opções"],
    watchouts:["Dispersão","Evitação de dor","Impaciência"],
    blurb:"Foca no prazer e em alternativas criativas. Prefere manter o clima leve, desviando de limitações e de sentimentos difíceis."
  },
  8: {
    headline:"Assertivo, intenso, orientado ao poder pessoal.",
    strengths:["Coragem","Decisão","Proteção dos seus"],
    watchouts:["Autoritarismo","Insensibilidade","Excesso de intensidade"],
    blurb:"Capta rapidamente dinâmicas de força e se posiciona. Busca autonomia e justiça direta, confrontando quando necessário."
  },
  9: {
    headline:"Pacificador, estável, integrador.",
    strengths:["Flexibilidade","Escuta","Serenidade"],
    watchouts:["Inércia","Indecisão","Autoanulação"],
    blurb:"Procura o ponto comum e o caminho sem atritos. Tende a minimizar conflitos, às vezes esquecendo de suas próprias prioridades."
  }
};

// ---------------------------
// STATE
// ---------------------------
let idx = 0;
let answers = Array(QUESTIONS.length).fill(null); // valores 1..9
let chart;

// ---------------------------
// DOM
// ---------------------------
const $ = (s)=>document.querySelector(s);
const questionContainer = $("#questionContainer");
const progressText = $("#progressText");
const progressBar = $("#progressBar");
const quiz = $("#quiz");
const intro = $("#intro");
const results = $("#results");

// ---------------------------
// HELPERS
// ---------------------------
function renderQuestion(){
  const q = QUESTIONS[idx];
  progressText.textContent = `Questão ${idx+1} / ${QUESTIONS.length}`;
  const percent = Math.round(((idx) / (QUESTIONS.length-1)) * 100);
  progressBar.style.width = `${percent}%`;

  const selected = answers[idx];
  const opts = q.options.map((text,i)=>{
    const type = i+1;
    const checked = selected === type ? "checked" : "";
    const badge = `<span class="badge">Opção ${type}</span>`;
    return `<label class="option">
      <input type="radio" name="q${idx}" value="${type}" ${checked} />
      <div>
        ${badge}
        <div>${text}</div>
      </div>
    </label>`
  }).join("");

  questionContainer.innerHTML = `<h3>${q.title}</h3><div class="options">${opts}</div>`;

  // listeners
  questionContainer.querySelectorAll("input[type=radio]").forEach(inp=>{
    inp.addEventListener("change", (e)=>{
      answers[idx] = Number(e.target.value);
      updateNav();
    })
  });
}

function updateNav(){
  $("#btnPrev").disabled = idx===0;
  $("#btnNext").classList.toggle("hidden", idx===QUESTIONS.length-1);
  $("#btnFinish").classList.toggle("hidden", idx!==QUESTIONS.length-1);
}

function computeScores(){
  const scores = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
  answers.forEach(v=>{ if(v) scores[v]+=1; });
  return scores;
}

function sortTypes(scores){
  return Object.entries(scores)
    .sort((a,b)=> b[1]-a[1] || Number(a[0])-Number(b[0]))
    .map(([k,v])=>({type:Number(k), score:v}));
}

function renderResults(){
  const scores = computeScores();
  const ordered = sortTypes(scores);
  const top3 = ordered.slice(0,3);

  // Summary
  const totalAnswered = answers.filter(Boolean).length;
  $("#summary").innerHTML = `Você respondeu <strong>${totalAnswered}/${QUESTIONS.length}</strong> questões. Quanto mais respostas, mais confiável o retrato.`;

  // Chart
  const ctx = document.getElementById("chart");
  const data = {
    labels: Object.values(TYPES).map(t=>t.name),
    datasets: [{
      label:"Pontuação",
      data: Object.keys(TYPES).map(k=>scores[k]),
      // Border/background colors são definidos pelo Chart.js por padrão (não definimos cores explicitamente).
      fill: true,
      tension: 0.2
    }]
  };
  if(chart){ chart.destroy(); }
  chart = new Chart(ctx, { type:"radar", data, options:{
    responsive:true, maintainAspectRatio:false,
    scales:{ r:{ suggestedMin:0, suggestedMax: Math.max(4, Math.ceil(answers.length/2)) } },
    plugins:{ legend:{ display:false } }
  }});

  // Top 3
  const topList = $("#top3");
  topList.innerHTML = top3.map(({type,score})=>{
    const t = TYPES[type];
    return `<li><strong>${t.name}</strong> — ${score} ponto(s)</li>`;
  }).join("");

  // Descriptions
  const desc = $("#descriptions");
  desc.innerHTML = top3.map(({type})=>{
    const t = TYPES[type], d = TYPE_DESCRIPTIONS[type];
    const badges = t.words.map(w=>`<span class="badge">${w}</span>`).join("");
    return `<div class="desc-card">
      <h4>${t.name}</h4>
      <div class="desc-meta">${d.headline}</div>
      <p>${d.blurb}</p>
      <div class="badges">${badges}</div>
    </div>`;
  }).join("");

  intro.classList.add("hidden");
  quiz.classList.add("hidden");
  results.classList.remove("hidden");
}

function showQuiz(){
  intro.classList.add("hidden");
  results.classList.add("hidden");
  quiz.classList.remove("hidden");
  renderQuestion();
  updateNav();
}

function resetAll(){
  idx = 0;
  answers = Array(QUESTIONS.length).fill(null);
  showQuiz();
}

// ---------------------------
// AJUSTE DO BOTÃO COMEÇAR/SAIR
// ---------------------------
const btnStart = document.getElementById("btnStart");

function showIntro(){
  quiz.classList.add("hidden");
  results.classList.add("hidden");
  intro.classList.remove("hidden");

  // restaura botão para "Começar"
  btnStart.textContent = "Começar";
  btnStart.classList.add("primary");
  btnStart.classList.remove("ghost");
  btnStart.onclick = (e)=>{
    e.preventDefault();
    showQuiz();
  };
}

function showQuiz(){
  intro.classList.add("hidden");
  results.classList.add("hidden");
  quiz.classList.remove("hidden");
  renderQuestion();
  updateNav();

  // troca botão para "Sair"
  btnStart.textContent = "Sair";
  btnStart.classList.remove("primary");
  btnStart.classList.add("ghost");
  btnStart.onclick = (e)=>{
    e.preventDefault();
    showIntro();
  };
}

// ---------------------------
// EVENTS
// ---------------------------
document.addEventListener("DOMContentLoaded", ()=>{
  btnStart.onclick = (e)=>{ e.preventDefault(); showQuiz(); };
  document.getElementById("btnStart2").onclick = (e)=>{ e.preventDefault(); showQuiz(); };

  $("#btnPrev").onclick = ()=>{ idx=Math.max(0, idx-1); renderQuestion(); updateNav(); };
  $("#btnNext").onclick = ()=>{ idx=Math.min(QUESTIONS.length-1, idx+1); renderQuestion(); updateNav(); };
  $("#btnFinish").onclick = ()=> renderResults();

  $("#btnRevisar").onclick = ()=>{
    results.classList.add("hidden");
    quiz.classList.remove("hidden");
    renderQuestion();
    updateNav();
  };
  $("#btnRefazer").onclick = resetAll;

  $("#btnSalvar").onclick = ()=>{
    const payload = { answers, scores: computeScores(), finishedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(payload,null,2)], {type:"application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "resultado-eneagrama.json"; a.click();
    URL.revokeObjectURL(url);
  };

  $("#btnImprimir").onclick = ()=> window.print();

  document.getElementById("btnComoFunciona").onclick = ()=> document.getElementById("modalComo").showModal();
});

