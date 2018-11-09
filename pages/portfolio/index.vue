<template>
	<!-- <section class="portfolio">        
    <Broadcrumb/>
    <div class="portfolio__search">
      <Search @handleKeyword="setKeyword" />
    </div>
    <div class="portfolio__container">
      <transition-group name="task" class="task-grid">					
        
        <div v-for="task in searchResultTasks" :key="task.id" class="task-item">
            <Task :task="task"/>				
        </div>
      </transition-group>
    </div>
	</section> -->
  
<div>
  <!-- <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-20"></div>
    <div class="md-layout-item md-xsmall-hide"></div>
    <div class="md-layout-item md-size-20">Скачать резюме *.doc, *.pdf</div>
  </div> -->
  <div class="page-container">
    <md-app md-waterfall md-mode="flexible">
      <md-app-toolbar class="md-large md-primary">
        <div class="md-toolbar-row">

          <div class="md-toolbar-section-end">
            <md-button :href="'/resume/resume_bizhev_d_z.doc'">resume.doc <md-icon>cloud_download</md-icon></md-button>
            <md-button :href="'/resume/resume_bizhev_d_z.pdf'">resume.pdf <md-icon>cloud_download</md-icon></md-button> 
          </div>
        </div>

        <div class="md-toolbar-row md-toolbar-offset">
          <span class="md-display-1">Портфолио</span>
        </div>
      </md-app-toolbar>


      <md-app-content>
        <!-- <Broadcrumb/> -->
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>settings</md-icon>            
          </md-button>            
          <Search @handleKeyword="setKeyword" />
      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Критерии поиска</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
        </div>

          <transition-group  name="task" class="md-layout md-alignment-center md-gutter task-grid">	
            <md-card v-for="task in searchResultTasks" :key="task.id" class="md-layout-item md-size-20 md-medium-size-30 md-small-size-40 md-xsmall-size-100 task-item ">
              <md-card-header>
                <Task :task="task"/>
              </md-card-header>
            </md-card>
            </transition-group>


        
      </md-app-content>
    </md-app>
  </div>

</div>
</template>

<script>

import Vue from 'vue'
import { MdButton, MdContent, MdField,MdCard,MdList,MdToolbar,MdDrawer,MdApp } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdApp)
Vue.use(MdContent)
Vue.use(MdField)
Vue.use(MdCard)
Vue.use(MdList)
Vue.use(MdToolbar)
Vue.use(MdDrawer)



import MYDATA from "@/data/index.json";
import Task from "@/components/task";
import Search from "@/components/Search";
import Broadcrumb from "@/components/broadcrumb"

export default {  

  components: {
    Task,
    Search,
    Broadcrumb
  },
  
  data() {
     
       
    return {
      tasks: MYDATA,
      menuVisible: false,
      searchString: ""
    };
    
  },
  head () {
    return {
      title: "Портфолио | Долет Бижев",
      meta: [        
        { hid: 'description', name: 'description', content: 'Все работы Долета Бижева, портфолио.' }
      ]
    }
  },
  computed: {
    searchResultTasks() {      
      
      let keyword = this.searchString.toLowerCase();      
      let results = this.tasks.filter(task => {
        if (task.title.toLowerCase().indexOf(keyword) !== -1) return task;
        if (
          task.tags.filter(tag => tag.toLowerCase().indexOf(keyword) !== -1)
          .length > 0
        )
          return task;
        return false;
      });

      return results;
    }
  },
  methods: {    
    setKeyword(keyword) {
      this.searchString = keyword;
    }
  }
};
</script>

<style>
.task-item {
  transition: all 0.3s;  
  margin: 10px;
}
.task-enter,
.task-leave-to {
  opacity: 0;
  transform: translate(30px);
}

</style>

