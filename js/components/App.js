import Assignments from "./Assignments.js";
import Panel from "./Panel.js";
export default {
    components: {
        Assignments,
        Panel
    },
    template: `
<div class="grid gap-6">
<assignments></assignments>

       <panel>
           <template v-slot:heading>My heading slot</template>
        </panel>
        
               <panel>
           <template v-slot:default>Default slot</template>
           <template v-slot:heading>My heading slot</template>
        </panel>
        
       <panel>
           <template v-slot:footer>A footer thing</template>
        </panel>
        
           <panel theme="light">
           <template v-slot:heading>I am using the light theme</template>
        </panel>
</div>
        
    `
};