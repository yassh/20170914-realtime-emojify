import Vue from 'vue'

const Counter = {
  props: {
    step: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    decrease() {
      this.count -= this.step
    },
    increase() {
      this.count += this.step
    },
  },
  render() {
    const {
      step, count, increase, decrease,
    } = this

    return (
      <div>
        <button type="button" onClick={decrease}>-{ step }</button>
        { count }
        <button type="button" onClick={increase}>+{ step }</button>
      </div>
    )
  },
}

const App = {
  data() {
    return {
      message: 'こんにちは！',
      items: ['Alpha', 'Beta', 'Gamma'],
      inputValue: '',
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.items.push(this.inputValue)
      this.inputValue = ''
    },
    onInput(e) {
      this.inputValue = e.target.value
    },
  },
  render() {
    const {
      message, items, inputValue, onInput, onSubmit,
    } = this

    return (
      <div>
        <p>{ message }</p>

        <Counter />
        <Counter step={10} />

        <form onSubmit={onSubmit}>
          <input type="text" onInput={onInput} value={inputValue} />
          <input type="submit" value="Add" />
        </form>

        { items.length &&
          <ul>
            { items.map((item, i) => (
              <li key={i}>{ item }</li>
            ))}
          </ul>
        }
      </div>
    )
  },
}

const app = new Vue(App)
app.$mount('#app')
