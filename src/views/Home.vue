<template>
      <v-row>
        <v-col cols="6" offset="3" lg="4" offset-lg="4">
            <HelloWorld />
          </v-col>
      </v-row>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import HelloCandidate from "@/components/HelloCandidate.vue";

    @Component({
        name: "Home",
        components: { HelloCandidate }
    })
    export default class Home extends Vue {}
</script>
