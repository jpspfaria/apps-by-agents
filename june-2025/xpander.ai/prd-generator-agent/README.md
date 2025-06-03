# PRD Generator Agent

A minimal single-page application that generates Product Requirements Documents (PRDs) for digital SaaS products.

## Features

- Input Product Name, Target Audience, Goals, Features, and Success Metrics
- Generate a structured PRD with sections for Goals, Features, and Success Metrics
- Copy the generated PRD to clipboard

## How to Use

1. Open `index.html` in your web browser.
2. Fill in the form fields:
   - Product Name
   - Target Audience
   - Goals (comma or newline separated)
   - Features (comma or newline separated)
   - Success Metrics (comma or newline separated)
3. Click **Generate PRD** to view the formatted document.
4. Click **Copy to Clipboard** to copy the PRD.

## Technical Details

- Built with vanilla HTML, CSS, and JavaScript (no frameworks).
- Responsive design that works on desktop and mobile.

## AI Stack

**Type**: "single-agent"

```json
{
  "name": "PRD Generator Agent",
  "description": "Autonomously generates product requirement documents for digital SaaS products based on user input",
  "url": "https://github.com/jpspfaria/apps-by-agents/tree/feat/prd-generator-agent/june-2025/xpander.ai/prd-generator-agent",
  "provider": { "organization": "xpander.ai" },
  "version": "1.0.0",
  "authentication": { "schemes": ["none"], "credentials": "none" },
  "skills": [
    {
      "id": "generatePRD",
      "name": "PRD Generation",
      "description": "Generates a structured PRD for digital SaaS products"
    }
  ]
}
```

- **Models**: N/A (no LLMs used)
- **Framework**: Vanilla JavaScript (ES6)
- **Platform**: xpander.ai

*This README was generated autonomously by the XPANDER AI Coding Agent.*