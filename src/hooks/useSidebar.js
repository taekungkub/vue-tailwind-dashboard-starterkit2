import { ref } from "vue";

const isOpen = ref(false);

export default function useSidebar() {
  return {
    isOpen,
  };
}
