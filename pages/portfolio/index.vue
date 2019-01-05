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
          <v-checkbox 
            v-model="searchSettings.taskAlgoritm"
            :label="`Решение алгоритмических задач `" 
          />
          <v-checkbox 
            v-model="searchSettings.taskEnd"
            :label="`Закончекные проекты `" 
          />
          <v-checkbox 
            v-model="searchSettings.taskInteres"
            :label="`Интерестные приемы `" 
          />
          <v-checkbox 
            v-model="searchSettings.taskVerstka"
            :label="`Верстка `" 
          />
          <v-checkbox 
            v-model="searchSettings.taskAll"
            :label="`Показать всё`" 
          />
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
            <v-flex
              v-for="task in searchResultTasks"
              :key="task.id"
              class="task-item"
            >
              <Task :task="task" />  
            </v-flex>                      
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

export default {
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
    searchString: {
      type: String,
      default: ""
    },
    keyword: {
      type: String,
      default: ""
    },
    searchSettings: {
      type: Object,
      default: () => ({
        taskAlgoritm: false,
        taskEnd: false,
        taskInteres: false,
        taskVerstka: false,
        taskAll: true
      })
    }
  },
  data: () => ({
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
    checkbox: null,
    drawer: null
  }),
  computed: {
    searchResultTasks() {
      let keyword = this.searchString.toLowerCase();
      let results = this.tasks.filter(task => {
        // filters
        // searchSettings = {
        //   taskAlgoritm: false (ENG),
        //   taskEnd: false (isComplited),
        //   taskInteres: false (isOK),
        //   taskVerstka: false (Verstka)
        // }
        let isSearchSettings = false;
        
        if ((this.searchSettings.taskAlgoritm) && (
          task.tags.filter(tag => tag.toLowerCase().indexOf('eng') !== -1)
            .length > 0
        )) isSearchSettings = true;

        if ((this.searchSettings.taskEnd) && (
          task.tags.filter(tag => tag.toLowerCase().indexOf('iscomplited') !== -1)
            .length > 0
        )) isSearchSettings = true;

        if ((this.searchSettings.taskInteres) && (
          task.tags.filter(tag => tag.toLowerCase().indexOf('isok') !== -1)
            .length > 0
        )) isSearchSettings = true;

        if ((this.searchSettings.taskVerstka) && (
          task.tags.filter(tag => tag.toLowerCase().indexOf('verstka') !== -1)
            .length > 0
        )) isSearchSettings = true;

        if (this.searchSettings.taskAll) isSearchSettings = true;
        
        // others
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
    }
  }
};
</script>

<style >
</style>