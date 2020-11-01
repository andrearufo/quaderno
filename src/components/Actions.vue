<template>
    <div class="actions">

        <input type="search" name="search" v-model="search" placeholder="Search...">

        <button class="addnote" type="button" @click="addNote()">
            +
        </button>

    </div>
</template>

<script>
export default {
    name: 'Actions',

    data(){
        return {
            search: ''
        }
    },

    methods: {
        addNote(){
            var newNote = {
                title: 'The new note',
                time: new Date(),
                content: ''
            };

            this.$store.commit('addNote', newNote);
        }
    }
}
</script>
