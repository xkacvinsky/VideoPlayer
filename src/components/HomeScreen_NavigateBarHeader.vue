<template>
  <div>
    <header class="toolbar toolbar-header">
      <div class="toolbar-actions">
        <div class="btn-group">
          <router-link to="/video">
            <button class="btn btn-default">
              <span class="icon icon-video"></span>
              Prehrávač videí
            </button>
          </router-link>
          <button @click="$refs.file.click()" class="btn btn-default">
            <input type="file" ref="file" style="display:none" />
            <span class="icon icon-plus-circled"></span>
            Pridanie videa
          </button>
          <button class="btn btn-default">
            <span class="icon icon-minus-circled"></span>
            Odstranenie videa
          </button>

          <button class="btn btn-default" v-on:click="popup">
            <span class="icon icon-search"></span>
            Filtrovanie videí
          </button>
        </div>

        <form class="formular" v-if="form === true">
          <div class="radio1">
            <label>
              <input type="radio" name="radios" checked />
              Filtrovanie podľa mena
            </label>
          </div>
          <div class="radio2">
            <label>
              <input type="radio" name="radios" />
              Filtrovanie podľa diagnózy
            </label>
          </div>
          <div class="radio3">
            <label>
              <input type="radio" name="radios" />
              Filtrovanie podľa dátumu natočenia
            </label>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" v-model="search" placeholder="Filtruj" />
          </div>
          <div class="form-actions">
            <button class="btn btn-form btn-default" v-on:click="popdown">Cancel</button>
          </div>
        </form>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavigateBarForHomeScreen",
  data: function() {
    return {
      form: false,
      checked: false,
      search: ""
    };
  },
  methods: {
    popup: function() {
      this.form = true;
    },
    popdown: function() {
      this.form = false;
    }
  },
  computed: {
    filteredVideos: function() {
      return this.data.filter(item => {
        return item["Patient"].match(this.search);
      });
    }
  }
};
</script>

<style>
.toolbar-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
#checkbox {
  margin: 8px;
}
.formular {
  position: relative;
  top: 5px;
}
.radio1 {
  position: absolute;
  left: 5px;
}
.radio2 {
  position: absolute;
  left: 160px;
}
.radio3 {
  position: absolute;
  left: 335px;
}

.form-group {
  position: relative;
  top: 30px;
}
.form-control {
  position: relative;
  left: 5px;
  width: 250px;
  height: 20px;
  cursor: text;
}

.form-actions {
  position: relative;
  left: 265px;
  bottom: 5px;
}
button {
  cursor: pointer;
}
</style>