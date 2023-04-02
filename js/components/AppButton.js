export default {
    template: `
<button
    class="disabled:cursor-not-allowed"
    :disabled="processing"
    @click="processing = !processing"

><slot>My default button content</slot></button><br>
`,
    data() {
        return {
            processing: false
        }
    }
}