<template>
    <div id="thirdcomponent">
        <h1>I am third</h1>
        <a> written by {{ author }}</a>
        <p>{{$route.params.id}}</p>
        <input type="text" v-model.lazy="text">
        <p>{{text}}</p>
    </div>
</template>
<script type="text/javascript">
export default {
    data () {
        return {
            author: "allen79yu",
            text:""
        }
    }
}
</script>
<style>
</style>