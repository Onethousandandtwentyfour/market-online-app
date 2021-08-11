const AutoFocusOfInput = Vue => {
  Vue.directive("focus", {
    //指令绑定到元素时 触发
    bind(_el, binding) {
      console.log("-------bind-start-------");
      console.log("binding", binding);
      console.log("-------bind-end-------");
    },
    // 当被绑定的元素插入到 DOM 中时……
    inserted(el) {
      // 聚焦元素
      el.focus();
    },
    update(el, binding) {
      console.log("-------update-start-------");
      console.log("binding", binding);
      console.log("-------update-end-------");
      if ("remove" === binding.arg) {
        el.remove();
      } else if ("fixed" === binding.arg) {
        Object.assign(el.style, {
          position: "fixed",
          top: `${binding.value}px`,
          left: "50%",
          transform: "translateX(-50%)"
        });
      }
    },
    componentUpdate() {
      console.log("componentUpdate");
    },
    unbind() {
      console.log("unbind");
    }
  });
};

export default {
  install(Vue) {
    AutoFocusOfInput(Vue);
  }
};
