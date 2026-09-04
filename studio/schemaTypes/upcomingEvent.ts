import {defineField, defineType} from 'sanity'

export const upcomingEvent = defineType({
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
            name: 'desc',
            title: 'Desc',
            type: 'array',
            of: [{type: 'block'}],
            validation: (rule) => rule.required().min(1),
        }),
    ],
})