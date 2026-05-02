/* global React */
// Variação B — Personalidade própria AUTONOM.IA
// Magazine editorial em paper cream, mono+serif, "estações", capa de revista.

function VariationB() {
  const [openFaq, setOpenFaq] = React.useState(0);

  const stations = [
  { id: 'EST · 01', name: <>Diagnóstico <em>Estratégico</em></>, note: 'Mapa do executivo, do negócio e das alavancas latentes.' },
  { id: 'EST · 02', name: <>Arquitetura de <em>Decisão</em></>, note: 'Decidir com IA sem terceirizar o discernimento.' },
  { id: 'EST · 03', name: <>Time <em>Híbrido</em></>, note: 'Orquestração de humanos e agentes de IA.' },
  { id: 'EST · 04', name: <>Alavancas de <em>Crescimento</em></>, note: 'Frentes de impacto direto sobre o P&L.' },
  { id: 'EST · 05', name: <>Liderança <em>Permanente</em></>, note: 'Sistema próprio para se manter à frente.' }];


  const faqs = [
  { q: <>Para quem é a mentoria <em>AUTONOM.IA</em>?</>, a: 'Executivos, fundadores e líderes seniores que reconhecem a IA como inflexão de carreira e querem orquestrar — não apenas usar — essa tecnologia dentro de seus negócios.' },
  { q: <>Como é o <em>diagnóstico</em> gratuito?</>, a: 'Uma sessão sob agendamento, 1:1, em que mapeamos seu contexto, ambição e travas. Ao final você recebe um plano-direção. Sem compromisso de continuidade.' },
  { q: <>Em que <em>formato</em> a mentoria acontece?</>, a: 'Cinco encontros 1:1 de 90 minutos, online, em cadência semanal ou quinzenal. Inclui material de apoio e suporte direto entre sessões.' },
  { q: <>Qual é a <em>garantia</em>?</>, a: 'Devolução integral de 100% do valor caso os resultados acordados no diagnóstico não sejam atingidos. Critérios mensuráveis desde o primeiro encontro.' },
  { q: <>Preciso de <em>conhecimento técnico</em> em IA?</>, a: 'Não. A mentoria parte da estratégia e do comportamento — a tecnologia é tratada como meio. Você sai capaz de orquestrar especialistas e ferramentas com clareza.' }];


  return (
    <div className="b-page">
      <div className="b-topbar">
        <span><span className="live"><span className="dot"></span>EDIÇÃO 2026 · INSCRIÇÕES ABERTAS</span></span>
        <span>AUTONOMIADIGITAL.IA.BR</span>
      </div>

      {/* NAV */}
      <nav className="b-nav" data-screen-label="B · Nav">
        <div className="b-logo">
          AUTONOM<span className="mark">·IA</span>
          <span className="sup">
</span>
        </div>
        <div className="b-nav-links">
          <a href="#doutrina">Doutrina</a>
          <a href="#igor">Igor</a>
          <a href="#jornada">Jornada</a>
          <a href="#oferta">Investimento</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#diag" className="b-nav-cta">Diagnóstico gratuito</a>
      </nav>

      {/* HERO — capa */}
      <header className="b-hero" data-screen-label="B · Hero">
        <div className="b-hero-grid">
          <div>
            <div className="b-issue">
              <span>Vol. I</span>
              <span>Mentoria 1:1</span>
              <span>São Paulo · Online</span>
            </div>
            <h1>
              <span className="line">Líderes</span>
              <span className="line">não <em>aprendem</em></span>
              <span className="line">IA. Eles a</span>
              <span className="line"><span className="acc">orquestram</span>.</span>
            </h1>
            <div className="b-hero-deck">
              Cinco encontros para atravessar a era da inteligência artificial como protagonista — e transformar disrupção em alavanca real de crescimento.
            </div>
            <div className="b-hero-meta-row">
              <div className="item">
                <span className="k">Mentor</span>
                <span className="v"><em>Igor Drews</em></span>
              </div>
              <div className="item">
                <span className="k">Formato</span>
                <span className="v">5 × 90 min</span>
              </div>
              <div className="item">
                <span className="k">Garantia</span>
                <span className="v">100%</span>
              </div>
            </div>
            <div className="b-hero-cta">
              <a href="#diag" className="b-btn-primary">
                Agendar diagnóstico
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" /></svg>
              </a>
              <a href="#doutrina" className="b-btn-ghost">Ler a doutrina</a>
            </div>
          </div>

          <div className="b-hero-portrait">
            <span className="b-portrait-tag">FOLIO 01 · CAPA</span>
            <div className="b-portrait-corner">i.</div>
            <div className="b-portrait-overlay">
              <div className="name">Igor Drews</div>
              <div className="role">Estrategista de IA · Mentor</div>
            </div>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="b-marquee">
        <div className="b-marquee-track">
          <span>Permanecer relevante&nbsp;<span className="star">✦</span>&nbsp;Decidir com IA&nbsp;<span className="star">✦</span>&nbsp;Orquestrar times híbridos&nbsp;<span className="star">✦</span>&nbsp;Crescer no negócio&nbsp;<span className="star">✦</span>&nbsp;Atravessar a transformação&nbsp;<span className="star">✦</span>&nbsp;</span>
          <span aria-hidden="true">Permanecer relevante&nbsp;<span className="star">✦</span>&nbsp;Decidir com IA&nbsp;<span className="star">✦</span>&nbsp;Orquestrar times híbridos&nbsp;<span className="star">✦</span>&nbsp;Crescer no negócio&nbsp;<span className="star">✦</span>&nbsp;Atravessar a transformação&nbsp;<span className="star">✦</span>&nbsp;</span>
        </div>
      </div>

      {/* DOCTRINE / 3 PILARES */}
      <section className="b-section b-doctrine" id="doutrina" data-screen-label="B · Doutrina">
        <div className="b-doctrine-head">
          <div>
            <div className="b-section-tag">A doutrina</div>
            <h2 className="b-section-title">Não é um curso. É uma <span className="acc">travessia</span>.</h2>
          </div>
          <div className="lede">
            A AUTONOM.IA junta tecnologia, business e neurociência em um único trabalho 1:1 — para que o executivo saia capaz de liderar a era da IA, não apenas reagir a ela.
          </div>
        </div>

        <div className="b-pillars">
          <div className="b-pillar">
            <div className="num">i.</div>
            <h3>Tecnologia <em>como meio</em></h3>
            <p>Você não vira engenheiro de prompts. Aprende a usar IA como infraestrutura silenciosa do seu julgamento — não como ferramenta a se admirar.</p>
          </div>
          <div className="b-pillar">
            <div className="num">ii.</div>
            <h3>Business <em>como destino</em></h3>
            <p>Cada decisão é validada contra uma alavanca de negócio. O que não move P&L, time ou posicionamento, não entra na agenda.</p>
          </div>
          <div className="b-pillar">
            <div className="num">iii.</div>
            <h3>Neurociência <em>como base</em></h3>
            <p>Você atravessa essa transformação com clareza, não ansiedade. Trabalhamos atenção, decisão e identidade do líder no trabalho aumentado.</p>
          </div>
        </div>
      </section>

      {/* PULL */}
      <section className="b-pullquote" data-screen-label="B · Pull">
        <div className="b-pullquote-text">
          A pergunta não é se a IA muda seu negócio.<br />
          É <span className="acc">quem</span> conduz essa mudança.
        </div>
        <div className="b-pullquote-attr">— Igor Drews · Estrategista de IA</div>
      </section>

      {/* ABOUT IGOR */}
      <section className="b-section b-about" id="igor" data-screen-label="B · Igor">
        <div className="b-about-grid">
          <div className="b-about-portrait">
            <span className="credit">RETRATO · 2026</span>
            <span className="caption">Igor Drews · São Paulo</span>
          </div>
          <div className="b-about-text">
            <div className="kicker">Entrevista · Sobre o mentor</div>
            <h2>Três décadas antecipando <em>ondas</em>. Esta é a maior delas.</h2>

            <div className="dropcap">
              <p>Há mais de trinta anos eu trabalho na interseção entre inovação, estratégia e comportamento humano — traduzindo disrupções complexas em clareza e resultado para quem decide. A inteligência artificial é, sem comparação, a maior das ondas que já testemunhei. E também a mais mal compreendida.</p>
              <p>O que está em jogo não é dominar uma tecnologia. É reconfigurar a forma como se lidera, decide e cresce. Por isso a AUTONOM.IA não é um curso: é uma travessia 1:1, sob medida, para o executivo que reconhece o momento.</p>
            </div>

            <div className="pull">Inspirar e guiar líderes a permanecerem relevantes, não por receio da obsolescência, mas por entusiasmo diante das novas possibilidades da inteligência aumentada.

            </div>

            <p>Conecto pessoas às novas possibilidades da tecnologia de forma humana, criativa e consciente, promovendo relevância, autonomia e performance sustentável em um mundo guiado por IA.</p>

            <div className="b-about-sign">
              <div className="signature">Igor Drews</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--b-mute)' }}>Estrategista de IA<br />Mentor de Líderes Orquestradores</div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY / ESTAÇÕES */}
      <section className="b-section b-journey" id="jornada" data-screen-label="B · Jornada">
        <div className="b-doctrine-head">
          <div>
            <div className="b-section-tag">A jornada</div>
            <h2 className="b-section-title">Cinco <em>estações</em>. Uma nova operação.</h2>
          </div>
          <div className="lede">
            Cada estação é um encontro 1:1. Começamos pelo diagnóstico do executivo e terminamos com um sistema próprio de liderança aumentada — pronto para rodar em ciclos contínuos.
          </div>
        </div>

        <div className="b-journey-map">
          {stations.map((s, i) => <div className="b-station" key={i}>
              <div className="stid">{s.id}</div>
              <div className="stname">{s.name}</div>
              <div className="stnote">{s.note}</div>
            </div>
          )}
        </div>

        <div className="b-journey-fmt">
          <div className="b-fmt"><div className="k">Formato</div><div className="v"><em>1:1</em> online</div></div>
          <div className="b-fmt"><div className="k">Encontros</div><div className="v">5 × <em>90'</em></div></div>
          <div className="b-fmt"><div className="k">Cadência</div><div className="v">Semanal</div></div>
          <div className="b-fmt"><div className="k">Garantia</div><div className="v"><em>100%</em></div></div>
        </div>
      </section>

      {/* DIAG CTA */}
      <section className="b-diag" id="diag" data-screen-label="B · Diagnóstico">
        <div className="b-diag-grid">
          <div>
            <div className="num">00</div>
            <div className="b-section-tag">Passo zero</div>
            <h2>Antes de qualquer coisa, um <em>diagnóstico gratuito</em>.</h2>
            <p>Uma sessão 1:1 para mapear seu contexto, suas ambições e os pontos onde a IA pode operar como alavanca real. Você sai com clareza, sem compromisso de continuidade.</p>
            <a href="#" className="b-btn-primary">
              Agendar minha sessão
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" /></svg>
            </a>
          </div>
          <div></div>
        </div>
      </section>

      {/* OFFER */}
      <section className="b-section b-offer" id="oferta" data-screen-label="B · Oferta">
        <div className="b-offer-head">
          <div className="b-section-tag" style={{ justifyContent: 'center' }}>Investimento</div>
          <h2 className="b-section-title">Uma decisão. <em>Cinco encontros</em>. Uma nova operação.</h2>
        </div>

        <div className="b-offer-card">
          <div className="b-offer-grid">
            <div className="b-offer-left">
              <span className="stamp">Mentoria Executiva 1:1</span>
              <h3>AUTONOM<em>·IA</em><br />Edição completa</h3>
              <p style={{ fontFamily: 'var(--sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--b-mute)', marginTop: 12 }}>
                Inclui o diagnóstico estratégico gratuito, os cinco encontros 1:1 de 90 minutos e um sistema personalizado de liderança aumentada.
              </p>
              <ul className="b-offer-list">
                <li><span className="check"></span>Diagnóstico estratégico antes do compromisso</li>
                <li><span className="check"></span>5 encontros 1:1 com Igor Drews · 90 min cada</li>
                <li><span className="check"></span>Material de apoio editorial e exercícios práticos</li>
                <li><span className="check"></span>Suporte direto entre sessões via canal privado</li>
                <li><span className="check"></span>Garantia integral: 100% do valor de volta</li>
              </ul>
            </div>
            <div className="b-offer-right">
              <div className="strike">de R$ 8.000</div>
              <div className="price"><em>R$</em>5.000</div>
              <div className="price-sub">à vista · investimento único · sem mensalidade</div>
              <a href="#" className="b-cta-large">
                <span>Quero começar agora</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9h14M10 3l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" /></svg>
              </a>
              <div className="b-guarantee">
                <b>GARANTIA INTEGRAL.</b> Caso os resultados acordados no diagnóstico não sejam atingidos, devolvemos 100% do valor investido.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="b-section" id="faq" data-screen-label="B · FAQ" style={{ paddingTop: 80 }}>
        <div className="b-section-tag">Antes de decidir</div>
        <h2 className="b-section-title">Perguntas <em>frequentes</em></h2>

        <div className="b-faq-list">
          {faqs.map((f, i) =>
          <div className={`b-faq-item ${openFaq === i ? 'open' : ''}`} key={i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
              <div className="qnum">N° {String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className="b-faq-q">{f.q}</div>
                <div className="b-faq-a">{f.a}</div>
              </div>
              <div className="b-faq-plus"></div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="b-footer" data-screen-label="B · Footer">
        <div className="b-footer-hero">
          Pronto para <em>orquestrar</em>?
        </div>
        <div className="b-footer-grid">
          <div className="b-footer-brand">
            <div className="b-logo" style={{ color: 'var(--b-paper)' }}>
              AUTONOM<span className="mark">·IA</span>
              <span className="sup" style={{ color: 'rgba(244,239,230,0.5)' }}>EST. 2026</span>
            </div>
            <p>Mentoria executiva para líderes que vão orquestrar a era da inteligência artificial.</p>
          </div>
          <div>
            <h5>Navegar</h5>
            <ul>
              <li><a href="#doutrina">Doutrina</a></li>
              <li><a href="#igor">Igor</a></li>
              <li><a href="#jornada">Jornada</a></li>
              <li><a href="#oferta">Investimento</a></li>
            </ul>
          </div>
          <div>
            <h5>Contato</h5>
            <ul>
              <li><a href="#">contato@autonomiadigital.ia.br</a></li>
              <li><a href="#">+55 (11) 9 0000-0000</a></li>
            </ul>
          </div>
          <div>
            <h5>Social</h5>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="b-footer-bot">
          <span>© 2026 AUTONOM.IA · Todos os direitos reservados</span>
          <span>autonomiadigital.ia.br</span>
        </div>
      </footer>
    </div>);

}

window.VariationB = VariationB;