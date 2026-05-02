/* global React */
// Variação A — Fiel ao MasterClass Certificates DS
// Bege/creme + acento laranja-neon, tipografia editorial, pills com seta

function VariationA() {
  const PORTRAIT = 'igor.png';
  const STAGE = 'igor-stage.png';

  const modules = [
  { n: '01', title: 'Diagnóstico estratégico', sub: 'Antes do compromisso. Mapeamos o estado atual, alavancas e bloqueios reais do seu negócio.', dur: '60 min · gratuito' },
  { n: '02', title: 'Mentalidade & cenário', sub: 'O ambiente de IA, o que muda na liderança e onde estão as janelas de vantagem composta.', dur: '90 min' },
  { n: '03', title: 'Operação aumentada', sub: 'Como orquestrar times híbridos de humanos e IA. Frameworks de delegação e verificação.', dur: '90 min' },
  { n: '04', title: 'Alavancas de crescimento', sub: 'Onde a IA gera receita, margem ou velocidade no seu modelo. Decisões de capital.', dur: '90 min' },
  { n: '05', title: 'Sistema próprio', sub: 'Seu sistema de liderança aumentada pronto para rodar em ciclos contínuos no negócio.', dur: '90 min' }];


  const stats = [
  { num: '30+', label: 'anos navegando ondas de transformação tecnológica.', src: 'Trajetória Igor Drews' },
  { num: '1:1', label: 'mentoria executiva, individual, presença total.', src: 'Formato' },
  { num: '5', label: 'anos navegando ondas de transformação tecnológica.', src: 'Programa' },
  { num: '100%', label: 'de garantia se os resultados não acontecerem.', src: 'Compromisso' }];


  const faqs = [
  { q: 'Para quem é a mentoria?', a: 'Executivos e líderes que conduzem operações reais e querem traduzir IA em alavancas para o seu negócio, não em curiosidade. Se você toma decisões que afetam P&L, time ou estratégia, faz sentido.' },
  { q: 'Para quem é a mentoria?', a: 'Uma conversa de 30 minutos onde mapeamos seu estado atual, suas alavancas reais e se faz sentido seguirmos juntos. Sem pressão, sem compromisso. Você sai com clareza, mesmo que decida não avançar.' },
  { q: 'Por que cinco encontros e não um curso longo?', a: 'Porque você não precisa de mais conteúdo. Precisa de tradução, foco e implementação. Cinco sessões 1:1 são suficientes para construir um sistema próprio que continua rodando depois.' },
  { q: 'O que acontece entre os encontros?', a: 'Suporte direto via canal privado para destravar decisões em tempo real. Material de apoio editorial e exercícios aplicados ao seu negócio específico.' },
  { q: 'E a garantia de 100%?', a: 'Se ao final dos cinco encontros os resultados combinados no diagnóstico não acontecerem, devolvo 100% do investimento. Risco zero do seu lado.' }];


  const [openFaq, setOpenFaq] = React.useState(0);

  return (
    <div className="a-page">
      {/* TOP BAR */}
      <div className="a-topbar">
        <div className="left">
          <span className="live"><span className="dot"></span>Diagnóstico aberto</span>
          <span>Vagas limitadas · Abril 2026</span>
        </div>
        <div className="right">
          <span>autonomiadigital.ia.br</span>
        </div>
      </div>

      {/* NAV */}
      <nav className="a-nav" data-screen-label="A · Nav">
        <div className="a-logo">
          <span className="mark">A</span>
          <span className="name">Autonom<span className="ia">.ia</span></span>
          <span className="sub">
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
          <a href="#" className="a-nav-login">Já sou aluno</a>
          <a href="#diag" className="ds-btn ds-btn--primary" style={{ color: 'rgb(236, 235, 231)' }}>
            Agendar diagnóstico
            <span className="ds-arrow-pill"><svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" /></svg></span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="a-hero" data-screen-label="A · Hero">
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
            <a href="#diag" className="ds-btn ds-btn--primary" style={{ color: 'rgb(249, 249, 249)' }}>
              Agendar diagnóstico gratuito
              <span className="ds-arrow-pill"><svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" /></svg></span>
            </a>
            <a href="#metodo" className="ds-btn ds-btn--secondary">
              <span className="ds-play-pill"><svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M2 1.5v7l6-3.5z" /></svg></span>
              Ver o método
            </a>
          </div>
        </div>
        <div className="a-hero-right">
          <div className="a-hero-portrait" style={{ backgroundImage: `url(${STAGE})` }}></div>
          <div className="a-hero-overlay">
            <div className="name">Igor Drews</div>
            <div className="role">Estrategista de IA · Mentor</div>
          </div>
          <div className="a-hero-play">
            <button className="ds-btn ds-btn--secondary" style={{ padding: '14px 22px' }}>
              <span className="ds-play-pill"><svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M2 1.5v7l6-3.5z" /></svg></span>
              Trailer · 2:14
            </button>
          </div>
        </div>
      </header>

      {/* TICKER */}
      <div className="a-ticker">
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
      <section className="a-section a-promise" id="metodo" data-screen-label="A · Método">
        <div className="a-section-tag">O método</div>
        <div className="a-promise-grid">
          <h2 className="a-section-title">
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
      <section className="a-pullquote" data-screen-label="A · Quote">
        <div className="a-pullquote-text">
          A tecnologia não é<br />
          a estrela do show.<br />
          Quem <em>conduz</em> é.
        </div>
        <div className="a-pullquote-attr">Igor Drews · Estrategista de IA</div>
      </section>

      {/* INSTRUTOR */}
      <section className="a-section" id="igor" data-screen-label="A · Igor">
        <div className="a-section-tag">Quem conduz</div>
        <h2 className="a-section-title">
          Trinta anos<br />
          dentro das <em>ondas</em>.
        </h2>
        <div className="a-instructor-grid">
          <div className="a-portrait-card">
            <div className="img" style={{ backgroundImage: `url(${PORTRAIT})` }}></div>
            <span className="meta">Igor Drews · 2026</span>
            <span className="accent-bar"></span>
          </div>
          <div className="a-instructor-text">
            <div className="quote">
              <span className="quote-mark">"</span>
              Há mais de três décadas eu vivo dentro das ondas de transformação. A IA é a maior delas. Meu papel é guiar líderes a permanecerem relevantes, não por medo da obsolescência, mas por entusiasmo diante das novas possibilidades.
            </div>
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
      <section className="a-section a-section--full a-journey" id="jornada" data-screen-label="A · Jornada">
        <div className="ds-container">
          <div className="a-journey-header">
            <div>
              <div className="a-section-tag">A jornada</div>
              <h2 className="a-section-title">
                Cinco encontros.<br />
                Uma <em>nova operação</em>.
              </h2>
            </div>
            <p>
              Cada encontro é uma estação de travessia. Começamos pelo diagnóstico do executivo e terminamos com um sistema próprio de liderança aumentada, pronto para rodar no seu negócio em ciclos contínuos.
            </p>
          </div>
          <div className="a-modules">
            {modules.map((m, i) => <div className="a-module" key={i}>
                <span className="num">{m.n}</span>
                <h4>{m.title}</h4>
                <p>{m.sub}</p>
                <div className="duration">{m.dur}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO */}
      <div className="a-diag-wrap" id="diag" data-screen-label="A · Diagnóstico">
        <div className="a-diag">
          <div>
            <div className="tag">Passo zero · gratuito</div>
            <h2>
              Comece pelo<br />
              <em>diagnóstico</em>.
            </h2>
            <p>60 minutos com Igor Drews para mapear seu estado atual, alavancas reais e se faz sentido seguirmos juntos. Sem pressão, sem compromisso. Você sai com clareza mesmo que decida não avançar.

            </p>
            <a href="#" className="ds-btn ds-btn--primary" style={{ color: "rgb(250, 250, 247)" }}>
              Agendar agora
              <span className="ds-arrow-pill"><svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" /></svg></span>
            </a>
          </div>
          <div className="a-diag-features">
            <div className="a-diag-feature">
              <span className="ds-check-pill"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" /></svg></span>
              <div className="text"><strong>Mapeamento estratégico</strong><p>Estado atual do negócio, alavancas e bloqueios reais.</p></div>
            </div>
            <div className="a-diag-feature">
              <span className="ds-check-pill"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" /></svg></span>
              <div className="text"><strong>Diagnóstico do executivo</strong><p>Como você toma decisão hoje e onde a IA encaixa.</p></div>
            </div>
            <div className="a-diag-feature">
              <span className="ds-check-pill"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" /></svg></span>
              <div className="text"><strong>Plano de travessia</strong><p>Se fizer sentido, você sai com o desenho dos cinco encontros.</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* PROVA */}
      <section className="a-proof" data-screen-label="A · Prova">
        <div className="ds-container">
          <div className="a-section-tag">Por que agora</div>
          <h2 className="a-section-title">
            A janela é <em>curta</em>.<br />
            A vantagem, <em>composta</em>.
          </h2>
          <div className="a-proof-grid">
            {stats.map((s, i) =>
            <div className="a-stat" key={i}>
                <div className="num">{s.num}</div>
                <p>{s.label}</p>
                <div className="src">{s.src}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="a-offer" data-screen-label="A · Oferta">
        <div className="a-section-tag">Investimento</div>
        <h2 className="a-section-title">
          Uma decisão,<br />
          <em>cinco encontros</em>,<br />
          uma nova era.
        </h2>
        <div className="a-offer-card">
          <div className="a-offer-left">
            <h3>Mentoria <em>executiva</em> AUTONOM.IA</h3>
            <div className="a-offer-subtitle">Programa completo · 1:1 com Igor Drews</div>
            <ul className="a-offer-list">
              <li><span className="ds-check-pill"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" /></svg></span><span><strong>Diagnóstico estratégico gratuito</strong> antes do compromisso.</span></li>
              <li><span className="ds-check-pill"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" /></svg></span><span><strong>Cinco encontros 1:1</strong> com Igor Drews · 90 minutos cada.</span></li>
              <li><span className="ds-check-pill"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" /></svg></span><span><strong>Material editorial</strong> e exercícios aplicados ao seu negócio.</span></li>
              <li><span className="ds-check-pill"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" /></svg></span><span><strong>Suporte direto</strong> entre sessões via canal privado.</span></li>
              <li><span className="ds-check-pill"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" /></svg></span><span><strong>Sistema próprio</strong> de liderança aumentada para rodar continuamente.</span></li>
            </ul>
          </div>
          <div className="a-offer-right">
            <div>
              <div className="a-price-old">De R$ 8.000</div>
              <div className="a-price-new">R$ <em>5.000</em></div>
              <div className="a-price-cur">BRL · à vista</div>
              <div className="a-price-terms">
                Pagamento único. Sem mensalidade, sem assinatura. Acesso integral à mentoria executiva.
              </div>
            </div>
            <div>
              <a href="#" className="a-cta-large">
                <span>Quero atravessar</span>
                <span className="ds-arrow-pill"><svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" /></svg></span>
              </a>
              <div className="a-guarantee">
                <span className="badge"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1l8 3v5c0 4.5-3.5 7.5-8 8-4.5-.5-8-3.5-8-8V4l8-3z" stroke="#16140C" strokeWidth="1.5" fill="none" /><path d="M5.5 9l2.5 2.5L13 6.5" stroke="#16140C" strokeWidth="1.5" strokeLinecap="square" /></svg></span>
                <div className="text">
                  <strong>Garantia de 100% do valor</strong> caso os resultados combinados no diagnóstico não aconteçam.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="a-closing" data-screen-label="A · Fechamento">
        <div className="a-closing-tag">Próximo passo</div>
        <h2>
          Pronto para <em>orquestrar</em><br />
          a próxima era?
        </h2>
        <p>
          O diagnóstico é gratuito. A clareza, sua. A travessia, opcional. Comece pelo passo zero.
        </p>
        <div className="a-closing-cta">
          <a href="#" className="ds-btn ds-btn--accent">
            Agendar diagnóstico
            <span className="ds-arrow-pill" style={{ background: '#16140C', color: '#FF5C00' }}><svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" /></svg></span>
          </a>
          <a href="#metodo" className="ds-btn ds-btn--on-dark ds-btn--secondary">
            Ver o método novamente
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="a-faq" id="faq" data-screen-label="A · FAQ">
        <div className="a-section-tag">Antes de decidir</div>
        <h2 className="a-section-title">Perguntas <em>frequentes</em></h2>
        <div className="a-faq-list">
          {faqs.map((f, i) =>
          <div className={`a-faq-item ${openFaq === i ? 'open' : ''}`} key={i}>
              <button className="a-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="a-faq-plus"></span>
              </button>
              {openFaq === i && <div className="a-faq-a">{f.a}</div>}
            </div>
          )}
        </div>
      </section>

      {/* STICKY BAR */}
      <div className="a-stickybar">
        <div className="info">
          <div>
            <span className="price"><em>Dúvidas?</em></span>
          </div>
          <div className="meta">
            <strong>Antes de decidir</strong><br />
            Veja as perguntas mais frequentes sobre a mentoria
          </div>
        </div>
        <a href="#faq" className="ds-btn ds-btn--primary">
          Ir para Dúvidas
          <span className="ds-arrow-pill"><svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" /></svg></span>
        </a>
      </div>

      {/* FOOTER */}
      <footer className="a-footer" data-screen-label="A · Footer">
        <div className="a-footer-grid">
          <div>
            <div className="brand">Autonom<em>.ia</em></div>
            <p className="desc">
              Mentoria executiva para líderes que querem atravessar a era da IA como protagonistas, não como espectadores.
            </p>
          </div>
          <div>
            <h5>Programa</h5>
            <ul>
              <li><a href="#metodo">O método</a></li>
              <li><a href="#jornada">A jornada</a></li>
              <li><a href="#diag">Diagnóstico</a></li>
              <li><a href="#faq">Dúvidas</a></li>
            </ul>
          </div>
          <div>
            <h5>Igor Drews</h5>
            <ul>
              <li><a href="#igor">Sobre</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
          <div>
            <h5>Contato</h5>
            <ul>
              <li><a href="mailto:igor@autonomiadigital.ia.br">igor@autonomiadigital.ia.br</a></li>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="#">Agenda</a></li>
            </ul>
          </div>
        </div>
        <div className="a-footer-bottom">
          <span>© 2026 AUTONOM.IA · autonomiadigital.ia.br</span>
          <span>Brasil</span>
        </div>
      </footer>
    </div>);

}

window.VariationA = VariationA;