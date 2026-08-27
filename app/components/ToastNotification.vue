<template>
  <Teleport to="body">
    <Transition name="bounce">
      <div 
        v-if="visible" 
        class="fixed bottom-20 sm:bottom-6 right-6 bg-[#c2185b] text-white text-xs font-semibold px-5 py-3 rounded-2xl shadow-xl z-50 transition"
      >
        {{ message }}
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const { toast } = useCart()

const visible = ref(false)
const message = ref('')
let timer: NodeJS.Timeout | null = null

watch(() => toast.value, (newToast) => {
  if (newToast && newToast.message) {
    message.value = newToast.message
    visible.value = true
    
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      visible.value = false
    }, 2500)
  }
}, { deep: true })
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.3s ease-out;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse ease-in;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  50% {
    opacity: 1;
    transform: translateY(-5px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
