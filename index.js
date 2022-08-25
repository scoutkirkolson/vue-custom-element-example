import { openBlock, createElementBlock, createElementVNode, getCurrentInstance, computed, warn, defineComponent, ref, onMounted, watch, unref, createVNode, Transition, withCtx, createBlock, defineCustomElement } from 'vue';
import { useDark, useToggle } from '@vueuse/core';

const _hoisted_1$3 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M12 7.5c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4z",
  opacity: ".3"
}, null, -1);
const _hoisted_3$2 = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "m5.34 6.25l1.42-1.41l-1.8-1.79l-1.41 1.41zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm7.66 5.705l-1.41-1.407l1.79-1.79l1.406 1.41zM17.24 18.16l1.79 1.8l1.41-1.41l-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41l1.79-1.8l-1.41-1.41z"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$2,
  _hoisted_3$2
];

function render$2(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_4$1))
}

const __unplugin_components_1 = { name: 'ic-twotone-wb-sunny', render: render$2 };
/* vite-plugin-components disabled */

const _hoisted_1$2 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M6 12c0-4.41 3.59-8 8-8c.34 0 .68.02 1.01.07C13.1 6.23 12 9.05 12 12s1.1 5.77 3.01 7.93c-.33.05-.67.07-1.01.07c-4.41 0-8-3.59-8-8z",
  opacity: ".3"
}, null, -1);
const _hoisted_3$1 = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M14 12c0-3.7 2.01-6.92 5-8.65A9.973 9.973 0 0 0 14 2C8.48 2 4 6.48 4 12s4.48 10 10 10c1.82 0 3.53-.5 5-1.35c-2.99-1.73-5-4.95-5-8.65zm1.01 7.93c-.33.05-.67.07-1.01.07c-4.41 0-8-3.59-8-8s3.59-8 8-8c.34 0 .68.02 1.01.07C13.1 6.23 12 9.05 12 12s1.1 5.77 3.01 7.93z"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2$1,
  _hoisted_3$1
];

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4))
}

const __unplugin_components_0$1 = { name: 'ic-twotone-nightlight', render: render$1 };
/* vite-plugin-components disabled */

function useShadowHost() {
  const instance = getCurrentInstance();
  return computed(() => {
    try {
      return instance.vnode.el.parentNode.host;
    } catch (error) {
      warn("component instance or element not available, can not find shadow host", instance);
      return void 0;
    }
  });
}

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DarkModeSwitch.ce",
  setup(__props) {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    let host = ref(useShadowHost());
    function reflectDark() {
      host.value?.toggleAttribute("dark", isDark.value);
    }
    onMounted(reflectDark);
    watch(isDark, reflectDark);
    return (_ctx, _cache) => {
      const _component_ic58twotone_nightlight = __unplugin_components_0$1;
      const _component_ic58twotone_wb_sunny = __unplugin_components_1;
      return openBlock(), createElementBlock("button", {
        "aria-label": "Toggle theme",
        onClick: _cache[0] || (_cache[0] = ($event) => unref(toggleDark)())
      }, [
        createVNode(Transition, {
          name: "slide",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            unref(isDark) ? (openBlock(), createBlock(_component_ic58twotone_nightlight, { key: 0 })) : (openBlock(), createBlock(_component_ic58twotone_wb_sunny, { key: 1 }))
          ]),
          _: 1
        })
      ]);
    };
  }
});

const _style_0$1 = "\n:host {\n  --color: #fbbf24;\n  --bg-normal: #fAfAf9;\n  --bg-active: #f5f5f4;\n  --font-size: 24px;\n}\n:host([dark]) {\n  --color: #fef3c7;\n  --bg-normal: #262626;\n  --bg-active: #2d2d2d;\n}\nbutton {\n  background-color: var(--bg-normal);\n  border: none;\n  border-radius: .5rem;\n  color: var(--color);\n  cursor: pointer;\n  display: flex;\n  font-size: var(--font-size);\n  overflow: hidden;\n  padding: 0.4em;\n  transition: background-color 0.3s ease, color 0.3s cubic-bezier(0.64, 0, 0.78, 0);\n}\nbutton:hover,\nbutton:focus {\n  background-color: var(--bg-active);\n  outline: none;\n}\n.slide-enter-active,\n.slide-leave-active {\n  transition: transform 0.3s ease-out;\n}\n.slide-enter-from {\n  transform: translateY(-150%);\n}\n.slide-enter-to,\n.slide-leave-from {\n  transform: translateY(0);\n}\n.slide-leave-to {\n  transform: translateY(150%);\n}\n";

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const DarkModeSwitchWithStyles = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["styles", [_style_0$1]]]);

const _hoisted_1$1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3))
}

const __unplugin_components_0 = { name: 'mdi-github', render };
/* vite-plugin-components disabled */

const _style_0 = "\na {\n  color: inherit;\n  display: block;\n  opacity: 0.6;\n  margin-top: 8rem;\n}\na:hover {\n  opacity: 1;\n}\nsvg {\n  height: 48px;\n  width: 48px;\n}\n";

const _sfc_main = {};

const _hoisted_1 = {
  href: "https://github.com/ElMassimo/vue-custom-element-example",
  "aria-label": "Source Code",
  title: "Source Code"
};

function _sfc_render(_ctx, _cache) {
  const _component_mdi58github = __unplugin_components_0;

  return (openBlock(), createElementBlock("a", _hoisted_1, [
    createVNode(_component_mdi58github)
  ]))
}
const GithubLinkWithStyles = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['styles',[_style_0]]]);

const DarkModeSwitch = defineCustomElement(DarkModeSwitchWithStyles);
const GithubLink = defineCustomElement(GithubLinkWithStyles);
function register(tagName = "dark-mode-switch") {
  customElements.define(tagName, DarkModeSwitch);
  customElements.define("github-link", GithubLink);
}

export { DarkModeSwitch, GithubLink, register };
//# sourceMappingURL=index.js.map
