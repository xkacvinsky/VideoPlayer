<template>
  <div id="playlist" class="pane-sm sidebar">
    <div class="pane">
      <ul class="list-group">
        <li class="list-group-item">
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li class="list-group-item">
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Playlist"
};
</script>

<style>
#playlist {
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 160px;
}
</style>