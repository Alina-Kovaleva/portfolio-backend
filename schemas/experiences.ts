import {defineArrayMember, defineField, defineType} from 'sanity';

export default defineType({
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'workExperience',
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Year',
      name: 'year',
      by: [{field: 'year', direction: 'desc'}],
    },
    {
      title: 'LOLOL',
      name: 'lololo',
      by: [{field: 'year', direction: 'asc'}],
    },
  ],
});
