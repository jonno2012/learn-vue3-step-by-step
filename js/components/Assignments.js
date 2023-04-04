import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="assignments" title="In Progress"></assignment-list>
<!--            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>-->
            
            <assignment-create @add="(a) => add(a)"></assignment-create>
        </section>
        
    `,
    data() {
        return {
            assignments: [],
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
    },
    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments
            })
    }
}