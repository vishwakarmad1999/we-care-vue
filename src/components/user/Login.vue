<template>
    <div>
        <Header />
        <div class="form-container" align="center">
            <h1 class="text-center text-light"><i class="fas fa-users" :style="{ fontSize: '100px' }"></i> Login As User</h1>
            <ValidationObserver v-slot="{ invalid }">
                <form class="form" @submit.prevent="handleSubmit">
                    <div class="col-5">
                        <ValidationProvider rules="id_required" v-slot="{ errors }">
                            <input type="text" v-model="id" placeholder="User ID" class="form-control" />
                            <p class="text-light">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div><br/>
                    <div class="col-5">
                        <ValidationProvider rules="password_rule" v-slot="{ errors }">
                            <input type="password" v-model="password" placeholder="Password" class="form-control" />
                            <p class="text-light">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div><br/>
                    <div class="col-5" align="center" :style="{ marginRight: '20px' }">
                        <button class="btn btn-primary btn-block" :disabled="invalid">Login</button>
                    </div>
                    <p v-if="!isAuthenticated" class="text-light">Incorrect user id or password</p>
                </form>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
import { extend } from "vee-validate"
import { required } from "vee-validate/dist/rules"

extend("id_required", {
    ...required,
    message: "User ID is a required field"
})

extend("password_rule", (value) => {
    const l = value.length
    if (l >= 5 && l <= 10) 
        return true
    return "Password should've 5 to 10 characters"
})

import Header from "../Header"

export default {
    name: "user-login",
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

            this.$http.post("http://localhost:4000/login/users", obj).then(response => {
                console.log(response.body)
                this.isAuthenticated = true
                localStorage.setItem("userId", this.id)
                this.$router.push("/userhome")
            }, err => {
                console.log(err)
                this.isAuthenticated = false
            })
        }
    }
}
</script>

<style scoped>
button {
    width: 100%;
}
</style>