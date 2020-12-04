<template>
<div class="tvjs-spinner">
    <div v-for="i in 4" :key="i" :style="{background: colors.text}">
    </div>
</div>
</template>
<script>
export default {
    name: 'Spinner',
    props: ['colors']
}
</script>
<style>
.tvjs-spinner {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 16px;
    margin: -4px 0px -1px 0px;
    opacity: 0.7;
}

.tvjs-spinner div {
    position: absolute;
    top: 8px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    animation-timing-function: cubic-bezier(1, 1, 1, 1);
}

.tvjs-spinner div:nth-child(1) {
    left: 2px;
    animation: tvjs-spinner1 0.6s infinite;
    opacity: 0.9;
}

.tvjs-spinner div:nth-child(2) {
    left: 2px;
    animation: tvjs-spinner2 0.6s infinite;
}

.tvjs-spinner div:nth-child(3) {
    left: 9px;
    animation: tvjs-spinner2 0.6s infinite;
}

.tvjs-spinner div:nth-child(4) {
    left: 16px;
    animation: tvjs-spinner3 0.6s infinite;
    opacity: 0.9;
}

@keyframes tvjs-spinner1 {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes tvjs-spinner3 {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
    }
}

@keyframes tvjs-spinner2 {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(7px, 0);
    }
}
</style>
