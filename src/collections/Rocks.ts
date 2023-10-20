import { CollectionConfig } from 'payload/types'
import {
  LinkFeature,
  UploadFeature,
  lexicalEditor
} from '@payloadcms/richtext-lexical'

const Rocks: CollectionConfig = {
  slug: 'rocks',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      name: 'owner',
      type: 'relationship',
      required: true,      
      relationTo: ['users'],
    },
    {
      name: 'meetings',
      type: 'relationship',
      required: true,     
      hasMany: true, 
      relationTo: ['meetings'],
    },
    {
      name: 'companyRock', 
      type: 'checkbox', 
      label: 'Is this a company rock?',
      defaultValue: false,
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

export default Rocks
