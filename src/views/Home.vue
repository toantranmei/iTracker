<template>
  <h1>Something here...</h1>
  <button @click="onHandle">Click</button>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  setup() {
    function onHandle() {
      console.log("run here...");
      ipcRenderer.send("something", { foo: "bar" });
    }

    return { onHandle };
  },
};
</script>
