import {defineType, defineField, defineArrayMember} from 'sanity'

const safeUrl = (rule: any) => rule.uri({scheme: ['http', 'https', 'mailto'], allowRelative: false})

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {dateFormat: 'MMMM D, YYYY'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: safeUrl,
                  }),
                ],
              },
            ],
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'date'},
  },
})