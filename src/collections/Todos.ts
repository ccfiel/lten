import { CollectionConfig } from 'payload/types'
import {
  LinkFeature,
  UploadFeature,
  lexicalEditor
} from '@payloadcms/richtext-lexical'
import { isCreatedBy } from '../access/isCreatedBy'
import { isAdmin } from '../access/isAdmin'

const Todos: CollectionConfig = {
  slug: 'todos',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: isCreatedBy || isAdmin,
    read: isCreatedBy || isAdmin,
    update: isCreatedBy || isAdmin,
  },
  fields: [
    {
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      name: 'dueDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'MM/dd/yyyy',
        },
      },
    },  
    {
      name: 'notes',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          LinkFeature({
            fields: [
              {
                name: 'rel',
                label: 'Rel Attribute',
                type: 'select',
                hasMany: true,
                options: ['noopener', 'noreferrer', 'nofollow'],
                admin: {
                  description:
                    'The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.',
                },
              },
            ],
          }),
          UploadFeature({
            collections: {
              uploads: {
                fields: [
                  {
                    name: 'caption',
                    type: 'richText',
                    editor: lexicalEditor(),
                  },
                ],
              },
            },
          }),
        ]
      })
    }
  ],
}

export default Todos
