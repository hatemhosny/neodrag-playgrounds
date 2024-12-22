import { createPlayground, getPlaygroundUrl } from 'livecodes';
const configs = {
    svelte: {
        title: '@neodrag/svelte',
        theme: 'light',
        themeColor: '#FBE0D8',
        activeEditor: 'script',
        markup: {
            language: 'html',
            content: '',
        },
        style: {
            language: 'css',
            content: '',
        },
        script: {
            language: 'svelte',
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
    },
    react: {
        title: '@neodrag/react',
        theme: 'light',
        themeColor: '#BFE2E7',
        activeEditor: 'script',
        markup: {
            language: 'html',
            content: '',
        },
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
            language: 'react',
            // This uses the new React compiler
            // if you want to disbale it use:
            // language: 'jsx',
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
    },
    vue: {
        title: '@neodrag/vue',
        activeEditor: 'script',
        theme: 'light',
        themeColor: '#D2EBE0',
        markup: {
            language: 'html',
            content: '',
        },
        style: {
            language: 'css',
            content: '',
        },
        script: {
            language: 'vue',
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
    },
    solid: {
        title: '@neodrag/solid',
        theme: 'light',
        themeColor: '#BDC8D7',
        activeEditor: 'script',
        markup: {
            language: 'html',
            content: '',
        },
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
            language: 'solid.tsx',
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
    },
    vanilla: {
        title: '@neodrag/vanilla',
        theme: 'light',
        themeColor: '#FCF5C0',
        activeEditor: 'script',
        markup: {
            language: 'html',
            content: `<div id="drag" class="box">Drag me!</div>`,
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
            language: 'javascript',
            content: `
import { Draggable } from '@neodrag/vanilla';

const dragInstance = new Draggable(document.querySelector('#drag'));
`.trimStart(),
        },
    },
};
const playground = await createPlayground('#playground', {
    config: configs.svelte,
});
const playgroundLink = document.querySelector('#playground-link');
playgroundLink.href = getPlaygroundUrl({ config: configs.svelte });
document.querySelectorAll('#tabs a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (link.classList.contains('active'))
            return;
        document
            .querySelectorAll('#tabs a')
            .forEach((tab) => tab.classList.remove('active'));
        link.classList.add('active');
        const config = configs[link.dataset.lib];
        playground.setConfig(config);
        playgroundLink.href = getPlaygroundUrl({ config });
    });
});
