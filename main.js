/*--- menu mobile ---*/
const MENU = document.querySelector('#menu-mobile')
const ICONE_MENU = document.querySelector('.icone-menu')
const EXIT = document.querySelector('#menu-exit')

function abrirMenuMobile() {
    MENU.classList.remove('display-menu')
}

function fecharMenuMobile() {
    MENU.classList.add('display-menu')
}

ICONE_MENU.onclick = abrirMenuMobile
EXIT.onclick = fecharMenuMobile

/*--- interesses ---*/
const LISTA_INTERESSES = document.querySelectorAll('.icones-interesses')

for(let i = 0; i < LISTA_INTERESSES.length; i++) {
    const INTERESSE = LISTA_INTERESSES[i]
    let idInteresse = INTERESSE.id
    
    INTERESSE.onclick = function() {
        mostraTexto(idInteresse)
    }
}

const descricoesInteresses = {
    'interesse-harry potter:Eu sempre fui apaixonado desde criança, eu decorei os feitiços e já assisti a saga umas 7 vezes. a minha casa é a sonserina',
  
    'interesse-fotografia':'sempre amei tirar fotos, por onde eu passo eu gosto de registar o meus melhores momento!',

    'interesse-música':'Eu não consigo viver sem ouvir música no meu dia a dia, pois a música me ajuda a relaxar e esquecer um pouco os problemas da vida.',
    
  'interesse-skate':'Eu comecei a andar de skate com 6 anos de idade, aprendi com os meus primos. ja sofri diveresas quedas, porem nunca quebrei nada. Eu ia para a escola de skate, hoje em dia eu não ando muito mas eu gosto bastante!',
    }

function mostraTexto (idInteresse) {
    let texto = document.querySelector('#texto-interesse')
    let caixaDisplay = document.querySelector('#caixa-texto-interesses')

    caixaDisplay.classList.remove('display-informacoes-interesses')

    texto.innerHTML = descricoesInteresses[idInteresse] || ''
}

