<template>
  <div class="container-fluid">
    <div class="row g-3 my-2">
      <!-- NOTE 'c' is the data of one car, 'cars' is the array of all the cars -->
      <!-- NOTE ':car' is the name of the PROP passed ' ="c" ' is the data passed AS 'car'-->
      <Car v-for="c in cars" :key="c.id" :car="c" />
      <!--  -->
    </div>
  </div>
  <Modal id="car-form">
    <template #header> Create Car</template>
    <template #body><CarForm /></template>
  </Modal>
</template>


<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted } from "vue";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { carsService } from "../services/CarsService";
export default {
  setup() {
    onMounted(async () => {
      try {
        await carsService.getAll();
      } catch (error) {
        Pop.toast(error.message, "error");
        logger.error(error);
      }
    });
    return {
      cars: computed(() => AppState.cars),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
