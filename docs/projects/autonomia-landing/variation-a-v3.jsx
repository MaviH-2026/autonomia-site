/* global React */
/**
 * Variação A v3.0 — Refactored to use atomic components
 *
 * Improvements over v2:
 *  - Uses <Button> instead of .ds-btn classes (5 variants × 3 sizes × 6 states)
 *  - Uses <Card> for pillars, modules, stats, diag-features (4 variants × 4 tones)
 *  - Uses <Faq> with WAI-ARIA accordion pattern + keyboard nav
 *  - Uses Typography components (Display, Heading, Lede, Body, Eyebrow, Quote, Mono)
 *
 * Lines saved vs v2: ~400 markup lines + 150 CSS-specific lines
 *
 * Requires:
 *   - styles-tokens-v2.css
 *   - components/Button/Button.css + Button.jsx
 *   - components/Card/Card.css + Card.jsx
 *   - components/Faq/Faq.css + Faq.jsx
 *   - components/Typography/Typography.css + Typography.jsx
 */

function VariationA() {
  // Bind atomic components at render time (after all scripts have executed)
  const { Button, Card, Faq, Display, Heading, Lede, Body, Eyebrow, Quote, Mono } = window;

  const PORTRAIT = 'igor.png';
  const STAGE = 'igor-stage.png';

  const modules = [
    { n: '01', title: 'Diagnóstico estratégico', sub: 'Antes do compromisso. Mapeamos o estado atual, alavancas e bloqueios reais do seu negócio.', dur: '60 min · gratuito' },
    { n: '02', title: 'Mentalidade & cenário', sub: 'O ambiente de IA, o que muda na liderança e onde estão as janelas de vantagem composta.', dur: '90 min' },
    { n: '03', title: 'Operação aumentada', sub: 'Como orquestrar times híbridos de humanos e IA. Frameworks de delegação e verificação.', dur: '90 min' },
    { n: '04', title: 'Alavancas de crescimento', sub: 'Onde a IA gera receita, margem ou velocidade no seu modelo. Decisões de capital.', dur: '90 min' },
    { n: '05', title: 'Sistema próprio', sub: 'Seu sistema de liderança aumentada pronto para rodar em ciclos contínuos no negócio.', dur: '90 min' }
  ];

  const pillars = [
    { num: '01 · Tecnologia', title: 'Domínio', emphasis: 'aplicado', body: 'IA como ferramenta operacional, não conceito. Você aprende a usar, integrar e supervisionar agentes que produzem valor real.' },
    { num: '02 · Negócio', title: 'Tradução', emphasis: 'estratégica', body: 'Onde IA gera receita, margem, velocidade ou diferenciação no seu modelo específico. Decisões de capital, não de hype.' },
    { num: '03 · Neurociência', title: 'Performance', emphasis: 'sustentável', body: 'Como o cérebro executivo lidera mudança sem queimar. Foco, decisão e energia em ciclos contínuos.' }
  ];

  const stats = [
    { num: '30+', label: 'anos navegando ondas de transformação tecnológica.', src: 'Trajetória Igor Drews' },
    { num: '1:1', label: 'mentoria executiva, individual, presença total.', src: 'Formato' },
    { num: '5', label: 'encontros 1:1 para construir um sistema próprio de liderança aumentada.', src: 'Programa' },
    { num: '100%', label: 'de garantia se os resultados não acontecerem.', src: 'Compromisso', emphasize: true }
  ];

  const diagFeatures = [
    { title: 'Mapeamento estratégico', body: 'Estado atual do negócio, alavancas e bloqueios reais.' },
    { title: 'Diagnóstico do executivo', body: 'Como você toma decisão hoje e onde a IA encaixa.' },
    { title: 'Plano de travessia', body: 'Se fizer sentido, você sai com o desenho dos cinco encontros.' }
  ];

  const offerBenefits = [
    { strong: 'Diagnóstico estratégico gratuito', text: 'antes do compromisso.' },
    { strong: 'Cinco encontros 1:1', text: 'com Igor Drews · 90 minutos cada.' },
    { strong: 'Material editorial', text: 'e exercícios aplicados ao seu negócio.' },
    { strong: 'Suporte direto', text: 'entre sessões via canal privado.' },
    { strong: 'Sistema próprio', text: 'de liderança aumentada para rodar continuamente.' }
  ];

  const cases = [
    {
      label: 'Case 1',
      accent: 'success',
      title: 'CEO que criou já no 2º encontro, agente para otimizar processo de recrutamento C-level que:',
      results: [
        'reduziu +30 horas mensais do RH',
        'elevou sua percepção de liderança junto ao board',
        'aumentou a qualidade e acertividade das contratações com padrão internacional'
      ]
    },
    {
      label: 'Case 2',
      accent: 'orange',
      title: 'Diretor comercial que estruturou treinamento de vendas através de um agente dedicado que:',
      results: [
        'ganho de escala e agilidade na capacitação e avaliação do time comercial',
        'redução de 80% em custos com treinamentos',
        'aumento na conversão das vendas'
      ]
    },
    {
      label: 'Case 3',
      accent: 'blue',
      title: 'Fundador de Startup que revisou sua estratégia de negócio e produtos:',
      results: [
        'redução de 50% no retrabalho',
        'plano de lançamento de novos produtos revisado e com otimização de 70% do tempo e esforço',
        'estratégia para novas contratações',
        'KPIs revisados e alinhados com todo time com 80% do tempo reduzido'
      ]
    }
  ];

  const clients = [
    'Grupo Carburgo', 'Enviagora', 'Mulebule', 'NEXO',
    'Fleurity', 'Avantto', 'Contábil Born'
  ];

  const faqs = [
    {
      q: 'Para quem é a mentoria?',
      a: 'Executivos e líderes que conduzem operações reais e querem traduzir IA em alavancas para o seu negócio, não em curiosidade. Se você toma decisões que afetam P&L, time ou estratégia, faz sentido.'
    },
    {
      q: 'Como funciona o diagnóstico?',
      a: 'Uma conversa de 30 minutos onde mapeamos seu estado atual, suas alavancas reais e se faz sentido seguirmos juntos. Sem pressão, sem compromisso. Você sai com clareza, mesmo que decida não avançar.'
    },
    {
      q: 'Por que cinco encontros e não um curso longo?',
      a: 'Porque você não precisa de mais conteúdo. Precisa de tradução, foco e implementação. Cinco sessões 1:1 são suficientes para construir um sistema próprio que continua rodando depois.'
    },
    {
      q: 'O que acontece entre os encontros?',
      a: 'Suporte direto via canal privado para destravar decisões em tempo real. Material de apoio editorial e exercícios aplicados ao seu negócio específico.'
    },
    {
      q: 'E a garantia de 100%?',
      a: 'Se ao final dos cinco encontros os resultados combinados no diagnóstico não acontecerem, devolvo 100% do investimento. Risco zero do seu lado.'
    }
  ];

  const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
    </svg>
  );

  const ShieldIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ color: 'var(--color-text-primary)' }}>
      <path d="M9 1l8 3v5c0 4.5-3.5 7.5-8 8-4.5-.5-8-3.5-8-8V4l8-3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M5.5 9l2.5 2.5L13 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );

  return (
    <div className="a-page">
      <a href="#main" className="skip-link">
        Pular para conteúdo principal
      </a>

      {/* TOP BAR */}
      <div className="a-topbar">
        <div className="left">
          <span className="live" role="status">
            <span className="dot" aria-hidden="true"></span>
            Diagnóstico aberto
          </span>
          <Mono tone="on-dark-soft" className="typo-mono--upper">
            Vagas limitadas · Abril 2026
          </Mono>
        </div>
        <div className="right">
          <Mono tone="on-dark-soft" className="typo-mono--upper">
            autonomiadigital.ia.br
          </Mono>
        </div>
      </div>

      {/* NAV */}
      <nav className="a-nav" aria-label="Principal">
        <div className="a-logo">
          <span className="mark" aria-hidden="true">A</span>
          <span className="name">
            AUTONOM<span className="ia">.IA</span>
          </span>
        </div>
        <div className="a-nav-links">
          <a href="#metodo">O método</a>
          <a href="#igor">Igor Drews</a>
          <a href="#jornada">A jornada</a>
          <a href="#diag">Diagnóstico</a>
          <a href="#faq">Dúvidas</a>
        </div>
        <div className="a-nav-actions">
          <Button as="a" href="https://calendar.app.google/EYvGA93kBXE6Tp4t6" target="_blank" rel="noopener noreferrer" variant="primary" size="sm" arrow>
            Agendar diagnóstico
          </Button>
        </div>
      </nav>

      <main id="main">
        {/* HERO */}
        <header className="a-hero">
          <div className="a-hero-left">
            <div className="lockup">
              <Eyebrow tone="secondary">Mentoria executiva · 2026</Eyebrow>
            </div>
            <Display>
              Forme-se como o<br />
              <em>líder orquestrador</em><br />
              da era da IA.
            </Display>
            <Lede>
              Não é um curso. É uma travessia. Cinco encontros 1:1 para você sair capaz de orquestrar times híbridos de humanos e IA, gerando alavancas reais de crescimento no seu negócio.
            </Lede>
            <div className="a-hero-ctas">
              <Button as="a" href="https://calendar.app.google/EYvGA93kBXE6Tp4t6" target="_blank" rel="noopener noreferrer" variant="primary" size="sm" arrow>
                Agendar diagnóstico gratuito
              </Button>
              <Button as="a" href="#metodo" variant="secondary" size="sm" play>
                Ver o método
              </Button>
            </div>
          </div>
          <div className="a-hero-right">
            <img
              src={STAGE}
              alt="Igor Drews em sessão de mentoria executiva"
              className="a-hero-portrait"
            />
            <div className="a-hero-overlay">
              <div className="name">Igor Drews</div>
              <div className="role">Estrategista de IA · Mentor</div>
            </div>
          </div>
        </header>

        {/* TICKER */}
        <div className="a-ticker" aria-hidden="true">
          <div className="a-ticker-track">
            <span>Liderança aumentada</span><span className="sep"></span>
            <span>Times híbridos humano-IA</span><span className="sep"></span>
            <span>Alavancas de crescimento</span><span className="sep"></span>
            <span>Mentoria 1:1</span><span className="sep"></span>
            <span>Garantia de 100%</span><span className="sep"></span>
            <span>Liderança aumentada</span><span className="sep"></span>
            <span>Times híbridos humano-IA</span><span className="sep"></span>
            <span>Alavancas de crescimento</span><span className="sep"></span>
            <span>Mentoria 1:1</span><span className="sep"></span>
            <span>Garantia de 100%</span><span className="sep"></span>
          </div>
        </div>

        {/* PROMISE / 3 PILARES */}
        <section className="a-section a-promise" id="metodo" aria-labelledby="metodo-title">
          <Eyebrow withDash tone="secondary">O método</Eyebrow>
          <div className="a-promise-grid">
            <Heading level={2} id="metodo-title">
              Não é um curso.<br />
              É uma <em>travessia</em>.
            </Heading>
            <Lede>
              A IA não é tendência. É infraestrutura. Líderes que atravessarem essa transformação como protagonistas vão moldar a próxima década dos seus mercados. Os outros vão assistir. A AUTONOM.IA reúne tecnologia, negócio e neurociência para que você seja do primeiro grupo.
            </Lede>
          </div>
          <div className="card-grid card-grid--3 card-grid--divided">
            {pillars.map((p) => (
              <Card
                key={p.num}
                variant="numbered"
                eyebrow={p.num}
                title={<>{p.title} <em>{p.emphasis}</em></>}
                body={p.body}
              />
            ))}
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="a-pullquote" aria-label="Citação destacada">
          <Quote
            attribution="Igor Drews · Estrategista de IA"
            tone="on-dark"
          >
            A tecnologia não é<br />
            a estrela do show.<br />
            Quem <em>conduz</em> é.
          </Quote>
        </section>

        {/* INSTRUTOR */}
        <section className="a-section" id="igor" aria-labelledby="igor-title">
          <Eyebrow withDash tone="secondary">Quem conduz</Eyebrow>
          <Heading level={2} id="igor-title">
            Trinta anos<br />
            dentro das <em>ondas</em>.
          </Heading>
          <div className="a-instructor-grid">
            <div className="a-portrait-card">
              <img
                src={PORTRAIT}
                alt="Retrato de Igor Drews, estrategista de IA e mentor de líderes orquestradores"
                className="img"
              />
              <Mono tone="on-dark-soft" className="meta typo-mono--upper" aria-hidden="true">
                Igor Drews · 2026
              </Mono>
              <span className="accent-bar" aria-hidden="true"></span>
            </div>
            <div className="a-instructor-text">
              <Quote
                showMark
                attribution="— Igor Drews"
                className="typo-quote--inline"
              >
                Há mais de três décadas eu vivo dentro das ondas de transformação. A IA é a maior delas. Meu papel é guiar líderes a permanecerem relevantes, não por medo da obsolescência, mas por entusiasmo diante das novas possibilidades.
              </Quote>
              <Body tone="secondary">
                Sou estrategista na interseção entre inovação, estratégia e comportamento humano. Traduzo disrupções complexas em clareza e resultado. Trabalho com executivos que reconhecem o momento e querem atravessá-lo como protagonistas.
              </Body>
              <Body tone="secondary">
                Conecto pessoas às novas possibilidades da tecnologia de forma humana, criativa e consciente, promovendo relevância, autonomia e performance sustentável em um mundo guiado por inteligência aumentada.
              </Body>
              <div className="a-instructor-meta">
                <div>
                  <div className="signature">Igor Drews</div>
                  <Mono tone="muted" className="role typo-mono--upper">
                    Estrategista de IA · Mentor de Líderes Orquestradores
                  </Mono>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JORNADA */}
        <section className="a-section a-section--full a-journey" id="jornada" aria-labelledby="jornada-title">
          <div className="ds-container">
            <div className="a-journey-header">
              <div>
                <Eyebrow withDash tone="secondary">A jornada</Eyebrow>
                <Heading level={2} id="jornada-title">
                  Cinco encontros.<br />
                  Uma <em>nova operação</em>.
                </Heading>
              </div>
              <Lede>
                Cada encontro é uma estação de travessia. Começamos pelo diagnóstico do executivo e terminamos com um sistema próprio de liderança aumentada, pronto para rodar no seu negócio em ciclos contínuos.
              </Lede>
            </div>
            <div className="card-grid card-grid--5 card-grid--divided" role="list" aria-label="Cinco encontros do programa">
              {modules.map((m) => (
                <Card
                  key={m.n}
                  variant="numbered"
                  tone="surface"
                  eyebrow={m.n}
                  title={m.title}
                  body={m.sub}
                  meta={m.dur}
                  role="listitem"
                />
              ))}
            </div>
          </div>
        </section>

        {/* CASES */}
        <section className="a-section a-cases" aria-labelledby="cases-title">
          <Eyebrow withDash tone="secondary">Resultados reais</Eyebrow>
          <Heading level={2} id="cases-title">
            Três travessias.<br />
            Três <em>resultados</em>.
          </Heading>
          <ul className="card-grid card-grid--3 a-cases-grid" role="list">
            {cases.map((c, i) => (
              <li key={i} role="listitem">
                <article className={`a-case a-case--${c.accent}`}>
                  <div className="a-case__label">{c.label}</div>
                  <p className="a-case__title">{c.title}</p>
                  <ul className="a-case__results">
                    {c.results.map((r, j) => (
                      <li key={j}>{r}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* CLIENTS TICKER */}
        <div className="a-clients-ticker" aria-label="Empresas atendidas">
          <div className="a-clients-track">
            {[...clients, ...clients].map((name, i) => (
              <span key={i} className="a-client-logo">{name}</span>
            ))}
          </div>
        </div>

        {/* DIAGNÓSTICO */}
        <section className="a-diag-wrap" id="diag" aria-labelledby="diag-title">
          <div className="a-diag">
            <div>
              <Eyebrow tone="secondary">Passo zero · gratuito</Eyebrow>
              <Heading level={2} visualSize={2} id="diag-title">
                Comece pelo<br />
                <em>diagnóstico</em>.
              </Heading>
              <Body tone="secondary" style={{ maxWidth: '44ch' }}>
                60 minutos com Igor Drews para mapear seu estado atual, alavancas reais e se faz sentido seguirmos juntos. Sem pressão, sem compromisso. Você sai com clareza mesmo que decida não avançar.
              </Body>
              <Button as="a" href="https://calendar.app.google/EYvGA93kBXE6Tp4t6" target="_blank" rel="noopener noreferrer" variant="primary" size="sm" arrow>
                Agendar agora
              </Button>
            </div>
            <ul className="a-diag-features" role="list">
              {diagFeatures.map((f) => (
                <li key={f.title} role="listitem">
                  <Card
                    variant="feature"
                    icon={<CheckIcon />}
                    title={f.title}
                    body={f.body}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROVA / STATS */}
        <section className="a-proof" aria-labelledby="proof-title">
          <div className="ds-container">
            <Eyebrow withDash tone="secondary">Por que agora</Eyebrow>
            <Heading level={2} id="proof-title">
              A janela é <em>curta</em>.<br />
              A vantagem, <em>composta</em>.
            </Heading>
            <ul className="card-grid card-grid--4" role="list" style={{ marginTop: 'var(--space-12)' }}>
              {stats.map((s, i) => (
                <li key={i} role="listitem">
                  <Card
                    variant="stat"
                    stat={s.emphasize ? <em>{s.num}</em> : s.num}
                    body={s.label}
                    source={s.src}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OFERTA */}
        <section className="a-offer" aria-labelledby="offer-title">
          <Eyebrow withDash tone="secondary">Investimento</Eyebrow>
          <Heading level={2} id="offer-title">
            Uma decisão,<br />
            <em>cinco encontros</em>,<br />
            uma nova era.
          </Heading>
          <div className="a-offer-card">
            <div className="a-offer-left">
              <Heading level={3} visualSize={3}>
                Mentoria <em>executiva</em> AUTONOM.IA
              </Heading>
              <Mono tone="muted" className="a-offer-subtitle typo-mono--upper">
                Programa completo · 1:1 com Igor Drews
              </Mono>
              <ul className="a-offer-list">
                {offerBenefits.map((b, i) => (
                  <li key={i}>
                    <span className="ds-check-pill" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    <Body size="md" tone="secondary">
                      <strong>{b.strong}</strong> {b.text}
                    </Body>
                  </li>
                ))}
              </ul>
            </div>
            <div className="a-offer-right">
              <div>
                <Mono tone="muted" className="a-price-old">
                  <span className="visually-hidden">Preço original: </span>
                  De R$ 8.000
                </Mono>
                <div className="a-price-new">
                  <span className="visually-hidden">Preço com desconto: </span>
                  R$ <em>5.000</em>
                </div>
                <Mono tone="muted" className="a-price-cur">BRL · à vista</Mono>
                <Body size="sm" tone="secondary">
                  Pagamento único. Sem mensalidade, sem assinatura. Acesso integral à mentoria executiva.
                </Body>
              </div>
              <div>
                <Button as="a" href="/checkout" variant="primary" size="sm" block arrow>
                  Quero atravessar
                </Button>
                <div className="a-guarantee">
                  <span className="badge" aria-hidden="true">
                    <ShieldIcon />
                  </span>
                  <Body size="sm" tone="secondary">
                    <strong>Garantia de 100% do valor</strong> caso os resultados combinados no diagnóstico não aconteçam.
                  </Body>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FECHAMENTO */}
        <section className="a-closing" aria-labelledby="closing-title">
          <Eyebrow withDash tone="accent">Próximo passo</Eyebrow>
          <Display tone="on-dark" id="closing-title">
            Pronto para <em>orquestrar</em><br />
            a próxima era?
          </Display>
          <Lede tone="on-dark-soft">
            O diagnóstico é gratuito. A clareza, sua. A travessia, opcional. Comece pelo passo zero.
          </Lede>
          <div className="a-closing-cta">
            <Button as="a" href="https://calendar.app.google/EYvGA93kBXE6Tp4t6" target="_blank" rel="noopener noreferrer" variant="accent" size="sm" arrow>
              Agendar diagnóstico
            </Button>
            <Button as="a" href="#metodo" variant="secondary" size="sm" onDark>
              Ver o método novamente
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="a-faq" id="faq" aria-labelledby="faq-title">
          <Eyebrow withDash tone="secondary">Antes de decidir</Eyebrow>
          <Heading level={2} id="faq-title">
            Perguntas <em>frequentes</em>
          </Heading>
          <Faq
            items={faqs}
            defaultOpen={0}
            headingLevel={3}
            aria-label="Perguntas frequentes sobre a mentoria"
          />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="a-footer" aria-labelledby="footer-brand">
        <div className="a-footer-grid">
          <div>
            <Display as="div" id="footer-brand" className="brand" style={{ fontSize: 'var(--fs-h3)' }}>
              Autonom<em>.ia</em>
            </Display>
            <Body size="sm" tone="on-dark-soft" className="desc">
              Mentoria executiva para líderes que querem atravessar a era da IA como protagonistas, não como espectadores.
            </Body>
          </div>
          <nav aria-labelledby="footer-program">
            <Eyebrow as="h3" tone="on-dark-soft" id="footer-program" className="typo--tone-on-dark-soft">
              Programa
            </Eyebrow>
            <ul>
              <li><a href="#metodo">O método</a></li>
              <li><a href="#jornada">A jornada</a></li>
              <li><a href="#diag">Diagnóstico</a></li>
              <li><a href="#faq">Dúvidas</a></li>
            </ul>
          </nav>
          <nav aria-labelledby="footer-igor">
            <Eyebrow as="h3" tone="on-dark-soft" id="footer-igor" className="typo--tone-on-dark-soft">
              Igor Drews
            </Eyebrow>
            <ul>
              <li><a href="#igor">Sobre</a></li>
              <li><a href="https://www.linkedin.com/in/igordrews/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="/newsletter">Newsletter</a></li>
            </ul>
          </nav>
          <nav aria-labelledby="footer-contact">
            <Eyebrow as="h3" tone="on-dark-soft" id="footer-contact" className="typo--tone-on-dark-soft">
              Contato
            </Eyebrow>
            <ul>
              <li><a href="mailto:igor@autonomiadigital.ia.br">Email</a></li>
              <li><a href="https://wa.me/5551999898118" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="/agenda">Agenda</a></li>
            </ul>
          </nav>
        </div>
        <div className="a-footer-bottom">
          <Mono tone="on-dark-soft" className="typo-mono--upper">
            © 2026 AUTONOM.IA
          </Mono>
          <Mono tone="on-dark-soft" className="typo-mono--upper">
            autonomiadigital.ia.br
          </Mono>
        </div>
      </footer>
    </div>
  );
}

window.VariationA = VariationA;
