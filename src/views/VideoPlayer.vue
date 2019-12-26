<template>
  <div class="window">
    <div class="window-content">
      <NavigateBar></NavigateBar>
      <div class="video-container">
        <video id="media-video" controls>
          <source src="http://localhost:8081/video" type="video/mp4" />
        </video>
      </div>
      <VideoPlaylist></VideoPlaylist>
    </div>
    <footer class="toolbar toolbar-footer">Tu bude ovladanie videa</footer>
  </div>
</template>

<script>
import NavigateBar from "@/components/VideoPlayer_NavigateBar.vue";
import VideoPlaylist from "@/components/VideoPlayer_VideoPlaylist.vue";

export default {
  components: {
    NavigateBar,

    VideoPlaylist
  }
};
</script>

<style>
footer {
  height: 50px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
video {
  width: 960px;
  height: 540px;
}
</style>