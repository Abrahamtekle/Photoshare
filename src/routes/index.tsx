import { createFileRoute } from '@tanstack/react-router'

const heroImage =
  'https://i.wfolio.com/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/AElTZ6-GAUFXmohcGp-MzTSBeOAp42Pk/vFVMPok_GxaJ1hW_937CYBmxSKTdSImi/gwgWCDD_j4_tajFMFWRwxg.jpg'

const featureCards = [
  {
    title: 'Sell products and services online',
    description: 'Create a storefront for your photos, products, and services, with inquiries and online payments.',
    image: 'https://i.wfolio.com/x/M5WK4BLIgG-qyI8ZOeSuCkq8wa8L1RO1/el2Cn27_lTYb0d7zo24iltXo3Au_bmKO/DwmminVp1S5uLdbvtyDRHx6RHv32rloO/rDDQlucKq9mujSySCP5dqnzlazn56v74/M-gMsQeDvWLpZ-JHvGu7V3vkVB7v5NvS/939n9trdYU_k78MHJ9DfJlqzTRgR_wH7.jpg',
    className: 'md:col-span-7',
  },
  {
    title: 'AI photo retouching in galleries',
    description: 'Spend less time on routine edits and more time behind the camera.',
    image: 'https://i.wfolio.com/x/M5WK4BLIgG-qyI8ZOeSuCkq8wa8L1RO1/el2Cn27_lTYb0d7zo24iltXo3Au_bmKO/DwmminVp1S5uLdbvtyDRHx6RHv32rloO/rDDQlucKq9lGfS3oqpXIDkWgw5wbozXJ/DzPw6lIkuhiQYp53opDcjb2XPKiCwk3k/A1SkrQkwgv4DBotgjXAJZ5p0AGVwRrYb.jpg',
    className: 'md:col-span-5',
  },
  {
    title: 'Wfolio Online Magazine',
    description: 'Photography news, interviews, inspiration, and gear reviews.',
    image: 'https://i.wfolio.com/x/wj_aLy0Hz134YM1lmH1WUO2TyGFgCxkM/yM3YVYkuwM08PNyLak0svh8fndbEC-3y/28E58Y51De9VkJafhaUdHGkX8NIZ2Sgl/cwOZRN6xdHcys7QTGtupvq0x0yIeI2KH/lZskuFdvBCc00SO818px_lq_EH0_j4Qz/3K5J1ATcjdDaf6Omf0uHz2duH6t4-RCq.jpg',
    className: 'md:col-span-5',
  },
  {
    title: 'Tools that help you get found',
    description: 'Share galleries, grow website traffic, and make your work easier to discover.',
    image: 'https://i.wfolio.com/x/lAzvD6V3zDvNTGHYMVRoG3hwAXklo3Zp/TjFrczNGWRmzUb8jcNARnGYYVZyjlIqw/DagJOq1TdvaQqNGjE7aS3BLeFjGL6_s5/195HV04b8e-gEvklD0Sxsg1HoB1VluV1/bzXZhpk_GZ8gzonZUmASjW49daN-mE4a/9y9TFiTbanedsHGa6Gjh6yFQCZ0kN-vj.jpg',
    className: 'md:col-span-7',
  },
]

const benefits = [
  ['STYLISH DESIGNS', 'A beautiful website that lets your work take center stage.'],
  ['EASY TO FIND', 'Tools to help clients discover your photography online.'],
  ['CONTENT PROTECTION', 'Control access to photos, videos, and client galleries.'],
  ['FRIENDLY INTERFACE', 'Build pages and deliver photos without a technical learning curve.'],
  ['HIGH SPEED', 'Fast file uploads and a smooth gallery experience.'],
  ['SALES TOOLS', 'Offer photos, products, and services directly to clients.'],
  ['VIDEO TOOLS', 'Share films and video alongside your photography.'],
  ['REAL SUPPORT', 'Get friendly guidance when you need a hand.'],
]

const galleryFaces = [
  'https://i.wfolio.com/x/XEFEvE-Nu381pOR4oV5MYSopDF7zkmTY/WZ0alsqm43-yFFOJVKcjqK51HjRSra7U/DuFIwoaGJQqOZ7vqujq-QS5mmu9Q3Nun/iIJCyoZzKuSYXYxUnohp2ONuT228Zm30/xt35mpuO22T_5TPJawM0kA.jpg',
  'https://i.wfolio.com/x/XEFEvE-Nu381pOR4oV5MYSopDF7zkmTY/WZ0alsqm43-yFFOJVKcjqK51HjRSra7U/DuFIwoaGJQqOZ7vqujq-QR8zh0vrSEmg/x3VeeJyS_MrSJMOhDmirrs704WO2M5kz/8NB-OoPSS_PHsa54Dqzjpg.jpg',
  'https://i.wfolio.com/x/XEFEvE-Nu381pOR4oV5MYSopDF7zkmTY/WZ0alsqm43-yFFOJVKcjqK51HjRSra7U/DuFIwoaGJQqOZ7vqujq-QeLhoEc996i8/9YyFNTw07Btup7BMEGH636xpyuKT6UEb/gM2cOJ0xKcEFJf8ZBCZLbA.jpg',
  'https://i.wfolio.com/x/XEFEvE-Nu381pOR4oV5MYSopDF7zkmTY/WZ0alsqm43-yFFOJVKcjqK51HjRSra7U/DuFIwoaGJQqOZ7vqujq-Qcp8g1sOY3Rs/6POaZYJJBfFhFuw4i4wcZGzPWNyejxyx/SD0X4Ko_F4cJ2LLPlgaZ5Q.jpg',
  'https://i.wfolio.com/x/XEFEvE-Nu381pOR4oV5MYSopDF7zkmTY/WZ0alsqm43-yFFOJVKcjqK51HjRSra7U/DuFIwoaGJQqOZ7vqujq-QVA6EfsdBqYC/gU3TAd3sIGAwx6_BGsQ0mcGs1hPLQq07/6hzrTimr3H9QHDVXUPx8RQ.jpg',
  'https://i.wfolio.com/x/XEFEvE-Nu381pOR4oV5MYSopDF7zkmTY/WZ0alsqm43-yFFOJVKcjqK51HjRSra7U/DuFIwoaGJQqOZ7vqujq-QfKWASM9Ioap/TbzlSm2lSQtOJQoCXI_hiy68BhtOSxuz/WkxYj44m2sVENwwxZOk4RQ.jpg',
]

const questions = [
  ['Why does a photographer need a website?', 'A dedicated website gives your work a home, helps potential clients understand your services, and makes it easier to get in touch.'],
  ['Can I create a website on my own?', 'Yes. Choose a ready-made design, add your images and information, then adjust the pages to fit your style.'],
  ['Can I share client galleries privately?', 'Yes. Galleries can be shared with secure links and privacy settings, so you can deliver work directly to each client.'],
  ['I’m a beginner. Where should I start?', 'Start with a portfolio and contact page. You can add galleries and services as your photography business grows.'],
]

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Wfolio — a website builder and cloud drive for photographers' },
      { name: 'description', content: 'Create a beautiful photography website, share client galleries, and grow your creative business with Wfolio.' },
    ],
  }),
  component: Home,
})

function Home() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 sm:px-8">
          <a href="#top" aria-label="Wfolio home" className="font-serif text-[25px] font-bold tracking-[-0.07em]">wfolio</a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-[13px] font-medium md:flex">
            <a className="transition-colors hover:text-muted-foreground" href="#platform">Platform</a>
            <a className="transition-colors hover:text-muted-foreground" href="#work">For photographers</a>
            <a className="transition-colors hover:text-muted-foreground" href="#pricing">Pricing</a>
            <a className="transition-colors hover:text-muted-foreground" href="#faq">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden px-2 py-2 text-[13px] font-medium transition-opacity hover:opacity-60 sm:inline-flex">Log in</a>
            <a href="#pricing" className="rounded-full bg-foreground px-5 py-3 text-[12px] font-semibold text-background transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]">Try for free</a>
            <details className="relative md:hidden">
              <summary className="cursor-pointer list-none rounded-full border border-border px-3 py-2 text-xs">Menu</summary>
              <nav aria-label="Mobile navigation" className="absolute right-0 top-12 flex min-w-48 flex-col gap-4 rounded-xl border border-border bg-card p-5 text-sm shadow-lg">
                <a href="#platform">Platform</a><a href="#work">For photographers</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <section id="top" className="relative isolate flex min-h-[660px] items-center overflow-hidden bg-secondary sm:min-h-[720px]">
        <img src={heroImage} alt="Photography portfolio website shown beside a portrait photographer" className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center] md:object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/90 to-background/5 md:via-background/75" />
        <div className="mx-auto w-full max-w-[1320px] px-6 pb-20 pt-24 sm:px-10 md:py-28">
          <div className="max-w-[620px]">
            <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">For smart photographers</p>
            <h1 className="font-serif text-[clamp(3.5rem,7.3vw,6.7rem)] font-medium leading-[0.98] tracking-[-0.065em]">Website &amp; client galleries</h1>
            <p className="mt-7 max-w-md text-base leading-7 text-foreground/75 sm:text-lg">Everything you need to present your work beautifully, deliver photos, and grow your business.</p>
            <a href="#pricing" className="mt-9 inline-flex items-center gap-6 rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-background transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]">Try for free <span aria-hidden="true">↗</span></a>
            <p className="mt-4 text-xs text-muted-foreground">Start with a free gallery. No coding required.</p>
          </div>
        </div>
        <a href="#platform" aria-label="Explore the platform" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 rounded-full border border-foreground/30 px-4 py-2 text-[10px] uppercase tracking-[0.18em] md:block">Scroll to explore ↓</a>
      </section>

      <section id="platform" className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-x-8 gap-y-8 px-6 py-12 sm:px-10 md:grid-cols-4 md:py-16">
          {[
            ['01', 'Website', 'A stylish portfolio that helps you attract clients.'],
            ['02', 'Galleries', 'Beautiful delivery for photos and video.'],
            ['03', 'Services', 'Simple tools to help your business grow.'],
            ['04', 'Community', 'Events, inspiration, and other photographers.'],
          ].map(([number, title, description]) => (
            <article key={number} className="border-l border-border pl-4 sm:pl-6">
              <span className="font-mono text-[11px] text-muted-foreground">{number}</span>
              <h2 className="mt-3 font-serif text-xl font-semibold sm:text-2xl">{title}</h2>
              <p className="mt-2 max-w-[220px] text-xs leading-5 text-muted-foreground sm:text-sm">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="grid md:min-h-[620px] md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 md:px-[12%] md:py-24">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">01 / Your website</span>
          <h2 className="mt-6 max-w-lg font-serif text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl">Impressive website. Effortlessly yours.</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">We’ve made it easy to create a stunning website with no coding or design skills. Focus on your creativity—we’ll take care of the rest.</p>
          <ul className="mt-8 grid max-w-lg grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            {['Ready-made page templates', '100+ content blocks', 'A wide choice of fonts and palettes', 'Reviews and inquiries on your site'].map((item) => <li key={item} className="flex gap-3 border-t border-border pt-3"><span className="text-muted-foreground">↗</span>{item}</li>)}
          </ul>
          <a className="mt-9 inline-flex w-fit items-center gap-3 border-b border-foreground pb-2 text-sm font-semibold transition-opacity hover:opacity-60" href="#pricing">Explore plans <span aria-hidden="true">→</span></a>
        </div>
        <div className="relative min-h-[420px] overflow-hidden bg-secondary md:min-h-full">
          <img src={heroImage} alt="A photographer's finished portfolio website and mobile layout" className="absolute inset-0 h-full w-full object-cover object-[70%_center]" loading="lazy" />
        </div>
      </section>

      <section className="grid md:min-h-[620px] md:grid-cols-2">
        <div className="relative order-2 min-h-[420px] overflow-hidden bg-secondary md:order-1 md:min-h-full">
          <img src="https://i.wfolio.com/x/zfNWg0RActCaYvCdP8NS6h3QcKqIOO7I/oVCmpsR2A0_zCBuWQbm7dJYwNQ6ysoqE/u9cYu9EFkOUlqvrhI1aLFDKLkm8vY9jm/LQ4EATmPmKHpREYM4uCf3vp3zOMwV_j3/4JPMlC7eZavfP7wu8o0IIQ.jpg" alt="Photography gallery website displayed on desktop and mobile" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
        </div>
        <div className="order-1 flex flex-col justify-center px-6 py-16 sm:px-12 md:order-2 md:px-[12%] md:py-24">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">02 / Client galleries</span>
          <h2 className="mt-6 max-w-lg font-serif text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl">A beautiful way to deliver your work.</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">Create personal online galleries for every photoshoot. Deliver photos and videos beautifully, impress your clients, and grow your income.</p>
          <ul className="mt-8 grid max-w-lg grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            {['Fast photo and video delivery', 'Secure links and passwords', 'Client photo selection', 'Sales tools for additional income'].map((item) => <li key={item} className="flex gap-3 border-t border-border pt-3"><span className="text-muted-foreground">↗</span>{item}</li>)}
          </ul>
          <a className="mt-9 inline-flex w-fit items-center gap-3 border-b border-foreground pb-2 text-sm font-semibold transition-opacity hover:opacity-60" href="#pricing">See gallery plans <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="bg-secondary px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 grid gap-5 md:grid-cols-2 md:items-end">
            <div><span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">One creative home</span><h2 className="mt-5 max-w-xl font-serif text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">Wfolio. More than a platform.</h2></div>
            <p className="max-w-lg text-sm leading-7 text-muted-foreground md:justify-self-end">From promotion and sales to education, practical tools, and ready-made resources—everything you need to keep creating and growing.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-12">
            {featureCards.map((card) => (
              <article key={card.title} className={`group overflow-hidden rounded-sm bg-card ${card.className}`}>
                <div className="relative aspect-[1.55] overflow-hidden bg-muted"><img src={card.image} alt={card.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" loading="lazy" /></div>
                <div className="p-5 sm:p-7"><h3 className="font-serif text-xl font-semibold tracking-tight">{card.title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{card.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground px-6 py-20 text-background sm:px-10 sm:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-end">
            <div><span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-background/60">Made for photographers</span><h2 className="mt-5 max-w-lg font-serif text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">Everything you need, nothing in your way.</h2></div>
            <p className="max-w-lg text-sm leading-7 text-background/70 md:justify-self-end">A calm, considered workspace for the business behind your images—so your portfolio and client experience feel as thoughtful as your photography.</p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-9 border-t border-background/20 pt-8 sm:grid-cols-4 sm:gap-x-10">
            {benefits.map(([title, description]) => <article key={title} className="max-w-[240px]"><h3 className="text-[11px] font-semibold tracking-[0.13em]">{title}</h3><p className="mt-3 text-xs leading-5 text-background/65">{description}</p></article>)}
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-background/20 pt-8 sm:grid-cols-4">
            {[["10+", 'years helping photographers'], ["14M+", 'galleries created'], ["3B+", 'photos uploaded'], ["155+", 'countries worldwide']].map(([value, label]) => <div key={value}><p className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">{value}</p><p className="mt-2 text-xs text-background/60">{label}</p></div>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">A creative community</span><h2 className="mt-5 font-serif text-4xl font-medium tracking-[-0.045em] sm:text-5xl">The best are with us.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Photographers around the world trust Wfolio to bring their work to life.</p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
            {galleryFaces.map((image, index) => <div key={image} className="aspect-[0.83] overflow-hidden rounded-sm bg-muted"><img src={image} alt={`Photographer portfolio example ${index + 1}`} className="h-full w-full object-cover grayscale transition duration-500 hover:scale-105 hover:grayscale-0" loading="lazy" /></div>)}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-secondary px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Pricing</span><h2 className="mt-5 font-serif text-4xl font-medium tracking-[-0.045em] sm:text-5xl">Room to grow.</h2></div><p className="max-w-md text-sm leading-6 text-muted-foreground">Start with galleries for free, then choose the plan that fits your work.</p></div>
          <div className="grid gap-4 md:grid-cols-3">
            <PlanCard name="Free galleries" price="Free" description="A thoughtful first step for delivering client work." features={['120 GB client galleries', 'Photo and video delivery', 'Client photo selection', 'Free Wfolio address']} />
            <PlanCard name="Galleries" price="from $18.9 / year" description="More space and tools for your growing client list." features={['300 GB, 1 TB, or unlimited', 'Online payments and sales', 'Face recognition', 'Custom domain option']} featured />
            <PlanCard name="Site + galleries" price="from $31.9 / year" description="Your website, portfolio, and client delivery together." features={['Website builder and templates', 'Unlimited website pages', 'Blog and portfolio showcase', 'All gallery features']} />
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">Flexible monthly and annual options are available.</p>
        </div>
      </section>

      <section id="faq" className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div><span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">FAQ</span><h2 className="mt-5 max-w-sm font-serif text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">A few things you might be wondering.</h2><p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">Start simply. Your portfolio and galleries can grow with your photography business.</p></div>
          <div className="border-t border-border">
            {questions.map(([question, answer]) => <details key={question} className="group border-b border-border py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-medium"><span>{question}</span><span className="text-muted-foreground transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-2xl pt-4 pr-8 text-sm leading-6 text-muted-foreground">{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-foreground px-6 py-24 text-background sm:px-10 sm:py-32">
        <img src="https://i.wfolio.com/x/M5WK4BLIgG-qyI8ZOeSuCkq8wa8L1RO1/el2Cn27_lTYb0d7zo24iltXo3Au_bmKO/DwmminVp1S5uLdbvtyDRHx6RHv32rloO/rDDQlucKq9mujSySCP5dqnzlazn56v74/M-gMsQeDvWLpZ-JHvGu7V3vkVB7v5NvS/939n9trdYU_k78MHJ9DfJlqzTRgR_wH7.jpg" alt="Photography book and gallery experience" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35" loading="lazy" />
        <div className="absolute inset-0 -z-10 bg-foreground/65" />
        <div className="mx-auto max-w-[1320px]">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-background/60">Your next chapter</span>
          <h2 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-[1.03] tracking-[-0.055em] sm:text-7xl">Make space for the work you love.</h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-background/70 sm:text-base">Create your website, deliver client galleries, and bring your photography business together in one place.</p>
          <a href="#pricing" className="mt-9 inline-flex items-center gap-6 rounded-full bg-background px-6 py-4 text-sm font-semibold text-foreground transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]">Try Wfolio for free <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer className="bg-foreground px-6 py-8 text-background sm:px-10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><a href="#top" className="font-serif text-xl font-bold tracking-[-0.07em]">wfolio</a><p className="text-xs text-background/60">A website builder and cloud drive for photographers.</p><a className="text-xs transition-opacity hover:opacity-60" href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  )
}

function PlanCard({ name, price, description, features, featured = false }: { name: string; price: string; description: string; features: string[]; featured?: boolean }) {
  return (
    <article className={`flex min-h-[400px] flex-col border border-border p-6 sm:p-8 ${featured ? 'bg-foreground text-background' : 'bg-card text-foreground'}`}>
      <p className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${featured ? 'text-background/65' : 'text-muted-foreground'}`}>{name}</p>
      <h3 className="mt-7 font-serif text-3xl font-medium tracking-tight">{price}</h3>
      <p className={`mt-3 min-h-12 text-sm leading-6 ${featured ? 'text-background/70' : 'text-muted-foreground'}`}>{description}</p>
      <ul className="mt-6 flex-1 space-y-3 border-t border-current/15 pt-6 text-sm">{features.map((feature) => <li key={feature} className="flex gap-3"><span aria-hidden="true">+</span>{feature}</li>)}</ul>
      <a href="#faq" className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${featured ? 'bg-background text-foreground' : 'bg-foreground text-background'}`}>Choose plan <span className="ml-3" aria-hidden="true">→</span></a>
    </article>
  )
}
