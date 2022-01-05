import { ref } from 'vue'

/**
 * A simple toggler.
 */
export const useToggle = (defaultValue = false) => {
  const toggleable = ref(defaultValue)

  const toggle = () => (toggleable.value = !toggleable.value)

  return [toggleable, toggle] as const
}
