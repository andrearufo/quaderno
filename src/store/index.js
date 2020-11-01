import { createStore } from 'vuex';
import _ from 'lodash';

export default createStore({
    state: {
        notes: [
            {
                id: 1,
                title: 'Andrea',
                time: '1987-11-01T06:22:18.502Z',
                content: 'Lorem ipsum'
            },{
                id: 2,
                title: 'Luigina',
                time: '1986-11-01T06:22:18.502Z',
                content: 'Dolem esseaat'
            },{
                id: 3,
                title: 'Rebecca',
                time: '2018-11-01T06:22:18.502Z',
                content: 'Dolem esseaat'
            }
        ]
    },
    mutations: {
        // add a note
        addNote(state, note){
            state.notes.push(note);
            console.log('Add!');
        },

        // delete a note
        deleteNote(state, note){
            state.notes.splice(note, 1);
            // FIXME: se le note sono riordinate non funziona
            console.log('Delete!');
        },

        // // select a note
        // selectNote(state, note){
        //
        // }
    },
    actions: {
        // read

        // save

        // create

        // delete
    },
    modules: {
    },
    getters: {
        listNote(state){
            return _.orderBy(state.notes, 'time');
        },

        selectedNote(state){
            var list = _.orderBy(state.notes, 'time');
            return _.head(list);
        }
    }
})
