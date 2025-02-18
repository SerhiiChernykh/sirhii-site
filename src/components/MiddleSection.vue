<script setup>
const cards = [
  {
    id: '01',
    title: 'Roof Repair',
    descrption: 'The reliable protection of your home begins with a sturdy roof. Our experienced specialists provide professional inspections and repairs for any type of roofing, using modern technologies and high-quality materials. We quickly identify and eliminate defects, preventing leaks and damage, so your home stays warm and comfortable for many years.',
    // icon: '/src/assets/img/main-img1_1.jpeg',
    icon: '/src/assets/img/main-img1_2.webp',
  },
  {
    id: '02',
    title: 'Plumbing Repair',
    descrption: 'Plumbing issues can arise unexpectedly, but our service is always ready to help. We offer fast and high-quality repairs for water supply, sewage, and heating systems, utilizing modern equipment and trusted materials. Trust us to fix leaks, repair faucets, and address other plumbing concerns, ensuring you feel safe and comfortable at home once again.',
    // icon: '/src/assets/img/main-img2_1.jpg',
    icon: '/src/assets/img/main-img2_2.jpg',
  },
  {
    id: '03',
    title: 'Furniture Assembly',
    descrption: 'Proper furniture assembly is the foundation of a cozy space. Our professionals expertly assemble any furniture, regardless of its complexity, following all manufacturer instructions. We guarantee neatness, speed, and quality workmanship, allowing you to enjoy the functionality and aesthetics of your new furniture without any hassle.',
    // icon: '/src/assets/img/main-img3_1.jpg',
    icon: '/src/assets/img/main-img3_2.jpg',
  },
]

</script>

<template>
  <midle-section>
    <div v-for="card in cards" :key="card.id" class="card">
      <div class="card__img" :style="{ backgroundImage: `url(${card.icon})` }"></div>

      <div class="card__body">
        <div class="card__number">
          <div class="card__number--value">{{ card.id }}</div>
        </div>
        <h2 class="card__title">{{ card.title }}</h2>
        <p class="card__description">
          {{ card.descrption }}
        </p>
      </div>
    </div>
  </midle-section>
</template>

<style scoped lang='scss'>
</style> 