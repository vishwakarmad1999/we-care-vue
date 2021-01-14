<template>
    <div>
        <Header />

        <div v-if="!userId">
            <div class="form-container text-light">
                <h1 class="text-center"><i class="fas fa-user" :style="{ fontSize: '100px' }"></i>User Profile</h1>
                <ValidationObserver v-slot="{ invalid }" >
                    <form class="form" @submit.prevent="handleSubmit">
                        <div class="row">
                            <div class="col-6">
                                <label for="name">Name</label>
                                <ValidationProvider :rules="{ name_min: 3, name_max: 50, name_required: true }" v-slot="{ errors }">
                                    <input type="text" id="name" v-model="name" class="form-control" />
                                    <p class="text-light">{{ errors[0] }}</p>
                                    <p class="text-light">{{ errors[1] }}</p>
                                    <p class="text-light">{{ errors[2] }}</p>
                                </ValidationProvider>
                            </div>
                            <div class="col-6">
                                <label for="password">Password</label>
                                <ValidationProvider :rules="{ passwor_min: 5, passwor_max: 10 }" v-slot="{ errors }">
                                    <input type="password" id="password" v-model="password" class="form-control" />
                                    <p class="text-light">{{ errors[0] }}</p>
                                    <p class="text-light">{{ errors[1] }}</p>
                                </ValidationProvider>
                            </div>
                        </div><br/>
                        <div class="row">
                            <div class="col-6">
                                <label for="mobile">Mobile Number</label>
                                <ValidationProvider :rules="{ mobile_rule: true }" v-slot="{ errors }">
                                    <input type="number" id="mobile" v-model="mobileNumber" class="form-control" />
                                    <p class="text-light">{{ errors[0] }}</p>
                                </ValidationProvider>
                            </div>
                            <div class="col-6">
                                <label for="email">Email</label>
                                <ValidationProvider :rules="{ required: true }" v-slot="{ errors }">
                                    <input type="email" id="email" v-model="email" class="form-control" />
                                    <p class="text-light">{{ errors[0] }}</p>
                                </ValidationProvider>
                            </div>
                        </div><br/>
                        <div class="row">
                            <div class="col-6">
                                <label for="dob">Date of Birth</label>
                                <ValidationProvider :rules="{ validate_age: true }" v-slot="{ errors }">
                                    <input type="date" id="dob" class="form-control" v-model="dateOfBirth" />
                                    <p class="text-lig">{{ errors[0] }}</p>
                                </ValidationProvider>
                            </div>
                            <div class="col-6"><br/>
                                <label for="gender">Gender</label><br/>
                                <ValidationProvider :rules="{ required: true }" v-slot="{ errors }">
                                    <input type="radio" value="M" v-model="gender" /> Male&nbsp;
                                    <input type="radio" value="F" v-model="gender" /> Female
                                    <p class="text-light">{{ errors[0] }}</p>
                                </ValidationProvider>
                            </div>
                        </div><br/>
                        <div class="row">
                            <div class="col-6">
                                <label for="pincode">Pincode</label>
                                <ValidationProvider :rules="{ validate_pin: true }" v-slot="{ errors }">
                                    <input type="number" id="pincode" class="form-control" v-model="pincode" />
                                    <p class="text-light">{{ errors[0] }}</p>
                                </ValidationProvider>
                            </div>
                            <div class="col-6">
                                <label for="city">City</label>
                                <ValidationProvider rules="validate_place" v-slot="{ errors }">
                                    <input type="text" id="city" class="form-control" v-model="city" />
                                    <p class="text-light">{{ errors[0] }}</p>
                                </ValidationProvider>
                            </div>
                        </div><br/>
                        <div class="row">
                            <div class="col-6">
                                <label for="state">State</label>
                                <ValidationProvider rules="validate_place" v-slot="{ errors }">
                                    <input type="text" id="state" class="form-control" v-model="state" />
                                    <p class="text-lig">{{ errors[0] }}</p>
                                </ValidationProvider>
                            </div>
                            <div class="col-6">
                                <label for="country">Country</label>
                                <ValidationProvider rules="validate_place" v-slot="{ errors }">
                                    <input type="text" id="country" class="form-control" v-model="country" />
                                    <p class="text-light">{{ errors[0] }}</p>
                                </ValidationProvider>
                            </div>
                        </div><br/>
                        <div align="center">
                            <button class="btn btn-warning" :disabled="invalid">Register</button>
                        </div><br/>
                    </form>
                </ValidationObserver>
            </div>
        </div>

        <div v-if="userId">
            <div class="form-container text-light" align="center">
                <i class="fas fa-user" :style="{ fontSize: '300px' }"></i>
                <h1 class="text-center">Account created successfully</h1>
                <h2 class="text-center">Your User ID: {{ userId }}</h2>
                <button class="btn btn-warning" @click="loginUser">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
import { extend } from "vee-validate"
import { max, min, required } from "vee-validate/dist/rules"

extend("name_min", {
  ...min,
  message: "Name should have at least 3 to 50 characters"
})

extend("name_max", {
  ...max,
  message: "Name should have at least 3 to 50 characters"
})

extend("name_required", {
  ...required,
  message: "Name is required"
})

extend("passwor_min", {
    ...min,
    message: "Password should've atleast 5 to 10 characters"
})

extend("passwor_max", {
    ...max,
    message: "Password should've atleast 5 to 10 characters"
})

extend("required", {
    ...required,
    message: "Required"
})

extend("validate_age", (value) => {
    const dob = new Date(value)
    const now = new Date()
    const diff = now.getFullYear() - dob.getFullYear()
    if (diff >= 20 && diff <= 100) {
        return true
    }
    return "Age should be in between 20 and 100 years"
})

extend("mobile_rule", value => {
    let pattern = /^\d{10}$/
    if (pattern.test(value))
        return true
    return "Mobile number should've 10 digits"
})

extend("validate_pin", value => {
    let pattern = /^\d{6}$/
    if (pattern.test(value)) 
        return true
    return "Pincode should have 6 digits"
})

extend("validate_place", value => {
    const l = value.length
    if (l >= 5 && l <= 20)
        return true
    return "It should have 5 to 20 characters"
})

import Header from "../Header"

export default {
    name: "user-signup",
    data: function() {
        return {
            name: "",
            password: "",
            mobileNumber: "",
            email: "",
            dateOfBirth: "",
            gender: "",
            pincode: "",
            city: "",
            state: "",
            country: "",
            userId: ""
        }
    },
    components: {
        Header
    },
    methods: {
        handleSubmit: function() {
            const data = {
                name:  this.name,
                password:  this.password,
                mobileNumber: this.mobileNumber,
                email: this.email,
                dateOfBirth: this.dateOfBirth,
                gender: this.gender,
                pincode: this.pincode,
                city: this.city,
                state: this.state,
                country: this.country
            }

            console.log(data)

            this.$http.post("http://localhost:4000/users", data).then(response => {
                this.userId = response.body.message
            }, (err) => {
                console.log(err)
                alert(err.body)
            })
        },
        loginUser: function() {
            this.$router.push("/userlogin")
        }
    }
}
</script>

<style scoped>
button {
    widows: 100%;
}
</style>