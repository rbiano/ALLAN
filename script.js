const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual estilo de carro vc acha massa pra fazer um projeto de drift?",
        alternativas: [
            {
                texto: "chevette tubarão",
                afirmacao: "afirmação"
            },
            {
                texto: "supra gt-300",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual motor seria melhor para o seu projeto?",
        alternativas: [
            {
                texto: "2jz",
                afirmacao: "afirmação"
            },
            {
                texto: "V8 bi turbo.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual melhor tração para fazer drift?",
        alternativas: [
            {
                texto: "Tração traseira.",
                afirmacao: "afirmação"
            },
            {
                texto: "Tração Frontal.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Se vc tivesse R$18.000. vc gastaria em qual alternativa para melhorar su projeto?",
        alternativas: [
            {
                texto: "Em uma fueltec ft600 de R$13.190.",
                afirmacao: "afirmação"
            },
            {
                texto: "Um kit padaria de R$14.000 .",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "quantos hp tinha o supra do Smoky Nagata da top secret em 1995? ",
        alternativas: [
            {
                texto: "700hp .",
                afirmacao: "afirmação"
            },
            {
                texto: "200hp.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "seu projeto ficou em R$1.044.121.Vc acha possivel tirar esse projeto do papel para pater o record do Smoky Nagata";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
