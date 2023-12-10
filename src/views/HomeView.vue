<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    aboutUs() {
      this.closeDialog();
    }
  }
}
</script>

<template>
  <div id="start"></div>
  <v-container class="bg-image">
    <div>
      <h1 class="introduce">

      </h1>

      <v-btn 
        to="/playlist"
        transition="slide-x-transition"
        size="x-large"
        height='72'
        variant="elevated"
        append-icon="mdi-arrow-right-bold"
        color="green"
        rounded="xl"
        >
        Перейти к видео-урокам
      </v-btn>
      <a href="#path" style="text-decoration: none;">
        <v-btn 
          transition="slide-x-transition"
          size="x-large"
          height='72'
          variant="outlined"
          append-icon="mdi-arrow-down-bold"
          color="green"
          rounded="xl"
          block
          style="margin-right: 20px; margin-top: 20px;"
          >
          О нас
        </v-btn>
      </a>
    </div>

    <!-- <v-dialog
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
          <a href="#path" style="color: black; text-decoration: none;">
            <v-btn
            variant="elevated"
            color="green"
            @click="aboutUs"><a href="#path" style="color: black; text-decoration: none;">О нас</a>
            </v-btn>
          </a>
          <v-btn variant="elevated" color="gray" @click="closeDialog">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
    
  </v-container>
  <div class="introduce__content">
    <h1 id="path">
      SIMPLE PHYSICS
    </h1>
    <p>
      Добро пожаловать! Перед вами проект Московского политехнического университета по направлению 'Естесственные науки'! Данная разработка представляет собой образовательную платформу, посвященную изучению основ физики. Она включает в себя интерактивные уроки и видео, которые помогают учащимся лучше понять и визуализировать сложные физические концепции
    </p>
  </div>
  <v-container>
    <v-timeline>
      <v-timeline-item>
        <template v-slot:opposite>
          <h2>Разработчик</h2>
        </template>
        <div>
          <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            src="src/images/Lev.png"
          ></v-img>
        </div>
        <div>
          <div class="text-h6">Лев</div>
          <p>
            1 Курс
          </p>
          <p>
            Факультет информационных технологий
          </p>
          <p>
            Информатика и вычислительная техника.
          </p>
          <p>
            Системная и программная инженерия (231-3213)
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          <h2>Куратор</h2>
        </template>
        <div>
          <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            src="src/images/2.png"
          ></v-img>
        </div>
        <div>
          <div class="text-h6">Светлана</div>
          <p>
            Ассистент Центра проектной деятельности
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          <h2>Участник</h2>
        </template>
        <div>
          <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            src="src/images/1.png"
          ></v-img>
        </div>
        <div>
          <div class="text-h6">Анастасия</div>
          <p>
            1 Курс
          </p>
          <p>
            Машиностроительный Факультет
          </p>
          <p>
            Управление в технических системах(231-251)
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          <h2>Участник</h2>
        </template>
        <div>
          <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            src="src/images/5_1.png"
          ></v-img>
        </div>
        <div>
          <div class="text-h6">Василиса</div>
          <p>
            1 Курс
          </p>
          <p>
            Полиграфический институт  
          </p>
          <p>
            Технология полиграфического и упаковочного производства
          </p>
          <p>
            Дизайн и технологии производства визуального контента (231-722)
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          <h2>Участник</h2>
        </template>
        <div>
          <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            src="src/images/4.png"
          ></v-img>
        </div>
        <div>
          <div class="text-h6">Ирина</div>
          <p>
            1 Курс
          </p>
          <p>
            Полиграфический институт 
          </p>
          <p>
            Дизайн и проектирование мультимедиа и визуального контента 
          </p>
          <p>
            Технология полиграфического и упаковочного производства (231-721)
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          <h2>Участник</h2>
        </template>
        <div>
          <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            src="src/images/7_1.png"
          ></v-img>
        </div>
        <div>
          <div class="text-h6">Мерген</div>
          <p>
            1 Курс
          </p>
          <p>
            Факультет химической технологии и биотехнологии
          </p>
          <p>
            Техносферная безопасность (231-511)
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          <h2>Участник</h2>
        </template>
        <div>
          <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            src="src/images/6_1.png"
          ></v-img>
        </div>
        <div>
          <div class="text-h6">Артем</div>
          <p>
            1 Курс
          </p>
          <p>
            Машиностроительный Факультет
          </p>
          <p>
            Управление в технических системах (232-251)
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>

  <v-container>
      <a href="#start" style="color: white; text-decoration: none;">
        <v-btn block>Наверх</v-btn>
      </a>
  </v-container>

</template>

<style scoped>
.bg-image {
    height: 100vh;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: 
      linear-gradient(rgba(0,0, 0, 0.7), rgba(0, 0, 0, 0.8)), 
      url(src/images/earth.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top; 
}

.mascot {
  display: flex;
  justify-content: center;
  align-items: center;
}


.introduce {
  text-align: center;
  opacity: 1;
  font-size: 50px;
}

.introduce__content {
  text-align: center;
  padding: 20px 15px;
}

.introduce__btn {
  display: block;
}
</style>
