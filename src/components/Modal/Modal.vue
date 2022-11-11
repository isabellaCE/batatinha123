<template>
  <div v-if="show" class="modal" @click="clickOutside">
    <div class="modal-inner" :class="{ bounce: bounce }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: Boolean,
    persistent: Boolean
  },
  data() {
    return {
      bounce: false
    };
  },
  methods: {
    clickOutside(e) {
      if (!this.persistent && e.target.className === "modal") {
        this.$emit("input", false);
        return;
      }
      if (this.persistent) {
        this.bounce = true;
      }
    }
  }
};
</script>
<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99997;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.4);

  .modal-inner {
    background: var(--track-color-white);
    max-height: calc(100vh - 48px);
    border-radius: 4px;
    overflow: auto;
    animation: show-in 0.2s;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px rgb(0 0 0 / 14%),
      0 1px 10px rgb(0 0 0 / 12%);
  }
  .bounce {
    animation: bounce-in 0.2s;
  }
}

@keyframes show-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
