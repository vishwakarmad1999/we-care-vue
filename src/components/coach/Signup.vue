<template>
    <div>
        <Header />
        <div class="form-container text-light" v-if="!coachId">
            <h1 class="text-center"><i class="fas fa-user-md" style="font-size: 100px;"></i> Life Coach Profile</h1>
            <ValidationObserver v-slot="{ invalid }">
                <form class="form" @submit.prevent="handleSubmit">
                    <div class="row">
                        <div class="col-6">
                            <label for="name">Name</label>
                            <ValidationProvider :rules="{ name_required: true, name_min: 3, name_max: 50 }" v-slot="{ errors }">
                                <input type="text" id="name" class="form-control" v-model="name" />
                                <p class="text-light">{{ errors[0] }}</p>
                                <p class="text-light">{{ errors[1] }}</p>
                                <p class="text-light">{{ errors[2] }}</p>
                            </ValidationProvider>
                        </div>
                        <div class="col-6">
                            <label for="password">Password</label>
                            <ValidationProvider rules="password_required" v-slot="{ errors }">
                                <input type="password" id="password" class="form-control" v-model="password" />
                                <p class="text-light">{{ errors[0] }}</p>
                            </ValidationProvider>
                        </div>
                    </div><br/>
                    <div class="row">
                        <div class="col-6">
                            <label for="dob">Date of Birth</label>
                            <ValidationProvider :rules="{ validate_age: true, dob_required: true }" v-slot="{ errors }">
                                <input type="date" id="dob" class="form-control" v-model="dob" />
                                <p class="text-light">{{ errors[0] }}</p>
                                <p class="text-light">{{ errors[1] }}</p>
                            </ValidationProvider>
                        </div>
                        <div class="col-6"><br/>
                            <label>Gender</label><br/>
                            <ValidationProvider :rules="{ gender_required: true }" v-slot="{ errors }">
                                <input type="radio" value="M" v-model="gender" /> Male&nbsp;
                                <input type="radio" value="F" v-model="gender" /> Female
                                <p class="text-light">{{ errors[0] }}</p>
                            </ValidationProvider>
                        </div>
                    </div><br/>
                    <div class="row">
                        <div class="col-6">
                            <label for="mobile">Mobile Number</label>
                            <ValidationProvider rules="mobile_rule" v-slot="{ errors }">
                                <input type="number" id="mobile" class="form-control" v-model="mobile" />
                                <p class="text-light">{{ errors[0] }}</p>
                            </ValidationProvider>
                        </div>
                        <div class="col-6">
                            <label for="speciality">Speciality</label>
                            <ValidationProvider :rules="{ speciality_min: 10, speciality_max: 50 }" v-slot="{ errors }" >
                                <input type="text" id="speciality" class="form-control" v-model="speciality" />
                                <p class="text-light">{{ errors[0] }}</p>
                                <p class="text-light">{{ errors[1] }}</p>
                            </ValidationProvider>
                        </div>
                    </div><br/>

                    <div align="center">
                        <button class="btn btn-warning" :disabled="invalid">Register</button>
                    </div><br/>
                </form>
            </ValidationObserver>
        </div>

        <div class="form-container text-light" v-if="coachId" align="center">
            <i class="fas fa-user-md" style="font-size: 200px;"></i>
            <h1 class="text-center">You are a Coach now!</h1>
            <h2 class="text-center">Your Coach ID: {{ coachId }}</h2>
            <button @click="handleCoachLogin" class="btn btn-success">Login</button>
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

extend("password_required", {
    ...required,
    message: "Password is required"
})

extend("gender_required", {
    ...required,
    message: "Gender is required"
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

extend("dob_required", {
    ...required,
    message: "DOB is required"
})

extend("mobile_rule", value => {
    let pattern = /^\d{10}$/
    if (pattern.test(value))
        return true
    return "Mobile number should've 10 digits"
})

extend("speciality_min", {
    ...min,
    message: "Speciality should have 10 to 50 characters"
})

extend("speciality_max", {
    ...max,
    message: "Speciality should have 10 to 50 characters"
})

import Header from "../Header"

export default {
    name: "coach-signup",
    data: function() {
        return {
            name: "",
            password: "",
            dob: "",
            gender: "",
            mobile: "",
            speciality: "",
            coachId: ""
        }
    },
    components: {
        Header
    },
    methods: {
        handleSubmit: function() {
            let obj = {
                name: this.name,
                password: this.password,
                dateOfBirth: this.dob,
                gender: this.gender,
                mobileNumber: this.mobile,
                speciality: this.speciality
            }
            
            this.$http.post("http://localhost:4000/coaches", obj).then(response => {
                console.log(response.body.message)
                this.coachId = response.body.message
            }, err => {
                console.log(err)
            })
        },
        handleCoachLogin: function() {
            this.$router.push("/coachlogin")
        }
    },
}
</script>
