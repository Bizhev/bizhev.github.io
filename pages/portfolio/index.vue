<template>
  <div>
    <v-navigation-drawer
      v-if="true"
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"      
      app
    >
      <v-list
        dense
        class="grey lighten-4"
      >      
        <v-layout
          align-center
        >
          <v-flex xs12>
            <v-subheader>
              Фильтр 
            </v-subheader>
          </v-flex>
        </v-layout>
        
        <v-divider
          class="my-1"
        />
        <v-container fluid>
          <!-- <v-checkbox 
            v-model="searchSettings.algoritm"
            :label="`Решение алгоритмических задач `" 
          />
          <v-checkbox 
            v-model="searchSettings.end"
            :label="`Закончекные проекты `" 
          />
          <v-checkbox 
            v-model="searchSettings.interes"
            :label="`Интерестные приемы `" 
          />
          <v-checkbox 
            v-model="searchSettings.verstka"
            :label="`Верстка `" 
          />
          <v-checkbox 
            v-model="searchSettings.all"
            :label="`Показать всё`" 
          /> -->
          <v-flex 
            d-flex
          >
            <v-select
              v-model="yselect"
              :items="searchSettingsItems"
              label="Показать"              
              outline
              item-text="tText"
              item-value="tValue"              
              @change="setSelected(yselect)"
            />
          </v-flex>
        </v-container>        
      </v-list>
    </v-navigation-drawer>

    <v-toolbar 
      dark 
      color="blue-grey"
      app 
      clipped-left
      fixed
    >
      <v-toolbar-side-icon 
        v-if="true" 
        @click.native="drawer = !drawer"
      />

      <span class="title ml-3 mr-5">
        Портфолио
      </span>

      <Search @handleKeyword="setKeyword" />      

      <v-spacer />

      <v-menu 
        offset-y
      >
        <v-btn
          slot="activator"
          class="hidden-xs-only"
        >
          Скачать резюме
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="(item, index) in downloadResumeFormats"
            :key="index"
          >
            <v-btn
              :href="item.href"
              color="blue-grey"
              class="white--text"      
            >
              {{ item.title }}

              <v-icon 
                right 
              >
                cloud_download
              </v-icon>
            </v-btn>
          </v-list-tile>
        </v-list>
      </v-menu>   
    </v-toolbar>
    <v-content>
      <v-card>
        <v-container
          fluid
          grid-list-md 
          text-xs-left          
        >
          <v-layout wrap>   
            <transition-group 
              name="task"
              class="task-grid"
            >
              <v-flex
                v-for="task in searchResultTasks"
                :key="task.id"
                class="task-item"
              >
                <Task :task="task" />  
              </v-flex>     
            </transition-group>                 
          </v-layout>
        </v-container>
      </v-card>
    </v-content>
  </div>
</template>
<script>
import MYDATA from "@/data/index.json";
import Task from "@/components/task";
import Search from "@/components/Search";
// import Broadcrumb from "@/components/broadcrumb";

function searchSettingsItemsToTags (orignMass,originObj,str){
  originForEach((e,i)=>{
    console.log('==>',originObj[i])
    if (str==e) return originObj[i]
  })  
}

export default {
  // transition: 'bounce',
  head() {
    return {
      title: "Портфолио | Долет Бижев",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Все работы Долета Бижева, портфолио."
        },
        {
          name: "keywords",
          content: "Портфолио, Долет Бижев, web - developer"
        }
      ]
    };
  },
  components: {
    Task,
    Search
    // Broadcrumb
  },
  props: {
    source: {
      type: String,
      default: "o"
    },
    keyword: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    yselect:"",
    // filterSelect:searchSettingsItemsToTags(searchSettingsItems,searchSettingsItemsTags),
    tasks: MYDATA,
    downloadResumeFormats: [
      {
        title: "в формате *.doc",
        href: "/resume/resume_bizhev_d_z.doc"
      },
      {
        title: "в формате *.pdf",
        href: "/resume/resume_bizhev_d_z.pdf"
      }
    ],
    searchSettingsItems: [       
        { 
          tText: 'решение алгоритмических задач',
          tValue: 'algoritm'
        },
        {
          tText: 'законченные проекты',
          tValue: 'end'          
        },        
        {
          tText: 'интерестные приемы',
          tValue: 'interes'        
        },
        {
          tText: 'которые сейчас в разработке',
          tValue: 'inDeveloping'        
        },
        { 
          tText: 'верстку',
          tValue: 'verstka'
        },        
        {
          tText: 'все',
          tValue: 'all'
        }
      ],    
      searchString: "",
    checkbox: null,
    drawer: null
  }),
  computed: {
    searchResultTasks() {
      let keyword = this.searchString.toLowerCase();
      let results = this.tasks.filter(task => {
        let isSearchSettings = true;

        if (
          (task.title.toLowerCase().indexOf(keyword) !== -1) &&
          (isSearchSettings)
        ) return task;
        if ((
          task.tags.filter(tag => tag.toLowerCase().indexOf(keyword) !== -1)
            .length > 0
        ) &&
        (isSearchSettings))
          return task;
        return false;
      });   
      return results;
    }
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  },
  methods: {
    setKeyword(keyword) {
      this.searchString = keyword;        
    },
    setSelected(x) {
      // Можно разделить выводы selecta и поля поиска

      if (x=='all') this.searchString = ''
        else this.searchString = x;
    }
  }
};
</script>

<style >
/* .task-grid{
  text-align: center;
} */
.task-item {
  display: inline-block;
  margin-right: 10px;
}
.task-enter-active, .task-leave-active {
  transition: all 0.6s;
}
.task-enter, .task-leave-to /* .task-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}

</style>