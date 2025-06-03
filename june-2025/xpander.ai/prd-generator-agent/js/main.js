document.addEventListener('DOMContentLoaded', () => {
  const prdForm = document.getElementById('prd-form');
  const prdOutput = document.getElementById('prd-output');
  const copyBtn = document.getElementById('copy-btn');

  prdForm.addEventListener('submit', handleFormSubmit);
  copyBtn.addEventListener('click', () => {
    copyToClipboard(prdOutput.innerText);
  });
});

function handleFormSubmit(event) {
  event.preventDefault();
  const formData = {
    productName: document.getElementById('product-name').value.trim(),
    targetAudience: document.getElementById('target-audience').value.trim(),
    goals: document.getElementById('goals').value.trim(),
    features: document.getElementById('features').value.trim(),
    successMetrics: document.getElementById('success-metrics').value.trim(),
  };
  generatePRD(formData);
}

function generatePRD(data) {
  const output = document.getElementById('prd-output');
  output.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = data.productName;
  output.appendChild(title);

  const intro = document.createElement('p');
  intro.textContent = `This Product Requirements Document outlines the development and launch of ${data.productName}, a digital SaaS product targeting ${data.targetAudience}.`;
  output.appendChild(intro);

  appendSection(output, 'Goals', data.goals);
  appendSection(output, 'Features', data.features);
  appendSection(output, 'Success Metrics', data.successMetrics);

  output.classList.remove('hidden');
  document.getElementById('copy-btn').classList.remove('hidden');
  output.scrollIntoView({ behavior: 'smooth' });
}

function appendSection(container, headerText, contentText) {
  const header = document.createElement('h3');
  header.textContent = headerText;
  container.appendChild(header);

  const ul = document.createElement('ul');
  const items = contentText ? contentText.split(/\r?\n|,/) .map(item => item.trim()).filter(item => item) : [];
  if (items.length) {
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'N/A';
    ul.appendChild(li);
  }
  container.appendChild(ul);
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => alert('PRD copied to clipboard'))
      .catch(err => {
        console.error('Copy failed', err);
        alert('Failed to copy PRD');
      });
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('PRD copied to clipboard');
  }
}