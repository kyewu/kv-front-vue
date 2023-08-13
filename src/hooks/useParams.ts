import type { RouteParams } from 'vue-router'

export function useParams() {
  const route = useRoute()
  return route.params as RouteParams
}
