/* global React */
/**
 * Sessão Estratégica — High-Conversion Page
 *
 * Based on the Design System of Variation A v3.0
 * Focus: High value, low friction, clear deliverable.
 */

function SessionPage() {
  // Bind atomic components at render time
  const { Button, Card, Faq, Display, Heading, Lede, Body, Eyebrow, Quote, Mono } = window;

  const PORTRAIT = 'igor.png';

  const sessionSteps = [
    { n: '0-15m', title: 'Mergulho Operacional', sub: 'Análise profunda dos gargalos, fricções e processos que hoje consomem tempo e margem no seu negócio.' },
    { n: '15-40m', title: 'Mapeamento de Alavancas', sub: 'Identificação do "Low Hanging Fruit" (ganhos rápidos) versus "Apostas Estratégicas" (vantagem competitiva de longo prazo).' },
    { n: '40-60m', title: 'Roadmap de Execução', sub: 'Construção do caminho crítico: o que fazer primeiro, quem envolver e como medir o sucesso da implementação.' }
  ];

  const deliverables = [
    { title: 'Roadmap de Autonomia Digital', body: 'Um resumo executivo com as prioridades de IA para sua operação.' },
    { title: 'Matriz de Prioridade', body: 'Clareza total sobre o que automatizar, organizar ou delegar agora.' },
    { title: 'Filtro de Decisão', body: 'Um critério claro para avaliar novas ferramentas sem cair no hype.' }
  ];

  const faqs = [
    {
      q: 'Qual a diferença entre o Diagnóstico gratuito e a Sessão Estratégica?',
      a: 'O Diagnóstico (30min) serve para mostrar ONDE a IA entra no seu negócio. A Sessão Estratégica (60min) serve para definir COMO ela será implementada, com um plano de ação concreto e priorizado.'
    },
    {
      q: 'Para quem é indicada esta sessão?',
      a: 'Líderes que já têm clareza de que a IA é inevitável, mas sentem que estão "batendo cabeça" com ferramentas soltas ou que não sabem por onde começar a implementação real.'
    },
    {
      q: 'O que eu recebo ao final da hora?',
      a: 'Você sai com um Roadmap de Execução: a sequência lógica de passos para transformar a IA em vantagem operacional, sem a necessidade de projetos de consultoria longos e caros.'
    },
    {
      q: 'Como funciona o agendamento?',
      a: 'Após o pagamento, você recebe o link do meu calendário para escolher o melhor horário. As sessões são individuais e focadas 100% no seu contexto.'
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
            Sessões Disponíveis
          </span>
          <Mono tone="on-dark-soft" className="typo-mono--upper">
            Vagas limitadas para este mês
          </Mono>
        </div>
        <div className="right">
          <Mono tone="on-dark-soft" className="typo-mono--upper">
            autonomiadigital.ia.br/sessao
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
          <a href="https://autonomiadigital.ia.br">Voltar para Home</a>
        </div>
        <div className="a-nav-actions">
          <Button as="a" href="#pricing" variant="primary" size="sm" arrow>
            Reservar minha sessão estratégica
          </Button>
        </div>
      </nav>

      <main id="main">
        {/* HERO */}
        <header className="a-hero">
          <div className="a-hero-left">
            <div className="lockup">
              <Eyebrow tone="secondary">Imersão Estratégica Individual</Eyebrow>
            </div>
            <Display>
              Do diagnóstico à<br />
              <em>execução concreta</em>.
            </Display>
            <Lede>
              Uma hora de imersão profunda para transformar a clareza inicial em um roadmap de implementação AI First. Ideal para quem já sabe que a IA é o caminho, mas precisa do mapa exato para não desperdiçar tempo e capital.
            </Lede>
            <div className="a-hero-ctas">
              <Button as="a" href="#pricing" variant="primary" size="sm" arrow>
                Quero meu diagnóstico AI-First
              </Button>
              <Button as="a" href="#processo" variant="secondary" size="sm" play>
                Ver o processo
              </Button>
            </div>
          </div>
          <div className="a-hero-right">
            <img
              src={PORTRAIT}
              alt="Igor Drews - Estrategista em AI-First"
              className="a-hero-portrait"
            />
            <div className="a-hero-overlay">
              <div className="name">Igor Drews</div>
              <div className="role">Estrategista em AI-First · Mentor</div>
            </div>
          </div>
        </header>

        {/* GAP SECTION */}
        <section className="a-section a-promise" id="gap" aria-labelledby="gap-title">
          <div className="ds-container">
            <Eyebrow withDash tone="secondary">A lacuna de implementação</Eyebrow>
            <div className="a-promise-grid">
              <Heading level={2} id="gap-title">
                Saber que é importante<br />
                não é o mesmo que <em>saber como fazer</em>.
              </Heading>
            </div>
            <Lede>
              A maioria dos líderes sofre da "ansiedade da ferramenta". Eles sabem que a IA pode mudar o jogo, mas ficam presos em tutoriais de prompts ou ferramentas soltas que não movem o ponteiro do negócio. A distância entre o diagnóstico e o resultado é a <strong>estratégia de implementação</strong>.
            </Lede>
          </div>
        </section>

        {/* PROCESSO */}
        <section className="a-section a-section--full a-journey" id="processo" aria-labelledby="processo-title">
          <div className="ds-container">
            <div className="a-journey-header">
              <div>
                <Eyebrow withDash tone="secondary">A Sessão</Eyebrow>
                <Heading level={2} id="processo-title">
                  60 minutos.<br />
                  Um <em>plano de ação</em>.
                </Heading>
              </div>
              <Lede>
                Não é uma consultoria inflada. É uma hora de foco total no seu contexto para extrair o máximo de valor com o mínimo de fricção.
              </Lede>
            </div>
            <div className="card-grid card-grid--3 card-grid--divided" role="list" aria-label="Passos da sessão estratégica">
              {sessionSteps.map((s) => (
                <Card
                  key={s.n}
                  variant="numbered"
                  tone="surface"
                  eyebrow={s.n}
                  title={s.title}
                  body={s.sub}
                  role="listitem"
                />
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="a-section" id="entregaveis" aria-labelledby="del-title">
          <Eyebrow withDash tone="secondary">O que você leva</Eyebrow>
          <Heading level={2} id="del-title">
            Você não sai com anotações.<br />
            Sai com um <em>ativo de clareza</em>.
          </Heading>
          <div className="card-grid card-grid--3" style={{ marginTop: 'var(--space-12)' }} role="list">
            {deliverables.map((d, i) => (
              <li key={i} role="listitem">
                <Card
                  variant="feature"
                  icon={<CheckIcon />}
                  title={d.title}
                  body={d.body}
                />
              </li>
            ))}
          </div>
        </section>

        {/* PRICING / OFFER */}
        <section className="a-offer" id="pricing" aria-labelledby="pricing-title">
          <Eyebrow withDash tone="secondary">Investimento</Eyebrow>
          <Heading level={2} id="pricing-title">
            Troque a incerteza<br />
            por <em>direção concreta</em>.
          </Heading>
          <div className="a-offer-card">
            <div className="a-offer-left">
              <Heading level={3} visualSize={3}>
                Sessão Estratégica <br />
                AUTONOM.IA
              </Heading>
              <Mono tone="muted" className="a-offer-subtitle typo-mono--upper">
                Imersão Individual · 60 Minutos
              </Mono>
              <ul className="a-offer-list">
                <li>
                  <span className="ds-check-pill" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <Body size="md" tone="secondary">
                    <strong>Análise profunda</strong> de gargalos operacionais.
                  </Body>
                </li>
                <li>
                  <span className="ds-check-pill" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <Body size="md" tone="secondary">
                    <strong>Mapeamento de alavancas</strong> prioritárias (Quick Wins).
                  </Body>
                </li>
                <li>
                  <span className="ds-check-pill" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <Body size="md" tone="secondary">
                    <strong>Roadmap de Implementação</strong> passo a passo.
                  </Body>
                </li>
                <li>
                  <span className="ds-check-pill" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <Body size="md" tone="secondary">
                    <strong>Filtro estratégico</strong> para escolha de ferramentas.
                  </Body>
                </li>
              </ul>
            </div>
            <div className="a-offer-right">
              <div>
                <div className="a-price-new">
                  <span className="visually-hidden">Preço: </span>
                  R$ <em>500</em>
                </div>
                <Mono tone="muted" className="a-price-cur">BRL · Pagamento único</Mono>
                <Body size="sm" tone="secondary">
                  Sessão individual. Foco total no seu negócio. Sem mensalidades.
                </Body>
              </div>
              <div>
                <Button as="a" href="https://calendar.app.google/EYvGA93kBXE6Tp4t6" target="_blank" rel="noopener noreferrer" variant="primary" size="sm" block arrow>
                  Agendar minha sessão
                </Button>
                <div className="a-guarantee">
                  <span className="badge" aria-hidden="true">
                    <ShieldIcon />
                  </span>
                  <Body size="sm" tone="secondary">
                    <strong>Garantia de Valor</strong>: se ao final da sessão você sentir que não teve clareza superior ao investimento, devolvo o valor integral.
                  </Body>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="a-section" id="faq" aria-labelledby="faq-title">
          <Eyebrow withDash tone="secondary">Dúvidas comuns</Eyebrow>
          <Heading level={2} id="faq-title">
            Respostas diretas <br />
            para quem decide.
          </Heading>
          <Faq
            items={faqs}
            defaultOpen={0}
            headingLevel={3}
            aria-label="Dúvidas frequentes sobre a sessão estratégica"
          />
        </section>

        {/* FINAL CTA */}
        <section className="a-closing" aria-labelledby="closing-title">
          <Eyebrow withDash tone="accent">Próximo passo</Eyebrow>
          <Display tone="on-dark" id="closing-title">
            Pare de <em>experimentar</em>.<br />
            Comece a <em>operar</em>.
          </Display>
          <Lede tone="on-dark-soft">
            A diferença entre quem usa a IA e quem domina a IA é a estratégia. Garanta seu horário e transforme sua operação em um sistema AI First.
          </Lede>
          <div className="a-closing-cta" style={{ display: 'flex', justifyContent: 'center' }}>
            <Button as="a" href="https://calendar.app.google/EYvGA93kBXE6Tp4t6" target="_blank" rel="noopener noreferrer" variant="accent" size="sm" arrow style={{ width: 'fit-content' }}>
              Receber meu roadmap estratégico
            </Button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="a-footer" aria-labelledby="footer-brand">
        <div className="a-footer-grid">
          <div>
            <Display as="div" id="footer-brand" className="brand" style={{ fontSize: 'var(--fs-h3)' }}>
              AUTONOM<em>.IA</em>
            </Display>
            <Body size="sm" tone="on-dark-soft" className="desc">
              Sessão Estratégica: uma hora de imersão profunda para transformar clareza em execução.
            </Body>
          </div>
          <nav aria-labelledby="footer-contact">
            <Eyebrow as="h3" tone="on-dark-soft" id="footer-contact" className="typo--tone-on-dark-soft">
              Contato
            </Eyebrow>
            <ul>
              <li><a href="mailto:igor@autonomiadigital.ia.br">Email</a></li>
              <li><a href="https://wa.me/5551999898118" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </nav>
        </div>
        <div className="a-footer-bottom">
          <Mono tone="on-dark-soft" className="typo-mono--upper">
            © 2026 AUTONOM.IA · Sessão Estratégica
          </Mono>
        </div>
      </footer>
    </div>
  );
}

window.SessionPage = SessionPage;
