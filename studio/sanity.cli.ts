import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'q7a5jppu',
    dataset: 'production',
  },
  typegen: {
    enabled: true,
    path: '../src/**/*.{ts,tsx,js,jsx,astro}',
    schema: './schema.json',
    generates: '../sanity.types.ts',
    overloadClientMethods: true,
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
