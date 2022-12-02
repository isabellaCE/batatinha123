import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Loading from "./Loading.vue";

describe("Loading", () => {
  it("Verificar se o overlay está sendo oculto", () => {
    const wrapper = mount(Loading, {
      props: {
        show: true,
        hideOverlay: true,
      },
    });
    expect(wrapper.find(".overlay").isVisible()).toBe(false);
  });

  it("Verificar se o loading está sendo exibido", () => {
    const wrapper = mount(Loading, {
      props: {
        show: true,
      },
    });
    expect(wrapper.find("[data-testid='t-loading']").isVisible()).toBe(true);
  });
});
