import {defineType, defineField} from 'sanity'

export const newsletter = defineType({
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pdf',
      title: 'PDF',
      type: 'file',
      options: {accept: 'application/pdf'},
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})