<template>
    <div class="main">

        <time>{{ note.time }}</time>
        <h1>
            <small>#{{ note.id }}</small>
            {{ note.title }}
        </h1>

        <div>{{ note.content }}</div>

    </div>
</template>

<script>
export default {
    name: 'Main',

    computed: {
        note(){
            return this.$store.getters.selectedNote;
        }
    }
}
</script>
