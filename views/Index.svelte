<script>
  import Layout from './Layout.svelte';

  export let identitas;
</script>

<Layout>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered">{identitas}</h1>
        <form class="columns">
          <span class="column">
            <div class="field">
              <label class="label" for="tanggal">Nama Lengkap</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Nama donatur yang ditampilkan"
                  id="tanggal"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user" />
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label" for="tanggal">Blok Rumah</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Nomor blok rumah tempat tinggal"
                  id="tanggal"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-house" />
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label" for="tanggal">Nomor Handphone</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Kontak yang bisa dihubungi"
                  id="tanggal"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-phone" />
                </span>
              </div>
            </div>
          </span>
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
            <div class="field">
              <label class="label" for="donasi">Pilihan Donasi</label>
              <div class="control">
                <label class="radio">
                  <input type="radio" />
                  Takjil
                </label>
                <label class="radio">
                  <input type="radio" />
                  Bukber
                </label>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-danger is-light is-normal">
                  <span class="icon">
                    <i class="fa-solid fa-arrows-rotate" />
                  </span>
                  <span>Reset</span>
                </button>
              </div>
              <div class="control is-expanded">
                <button class="button is-primary is-fullwidth is-normal">
                  <span class="icon">
                    <i class="fas fa-floppy-disk" />
                  </span>
                  <span>Tetapkan Jadwal</span>
                </button>
              </div>
            </div>
          </span>
        </form>
      </div>
    </div>
  </section>
</Layout>
