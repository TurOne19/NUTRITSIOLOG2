'use client'
import { useState, useEffect, useRef } from 'react'

// ─── ПЕРЕВОДЫ ───
const T = {
  ru: {
    nav_logo:'Юлия Петров', nav_for_whom:'Для кого', nav_about:'Обо мне',
    nav_how:'Как работаем', nav_packages:'Программы', nav_reviews:'Отзывы',
    nav_faq:'Вопросы', nav_cta:'Написать',
    hero_eyebrow:'Нутрициолог · Мягкий подход · Эстония',
    hero_h1:'Питание, которое', hero_h1_em:'работает для вас',
    hero_sub:'Возвращаю энергию, улучшаю самочувствие и выстраиваю комфортную систему питания — без жёстких диет и давления на себя.',
    hero_cta1:'Написать в Instagram', hero_cta2:'Посмотреть программы',
    hero_stat:'клиентов вернули энергию и лёгкость',
    m1:'Персональный план питания', m2:'Без жёстких диет', m3:'Работа с ЖКТ',
    m4:'Снижение веса', m5:'Энергия и бодрость', m6:'Онлайн-сопровождение',
    prob_tag:'Узнаёте себя?', prob_h2:'Когда что-то идёт не так',
    prob_sub:'Если хоть один из этих пунктов про вас — вы на правильном сайте.',
    p1_h:'Постоянная усталость', p1_t:'Просыпаетесь разбитой, к обеду уже нет сил.',
    p2_h:'Проблемы с ЖКТ', p2_t:'Вздутие, тяжесть, дискомфорт после еды.',
    p3_h:'Лишний вес', p3_t:'Диеты не работают, вес возвращается.',
    p4_h:'Кожа и внешний вид', p4_t:'Высыпания, тусклость, ломкие волосы.',
    p5_h:'Хаос в питании', p5_t:'Не понимаете что есть, читаете противоречивые советы.',
    res_tag:'Что вы получите', res_h2:'Реальные изменения, которые почувствуете',
    r1_h:'Энергия с утра до вечера', r1_t:'Просыпаетесь отдохнувшей, продуктивны весь день.',
    r2_h:'Комфортное снижение веса', r2_t:'Без голода, срывов и жёстких ограничений.',
    r3_h:'Лёгкость в теле', r3_t:'Уходит вздутие. Пищеварение работает как часы.',
    r4_h:'Система питания на всю жизнь', r4_t:'Питание становится удовольствием.',
    about_tag:'Обо мне', about_h2:'Привет, я — Юлия',
    about_p1:'Я нутрициолог, и верю что здоровое питание — это не про ограничения.',
    about_p2:'Несколько лет назад я сама прошла через хроническую усталость и бесконечные эксперименты с диетами.',
    about_p3:'Сейчас я помогаю людям разобраться в своём питании без стресса.',
    cred1:'Диплом нутрициолога', cred2:'Международные сертификаты', cred3:'100+ клиентов', cred4:'Опыт более 3 лет',
    gal_tag:'Результаты', gal_h2:'Фото и результаты',
    how_tag:'Как проходит работа', how_h2:'Просто, понятно, без стресса',
    how_sub:'Никаких марафонов и строгих планов.',
    s1_h:'Анализ и знакомство', s1_t:'Заполняете анкету, рассказываете о себе.',
    s2_h:'Разбор и план', s2_t:'Анализирую рацион, составляю рекомендации.',
    s3_h:'Объяснение логики', s3_t:'Рассказываю не просто «что делать», а «почему».',
    s4_h:'Сопровождение', s4_t:'Я рядом — отвечаю на вопросы каждый день.',
    pack_tag:'Программы', pack_h2:'Выберите свой формат работы',
    pack_sub:'Каждая программа — персональный подход. Цены обсуждаем индивидуально.',
    pk1_h:'Консультация', pk1_d:'Разовая встреча для конкретного плана действий.',
    pk2_badge:'Популярный выбор', pk2_h:'Сопровождение', pk2_d:'Работаем вместе 1–3 месяца.',
    pk3_h:'VIP', pk3_d:'Максимальное погружение для лучшего результата.',
    pk_learn:'Узнать подробнее', pk_write:'Написать и узнать цену',
    faq_tag:'Вопросы и ответы', faq_h2:'Часто спрашивают',
    faq_sub:'Если вашего вопроса нет — пишите напрямую.',
    faq1_q:'Мне подойдёт, если я не в Эстонии?',
    faq1_a:'Да! Я работаю полностью онлайн — Zoom, Google Meet, мессенджеры.',
    faq2_q:'Как долго длится программа?',
    faq2_a:'Консультация — 1–1.5 часа. Сопровождение — от 1 до 3 месяцев.',
    faq3_q:'Будет ли жёсткое меню и ограничения?',
    faq3_a:'Нет. Мягкий подход, никаких запрещённых продуктов.',
    faq4_q:'Нужно ли сдавать анализы перед работой?',
    faq4_a:'Не обязательно, но помогает. Подскажу что проверить.',
    faq5_q:'Как начать работу с вами?',
    faq5_a:'Напишите в Instagram. Первое знакомство бесплатно.',
    faq6_q:'Сколько стоят услуги?',
    faq6_a:'Зависит от формата. Напишите — обсудим.',
    rev_tag:'Реальные отзывы', rev_h2:'Что говорят клиенты',
    rev_sub:'Настоящие отзывы. Можете оставить свой — появится после проверки.',
    rf_title:'Оставьте свой отзыв', rf_sub:'Опубликуем после проверки.',
    rf_name_label:'Ваше имя', rf_program_label:'Программа',
    rf_rating_label:'Оценка', rf_text_label:'Ваш отзыв', rf_result_label:'Ваш результат (кратко)',
    rf_submit:'Отправить отзыв', rf_note:'После проверки будет опубликован',
    rf_success_title:'Спасибо за отзыв!', rf_success_sub:'Появится после проверки.',
    adv_tag:'Почему со мной', adv_h2:'Подход, который работает',
    adv1_h:'Объясняю, а не диктую', adv1_t:'Вы понимаете логику.',
    adv2_h:'Поддержка на каждом шаге', adv2_t:'Рядом в вопросах и победах.',
    adv3_h:'Без давления и диет', adv3_t:'В вашем темпе.',
    adv4_h:'Результат, который остаётся', adv4_t:'Система привычек на всю жизнь.',
    cta_tag:'Первый шаг', cta_h2:'Готовы начать?',
    cta_sub:'Напишите мне — первое знакомство бесплатно.',
    cta_btn:'Написать в Instagram', footer_copy:'Нутрициолог, Эстония',
    no_reviews:'Одобренных отзывов пока нет.',
  },
  et: {
    nav_logo:'Julia Petrov', nav_for_whom:'Kellele', nav_about:'Minust',
    nav_how:'Kuidas töötame', nav_packages:'Programmid', nav_reviews:'Arvustused',
    nav_faq:'Küsimused', nav_cta:'Kirjuta',
    hero_eyebrow:'Toitumisnõustaja · Pehme lähenemine · Eesti',
    hero_h1:'Toitumine, mis', hero_h1_em:'töötab teie jaoks',
    hero_sub:'Taastan energia, parandan enesetunnet — ilma rangete dieetideta.',
    hero_cta1:'Kirjuta Instagramis', hero_cta2:'Vaata programme',
    hero_stat:'klienti taastasid energia ja kerguse',
    m1:'Isiklik toitumisplaan', m2:'Ilma rangete dieetideta', m3:'Seedimisega töötamine',
    m4:'Kaalu langetamine', m5:'Energia ja elujõud', m6:'Veebisaatmine',
    prob_tag:'Kas tunned ennast ära?', prob_h2:'Kui midagi läheb valesti',
    prob_sub:'Kui kas või üks neist punktidest on sinu kohta — oled õigel saidil.',
    p1_h:'Pidev väsimus', p1_t:'Ärkad katki, lõunaks pole jõudu.',
    p2_h:'Seedimisprobleemid', p2_t:'Puhitus, raskus pärast söömist.',
    p3_h:'Liigne kaal', p3_t:'Dieedid ei tööta, kaal tuleb tagasi.',
    p4_h:'Nahk ja välimus', p4_t:'Lööbed, tuhmid juuksed.',
    p5_h:'Kaos toitumises', p5_t:'Ei tea mida süüa.',
    res_tag:'Mida saate', res_h2:'Reaalsed muutused, mida tunned',
    r1_h:'Energia hommikust õhtuni', r1_t:'Ärkad puhanuna.',
    r2_h:'Mugav kaalulangetamine', r2_t:'Ilma nälja ja piiranguteta.',
    r3_h:'Kergus kehas', r3_t:'Puhitus kaob.',
    r4_h:'Toitumissüsteem kogu eluks', r4_t:'Toitumine muutub naudinguks.',
    about_tag:'Minust', about_h2:'Tere, mina olen Julia',
    about_p1:'Olen toitumisnõustaja ja usun, et tervislik toitumine ei tähenda piiranguid.',
    about_p2:'Mõni aasta tagasi käisin ise läbi kroonilise väsimuse.',
    about_p3:'Nüüd aitan inimestel oma toitumises selgusele jõuda.',
    cred1:'Toitumisnõustaja diplom', cred2:'Rahvusvahelised sertifikaadid', cred3:'100+ klienti', cred4:'Kogemus üle 3 aasta',
    gal_tag:'Tulemused', gal_h2:'Fotod ja tulemused',
    how_tag:'Kuidas töö käib', how_h2:'Lihtsalt, selgelt, ilma stressita',
    how_sub:'Ei maratone ega rangeid plaane.',
    s1_h:'Analüüs ja tutvumine', s1_t:'Täidad ankeedi.',
    s2_h:'Analüüs ja plaan', s2_t:'Koostan isiklikud soovitused.',
    s3_h:'Loogika selgitamine', s3_t:'Räägin miks, mitte ainult mida.',
    s4_h:'Saatmine', s4_t:'Olen kõrval iga päev.',
    pack_tag:'Programmid', pack_h2:'Vali oma töövorm',
    pack_sub:'Iga programm on isiklik lähenemine.',
    pk1_h:'Konsultatsioon', pk1_d:'Ühekordne kohtumine.',
    pk2_badge:'Populaarne valik', pk2_h:'Saatmine', pk2_d:'Töötame koos 1–3 kuud.',
    pk3_h:'VIP', pk3_d:'Maksimaalne süvenemine.',
    pk_learn:'Lisateave', pk_write:'Kirjuta ja uuri hinda',
    faq_tag:'K&V', faq_h2:'Korduma kippuvad',
    faq_sub:'Küsi julgelt.',
    faq1_q:'Kas sobib, kui ma pole Eestis?', faq1_a:'Jah! Töötan täielikult veebis.',
    faq2_q:'Kui kaua programm kestab?', faq2_a:'Konsultatsioon 1–1,5h. Saatmine 1–3 kuud.',
    faq3_q:'Kas on rangeid piiranguid?', faq3_a:'Ei. Keelatud toiduained puuduvad.',
    faq4_q:'Kas pean analüüse tegema?', faq4_a:'Pole kohustuslik.',
    faq5_q:'Kuidas alustada?', faq5_a:'Kirjuta Instagramis. Esimene tutvumine tasuta.',
    faq6_q:'Palju maksab?', faq6_a:'Kirjuta — arutame.',
    rev_tag:'Arvustused', rev_h2:'Mida kliendid ütlevad',
    rev_sub:'Päriselt inimestelt pärit arvustused.',
    rf_title:'Jäta oma arvustus', rf_sub:'Avaldatakse pärast kontrolli.',
    rf_name_label:'Sinu nimi', rf_program_label:'Programm',
    rf_rating_label:'Hinne', rf_text_label:'Sinu arvustus', rf_result_label:'Sinu tulemus',
    rf_submit:'Saada arvustus', rf_note:'Avaldatakse pärast kontrolli',
    rf_success_title:'Tänan!', rf_success_sub:'Ilmub pärast kontrolli.',
    adv_tag:'Miks minuga', adv_h2:'Lähenemine, mis töötab',
    adv1_h:'Selgitan, ei dikteeri', adv1_t:'Mõistad loogikat.',
    adv2_h:'Tugi igal sammul', adv2_t:'Olen kõrval.',
    adv3_h:'Ilma surve ja dieetideta', adv3_t:'Sinu tempos.',
    adv4_h:'Tulemus, mis jääb', adv4_t:'Harjumuste süsteem eluks.',
    cta_tag:'Esimene samm', cta_h2:'Valmis alustama?',
    cta_sub:'Kirjuta mulle — esimene tutvumine tasuta.',
    cta_btn:'Kirjuta Instagramis', footer_copy:'Toitumisnõustaja, Eesti',
    no_reviews:'Kinnitatud arvustusi pole veel.',
  },
  en: {
    nav_logo:'Julia Petrov', nav_for_whom:"Who it's for", nav_about:'About',
    nav_how:'How we work', nav_packages:'Programs', nav_reviews:'Reviews',
    nav_faq:'FAQ', nav_cta:'Contact',
    hero_eyebrow:'Nutritionist · Gentle approach · Estonia',
    hero_h1:'Nutrition that', hero_h1_em:'works for you',
    hero_sub:"I restore energy and build a comfortable nutrition system — without rigid diets.",
    hero_cta1:'Write on Instagram', hero_cta2:'View programs',
    hero_stat:'clients restored energy and lightness',
    m1:'Personal nutrition plan', m2:'No rigid diets', m3:'Gut health', m4:'Weight management', m5:'Energy', m6:'Online support',
    prob_tag:'Do you recognise this?', prob_h2:'When something goes wrong',
    prob_sub:"If even one point resonates — you're in the right place.",
    p1_h:'Constant fatigue', p1_t:'You wake up exhausted.',
    p2_h:'Digestive issues', p2_t:'Bloating, discomfort after eating.',
    p3_h:'Excess weight', p3_t:"Diets don't work.",
    p4_h:'Skin & appearance', p4_t:'Breakouts, dullness.',
    p5_h:'Nutrition chaos', p5_t:"You don't know what to eat.",
    res_tag:"What you'll get", res_h2:'Real changes you\'ll feel',
    r1_h:'Energy all day', r1_t:'You wake up rested.',
    r2_h:'Comfortable weight loss', r2_t:'No hunger or restrictions.',
    r3_h:'Lightness in the body', r3_t:'Bloating disappears.',
    r4_h:'A nutrition system for life', r4_t:'Nutrition becomes a pleasure.',
    about_tag:'About me', about_h2:"Hi, I'm Julia",
    about_p1:"I'm a nutritionist — healthy eating isn't about restrictions.",
    about_p2:'I went through chronic fatigue and endless diet experiments myself.',
    about_p3:"Now I help people find clarity in nutrition without stress.",
    cred1:'Nutritionist diploma', cred2:'International certificates', cred3:'100+ clients', cred4:'3+ years experience',
    gal_tag:'Results', gal_h2:'Photos & results',
    how_tag:'How it works', how_h2:'Simple, clear, no stress',
    how_sub:'No marathons or rigid plans.',
    s1_h:'Analysis & intro', s1_t:'You fill a questionnaire.',
    s2_h:'Plan', s2_t:'I create personal recommendations.',
    s3_h:'Explaining why', s3_t:"Not just 'what' but 'why'.",
    s4_h:'Ongoing support', s4_t:"I'm here every day.",
    pack_tag:'Programs', pack_h2:'Choose your format',
    pack_sub:'Personal approach, not a template.',
    pk1_h:'Consultation', pk1_d:'One-time session with a concrete plan.',
    pk2_badge:'Most popular', pk2_h:'Mentorship', pk2_d:'1–3 months together.',
    pk3_h:'VIP', pk3_d:'Maximum depth for the best results.',
    pk_learn:'Learn more', pk_write:'Write and ask about price',
    faq_tag:'FAQ', faq_h2:'Frequently asked',
    faq_sub:'More questions? Write directly.',
    faq1_q:"Does it work if I'm not in Estonia?", faq1_a:'Yes! Fully online.',
    faq2_q:'How long does the program last?', faq2_a:'Consultation 1–1.5h. Mentorship 1–3 months.',
    faq3_q:'Will there be strict restrictions?', faq3_a:'No. Gentle approach.',
    faq4_q:'Do I need tests first?', faq4_a:"Not required.",
    faq5_q:'How do I start?', faq5_a:'Write on Instagram. First meeting is free.',
    faq6_q:'How much does it cost?', faq6_a:"Write to me — we'll discuss.",
    rev_tag:'Real reviews', rev_h2:'What clients say',
    rev_sub:'Genuine reviews. Leave yours — appears after moderation.',
    rf_title:'Leave your review', rf_sub:'Published after moderation.',
    rf_name_label:'Your name', rf_program_label:'Program',
    rf_rating_label:'Rating', rf_text_label:'Your review', rf_result_label:'Your result',
    rf_submit:'Submit review', rf_note:'Will be published after moderation',
    rf_success_title:'Thank you!', rf_success_sub:'Appears after moderation.',
    adv_tag:'Why me', adv_h2:'An approach that truly works',
    adv1_h:'I explain, not dictate', adv1_t:'You understand the logic.',
    adv2_h:'Support at every step', adv2_t:"I'm here for you.",
    adv3_h:'No pressure or diets', adv3_t:'At your pace.',
    adv4_h:'Results that last', adv4_t:'Habits for life.',
    cta_tag:'First step', cta_h2:'Ready to start?',
    cta_sub:'Write to me — first meeting is free.',
    cta_btn:'Write on Instagram', footer_copy:'Nutritionist, Estonia',
    no_reviews:'No approved reviews yet.',
  }
}

const STOCK_PHOTOS = [
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80',
]

const GALLERY_COUNT = 7
const PHOTO_SLOT_LABELS = { heroFoto:'Герой', resultsFoto:'Результаты', aboutFoto:'Обо мне' }

export default function Home() {
  const [lang, setLang] = useState('ru')
  const t = T[lang]
  const [introHidden, setIntroHidden] = useState(false)
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
  const [rfProgram, setRfProgram] = useState('Консультация')
  const [rfResult, setRfResult] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // Admin
  const [adminOpen, setAdminOpen] = useState(false)
  const [adminLoggedIn, setAdminLoggedIn] = useState(false)
  const [adminPass, setAdminPass] = useState('')
  const [adminTab, setAdminTab] = useState('reviews')
  const [adminReviews, setAdminReviews] = useState([])
  const [adminLoading, setAdminLoading] = useState(false)

  const ADMIN_SECRET = process.env.NEXT_PUBLIC_ADMIN_SECRET || 'julia2025secret'

  // ─── INIT ───
  useEffect(() => {
    setTimeout(() => setIntroHidden(true), 2400)
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
    if (data.url) setPhotos(prev => ({ ...prev, [key]: data.url + '?t=' + Date.now() }))
  }

  async function deletePhoto(key) {
    await fetch('/api/photos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${ADMIN_SECRET}` },
      body: JSON.stringify({ key })
    })
    setPhotos(prev => { const n = { ...prev }; delete n[key]; return n })
  }

  async function submitReview() {
    if (!rfName || !rfText) { alert('Заполните имя и текст'); return }
    if (!rating) { alert('Поставьте оценку'); return }
    setSubmitting(true)
    try {
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: rfName, text: rfText, program: rfProgram, result: rfResult, rating })
      })
      setRfName(''); setRfText(''); setRfResult(''); setRating(0)
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
    if (adminPass === 'julia2025') {
      setAdminLoggedIn(true)
      fetchAdminReviews()
    } else {
      alert('Неверный пароль')
    }
  }

  const galleryPhotos = Array.from({ length: GALLERY_COUNT }, (_, i) => photos[`gallery_${i}`] || STOCK_PHOTOS[i])
  const programs = [t.pk1_h, t.pk2_h, t.pk3_h]

  // ─── RENDER ───
  return (
    <>
      {/* INTRO */}
      <div id="intro-overlay" className={introHidden ? 'hidden' : ''}>
        <div className="intro-logo">Юлия Петров</div>
        <div className="intro-tagline">Нутрициолог · Персональный подход</div>
        <div className="intro-line"></div>
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

      <canvas id="confetti-canvas"></canvas>

      {/* LANG BAR */}
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
            <div className="hero-stat">
              <div className="hero-stat-num">100+</div>
              <div className="hero-stat-text">{t.hero_stat}</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[t.m1,t.m2,t.m3,t.m4,t.m5,t.m6,t.m1,t.m2,t.m3,t.m4,t.m5,t.m6].map((m,i) => (
            <span key={i} className="marquee-item">{m}<span className="marquee-dot"/></span>
          ))}
        </div>
      </div>

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
                {[t.cred1,t.cred2,t.cred3,t.cred4].map((c,i) => (
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

      {/* GALLERY */}
      <section id="gallery" className="section">
        <div className="container">
          <div className="gallery-intro reveal">
            <span className="tag">{t.gal_tag}</span>
            <h2>{t.gal_h2}</h2>
            <div className="divider"/>
          </div>
          <div className="gallery-grid stagger">
            {galleryPhotos.map((src,i) => (
              <div key={i} className="gallery-item" onClick={() => openLightbox(i, galleryPhotos)}>
                <img src={src} alt={`Photo ${i+1}`} loading="lazy"/>
                <div className="gallery-overlay">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </div>
              </div>
            ))}
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
            <p>{t.how_sub}</p>
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
            <div className="pack-card">
              <div className="pack-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
              <h3>{t.pk1_h}</h3>
              <p className="pack-desc">{t.pk1_d}</p>
              <a href="https://www.instagram.com/julia_petrov_nutritio/" target="_blank" className="pack-btn pack-btn-ghost">{t.pk_learn}</a>
            </div>
            <div className="pack-card feat">
              <div className="pack-badge">{t.pk2_badge}</div>
              <div className="pack-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
              <h3>{t.pk2_h}</h3>
              <p className="pack-desc">{t.pk2_d}</p>
              <a href="https://www.instagram.com/julia_petrov_nutritio/" target="_blank" className="pack-btn pack-btn-solid">{t.pk_write}</a>
            </div>
            <div className="pack-card">
              <div className="pack-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <h3>{t.pk3_h}</h3>
              <p className="pack-desc">{t.pk3_d}</p>
              <a href="https://www.instagram.com/julia_petrov_nutritio/" target="_blank" className="pack-btn pack-btn-ghost">{t.pk_learn}</a>
            </div>
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
              {[[t.faq1_q,t.faq1_a],[t.faq2_q,t.faq2_a],[t.faq3_q,t.faq3_a],[t.faq4_q,t.faq4_a],[t.faq5_q,t.faq5_a],[t.faq6_q,t.faq6_a]].map(([q,a],i) => (
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
                  <div className="review-text">"{r.text}"</div>
                  <div className="review-author">
                    <div className="review-av">{r.name.charAt(0).toUpperCase()}</div>
                    <div className="review-info">
                      <strong>{r.name}</strong>
                      <span>{r.program} · {new Date(r.created_at).toLocaleDateString('ru-RU')}</span>
                    </div>
                  </div>
                  {r.result && <div className="review-tag">{r.result}</div>}
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
                    {/* Основные фото */}
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
                    {/* Галерея */}
                    {Array.from({length:GALLERY_COUNT},(_,i)=>{
                      const key = `gallery_${i}`
                      const src = photos[key] || STOCK_PHOTOS[i]
                      return (
                        <label key={key} className="photo-slot">
                          <img src={src} alt={`gallery_${i+1}`}/>
                          <div className="photo-slot-overlay">
                            <span className="photo-slot-label">Галерея {i+1}</span>
                            <span className="photo-slot-btn">Заменить</span>
                          </div>
                          <input type="file" accept="image/*" style={{position:'absolute',inset:0,opacity:0,cursor:'pointer'}}
                            onChange={e=>e.target.files[0]&&uploadPhoto(key,e.target.files[0])}/>
                          {photos[key] && (
                            <button style={{position:'absolute',bottom:8,right:8,background:'rgba(192,57,43,.8)',border:'none',color:'#fff',padding:'4px 10px',borderRadius:20,cursor:'pointer',fontSize:11}}
                              onClick={e=>{e.preventDefault();deletePhoto(key)}}>✕</button>
                          )}
                        </label>
                      )
                    })}
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
