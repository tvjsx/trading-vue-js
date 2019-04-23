<template>
    <div>
        <div id="test-title">
            <h1>Simple.vue</h1>
            <p>Should display everything okay</p>
            <a href="#" class="next-test-btn">Next test ></a>
        </div>
        <div id="test-container">
            <simple></simple>
        </div>
    </div>
</template>

<script>
import Simple from './tests/Simple.vue'

export default {
    name: 'app',
    components: {
        Simple
    }
};
</script>

<style>
html,
body {
    background-color: #323338;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
#test-title{
    position: absolute;
    height: 50px;
    color: #ddd;
    width: 100%;
}

#test-container{
    position: absolute;
    top: 50px;
}
#test-title h1 {
    color: #ddd;
    margin: 5px 0 0 10px;
}
#test-title p {
    position: absolute;
    width: 100%;
    top: -2px;
    text-align: center;
    font-size: 1.05em;
}

.next-test-btn {
    top: 10px;
    position: absolute;
    right: 10px;
	background-color:#44c767;
	-moz-border-radius:28px;
	-webkit-border-radius:28px;
	border-radius:28px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:5px 17px;
	text-decoration:none;
    text-shadow:0px 1px 0px #2f6627;
}
.next-test-btn:hover {
	background-color:#44c767;
}
.next-test-btn:active {
	top: 11px;
}


</style>
