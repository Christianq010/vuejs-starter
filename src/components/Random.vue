<template>
    <div>
        <p> {{ $prismic.richTextAsPlain(fields.title) }} </p>
        <div v-for="field in fields" v-bind:key="field.uid"> 
            <p>{{url}}</p>
            <p> {{field.title}} </p>
            <p></p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['fields'],
}
</script>
