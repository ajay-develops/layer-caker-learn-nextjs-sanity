# Sanity and Next.js

This is a [Sanity.io](https://sanity.io) and [Next.js](https://nextjs.org) project created following a Course on [Sanity Learn](https://sanity.io/learn).

## Getting Started

First, run the development server:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- Open [http://localhost:3000/studio](http://localhost:3000/studio) to edit content.

## Notes

1. To render PortableText in the Nextjs front-end we need to

- add the typography plugin in the front-end tsconfig.json
- use the PortableText component from next-sanity.
- Create a ./src/sanity/PortableTextComponents.tsx which contains the components to render against the type of component. Atleast add an image component there for image type.
