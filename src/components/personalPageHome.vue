<template>
  <div class="personalpage-home">
    <Card class="card">
        <div id="avatar"></div>
    </Card>
  </div>

</template>

<script>
    export default {
        name: "personalPageHome"
    }
</script>

<style scoped>
  .card{
    width: 60%;
    margin: 10px auto 0 auto;
  }
  #avatar{
    width: 200px;
    height: 200px;
    background-color: antiquewhite;
    border-radius: 50%;
    margin-top: 50px;
    border: 3px solid white;
  }
</style>
