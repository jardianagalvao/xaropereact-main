const cursos = [
    {
      id: 1,
      titulo: 'Curso de HTML',
      descricao: 'Aprenda os fundamentos do HTML para criar páginas web. Este curso abrange os conceitos básicos de estruturação de páginas web usando HTML, incluindo tags, elementos semânticos e formulários.',
      link: 'https:/curso-html',
      imagem: HtmlImage
    },
    {
      id: 2,
      titulo: 'Curso de JavaScript Básico',
      descricao: 'Introdução ao JavaScript para iniciantes em desenvolvimento web. Este curso cobre os conceitos básicos da linguagem JavaScript, incluindo variáveis, estruturas de controle, funções e manipulação do DOM.',
      link: 'https:/curso-javascript-basico',
      imagem: jsImage,
      videos:[
        {
          id: 1,
          nome: "",
          url:""
        }
      ]
    },
    {
      id: 3,
      titulo: 'Curso de CSS',
      descricao: 'Aprenda os fundamentos do CSS para estilizar páginas web. Este curso abrange os conceitos básicos de estilização de elementos usando CSS, incluindo seletores, propriedades de estilo, layout e animações simples.',
      link: 'https:/curso-CSS',
      imagem: CssImage
    },
    {
        id: 4,
        titulo: 'Curso de React.js',
        descricao: 'Aprenda a criar aplicações web modernas com React.js. O curso cobre tópicos como componentização, estado e propriedades, manipulação de eventos, roteamento, gerenciamento de estado com Redux, e muito mais.',
        link: 'https:/curso-reactjs',
        imagem: ReactImage
      },
      {
        id: 5,
        titulo: 'Curso de Banco de Dados',
        descricao: 'Introdução aos bancos de dados para desenvolvedores web. Este curso cobre os fundamentos de bancos de dados relacionais e SQL, incluindo modelagem de dados, consultas básicas e operações CRUD.',
        link: 'https:/curso-BancodeDados',
        imagem: BancoImage
      },
      {
        id: 6,
        titulo: 'Curso de Git e GitHub',
        descricao: 'Aprenda os fundamentos do controle de versão com Git e do gerenciamento de repositórios com GitHub. Este curso abrange os conceitos básicos de Git, incluindo clonagem, commits, branches, merges, e colaboração em projetos usando GitHub.',
        link: 'https:/curso-GitGithub',
        imagem: GitImage
      },
      {
        id: 7,
        titulo: 'Curso de Python',
        descricao: 'Introdução à linguagem de programação Python. Este curso cobre os fundamentos da sintaxe Python, tipos de dados, estruturas de controle, funções, manipulação de arquivos e introdução à programação orientada a objetos.',
        link: 'https:/curso-python',
        imagem: PythonImage
      },
      {
        id: 8,
        titulo: 'Curso de PHP',
        descricao: 'Aprenda a linguagem de programação PHP para desenvolvimento web. Este curso cobre os fundamentos do PHP, incluindo sintaxe básica, manipulação de formulários, conexão com bancos de dados e criação de páginas dinâmicas.',
        link: 'https:/curso.php',
        imagem: PhpImage
      },
      {
        id: 9,
        titulo: 'Curso de Laravel',
        descricao: 'Domine o framework PHP Laravel para desenvolvimento web moderno. Este curso aborda os conceitos fundamentais do Laravel, incluindo rotas, controladores, modelos, visualizações, migrações de banco de dados e autenticação de usuários.',
        link: 'https:/curso.-laravel',
        imagem: LaravelImage
      },
      {
        id: 10,
        titulo: 'Bônus:  Preparação para Entrevistas de Emprego',
        descricao: 'Este curso aborda as melhores práticas e estratégias para se preparar para entrevistas de emprego de forma eficaz. Você aprenderá a pesquisar a empresa, revisar suas habilidades e experiências relevantes, praticar respostas para perguntas comuns, demonstrar suas habilidades técnicas e comportamentais, lidar com perguntas difíceis, entender o processo de entrevista e seguir as etapas pós-entrevista.',
        link: 'https:/curso-preparacao-entrevistas',
        imagem: Entrevista
      },
    // Adicione mais cursos aqui
  ];

  export default cursos;