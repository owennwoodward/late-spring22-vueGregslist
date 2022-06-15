<template>
    <div class="col-3">
        <div class="bg-white elevation-2 rounded position-relative">
            <img :src="house.imgUrl" class="img-fluid" alt="" />
            <p>{{ house.bathrooms }}</p>
            <p>{{ house.bedrooms }}</p>
            <p>{{ house.yearbuilt }}</p>
            <p>{{ house.color }}</p>
            <p>{{ house.description }}</p>
        </div>
    </div>
</template>


<script>
export default {
    props: { house: { type: Object, required: true } },
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
</style>