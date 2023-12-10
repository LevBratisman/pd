<template>
    <v-container class="bg-image" style="display: block; text-align: center;">
        <div style="margin-top: 20px;">
            <p style="font-size: 20px;">
                Наше приложение КАЛЕНДАРЬ поможет вам отслеживать уровень мощности магнитных бурь в реальном времени!
            </p>
            <p style="font-size: 20px; margin-bottom: 40px;">
                Нажмите на кнопку снизу для скачивания
            </p>
        </div>
        <v-container>
            <a href="https://disk.yandex.ru/d/Q-lUfLw9pHPcMA" target="_blank" style="text-decoration: none; display: block;">
                <v-btn prepend-icon="mdi-download" size="x-large" variant='outlined'>
                    Скачать
                </v-btn>
            </a>
        </v-container>
    </v-container>
  </template>
  
  
  <script>
  export default {
      data() {
          return {
            
          }
      }
  }
  </script>
  
  <style scoped>
  .bg-image {
      min-height: 100%;
      min-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      background: 
        linear-gradient(rgba(0,0, 0, 0.7), rgba(0, 0, 0, 0.8)), 
        url(src/images/back.jpeg);
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: top; 
  }
  </style>