const PRODUCTS = [
  {
    id: "guioza-suino",
    name: "Guioza Suíno",
    cat: "Linha Clássica",
    desc: "Massinha crocante e recheio suculento de carne suína selecionada. O clássico das operações de culinária japonesa.",
    img: "img/Tsuru%20Guioza%20Suino.webp",
    tags: ["Suíno", "Carnes"]
  },
  {
    id: "guioza-bovino",
    name: "Guioza Bovino",
    cat: "Linha Clássica",
    desc: "Recheio marcante de carne bovina para pratos orientais autênticos e de alta performance.",
    img: "img/Tsuru%20Guioza%20Bovino.webp",
    tags: ["Bovino", "Carnes"]
  },
  {
    id: "guioza-frango",
    name: "Guioza Frango",
    cat: "Linha Clássica",
    desc: "Sabor equilibrado de frango para operações que buscam versatilidade e padronização.",
    img: "img/Tsuru%20Guioza%20Frango.webp",
    tags: ["Frango", "Carnes"]
  },
  {
    id: "guioza-linguica",
    name: "Guioza Linguiça",
    cat: "Linha Clássica",
    desc: "O toque defumado da linguiça em uma receita de guioza diferenciada e cheia de personalidade.",
    img: "img/Tsuru%20Guioza%20Lingui%C3%A7a.webp",
    tags: ["Linguiça", "Carnes"]
  },
  {
    id: "guioza-salmao",
    name: "Guioza Salmão",
    cat: "Linha Premium",
    desc: "Guioza premium com salmão selecionado, para pratos que surpreendem até os clientes mais exigentes.",
    img: "img/Tsuru%20Guioza%20Salm%C3%A3o.webp",
    tags: ["Salmão", "Frutos do Mar"]
  },
  {
    id: "guioza-palmito",
    name: "Guioza Palmito",
    cat: "Linha Vegetal",
    desc: "Recheio cremoso de palmito para um guioza vegetal cheio de sabor e textura.",
    img: "img/Tsuru%20Guioza%20Palmito.webp",
    tags: ["Palmito", "Vegetariano"]
  },
  {
    id: "guioza-legumes",
    name: "Guioza Legumes",
    cat: "Linha Vegetal",
    desc: "Mix de legumes frescos para uma opção leve, colorida e muito saborosa.",
    img: "img/Tsuru%20Guioza%20Legumes.webp",
    tags: ["Legumes", "Vegetariano"]
  },
  {
    id: "guioza-cogumelo-paris",
    name: "Guioza Cogumelo Paris",
    cat: "Linha Vegetal",
    desc: "Sabor terroso do cogumelo paris envolvido em uma massa delicada e dourada.",
    img: "img/Tsuru%20Guioza%20Cogumelo%20Paris.webp",
    tags: ["Cogumelos", "Vegetariano"]
  },
  {
    id: "guioza-shimeji",
    name: "Guioza Shimeji",
    cat: "Linha Vegetal",
    desc: "Shimeji selecionado com o toque umami na medida certa para pratos sofisticados.",
    img: "img/Tsuru%20Guioza%20Shimeji.webp",
    tags: ["Cogumelos", "Vegetariano"]
  },
  {
    id: "guioza-shitake",
    name: "Guioza Shitake",
    cat: "Linha Vegetal",
    desc: "O clássico shitake para um recheio aromático, sofisticado e inconfundível.",
    img: "img/Tsuru%20Guioza%20Shitake.webp",
    tags: ["Cogumelos", "Vegetariano"]
  }
];

const SEGMENTS = [
  {
    id: "restaurantes",
    title: "Restaurantes",
    text: "Produtos selecionados para operações profissionais que exigem consistência em cada prato.",
    img: "img/Tsuru%20Guioza%20Suino.webp"
  },
  {
    id: "sushibares",
    title: "Sushibares e Temakerias",
    text: "Ingredientes essenciais para qualidade, padronização e sabor autêntico.",
    img: "img/Tsuru%20Guioza%20Salm%C3%A3o.webp"
  },
  {
    id: "distribuidores",
    title: "Distribuidores",
    text: "Portfólio preparado para parceiros comerciais que buscam crescer com qualidade.",
    img: "img/Tsuru%20Guioza%20Bovino.webp"
  },
  {
    id: "supermercados",
    title: "Supermercados",
    text: "Produtos orientais para atender consumidores cada vez mais exigentes.",
    img: "img/Tsuru%20Guioza%20Frango.webp"
  },
  {
    id: "food-service",
    title: "Food Service",
    text: "Soluções para operações gastronômicas profissionais de todos os tamanhos.",
    img: "img/Tsuru%20Guioza%20Shitake.webp"
  },
  {
    id: "gastronomia-oriental",
    title: "Gastronomia Oriental & Chefs",
    text: "Ingredientes que valorizam o trabalho de chefs e apaixonados pela cozinha japonesa.",
    img: "img/Tsuru%20Guioza%20Shimeji.webp"
  }
];

const RECIPES = [
  {
    title: "Guioza Tradicional Grelhado",
    tag: "Clássico",
    time: "30 min",
    yield: "Rende 20 unidades",
    text: "Guioza suíno grelhado na frigideira, com fundo dourado e crocante. O preparo perfeito para abrir um menu oriental.",
    img: "img/Tsuru%20Guioza%20Suino.webp"
  },
  {
    title: "Guioza de Salmão ao Molho Tarê",
    tag: "Premium",
    time: "25 min",
    yield: "Rende 16 unidades",
    text: "Guioza de salmão finalizado com molho tarê, gergelim tostado e cebolinha. Sofisticação para o seu cardápio.",
    img: "img/Tsuru%20Guioza%20Salm%C3%A3o.webp"
  },
  {
    title: "Guioza Crocante de Shitake",
    tag: "Vegetal",
    time: "35 min",
    yield: "Rende 20 unidades",
    text: "Versão crocante com recheio de shitake e cogumelos, perfeita para temakerias e menus vegetarianos.",
    img: "img/Tsuru%20Guioza%20Shitake.webp"
  }
];

const TESTIMONIALS = [
  {
    quote: "Aqui entra o depoimento de um cliente real. Este espaço será preenchido com a avaliação de quem já confia na nossa qualidade e no nosso atendimento.",
    author: "Nome do Cliente",
    company: "Empresa do Cliente",
    city: "Cidade / UF",
    avatar: "CLIENTE"
  },
  {
    quote: "Aqui entra o depoimento de um cliente real. Este espaço será preenchido com a avaliação de quem já confia na nossa qualidade e no nosso atendimento.",
    author: "Nome do Cliente",
    company: "Empresa do Cliente",
    city: "Cidade / UF",
    avatar: "CLIENTE"
  },
  {
    quote: "Aqui entra o depoimento de um cliente real. Este espaço será preenchido com a avaliação de quem já confia na nossa qualidade e no nosso atendimento.",
    author: "Nome do Cliente",
    company: "Empresa do Cliente",
    city: "Cidade / UF",
    avatar: "CLIENTE"
  }
];

const METRICS = {
  years: 20,
  products: 100,
  clients: 500,
  quality: 100
};

const BRAND = {
  name: "Tsuru Alimentos",
  tagline: "Indústria de Alimentos Orientais",
  phone: "(11) 2130-4535",
  phoneLink: "tel:+551121304535",
  whatsapp: "(11) 92134-4724",
  email: "tsurudistribuidora@gmail.com",
  address: "Rua Professor Castelo Branco, 364 — Jd. Nove de Julho, São Paulo/SP — CEP 03947-020",
  hours: "Segunda a sexta, das 7h às 16h",
  instagram: "https://www.instagram.com/tsurualimentos/",
  facebook: "https://www.facebook.com/tsurualimentosltda/?locale=pt_BR"
};