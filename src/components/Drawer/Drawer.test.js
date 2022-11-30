import { describe, it, expect, vi } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Drawer from "./Drawer.vue";

describe("Drawer", () => {
  it("Verificar se o componente está sendo exibido", () => {
    const wrapper = mount(Drawer, {
      slots: {
        default: "Slot Content",
      },
      props: {
        show: true,
      },
    });
    expect(wrapper.text()).toContain("Slot Content");
  });
  it("O Drawer não deve aparecer quando não tem propriedade show", () => {
    const wrapper = mount(Drawer, {
      slots: {
        default: "Slot Content",
      },
    });
    expect(wrapper.text()).not.toContain(/hello vitest/i);
  });
  it("Verificando se existe class right", () => {
    const wrapper = mount(Drawer, {
      slots: {
        default: "Slot Content",
      },
      props: {
        show: true,
      },
    });
    expect(wrapper.find(".-right").classes()).toHaveLength(1);
  });
  it("Verificando se existe class left", () => {
    const wrapper = mount(Drawer, {
      slots: {
        default: "Slot Content",
      },
      props: {
        show: true,
        left: true,
        right: false,
      },
    });
    expect(wrapper.find("[data-testid='sidebar-panel']").classes()).toContain(
      "-left"
    );
  });

  it("deve disparar o evento handleClick ao clicar para fechar o Drawer", async () => {
    const wrapper = shallowMount(Drawer, {
      slots: {
        default: 'Slot content'
      },
      props: {
        show: true
      }
    })

    const spy = vi.spyOn(wrapper.vm, "handleClick");
    await wrapper.find('.t-SidebarBackdrop').trigger("click")
    expect(spy).toHaveBeenCalled()
  })
});
