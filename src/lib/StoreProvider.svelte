<!--
  Adds the given store to context, making it available to all
  components beneath this one in the hierarchy.
  @component
-->

<script lang="ts">
  import { setContext } from 'svelte';
  import { createStore } from "./store/createStore";
  import { STORE_KEY } from "./store/constants";

  const store = createStore();

  export let overrideStore: any = store;
  setContext(STORE_KEY, overrideStore);
</script>

<slot />
