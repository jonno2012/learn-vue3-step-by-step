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
            assignments: [
                {id: 1, name: 'Finish a', complete: false, tag: 'math'},
                {id: 2, name: 'Finish b', complete: false, tag: 'science'},
                {id: 3, name: 'Finish c', complete: false, tag: 'math'}
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