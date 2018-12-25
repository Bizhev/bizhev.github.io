<template>
  <div>
    <a :href="link">
      <div class="contact__item__icon">      
        <font-awesome-layers class="fa-2x">
          <font-awesome-icon :icon="icon"/>
        </font-awesome-layers>
      </div>
      <div class="contact__item__description">
        <div 
          class="label">{{ title }}</div>
        <div 
          :itemprop="itemprop"
          class="value" 
        >{{ text }}</div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    },
    itemprop: {
      type: String,
      default: ""
    }
  }
};
</script>
<style>
.contact__item {
  margin: 1.5vh;
  display: inline-block;
  padding: 5px;
  text-align: left;
  width: 260px;
  border-radius: 10px;
  height: 60px;
}
.contact__item a {
  text-decoration: none;
}
/* .contact__item:hover {
  background-color: #fff;
  border-radius: 5%;
  cursor: pointer;
} */
.contact__item .contact__item__description .label {
  transition: padding 0.3s ease-in-out 0.3s;
  display: inline-block;
  padding-left: 60px;
}
.contact__item:hover .contact__item__description .label {
  transition: padding 0.3s ease-in-out 0.3s;
  padding-left: 30px;
}

.contact__item .contact__item__icon svg {
  transition: transform 0.3s ease-in-out 0.1s;
}
.contact__item:hover .contact__item__icon svg {
  fill: #ccc;
  transition: transform 0.3s ease-in-out 0.3s;
  transform: rotate3d(0, 1, 0, 90deg);
}
.contact__item__icon {
  display: inline-block;
  margin-top: 0px;
  padding-right: 10px;
}
.contact__item__description .label,
.value {
  color: #555;
  margin-right: 5px;
  font-size: 12pt;
  display: block;
}
.contact__item__description .label {
  text-align: right;
  font-size: 1.7vh;
}
.contact__item__description .value {
  font-size: 2.5vh;
}

.contact__item__description {
  display: inline-block;
  text-align: left;
  background-size: 100%;
  width: 200px;
}
</style>
