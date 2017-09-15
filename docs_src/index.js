import Vue from 'vue'
import emoji from 'node-emoji'
import base64url from 'base64-url'

const PARAM_NAME_TEXT = 't'

const App = {
  data() {
    return {
      inputValue: 'i :heart: emoji',
    }
  },
  computed: {
    output() {
      return emoji.emojify(this.inputValue)
    },
  },
  methods: {
    restore() {
      const hash = window.location.hash.slice(1)
      if (!hash) return

      const params = new URLSearchParams(hash)
      if (!params.has(PARAM_NAME_TEXT)) return

      this.inputValue = base64url.decode(params.get(PARAM_NAME_TEXT))
    },
    onInput(e) {
      this.inputValue = e.target.value
    },
    onClickClearButton() {
      this.inputValue = ''
    },
    onClickSaveButton() {
      const params = new URLSearchParams()
      params.set(PARAM_NAME_TEXT, base64url.encode(this.inputValue))
      window.location.hash = params.toString()
    },
  },
  created() {
    this.restore()
  },
  render() {
    const {
      inputValue,
      onInput,
      onClickClearButton,
      onClickSaveButton,
      output,
    } = this

    return (
      <div>
        <h1>Realtime Emojify</h1>

        <div class="input">
          <textarea onInput={onInput} value={inputValue} rows={4}></textarea>
          <button type="button" onClick={onClickClearButton}>クリア</button>
          <button type="button" onClick={onClickSaveButton}>URLに保存</button>
          <a href="https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json" target="_blank">絵文字一覧</a>
        </div>

        <div class="output">{output}</div>
      </div>
    )
  },
}

const app = new Vue(App)
app.$mount('#app')
