const imagesCarrousel = [
  {
    image: "./assets/img/Carousel/Cachoeira_Santo_Antonio.jpg",
  },
  {
    image: "./assets/img/Carousel/Cristo.jpg",
  },
  {
    image: "./assets/img/Carousel/Serra_da_Piedade.jpg",
  },
];

imagesCarrousel.map(function (image, index) {
  document
    .querySelector("#carrousel-target")
    .insertAdjacentHTML(
      "beforeend",
      `<li style="cursor:pointer" data-target="#mainSlider" data-slide-to=${index} class=${
        index == 0 ? "active" : ""
      }></li> `
    );
});

imagesCarrousel.map(function (item, index) {
  document.querySelector("#carrousel-itens").insertAdjacentHTML(
    "beforeend",
    `<div class="carousel-item ` +
      (index == 0 ? "active" : "") +
      ` h-100" >
         <img class="d-block" src=${item.image} style="width: 100%" alt="Primeiro Slide">     
    </div>`
  );
});

const locations = [
  {
    id: 1,
    name: "Torre Eiffel",
    description:
      "Construída no mesmo eixo do Champs de Mars em Paris, a Torre Eiffel possui uma arquitetura original, baseada em 4 pilares metálicos arcobotantes que culminam em uma espécie de poste. Inicialmente vista como um desafio técnico e arquitetural, ela logo se tornou o emblema de Paris e o sinônimo de inovação e proeza. Hoje, sua silhueta é conhecida no mundo inteiro e faz parte do imaginário coletivo como símbolo de grandeza, inspirando artistas, estetas e sonhadores.",
    location: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",
    registerDate: "31 de Março de 1889",
    image: [
      {
        image: "./assets/img/Locations/TorreEiffel/1.jpg",
        description:
          "A Torre Eiffel, ícone de Paris, brilha majestosamente à noite, iluminando o horizonte com seu esplendor. Uma vista verdadeiramente cativante.",
      },
      {
        image: "./assets/img/Locations/TorreEiffel/2.jpeg",
        description:
          "O romance parisiense floresce sob a sombra da Torre Eiffel, onde casais se encontram para jurar amor eterno.",
      },
      {
        image: "./assets/img/Locations/TorreEiffel/3.jpeg",
        description:
          "A estrutura de ferro forjada da Torre Eiffel é uma obra-prima da engenharia e um monumento à criatividade humana.",
      },
      {
        image: "./assets/img/Locations/TorreEiffel/4.jpeg",
        description:
          "No topo da Torre Eiffel, vistas panorâmicas de Paris se estendem como um tapete, revelando sua beleza de tirar o fôlego.",
      },
      {
        image: "./assets/img/Locations/TorreEiffel/5.jpeg",
        description:
          "A Torre Eiffel é um símbolo da elegância parisiense, testemunha silenciosa das mudanças e eventos que moldaram a cidade ao longo dos anos.",
      },
      {
        image: "./assets/img/Locations/TorreEiffel/6.jpeg",
        description:
          "A grande dama de ferro, a Torre Eiffel, recebe milhões de visitantes anualmente, encantando-os com sua história e vista impressionante.",
      },
    ],
  },
  {
    id: 2,
    name: "Serra da Piedade",
    description:
      "A Serra da Piedade está localizada na formação geológica do Espinhaço, a 1.746 metros acima do nível do mar, este ponto é onde se encontra a Ermida de Nossa Senhora da Piedade do alto dela é possível avistar seis cidades. Os primeiros apontamentos sobre a Serra da Piedade datam de aproximadamente 1673, quando o bandeirante Fernão Dias buscava encontrar prata na então chamada Serra de Sabarabuçu. O percurso até o topo da montanha é feito por uma estrada sinuosa, na qual estão dispostos 15 painéis de azulejos com cenas da via sacra. Do topo da serra pode-se contemplar uma bela vista do entorno. Lá também estão a Casa dos Romeiros, o Cruzeiro, o Restaurante Panorâmico, o Observatório Astronômico e a Igreja Abrigo de Nossa Senhora da Piedade.      ",
    location: "Ravena, Caeté - State of Minas Gerais",
    registerDate: "-",
    image: [
      {
        image: "./assets/img/Locations/SerraPiedade/1.jpeg",
        description:
          "A majestosa Serra da Piedade, em Caeté, abraça seus visitantes com sua aura espiritual, oferecendo um refúgio de serenidade e contemplação em meio à natureza deslumbrante.",
      },
      {
        image: "./assets/img/Locations/SerraPiedade/2.jpeg",
        description:
          "O Santuário da Serra da Piedade, em Caeté, é um local sagrado que atrai peregrinos em busca de reflexão e espiritualidade, cercados por paisagens deslumbrantes.",
      },
      {
        image: "./assets/img/Locations/SerraPiedade/3.jpeg",
        description:
          "As trilhas sinuosas da Serra da Piedade, em Caeté, levam a mirantes espetaculares, onde se pode admirar a beleza da região e encontrar paz interior.",
      },
      {
        image: "./assets/img/Locations/SerraPiedade/4.jpeg",
        description:
          "A Serra da Piedade, em Caeté, é um tesouro natural de Minas Gerais, onde a vegetação exuberante e a tranquilidade espiritual se harmonizam perfeitamente.",
      },
      {
        image: "./assets/img/Locations/SerraPiedade/5.jpeg",
        description:
          "Caeté revela sua joia mais preciosa na Serra da Piedade, um santuário que acalma a alma e oferece vistas panorâmicas que tocam o coração.",
      },
      {
        image: "./assets/img/Locations/SerraPiedade/6.jpeg",
        description:
          "A Serra da Piedade, em Caeté, é um convite à contemplação e à conexão com a natureza. Um refúgio espiritual que renova a mente e o espírito.",
      },
    ],
  },
  {
    id: 3,
    name: "Burj Khalifa",
    description:
      'Burj Khalifa Bin Zayid (em árabe: برج خليفة; "Torre do Khalifa"), anteriormente conhecido como Burj Dubai, é um arranha-céu localizado em Dubai, nos Emirados Árabes Unidos, sendo a mais alta estrutura e, consequentemente, o maior arranha-céu já construído pelo ser humano, com 828 metros de altura e 160 andares. Sua construção começou em 21 de setembro de 2004 e foi inaugurado no dia 4 de janeiro de 2010. Foi rebatizado devido ao empréstimo feito por Khalifa bin Zayed al Nahyan, xeque do emirado de Abu Dhabi, depois que este emprestou dez bilhões de dólares para evitar que o emirado de Dubai desse um calote em investidores de uma de suas principais companhias, a Dubai World. O edifício faz parte de um complexo comercial e residencial de dois quilômetros quadrados de área chamado Downtown Dubai, localizado ao lado das duas principais avenidas da cidade de Dubai, a Sheikh Zayed Road e a Financial Centre Road (anteriormente conhecida como Doha Street). O arquiteto do edifício é Adrian Smith, que trabalhou com a Skidmore, Owings and Merrill (SOM) até 2006. A empresa de arquitetura e engenharia sediada na cidade estadunidense de Chicago ficou encarregada do projeto arquitetônico do prédio. As primeiras empreiteiras são a Samsung Engineering & Construction, a Besix e a Arabtec.] A Turner Construction Company foi escolhida para comandar o projeto. O orçamento total do projeto do Burj Khalifa girou em torno de 1,5 bilhão de dólares. Mohamed Ali Alabbar, o presidente da Emaar Propertiers falou, no 8.º Congresso Mundial do Council on Tall Buildings and Urban Habitat, que o preço do metro quadrado de sala de escritório é de 43 000 dólares, e a Armani Residences, imobiliária encarregada das vendas dos apartamentos, comercializava o metro quadrado das salas por 37 500 dólares.',
    location:
      "1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates",
    registerDate: "4 de Janeiro de 2010",
    image: [
      {
        image: "./assets/img/Locations/BurjKhalifa/1.jpeg",
        description:
          "A Burj Khalifa, em Dubai, toca o céu como um gigante de vidro e aço, uma maravilha arquitetônica que redefine o horizonte urbano e inspira admiração global.",
      },
      {
        image: "./assets/img/Locations/BurjKhalifa/2.jpeg",
        description:
          "A grandiosa Burj Khalifa, em Dubai, é um ícone de excelência arquitetônica, oferecendo vistas deslumbrantes sobre o deserto e o Golfo Pérsico a partir de seus mirantes.",
      },
      {
        image: "./assets/img/Locations/BurjKhalifa/3.jpeg",
        description:
          "A Burj Khalifa, em Dubai, é uma torre que desafia os limites do possível, elevando-se a alturas extraordinárias e simbolizando a visão futurista desta cidade dinâmica.",
      },
      {
        image: "./assets/img/Locations/BurjKhalifa/4.jpeg",
        description:
          "A magnífica Burj Khalifa, em Dubai, combina tecnologia de ponta com design elegante, proporcionando uma experiência única de observação e um vislumbre do futuro.",
      },
      {
        image: "./assets/img/Locations/BurjKhalifa/5.jpeg",
        description:
          "A Burj Khalifa, em Dubai, é uma maravilha moderna que reflete a ambição e a visão desta metrópole cosmopolita, um farol de inovação e luxo.",
      },
      {
        image: "./assets/img/Locations/BurjKhalifa/6.jpeg",
        description:
          "No coração de Dubai, a Burj Khalifa se destaca como um tributo à engenhosidade humana, uma torre de inspiração que continua a elevar os padrões da arquitetura mundial.",
      },
    ],
  },
  {
    id: 4,
    name: "Cachoeira de Santo Antonio",
    description:
      "A Cachoeira de Santo Antônio fica a 50km de Belo Horizonte, em Morro Vermelho – MG. A estrada principal de acesso se dá por Raposos – MG e possui um longo trecho de quase 20km de estrada de terra. O local não possui infraestrutura turística e os veículos ficam a 800m da cachoeira. Deve-se tomar cuidado para não deixar objetos de valor no carro. O ponto mais alto da cachoira possui 35m de altura, sendo que 6m o praticante faz rapel positivo (utilizando o apoio dos pés) e 29m no negativo (suspensão total na via, sem apoio dos pés). Como obrigação, o praticante deve utilizar colete salva vidas pois o poço da mesma possui aproximadamente 12m de profundidade e 20m de comprimento. Não recomendamos a prática de rapel neste local para quem não sabe nadar. O praticante de rapel ainda tem como opção deixar a corda alguns metros acima da água para que quando chegar no final da corda cair alguns metros diretamente na água. Deve-se tomar cuidado ao efetuar este tipo de prática. Já houveram casos de costelas fraturadas na cachoeira com praticantes efetuando saltos. Na lateral esquerda da Cachoeira de Santo Antônio, o Liga Rapel abriu uma nova opção de rapel para os praticantes de rapel em 2015. Adicionamos uma opção de rapel guiado no qual o praticante desce uma parte por dentro da queda d’água e outra parte por fora saindo pelo rapel guiado. Para utilizar esta opção você deve dominar a montagem e técnica de descida com rapel guiado, o risco de acidentes é alto ao praticar com imperícia.",
    location: "Caeté - State of Minas Gerais, 34800-000",
    registerDate: "-",
    image: [
      {
        image: "./assets/img/Locations/CachoeiraSantoAntonio/1.jpeg",
        description:
          "A Cachoeira de Santo Antônio, em Caeté, é um paraíso escondido, onde águas cristalinas dançam sobre as pedras, criando um refúgio sereno para quem busca paz na natureza.",
      },
      {
        image: "./assets/img/Locations/CachoeiraSantoAntonio/2.jpeg",
        description:
          "Cercada pela exuberante Mata Atlântica, a Cachoeira de Santo Antônio, em Caeté, é uma joia natural que convida a mergulhar em suas águas refrescantes e a conectar-se com a natureza.",
      },
      {
        image: "./assets/img/Locations/CachoeiraSantoAntonio/3.jpeg",
        description:
          "A Cachoeira de Santo Antônio, em Caeté, é um cenário de beleza intocada, onde o som suave da água em cascata e o canto dos pássaros acalmam a alma.",
      },
      {
        image: "./assets/img/Locations/CachoeiraSantoAntonio/4.jpeg",
        description:
          "Nas margens da Cachoeira de Santo Antônio, em Caeté, é possível encontrar um refúgio de paz e serenidade, onde a natureza revela sua majestade e encanto.",
      },
      {
        image: "./assets/img/Locations/CachoeiraSantoAntonio/5.jpeg",
        description:
          "A Cachoeira de Santo Antônio, em Caeté, é um convite à aventura e à contemplação, um local mágico onde a pureza da água encontra a exuberância da vegetação.",
      },
      {
        image: "./assets/img/Locations/CachoeiraSantoAntonio/6.jpeg",
        description:
          "Descubra a Cachoeira de Santo Antônio, em Caeté, e deixe-se envolver pela magia da natureza, em um lugar que renova corpo e espírito com sua beleza e tranquilidade.",
      },
    ],
  },
  {
    id: 5,
    name: "Coliseu",
    description:
      "O Coliseu de Roma ou Anfiteatro Flaviano é um grandioso monumento histórico e arquitetônico de formato cilíndrico que está localizado na capital da Itália: Roma. Construído na Antiguidade, o Coliseu de Roma atualmente é um dos pontos turísticos mais visitados da cidade. Esse patrimônio histórico mundial revela a habilidade e as diversas técnicas utilizadas pelos arquitetos, engenheiros e construtores da Roma Antiga. É, portanto, um dos maiores exemplos da arquitetura romana. O Coliseu foi incluído pela Unesco na lista dos Patrimônios da Humanidade. Além disso, em 2007 foi eleito uma das Sete Maravilhas do Mundo Moderno.",
    location: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
    registerDate: "80 d.C",
    image: [
      {
        image: "./assets/img/Locations/Coliseu/1.jpeg",
        description:
          "O Coliseu de Roma, uma obra-prima do Império Romano, é um ícone da grandiosidade arquitetônica e histórica. Um anfiteatro que ecoa os rugidos das batalhas de gladiadores do passado.",
      },
      {
        image: "./assets/img/Locations/Coliseu/2.jpeg",
        description:
          "O Coliseu de Roma, com sua arquitetura imponente, transporta os visitantes para a Roma Antiga, onde espetáculos épicos e eventos culturais aconteciam diante de multidões extasiantes.",
      },
      {
        image: "./assets/img/Locations/Coliseu/3.jpeg",
        description:
          'O Coliseu de Roma, conhecido como "Anfiteatro Flaviano," é um testemunho da engenhosidade romana, um local que abrigou eventos marcantes da história, enraizado no coração da Cidade Eterna.',
      },
      {
        image: "./assets/img/Locations/Coliseu/4.jpeg",
        description:
          "O Coliseu de Roma, com sua grandiosa estrutura, evoca a glória e a brutalidade das lutas de gladiadores que uma vez ecoaram por suas arquibancadas.",
      },
      {
        image: "./assets/img/Locations/Coliseu/5.jpeg",
        description:
          "O Coliseu de Roma, uma das Sete Maravilhas do Mundo, é um símbolo da habilidade arquitetônica romana e um monumento à paixão por entretenimento e espetáculos na antiguidade.",
      },
      {
        image: "./assets/img/Locations/Coliseu/6.jpeg",
        description:
          "Hoje, o Coliseu de Roma é um local de peregrinação para amantes da história, um lugar onde os vestígios do passado se fundem com a modernidade, contando a história de Roma ao mundo.",
      },
    ],
  },
  {
    id: 6,
    name: "Cristo Redentor",
    description:
      "O Cristo Redentor encontra-se de braços abertos, formando uma cruz, e tem 38 metros de altura, o que equivale a um edifício de 13 andares. Desse total, 30 metros são do monumento e oito do pedestal. Cada braço tem área de 88 metros quadrados e o pé mede 1,35 metro. Somente a cabeça pesa 30 toneladas. O monumento foi construído no Brasil, exceto a cabeça e as mãos, que foram moldadas em Paris, na França. O corpo de Cristo foi feito de pedra-sabão, que foi cortada em milhares de triângulos. Eles foram colados à mão sobre um tecido e, depois, aplicados na estátua por pastilheiros. A única parte projetada para o interior da construção é o coração do Cristo Redentor, que mede 1,30 metro. O interior é composto por 12 platôs, ligados por escadarias, formando andares que se abrem nos braços e na cabeça. O monumento está preparado para resistir a ventos de até 250 km/h.",
    location:
      "Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ",
    registerDate: "4 de Abril de 1922",
    image: [
      {
        image: "./assets/img/Locations/CristoRedentor/1.jpeg",
        description:
          "O Cristo Redentor, imponente sobre o Rio de Janeiro, é um ícone da fé e da cultura brasileira, abençoando a cidade com sua presença majestosa e acolhedora.",
      },
      {
        image: "./assets/img/Locations/CristoRedentor/2.jpeg",
        description:
          "De braços abertos, o Cristo Redentor abraça o Rio de Janeiro, oferecendo vistas panorâmicas deslumbrantes, que revelam a beleza única dessa cidade cercada por montanhas e mar.",
      },
      {
        image: "./assets/img/Locations/CristoRedentor/3.jpeg",
        description:
          "O Cristo Redentor, com seus 30 metros de altura, é uma maravilha da engenharia e um símbolo da hospitalidade carioca, recebendo visitantes de todo o mundo.",
      },
      {
        image: "./assets/img/Locations/CristoRedentor/4.jpeg",
        description:
          "Erguido no alto do Morro do Corcovado, o Cristo Redentor é um farol espiritual que ilumina o Rio de Janeiro e inspira milhões com sua mensagem de amor e paz.",
      },
      {
        image: "./assets/img/Locations/CristoRedentor/5.jpeg",
        description:
          "O Cristo Redentor, Patrimônio Mundial da UNESCO, é uma atração imperdível que se destaca no cenário carioca, unindo fé, cultura e uma vista de tirar o fôlego.",
      },
      {
        image: "./assets/img/Locations/CristoRedentor/6.jpeg",
        description:
          "Com seus braços estendidos para o céu, o Cristo Redentor é uma representação inspiradora da religião e do espírito acolhedor do Brasil, um símbolo de unidade e esperança.",
      },
    ],
  },
  {
    id: 7,
    name: "Mesquita Azul",
    description:
      "A Mesquita do Sultão Ahmed (em turco: Sultanahmet Camii), também conhecida como Mesquita Azul, é uma mesquita otomana de Istambul, Turquia.[1] Foi construída entre 1609 e 1616 e está situada na Praça Sultanahmet, no distrito de Fatih, em frente da Basílica de Santa Sofia, da qual se encontra separada por um espaço ajardinado. É uma das 5 mesquitas da Turquia que possui seis minaretes. A Mesquita Azul é um triunfo em harmonia, proporção e elegância. Construída em um estilo clássico otomano, o seu magnífico exterior não faz sombra a seu suntuoso interior. Uma verdadeira sinfonia de belos mosaicos azuis de İznik [en] dão a este espaço uma atmosfera muito especial. A mesquita ocupa uma parte da área outrora ocupada pelo Grande Palácio de Constantinopla, a residência dos imperadores bizantinos entre 330 e 1081. Em 1606 o sultão Amade I quis construir uma mesquita maior, mais imponente e mais bonita do que Santa Sofia. O edifício tem 43 metros de altura.",
    location: "Binbirdirek, At Meydanı Cd No:10, 34122 Fatih/İstanbul, Türkiye",
    registerDate: "1616",
    image: [
      {
        image: "./assets/img/Locations/MesquitaAzul/1.jpeg",
        description:
          "A Mesquita Azul, em Istambul, é uma joia arquitetônica e religiosa que se destaca pelo seu exterior revestido de azulejos e seus minaretes majestosos, inspirando reverência e admiração.",
      },
      {
        image: "./assets/img/Locations/MesquitaAzul/2.jpeg",
        description:
          "A Mesquita Azul, ou Sultanahmet Camii, é um marco icônico da Turquia, onde a espiritualidade e a beleza arquitetônica se unem em harmonia, cativando visitantes de todo o mundo.",
      },
      {
        image: "./assets/img/Locations/MesquitaAzul/3.jpeg",
        description:
          "Os azulejos azuis da Mesquita Azul de Istambul brilham como jóias, criando um ambiente celestial para orações e reflexão, em um local que transborda espiritualidade e história.",
      },
      {
        image: "./assets/img/Locations/MesquitaAzul/4.jpeg",
        description:
          "A Mesquita Azul é uma maravilha da arquitetura islâmica, uma obra-prima que testemunha a grandiosidade do Império Otomano e convida à contemplação e reverência.",
      },
      {
        image: "./assets/img/Locations/MesquitaAzul/5.jpeg",
        description:
          "A Mesquita Azul é um portal para a espiritualidade e uma aula de história, onde a fé muçulmana e a arte arquitetônica se entrelaçam, deixando um legado duradouro.",
      },
      {
        image: "./assets/img/Locations/MesquitaAzul/6.jpeg",
        description:
          "Com sua cúpula majestosa e minaretes imponentes, a Mesquita Azul é um monumento sagrado e um símbolo da diversidade cultural de Istambul, onde o antigo encontra o contemporâneo.",
      },
    ],
  },
  {
    id: 8,
    name: "Palacio Topikapi",
    description:
      'O Palácio de Topkapı (em turco: Topkapı Sarayı) localiza-se na cidade de Istambul, na Turquia. Topkapı significa "porta do canhão". Foi construído por Maomé II, o Conquistador, logo após a conquista de Constantinopla, em 1453, e foi a residência dos sultões otomanos durante quatro séculos. Atualmente o Palácio é dividido em várias salas de exposição com objetos de ouro (tronos, xícaras, talheres, berços, joias diversas cravejadas em pedras preciosas), prata, cerâmica, miniaturas, roupas e relíquias sagradas para os muçulmanos, como os pelos da barba e a marca do pé do profeta Maomé.',
    location: "Cankurtaran, 34122 Fatih/İstanbul, Türkiye",
    registerDate: "1453",
    image: [
      {
        image: "./assets/img/Locations/PalacioTopikapi/1.jpeg",
        description:
          "O Palácio Topkapi, em Istambul, é uma jóia histórica que abrigou sultões otomanos por séculos. Seus pátios exuberantes e tesouros fascinantes revelam a grandiosidade da dinastia.",
      },
      {
        image: "./assets/img/Locations/PalacioTopikapi/2.jpeg",
        description:
          "O Palácio Topkapi é um tesouro de arte e cultura, com seus suntuosos salões e jardins paradisíacos que contam histórias de impérios perdidos e governantes poderosos.",
      },
      {
        image: "./assets/img/Locations/PalacioTopikapi/3.jpeg",
        description:
          "O Palácio Topkapi é uma viagem no tempo, onde os visitantes podem explorar tesouros imperiais, incluindo a famosa Sala dos Tesouros, repleta de joias e relíquias deslumbrantes.",
      },
      {
        image: "./assets/img/Locations/PalacioTopikapi/4.jpeg",
        description:
          "Os interiores opulentos do Palácio Topkapi revelam o luxo e a sofisticação do Império Otomano, oferecendo um vislumbre da vida dos sultões e de sua corte.",
      },
      {
        image: "./assets/img/Locations/PalacioTopikapi/5.jpeg",
        description:
          "Os jardins do Palácio Topkapi, com vista para o Estreito de Bósforo, proporcionam um refúgio de paz e beleza, onde a história se funde com a paisagem encantadora de Istambul.",
      },
      {
        image: "./assets/img/Locations/PalacioTopikapi/6.jpeg",
        description:
          "O Palácio Topkapi é um testemunho da riqueza cultural e histórica de Istambul, um local onde a majestade e a herança otomana continuam a encantar e cativar visitantes de todo o mundo.",
      },
    ],
  },
  {
    id: 9,
    name: "Time Square",
    description:
      "Times Square é a denominação da área formada na confluência e cruzamento de duas grandes avenidas da cidade de Nova Iorque, Estados Unidos; podendo ser definida como uma grande praça ou largo, composta por vários cruzamentos e esquinas. A área está localizada na junção da Broadway com a Sétima Avenida, entre a 42nd Street e a 47th Street, na região central de Manhattan. É uma área comercial, onde todos os prédios são obrigados a instalar letreiros luminosos para propósitos de publicidade. Cabe ressaltar que a Times Square não se trata de uma rua ou avenida, uma vez que não existe nenhuma via trafegável registrada e denominada como tal no Guia Oficial de Ruas e Endereços da Cidade de Nova Iorque, tampouco pode ser tratada como uma simples esquina, já que a área mapeada pela prefeitura da cidade incluía oficialmente 12 cruzamentos de vias públicas, tendo sido mais recentemente modificada para atender o grande fluxo de turistas e transeuntes, com a definição de áreas exclusivas para pedestres.",
    location: "Manhattan, NY 10036, United States",
    registerDate: "Abril de 1904",
    image: [
      {
        image: "./assets/img/Locations/TimeSquare/1.jpeg",
        description:
          "Times Square, o coração de Nova York, brilha incessantemente com néons e anúncios, criando uma atmosfera eletrizante que nunca dorme, atraindo multidões de todo o mundo para sua energia única.",
      },
      {
        image: "./assets/img/Locations/TimeSquare/2.jpeg",
        description:
          "A Times Square é um ícone mundial de entretenimento e cultura, onde os teatros da Broadway e lojas de classe mundial se misturam em uma celebração constante da diversidade e criatividade.",
      },
      {
        image: "./assets/img/Locations/TimeSquare/3.jpeg",
        description:
          "À meia-noite, a descida da bola na Times Square marca o início de um novo ano com uma explosão de alegria, enquanto multidões se reúnem para celebrar esperanças e sonhos.",
      },
      {
        image: "./assets/img/Locations/TimeSquare/4.jpeg",
        description:
          'Times Square, conhecida como "A Encruzilhada do Mundo", é um ponto de encontro global, onde pessoas de todas as origens se unem para celebrar, protestar e aproveitar a vida urbana.',
      },
      {
        image: "./assets/img/Locations/TimeSquare/5.jpeg",
        description:
          "A Times Square é um caldeirão cultural de música, arte e moda, onde tendências são definidas, e a criatividade encontra seu público em meio ao cenário luminoso e pulsante de Nova York.",
      },
      {
        image: "./assets/img/Locations/TimeSquare/6.jpeg",
        description:
          'Os letreiros icônicos de neon da Times Square, apelidada de "The Great White Way", são um símbolo da promessa e da possibilidade, onde os sonhos ganham vida nas noites de Nova York.',
      },
    ],
  },
  {
    id: 10,
    name: "Basilica de São Pedro",
    description:
      "A Basílica de São Pedro (em latim: Basilica Sancti Petri, em italiano Basilica di San Pietro) é uma basílica no Estado do Vaticano. Trata-se do maior e mais importante edifício religioso do catolicismo e um dos locais cristãos mais visitados do mundo.[1][2][3] Cobre uma área de 23 000 m² ou 2,3 hectares (5,7 acres) e pode albergar mais de 60 mil devotos (mais de cem vezes a população do Vaticano). É o edifício com o interior mais proeminente do Vaticano, sendo a sua cúpula uma característica dominante do horizonte de Roma, adornado com 340 estátuas de santos, mártires e anjos.[4] Situada na Praça de São Pedro, a sua construção recebeu contribuições de alguns dos maiores artistas da história da humanidade, tais como Bramante, Michelângelo,[5] Rafael e Bernini. ",
    location: "Piazza San Pietro, 00120 Città del Vaticano, Vatican City",
    registerDate: "18 de novembro de 1626",
    image: [
      {
        image: "./assets/img/Locations/Vaticano/1.jpeg",
        description:
          "A Basílica de São Pedro, no Vaticano, é uma obra-prima do renascimento, uma testemunha da fé e um tributo à grandiosidade artística que atrai devotos e amantes da arte.",
      },
      {
        image: "./assets/img/Locations/Vaticano/2.jpeg",
        description:
          "A majestosa Basílica de São Pedro ergue-se imponente sobre a Praça de São Pedro, abençoando Roma com sua presença e atraindo peregrinos de todo o mundo.",
      },
      {
        image: "./assets/img/Locations/Vaticano/3.jpeg",
        description:
          "Os interiores da Basílica de São Pedro, adornados com afrescos e esculturas deslumbrantes, oferecem uma experiência espiritual e estética incomparável.",
      },
      {
        image: "./assets/img/Locations/Vaticano/4.jpeg",
        description:
          "Os interiores da Basílica de São Pedro, adornados com afrescos e esculturas deslumbrantes, oferecem uma experiência espiritual e estética incomparável.",
      },
      {
        image: "./assets/img/Locations/Vaticano/5.jpeg",
        description:
          "A Basílica de São Pedro é o coração da Igreja Católica, onde a arte sacra e a arquitetura renascentista se unem para criar um local sagrado e inspirador.",
      },
      {
        image: "./assets/img/Locations/Vaticano/6.jpeg",
        description:
          "A grandiosa Basílica de São Pedro é um farol de fé e cultura, onde a devoção religiosa e o amor pela arte se entrelaçam, criando um tesouro atemporal no coração de Roma.",
      },
    ],
  },
];

locations.map(function (item) {
  document.querySelector("#selling-items").insertAdjacentHTML(
    "beforeend",
    `<div style="height: auto">
          <a  href="location.html?id=${item.id}">
            <div class="card-style">
              <div class="album-item-style">
                <img style="max-height:100%; width:100%; border-radius:4px" src=${item.image[0].image} alt="">
              </div>
              <div>
                <p class="card-title-style" style="">${item.name}</p>
              </div>
			        <p class="card-description-style">${item.description}</p>
			        <span style="font-weight:600">Clique para mais detalhes</span>
            </div>
            </a>
      </div>
    `
  );
});

fetch("http://localhost:3000/blog/:category")
  // Tratamento do sucesso
  .then(response => response.json())  // converter para json
  .then(json => console.log(json))    //imprimir dados no console
  .catch(err => console.log('Erro de solicitação', err)); // lidar com os erros por catch