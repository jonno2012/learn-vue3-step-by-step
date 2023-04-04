import Assignment from "./Assignment.js";
export default {
    template: `
    <section v-show="assignments.length">
    <h2 class="font-bold mb-2">
        {{ title }} ({{ assignments.length }})
    </h2>
    
    <div class="flex gap-2">
    <div v-for="tag in tags" >
    <button 
    @click="currentTag = tag"
    class="border rounded px-1 py-px text-xs"
    :class="{
        'border-blue-500 text-blue-500': tag === currentTag
    }"
    >{{ tag }}</button>
</div>
    
</div>
    <ul class="border border-gray-600 divide-y divide-gray-600 pr-2 mt-6">
      <assignment
        v-for="assignment in filteredAssignments"
        :key="assignment.id"
        :assignment="assignment"
      ></assignment>
    </ul>
  </section>
`,
    data() {
      return {
          currentTag: ''
      }
    },
    props: {
        assignments: Array,
        title: String
    },
    computed: {
      tags() {
          return ['all', ...new Set(this.assignments.map(a => a.tag))] // a way to create a set of items where each item must be unique
      },
        filteredAssignments() {

            if(this.currentTag === 'all') {
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
        Assignment
    }
}