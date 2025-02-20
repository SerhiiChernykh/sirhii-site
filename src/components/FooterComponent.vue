<script setup>
import { contacts } from "@/utils/datasets";

</script>

<template>
  <footer class="footer">
    <div></div>

    <div class="footer__logo"></div>
    
    <div class="footer__container">
      <div class="footer__top">
        <!-- <div class="footer__icon"></div> -->
        <h2 class="footer__title title">
          Always at your service!
        </h2>
        <p class="footer__decription">
          I’m always happy to help solve any household issues and ensure your comfort. Thank you for your trust and for choosing my team!
        </p>
        <p class="footer__decription">
          Serhii Chernykh 
        </p>
        <p class="footer__decription">
          and {{ contacts.companyName }}
        </p>
      </div>
    </div>

    <div class="footer__wrap">
      <div class="container">
        <div class="footer__bottom">
          <p>Tel: {{ contacts.phoneNumber }}</p>
          <p><a target="_blank" :href="contacts.thumbtack">Thumbtack</a></p>
          <p>Email: {{ contacts.email }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang='scss'>
  
</style> 