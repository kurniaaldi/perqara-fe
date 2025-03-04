<template>
  <div class="min-h-screen h-full bg-background w-full">
    <Header></Header>
    <div class="min-h-screen w-full">
      <slot></slot>
    </div>
    <FooterSection />
  </div>
</template>

<script setup>
import FooterSection from "~/components/FooterSection.vue";
import Header from "~/components/Header.vue";
</script>
