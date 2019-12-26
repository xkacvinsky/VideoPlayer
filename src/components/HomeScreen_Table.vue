<template>
  <table class="table-striped">
    <thead>
      <tr>
        <th></th>
        <th>Názov súboru</th>
        <th>Dĺžka videa</th>
        <th>Meno pacienta</th>
        <th>Diagnóza</th>
        <th>Identifikácia pacienta</th>
        <th>Dátum natočenia</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of filteredVideos" v-bind:key="item.id">
        <input id="checkbox" type="checkbox" />
        <td v-for="element of item" v-bind:key="element.id">{{element}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {};
</script>

<style>
.table-striped {
  width: 50%;
  height: 100%;
}
</style>