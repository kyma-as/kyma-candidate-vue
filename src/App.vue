<template>
    <v-app>
        <v-navigation-drawer
            v-model="showMenu"
            app
            >
            <v-list dense v-if="!showMenu">
                <v-list-item link to="/">
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/YouTube">
                    <v-list-item-action>
                        <v-icon>mdi-youtube</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>YouTube Search</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            </v-navigation-drawer>

            <v-app-bar
                app
                color="indigo"
                dark
                >
                <v-app-bar-nav-icon @click.stop="showMenu = !showMenu"></v-app-bar-nav-icon>
                <v-toolbar-title>Kyma Candidate Assignment</v-toolbar-title>
            </v-app-bar>

        <v-main>
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <router-view></router-view>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        name: "App"
    })
    export default class App extends Vue {
        showMenu: boolean = false;
    }
</script>
