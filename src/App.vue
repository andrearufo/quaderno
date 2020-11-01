<template>

    <div class="template">
        <Sidebar/>
        <Main/>
    </div>

</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Main from './components/Main.vue'

export default {
    name: 'App',
    components: {
        Sidebar,
        Main
    }
}
</script>

<style lang="scss">

    @import 'src/assets/style.scss';

</style>
