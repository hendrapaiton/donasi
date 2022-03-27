<script>
  import Layout from './Layout.svelte';

  export let identitas;
</script>

<Layout>
  <div class="container">
    <h1 class="is-size-3 has-text-centered my-4">{identitas}</h1>
    <form class="columns">
      <span class="column" />
      <span class="column">
        <div class="field">
          <label class="label" for="tanggal">Jadwal Pelaksanaan</label>
          <div class="control is-expanded">
            <input
              class="input is-fullwidth"
              type="text"
              placeholder="Tanggal donasi yang dipilih"
              id="tanggal"
            />
          </div>
        </div>
      </span>
    </form>
  </div>
</Layout>
