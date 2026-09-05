import { defineQuery } from 'groq';
import { sanityClient } from 'sanity:client';

export const UPCOMING_EVENTS_QUERY = defineQuery(/* groq */ `
  *[_type == "event"] | order(date asc, _id asc) {
    _id,
    title,
    date,
    time,
    desc
  }
`);

export const GALLERY_EVENTS_QUERY = defineQuery(/* groq */ `
  *[_type == "galleryEvent"] | order(_createdAt desc, _id asc) {
    _id,
    title,
    image,
    desc
  }
`);

export const LOCAL_RESOURCES_QUERY = defineQuery(/* groq */ `
  *[_type == "localResources"] | order(topic asc, _id asc) {
    _id,
    topic,
    resources[]{
      text,
      link
    }
  }
`);

export const NEWSLETTERS_QUERY = defineQuery(/* groq */ `
  *[_type == "newsletter"] | order(title asc, _id asc) {
    _id,
    title,
    pdf
  }
`);

export const SOCIAL_LINKS_QUERY = defineQuery(/* groq */ `
  *[_type == "socialLink"] | order(platform asc, _id asc) {
    _id,
    platform,
    url
  }
`);

export const fetchUpcomingEvents = () => sanityClient.fetch(UPCOMING_EVENTS_QUERY);

export const fetchGalleryEvents = () => sanityClient.fetch(GALLERY_EVENTS_QUERY);

export const fetchLocalResources = () => sanityClient.fetch(LOCAL_RESOURCES_QUERY);

export const fetchNewsletters = () => sanityClient.fetch(NEWSLETTERS_QUERY);

export const fetchSocialLinks = () => sanityClient.fetch(SOCIAL_LINKS_QUERY);
