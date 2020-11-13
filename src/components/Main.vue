<template>
    <div class="main">

        <small>#{{ note.id }}</small>
        <time>{{ note.time }}</time>

        <button type="button" name="button">Save</button>

        <input class="title" type="text" name="title" v-model="note.title">

        <textarea class="content" name="content" v-model="note.content"></textarea>

    </div>
</template>

<script>
export default {
    name: 'Main',

    computed: {
        note(){
            return this.$store.getters.selectedNote;
        }
    },

    watch: {

    }
}
</script>
