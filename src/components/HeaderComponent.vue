<script setup>
import { scrollToElementId } from "@/helpers/scrollToElementId.js"
import { contacts } from "@/utils/datasets";

</script>

<template>
  <header class="header">
    <div class="container">
      <!-- <div class="header__img"></div> -->
      <div>
        <div class="header__topsection">
          <div class="header__logo">
            <img src="/img/logo.png" alt="logo">
          </div>
          <!-- <a href="#"><div class="logo"></div></a> -->
          <!-- <div class="header__text">handyman service for your home</div> -->
          <div class="header__text">{{ contacts.companyName }}</div>
          <div class="header__text">Tel: {{ contacts.phoneNumber }}</div>
          <div class="header__text">Email: {{ contacts.email }}</div>
        </div>

        <div class="header__midlesection">
          <h1 class="header__title title">Professional service </h1>
          <h1 class="header__title title">for your home!</h1>
        </div>

        <menu class="menu">
          <ul class="menu__list">
            <li class="menu__listitem" @click="scrollToElementId('services')">
              <a class="menu__link">Services</a>
            </li>
            <li class="menu__listitem" @click="scrollToElementId('form')">
              <a class="menu__link">Estimate</a>
            </li>
            <li class="menu__listitem" @click="scrollToElementId('contacts')">
              <a class="menu__link">contacts</a>
            </li>
          </ul>
        </menu>
      </div>

      <div class="header__bottom" @click="scrollToElementId('form')">
        <a class="btn__link">
          <div class="btn btn__estimate">
            <p>Request a free</p>
            <p class="bold">estimate</p>
          </div>
        </a>
      </div>  
    </div>
  </header>
</template>

<style scoped lang='scss'>

</style> 