export default {
    template:
    `
    <li>
        <label class="p-2">
          {{ assignment.name}}
        </label>

        <input type="checkbox" v-model="assignment.complete" class="ml-2">
      </li>
`,
    props: {
        assignment: {
            type: Object
        }
    }
}