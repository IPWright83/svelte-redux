<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';
  import StoreProvider from "../StoreProvider.svelte";
</script>

<Meta title="Button" component={Button}/>

<Template let:args>
  <StoreProvider>
    <Button {...args}/>
  </StoreProvider>
</Template>

<Story name="Primary" args={{label: "Increment"}}/>
