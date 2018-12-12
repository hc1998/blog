<template>
  <div class="new-article">
    <div class="title">
      <div>标题：</div>
      <input type="text" v-model="title" />
    </div>
    <div class="tag">
      <div>分类：</div>
      <input type="text" v-model="tag" />
    </div>
    <div class="author">
      <div>发布者：</div>
      <input type="text" v-model="author" />
    </div>
    <div class="cover">
      <div>封面：</div>
      <input type="text" v-model="cover" />
    </div>
    <div class="content">
      <div>正文：</div>
      <quillEditor v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)">
      </quillEditor>
    </div>
    <div class="quill-editor">
      <code class="hljs" v-html="contentCode"></code>
    </div>
  </div>
</template>

 <script> 
import Vue from 'vue';

// require styles
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import hljs from 'highlight.js'

import { quillEditor } from 'vue-quill-editor';

export default {
  components: {
    quillEditor
  },
  data() {
    return {
      title: '',
      tag: '',
      author: '',
      cover: '',
      content: `<h2 class="ql-align-center"><span class="ql-font-serif">Text content loading..</span></h2>`,
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image', 'video']
          ],
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          }
        }
      }
    }
  },
  methods: {
    onEditorBlur(editor) {
      // console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      // console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      // console.log('editor ready!', editor)
    }
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quill
    },
    contentCode() {
      return hljs.highlightAuto(this.content).value
    }
  },
}
</script>


<style lang="scss">
  $title-color: #002059;
  $value-color: #7A8CAB;
  $nav-btn-color: #1C70FE;
  $more-btn-color: #D8DDE3;

  .new-article {
    text-align: left;
    padding: 40px;

    &>div {
      width: 240px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;

      &>div {
        color: $title-color;
        font-size: 14px;
        line-height: 30px;
      }

      input {
        height: 30px;
        border: 1px solid $value-color;
        border-radius: 3px;
        font-size: 14px;
        line-height: 30px;
      }
    }

    .content {
      width: 800px;
      align-items: start;
      .quill-editor {
        border: none;
        width: 730px;
        height: auto;
        > code {
          width: 100%;
          margin: 0;
          padding: 1rem;
          border: 1px solid #ccc;
          border-top: none;
          border-radius: 0;
          height: 10rem;
          overflow-y: auto;
          resize: vertical;
        }
      }
    }
  }
</style>
