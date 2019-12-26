<template>
  <div id="sidebar" class="pane-sm sidebar">
    <div class="pane">
      <nav class="nav-group">
        <h1 class="nav-group-title"></h1>
        <router-link to="/">
          <span class="nav-group-item">
            <span class="icon icon-folder"></span>
            Zoznam videí
          </span>
        </router-link>
        <span class="nav-group-item">
          <span class="icon icon-info-circled"></span>
          Detail videa
        </span>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigateBar"
};
</script>

<style>
a {
  text-decoration: none;
}
span {
  cursor: pointer;
}
</style>