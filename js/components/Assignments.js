import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },
    template: `
        <section class="flex gap-8">
            <assignment-list 
            :assignments="filters.inProgress" 
            title="In Progress"
            >
                <assignment-create @add="(a) => add(a)"></assignment-create>
            </assignment-list>
            <div v-show="showCompleted">
            <h3>Blah</h3>
                <assignment-list
                v-if="showCompleted"
                :assignments="filters.completed" 
                title="Completed" 
                can-toggle
                @toggle="showCompleted = !showCompleted"
                ></assignment-list>
            </div>
            
            
            
        </section>
        
    `,
    data() {
        return {
            assignments: [],
            showCompleted: true
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