<template>
    <div class="grid-container">

        <div class="sidebar">

            <NotesSidebar/>

        </div>
        <div class="header">

            <NotesHeader/>

        </div>
        <div class="main">

            <router-view/>

        </div>

    </div>
</template>


<script>
import NotesSidebar from '@/components/NotesSidebar.vue'
import NotesHeader from '@/components/NotesHeader.vue'

export default {
    components: {
        NotesSidebar,
        NotesHeader
    }
}
</script>

<style lang="scss">

@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap');

body{
    font-family: 'Source Code Pro', monospace;
    font-size: 16px;
}

.grid-container {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 60px 1fr;
    gap: 10px 10px;
    grid-template-areas:
    "sidebar header"
    "sidebar main";
}

.sidebar{
    grid-area: sidebar;
    background: #eee;
}

.header{
    grid-area: header;
    background: #ddd;
}

.main{
    grid-area: main;
}

</style>
