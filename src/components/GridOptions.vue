<template>
  <div class="grid-options">
    <button class="btn" @click="toggleGrid">{{ buttonText }}</button>
    <button class="btn">U</button>
    <button class="btn">D</button>
  </div>
</template>

<script>
export default {
  name: 'GridOptions',
  data() {
    return {
      buttonText: 'E'
    };
  },
  methods: {
    toggleGrid() {
      this.buttonText = this.buttonText === 'E' ? 'F' : 'E';
      this.$emit('toggle-grid', this.buttonText);
    }
  }
}
</script>

<style scoped>
.grid-options {
  display: flex;
  width: auto;
}

.btn {
  background: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 10px;
  transition: background 0.3s, border-color 0.3s;
  font-size: 14px;
}

.btn:hover {
  background: #e0e0e0;
  border-color: #aaa;
}

.btn:active {
  background: #d0d0d0;
  border-color: #888;
}
</style>
