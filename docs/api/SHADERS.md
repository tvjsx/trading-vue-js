# Inline Shaders API

 Inline shaders can be used to draw stuff on top of the sidebar and botbar. The inline shader is a simple object that should be emitted **once** from your overlay:

```js
class Shader {
    constructor(target, draw, name) {
        this.target = target // Where to apply ('sidebar|botbar')
        this.draw = draw  // arrow function ctx => {}
        this.name = name // optional
        this.id = null // Generated automatically
    }
}

// In you overlay:
this.$emit('new-shader', new Shader('sidebar', ctx => {...}))

// Or simply
this.$emit('new-shader', {
    target: 'sidebar',
    draw: ctx => {...}
})
```

As you can see, here we use an arrow function. This is why the shader is called *inline*, it has access to multiple contexts. For example, if you need to draw something on the bottom bar, and you also want to use your main overlay's layout, here is a way to implement this:

```js
// init() called once
init() {
    let layout = this.$props.layout
    let t = 1577836800000

    this.$emit('new-shader', {
        target: 'botbar',
        // ctx is a context of the bottom bar
        draw: ctx => {
            let x = layout.t2screen(t)
            let w = ctx.canvas.width  // botbar width
            let h = ctx.canvas.height // botbar height
            /* draw x with Canvas API */
        }
    })
}
```

It is also possible to dynamically pull data from your main overlay:

```js
init() {
    let layout = this.$props.layout

    this.$emit('new-shader', {
        target: 'botbar',
        draw: ctx => {
            let x = layout.t2screen(this.time())
            /* draw x with Canvas API */
        }
    })
},
time() {
    return 1577836800000
}
```

Both `sidebar` and `botbar` shaders updated and removed automatically by the lib.

## Background Shaders

Very similar to the inline type, but use `props` as a data source.

```js
export default class BackShader {

    constructor() {
        this.target = 'grid' // Where to apply ('sidebar|botbar|grid')
        this.name = 'BackShader'
        this.id = 'BackShader'
        this.zIndex = -1 // Order
        this.owner = null // Skin / extension (set automatically)
    }

    draw(ctx, props) {
        // props contains (for main grid):
        // { layout, range, interval tf, cursor,
        // colors, sub, font, config, meta }
        // (for sidebar & botbar):
        // { layout, cursor }
    }
}
```
