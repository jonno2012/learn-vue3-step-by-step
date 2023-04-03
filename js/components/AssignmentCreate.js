export default {
    template: `
                <form @submit.prevent="add"> <!-- prevent e.preventDefault() -->
                    <div class="border-gray-600">
                        <input v-model="newAssignment" type="text" placeholder="Nwe Assignment" class="text-black">
                        <button type="submit" class="bg-white text-black p-2 border-l">Add</button>
                    </div>
             </form>`,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment)
            this.newAssignment = ''
        }
    }
}