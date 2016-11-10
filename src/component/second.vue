<template>
    <div id="secondcomponent">
        <h1>I am another page</h1>
        <a> written by {{ author }} </a>
        <p> !!!!! </p>
        <ul>
            <li v-for="article in articles">
                {{article.title}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data:function() {
        return {
            author: "allen79yu",
            articles: [],
        }
    },
    created:
    function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {
        },
        emulateJSON: true
    }).then(function(response) {
        this.articles = response.data.subjects;
    }, function(response) {
        console.log(response);
    });
  }
}
</script>
<style>
</style>