<template>
    <div id="firstcomponent">
        <h1>I am a title.</h1>
        <a> written by {{ author }} {{msg}}</a>
    </div>
</template>
<script type="text/javascript">
export default {
    data () {
        return {
            author: "allen79yu"
        }
    },
    props:['msg']
}
</script>
<style>
</style>