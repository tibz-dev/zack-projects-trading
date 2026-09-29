import type { ProjectItem } from '../types/content';

// Add real client projects only. Do not create sample/fake project entries.
// Expected paths:
// /src/assets/projects/<project-slug>/before.jpg
// /src/assets/projects/<project-slug>/after.jpg
// /src/assets/projects/<project-slug>/gallery-1.jpg
export const projects: readonly ProjectItem[] = [] as const;
