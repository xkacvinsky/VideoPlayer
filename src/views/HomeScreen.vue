<template>
  <div class="UI">
    <NavigateBar></NavigateBar>
    <Table></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigateBar from "@/components/HomeScreen_NavigateBarHeader.vue";
import Table from "@/components/HomeScreen_Table.vue";
//import Handler from "@/services/Handler.js"

export default {
  name: "UI",
  components: {
    NavigateBar,
    Table
  },
  data: function() {
    return {
      data: []
    };
  }
  /* methods: {
    async request() {
      Handler.getData().then(result => {
        this.data = result.data;
      });
    },
    
  },
  beforeMount() {
    this.request();
  },*/
};
</script>

<style>
</style>