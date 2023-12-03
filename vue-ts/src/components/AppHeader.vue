<script lang="ts">
import { PropType, defineComponent } from "vue";

interface Profile {
  name: string;
  age: number;
}

export default defineComponent({
  props: {
    headerTitle: { type: String, required: true },
    userProfile: { type: Object as PropType<Profile> },
  },
});
</script>

<template>
  <h1>{{ userProfile?.name }}</h1>
</template>
