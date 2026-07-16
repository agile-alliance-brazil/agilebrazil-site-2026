import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {
  comunidades = [
    {
      name: '6 e Byte',
      description: '<p class="title"> <strong >6 e Byte</strong> <br/> Somos profissionais da área de tecnologia. Nesse canal temos um único propósito: Falar sobre tecnologia de uma maneira leve e discontraída, trazendo dos mais variados profissionais da área.</p>',
      imageUrl: '/2026/assets/images/comunidade_6_byte.jpg',
      tags: ['Produto'],
      instagram: 'https://www.instagram.com/6ebyte',
      youtube: 'https://www.youtube.com/@6ebyte'
    },
    {
      name: 'DEVPIRA',
      description: '<p class="title"> <strong>DEVPIRA</strong> <br/> Somos uma comunidade feita de "pessoal do TI" para "pessoal do TI": programadores, POs, QAs, PMs, designers e apaixonados por pessoas e tecnologia. Sem fins lucrativos, disseminamos conhecimento em Piracicaba, onde “o peixe para”, mas a tecnologia avança e inspira novas pessoas.</p>',
      imageUrl: '/2026/assets/images/comunidade_devpira.png',
      tags: ['Agilidade', 'Produto', 'Tecnologia', 'Desenvolvimento', 'Inteligência Artificial', 'Design', 'Liderança'],
      instagram: 'https://www.instagram.com/devpira/',
      link: 'https://www.devpira.com.br/'
    },
    {
      name: 'Agile Campinas & região',
      description: '<p class="title"> <strong>Agile Campinas & região</strong> <br/> A comunidade Agile Campinas & Região é um grupo inclusivo para entusiastas da agilidade, do desenvolvimento de software a áreas como RH, Marketing, Financeiro e Jurídico. Missão: compartilhar conhecimento e fortalecer conexões. Diferencial: expandir a agilidade para cidades do interior.</p>',
      imageUrl: '/2026/assets/images/comunidade_agile_campinas.png',
      tags: ['Agilidade', 'Produto', 'Liderança'],
      instagram: 'https://www.instagram.com/agilecampinas/'
    },
    {
      name: 'MINAS Conecta',
      description: '<p class="title"> <strong>MINAS Conecta</strong> <br/> Somos uma comunidade voltada ao desenvolvimento acadêmico e profissional de mulheres e pessoas em diferentes momentos de carreira em STEM. Conectadas ao ecossistema mineiro, criamos pontes entre comunidades, empresas e iniciativas dos biomas tecnológicos mineiros.</p>',
      imageUrl: '/2026/assets/images/comunidade_minas_conecta.png',
      tags: ['Desenvolvimento', 'Tecnologia', 'Design', 'Liderança'],
      instagram: 'https://www.instagram.com/minasconecta.co/',
      linkedin: 'https://www.linkedin.com/company/minas-conecta/'
    },
    {
      name: 'DevLimeira',
      description: '<p class="title"> <strong>DevLimeira</strong> <br/> O DevLimeira é uma comunidade criada para conectar pessoas da área de tecnologia, estudantes e entusiastas que compartilham interesse pelo universo tech.</p>',
      imageUrl: '/2026/assets/images/comunidade_dev_limeira.png',
      tags: ['Desenvolvimento'],
      instagram: 'https://www.instagram.com/devlimeira?igsh=MXFpbzNocm1neHZkbQ==',
      linkedin: 'https://www.linkedin.com/company/devlimeira/'
    },
    {
      name: 'Comunidade Progirls',
      description: '<p class="title"> <strong>Comunidade Progirls</strong> <br/> A ProGirls é uma comunidade criada para fortalecer o protagonismo feminino na tecnologia. Promovemos inclusão, aprendizado, colaboração e oportunidades, criando um ambiente seguro e acolhedor para mulheres crescerem, se desenvolverem e conquistarem espaço na área de TI.</p>',
      imageUrl: '/2026/assets/images/comunidade_pro_girl.png',
      tags: ['Desenvolvimento', 'Tecnologia', 'Inteligência Artificial', 'Design', 'Liderança'],
      instagram: 'https://www.instagram.com/comunidade_progirls/',
      linkedin: 'https://www.linkedin.com/company/pro-girls/?viewAsMember=true'
    },
    {
      name: 'Pipoca Ágil',
      description: '<p class="title"> <strong>Pipoca Ágil</strong> <br/> O Pipoca Ágil é um podcast e comunidade colaborativa sobre agilidade, inovação e gestão de projetos. Promove aprendizado, networking e troca de experiências por meio de lives, entrevistas e projetos colaborativos.</p>',
      imageUrl: '/2026/assets/images/comunidade_pipoca_agil.jpeg',
      tags: ['Agilidade', 'Produto', 'Desenvolvimento', 'Tecnologia', 'Inteligência Artificial'],
      linkedin: 'https://www.linkedin.com/company/pipoca-%C3%A1gil/',
      youtube: 'https://youtube.com/@pipocaagil?si=NANblTHyrAS8q49t'
    },
    {
      name: 'Associação Codaqui',
      description: '<p class="title"> <strong>Associação Codaqui</strong> <br/> A Codaqui hoje atua como uma comunidade de comunidades, ajudando a fortalecer conexões e iniciativas locais.</p>',
      imageUrl: '/2026/assets/images/comunidade_codaqui.png',
      tags: ['Desenvolvimento', 'Tecnologia'],
      link: 'https://www.codaqui.dev'
    },
    {
      name: 'Agile Serra Gaúcha',
      description: '<p class="title"> <strong>Agile Serra Gaúcha</strong> <br/> A Comunidade Agile Serra Gaúcha nasceu em 2022 para conectar pessoas, empresas e entidades interessadas em agilidade. Promove eventos, workshops e ações voluntárias, incentivando aprendizado, networking e boas práticas ágeis, fortalecendo a mentalidade ágil na região.</p>',
      imageUrl: '/2026/assets/images/comunidade_agile_serra_gaucha.png',
      tags: ['Agilidade', 'Tecnologia', 'Liderança'],
      instagram: 'https://www.instagram.com/agileserragaucha/',
      linkedin: 'https://www.linkedin.com/company/agile-serra-ga-cha/posts/?feedView=all'
    },
    {
      name: 'Comunidade Ágil',
      description: '<p class="title"> <strong>Comunidade Ágil</strong> <br/> Criada em 2019 por Cinthya Ruys e Vitor Cardoso, a Comunidade Ágil promove trocas sobre Agilidade em um ambiente seguro. Presente no WhatsApp, LinkedIn, Instagram e podcast com +200 episódios, compartilha aprendizados, experiências e histórias reais da área.</p>',
      imageUrl: '/2026/assets/images/comunidade_agil.jpg',
      tags: ['Desenvolvimento', 'Tecnologia'],
      link: 'https://comunidadeagil.com.br/',
      whatsapp: 'https://chat.whatsapp.com/BqGrdjmHiibGV5H1NKoNrc'
    },
    {
      name: 'AGILIZEM',
      description: '<p class="title"> <strong>AGILIZEM</strong> <br/> O Agilizem nasceu para compartilhar a rotina de profissionais da cultura Ágil na entrega de valor. Apoiamos quem inicia ou transita para agilidade, com entrevistas, conteúdos e experiências de especialistas, CEOs e protagonistas da transformação digital no mercado de TI.</p>',
      imageUrl: '/2026/assets/images/comunidade_agilizem_podcast.png',
      tags: ['Agilidade'],
      linkedin: 'https://www.linkedin.com/company/agilizem-podcast/',
      instagram: 'https://www.instagram.com/agilizempodcast/'
    },
    {
      name: 'Universo ÁGIL HUB',
      description: '<p class="title"> <strong>Universo ÁGIL HUB</strong> <br/> 🤩 Somos o primeiro HUB de AGILIDADE do mundo, acelerando futuros com resultados mais seguros e dinâmicos para pessoas (B2C), empresas (B2B) e governos (B2G). 🏆 Já impactamos +500 mil pessoas, +5 mil empresas em +60 países, com +2.600 encontros e +100 experts conectados.</p>',
      imageUrl: '/2026/assets/images/comunidade_universo_agil.png',
      tags: ['Agilidade', 'Produto', 'Desenvolvimento', 'Tecnologia', 'Inteligência Artificial', 'Design', 'Liderança'],
      linkedin: 'https://www.universoagilhub.com/linkedin',
      youtube: 'https://www.universoagilhub.com/youtube'
    },
    {
      name: 'The Liberators Brazil User Group',
      description: '<p class="title"> <strong>The Liberators Brazil User Group</strong> <br/> Nós - The Liberators Network - somos uma comunidade global que existe para ajudar os praticantes de Scrum, outros Métodos Ágeis e de Estruturas Libertadoras, a encontrar suporte, oferecer ajuda e inspirar-se.</p>',
      imageUrl: '/2026/assets/images/comunidade_the_liberators_brazil_user_group.jpg',
      tags: ['Agilidade', 'Produto', 'Projetos', 'Liderança'],
      linkedin: 'https://www.linkedin.com/company/the-liberators-network-brazil-user-group',
      whatsapp: 'https://chat.whatsapp.com/LbP7LDrOqMqGNuptGfb4Ud'
    },
    {
      name: 'LeanCoffeeSP',
      description: '<p class="title"> <strong>LeanCoffeeSP</strong> <br/> O Lean Coffee SP é uma comunidade paulistana que promove encontros presenciais e virtuais sobre metodologias ágeis, inovação e desenvolvimento de produtos. Foi pioneira no modelo no Brasil, com o primeiro encontro em 2012. Atualmente realiza encontros no bairro do Paraíso.</p>',
      imageUrl: '/2026/assets/images/comunidade_lean_coffee_sp.jpeg',
      tags: ['Agilidade', 'Produto', 'Liderança'],
      linkedin: 'https://www.linkedin.com/company/leancoffeesp/',
      whatsapp: 'https://chat.whatsapp.com/FNZzp14sSVZ3vrPw20y2Ee?mode=gi_t'
    },
    {
      name: 'Produteiros Br',
      description: '<p class="title"> <strong>Produteiros Br</strong> <br/> 🚀 Comunidade brasileira de Produto, IA e inovação. Um espaço para Product Managers, POs, UX, dados e tecnologia trocarem experiências, aprenderem juntos e criarem produtos com impacto real. 💡🔥</p>',
      imageUrl: '/2026/assets/images/comunidade_produteiros_br.png',
      tags: ['Agilidade', 'Produto', 'Design', 'Liderança'],
      whatsapp: 'https://chat.whatsapp.com/HZbYt7DK9K0ABvtN7HAWM1?mode=gi_t'
    },
    {
      name: 'Claude IA Brasil',
      description: '<p class="title"> <strong>Claude IA Brasil</strong> <br/> 🤖 Comunidade brasileira focada em IA Generativa, Claude, automação e tecnologia. Compartilhe ideias, prompts, projetos e aprenda como usar IA para criar, inovar e crescer. 🚀🧠</p>',
      imageUrl: '/2026/assets/images/comunidade_claude_ia.png',
      tags: ['Agilidade', 'Produto', 'Tecnologia', 'Inteligência Artificial', 'Liderança'],
      whatsapp: 'https://chat.whatsapp.com/JWCarcSBcfaDjDqMh2V3DL?mode=gi_t'
    },
    {
      name: 'Agile Minas',
      description: '<p class="title"> <strong>Agile Minas</strong> <br/> Comunidade de agilistas para agilistas, que estejam interessados em compartilhar experiências e aprender com outros membros da comunidade mineira!</p>',
      imageUrl: '/2026/assets/images/agile-minas.png',
      tags: ['Agilidade'],
      linkedin: 'https://www.linkedin.com/company/agile-minas/posts/?feedView=all',
      instagram: 'https://www.instagram.com/agileminas/'
    },
    {
      name: 'Agile Curitiba',
      description: '<p class="title"> <strong>Agile Curitiba</strong> <br/> Os mais de 1.200 membros da Comunidade Agile Curitiba são, em sua maioria, profissionais de tecnologia, gestão e inovação, interessados em metodologias ágeis, colaboração e melhoria contínua. Reúne pessoas de TI, startups, consultorias, gestores e líderes de diferentes setores.</p>',
      imageUrl: '/2026/assets/images/comunidade_agile_curitiba.png',
      tags: ['Agilidade', 'Produto', 'Liderança'],
      linkedin: 'https://www.linkedin.com/company/agile-curitiba',
      meetup: 'https://www.meetup.com/comunidade-agile-curitiba'
    },
    {
      name: 'Café Debug',
      description: '<p class="title"> <strong>Café Debug</strong> <br/> O Café Debug é um popular podcast brasileiro focado no universo de ciência e tecnologia. Fundado em 2017 por Jéssica Nathany, o programa traz entrevistas quinzenais com especialistas para discutir desenvolvimento de software, arquitetura, tendências de mercado, inteligência artificial e carreira.</p>',
      imageUrl: '/2026/assets/images/comunidade_cafe_debug.jpg',
      tags: ['Desenvolvimento', 'Tecnologia'],
      instagram: 'https://www.instagram.com/cafedebugpodcast?igsh=b3dnbXNueTNoNWZ1'
    },
    {
      name: 'WaveAgile',
      description: '<p class="title"> <strong>WaveAgile</strong> <br/> 📺 WaveAgile, criado por André Molero, aborda agilidade focada em resultados, indo além de rituais. O canal é voltado a Scrum Masters, Agile Coaches, PMs e líderes, com conteúdos para reduzir Lead Time e aumentar geração de valor. Soma +2 mil inscritos e +377 mil visualizações.</p>',
      imageUrl: '/2026/assets/images/comunidade_wave_agile.png',
      tags: ['Agilidade', 'Produto', 'Desenvolvimento', 'Tecnologia', 'Inteligência Artificial', 'Design', 'Liderança'],
      instagram: 'https://instagram.com/waveagile',
      youtube: 'https://www.youtube.com/@WaveAgile'
    },
    {
      name: 'Agilidade preta',
      description: '<p class="title"> <strong>Agilidade preta</strong> <br/> Somos uma comunidade de pessoas pretas agilitas onde promovemos o incentivo e representatividade de pessoas pretas que estão inseridos no mercado de tecnologia, onde somos um grupo minorizado.</p>',
      imageUrl: '/2026/assets/images/comunidade_agilidade_preta.png',
      tags: ['Agilidade', 'Tecnologia', 'Liderança'],
      instagram: 'https://www.instagram.com/agilidadepreta/',
      linkedin: 'https://www.linkedin.com/company/agilidade-preta'
    },
    {
      name: 'JORNADA COLABORATIVA',
      description: '<p class="title"> <strong>JORNADA COLABORATIVA</strong> <br/> A Jornada Colaborativa é uma comunidade focada em colaboração, agilidade, inovação, tecnologia, negócios e desenvolvimento profissional. Conecta profissionais e empresas por meio de eventos, mentorias e troca de experiências, promovendo aprendizado coletivo, networking e evolução.</p>',
      imageUrl: '/2026/assets/images/comunidade_jornada_colaborativa.jpg',
      tags: ['Agilidade', 'Produto', 'Desenvolvimento', 'Tecnologia', 'Inteligência Artificial', 'Design', 'Liderança'],
      instagram: 'https://www.instagram.com/jornadacolaborativa',
      linkedin: 'https://www.linkedin.com/company/jornadacolaborativa/'
    },
    {
      name: 'Tá Safo!',
      description: '<p class="title"> <strong>Tá Safo!</strong> <br/> Criada em 2007 no Pará, a comunidade sem hierarquia Tá Safo foca em tecnologias abertas e metodologias ágeis. O nome, gíria local para “tá beleza”, reflete sua essência colaborativa. Tá Safo significa: Tecnologias Abertas com Software Ágil, Fácil e Organizado.</p>',
      imageUrl: '/2026/assets/images/comunidade_ta_safo.png',
      tags: ['Agilidade', 'Produto', 'Desenvolvimento', 'Tecnologia', 'Inteligência Artificial', 'Design', 'Liderança'],
      instagram: 'https://www.instagram.com/comunidadetasafo/',
      linkedin: 'https://www.linkedin.com/company/tasafo'
    },
    {
      name: 'Inspira Tech Cast',
      description: '<p class="title"> <strong>Inspira Tech Cast</strong> <br/> O Inspira Tech Cast, apresentado por Michele Roma, conecta tecnologia, propósito e inspiração. Traz conversas sobre inovação, liderança, agilidade, produtos digitais, transformação digital e carreira, com histórias reais e aprendizados práticos para quem acredita no poder transformador da tecnologia.</p>',
      imageUrl: '/2026/assets/images/comunidade_inspira_tech_cast.png',
      tags: ['Tecnologia', 'Liderança'],
      instagram: 'https://www.instagram.com/inspira.tech.cast',
      youtube: 'https://youtube.com/@inspira_tech'
    },
    {
      name: 'DevRioClaro',
      description: '<p class="title"> <strong>DevRioClaro</strong> <br/> Uma comunidade com princípios de Colaboração, Aprendizado e Integração. Queremos que todos participem através de encontros, eventos e diálogos com o objetivo de unir pessoas, instituições e empresas para fortalecer a comunidade de TI de Rio Claro!</p>',
      imageUrl: '/2026/assets/images/comunidade_dev_rio_claro.png',
      tags: ['Desenvolvimento', 'Tecnologia', 'Inteligência Artificial'],
      linkedin: 'https://www.linkedin.com/company/devrioclaro/',
      link: 'https://www.devrioclaro.com.br/'
    },
    {
      name: 'Agile RiseUp Group',
      description: '<p class="title"> <strong>Agile RiseUp Group</strong> <br/> A Agile RiseUp Group é uma comunidade voltada à agilidade, tecnologia, liderança e desenvolvimento profissional, conectando pessoas através de conteúdos, eventos, podcasts e networking. O grupo promove troca de conhecimento entre profissionais do mercado ágil, incentivando aprendizado contínuo, colaboração e crescimento de carreira.</p>',
      imageUrl: '/2026/assets/images/comunidade_agile_rise_up.png',
      tags: ['Agilidade', 'Produto', 'Desenvolvimento', 'Tecnologia', 'Inteligência Artificial', 'Design', 'Liderança'],
      linkedin: 'https://www.linkedin.com/company/agile-riseup/',
      youtube: 'https://www.youtube.com/@AgileRiseUp'
    },
    {
      name: 'Tech Hub JF',
      description: '<p class="title"> <strong>Tech Hub JF</strong> <br/> Tech Hub JF é uma comunidade de tecnologia em Juiz de Fora e região, com o propósito é conectar profissionais e entusiastas através de encontros, projetos colaborativos e eventos. Sempre busca de fomentar a inovação, promover o aprimoramento técnico, gerar networking e inspirar o aprendizado.</p>',
      imageUrl: '/2026/assets/images/comunidade_tech_hub_jf.png',
      tags: ['Tecnologia'],
      link: 'https://techhubjf.org/',
      instagram: 'https://www.instagram.com/techhubjf/'
    },
    {
      name: 'Pessoas de Produto',
      description: '<p class="title"> <strong>Pessoas de Produto</strong> <br/> Fundada em 2021 por Paulo Coimbra, a Pessoas de Produto conecta líderes, gestores e entusiastas de Product Management e tecnologia. Mais que networking, promove troca genuína, debates sobre estratégia, IA e carreira, além de eventos e uma comunidade ativa no WhatsApp.</p>',
      imageUrl: '/2026/assets/images/comunidade_pessoas_de_produtos.png',
      tags: ['Produto', 'Design'],
      link: 'https://www.pessoasdeproduto.com.br',
      linkedin: 'https://www.linkedin.com/company/pessoasdeproduto/'
    },
    {
      name: 'Agile Flow Curitiba',
      description: '<p class="title"> <strong>Agile Flow Curitiba</strong> <br/> O Agile Flow Curitiba é uma comunidade criada em 2023 para conectar profissionais de agilidade, produtos e inovação. Promove eventos mensais com especialistas e líderes do mercado, incentivando colaboração, troca de conhecimento e transformação cultural para pessoas e organizações.</p>',
      imageUrl: '/2026/assets/images/comunidade_agile_flow.png',
      tags: ['Agilidade', 'Produto', 'Liderança'],
      instagram: 'https://www.instagram.com/agileflowcwb',
      linkedin: 'https://www.linkedin.com/company/agileflowcwb/'
    },
    {
      name: 'Manas Tech',
      description: '<p class="title"> <strong>Manas Tech</strong> <br/> Somos uma comunidade amazônica que impulsiona a inclusão e o protagonismo feminino em tecnologia e inovação. Atuamos na formação, inspiração e conexão de mulheres, contribuindo para o desenvolvimento do ecossistema tecnológico da Região Norte e para a geração de oportunidades na região.</p>',
      imageUrl: '/2026/assets/images/comunidade_manas_tech.png',
      tags: ['Agilidade', 'Produto', 'Desenvolvimento', 'Tecnologia', 'Inteligência Artificial', 'Liderança'],
      instagram: 'https://www.instagram.com/manastech_',
      linkedin: 'https://www.linkedin.com/company/manas-tech-oficial/'
    },
    {
      name: 'Love The Problem Podcast',
      description: '<p class="title"> <strong>Love The Problem Podcast</strong> <br/> O Love the Problem é o podcast oficial da Nower Consultoria e K21 Educação. Um espaço leve e direto para discutir os desafios reais das organizações. Desmistificamos temas como estratégia, gestão, liderança, produtos e governança, focando no que realmente importa: gerar impacto e valor de verdade.</p>',
      imageUrl: '/2026/assets/images/comunidade_love_the_problem_podcast.png',
      tags: ['Agilidade', 'Produto', 'Inteligência Artificial', 'Liderança', 'Estratégia', 'Governança', 'Transformação Digital', 'Gestão'],
      instagram: 'https://www.instagram.com/lovetheproblem/',
      link: 'https://br.k21.global/podcast'
    },
    {
      name: 'PHP Manaus',
      description: '<p class="title"> <strong>PHP Manaus</strong> <br/> A PHP Manaus é mais do que apenas uma comunidade de programadores — somos um ponto de encontro de desenvolvedores, entusiastas e profissionais da área de tecnologia que desejam crescer juntos, compartilhar conhecimento e criar soluções inovadoras utilizando PHP e outras tecnologias relacionadas.</p>',
      imageUrl: '/2026/assets/images/comunidade_comunidade_php_manus.png',
      tags: ['Tecnologia'],
      instagram: 'https://www.instagram.com/phpmanaus?igsh=ZWdxMnB4eHI5aHI0',
      youtube: 'https://youtube.com/@phpmanaus?si=4wGh36VFP1MHangr'
    },
    {
      name: 'SouJava',
      description: '<p class="title"> <strong>SouJava</strong> <br/> O SouJava é um grupo de usuários formado por desenvolvedores e evangelistas que promove o fortalecimento e a profissionalização do Java no Brasil. Referência mundial, realiza eventos, encontros e ações online, apoiando a comunidade na aplicação da tecnologia Java em projetos reais.</p>',
      imageUrl: '/2026/assets/images/comunidade_sou_java.png',
      tags: ['Desenvolvimento'],
      linkedin: 'https://www.linkedin.com/company/soujava/'
    },
    {
      name: 'Product Guru\'s',
      description: '<p class="title"> <strong>Product Guru\'s</strong> <br/> O maior canal de conteúdo direto ao ponto sobre Produto, Negócios, Carreira e Tecnologia.\
Entrevistas reais e sem filtro com PMs, founders, builders de IA e líderes de Nubank, iFood, Mercado Livre, Itaú outras empresas, startups e scale-ups.</p>',
      imageUrl: '/2026/assets/images/comunidade_product_gurus.png',
      tags: ['Produto', 'Inteligência Artificial', 'Liderança'],
      youtube: 'https://www.youtube.com/@productgurus',
      link: 'https://www.productgurus.com.br/'
    },
    {
      name: 'DevParana',
      description: '<p class="title"> <strong>DevParana</strong> <br/> A DevParaná é uma comunidade de tecnologia sem fins lucrativos que conecta profissionais, estudantes e empresas em todo o Paraná. Há mais de 10 anos promove eventos, meetups e conferências, fortalecendo o ecossistema de tecnologia e compartilhamento de conhecimento no estado.</p>',
      imageUrl: '/2026/assets/images/comunidade_dev_parana.png',
      tags: ['Agilidade', 'Desenvolvimento', 'Tecnologia'],
      instagram: 'http://instagram.com/devparana',
      meetup: 'http://meetup.com/developerparana'
    },
    {
      name: 'Coletivo Ação',
      description: '<p class="title"> <strong>Coletivo Ação</strong> <br/> Somos uma comunidade de prática formada por facilitadores, líderes, agilistas e profissionais apaixonados por transformação organizacional. Compartilhamos conhecimento, experimentamos novas abordagens e construímos aprendizagem coletiva para gerar impacto real em pessoas, times e organizações.</p>',
      imageUrl: '/2026/assets/images/comunidade_coletivo_acao.png',
      tags: ['Agilidade', 'Liderança'],
      instagram: 'https://www.instagram.com/somoscoletivoacao/',
      linkedin: 'https://www.linkedin.com/company/coletivo-acao/'
    },
    {
      name: 'Agile Club',
      description: '<p class="title"> <strong>Agile Club</strong> <br/> Agile Club é um espaço criado para reunir profissionais e entusiastas de agilidade e liderança. Temos encontros com mentorias gratuitas, partilha de conteúdos exclusivos sobre agilidade, além de muitas oportunidades de networking.<br/>Nosso objetivo é compartilhar conhecimento e fortalecer os conceitos perdidos da agilidade.</p>',
      imageUrl: '/2026/assets/images/comunidade_agile_club.jpg',
      tags: ['Agilidade', 'Produto', 'Liderança'],
      link: 'https://agileclub.yevenb.com',
      whatsapp: 'https://chat.whatsapp.com/LVscrtfCKzK2rEAOtP8iSL'
    },
    {
      name: 'ProductTank São Paulo',
      description: '<p class="title"> <strong>ProductTank São Paulo</strong> <br/> Participe do ProductTank São Paulo! Um meetup gratuito que reúne a comunidade de produto para talks, networking e discussões sobre estratégia e desenvolvimento de produtos. Presente em mais de 200 cidades, é organizado por voluntários e faz parte da rede global Mind the Product.</p>',
      imageUrl: '/2026/assets/images/comunidade_product_tank_sao_paulo.png',
      tags: ['Agilidade', 'Produto', 'Liderança'],
      linkedin: 'https://www.linkedin.com/company/product-tank-s%C3%A3o-paulo/',
      instagram: 'https://www.instagram.com/producttanksp/'
    },
    {
      name: 'WoHackers',
      description: '<p class="title"> <strong>WoHackers</strong> <br/> A WoHackers foi fundada por Beatriz e Yuki para ampliar a participação feminina na tecnologia por meio de hackathons, inovação e desenvolvimento profissional.</p>',
      imageUrl: '/2026/assets/images/comunidade_wo_hackers.png',
      tags: ['Agilidade', 'Produto', 'Desenvolvimento', 'Tecnologia', 'Inteligência Artificial', 'Design', 'Liderança'],
      linkedin: 'https://www.linkedin.com/company/wohackers/?viewAsMember=true',
      whatsapp: 'https://chat.whatsapp.com/EHz7v2d8dXxKoXwfEeDtQC'
    },
    {
      name: 'BRAVAS In Tech',
      description: '<p class="title"> <strong>BRAVAS In Tech</strong> <br/> ​A BRAVAS In Tech é uma comunidade de meninas e mulheres unidas em prol de revolucionar o mercado de Tecnologia através do protagonismo feminino. Nosso propósito é valorizar, promover a conexão e impulsionar a carreira de mulheres de todas as idades através da troca de experiências e mentorias para construir um setor mais inclusivo e diverso.</p>',
      imageUrl: '/2026/assets/images/comunidade_bravas_in_tech.png',
      tags: ['Desenvolvimento', 'Tecnologia', 'Inteligência Artificial', 'Design', 'Liderança'],
      linkedin: 'https://www.linkedin.com/company/bravasintech',
      link: 'https://www.bravasintech.com/'
    },
    {
      name: 'Java Amazonas',
      description: '<p class="title"> <strong>Java Amazonas</strong> <br/> A comunidade foi criada com o intuito de promover a linguagem de programação Java no Amazonas. Ela representa uma forma de conectar, comunicar e colaborar com outros desenvolvedores do estado, compartilhando conhecimentos com o objetivo de expandir e fortalecer as comunidades de tecnologia da região.</p>',
      imageUrl: '/2026/assets/images/comunidade_java_amazonas.png',
      tags: ['Desenvolvimento', 'Tecnologia'],
      link: 'https://javaamazonas.com.br/'
    },
    {
      name: 'Agile Jampa',
      description: '<p class="title"> <strong>Agile Jampa</strong> <br/> O Agile Jampa já é consolidado como o maior evento de Agilidade, Inovação e Gestão de Projetos do estado da Paraíba. Muito mais do que um encontro, nós somos o espaço definitivo para conectar, inspirar e transformar o ecossistema de tecnologia da região.</p>',
      imageUrl: '/2026/assets/images/comunidade_agile_jampa.png',
      tags: ['Agilidade', 'Produto', 'Tecnologia', 'Inteligência Artificial', 'Liderança', 'Inovação'],
      linkedin: 'https://www.linkedin.com/company/agile-jampa/',
      instagram: 'https://www.instagram.com/agile.jampa/'
    },
    {
      name: 'Queens of Deploy',
      description: '<p class="title"> <strong>Queens of Deploy</strong> <br/> ​O principal objetivo da Queens of Deploy é criar um espaço acolhedor, seguro e respeitoso para mulheres na área de tecnologia, onde todas possam crescer, compartilhar conhecimentos e superar desafios juntas.</p>',
      imageUrl: '/2026/assets/images/comunidade_queens_of_deploy.jpeg',
      tags: ['Desenvolvimento', 'Tecnologia', 'Carreira de mulheres'],
      linkedin: 'https://www.linkedin.com/company/code-queens-dev/',
      whatsapp: 'https://chat.whatsapp.com/KOKFfsXGD1PBVWvAXXNbcb'
    },
    {
      name: 'Mulheres Agilistas',
      description: '<p class="title"> <strong>Mulheres Agilistas</strong> <br/> Apoiar mulheres da área de agilidade a navegar suas transições de carreira, seja para produto, gestão, tech ou outras áreas.</p>',
      imageUrl: '/2026/assets/images/mulheres_agilistas.png',
      tags: ['Agilidade', 'Tecnologia', 'Inteligência Artificial', 'Liderança', 'Transição de Carreira'],
      linkedin: 'https://www.linkedin.com/company/mulheres-agilistas',
      instagram: 'https://www.instagram.com/mulheresagilistas?igsh=MXZld3BhdGNobW52dA=='
    }
  ];
}
