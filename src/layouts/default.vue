<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer padless>
      <v-col class="footer" cols="12">
        Copyright © 2026.HyeBun. All rights reserved.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}

</script>

<style lang="scss">
@font-face {
  font-family: 'BMJUA';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.footer {
  font-family: "BMJUA", cursive;
  font-size: 12px;
  background-image: url("@/static/imgs/contact_bg.jpg");
  text-align: center !important;
  margin: auto;
}
</style>
