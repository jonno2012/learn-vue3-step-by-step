import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
            
            <assignment-create @add="(a) => add"></assignment-create>
        </section>
        
    `,
    data() {
        return {
            assignments: [
                {id: 1, name: 'Finish a', complete: true},
                {id: 2, name: 'Finish a', complete: false},
                {id: 3, name: 'Finish a', complete: false}
            ],
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
        add(a) {
            this.assignments.push({
                name: a,
                id: this.assignments.length + 1,
                complete: false
            })
        }
    }
}