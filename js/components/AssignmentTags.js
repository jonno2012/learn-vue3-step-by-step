export default {
    template: `
    <div class="flex gap-2">
    <div v-for="tag in tags" >
    <button 
    @click="$emit('update:currentTag', tag)"
    class="border rounded px-1 py-px text-xs"
    :class="{
        'border-blue-500 text-blue-500': tag === currentTag
    }"
    >{{ tag }}</button>
</div>
    
</div>
    `,
    props: {
        inititalTags: Array,
        currentTag: String
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.inititalTags)] // a way to create a set of items where each item must be unique
        }
    }
}