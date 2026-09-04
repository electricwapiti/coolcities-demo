import {defineType, defineField, defineArrayMember} from 'sanity'

export const localResource = defineType({
  name: 'localResources',
  title: 'Local Resources',
  type: 'document',
  fields: [
    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Resource Text',
              type: 'text',
              rows: 2,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Resource Link',
              type: 'url',
              validation: (rule) =>
                rule.required().uri({scheme: ['http', 'https', 'mailto'], allowRelative: false}),
            }),
          ],
          preview: {select: {title: 'text', subtitle: 'link'}},
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
})