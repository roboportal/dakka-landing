import lunr from 'lunr'
import { useCallback, useMemo } from 'react'

export function useSearch(dataToBuildIndex, navigation) {
  const index = useMemo(() => {
    function buildIndex() {
      this.ref('id')
      this.field('title')
      this.field('content')

      dataToBuildIndex.forEach((d) => this.add(d))
    }
    return lunr(buildIndex)
  }, [dataToBuildIndex])

  const navigationMap = useMemo(() => {
    return Object.fromEntries(
      navigation.map(({ id, title }) => [id, { id, title }]),
    )
  }, [navigation])

  const doSearch = useCallback(
    (str) => {
      return index.search(str).map(({ ref }) => navigationMap[ref])
    },
    [index, navigationMap],
  )

  return { doSearch }
}
