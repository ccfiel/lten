import { CollectionConfig } from 'payload/types'
import {
  LinkFeature,
  UploadFeature,
  lexicalEditor
} from '@payloadcms/richtext-lexical'
import { isAdmin } from '../access/isAdmin'
import { isLeader } from '../access/isLeader'
import { isLoggedIn } from '../access/isLoggedIn'
import { isCreatedBy } from '../access/isCreatedBy'
import { isOwner } from '../access/isOwner'
import { isAttendees } from '../access/isAttendees'

const Meetings: CollectionConfig = {
  slug: 'meetings',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: isAdmin || isLeader,
    read: isAttendees,
    update: isAdmin || isOwner,
  },
  fields: [
    {
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      name: 'departmentMeeting', 
      required: true,
      type: 'select', 
      admin: {
        isClearable: true,
        isSortable: true, 
      },
      options: [
        {
          label: 'Yes',
          value: 'yes',
        },
        {
          label: 'No',
          value: 'no',
        }
      ],
    },
    {
      name: 'owner',
      type: 'relationship',
      required: true,      
      relationTo: ['users'],
    },
    {
      name: 'startDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'MM/dd/yyyy hh:mm a',
        },
      },
    },  
    {
      name: 'measurableDay', 
      type: 'select', 
      required: true,      
      admin: {
        isClearable: true,
        isSortable: true, 
      },
      options: [
        {
          label: 'Monday',
          value: 'monday',
        },
        {
          label: 'Tuesday',
          value: 'tuesday',
        },
        {
          label: 'Wednesday',
          value: 'wednesday',
        },
        {
          label: 'Thursday',
          value: 'thursday',
        },
        {
          label: 'Friday',
          value: 'friday',
        },
        {
          label: 'Saturday',
          value: 'saturday',
        },
        {
          label: 'Sunday',
          value: 'sunday',
        },
      ],
      
    },
    {
      name: 'attendees',
      type: 'relationship',
      required: true,   
      hasMany: true,   
      relationTo: ['users'],
    },
    {
      name: 'description',
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

export default Meetings
