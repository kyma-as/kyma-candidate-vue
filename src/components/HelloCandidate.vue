<template>
    <div>
        <v-col>
            <v-sheet class="elevation-12 pa-2">
                <v-img src="../assets/logo.png"></v-img>
            </v-sheet>
        </v-col>
        <v-col>
            <v-card class="elevation-12">
                <v-card-title>
                    Great! You got it working...
                </v-card-title>

                <v-card-text>
                    <v-alert type="warning" border="left" elevation="2" colored-border>
                        ...but looks like our YouTube Search is down
                        <v-icon>mdi-emoticon-cry-outline</v-icon><br/>
                    </v-alert>
                </v-card-text>
            </v-card>
        </v-col>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({ name: "HelloCandidate" })
    export default class HelloCandidate extends Vue {}
</script>
