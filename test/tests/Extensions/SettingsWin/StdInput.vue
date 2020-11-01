<template>
    <span>
        <input v-if="type==='text' || !type"
            :value="value" class="std-input" :style="style"
            :placeholder="name"
            @change="$emit('change', $event.target.value)"
            @input="$emit('input', $event.target.value)">
        <select v-else-if="type==='select'"
            class="std-input" :style="style"
            :value="value"
            @input="$emit('input', $event.target.value)">
            <option v-for="opt in list">{{opt}}</option>
        </select>
    </span>
</template>

<script>
export default {
    name: 'StdInput',
    props: ['value', 'name', 'type', 'list', 'colors'],
    methods: {},
    computed: {
        style() {
            return {
                //background: this.$props.colors.back,
                //color: this.$props.colors.text
            }
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style>
.std-input {
    margin: 5px;
    background-color: #161b27;
    border: 1px dotted #353940;
    height: 22px;
    border-radius: 3px;
    padding: 2px 0px 3px 10px;
    color: whitesmoke;
    font-size: 1.2em;
    outline: none;
    width: 100px;
}

select.std-input {
    height: 29px;
    -moz-appearance: none;

}

select.std-input  {
    //display: none; /*hide original SELECT element: */
}


.std-input::placeholder {
    color: #8e909a;
    opacity: 0.25;
}
</style>
