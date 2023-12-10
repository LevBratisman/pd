<template>
  <v-app>
    <!-- App toolbar -->
    <v-toolbar density="compact" color="grey-darken-4">

      <v-toolbar-title>{{ toolbar_title }}</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <!-- Bottom navigation -->
    <v-bottom-navigation
      v-model="value"
      color="green"
      grow
    >
      <v-btn to="/about" @click="changeToolbarTitle('SIMPLE PHYSICS')">
        <v-icon>mdi-information</v-icon>

        О нас
      </v-btn>

      <v-btn to="/playlist" @click="changeToolbarTitle('Видео-уроки')">
        <v-icon>mdi-playlist-play</v-icon>

        Видео
      </v-btn>

      <v-btn to="/calendar" @click="changeToolbarTitle('Календарь')">
        <v-icon>mdi-calendar</v-icon>

        Календарь
      </v-btn>

    </v-bottom-navigation>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card style="padding: 20px; border-radius: 20px;" variant="flat" color="dark-indigo" class="Mascot-wrapper">
        <v-card-text class="mascot">
          <h2>Добро пожаловать в SIMPLE PHYSICS!</h2>
          <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            src="src/images/Mascot.png"
          ></v-img>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <a href="#path" style="color: black; text-decoration: none;">
            <v-btn
            variant="elevated"
            color="green"
            @click="aboutUs"><a href="#path" style="color: black; text-decoration: none;">О нас</a>
            </v-btn>
          </a> -->
          <v-btn variant="elevated" color="gray" @click="this.dialog = false">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-main>
      <RouterView />
    </v-main>

    <div id="path"></div>
  </v-app>
  
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    return {
      value: 1,
      toolbar_title: 'SIMPLE PHYSICS',
      dialog: true
    }
  },
  methods: {
    changeToolbarTitle(current_title) {
      this.toolbar_title = current_title;
    }
  }
}
</script>

<style>
.mascot {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
