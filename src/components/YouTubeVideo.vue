<template>
    <v-list-item link :href="linkUrl" target="_blank">
        <v-list-item-avatar size="100">
            <v-img :src="imageSrc"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-subtitle v-text="description"></v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script lang="ts">
    import { Component, Model, Vue } from "vue-property-decorator";
    import config from "@/config";
    // import actions from "@/actions";

    @Component({ name: "YouTubeVideo" })
    export default class YouTubeVideo extends Vue {
        @Model() video!: any;

        title: any = "";
        imageUrl: any = "";
        description: any = "";
        id: any = "";
        linkUrl: any = "";

        mounted() {
            this.title = this.video.snippet.title;
            this.imageUrl = this.video.snippet.thumbnails.default.src;
            this.description = this.video.snippet.description;
            this.id = this.video.id.videoId;
            this.linkUrl = config.youtubeWatchBaseUrl + this.id;
        }

        // viewEmbedded() {
        //     var videoId = this.id.substring(this.id.lastIndexOf("/") + 1);
        //     var embedUrl = config.youtubeEmbedBaseUrl + videoId;
        //     actions.showVideoModal.dispatch({src: embedUrl, height: 400, width: 300});
        // }
    }
</script>
