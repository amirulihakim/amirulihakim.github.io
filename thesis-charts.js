(function renderThesisCharts() {
  'use strict';
  // Journal tables: retain reported means rather than recomputing rounded profiles.
  const feedRates = [10,20,30,40,50,60,70,80,90];
  const series = {
    inner: { name: ['Inner','Dalam'], color: '#45a7d8', shape: 'triangle', values: [97.1,97.2,97.3,97.3,98.2,97.8,97.8,98.4,98.5] },
    outer: { name: ['Outer','Luar'], color: '#2f9e72', shape: 'diamond', values: [98.0,98.1,98.2,98.4,98.5,98.4,98.6,98.7,99.2] },
    straight: { name: ['Straight','Lurus'], color: '#d9912b', shape: 'circle', values: [98.8,99.0,99.1,98.9,99.0,99.3,99.3,99.4,99.7] },
    accuracyMean: { name: ['Mean','Rata-rata'], color: '#1268c4', shape: 'circle', values: [98.0,98.1,98.2,98.2,98.5,98.5,98.6,98.9,99.1] },
    burrStraight: { name: ['Straight','Lurus'], color: '#2f9e72', values: [37.8,33.5,31.3,30.9,30.5,22.7,23.6,21.0,19.7] },
    burrOuter: { name: ['Outer','Luar'], color: '#cf5b66', values: [102.0,90.7,85.7,73.3,72.0,69.5,77.5,70.0,61.0] },
    burrMean: { name: ['Mean','Rata-rata'], color: '#1268c4', values: [69.9,62.1,58.5,52.1,51.3,46.1,50.6,45.5,40.3] },
    ti: { name: ['ΔTi','ΔTi'], color: '#c66d20', shape: 'cross', values: [-2.56,-3.58,-1.27,-0.98,-0.72,-0.95,-1.08,-0.98,-0.95] },
    fe: { name: ['ΔFe','ΔFe'], color: '#1268c4', shape: 'square', values: [1.51,2.90,0.26,0.13,0.09,0.12,0.08,0.18,0.14] },
    al: { name: ['ΔAl','ΔAl'], color: '#6b7280', shape: 'cross', values: [0.73,0.60,0.77,0.61,0.48,0.66,0.72,0.66,0.69] },
    v: { name: ['ΔV','ΔV'], color: '#cf5b66', shape: 'diamond', values: [0.15,-0.06,0.05,0.14,-0.06,0.04,0.23,-0.06,-0.04] },
    cr: { name: ['ΔCr','ΔCr'], color: '#071a38', shape: 'circle', values: [-0.01,0.01,0.04,-0.02,0.11,0.05,-0.05,0.04,0.05] },
    pd: { name: ['ΔPd','ΔPd'], color: '#2f9e72', shape: 'triangle', values: [0.04,0.03,0.03,0.02,0.02,0.02,0.02,0.03,0.01] },
  };
  const configs = {
    accuracy: {
      caption: ['Fig. 3. Dimensional accuracy of I-Plate specimens.','Gbr. 3. Akurasi dimensi spesimen I-Plate.'],
      panels: [
        { label: '(a)', title: ['Profile Dimensional Accuracy','Akurasi Dimensi per Profil'], keys: ['inner','outer','straight'], type: 'line', unit: '%', min: 95, max: 100, step: 1, axis: ['Dimensional Accuracy (%)','Akurasi Dimensi (%)'], kind: 'accuracy' },
        { label: '(b)', title: ['Mean Dimensional Accuracy','Rata-rata Akurasi Dimensi'], keys: ['accuracyMean'], type: 'line', unit: '%', min: 95, max: 100, step: 1, axis: ['Mean Dimensional Accuracy (%)','Rata-rata Akurasi Dimensi (%)'], kind: 'accuracy' },
      ],
    },
    burr: {
      caption: ['Fig. 4. Measured burr height of I-Plate specimens.','Gbr. 4. Tinggi burr terukur pada spesimen I-Plate.'],
      panels: [
        { label: '(a)', title: ['Profile Burr Height','Tinggi Burr per Profil'], keys: ['burrStraight','burrOuter'], type: 'bar', unit: 'µm', min: 0, max: 120, step: 20, axis: ['Burr Height (µm)','Tinggi Burr (µm)'], kind: 'burr' },
        { label: '(b)', title: ['Mean Burr Height','Rata-rata Tinggi Burr'], keys: ['burrMean'], type: 'bar', unit: 'µm', min: 0, max: 120, step: 20, axis: ['Mean Burr Height (µm)','Rata-rata Tinggi Burr (µm)'], kind: 'burr' },
      ],
    },
    composition: {
      caption: ['Fig. 5. Change in elemental composition relative to the raw-material baseline.','Gbr. 5. Perubahan komposisi unsur terhadap baseline bahan awal.'],
      panels: [{ label: '', title: ['Change in Elemental Composition','Perubahan Komposisi Unsur'], keys: ['ti','fe','al','v','cr','pd'], type: 'line', unit: 'pp', min: -4, max: 4, step: 1, axis: ['Change in Elemental Composition','Perubahan Komposisi Unsur'], kind: 'composition', toggle: true }],
    },
  };
  const roots = [...document.querySelectorAll('.thesis-chart[data-chart]')].filter(root => configs[root.dataset.chart]);
  if (!roots.length) return;
  const local = pair => pair[document.documentElement.lang === 'id' ? 1 : 0];
  const escape = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
  const hidden = new Set();
  let observers = [];

  function measuredValue(value, unit) {
    return `${unit === 'pp' && value > 0 ? '+' : ''}${value.toFixed(unit === 'pp' ? 2 : 1)}${unit === '%' ? '' : ' '}${unit}`;
  }
  function seriesName(key, panel) {
    const name = local(series[key].name);
    if (panel.kind === 'accuracy') return local([`${name} Accuracy`,`Akurasi ${name}`]);
    if (panel.kind === 'burr') return local([`${name} Burr`,`Burr ${name}`]);
    return name;
  }
  function marker(shape, x, y, color) {
    const attributes = `class="chart-glyph" fill="${color}" stroke="${color}"`;
    if (shape === 'triangle') return `<path ${attributes} d="M${x} ${y-4.5} l4.5 8 h-9 Z"/>`;
    if (shape === 'diamond') return `<path ${attributes} d="M${x} ${y-4.5} l4.5 4.5 -4.5 4.5 -4.5 -4.5 Z"/>`;
    if (shape === 'square') return `<rect ${attributes} x="${x-3.5}" y="${y-3.5}" width="7" height="7"/>`;
    if (shape === 'cross') return `<path ${attributes} d="M${x-4} ${y} h8 M${x} ${y-4} v8"/>`;
    return `<circle ${attributes} cx="${x}" cy="${y}" r="3.5"/>`;
  }

  function renderPanel(viewport, panel) {
    const width = Math.max(220,Math.round(viewport.clientWidth || 360));
    const height = 310;
    const plot = { left: panel.kind === 'composition' ? 65 : 55, right: width-14, top: 24, bottom: height-54 };
    const y = value => plot.bottom-(value-panel.min)/(panel.max-panel.min)*(plot.bottom-plot.top);
    const stepX = (plot.right-plot.left)/feedRates.length;
    const x = index => panel.type === 'bar' ? plot.left+(index+.5)*stepX : plot.left+8+index/8*(plot.right-plot.left-16);
    const ticks = [];
    for (let value=panel.min; value<=panel.max; value+=panel.step) ticks.push(`<line class="chart-gridline${value === 0 ? ' chart-zero' : ''}" x1="${plot.left}" y1="${y(value)}" x2="${plot.right}" y2="${y(value)}"/><text x="${plot.left-8}" y="${y(value)+4}" text-anchor="end">${value}</text>`);
    const xTicks = feedRates.map((feed,i) => `<text x="${x(i)}" y="${plot.bottom+20}" text-anchor="middle">${feed}</text>`).join('');
    const marks = panel.keys.filter(key => !hidden.has(key)).map((key,seriesIndex) => {
      const item = series[key];
      const line = panel.type === 'line' ? `<polyline class="chart-line" stroke="${item.color}" stroke-dasharray="${seriesIndex%2 ? '4 3' : 'none'}" points="${item.values.map((value,i)=>`${x(i)},${y(value)}`).join(' ')}"/>` : '';
      const points = item.values.map((value,index) => {
        const label = `${feedRates[index]} mm/min · ${seriesName(key,panel)} · ${measuredValue(value,panel.unit)}`;
        const barWidth = Math.min(28,stepX*.7/panel.keys.length);
        const shape = panel.type === 'bar'
          ? `<rect class="chart-glyph" x="${x(index)-barWidth*panel.keys.length/2+seriesIndex*barWidth}" y="${Math.min(y(value),y(0))}" width="${barWidth-1}" height="${Math.abs(y(value)-y(0))}" fill="${item.color}"/>`
          : `<circle class="chart-hit" cx="${x(index)}" cy="${y(value)}" r="9"/>${marker(item.shape,x(index),y(value),item.color)}`;
        return `<g class="chart-mark" tabindex="0" role="img" aria-label="${escape(label)}" data-series="${key}" data-index="${index}" data-feed="${feedRates[index]}" data-value="${value}">${shape}</g>`;
      }).join('');
      return `<g class="chart-series" data-series="${key}">${line}${points}</g>`;
    }).join('');
    const axis = panel.kind === 'composition'
      ? `<text class="chart-axis-label" transform="translate(16 ${(plot.top+plot.bottom)/2}) rotate(-90)" text-anchor="middle"><tspan x="0" dy="0">${escape(local(panel.axis))}</tspan><tspan x="0" dy="14">${local(['(percentage points)','(poin persentase)'])}</tspan></text>`
      : `<text class="chart-axis-label" transform="translate(15 ${(plot.top+plot.bottom)/2}) rotate(-90)" text-anchor="middle">${escape(local(panel.axis))}</text>`;
    viewport.querySelector('svg').outerHTML = `<svg viewBox="0 0 ${width} ${height}" role="group" aria-label="${escape(local(panel.title))}">${ticks.join('')}<line class="chart-axis" x1="${plot.left}" y1="${plot.top}" x2="${plot.left}" y2="${plot.bottom}"/><line class="chart-axis" x1="${plot.left}" y1="${plot.bottom}" x2="${plot.right}" y2="${plot.bottom}"/>${xTicks}${axis}<text class="chart-axis-label" x="${(plot.left+plot.right)/2}" y="${height-9}" text-anchor="middle">Feed Rate (mm/min)</text><text class="chart-panel-label" x="${plot.left+7}" y="${plot.top+16}">${panel.label}</text>${marks}</svg>`;
  }

  function wireTooltip(viewport, panel, tooltip) {
    let active;
    const hide = () => {
      active?.classList.remove('is-active'); active?.removeAttribute('aria-describedby');
      active = null; tooltip.hidden = true;
    };
    const show = mark => {
      if (!mark) return;
      hide(); active = mark;
      const key = mark.dataset.series, value = series[key].values[Number(mark.dataset.index)];
      tooltip.replaceChildren();
      for (const text of [`${mark.dataset.feed} mm/min`,seriesName(key,panel),measuredValue(value,panel.unit)]) {
        const line = document.createElement('span'); line.textContent = text; tooltip.append(line);
      }
      tooltip.hidden = false;
      mark.classList.add('is-active'); mark.setAttribute('aria-describedby',tooltip.id);
      const bounds = viewport.getBoundingClientRect(), target = mark.getBoundingClientRect();
      const maxLeft = Math.max(8,viewport.clientWidth-tooltip.offsetWidth-8);
      const left = Math.min(maxLeft,Math.max(8,target.left-bounds.left+target.width/2-tooltip.offsetWidth/2));
      const above = target.top-bounds.top-tooltip.offsetHeight-10;
      const top = Math.max(8,Math.min(viewport.clientHeight-tooltip.offsetHeight-8,above>=8?above:target.bottom-bounds.top+10));
      tooltip.style.left = `${left}px`; tooltip.style.top = `${top}px`;
    };
    const targetMark = event => event.target.closest?.('.chart-mark');
    viewport.addEventListener('pointerover',event=>show(targetMark(event)));
    viewport.addEventListener('pointerout',event=>{
      const mark=targetMark(event);
      if(mark && !mark.contains(event.relatedTarget) && document.activeElement!==mark) hide();
    });
    viewport.addEventListener('pointerleave',()=>{ if (!viewport.contains(document.activeElement)) hide(); });
    viewport.addEventListener('pointerdown',event=>{ const mark=targetMark(event); if(mark){mark.focus({preventScroll:true});show(mark);} });
    viewport.addEventListener('focusin',event=>show(targetMark(event)));
    viewport.addEventListener('focusout',hide);
    viewport.addEventListener('keydown',event=>{
      if(event.key==='Escape') hide();
      const mark=targetMark(event);
      if(mark && ['ArrowLeft','ArrowRight'].includes(event.key)) {
        event.preventDefault();
        const index=Math.max(0,Math.min(8,Number(mark.dataset.index)+(event.key==='ArrowRight'?1:-1)));
        viewport.querySelector(`.chart-mark[data-series="${mark.dataset.series}"][data-index="${index}"]`)?.focus({preventScroll:true});
      }
    });
    return hide;
  }

  function renderAll() {
    observers.forEach(observer=>observer.disconnect()); observers=[];
    document.querySelectorAll('[data-thesis-en][data-thesis-id]').forEach(element=>{
      const value=document.documentElement.lang==='id'?element.dataset.thesisId:element.dataset.thesisEn;
      if(element.dataset.thesisAttribute) element.setAttribute(element.dataset.thesisAttribute,value);
      else element.textContent=value;
    });
    roots.forEach((root,rootIndex)=>{
      const config=configs[root.dataset.chart];
      root.setAttribute('aria-label',local(config.caption));
      root.innerHTML=`<figure class="chart-figure"><div class="chart-panels${config.panels.length===1?' chart-panels-single':''}"></div><figcaption>${escape(local(config.caption))}</figcaption></figure>`;
      config.panels.forEach((panel,panelIndex)=>{
        const section=document.createElement('div'); section.className='chart-panel';
        section.innerHTML=`<h4>${escape(local(panel.title))}</h4><div class="chart-legend" aria-label="${local(['Series legend','Legenda seri'])}"></div><div class="chart-viewport"><svg></svg><div class="chart-tooltip" id="chart-tip-${rootIndex}-${panelIndex}" role="tooltip" hidden></div></div>`;
        root.querySelector('.chart-panels').append(section);
        const legend=section.querySelector('.chart-legend'), viewport=section.querySelector('.chart-viewport');
        const hideTooltip=wireTooltip(viewport,panel,section.querySelector('.chart-tooltip'));
        panel.keys.forEach(key=>{
          const item=series[key], entry=document.createElement(panel.toggle?'button':'span');
          entry.className='chart-legend-item'; entry.style.setProperty('--series-color',item.color);
          entry.innerHTML=`<span class="chart-swatch" aria-hidden="true"></span>${escape(local(item.name))}`;
          if(panel.toggle){
            entry.type='button'; entry.setAttribute('aria-pressed',String(!hidden.has(key)));
            entry.setAttribute('aria-label',`${local(['Toggle series','Tampilkan/sembunyikan seri'])} ${local(item.name)}`);
            entry.addEventListener('click',()=>{if(hidden.has(key))hidden.delete(key);else hidden.add(key);entry.setAttribute('aria-pressed',String(!hidden.has(key)));hideTooltip();renderPanel(viewport,panel);});
          }
          legend.append(entry);
        });
        if(panel.toggle){const hint=document.createElement('p');hint.className='chart-legend-hint';hint.textContent=local(['Select a legend label to hide or show a series.','Pilih label legenda untuk menyembunyikan atau menampilkan seri.']);legend.after(hint);}
        renderPanel(viewport,panel);
        if(typeof ResizeObserver!=='undefined'){
          let lastWidth=viewport.clientWidth;
          const observer=new ResizeObserver(()=>{if(viewport.clientWidth!==lastWidth){lastWidth=viewport.clientWidth;hideTooltip();renderPanel(viewport,panel);}});
          observer.observe(viewport);observers.push(observer);
        }
      });
    });
  }
  renderAll();
  new MutationObserver(renderAll).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
}());
