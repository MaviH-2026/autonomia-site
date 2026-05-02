/* global React */
// Variação A v2.0 — WCAG 2.2 AA Compliant
// All 17 a11y issues from audit fixed
// Requires: styles-tokens-v2.css + styles-variation-a-v2.css

function VariationA() {
  const PORTRAIT = 'igor.png';
  const STAGE = 'igor-stage.png';

  const modules = [
    { n: '01', title: 'Diagnóstico estratégico', sub: 'Antes do compromisso. Mapeamos o estado atual, alavancas e bloqueios reais do seu negócio.', dur: '60 min · gratuito' },
    { n: '02', title: 'Mentalidade & cenário', sub: 'O ambiente de IA, o que muda na liderança e onde estão as janelas de vantagem composta.', dur: '90 min' },
    { n: '03', title: 'Operação aumentada', sub: 'Como orquestrar times híbridos de humanos e IA. Frameworks de delegação e verificação.', dur: '90 min' },
    { n: '04', title: 'Alavancas de crescimento', sub: 'Onde a IA gera receita, margem ou velocidade no seu modelo. Decisões de capital.', dur: '90 min' },
    { n: '05', title: 'Sistema próprio', sub: 'Seu sistema de liderança aumentada pronto para rodar em ciclos contínuos no negócio.', dur: '90 min' }
  ];

  const stats = [
    { num: '30+', label: 'anos navegando ondas de transformação tecnológica.', src: 'Trajetória Igor Drews' },
    { num: '1:1', label: 'mentoria executiva, individual, presença total.', src: 'Formato' },
    { num: '5', label: 'encontros 1:1 para construir um sistema próprio de liderança aumentada.', src: 'Programa' },
    { num: '100%', label: 'de garantia se os resultados não acontecerem.', src: 'Compromisso' }
  ];

  // FIX #11: Duplicate FAQ question corrigida (#2 era duplicata)
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

  const [openFaq, setOpenFaq] = React.useState(0);

  // Reusable arrow icon (FIX #5: aria-hidden in all decorative SVGs)
  const ArrowIcon = () => (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );

  const PlayIcon = () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
      <path d="M2 1.5v7l6-3.5z" />
    </svg>
  );

  const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
    </svg>
  );

  // FIX #17: Use currentColor instead of hardcoded #16140C
  const ShieldIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ color: 'var(--color-text-primary)' }}>
      <path d="M9 1l8 3v5c0 4.5-3.5 7.5-8 8-4.5-.5-8-3.5-8-8V4l8-3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M5.5 9l2.5 2.5L13 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );

  return (
    <div className="a-page">
      {/* FIX #2: Skip link for keyboard users (WCAG 2.4.1) */}
      <a href="#main" className="skip-link">
        Pular para conteúdo principal
      </a>

      {/* TOP BAR */}
      <div className="a-topbar">
        <div className="left">
          {/* FIX #9: role="status" on live indicator (WCAG 4.1.3) */}
          <span className="live" role="status">
            <span className="dot" aria-hidden="true"></span>
            Diagnóstico aberto
          </span>
          <span>Vagas limitadas · Abril 2026</span>
        </div>
        <div className="right">
          <span>autonomiadigital.ia.br</span>
        </div>
      </div>

      {/* NAV */}
      <nav className="a-nav" aria-label="Principal">
        <div className="a-logo">
          <span className="mark" aria-hidden="true">A</span>
          <span className="name">
            Autonom<span className="ia">.ia</span>
          </span>
          {/* FIX #15: Empty span removed */}
        </div>
        <div className="a-nav-links">
          <a href="#metodo">O método</a>
          <a href="#igor">Igor Drews</a>
          <a href="#jornada">A jornada</a>
          <a href="#diag">Diagnóstico</a>
          <a href="#faq">Dúvidas</a>
        </div>
        <div className="a-nav-actions">
          {/* FIX #6: Real href instead of "#" */}
          <a href="/login" className="a-nav-login">Já sou aluno</a>
          {/* FIX #10: Removed inline color style */}
          <a href="#diag" className="ds-btn ds-btn--primary">
            Agendar diagnóstico
            <span className="ds-arrow-pill" aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </nav>

      {/* FIX #1: <main> landmark wrapping all content (WCAG 1.3.1) */}
      <main id="main">
        {/* HERO */}
        <header className="a-hero">
          <div className="a-hero-left">
            <div className="lockup">
              <span className="label">Mentoria executiva · 2026</span>
            </div>
            <h1>
              Forme-se como o<br />
              <em>líder orquestrador</em><br />
              da era da IA.
            </h1>
            <p className="lede">
              Não é um curso. É uma travessia. Cinco encontros 1:1 para você sair capaz de orquestrar times híbridos de humanos e IA, gerando alavancas reais de crescimento no seu negócio.
            </p>
            <div className="a-hero-ctas">
              <a href="#diag" className="ds-btn ds-btn--primary">
                Agendar diagnóstico gratuito
                <span className="ds-arrow-pill" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </a>
              <a href="#metodo" className="ds-btn ds-btn--secondary">
                <span className="ds-play-pill" aria-hidden="true">
                  <PlayIcon />
                </span>
                Ver o método
              </a>
            </div>
          </div>
          <div className="a-hero-right">
            {/* FIX #4: <img> with alt instead of background-image (WCAG 1.1.1) */}
            <img
              src={STAGE}
              alt="Igor Drews em sessão de mentoria executiva"
              className="a-hero-portrait"
            />
            <div className="a-hero-overlay">
              <div className="name">Igor Drews</div>
              <div className="role">Estrategista de IA · Mentor</div>
            </div>
            <div className="a-hero-play">
              {/* FIX #12: Trailer button with aria-label */}
              <button
                className="ds-btn ds-btn--secondary"
                aria-label="Assistir trailer da mentoria, duração 2 minutos e 14 segundos"
              >
                <span className="ds-play-pill" aria-hidden="true">
                  <PlayIcon />
                </span>
                Trailer · 2:14
              </button>
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
        {/* FIX #8: aria-labelledby on every section (WCAG 1.3.1) */}
        <section className="a-section a-promise" id="metodo" aria-labelledby="metodo-title">
          <div className="a-section-tag">O método</div>
          <div className="a-promise-grid">
            <h2 className="a-section-title" id="metodo-title">
              Não é um curso.<br />
              É uma <em>travessia</em>.
            </h2>
            <p>
              A IA não é tendência. É infraestrutura. Líderes que atravessarem essa transformação como protagonistas vão moldar a próxima década dos seus mercados. Os outros vão assistir. A AUTONOM.IA reúne tecnologia, business e neurociência para que você seja do primeiro grupo.
            </p>
          </div>
          <div className="a-pillars">
            <div className="a-pillar">
              <span className="num">01 · Tecnologia</span>
              <h3>Domínio <em>aplicado</em></h3>
              <p>IA como ferramenta operacional, não conceito. Você aprende a usar, integrar e supervisionar agentes que produzem valor real.</p>
            </div>
            <div className="a-pillar">
              <span className="num">02 · Business</span>
              <h3>Tradução <em>estratégica</em></h3>
              <p>Onde IA gera receita, margem, velocidade ou diferenciação no seu modelo específico. Decisões de capital, não de hype.</p>
            </div>
            <div className="a-pillar">
              <span className="num">03 · Neurociência</span>
              <h3>Performance <em>sustentável</em></h3>
              <p>Como o cérebro executivo lidera mudança sem queimar. Foco, decisão e energia em ciclos contínuos.</p>
            </div>
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="a-pullquote" aria-label="Citação destacada">
          <blockquote className="a-pullquote-text">
            A tecnologia não é<br />
            a estrela do show.<br />
            Quem <em>conduz</em> é.
          </blockquote>
          <div className="a-pullquote-attr">Igor Drews · Estrategista de IA</div>
        </section>

        {/* INSTRUTOR */}
        <section className="a-section" id="igor" aria-labelledby="igor-title">
          <div className="a-section-tag">Quem conduz</div>
          <h2 className="a-section-title" id="igor-title">
            Trinta anos<br />
            dentro das <em>ondas</em>.
          </h2>
          <div className="a-instructor-grid">
            <div className="a-portrait-card">
              {/* FIX #4: <img> with alt for portrait */}
              <img
                src={PORTRAIT}
                alt="Retrato de Igor Drews, estrategista de IA e mentor de líderes orquestradores"
                className="img"
              />
              <span className="meta" aria-hidden="true">Igor Drews · 2026</span>
              <span className="accent-bar" aria-hidden="true"></span>
            </div>
            <div className="a-instructor-text">
              <blockquote className="quote">
                <span className="quote-mark" aria-hidden="true">"</span>
                Há mais de três décadas eu vivo dentro das ondas de transformação. A IA é a maior delas. Meu papel é guiar líderes a permanecerem relevantes, não por medo da obsolescência, mas por entusiasmo diante das novas possibilidades.
              </blockquote>
              <p>
                Sou estrategista na interseção entre inovação, estratégia e comportamento humano. Traduzo disrupções complexas em clareza e resultado. Trabalho com executivos que reconhecem o momento e querem atravessá-lo como protagonistas.
              </p>
              <p>
                Conecto pessoas às novas possibilidades da tecnologia de forma humana, criativa e consciente, promovendo relevância, autonomia e performance sustentável em um mundo guiado por inteligência aumentada.
              </p>
              <div className="a-instructor-meta">
                <div>
                  <div className="signature">Igor Drews</div>
                  <div className="role">Estrategista de IA · Mentor de Líderes Orquestradores</div>
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
                <div className="a-section-tag">A jornada</div>
                <h2 className="a-section-title" id="jornada-title">
                  Cinco encontros.<br />
                  Uma <em>nova operação</em>.
                </h2>
              </div>
              <p>
                Cada encontro é uma estação de travessia. Começamos pelo diagnóstico do executivo e terminamos com um sistema próprio de liderança aumentada, pronto para rodar no seu negócio em ciclos contínuos.
              </p>
            </div>
            <ol className="a-modules" aria-label="Cinco encontros do programa">
              {modules.map((m) => (
                <li className="a-module" key={m.n}>
                  <span className="num" aria-hidden="true">{m.n}</span>
                  <h3>{m.title}</h3>
                  <p>{m.sub}</p>
                  <div className="duration">
                    <span className="visually-hidden">Duração: </span>
                    {m.dur}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* DIAGNÓSTICO */}
        <section className="a-diag-wrap" id="diag" aria-labelledby="diag-title">
          <div className="a-diag">
            <div>
              <div className="tag">Passo zero · gratuito</div>
              <h2 id="diag-title">
                Comece pelo<br />
                <em>diagnóstico</em>.
              </h2>
              <p>
                60 minutos com Igor Drews para mapear seu estado atual, alavancas reais e se faz sentido seguirmos juntos. Sem pressão, sem compromisso. Você sai com clareza mesmo que decida não avançar.
              </p>
              <a href="/diagnostico" className="ds-btn ds-btn--primary">
                Agendar agora
                <span className="ds-arrow-pill" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </a>
            </div>
            <ul className="a-diag-features">
              <li className="a-diag-feature">
                <span className="ds-check-pill" aria-hidden="true">
                  <CheckIcon />
                </span>
                <div className="text">
                  <strong>Mapeamento estratégico</strong>
                  <p>Estado atual do negócio, alavancas e bloqueios reais.</p>
                </div>
              </li>
              <li className="a-diag-feature">
                <span className="ds-check-pill" aria-hidden="true">
                  <CheckIcon />
                </span>
                <div className="text">
                  <strong>Diagnóstico do executivo</strong>
                  <p>Como você toma decisão hoje e onde a IA encaixa.</p>
                </div>
              </li>
              <li className="a-diag-feature">
                <span className="ds-check-pill" aria-hidden="true">
                  <CheckIcon />
                </span>
                <div className="text">
                  <strong>Plano de travessia</strong>
                  <p>Se fizer sentido, você sai com o desenho dos cinco encontros.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* PROVA / STATS */}
        <section className="a-proof" aria-labelledby="proof-title">
          <div className="ds-container">
            <div className="a-section-tag">Por que agora</div>
            <h2 className="a-section-title" id="proof-title">
              A janela é <em>curta</em>.<br />
              A vantagem, <em>composta</em>.
            </h2>
            <ul className="a-proof-grid">
              {stats.map((s, i) => (
                <li className="a-stat" key={i}>
                  <div className="num">{s.num}</div>
                  <p>{s.label}</p>
                  <div className="src">{s.src}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OFERTA */}
        <section className="a-offer" aria-labelledby="offer-title">
          <div className="a-section-tag">Investimento</div>
          <h2 className="a-section-title" id="offer-title">
            Uma decisão,<br />
            <em>cinco encontros</em>,<br />
            uma nova era.
          </h2>
          <div className="a-offer-card">
            <div className="a-offer-left">
              <h3>Mentoria <em>executiva</em> AUTONOM.IA</h3>
              <div className="a-offer-subtitle">Programa completo · 1:1 com Igor Drews</div>
              <ul className="a-offer-list">
                <li>
                  <span className="ds-check-pill" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span><strong>Diagnóstico estratégico gratuito</strong> antes do compromisso.</span>
                </li>
                <li>
                  <span className="ds-check-pill" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span><strong>Cinco encontros 1:1</strong> com Igor Drews · 90 minutos cada.</span>
                </li>
                <li>
                  <span className="ds-check-pill" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span><strong>Material editorial</strong> e exercícios aplicados ao seu negócio.</span>
                </li>
                <li>
                  <span className="ds-check-pill" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span><strong>Suporte direto</strong> entre sessões via canal privado.</span>
                </li>
                <li>
                  <span className="ds-check-pill" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span><strong>Sistema próprio</strong> de liderança aumentada para rodar continuamente.</span>
                </li>
              </ul>
            </div>
            <div className="a-offer-right">
              <div>
                <div className="a-price-old">
                  <span className="visually-hidden">Preço original: </span>
                  De R$ 8.000
                </div>
                <div className="a-price-new">
                  <span className="visually-hidden">Preço com desconto: </span>
                  R$ <em>5.000</em>
                </div>
                <div className="a-price-cur">BRL · à vista</div>
                <div className="a-price-terms">
                  Pagamento único. Sem mensalidade, sem assinatura. Acesso integral à mentoria executiva.
                </div>
              </div>
              <div>
                <a href="/checkout" className="a-cta-large">
                  <span>Quero atravessar</span>
                  <span className="ds-arrow-pill" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </a>
                <div className="a-guarantee">
                  <span className="badge" aria-hidden="true">
                    <ShieldIcon />
                  </span>
                  <div className="text">
                    <strong>Garantia de 100% do valor</strong> caso os resultados combinados no diagnóstico não aconteçam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FECHAMENTO */}
        <section className="a-closing" aria-labelledby="closing-title">
          <div className="a-closing-tag">Próximo passo</div>
          <h2 id="closing-title">
            Pronto para <em>orquestrar</em><br />
            a próxima era?
          </h2>
          <p>
            O diagnóstico é gratuito. A clareza, sua. A travessia, opcional. Comece pelo passo zero.
          </p>
          <div className="a-closing-cta">
            <a href="/diagnostico" className="ds-btn ds-btn--accent">
              Agendar diagnóstico
              <span className="ds-arrow-pill ds-arrow-pill--on-accent" aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
            <a href="#metodo" className="ds-btn ds-btn--on-dark ds-btn--secondary">
              Ver o método novamente
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="a-faq" id="faq" aria-labelledby="faq-title">
          <div className="a-section-tag">Antes de decidir</div>
          <h2 className="a-section-title" id="faq-title">
            Perguntas <em>frequentes</em>
          </h2>
          <div className="a-faq-list">
            {/* FIX #3: Full ARIA accordion (WCAG 4.1.2) */}
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div className={`a-faq-item ${isOpen ? 'open' : ''}`} key={i}>
                  <h3>
                    <button
                      className="a-faq-q"
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-question-${i}`}
                    >
                      <span>{f.q}</span>
                      <span className="a-faq-plus" aria-hidden="true"></span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className="a-faq-a"
                    hidden={!isOpen}
                  >
                    {f.a}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* STICKY BAR */}
      {/* FIX #13: <aside role="complementary"> for sticky bar */}
      <aside
        className="a-stickybar"
        role="complementary"
        aria-label="Atalho rápido para perguntas frequentes"
      >
        <div className="info">
          <div>
            <span className="price"><em>Dúvidas?</em></span>
          </div>
          <div className="meta">
            <strong>Antes de decidir</strong>
            <br />
            Veja as perguntas mais frequentes sobre a mentoria
          </div>
        </div>
        <a href="#faq" className="ds-btn ds-btn--primary">
          Ir para Dúvidas
          <span className="ds-arrow-pill" aria-hidden="true">
            <ArrowIcon />
          </span>
        </a>
      </aside>

      {/* FOOTER */}
      <footer className="a-footer" aria-labelledby="footer-brand">
        <div className="a-footer-grid">
          <div>
            <div className="brand" id="footer-brand">
              Autonom<em>.ia</em>
            </div>
            <p className="desc">
              Mentoria executiva para líderes que querem atravessar a era da IA como protagonistas, não como espectadores.
            </p>
          </div>
          <nav aria-labelledby="footer-program">
            {/* FIX #7: h5 → h3 (heading hierarchy correct) */}
            <h3 id="footer-program">Programa</h3>
            <ul>
              <li><a href="#metodo">O método</a></li>
              <li><a href="#jornada">A jornada</a></li>
              <li><a href="#diag">Diagnóstico</a></li>
              <li><a href="#faq">Dúvidas</a></li>
            </ul>
          </nav>
          <nav aria-labelledby="footer-igor">
            <h3 id="footer-igor">Igor Drews</h3>
            <ul>
              <li><a href="#igor">Sobre</a></li>
              <li><a href="https://linkedin.com/in/igordrews" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="/newsletter">Newsletter</a></li>
            </ul>
          </nav>
          <nav aria-labelledby="footer-contact">
            <h3 id="footer-contact">Contato</h3>
            <ul>
              <li><a href="mailto:igor@autonomiadigital.ia.br">igor@autonomiadigital.ia.br</a></li>
              <li><a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="/agenda">Agenda</a></li>
            </ul>
          </nav>
        </div>
        <div className="a-footer-bottom">
          <span>© 2026 AUTONOM.IA · autonomiadigital.ia.br</span>
          <span>Brasil</span>
        </div>
      </footer>
    </div>
  );
}

window.VariationA = VariationA;
