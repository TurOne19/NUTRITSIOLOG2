'use client'
import { useState, useEffect, useRef } from 'react'

// ─── ПЕРЕВОДЫ ───
const T = {
  ru: {
    nav_logo:'Юлия Петров', nav_for_whom:'Для кого', nav_about:'Обо мне',
    nav_how:'Как работаю', nav_packages:'Программы', nav_reviews:'Отзывы',
    nav_faq:'Вопросы', nav_cta:'Написать',
    hero_eyebrow:'Нутрициолог · Мягкий подход · Эстония',
    hero_h1:'Питание, которое', hero_h1_em:'работает для вас',
    hero_sub:'Помогаю в выстраивании персональной системы питания для поддержки энергии, хорошего самочувствия и качества жизни — без жёстких ограничений и давления.',
    hero_cta1:'Написать в Instagram', hero_cta2:'Посмотреть программы',
    hero_stat:'клиентов вернули энергию и лёгкость',
    prob_tag:'Узнаёте себя?', prob_h2:'Когда что-то идёт не так',
    prob_sub:'Если хоть один из этих пунктов про вас — вы на правильном сайте.',
    p1_h:'Постоянная усталость', p1_t:'Просыпаетесь разбитой, к обеду уже нет сил.',
    p2_h:'Дискомфорт после еды', p2_t:'Вздутие, тяжесть или неприятные ощущения, которые мешают чувствовать себя легко.',
    p3_h:'Сложности с весом', p3_t:'Вес стоит на месте или возвращается, несмотря на попытки что-то менять.',
    p4_h:'Кожа и внешний вид', p4_t:'Высыпания, тусклость, ломкие волосы.',
    p5_h:'Хаос в питании', p5_t:'Не понимаете что есть, читаете противоречивые советы.',
    res_tag:'Что вы получите', res_h2:'Реальные изменения, которые почувствуете',
    r1_h:'Энергия с утра до вечера', r1_t:'Просыпаетесь отдохнувшей, продуктивны весь день.',
    r2_h:'Комфортное снижение веса', r2_t:'Без голода, срывов и жёстких ограничений.',
    r3_h:'Лёгкость в теле', r3_t:'Уходит вздутие. Пищеварение работает как часы.',
    r4_h:'Система питания на всю жизнь', r4_t:'Питание становится удовольствием.',
    about_tag:'Обо мне', about_h2:'Привет, я — Юлия',
    about_p1:'Я — интегративный нутрициолог. Работаю с питанием и образом жизни как с системой, которая напрямую влияет на уровень энергии, самочувствия и общее качество жизни.',
    about_p2:'Мой профессиональный путь начался с личного запроса. В какой-то момент я столкнулась с постоянной усталостью и снижением ресурса — состоянием, когда даже после отдыха не возвращается энергия. Погружение в нутрициологию и последовательная работа с привычками питания помогли мне восстановить баланс и выйти на стабильное, хорошее самочувствие.',
    about_p3:'Сегодня я сопровождаю клиентов в выстраивании индивидуальной системы питания и образа жизни — без жёстких ограничений и универсальных решений. В основе моей работы — внимательное отношение к организму, постепенные изменения и устойчивый результат.',
    cred1:'Диплом нутрициолога', cred2:'Опыт более 3 лет',
    how_tag:'Как проходит работа', how_h2:'Без жёстких схем и универсальных решений',
    how_sub:'',
    s1_h:'Знакомство и первичный анализ', s1_t:'Вы заполняете анкету, дневник питания и делитесь своим образом жизни, самочувствием и привычками.',
    s2_h:'Индивидуальные рекомендации', s2_t:'Я анализирую ваш рацион, анкету и формирую персональные рекомендации с учётом ваших целей и особенностей.',
    s3_h:'Понимание и осознанность', s3_t:'Показываю, почему это работает, чтобы вы могли принимать решения с уверенностью.',
    s4_h:'Поддержка в процессе', s4_t:'Сопровождаю вас на каждом этапе, отвечаю на вопросы и помогаю закрепить результат в повседневной жизни.',
    pack_tag:'Программы', pack_h2:'Выберите свой формат работы',
    pack_sub:'Каждая программа — персональный подход.',
    pk1_h:'START', pk1_badge:'',
    pk1_d:'Идеально, если вы хотите получить профессиональный разбор и понять, с чего начать.',
    pk1_includes_title:'В пакет входит:',
    pk1_includes:['Анализ вашей анкеты','Анализ дневника питания','Разовая онлайн-консультация (1–1,5 часа)','Персональные рекомендации по питанию и улучшению рациона'],
    pk1_who_title:'Кому подходит:',
    pk1_who:['Тем, кто только начинает путь к правильному питанию','Если есть ощущение «питаюсь неправильно, но не понимаю как исправить»','Тем, кто хочет получить чёткий план действий без сопровождения','Если нужен системный взгляд со стороны'],
    pk1_result:'📌 Результат: вы получаете ясность, конкретные ошибки и понятный план первых шагов.',
    pk1_price:'Стоимость: 135€',
    pk2_badge:'Популярный выбор',
    pk2_h:'PRO',
    pk2_d:'Подходит, если вы хотите не только рекомендации, но и поддержку в процессе изменений.',
    pk2_includes_title:'В пакет входит:',
    pk2_includes:['Анализ вашей анкеты и назначение анализов','Анализ дневника питания','Нутрициологический разбор анализов','Индивидуальная стратегия питания под ваши цели и особенности организма','Индивидуальные рекомендации по нутриентной поддержке (БАДы при необходимости)','Сопровождение 1,5 месяца: онлайн-консультация каждую неделю (40 мин – 1 час, всего 4 онлайн-встречи), ответы на вопросы','Поддержка и мотивация'],
    pk2_who_title:'Кому подходит:',
    pk2_who:['Тем, кому важна поддержка и обратная связь','Тем, кому требуется более глубокая работа с нутрициологом'],
    pk2_result:'📌 Результат: вы внедряете новые привычки, рекомендации и закрепляете результаты для достижения вашей цели.',
    pk2_price:'Стоимость: 380€',
    pk3_h:'Индивидуальный формат работы', pk3_badge:'',
    pk3_d:'Если у вас есть запрос / желание, которые не вписываются в предложенные пакеты (состояние здоровья, ритм жизни, специфические цели и т.д.), мы можем обсудить индивидуальный формат сопровождения.',
    pk3_sub:'Я подхожу к каждому клиенту персонально и при необходимости адаптирую программу под вашу ситуацию.',
    pk3_cta:'📩 Напишите мне, опишите свою задачу — и я предложу оптимальное решение именно для вас.',
    pk_not_for_title:'❗️ Кому не подойдёт работа со мной',
    pk_not_for:['Тем, кто уже «всё знает» и не готов внедрять рекомендации','Если вы ищете «волшебную таблетку» без изменений в привычках','Тем, кто не готов к диалогу и работе над собой'],
    pk_not_for_note:'📌 Важно: результат зависит не только от рекомендаций, но и от вашей вовлечённости в процесс.',
    pk_learn:'Узнать подробнее', pk_write:'Написать и узнать цену',
    faq_tag:'Вопросы и ответы', faq_h2:'Часто спрашивают',
    faq_sub:'Если вашего вопроса нет — пишите напрямую.',
    faq1_q:'Мне подойдёт, если я не в Эстонии?',
    faq1_a:'Да! Я работаю полностью онлайн — Zoom, Google Meet, мессенджеры.',
    faq2_q:'Нужно ли сдавать анализы перед работой?',
    faq2_a:'Да. Наличие анализов может быть полезным инструментом для более глубокой и персонализированной работы, так как позволяет учитывать индивидуальные особенности организма.',
    faq3_q:'Проводите ли вы диагностику по анализам?',
    faq3_a:'Я не провожу медицинскую диагностику и не заменяю консультацию врача. Я могу учитывать результаты анализов в работе для более персонализированного подхода к питанию и образу жизни. При выявлении отклонений рекомендую обратиться к врачу.',
    faq4_q:'Как начать работу с вами?',
    faq4_a:'Напишите мне в Instagram.',
    rev_tag:'Реальные отзывы', rev_h2:'Что говорят клиенты',
    rev_sub:'Настоящие отзывы. Можете оставить свой — появится после проверки.',
    rf_title:'Оставьте свой отзыв', rf_sub:'Опубликуем после проверки.',
    rf_name_label:'Ваше имя', rf_program_label:'Программа',
    rf_rating_label:'Оценка', rf_text_label:'Ваш отзыв', rf_result_label:'Ваш результат (кратко)',
    rf_submit:'Отправить отзыв', rf_note:'После проверки будет опубликован',
    rf_success_title:'Спасибо за отзыв!', rf_success_sub:'Появится после проверки.',
    adv_tag:'Почему со мной', adv_h2:'Подход, который работает',
    adv1_h:'Понимание вместо строгих правил', adv1_t:'Вы не просто следуете рекомендациям, а понимаете, как и почему они работают.',
    adv2_h:'Поддержка', adv2_t:'Я рядом на всём пути — в вопросах, сомнениях и ваших достижениях.',
    adv3_h:'Бережный подход', adv3_t:'Без жёстких ограничений и давления — с уважением к вашему ритму жизни.',
    adv4_h:'Результат, который остаётся с вами', adv4_t:'Формируем привычки и систему питания, которые становятся частью вашей жизни надолго.',
    cta_tag:'Первый шаг', cta_h2:'Готовы начать?',
    cta_sub:'Напишите мне.',
    cta_btn:'Написать в Instagram', footer_copy:'Нутрициолог, Эстония',
    no_reviews:'Одобренных отзывов пока нет.',
  },
  et: {
    nav_logo:'Julia Petrov', nav_for_whom:'Kellele', nav_about:'Minust',
    nav_how:'Kuidas töötan', nav_packages:'Programmid', nav_reviews:'Arvustused',
    nav_faq:'Küsimused', nav_cta:'Kirjuta',
    hero_eyebrow:'Toitumisnõustaja · Pehme lähenemine · Eesti',
    hero_h1:'Toitumine, mis', hero_h1_em:'töötab teie jaoks',
    hero_sub:'Aitan luua isikliku toitumissüsteemi energia toetamiseks, heaoluks ja elukvaliteediks — ilma rangete piirangute ja surveta.',
    hero_cta1:'Kirjuta Instagramis', hero_cta2:'Vaata programme',
    hero_stat:'klienti taastasid energia ja kerguse',
    prob_tag:'Kas tunned ennast ära?', prob_h2:'Kui midagi läheb valesti',
    prob_sub:'Kui kas või üks neist punktidest on sinu kohta — oled õigel saidil.',
    p1_h:'Pidev väsimus', p1_t:'Ärkad katki, lõunaks pole jõudu.',
    p2_h:'Ebamugavus pärast söömist', p2_t:'Puhitus, raskus või ebameeldivad aistingud, mis takistavad kerget enesetunnet.',
    p3_h:'Raskused kaaluga', p3_t:'Kaal seisab paigal või tuleb tagasi, hoolimata katsetest midagi muuta.',
    p4_h:'Nahk ja välimus', p4_t:'Lööbed, tuhmid juuksed.',
    p5_h:'Kaos toitumises', p5_t:'Ei tea mida süüa.',
    res_tag:'Mida saate', res_h2:'Reaalsed muutused, mida tunned',
    r1_h:'Energia hommikust õhtuni', r1_t:'Ärkad puhanuna.',
    r2_h:'Mugav kaalulangetamine', r2_t:'Ilma nälja ja piiranguteta.',
    r3_h:'Kergus kehas', r3_t:'Puhitus kaob.',
    r4_h:'Toitumissüsteem kogu eluks', r4_t:'Toitumine muutub naudinguks.',
    about_tag:'Minust', about_h2:'Tere, mina olen Julia',
    about_p1:'Olen integratiivne toitumisnõustaja. Töötan toitumise ja elustiiliga kui süsteemiga, mis mõjutab otseselt energia taset, enesetunnet ja elukvaliteeti.',
    about_p2:'Minu professionaalne tee sai alguse isiklikust vajadusest. Mingil hetkel kogesin pidevat väsimust ja ressursi langust — seisundit, kus energia ei taastu isegi pärast puhkust. Toitumisnõustamisesse süvenemine ja järjepidev töö toitumisharjumustega aitasid mul tasakaalu taastada.',
    about_p3:'Täna saadate kliente individuaalse toitumis- ja elustiilisüsteemi loomisel — ilma rangete piirangute ja universaalsete lahendusteta.',
    cred1:'Toitumisnõustaja diplom', cred2:'Kogemus üle 3 aasta',
    how_tag:'Kuidas töö käib', how_h2:'Ilma rangete skeemide ja universaalsete lahendusteta',
    how_sub:'',
    s1_h:'Tutvumine ja esmane analüüs', s1_t:'Täidad ankeedi, toidupäeviku ja jagad oma eluviisi, enesetunnet ja harjumusi.',
    s2_h:'Individuaalsed soovitused', s2_t:'Analüüsin sinu toitumist ja ankeeti ning koostan isiklikud soovitused.',
    s3_h:'Mõistmine ja teadlikkus', s3_t:'Näitan, miks see toimib, et saaksid otsuseid kindlalt vastu võtta.',
    s4_h:'Tugi protsessis', s4_t:'Saadate sind igal etapil, vastan küsimustele ja aitan tulemust igapäevaelus kinnistada.',
    pack_tag:'Programmid', pack_h2:'Vali oma töövorm',
    pack_sub:'Iga programm on isiklik lähenemine.',
    pk1_h:'START', pk1_badge:'',
    pk1_d:'Ideaalne, kui soovid saada professionaalset analüüsi ja mõista, kust alustada.',
    pk1_includes_title:'Paketti kuulub:',
    pk1_includes:['Sinu ankeedi analüüs','Toidupäeviku analüüs','Ühekordne veebikonsultatsioon (1–1,5 tundi)','Isiklikud toitumissoovitused'],
    pk1_who_title:'Kellele sobib:',
    pk1_who:['Neile, kes alles alustavad õige toitumise teed','Kui on tunne «söön valesti, aga ei tea kuidas parandada»','Neile, kes soovivad selget tegevusplaani ilma saatmiseta','Kui on vaja süsteemset väljavaadet'],
    pk1_result:'📌 Tulemus: saad selguse, konkreetsed vead ja arusaadava esimeste sammude plaani.',
    pk1_price:'Hind: 135€',
    pk2_badge:'Populaarne valik',
    pk2_h:'PRO',
    pk2_d:'Sobib, kui soovid mitte ainult soovitusi, vaid ka tuge muutuste protsessis.',
    pk2_includes_title:'Paketti kuulub:',
    pk2_includes:['Sinu ankeedi analüüs ja analüüside määramine','Toidupäeviku analüüs','Analüüside toitumisnõustamislik läbivaatamine','Individuaalne toitumisstraateegia sinu eesmärkide järgi','Individuaalsed soovitused toitainete toe osas (toidulisandid vajadusel)','Saatmine 1,5 kuud: iganädalane veebikonsultatsioon (40 min – 1 tund, kokku 4 kohtumist), küsimustele vastamine','Tugi ja motivatsioon'],
    pk2_who_title:'Kellele sobib:',
    pk2_who:['Neile, kellele on oluline tugi ja tagasiside','Neile, kes vajavad põhjalikumat tööd toitumisnõustajaga'],
    pk2_result:'📌 Tulemus: juurutad uued harjumused ja soovitused ning kinnistud tulemused oma eesmärgi saavutamiseks.',
    pk2_price:'Hind: 380€',
    pk3_h:'Individuaalne töövorm', pk3_badge:'',
    pk3_d:'Kui sul on soov või vajadus, mis ei mahu pakutud pakettidesse (tervislik seisund, elurütm, spetsiifilised eesmärgid jne), saame arutada individuaalset saatmisformaati.',
    pk3_sub:'Suhtun igasse klienti isiklikult ja vajaduse korral kohandan programmi sinu olukorrale.',
    pk3_cta:'📩 Kirjuta mulle, kirjelda oma ülesannet — ja pakun just sinule optimaalse lahenduse.',
    pk_not_for_title:'❗️ Kellele töö minuga ei sobi',
    pk_not_for:['Neile, kes juba «teavad kõike» ja ei ole valmis soovitusi rakendama','Kui otsite «imeliseid tablette» ilma harjumuste muutmiseta','Neile, kes ei ole valmis dialoogiks ja enesearenguks'],
    pk_not_for_note:'📌 Oluline: tulemus sõltub mitte ainult soovitustest, vaid ka teie kaasatusest protsessi.',
    pk_learn:'Lisateave', pk_write:'Kirjuta ja uuri hinda',
    faq_tag:'K&V', faq_h2:'Korduma kippuvad',
    faq_sub:'Küsi julgelt.',
    faq1_q:'Kas sobib, kui ma pole Eestis?', faq1_a:'Jah! Töötan täielikult veebis.',
    faq2_q:'Kas pean analüüse tegema?',
    faq2_a:'Jah. Analüüside olemasolu võib olla kasulik vahend sügavamaks ja isikupärasemaks tööks, kuna võimaldab arvestada organismi individuaalseid eripärasid.',
    faq3_q:'Kas te teete analüüside põhjal diagnostikat?',
    faq3_a:'Ma ei tee meditsiinilist diagnostikat ega asenda arsti konsultatsiooni. Saan analüüside tulemusi töös arvestada, et tagada isikupärasem lähenemine toitumisele ja eluviisile. Kõrvalekallete avastamisel soovitan pöörduda arsti poole.',
    faq4_q:'Kuidas alustada?', faq4_a:'Kirjuta mulle Instagramis.',
    rev_tag:'Arvustused', rev_h2:'Mida kliendid ütlevad',
    rev_sub:'Päriselt inimestelt pärit arvustused.',
    rf_title:'Jäta oma arvustus', rf_sub:'Avaldatakse pärast kontrolli.',
    rf_name_label:'Sinu nimi', rf_program_label:'Programm',
    rf_rating_label:'Hinne', rf_text_label:'Sinu arvustus', rf_result_label:'Sinu tulemus',
    rf_submit:'Saada arvustus', rf_note:'Avaldatakse pärast kontrolli',
    rf_success_title:'Tänan!', rf_success_sub:'Ilmub pärast kontrolli.',
    adv_tag:'Miks minuga', adv_h2:'Lähenemine, mis töötab',
    adv1_h:'Mõistmine rangete reeglite asemel', adv1_t:'Sa ei järgi lihtsalt soovitusi, vaid mõistad, kuidas ja miks need töötavad.',
    adv2_h:'Tugi', adv2_t:'Olen kõrval kogu teel — küsimustes, kahtlustes ja sinu saavutustes.',
    adv3_h:'Hooliv lähenemine', adv3_t:'Ilma rangete piirangute ja surveta — austusega sinu elurütmi vastu.',
    adv4_h:'Tulemus, mis jääb sinuga', adv4_t:'Kujundame harjumused ja toitumissüsteemi, mis saavad pikaks ajaks sinu elu osaks.',
    cta_tag:'Esimene samm', cta_h2:'Valmis alustama?',
    cta_sub:'Kirjuta mulle.',
    cta_btn:'Kirjuta Instagramis', footer_copy:'Toitumisnõustaja, Eesti',
    no_reviews:'Kinnitatud arvustusi pole veel.',
  },
  en: {
    nav_logo:'Julia Petrov', nav_for_whom:"Who it's for", nav_about:'About',
    nav_how:'How I work', nav_packages:'Programs', nav_reviews:'Reviews',
    nav_faq:'FAQ', nav_cta:'Contact',
    hero_eyebrow:'Nutritionist · Gentle approach · Estonia',
    hero_h1:'Nutrition that', hero_h1_em:'works for you',
    hero_sub:"I help build a personal nutrition system to support energy, wellbeing and quality of life — without rigid restrictions or pressure.",
    hero_cta1:'Write on Instagram', hero_cta2:'View programs',
    hero_stat:'clients restored energy and lightness',
    prob_tag:'Do you recognise this?', prob_h2:'When something goes wrong',
    prob_sub:"If even one point resonates — you're in the right place.",
    p1_h:'Constant fatigue', p1_t:'You wake up exhausted.',
    p2_h:'Discomfort after eating', p2_t:'Bloating, heaviness or unpleasant sensations that prevent you from feeling light.',
    p3_h:'Struggles with weight', p3_t:"Weight stays put or keeps coming back despite attempts to change something.",
    p4_h:'Skin & appearance', p4_t:'Breakouts, dullness.',
    p5_h:'Nutrition chaos', p5_t:"You don't know what to eat.",
    res_tag:"What you'll get", res_h2:"Real changes you'll feel",
    r1_h:'Energy all day', r1_t:'You wake up rested.',
    r2_h:'Comfortable weight loss', r2_t:'No hunger or restrictions.',
    r3_h:'Lightness in the body', r3_t:'Bloating disappears.',
    r4_h:'A nutrition system for life', r4_t:'Nutrition becomes a pleasure.',
    about_tag:'About me', about_h2:"Hi, I'm Julia",
    about_p1:"I'm an integrative nutritionist. I work with nutrition and lifestyle as a system that directly affects energy levels, wellbeing and overall quality of life.",
    about_p2:"My professional journey began with a personal need. At some point I faced constant fatigue and a drop in resources — a state where energy doesn't return even after rest. Immersing myself in nutritiology and consistently working on eating habits helped me restore balance and reach stable, good health.",
    about_p3:"Today I support clients in building an individual nutrition and lifestyle system — without rigid restrictions or universal solutions. At the core of my work is mindful attention to the body, gradual changes and lasting results.",
    cred1:'Nutritionist diploma', cred2:'3+ years experience',
    how_tag:'How it works', how_h2:'No rigid schemes or universal solutions',
    how_sub:'',
    s1_h:'Introduction & initial analysis', s1_t:'You fill in a questionnaire, food diary and share your lifestyle, wellbeing and habits.',
    s2_h:'Individual recommendations', s2_t:'I analyse your diet and questionnaire and create personal recommendations tailored to your goals.',
    s3_h:'Understanding & awareness', s3_t:"I show you why it works so you can make decisions with confidence.",
    s4_h:'Support throughout', s4_t:"I accompany you at every stage, answer questions and help you embed results into daily life.",
    pack_tag:'Programs', pack_h2:'Choose your format',
    pack_sub:'Personal approach, not a template.',
    pk1_h:'START', pk1_badge:'',
    pk1_d:'Ideal if you want a professional breakdown and to understand where to begin.',
    pk1_includes_title:'What's included:',
    pk1_includes:['Analysis of your questionnaire','Analysis of your food diary','One-time online consultation (1–1.5 hours)','Personal nutrition recommendations'],
    pk1_who_title:'Who it's for:',
    pk1_who:['Those just starting their healthy eating journey','If you feel "I eat wrong but don\'t know how to fix it"','Those who want a clear action plan without ongoing support','If you need a systematic outside perspective'],
    pk1_result:'📌 Result: you gain clarity, identify specific mistakes and get an understandable first-steps plan.',
    pk1_price:'Price: €135',
    pk2_badge:'Most popular',
    pk2_h:'PRO',
    pk2_d:'Ideal if you want not only recommendations but also support throughout the process of change.',
    pk2_includes_title:'What's included:',
    pk2_includes:['Questionnaire analysis and lab test referrals','Food diary analysis','Nutritional review of lab results','Individual nutrition strategy tailored to your goals','Individual micronutrient support recommendations (supplements if needed)','1.5-month support: weekly online consultation (40 min–1 hour, 4 sessions total), Q&A','Support and motivation'],
    pk2_who_title:'Who it's for:',
    pk2_who:['Those for whom support and feedback matter','Those who need deeper work with a nutritionist'],
    pk2_result:'📌 Result: you implement new habits and recommendations and consolidate results towards your goal.',
    pk2_price:'Price: €380',
    pk3_h:'Individual format', pk3_badge:'',
    pk3_d:'If your request doesn\'t fit the packages above (health condition, lifestyle, specific goals etc.), we can discuss an individual support format.',
    pk3_sub:'I approach every client personally and adapt the programme to your situation if needed.',
    pk3_cta:'📩 Write to me, describe your goal — and I\'ll suggest the best solution for you.',
    pk_not_for_title:"❗️ Who I'm not the right fit for",
    pk_not_for:['Those who "already know everything" and aren\'t ready to implement recommendations','If you\'re looking for a "magic pill" without changing habits','Those not ready for dialogue and working on themselves'],
    pk_not_for_note:'📌 Important: results depend not only on recommendations but also on your involvement in the process.',
    pk_learn:'Learn more', pk_write:'Write and ask about price',
    faq_tag:'FAQ', faq_h2:'Frequently asked',
    faq_sub:'More questions? Write directly.',
    faq1_q:"Does it work if I'm not in Estonia?", faq1_a:'Yes! Fully online.',
    faq2_q:'Do I need lab tests first?',
    faq2_a:'Yes. Having test results can be a valuable tool for deeper and more personalised work, as it allows us to account for your body\'s individual characteristics.',
    faq3_q:'Do you diagnose based on lab results?',
    faq3_a:'I do not perform medical diagnosis and do not replace a doctor\'s consultation. I can take lab results into account for a more personalised approach to nutrition and lifestyle. If deviations are found, I recommend consulting a doctor.',
    faq4_q:'How do I start?', faq4_a:'Write to me on Instagram.',
    rev_tag:'Real reviews', rev_h2:'What clients say',
    rev_sub:'Genuine reviews. Leave yours — appears after moderation.',
    rf_title:'Leave your review', rf_sub:'Published after moderation.',
    rf_name_label:'Your name', rf_program_label:'Program',
    rf_rating_label:'Rating', rf_text_label:'Your review', rf_result_label:'Your result',
    rf_submit:'Submit review', rf_note:'Will be published after moderation',
    rf_success_title:'Thank you!', rf_success_sub:'Appears after moderation.',
    adv_tag:'Why me', adv_h2:'An approach that truly works',
    adv1_h:'Understanding over strict rules', adv1_t:"You don't just follow recommendations — you understand how and why they work.",
    adv2_h:'Support', adv2_t:"I'm here for you throughout — in questions, doubts and your achievements.",
    adv3_h:'A caring approach', adv3_t:'No rigid restrictions or pressure — with respect for your life rhythm.',
    adv4_h:'Results that stay with you', adv4_t:'We build habits and a nutrition system that become a lasting part of your life.',
    cta_tag:'First step', cta_h2:'Ready to start?',
    cta_sub:'Write to me.',
    cta_btn:'Write on Instagram', footer_copy:'Nutritionist, Estonia',
    no_reviews:'No approved reviews yet.',
  }
}

const PHOTO_SLOT_LABELS = { heroFoto:'Герой', resultsFoto:'Результаты', aboutFoto:'Обо мне' }

export default function Home() {
  const [lang, setLang] = useState('ru')
  const t = T[lang]
  const [introClass, setIntroClass] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [reviews, setReviews] = useState([])
  const [photos, setPhotos] = useState({})
  const [lbOpen, setLbOpen] = useState(false)
  const [lbIndex, setLbIndex] = useState(0)
  const [lbPhotos, setLbPhotos] = useState([])
  const [rating, setRating] = useState(0)
  const [rfName, setRfName] = useState('')
  const [rfText, setRfText] = useState('')
  const [rfProgram, setRfProgram] = useState('START')
  const [rfResult, setRfResult] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [rfPhotos, setRfPhotos] = useState([])

  // Admin
  const [adminOpen, setAdminOpen] = useState(false)
  const [adminLoggedIn, setAdminLoggedIn] = useState(false)
  const [adminPass, setAdminPass] = useState('')
  const [adminTab, setAdminTab] = useState('reviews')
  const [adminReviews, setAdminReviews] = useState([])
  const [adminLoading, setAdminLoading] = useState(false)

  const ADMIN_SECRET = process.env.NEXT_PUBLIC_ADMIN_SECRET || 'Nut1306'

  // ─── INIT ───
  useEffect(() => {
    setTimeout(() => setIntroClass('hiding'), 2200)
    setTimeout(() => setIntroClass('hidden'), 3000)
    fetchPhotos()
    fetchReviews()
  }, [])

  // ─── SCROLL REVEAL ───
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [reviews, photos])

  // ─── KEYBOARD LIGHTBOX ───
  useEffect(() => {
    const handler = e => {
      if (!lbOpen) return
      if (e.key === 'Escape') setLbOpen(false)
      if (e.key === 'ArrowLeft') setLbIndex(i => (i - 1 + lbPhotos.length) % lbPhotos.length)
      if (e.key === 'ArrowRight') setLbIndex(i => (i + 1) % lbPhotos.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lbOpen, lbPhotos])

  // ─── API CALLS ───
  async function fetchReviews() {
    try {
      const res = await fetch('/api/reviews')
      const data = await res.json()
      setReviews(Array.isArray(data) ? data : [])
    } catch {}
  }

  async function fetchPhotos() {
    try {
      const res = await fetch('/api/photos')
      const data = await res.json()
      setPhotos(data || {})
    } catch {}
  }

  async function fetchAdminReviews() {
    setAdminLoading(true)
    try {
      const res = await fetch('/api/admin/reviews', {
        headers: { Authorization: `Bearer ${ADMIN_SECRET}` }
      })
      const data = await res.json()
      setAdminReviews(Array.isArray(data) ? data : [])
    } catch {}
    setAdminLoading(false)
  }

  async function approveReview(id) {
    await fetch('/api/admin/reviews', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${ADMIN_SECRET}` },
      body: JSON.stringify({ id, approved: true })
    })
    fetchAdminReviews()
    fetchReviews()
  }

  async function deleteReview(id) {
    await fetch('/api/admin/reviews', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${ADMIN_SECRET}` },
      body: JSON.stringify({ id })
    })
    fetchAdminReviews()
    fetchReviews()
  }

  async function uploadPhoto(key, file) {
    const fd = new FormData()
    fd.append('key', key)
    fd.append('file', file)
    const res = await fetch('/api/photos', {
      method: 'POST',
      headers: { Authorization: `Bearer ${ADMIN_SECRET}` },
      body: fd
    })
    const data = await res.json()
    if (data.url) setPhotos(prev => ({ ...prev, [key]: data.url }))
  }

  async function deletePhoto(key) {
    await fetch('/api/photos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${ADMIN_SECRET}` },
      body: JSON.stringify({ key })
    })
    setPhotos(prev => { const n = { ...prev }; delete n[key]; return n })
  }

  async function uploadReviewPhoto(file) {
    const fd = new FormData()
    fd.append('key', 'review_tmp_' + Date.now())
    fd.append('file', file)
    const res = await fetch('/api/photos', {
      method: 'POST',
      headers: { Authorization: `Bearer ${ADMIN_SECRET}` },
      body: fd
    })
    const data = await res.json()
    return data.url || null
  }

  async function submitReview() {
    if (!rfName || !rfText) { alert('Заполните имя и текст'); return }
    if (!rating) { alert('Поставьте оценку'); return }
    setSubmitting(true)
    try {
      let photoUrls = []
      for (const file of rfPhotos) {
        const url = await uploadReviewPhoto(file)
        if (url) photoUrls.push(url)
      }
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: rfName, text: rfText, program: rfProgram, result: rfResult, rating, photos: photoUrls })
      })
      setRfName(''); setRfText(''); setRfResult(''); setRating(0); setRfPhotos([])
      setSubmitSuccess(true)
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch {}
    setSubmitting(false)
  }

  // ─── HELPERS ───
  function openLightbox(i, photosArr) {
    setLbPhotos(photosArr)
    setLbIndex(i)
    setLbOpen(true)
  }

  function adminLogin() {
    if (adminPass === 'Nut1306') {
      setAdminLoggedIn(true)
      fetchAdminReviews()
    } else {
      alert('Неверный пароль')
    }
  }

  const programs = [t.pk1_h, t.pk2_h, t.pk3_h]

  // ─── RENDER ───
  return (
    <>
      {/* INTRO */}
      <div id="intro-overlay" className={introClass}>
        <img src="https://xcyyteuhordlrxniqvqu.supabase.co/storage/v1/object/public/photos/5917962693757308165__1_-removebg-preview.png" alt="Julia Petrov Nutritionist" style={{width:260,marginBottom:28}} />
        <div className="intro-tagline" style={{color:'#8B6F4E',letterSpacing:3,fontSize:13,fontFamily:"'DM Sans', sans-serif",fontWeight:600}}>Нутрициолог · Персональный подход</div>
        <div className="intro-line" style={{width:60,height:1,background:'#C9A96E',margin:'20px auto 0'}}></div>
      </div>

      {/* LIGHTBOX */}
      <div id="lightbox" className={lbOpen ? 'open' : ''} onClick={e => { if (e.target.id === 'lightbox') setLbOpen(false) }}>
        <button className="lb-close" onClick={() => setLbOpen(false)}>×</button>
        {lbPhotos.length > 0 && <img src={lbPhotos[lbIndex]} alt="" />}
        <div className="lb-nav">
          <button className="lb-btn" onClick={() => setLbIndex(i => (i - 1 + lbPhotos.length) % lbPhotos.length)}>← Назад</button>
          <button className="lb-btn" onClick={() => setLbIndex(i => (i + 1) % lbPhotos.length)}>Вперёд →</button>
        </div>
      </div>

      <div className="lang-bar">
        {['ru','et','en'].map(l => (
          <button key={l} className={`lang-btn${lang === l ? ' active' : ''}`} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
        ))}
      </div>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a className="nav-logo" href="#">{t.nav_logo}</a>
          <ul className="nav-links">
            {[['#problems',t.nav_for_whom],['#about',t.nav_about],['#how',t.nav_how],['#packages',t.nav_packages],['#reviews',t.nav_reviews],['#faq',t.nav_faq]].map(([href,label]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
            <li><a href="https://www.instagram.com/julia_petrov_nutritio/" target="_blank" className="nav-cta">{t.nav_cta}</a></li>
          </ul>
          <button className="burger" onClick={() => setMobileOpen(o => !o)}>
            <span/><span/><span/>
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {[['#problems',t.nav_for_whom],['#about',t.nav_about],['#how',t.nav_how],['#packages',t.nav_packages],['#reviews',t.nav_reviews],['#faq',t.nav_faq]].map(([href,label]) => (
          <a key={href} href={href} onClick={() => setMobileOpen(false)}>{label}</a>
        ))}
        <a href="https://www.instagram.com/julia_petrov_nutritio/" target="_blank">{t.hero_cta1}</a>
      </div>

      {/* HERO */}
      <section id="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <div className="hero-line"></div>
              <span>{t.hero_eyebrow}</span>
            </div>
            <h1>{t.hero_h1}<br/><em>{t.hero_h1_em}</em></h1>
            <p className="hero-sub">{t.hero_sub}</p>
            <div className="hero-actions">
              <a href="https://www.instagram.com/julia_petrov_nutritio/" target="_blank" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                {t.hero_cta1}
              </a>
              <a href="#packages" className="btn-outline">{t.hero_cta2}</a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-foto">
              <div className="foto" style={{height:'100%',minHeight:480}}>
                {photos.heroFoto
                  ? <img src={photos.heroFoto} alt="Julia"/>
                  : <span style={{fontSize:11,opacity:.5}}>Фото загружается через админку</span>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section id="problems" className="section">
        <div className="container">
          <div className="problems-intro reveal">
            <span className="tag">{t.prob_tag}</span>
            <h2>{t.prob_h2}</h2>
            <div className="divider"/>
            <p>{t.prob_sub}</p>
          </div>
          <div className="probs-grid stagger">
            {[[t.p1_h,t.p1_t],[t.p2_h,t.p2_t],[t.p3_h,t.p3_t],[t.p4_h,t.p4_t],[t.p5_h,t.p5_t]].map(([h,p],i) => (
              <div key={i} className="prob-card">
                <div className="prob-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="section">
        <div className="container">
          <div className="results-layout">
            <div className="results-foto reveal-left">
              <div className="foto" style={{width:'100%',height:'100%',minHeight:500}}>
                {photos.resultsFoto
                  ? <img src={photos.resultsFoto} alt="Results"/>
                  : <span style={{fontSize:11,opacity:.5}}>Фото загружается через админку</span>
                }
              </div>
            </div>
            <div className="reveal-right">
              <span className="tag">{t.res_tag}</span>
              <h2>{t.res_h2}</h2>
              <div className="divider"/>
              <div className="result-list">
                {[[t.r1_h,t.r1_t],[t.r2_h,t.r2_t],[t.r3_h,t.r3_t],[t.r4_h,t.r4_t]].map(([h,p],i) => (
                  <div key={i} className="result-item">
                    <div className="result-n">0{i+1}</div>
                    <div><h3>{h}</h3><p>{p}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-layout">
            <div className="about-content reveal-left">
              <span className="tag">{t.about_tag}</span>
              <h2>{t.about_h2}</h2>
              <div className="divider"/>
              <p>{t.about_p1}</p>
              <p>{t.about_p2}</p>
              <p>{t.about_p3}</p>
              <div className="creds">
                {[t.cred1,t.cred2].filter(c => c).map((c,i) => (
                  <div key={i} className="cred">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-foto-wrap reveal-right">
              <div className="about-accent"/>
              <div className="about-accent2"/>
              <div className="about-foto">
                <div className="foto" style={{width:'100%',height:'100%',minHeight:520}}>
                  {photos.aboutFoto
                    ? <img src={photos.aboutFoto} alt="Julia"/>
                    : <span style={{fontSize:11,opacity:.5}}>Фото загружается через админку</span>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="section">
        <div className="container">
          <div className="how-intro reveal">
            <span className="tag">{t.how_tag}</span>
            <h2>{t.how_h2}</h2>
            <div className="divider"/>
            {t.how_sub && <p>{t.how_sub}</p>}
          </div>
          <div className="steps stagger">
            {[[t.s1_h,t.s1_t],[t.s2_h,t.s2_t],[t.s3_h,t.s3_t],[t.s4_h,t.s4_t]].map(([h,p],i) => (
              <div key={i} className="step">
                <div className="step-num">0{i+1}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="section">
        <div className="container">
          <div className="packages-intro reveal">
            <span className="tag">{t.pack_tag}</span>
            <h2>{t.pack_h2}</h2>
            <div className="divider"/>
            <p>{t.pack_sub}</p>
          </div>
          <div className="pack-grid stagger">

            {/* START */}
            <div className="pack-card">
              <div className="pack-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
              <h3>{t.pk1_h}</h3>
              <p className="pack-desc">{t.pk1_d}</p>
              <div style={{marginBottom:16}}>
                <div style={{fontSize:13,fontWeight:600,color:'var(--c7)',marginBottom:8}}>{t.pk1_includes_title}</div>
                <ul style={{paddingLeft:18,display:'flex',flexDirection:'column',gap:4}}>
                  {t.pk1_includes.map((item,i)=><li key={i} style={{fontSize:13,color:'var(--muted)'}}>{item}</li>)}
                </ul>
              </div>
              <div style={{marginBottom:16}}>
                <div style={{fontSize:13,fontWeight:600,color:'var(--c7)',marginBottom:8}}>{t.pk1_who_title}</div>
                <ul style={{paddingLeft:18,display:'flex',flexDirection:'column',gap:4}}>
                  {t.pk1_who.map((item,i)=><li key={i} style={{fontSize:13,color:'var(--muted)'}}>{item}</li>)}
                </ul>
              </div>
              <p style={{fontSize:13,color:'var(--c6)',marginBottom:12}}>{t.pk1_result}</p>
              <p style={{fontSize:15,fontWeight:600,color:'var(--c7)',marginBottom:20}}>{t.pk1_price}</p>
              <a href="https://www.instagram.com/julia_petrov_nutritio/" target="_blank" className="pack-btn pack-btn-ghost">{t.pk_write}</a>
            </div>

            {/* PRO */}
            <div className="pack-card feat">
              <div className="pack-badge">{t.pk2_badge}</div>
              <div className="pack-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
              <h3>{t.pk2_h}</h3>
              <p className="pack-desc">{t.pk2_d}</p>
              <div style={{marginBottom:16}}>
                <div style={{fontSize:13,fontWeight:600,color:'var(--c7)',marginBottom:8}}>{t.pk2_includes_title}</div>
                <ul style={{paddingLeft:18,display:'flex',flexDirection:'column',gap:4}}>
                  {t.pk2_includes.map((item,i)=><li key={i} style={{fontSize:13,color:'var(--muted)'}}>{item}</li>)}
                </ul>
              </div>
              <div style={{marginBottom:16}}>
                <div style={{fontSize:13,fontWeight:600,color:'var(--c7)',marginBottom:8}}>{t.pk2_who_title}</div>
                <ul style={{paddingLeft:18,display:'flex',flexDirection:'column',gap:4}}>
                  {t.pk2_who.map((item,i)=><li key={i} style={{fontSize:13,color:'var(--muted)'}}>{item}</li>)}
                </ul>
              </div>
              <p style={{fontSize:13,color:'var(--c6)',marginBottom:12}}>{t.pk2_result}</p>
              <p style={{fontSize:15,fontWeight:600,color:'var(--c7)',marginBottom:20}}>{t.pk2_price}</p>
              <a href="https://www.instagram.com/julia_petrov_nutritio/" target="_blank" className="pack-btn pack-btn-solid">{t.pk_write}</a>
            </div>

            {/* INDIVIDUAL */}
            <div className="pack-card" style={{display:'flex',flexDirection:'column',gap:0}}>
              <div className="pack-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <h3>{t.pk3_h}</h3>
              <p className="pack-desc">{t.pk3_d}</p>
              <p style={{fontSize:13,color:'var(--muted)',marginBottom:16,lineHeight:1.7}}>{t.pk3_sub}</p>
              <p style={{fontSize:13,color:'var(--c6)',marginBottom:20,lineHeight:1.7}}>{t.pk3_cta}</p>
              <a href="https://www.instagram.com/julia_petrov_nutritio/" target="_blank" className="pack-btn pack-btn-ghost" style={{marginTop:'auto'}}>{t.pk_write}</a>
            </div>
          </div>

          {/* NOT FOR WHOM */}
          <div className="reveal" style={{marginTop:56,background:'var(--white)',borderRadius:'var(--r)',padding:'36px 40px',border:'1.5px solid var(--c3)'}}>
            <div style={{fontSize:18,fontWeight:600,color:'var(--c7)',marginBottom:16,fontFamily:"var(--ff-sans)"}}>{t.pk_not_for_title}</div>
            <ul style={{paddingLeft:20,display:'flex',flexDirection:'column',gap:8,marginBottom:20}}>
              {t.pk_not_for.map((item,i)=><li key={i} style={{fontSize:15,color:'var(--muted)'}}>{item}</li>)}
            </ul>
            <p style={{fontSize:14,color:'var(--c6)',fontWeight:500}}>{t.pk_not_for_note}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <div className="faq-layout">
            <div className="faq-intro reveal-left">
              <span className="tag">{t.faq_tag}</span>
              <h2>{t.faq_h2}</h2>
              <div className="divider"/>
              <p>{t.faq_sub}</p>
            </div>
            <div className="faq-list reveal-right">
              {[[t.faq1_q,t.faq1_a],[t.faq2_q,t.faq2_a],[t.faq3_q,t.faq3_a],[t.faq4_q,t.faq4_a]].map(([q,a],i) => (
                <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                  <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{q}</span>
                    <div className="faq-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    </div>
                  </div>
                  <div className="faq-a"><div className="faq-a-inner">{a}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section">
        <div className="container">
          <div className="reviews-intro reveal">
            <span className="tag">{t.rev_tag}</span>
            <h2>{t.rev_h2}</h2>
            <div className="divider"/>
            <p>{t.rev_sub}</p>
          </div>
          <div className="reviews-grid">
            {reviews.length === 0
              ? <p style={{color:'var(--muted)',fontStyle:'italic'}}>{t.no_reviews}</p>
              : reviews.map(r => (
                <div key={r.id} className="review-card">
                  <div className="review-stars-inner">
                    {Array.from({length:5},(_,i)=><span key={i} className={`r-star${i<r.rating?' lit':''}`}>★</span>)}
                  </div>
                  <div className="review-text">&ldquo;{r.text}&rdquo;</div>
                  <div className="review-author">
                    <div className="review-av">{r.name.charAt(0).toUpperCase()}</div>
                    <div className="review-info">
                      <strong>{r.name}</strong>
                      <span>{r.program} · {new Date(r.created_at).toLocaleDateString('ru-RU')}</span>
                    </div>
                  </div>
                  {r.result && <div className="review-tag">{r.result}</div>}
                  {r.photos && r.photos.length > 0 && (
                    <div style={{display:'flex',gap:8,marginTop:12,flexWrap:'wrap'}}>
                      {r.photos.map((url,i) => (
                        <div key={i} style={{width:72,height:72,borderRadius:10,overflow:'hidden',cursor:'pointer',border:'1.5px solid var(--border)'}}
                          onClick={()=>openLightbox(i,r.photos)}>
                          <img src={url} style={{width:'100%',height:'100%',objectFit:'cover'}} alt=""/>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            }
          </div>

          {/* REVIEW FORM */}
          <div className="review-form-wrap reveal" style={{marginTop:48}}>
            <div className="review-form-title">{t.rf_title}</div>
            <p className="review-form-sub">{t.rf_sub}</p>
            <div className="form-grid">
              <div className="form-field">
                <label>{t.rf_name_label}</label>
                <input value={rfName} onChange={e=>setRfName(e.target.value)} placeholder="Анна, 32 года"/>
              </div>
              <div className="form-field">
                <label>{t.rf_program_label}</label>
                <select value={rfProgram} onChange={e=>setRfProgram(e.target.value)}>
                  {programs.map(p=><option key={p}>{p}</option>)}
                </select>
              </div>
              <div className="form-field full">
                <label>{t.rf_rating_label}</label>
                <div className="star-select">
                  {[1,2,3,4,5].map(n=>(
                    <button key={n} className={`star-btn${rating>=n?' active':''}`} onClick={()=>setRating(n)}>★</button>
                  ))}
                </div>
              </div>
              <div className="form-field full">
                <label>{t.rf_text_label}</label>
                <textarea value={rfText} onChange={e=>setRfText(e.target.value)} rows={4} placeholder="Расскажите о своём опыте..."/>
              </div>
              <div className="form-field">
                <label>{t.rf_result_label}</label>
                <input value={rfResult} onChange={e=>setRfResult(e.target.value)} placeholder="−5 кг, больше энергии..."/>
              </div>
              <div className="form-field full">
                <label>Фото (до 3 штук, необязательно)</label>
                <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:8}}>
                  {rfPhotos.map((file,i) => (
                    <div key={i} style={{position:'relative',width:80,height:80,borderRadius:12,overflow:'hidden',border:'1.5px solid var(--accent)'}}>
                      <img src={URL.createObjectURL(file)} style={{width:'100%',height:'100%',objectFit:'cover'}} alt=""/>
                      <button onClick={()=>setRfPhotos(p=>p.filter((_,j)=>j!==i))}
                        style={{position:'absolute',top:3,right:3,background:'rgba(0,0,0,0.5)',border:'none',color:'#fff',borderRadius:'50%',width:20,height:20,cursor:'pointer',fontSize:12,lineHeight:'20px',textAlign:'center',padding:0}}>×</button>
                    </div>
                  ))}
                  {rfPhotos.length < 3 && (
                    <label style={{width:80,height:80,borderRadius:12,border:'1.5px dashed var(--accent)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',cursor:'pointer',color:'var(--accent)',fontSize:11,gap:4}}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                      Добавить
                      <input type="file" accept="image/*" style={{display:'none'}} onChange={e=>e.target.files[0]&&setRfPhotos(p=>[...p,e.target.files[0]])}/>
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div className="form-submit">
              <button className="btn-primary" onClick={submitReview} disabled={submitting}>
                {submitting ? '...' : t.rf_submit}
              </button>
              <span className="form-note">{t.rf_note}</span>
            </div>
            {submitSuccess && (
              <div className="success-box">
                <span className="success-icon">✨</span>
                <div className="success-text">{t.rf_success_title}</div>
                <div className="success-sub">{t.rf_success_sub}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="section">
        <div className="container">
          <div style={{textAlign:'center',maxWidth:520,margin:'0 auto 64px'}} className="reveal">
            <span className="tag">{t.adv_tag}</span>
            <h2>{t.adv_h2}</h2>
          </div>
          <div className="adv-grid stagger">
            {[[t.adv1_h,t.adv1_t],[t.adv2_h,t.adv2_t],[t.adv3_h,t.adv3_t],[t.adv4_h,t.adv4_t]].map(([h,p],i)=>(
              <div key={i} className="adv-card">
                <div className="adv-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/></svg>
                </div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="container" style={{textAlign:'center',position:'relative',zIndex:2}}>
          <span className="tag">{t.cta_tag}</span>
          <h2 style={{color:'#fff',marginBottom:16}}>{t.cta_h2}</h2>
          <p>{t.cta_sub}</p>
          <a href="https://www.instagram.com/julia_petrov_nutritio/" target="_blank" className="btn-light">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            {t.cta_btn}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Юлия Петров</div>
        <p>© 2025 · <a href="https://www.instagram.com/julia_petrov_nutritio/" target="_blank">@julia_petrov_nutritio</a> · {t.footer_copy}</p>
        <div className="footer-badge">
          <a href="https://northpixel.vercel.app/" target="_blank" className="badge-text">
            Webpage by <strong>NorthPixel</strong>
          </a>
        </div>
      </footer>

      {/* ADMIN TOGGLE */}
      <button id="admin-toggle" onClick={() => setAdminOpen(true)}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
      </button>

      {/* ADMIN PANEL */}
      <div className={`admin-overlay${adminOpen ? ' open' : ''}`} onClick={e => { if (e.target.classList.contains('admin-overlay')) setAdminOpen(false) }}>
        <div className="admin-box">
          <button className="admin-close" onClick={() => setAdminOpen(false)}>×</button>
          <div className="admin-title">Панель администратора</div>
          <p className="admin-sub">Управление отзывами и фотографиями.</p>

          {!adminLoggedIn ? (
            <div className="admin-login">
              <input type="password" placeholder="Пароль" value={adminPass}
                onChange={e=>setAdminPass(e.target.value)}
                onKeyDown={e=>e.key==='Enter'&&adminLogin()}/>
              <button className="btn-primary" onClick={adminLogin} style={{padding:'12px 24px',fontSize:13}}>Войти</button>
            </div>
          ) : (
            <>
              <div className="admin-tabs">
                <button className={`admin-tab${adminTab==='reviews'?' active':''}`} onClick={()=>setAdminTab('reviews')}>Отзывы</button>
                <button className={`admin-tab${adminTab==='photos'?' active':''}`} onClick={()=>setAdminTab('photos')}>Фотографии</button>
              </div>

              {/* REVIEWS TAB */}
              {adminTab === 'reviews' && (
                <div>
                  {adminLoading && <div className="admin-empty">Загрузка...</div>}
                  {!adminLoading && adminReviews.length === 0 && <div className="admin-empty">Отзывов нет.</div>}
                  {adminReviews.map(r => (
                    <div key={r.id} className="admin-review-item">
                      <div className="admin-review-header">
                        <span className="admin-review-name">{r.name}</span>
                        <div style={{display:'flex',gap:8,flexWrap:'wrap',alignItems:'center'}}>
                          <span>{'★'.repeat(r.rating)}</span>
                          <span className={r.approved?'status-approved':'status-pending'}>
                            {r.approved ? 'Опубликован' : 'На проверке'}
                          </span>
                          <span className="admin-review-date">{new Date(r.created_at).toLocaleDateString('ru-RU')}</span>
                        </div>
                      </div>
                      <div className="admin-review-text">{r.text}</div>
                      {r.result && <div style={{fontSize:13,color:'var(--accent)',marginBottom:8}}>Результат: {r.result}</div>}
                      {r.photos && r.photos.length > 0 && (
                        <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:8}}>
                          {r.photos.map((url,i) => (
                            <img key={i} src={url} style={{width:64,height:64,objectFit:'cover',borderRadius:8,border:'1px solid var(--border)',cursor:'pointer'}}
                              onClick={()=>openLightbox(i,r.photos)}/>
                          ))}
                        </div>
                      )}
                      <div className="admin-review-actions">
                        {!r.approved && <button className="btn-approve" onClick={()=>approveReview(r.id)}>Одобрить</button>}
                        <button className="btn-delete" onClick={()=>deleteReview(r.id)}>Удалить</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* PHOTOS TAB */}
              {adminTab === 'photos' && (
                <div>
                  <p style={{fontSize:14,color:'var(--muted)',marginBottom:16}}>Нажмите на слот, чтобы загрузить фото. Оно сразу появится на сайте у всех.</p>
                  <div className="photo-manager">
                    {['heroFoto','resultsFoto','aboutFoto'].map(key => (
                      <label key={key} className="photo-slot">
                        {photos[key] && <img src={photos[key]} alt={key}/>}
                        <div className="photo-slot-overlay">
                          <span className="photo-slot-label">{PHOTO_SLOT_LABELS[key]}</span>
                          <span className="photo-slot-btn">Загрузить</span>
                        </div>
                        <input type="file" accept="image/*" style={{position:'absolute',inset:0,opacity:0,cursor:'pointer'}}
                          onChange={e=>e.target.files[0]&&uploadPhoto(key,e.target.files[0])}/>
                        {photos[key] && (
                          <button style={{position:'absolute',bottom:8,right:8,background:'rgba(192,57,43,.8)',border:'none',color:'#fff',padding:'4px 10px',borderRadius:20,cursor:'pointer',fontSize:11}}
                            onClick={e=>{e.preventDefault();deletePhoto(key)}}>✕</button>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
