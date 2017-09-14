import Vue from 'vue'
import emoji from 'node-emoji'

const App = {
  data() {
    return {
      inputValue: 'i :heart: emoji',
    }
  },
  methods: {
    onInput(e) {
      this.inputValue = e.target.value
    },
    onClickClearButton() {
      this.inputValue = ''
    },
  },
  computed: {
    output() {
      return emoji.emojify(this.inputValue)
    },
  },
  render() {
    const {
      inputValue, onInput, onClickClearButton, output,
    } = this

    return (
      <div>
        <h1>Realtime Emojify</h1>

        <div class="input">
          <textarea onInput={onInput} value={inputValue} rows={4}></textarea>
          <button type="button" onClick={onClickClearButton}>クリア</button>
          <a href="https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json" target="_blank">絵文字一覧</a>
        </div>

        <div class="output">{output}</div>
      </div>
    )
  },
}

const app = new Vue(App)
app.$mount('#app')
