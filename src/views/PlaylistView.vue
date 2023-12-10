<template>
  <v-container class="bg-image">
    <v-card color="black">
      <div class="d-flex flex-row">

        <v-tabs
          v-model="tab"
          direction="vertical"
          color="green"
        >
          <v-tab value="option-1">
            <v-icon start>
                mdi-circle-small
            </v-icon>
            Урок 1
          </v-tab>
        </v-tabs>

        <v-window v-model="tab">

          <v-window-item value="option-1">
            <v-card flat color="black">
              <v-card-text>
                <div style="padding: 20px;">
                  <h1>
                    Магнитное поле Земли
                  </h1>
                </div>
                <div>
                    <iframe frameborder="0" width="560" height="315" src="https://www.youtube.com/embed/9_lWBxcWbIU?si=60BkOAHQk1I3tZVW" allowfullscreen>
                    </iframe>
                </div>
              </v-card-text>
            </v-card>
          </v-window-item>
          
        </v-window>
      </div>
    </v-card>
  </v-container>
</template>


<script>
export default {
    data() {
        return {
            posts: [
                {   
                    id: 1,
                    title: 'first video',
                    describtion: 'this video about magnetism',
                    value: 'option-1'
                },
                {   
                    id: 2,
                    title: 'second video',
                    describtion: 'this video about magnetism',
                    value: 'option-2' 
                },
                {   
                    id: 3,
                    title: 'third video',
                    describtion: 'this video about magnetism' ,
                    value: 'option-3'
                }
            ],
            tab: 'option-1'
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