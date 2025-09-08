# 🐈 Mistral AI Test

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) that integrates with Mistral AI for chat functionality.

## Environment Setup

Before running the project, you need to set up the required environment variables. Create a `.env` file in the root directory and add the following:

```bash
# Mistral AI Configuration
MISTRAL_AI_API_KEY=your_mistral_api_key_here
MISTRAL_AI_MODEL=mistral-small-2503 # You can choose another model, here is an example
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Required Environment Variables

- `MISTRAL_AI_API_KEY`: Your Mistral AI API key (required)
- `MISTRAL_AI_MODEL`: The Mistral AI model to use (optional, defaults to "mistral-small-2503")
- `NEXT_PUBLIC_API_URL`: The API url

To get your Mistral AI API key, visit [Mistral AI Console](https://console.mistral.ai/) and create an account.

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Building for Production

To create a production build:

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```

The build process will:
1. Compile and optimize your application
2. Generate static assets
3. Create a production-ready build in the `.next` folder
