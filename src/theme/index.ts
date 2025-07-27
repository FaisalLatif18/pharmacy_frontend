import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#e3f2f9' },
          100: { value: '#c5e4f3' },
          // etc.
        },
      },
      fonts: {
        heading: { value: `'Segoe UI', sans-serif` },
        body: { value: `'Open Sans', sans-serif` },
      },
    },
  },
});
