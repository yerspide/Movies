<script setup lang="ts">
definePageMeta({
  layout: 'main'
})
</script>

<template>
  <div class="flex flex-col gap-15">
    <section>
      <InfoSectionMain class="pt-23"/>
    </section>
    <section>
      <InfoSectionSources />
    </section>
    <section>
      <InfoSectionDemoMovie />
    </section>
  </div>
</template>