import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { buildConfig } from 'payload/config'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import Users from './collections/Users'
import Meetings from './collections/Meetings'
import ScoreCards from './collections/ScoreCards'
import Rocks from './collections/Rocks'
import Headlines from './collections/Headlines'
import Todos from './collections/Todos'
import Issues from './collections/Issues'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  collections: [Users, Meetings, ScoreCards, Rocks, Headlines, Todos, Issues,  {
    slug: 'media',
    fields: [
      {
        name: 'alt',
        type: 'text',
      },
    ],
    upload: true,
  } ],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB, written in bytes
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
