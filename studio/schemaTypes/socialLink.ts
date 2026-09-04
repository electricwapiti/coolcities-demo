import {defineType, defineField} from 'sanity'

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'LinkedIn', value: 'linkedin'},
          {title: 'YouTube', value: 'youtube'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({scheme: ['http', 'https'], allowRelative: false}),
    }),
  ],
  preview: {
    select: {title: 'platform', subtitle: 'url'},
  },
})