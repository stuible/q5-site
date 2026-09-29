// Case studies flagged `featured.show` in their frontmatter, in display order
export function useFeaturedWork() {
  return useAsyncData('featured-work', async () => {
    const items = await queryCollection('work')
      .order('order', 'ASC')
      .order('stem', 'ASC')
      .all()
    return items.filter(item => item.featured.show)
  })
}
