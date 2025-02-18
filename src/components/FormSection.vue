<script setup>
import { reactive, ref, watch } from 'vue';

const showModal = ref(false);

function closeModal() {
  showModal.value = false;
}

const formData = reactive({
  name: '',
  phone: '',
  email: ''
});

function submitForm() {
  console.log('Submitted data:', formData);

  showModal.value = true;
}

const clearForm = () => {
  formData.name = '';
  formData.phone = '';
  formData.email = '';
}

watch(
  () => showModal.value,
  () => {
    if (showModal.value === false) {
      clearForm()

    }
  }
)
</script>

<template>
  <section class="form__section">
    <h3 class="card__title form__section--title">Free Estimate</h3>
    
    <p class="form__section--description text-ceter">Filling out this form is your first step toward receiving a personalized proposal for your project. Please provide as much detail as possible about the work you have in mind:</p>
  
    <div class="contact-form">
      <form @submit.prevent="submitForm">
        <div class="contact-form-group">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            v-model="formData.name"
            placeholder="Your name"
            required
          />
        </div>

        <div class="contact-form-group">
          <label for="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            v-model="formData.phone"
            placeholder="Your phone"
            required
          />
        </div>

        <div class="contact-form-group">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            v-model="formData.email"
            placeholder="Your email"
          />
        </div>

        <button class="btn" type="submit">Get free estimate</button>
      </form>
    </div>

    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <p>Thank you, <b>{{ formData.name }}</b>!</p>
        <p>I will get in touch with you shortly.</p>
        <button @click="closeModal">Ok</button>
      </div>
    </div>

  </section>
</template>

<style scoped lang="scss">

</style>