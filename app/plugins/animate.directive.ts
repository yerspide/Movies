import type { DirectiveBinding } from 'vue'

import { DEFAULT_ANIMATION_DURATION } from '~/constants/animations'
import type { AnimationBindings } from '~/types/animations.d'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('animate', {
    created(el, binding: DirectiveBinding<AnimationBindings>) {
      el.style.opacity = '0'

      const { value } = binding

      const {
        duration = DEFAULT_ANIMATION_DURATION,
        animationName = 'fade-in-up',
        repeatOnScroll = false,
        repeatOnUpdate = false,
        rootMargin = '0px 0px 0px 0px',
        delay = 300
      } = value || {}

      function animate() {
        el.style.animationDuration = `${duration}ms`
        el.style.animationDelay = `${delay}ms`
        el.classList.add(animationName)
      }

      el._onAnimationEnd = () => {
        el.style.opacity = ''
        el.removeEventListener('animationend', el._onAnimationEnd)
      }

      const intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry || el !== entry.target) {
            return
          }

          if (!entry.isIntersecting) {
            el.style.opacity = '0'
            el.classList.remove(animationName)

            return
          }

          requestAnimationFrame(animate)
          el.addEventListener('animationend', el._onAnimationEnd)

          if (!repeatOnScroll) {
            intersectionObserver.unobserve(el)
          }
        },
        { rootMargin }
      )

      const mutationObserver = new MutationObserver(() => {
        if (repeatOnUpdate) {
          el.style.opacity = '0'
          el.classList.remove(animationName)

          requestAnimationFrame(animate)
          el.addEventListener('animationend', el._onAnimationEnd)
        }
      })

      mutationObserver.observe(el, {
        childList: true
      })

      el._mutation_observer = mutationObserver
      el._intersection_observer = intersectionObserver
    },
    mounted(el) {
      el._intersection_observer?.observe(el)
    },
    // Отключаем все наблюдатели за элементом
    unmounted(el) {
      el._mutation_observer?.disconnect()
      el._mutation_observer = null

      el._intersection_observer?.disconnect()
      el._intersection_observer = null

      el.removeEventListener('animationend', el._onAnimationEnd)
      el._onAnimationEnd = null
    },
    // Скрываем элемент во время гидратации
    getSSRProps: () => ({
      style: 'opacity: 0'
    })
  })
})
