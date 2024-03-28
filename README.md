# NOTES TO REVIEWER

1. I'm totally cool with Tanstack Query, but I don't see any usecases here, since I'm using React Server Components. There are no client-side mutations needed, so I've decided not to use it and rely on Next.js server requests and caching.
2. Ideally I would persist displayed range in URL state params (from-to), but it would require extra effort to make it work with resolution changes.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
