<template>
    <form class="row" action="">
        <div class="col-4">
            <label for="">Bathrooms</label>
            <input class="form-control" type="text" v-model="houseData.bathrooms" />
        </div>
        <div class="col-4">
            <label for="">Bedrooms</label>
            <input class="form-control" type="text" v-model="houseData.bedrooms" />
        </div>
        <div class="col-4">
            <label for="">Year</label>
            <input class="form-control" type="number" v-model="houseData.year" />
        </div>
        <div class="col-8">
            <label for="">Image Url</label>
            <input class="form-control" type="text" v-model="houseData.imgUrl" />
        </div>
        <div class="col-12">
            <label for="">Description</label>
            <textarea class="form-control" name="" id="" cols="30" rows="5" v-model="houseData.description"></textarea>
        </div>
        <div class="col-6">
            <label for="">Color</label>
            <input class="form-control" type="color" name="" id="" v-model="houseData.color" />
        </div>
        <button type="button" class="btn btn-primary" @click="createHouse">
            Create
        </button>
    </form>
</template>


<script>
import { ref } from 'vue'
import { housesService } from '../services/HousesService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'

export default {
    setup() {
        const houseData = ref({})
        return {
            houseData,
            async createHouse() {
                try {
                    logger.log(houseData.value)
                    await housesService.createHouse(houseData.value)
                    houseData.value = {};
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
</style>