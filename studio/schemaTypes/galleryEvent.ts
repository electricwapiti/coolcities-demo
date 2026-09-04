import {defineField, defineType} from 'sanity'
export const galleryEvent = defineType({
  name: 'galleryEvent',
  title: 'Past Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})