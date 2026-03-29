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
  const [introVisible, setIntroVisible] = useState(true)
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
  const [rfPhotos, setRfPhotos] = useState([])

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
    setTimeout(() => setIntroVisible(false), 3000)
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
      {introVisible && (
        <div id="intro-overlay" style={{
          position:'fixed',top:0,left:0,right:0,bottom:0,zIndex:9999,
          background:'#f5ede6',
          display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
          opacity: introHidden ? 0 : 1,
          transition:'opacity 0.6s ease',
          pointerEvents: introHidden ? 'none' : 'all'
        }}>
          <img src="data:image/jpeg;base64,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" alt="Julia Petrov" style={{width:180,marginBottom:24,filter:'drop-shadow(0 4px 16px rgba(0,0,0,0.08))'}}/>
          <div className="intro-tagline" style={{color:'#8B6F4E',letterSpacing:3,fontSize:13,fontFamily:"'DM Sans', sans-serif",fontWeight:300}}>Нутрициолог · Персональный подход</div>
          <div className="intro-line" style={{width:60,height:1,background:'#C9A96E',margin:'20px auto 0'}}></div>
        </div>
      )}

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
