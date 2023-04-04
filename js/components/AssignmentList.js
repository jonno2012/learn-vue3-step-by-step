import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    template: `
    <section v-show="assignments.length">
    <h2 class="font-bold mb-2">
        {{ title }} ({{ assignments.length }})
    </h2>
   <assignment-tags
   v-model:currentTag="currentTag"
    :initital-tags="assignments.map(a => a.tag) " 
    ></assignment-tags>
    <ul class="border border-gray-600 divide-y divide-gray-600 pr-2 mt-6">
      <assignment
        v-for="assignment in filteredAssignments"
        :key="assignment.id"
        :assignment="assignment"
      ></assignment>
    </ul>
  </section>
`,
    props: {
        assignments: Array,
        title: String
    },
    data() {
        return {
            currentTag: 'all'
        }
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))] // a way to create a set of items where each item must be unique
        },
        filteredAssignments() {

            if (this.currentTag === 'all') {
                return this.assignments
            }

            return this.currentTag
                ? this.assignments.filter((a) => {
                    return a.tag === this.currentTag
                })
                : this.assignments
        }
    },
    components: {
        Assignment,
        AssignmentTags
    }
}