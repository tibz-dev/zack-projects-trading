import type { CredentialItem } from '../types/content';

// Add credentials only after the client supplies the actual registration/certificate image.
// Example path format: /src/assets/credentials/<document-name>.jpg
export const credentials: readonly CredentialItem[] = [] as const;
