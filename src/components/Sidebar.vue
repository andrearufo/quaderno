<template>
    <div class="sidebar">
        
        <Actions/>

        <ul>
            <li v-for="note in notes" :key="note.id">

                <button class="select" type="button" @click="selectNote(note)">
                    #{{ note.id }}, {{ note.title }}
                    <time>{{ note.time }}</time>
                </button>

                <button class="delete" type="button" @click="deleteNote(note)">Delete</button>

            </li>
        </ul>


    </div>
</template>

<script>
import Actions from '../components/Actions.vue'

export default {
    name: 'Sidebar',

    components: {
        Actions
    },

    computed: {
        notes() {
            return this.$store.getters.listNote;
        }
    },

    methods: {
        deleteNote(note){
            if( confirm('Are you sure?') ){
                this.$store.commit('deleteNote', note);
            }
        },

        selectNote(note){
            this.$store.commit('selectNote', note);
        }
    }
}
</script>
