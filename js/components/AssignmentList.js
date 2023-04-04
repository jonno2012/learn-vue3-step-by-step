import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
    template: `
    <panel v-show="show && assignments.length" class="w-60">
    
    <div class="flex justify-between items-start">
    
    <h2 class="font-bold mb-2">
        {{ title }} ({{ assignments.length }})
    </h2>
    
    <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
    
</div>
    
   <assignment-tags
   v-model:currentTag="currentTag"
    :initital-tags="assignments.map(a => a.tag) " 
    ></assignment-tags>
    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
      <assignment
        v-for="assignment in filteredAssignments"
        :key="assignment.id"
        :assignment="assignment"
      ></assignment>
    </ul>
    <slot></slot>
    
    <template #footer>My footer goes here</template> <!-- # is an alias for v-slot -->
  </panel>
`,
    props: {
        assignments: Array,
        title: String,
        canToggle: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            currentTag: 'all',
            show: true
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
        AssignmentTags,
        Panel
    }
}