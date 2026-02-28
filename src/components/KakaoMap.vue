<template>
  <div id="daumRoughmapContainer1677310237057" ref="kakaoMap" class="root_daum_roughmap root_daum_roughmap_landing"></div>
</template>

<script>
export default {
  name: 'MapComponent',
  methods: {
    setPointerEvents (value) {
      if (this.$refs.kakaoMap) {
        this.$refs.kakaoMap.style.pointerEvents = value
      }
    }
  }
}
</script>

<style lang="scss">
</style>
