import { CollectionConfig } from 'payload/types'
import { isCreatedBy } from '../access/isCreatedBy'
import { isAdmin } from '../access/isAdmin'

const ScoreCards: CollectionConfig = {
  slug: 'scorecards',
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
      name: 'accountable',
      type: 'relationship',
      required: true,      
      relationTo: ['users'],
    },
    {
      name: 'assistant',
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
      name: 'unitOfMeasure', 
      required: true,
      type: 'select', 
      admin: {
        isClearable: true,
        isSortable: true, 
      },
      options: [
        {
          label: '%',
          value: 'percent',
        },
        {
          label: 'Number',
          value: 'no',
        },
        {
          label: '$',
          value: 'dollar',
        },
        {
          label: '₱',
          value: 'peso',
        }
      ],
    },
    {
      name: 'operator', 
      required: true,
      type: 'select', 
      admin: {
        isClearable: true,
        isSortable: true, 
      },
      options: [
        {
          label: '>=',
          value: 'greaterThan',
        },
        {
          label: '<=',
          value: 'lessThan',
        }
      ],
    },
    {
      name: 'goal', // required
      type: 'number', // required
      required: true,
      min: 0,
    },
  ],
}

export default ScoreCards
