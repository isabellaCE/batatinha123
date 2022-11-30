<template>
  <div class="t-Sidebar">
    <div
      v-if="show"
      class="t-SidebarBackdrop"
      data-testid="t-drawer"
      @click="handleClick"
    />
    <transition name="t-Slide" :class="classes">
      <div
        v-if="show"
        class="t-SidebarPanel"
        :class="classes"
        data-testid="sidebar-panel"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    show: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: true },
  },
  computed: {
    classes() {
      return {
        "-left": this.left,
        "-right": this.right,
      };
    },
  },
  methods: {
    handleClick() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped>
.t-Slide-Enter,
.t-Slide-Leave {
  transition: all 150ms ease-in 0s;
  &.-left {
    transform: translateX(-100%);
  }
  &.-right {
    transform: translateX(100%);
  }
  &.-active {
    transition: transform 0.2s ease;
  }
}

.t-SidebarBackdrop {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 5999;
}

.t-SidebarPanel {
  overflow-y: auto;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 100000;
  padding: 3rem 20px 2rem 20px;
  padding: 0px;
  height: calc(100vh);
  &.-left {
    left: 0;
    border-radius: 0px 4px 4px 0px;
  }
  &.-right {
    right: 0;
    border-radius: 4px 0px 0px 4px;
  }
}
</style>
