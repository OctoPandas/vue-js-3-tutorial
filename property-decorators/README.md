## 使用基于类的 Vue 组件

类中的属性会被自动转换成响应式属性，如果是 getter 则会变成计算属性。

```ts
@Component
export default class Cart extends Vue {
  title: 'My cart'
  items: IGood[] = []
  get total() {
    return this.items.length
  }
}
```

如果需要发出事件那么调用一个函数即可，并且可以触发副作用：

```ts
class Cart {
  mounted() {
    this.$on('add-item', n => console.log(n))
    this.addItem(20)
  }
  @Emit()
  addItem(n: number) {
    // 副作用
  }
}
```

在这里 `@Emit()` 对 `addItem` 进行了后置通知，返回的参数是调用的参数。相当于：

```ts
_addItem(20)
function _addItem(n: number) {
  addItem(n) // 副作用
  $emit('add-item', n)
}
```

默认的事件名为被装饰的函数名称，也可以自定义：

```ts
@Emit('my-custom-event-name')
```

如果需要监听响应式属性的变化可以使用 `@Watch` 来监听某个属性：

```ts
class Cart {
  title = 'My cart'
  list: IGood[] = []
  @Watch('title')
  updateTitle(newTitle: string, oldTitle: string) {
    // 副作用
  }
  @Watch('title', { immediate: true, deep: true })
  refreshList(newList: IGood[], oldList: IGood[]) {
    // 可以深层监听每个属性的变化并立即触发
  }
}
```

声明属性：

```ts
class Person {
  @Prop(Number) age!: number
  @Prop({ default: 'Andy' }) name!: string
  @Prop([Number, String]) both!: number | string
}
```

这里有些冗余是因为，一个是在 JavaScript 中就可以定义的类型限制；而在 TypeScript 中推导需要额外的手段。

关于 `modal` 属性。`v-modal` 用于实现双向数据绑定，默认是关联组件内的 `value` 到 `v-modal` 的绑定值，更新是由于调用组件的时候传入一个函数来修改了本地的变量。

如果要实现非这二者的数据绑定，那么需要这样：

```ts
export default {
  modal: {
    prop: 'count', event: 'change'
  },
  props: {
    count: Number
  }
}
```

使用者：

```ts
<Counter v-modal="num" />
```

实际上修改变量的并非组件内部，而在组件外部。可等价于写法：

```ts
<Counter :count="num" @change="v => num = v" />
```

这样就和 React 类似了。

使用 TypeScript 的写法：

```ts
class Counter {
  @Modal('change', { type: Number }) count!: number
}
```

本质上来说 `v-modal` 就是绑定一个值到组件内部参数，然后再更新时发出事件。更新操作已经由模板编译器生成好了函数。

vue-property-decorator用法 - 简书
https://www.jianshu.com/p/d8ed3aa76e9b

