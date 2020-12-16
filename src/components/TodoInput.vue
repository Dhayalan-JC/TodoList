<template>
    <div class="row">
        <input class="form-control col mx-3"  type="text" />
        <button @click="addTodo('23')" class="btn btn-primary">ADD</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
   methods:{
       ...mapActions(["addTodo"])
   }
}
</script>

<style lang="stylus" scoped>

</style>