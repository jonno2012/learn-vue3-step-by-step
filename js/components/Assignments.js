import AssignmentList from "./AssignmentList.js";
export default {
    components: {
        AssignmentList
    },
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
            
            
            <form @submit.prevent="add"> <!-- prevent e.preventDefault() -->
            <div class="border-gray-600">
                <input v-model="newAssignment" type="text" placeholder="Nwe Assignment" class="text-black">
                <button type="submit" class="bg-white text-black p-2 border-l">Add</button>
            </div>
            
</form>
        </section>
        
    `,
    data() {
        return {
            assignments: [
                {id: 1, name: 'Finish a', complete: true},
                {id: 2, name: 'Finish a', complete: false},
                {id: 3, name: 'Finish a', complete: false}
            ],
            newAssignment: ''
        }
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete),

            }
        }
    },
    methods: {
        add() {
            this.assignments.push({name: this.newAssignment, id: this.assignments.length+1, complete: false})
            this.newAssignment = ''
        }
    }
}