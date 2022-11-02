export const prerender = true

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch('https://sprucehealthgroup.com/wp-json/wp/v2/posts')
  const posts = await res.json()

  return {
    posts,
  }
}
