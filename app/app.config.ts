export default defineAppConfig({
  title: 'Sink-CSJ',
  email: 'mail@csi.one',
  github: '',
  twitter: '',
  telegram: '',
  mastodon: '',
  blog: 'https://blog.csj.one',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
