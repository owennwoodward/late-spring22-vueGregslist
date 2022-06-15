<template>
  <form class="row" action="">
    <div class="col-4">
      <label for="">make</label>
      <input class="form-control" type="text" v-model="carData.make" />
    </div>
    <div class="col-4">
      <label for="">model</label>
      <input class="form-control" type="text" v-model="carData.model" />
    </div>
    <div class="col-4">
      <label for="">year</label>
      <input class="form-control" type="number" v-model="carData.year" />
    </div>
    <div class="col-4">
      <label for="">price</label>
      <input class="form-control" type="number" v-model="carData.price" />
    </div>
    <div class="col-8">
      <label for="">image Url</label>
      <input class="form-control" type="text" v-model="carData.imgUrl" />
    </div>
    <div class="col-12">
      <label for="">description</label>
      <textarea class="form-control" name="" id="" cols="30" rows="5" v-model="carData.description"></textarea>
    </div>
    <div class="col-6">
      <label for="">color</label>
      <input class="form-control" type="color" name="" id="" v-model="carData.color" />
    </div>
    <div class="col-6">
      <button v-if="carData.id" type="button" class="btn btn-primary" @click="editCar">
        Edit Car
      </button>
      <button v-else type="button" class="btn btn-primary" @click="createCar">
        Create
      </button>
    </div>
  </form>
</template>


<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted, ref, watchEffect } from "vue";
import { carsService } from "../services/CarsService";
import { Modal } from "bootstrap";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
export default {
  props: { editCar: { type: Object, required: false, default: {} } },
  setup(props) {
    const carData = ref({});
    // NOTE the watcheffect runs when a piece of data inside it changes
    // in this case props.edit car was accessed so if props.editCar changes it runs again
    watchEffect(() => {
      logger.log(props.editCar);
      carData.value = props.editCar;
    });
    return {
      carData,
      async createCar() {
        try {
          logger.log(carData.value);
          await carsService.createCar(carData.value);
          carData.value = {};
          Modal.getOrCreateInstance(document.getElementById("car-form")).hide();
          Pop.toast("created car", "success");
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.error(error);
        }
      },
      async editCar() {
        try {
          await carsService.editCar(carData.value);
          Modal.getOrCreateInstance(
            document.getElementById("edit-car" + carData.value.id)
          ).hide();
          Pop.toast("edited car", "success");
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.error(error);
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
