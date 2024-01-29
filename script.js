import { createPlayground, getPlaygroundUrl } from "livecodes";
const svelteConfig = {
    title: "@neodrag/svelte",
    activeEditor: "script",
    script: {
        language: "svelte",
        content: `
<script>
  import { draggable } from '@neodrag/svelte';
</script>

<div class="box" use:draggable>Drag me!</div>

<style>
  .box {
    height: 100px;
    width: 100px;
    font-family: sans-serif;
    background-color: #FCE9E3;
    border: 2px solid #E63900;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: move;
  }
</style>    
`.trimStart(),
    },
};
createPlayground("#svelte-playground", { config: svelteConfig });
document.querySelector("#svelte-link").href =
    getPlaygroundUrl({ config: svelteConfig });
const reactConfig = {
    title: "@neodrag/react",
    activeEditor: "script",
    style: {
        language: 'css',
        content: `
.box {
  height: 100px;
  width: 100px;
  font-family: sans-serif;
  background-color: #C7E9EF;
  border: 2px solid #0098B3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: move;
}
`.trimStart(),
    },
    script: {
        language: "jsx",
        content: `
import { useRef } from 'react';
import { useDraggable } from '@neodrag/react';

export default function App() {
  const draggableRef = useRef(null);
  useDraggable(draggableRef);

  return <div ref={draggableRef} className="box">Drag me!</div>;
}
`.trimStart(),
    },
};
createPlayground("#react-playground", { config: reactConfig });
document.querySelector("#react-link").href =
    getPlaygroundUrl({ config: reactConfig });
const vueConfig = {
    title: "@neodrag/vue",
    activeEditor: "script",
    script: {
        language: "vue",
        content: `
<script setup>
import { vDraggable } from '@neodrag/vue';
</script>

<template>
  <div v-draggable class="box">Drag me!</div>
</template>

<style>
  .box {
    height: 100px;
    width: 100px;
    font-family: sans-serif;
    background-color: #D1EBDF;
    border: 2px solid #3AA676;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: move;
  }
</style>
`.trimStart(),
    },
};
createPlayground("#vue-playground", { config: vueConfig });
document.querySelector("#vue-link").href =
    getPlaygroundUrl({ config: vueConfig });
const solidConfig = {
    title: "@neodrag/solid",
    activeEditor: "script",
    style: {
        language: 'css',
        content: `
.box {
  height: 100px;
  width: 100px;
  font-family: sans-serif;
  background-color: #C2CCD9;
  border: 2px solid #2C4F7D;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: move;
}
`.trimStart(),
    },
    script: {
        language: "solid.tsx",
        content: `
import type { Component } from 'solid-js';
import { createDraggable } from '@neodrag/solid';

const App: Component = () => {
  const { draggable } = createDraggable();

  return <div use:draggable className="box">Drag me!</div>;
};

export default App;
`.trimStart(),
    },
};
createPlayground("#solid-playground", { config: solidConfig });
document.querySelector("#solid-link").href =
    getPlaygroundUrl({ config: solidConfig });
const vanillaConfig = {
    title: "@neodrag/vanilla",
    activeEditor: "script",
    markup: {
        language: 'html',
        content: `<div id="drag" class="box">Drag me!</div>`
    },
    style: {
        language: 'css',
        content: `
.box {
  height: 100px;
  width: 100px;
  font-family: sans-serif;
  background-color: #FCF5C0;
  border: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: move;
}
`.trimStart(),
    },
    script: {
        language: "javascript",
        content: `
import { Draggable } from '@neodrag/vanilla';

const dragInstance = new Draggable(document.querySelector('#drag'));
`.trimStart(),
    },
};
createPlayground("#vanilla-playground", { config: vanillaConfig });
document.querySelector("#vanilla-link").href =
    getPlaygroundUrl({ config: vanillaConfig });
