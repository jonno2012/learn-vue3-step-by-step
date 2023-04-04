export default {
    template:`
        <div :class="{
        'p-4 border rounded-lg': true,
        'bg-white border-gray-300 text-black' : theme === 'light',
        'border-gray-600 bg-gray-700 text-white' : theme === 'dark'
        }"
        >
            <h2 v-if="$slots.heading" class="font-blue">
                <slot name="heading" />
            </h2>
            <slot />
            
            <footer v-if="$slots.footer"><slot name="footer" /></footer>
        </div>
        
        
    `,
    props: {
        heading: String,
        theme: {type: String, default: 'dark'}
    }
}