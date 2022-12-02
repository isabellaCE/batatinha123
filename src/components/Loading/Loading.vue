<template>
  <transition name="fade">
    <div v-show="show" data-testid="t-loading">
      <div class="overlay" v-show="!hideOverlay"></div>
      <div class="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    show: Boolean,
    hideOverlay: Boolean,
  },
};
</script>
<style scoped>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgb(0, 0, 0);
  opacity: 0.4;
  z-index: 99999;
}
.loading {
  width: 80px;
  height: 80px;
  margin: auto;
  position: absolute;
  left: 0;
  z-index: 999999;
  right: 0;
  top: 0;
  bottom: 0;
}
.loading div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #f0f3f6;
  border-radius: 50%;
  animation: loading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #d9e2ec transparent transparent transparent;
}
.loading div:nth-child(1) {
  animation-delay: -0.45s;
}
.loading div:nth-child(2) {
  animation-delay: -0.3s;
}
.loading div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  position: fixed;
  z-index: 999999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
