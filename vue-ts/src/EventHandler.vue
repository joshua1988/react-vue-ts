<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    showAlert(event: MouseEvent) {
      event.preventDefault();
    },
  },
});
</script>

<template>
  <button @click="showAlert">show</button>
  <input type="text" v-model="todo" />
</template>
