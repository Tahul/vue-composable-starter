<template>
  <div>
    <input type="checkbox" :value="toggleable ? 'checked' : 'unchecked'" @change="toggle" />
    Current value is: {{ toggleable }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useToggle } from '../../src'

export default defineComponent({
  name: 'App',
  setup() {
    const [toggleable, toggle] = useToggle()

    return {
      toggleable,
      toggle
    }
  }
})
</script>
