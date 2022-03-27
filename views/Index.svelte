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
          <div class="control has-icons-left">
            <input
              class="input"
              type="text"
              placeholder="Tanggal donasi yang dipilih"
              id="tanggal"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-calendar" />
            </span>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-danger is-light">
              <span class="icon">
                <i class="fa-solid fa-arrows-rotate" />
              </span>
              <span>Reset</span>
            </button>
          </div>
          <div class="control is-expanded">
            <button class="button is-primary is-fullwidth">
              <span class="icon">
                <i class="fas fa-floppy-disk" />
              </span>
              <span>Simpan Jadwal</span>
            </button>
          </div>
        </div>
      </span>
    </form>
  </div>
</Layout>
