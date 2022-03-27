<script>
  import Layout from './Layout.svelte';

  export let page;
</script>

<Layout>
  <div class="container">
    <h1><i class="fas fa-print" /> {page}</h1>
  </div>
</Layout>
