import { ref } from 'vue'

export const isDrawerVisible = ref(false)
export const toggleDrawerVisibility = () => {
  isDrawerVisible.value = !isDrawerVisible.value
}
