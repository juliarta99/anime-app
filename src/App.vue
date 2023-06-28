<template>
  <div class="lg:py-5 lg:px-10 py-3 px-6">
    <router-view></router-view>
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body{
    background-color: #f7f7f7;
  }
  @media (max-width: 360px) {
    .grid-cols-xs{
      grid-template-columns: 1fr 1fr !important;
    }
  }
  @media (max-width: 340px) {
    .w-xs{
      width: 100% !important;
    }
  }
</style>