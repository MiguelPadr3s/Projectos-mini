// Pareto chart example with Canvas API
const data = [
  { label: 'A', value: 60 },
  { label: 'B', value: 25 },
  { label: 'C', value: 15 },
  { label: 'D', value: 10 },
  { label: 'E', value: 5 }
];

// Sort data descending
const sorted = [...data].sort((a, b) => b.value - a.value);
const total = sorted.reduce((sum, d) => sum + d.value, 0);
let cumulative = 0;
const cumulativePercent = sorted.map(d => {
  cumulative += d.value;
  return Math.round((cumulative / total) * 100);
});

function drawParetoChart(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  // Chart dimensions
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);

  // Bar settings
  const barWidth = 40;
  const barGap = 10;
  const chartHeight = height - 60;
  const leftMargin = 40;
  const bottomMargin = 40;

  // Draw bars, values, and labels
  sorted.forEach((d, i) => {
    const x = leftMargin + i * (barWidth + barGap);
    const barHeight = (d.value / total) * chartHeight;
    const y = height - bottomMargin - barHeight;
    // Bar
    ctx.fillStyle = '#6c63ff';
    ctx.fillRect(x, y, barWidth, barHeight);
    // Value under bar (above label, moved higher)
    ctx.fillStyle = '#222';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(d.value, x + barWidth / 2, height - bottomMargin - 8);
    // Label below value
    ctx.fillStyle = '#333';
    ctx.font = '14px Arial';
    ctx.fillText(d.label, x + barWidth / 2, height - bottomMargin + 14);
  });

  // Draw cumulative line
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 2;
  ctx.beginPath();
  cumulativePercent.forEach((p, i) => {
    const x = leftMargin + i * (barWidth + barGap) + barWidth / 2;
    const y = height - bottomMargin - (p / 100) * chartHeight;
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();

  // Draw dots and percentage labels
  cumulativePercent.forEach((p, i) => {
    const x = leftMargin + i * (barWidth + barGap) + barWidth / 2;
    const y = height - bottomMargin - (p / 100) * chartHeight;
    // Dot
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    // Percentage label
    ctx.font = '12px Arial';
    ctx.fillStyle = 'red';
    ctx.textAlign = 'center';
    ctx.fillText(p + '%', x, y - 12);
  });
}

window.addEventListener('DOMContentLoaded', function() {
  drawParetoChart('Paretochart');
});
