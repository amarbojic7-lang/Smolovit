import { Product, Review, Ingredient } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'balzam-tijelo',
    name: 'Smolovit Balzam za tijelo',
    subtitle: 'Klasična njega za suhu, umoru i napetih kožu',
    description: 'Naš zaštitni znak. Smolovit Balzam za tijelo duboko hrani i regeneriše kožu, posebno preporučen osobama koje rade fizički, borave na otvorenom ili pate od suhe kože. Topi se na toplini tijela i upija se bez ljepljivog osjećaja.',
    benefits: [
      'Intenzivno hidratizuje i obnavlja kožu',
      'Pomaže kod napetosti mišića i zglobnih bolova',
      'Smireuje iritacije i crvenilo',
      'Pogodna za cijelu porodicu'
    ],
    ingredients: ['Smrekova smola', 'pčelinji vosak', 'maslinovo ulje', 'biljna mast', 'lavanda (opcionalno)'],
    usage: 'Nanijeti tanak sloj na čistu kožu i lagano umasirati. Koristiti jednom ili dvaput dnevno.',
    sizes: ['50ml', '100ml', '200ml'],
    imageAlt: 'Smolovit balzam za tijelo u tegli',
    category: 'body'
  },
  {
    id: 'krema-noge',
    name: 'Smolovit Krema za noge',
    subtitle: 'Specijalizirana njega za stopala, pete i nokte',
    description: 'Stvorena za ona stopala koja puno rade. Smolovit Krema za noge kombiniuje antimikrobna svojstva smrekove smole s dubinskim hidratizujućim djelovanjem pčelinjeg voska i maslinovog ulja. Bori se protiv gljivičnih infekcija, puca pete i tvrde kože.',
    benefits: [
      'Djeluje protiv gljivičnih oboljenja noktiju i stopala',
      'Omekšava tvrde pete i žuljeve',
      'Smanjuje neugodan miris stopala',
      'Osvježava i revitalizuje umorna stopala'
    ],
    ingredients: ['Smrekova smola', 'pčelinji vosak', 'maslinovo ulje', 'biljna mast'],
    usage: 'Nanositi svake večeri na čista, suha stopala. Za gljivice – koristiti svakodnevno minimum 4 sedmice.',
    note: 'Nije zamjena za medicinsku terapiju. Uvijek se savjetujte s ljekarom.',
    sizes: ['50ml', '100ml'],
    imageAlt: 'Smolovit krema za noge',
    category: 'feet'
  },
  {
    id: 'balzam-lice',
    name: 'Smolovit Balzam za lice',
    subtitle: 'Prirodna njega za suhu, osjetljivu i zrelu kožu lica',
    description: 'Blag, bogat i hranljiv balzam koji štiti lice od vanjskih uticaja i obnavlja kožnu barijeru. Posebno pogodan za zimu, hladne vjetrove i suhe prostorije. Bez mirisa, prikladan za osjetljivu kožu.',
    benefits: [
      'Intenzivno hidratizira bez začepljivanja pora',
      'Smanjuje bore i suhoću',
      'Štiti od hladnog vjetra i niske temperature',
      'Pogodna za senzitivnu i reaktivnu kožu'
    ],
    ingredients: ['Smrekova smola', 'pčelinji vosak', 'maslinovo ulje', 'biljna mast'],
    usage: 'Nanijeti malu količinu na očišćeno lice ujutro i/ili navečer.',
    sizes: ['30ml', '50ml'],
    imageAlt: 'Smolovit balzam za lice',
    category: 'face'
  },
  {
    id: 'balzam-rane',
    name: 'Smolovit Balzam za rane i opekotine',
    subtitle: 'Prvopomoć iz prirode',
    description: 'Smrekova smola je vjekovima korišćena kao prirodni antiseptik. Ovaj balzam namijenjen je manjim ranama, ogrebotinama, ubodicama i blagim opekotinama. Ubrzava zacjeljivanje i sprečava infekciju.',
    benefits: [
      'Prirodni antiseptik',
      'Ubrzava zacjeljivanje kože',
      'Smanjuje upalu i crvenilo',
      'Pogodna za djecu i odrasle'
    ],
    ingredients: ['Smrekova smola', 'pčelinji vosak', 'maslinovo ulje', 'biljna mast'],
    usage: 'Nanijeti direktno na očišćenu manju ranu ili opekotinu.',
    sizes: ['30ml'],
    imageAlt: 'Smolovit balzam za rane',
    category: 'first-aid'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    rating: 5,
    text: "Koristim Smolovit balzam za noge već 2 mjeseca i gljivice na noktu su gotovo nestale! Nisam vjerovala da će prirodni preparati toliko pomoći. Definitivno preporučujem svima.",
    author: "Amira K.",
    location: "Sarajevo"
  },
  {
    id: 2,
    rating: 5,
    text: "Moj suprug ima problema s bolovima u leđima i zglobovima. Masiranje s Smolovit balzamom svaku večer mu stvarno pomaže. Miris je prijatan, ne lijepi se, i koža mu je postala mnogo ljepša.",
    author: "Jasmina H.",
    location: "Tuzla"
  },
  {
    id: 3,
    rating: 5,
    text: "Balzam za lice je savršen za zimu! Imam jako osjetljivu kožu koja se ljuska, i ovo je jedini proizvod koji mi je zaista pomogao. Koristim svaku večer i razlika je vidljiva za samo sedmicu.",
    author: "Lejla M.",
    location: "Mostar"
  },
  {
    id: 4,
    rating: 5,
    text: "Fenomenalan proizvod za djecu! Moje dijete ima atopijski dermatitis i liječnik je preporučio da koristimo prirodne preparate. Smolovit krema za tijelo je prava stvar – nema reakcija, koža je hidratizirana.",
    author: "Selma D.",
    location: "Zenica"
  },
  {
    id: 5,
    rating: 5,
    text: "Radim fizički posao i svaki dan imam bolove u mišićima. Smolovit je moj obavezni ritual prije spavanja. Preporučio sam ga cijelom timu na poslu.",
    author: "Edin R.",
    location: "Banja Luka"
  }
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'smola',
    name: 'SMREKOVA SMOLA',
    title: 'Zlatno srce naših proizvoda',
    description: 'Smrekova (jela/omorika) smola jedna je od najmoćnijih prirodnih antiseptika poznatih čovjeku. Slavenska i skandinavska narodna medicina je koriste stotinama godina za liječenje rana, infekcija i kožnih bolesti. Bogata je terpenima i flavonoidima koji imaju antiupalno, antimikrobno i regenerativno djelovanje.',
    worksOn: ['rane', 'infekcije', 'gljivice', 'upale', 'zglobne bolove'],
    iconName: 'tree'
  },
  {
    id: 'vosak',
    name: 'PČELINJI VOSAK',
    title: 'Prirodni štit za kožu',
    description: 'Pčelinji vosak stvara zaštitni film na površini kože koji sprečava gubitak vlage, a istovremeno ne začepljuje pore. Bogat je vitaminima A i antioksidantima. Koristimo isključivo organski, neobrađen pčelinji vosak od domaćih pčelara.',
    worksOn: ['suhoću', 'zaštitu od vjetra', 'hidratizaciju', 'ekcem'],
    iconName: 'honey-comb'
  },
  {
    id: 'maslinovo-ulje',
    name: 'MASLINOVO ULJE',
    title: 'Tekuće zlato za njegu',
    description: 'Maslinovo ulje extra virgin bogato je masnim kiselinama, vitaminima E i K i polifenolima. Duboko prodire u kožu i hrani je iznutra. Posebno vrijedno za zrelu, suhu i iritiranu kožu.',
    worksOn: ['hidratizaciju', 'antioksidantnu zaštitu', 'anti-age', 'iritacije'],
    iconName: 'droplet'
  },
  {
    id: 'biljna-mast',
    name: 'BILJNA MAST',
    title: 'Osnova i punoća teksture',
    description: 'Kombinacija biljnih masti daje kremama Smolovit karakterističnu teksturu – bogatu, ali ne tešku. Hrani kožu i pomaže ostalim sastojcima da prodru dublje.',
    worksOn: ['teksturu kreme', 'dubinsku prehranu', 'popravku kožne barijere'],
    iconName: 'leaf'
  }
];

export const FAQS = [
  {
    q: "Da li su Smolovit proizvodi sigurni za djecu?",
    a: "Da, naši balzami i kreme su napravljeni od prirodnih sastojaka bez štetnih hemikalija i sigurni su za djecu stariju od 2 godine. Za novorođenčad uvijek se posavjetujte s pedijatrom."
  },
  {
    q: "Mogu li koristiti Smolovit kremice ako imam alergije?",
    a: "Uvijek preporučujemo test na koži prije prve upotrebe – nanesite malu količinu na unutarnji zglob i pričekajte 24 sata. Ako ste alergični na pčelinje proizvode, nemojte koristiti bez savjetovanja s ljekarom."
  },
  {
    q: "Da li Smolovit kreme zamjenjuju lijek?",
    a: "Ne. Naši proizvodi su dodaci njezi i prirodni saveznici vašeg zdravlja, ali nisu medicinski preparati. „Doktor liječi, priroda izliječi\" – oba su važna."
  },
  {
    q: "Koliko dugo traje jedna tegla?",
    a: "Zavisi od upotrebe. Tegla od 100ml pri svakodnevnoj upotrebi traje prosječno 6–8 sedmica."
  },
  {
    q: "Gdje se mogu kupiti Smolovit proizvodi?",
    a: "Naručite direktno putem naše web stranice ili nas kontaktirajte na Instagramu @smolovit. Dostava je dostupna za cijelu BiH, Srbiju i Hrvatsku."
  },
  {
    q: "Da li su pakovanja ekološka?",
    a: "Radimo na tome da koristimo staklene tegle i minimalan papirni ambalaž. Ekologija nam je prioritet."
  }
];
