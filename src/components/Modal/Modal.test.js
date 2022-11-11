import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Modal from "./Modal.vue";

describe("Modal", () => {
  it("Verificar se o componente não é exibido quando não passa a propriedade show", () => {
    const wrapper = mount(Modal, {
      slots: {
        default: "Slot Content",
      },
    });
    expect(wrapper.text()).not.toContain(/hello vitest/i);
  });
  it("Verificar se o componente exibe o conteúdo quando é passado o slot", () => {
    const wrapper = mount(Modal, {
      slots: {
        default: "Slot Content",
      },
      props: {
        show: true,
      },
    });
    expect(wrapper.text()).toContain("Slot Content");
  });
  it("deve disparar um $emit quando recebe um @click", async () => {
    const wrapper = mount(Modal, {
      props: {
        show: true,
      },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("input");
  });
  it("não deve disparar um $emit quando recebe um @click e tiver a propriedade persistent", async () => {
    const wrapper = mount(Modal, {
      props: {
        show: true,
        persistent: true,
      },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted()).not.toHaveProperty("input");
  });
});
