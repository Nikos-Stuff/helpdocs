import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      siteName: '',
      ...override.openGraph,
    }
  };
}

// export const baseUrl =
//   process.env.NODE_ENV === 'development'
//     ? new URL('http://localhost:3000')
//     : new URL(`https://${process.env.VERCEL_URL!}`);