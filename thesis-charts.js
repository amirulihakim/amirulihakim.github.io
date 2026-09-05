(function renderThesisCharts() {
  const feedRates = [10,20,30,40,50,60,70,80,90,100];
  const charts = {
    accuracy: {
      unit: '%',
      series: [
        { label: 'Mean', color: '#1268c4', values: [98.0,98.1,98.2,98.2,98.5,98.5,98.6,98.9,99.1,99.4] },
        { label: 'Inner', color: '#45a7d8', values: [97.1,97.2,97.3,97.3,98.2,97.8,97.8,98.4,98.5,99.0] },
        { label: 'Outer', color: '#2f9e72', values: [98.0,98.1,98.2,98.4,98.5,98.4,98.6,98.7,99.2,99.4] },
        { label: 'Straight', color: '#d9912b', values: [98.8,99.0,99.1,98.9,99.0,99.3,99.3,99.4,99.7,99.8] },
      ],
    },
    burr: {
      unit: 'µm',
      series: [
        { label: 'Straight burr', color: '#2f9e72', values: [37.8,33.5,31.3,30.9,30.5,22.7,23.6,21.0,19.7,18.3] },
        { label: 'Outer burr', color: '#cf5b66', values: [102.0,90.7,85.7,73.3,72.0,69.5,77.5,70.0,61.0,58.0] },
        { label: 'Mean burr', color: '#1268c4', values: [69.9,62.1,58.5,52.1,51.3,46.1,50.6,45.5,40.3,38.2] },
      ],
    },
    temperature: {
      unit: '°C',
      series: [{ label: 'Contact temperature', color: '#d9912b', values: [33.4,35.8,42.5,43.6,48.3,49.5,45.5,51.2,65.3,60.1] }],
    },
  };

  const width = 700;
  const height = 300;
  const plot = { left: 54, right: 682, top: 48, bottom: 252 };
  const x = (index) => plot.left + (index / (feedRates.length - 1)) * (plot.right - plot.left);

  function buildChart(config) {
    const values = config.series.flatMap((series) => series.values);
    const low = Math.min(...values);
    const high = Math.max(...values);
    const padding = Math.max((high - low) * .12, config.unit === '%' ? .15 : 1);
    const min = low - padding;
    const max = high + padding;
    const y = (value) => plot.bottom - ((value - min) / (max - min)) * (plot.bottom - plot.top);
    const grid = Array.from({ length: 5 }, (_, index) => {
      const value = min + ((max - min) * index / 4);
      const py = y(value);
      return `<line class="chart-gridline" x1="${plot.left}" y1="${py}" x2="${plot.right}" y2="${py}"/><text x="${plot.left - 8}" y="${py + 3}" text-anchor="end">${value.toFixed(config.unit === '%' ? 1 : 0)}</text>`;
    }).join('');
    const xTicks = feedRates.map((value, index) => `<text x="${x(index)}" y="${plot.bottom + 18}" text-anchor="middle">${value}</text>`).join('');
    const lines = config.series.map((series) => {
      const points = series.values.map((value, index) => `${x(index)},${y(value)}`).join(' ');
      const markers = series.values.map((value, index) => `<circle class="chart-point" cx="${x(index)}" cy="${y(value)}" r="3.2" fill="${series.color}"><title>${series.label}: ${value} ${config.unit} at ${feedRates[index]} mm/min</title></circle>`).join('');
      return `<polyline class="chart-line" points="${points}" stroke="${series.color}"/>${markers}`;
    }).join('');
    const legend = config.series.map((series, index) => `<g transform="translate(${plot.left + index * 145},18)"><line x1="0" y1="0" x2="18" y2="0" stroke="${series.color}" stroke-width="3"/><text x="24" y="3">${series.label}</text></g>`).join('');
    return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Experimental result chart"><g>${legend}</g>${grid}<line class="chart-axis" x1="${plot.left}" y1="${plot.bottom}" x2="${plot.right}" y2="${plot.bottom}"/>${xTicks}${lines}<text x="${(plot.left + plot.right) / 2}" y="${height - 5}" text-anchor="middle">Feed rate (mm/min)</text></svg>`;
  }

  document.querySelectorAll('[data-chart]').forEach((element) => {
    const config = charts[element.dataset.chart];
    if (config) element.innerHTML = buildChart(config);
  });
}());
