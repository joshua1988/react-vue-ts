<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      message: 0,
    };
  },
});
</script>

<template>
  <p>{{ message }}</p>
</template>
