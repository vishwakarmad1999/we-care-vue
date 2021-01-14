<template>
    <div>
        <Header />

        <div class="form-container" align="center">
            <h1 class="text-center text-light"><i class="fas fa-user-md" :style="{ fontSize: '100px' }"></i> Login As Life Coach</h1>
            <ValidationObserver v-slot="{ invalid }">
                <form class="form" @submit.prevent="handleSubmit">
                    <div class="col-5">
                        <ValidationProvider rules="id_required" v-slot="{ errors }">
                            <input type="text" placeholder="Coach ID" v-model="id" class="form-control" />
                            <p class="text-light">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div><br/>
                    <div class="col-5">
                        <ValidationProvider rules="password_required" v-slot="{ errors }">
                            <input type="password" placeholder="Password" v-model="password" class="form-control" />
                            <p class="text-light">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div><br/>
                    <div class="col-5" align="center" :style="{ marginRight: '20px' }">
                        <button class="btn btn-primary btn-block" :disabled="invalid">Login</button>
                    </div>
                    <p v-if="!isAuthenticated" class="text-light">Incorrect coach id or password</p>
                </form>
            </ValidationObserver>
        </div>
    </div>    
</template>

<script>
import { extend } from "vee-validate"
import { required } from "vee-validate/dist/rules"

import Header from "../Header"

extend("id_required", {
    ...required,
    message: "Coach ID required"
})

extend("password_required", {
    ...required,
    message: "Password required"
})

export default {
    name: "coach-login",
    components: {
        Header
    },
    data: function() {
        return {
            id: "",
            password: "",
            isAuthenticated: true
        }
    },
    methods: {
        handleSubmit: function() {
            const obj = {
                id: this.id,
                password: this.password
            }

            this.$http.post("http://localhost:4000/coaches/login", obj).then(response => {
                console.log(response.body)
                this.isAuthenticated = true
            }, err => {
                console.log(err)
                this.isAuthenticated = false
            })
        }
    }
}
</script>

<style scoped>
.btn {
    width: 100%;
}
</style>