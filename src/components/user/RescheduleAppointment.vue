<template>
    <div>
        <Header />

        <div v-if="!booked" class="form-container text-light" align="center">
            <h1 class="text-center text-light"><i class="far fa-calendar-check" :style="{ fontSize: '100px' }"></i> Reschedule your appointment</h1><br/>
            <ValidationObserver v-slot="{ invalid }">
                <form class="form" @submit.prevent="handleSubmit">
                    <div class="col-7">
                        <div align="left">
                            <label for="doa">Date of Appointment</label>
                        </div>
                        <ValidationProvider :rules="{ required: true, doa_rule: true }" v-slot="{ errors }">
                            <input type="date" id="doa" v-model="appointmentDate" class="form-control" />
                            <p class="text-light">{{ errors[0] }}</p>
                            <p class="text-light">{{ errors[1] }}</p>
                        </ValidationProvider>
                    </div><br/>
                    <div class="col-7" align="left">
                        <label>Preferred Slot</label>
                        <div align="left">
                            <ValidationProvider rules="required" v-slot="{ errors }">
                                <input type="radio" v-model="slot" value="9 AM to 10 AM" /> 9 AM to 10 AM &nbsp;
                                <input type="radio" v-model="slot" value="10 AM to 11 AM"  /> 10 AM to 11 AM &nbsp; 
                                <input type="radio" v-model="slot" value="11 AM to 12 PM"  /> 11 AM to 12 PM <br/> 
                                <input type="radio" v-model="slot" value="2 PM to 3 PM"  /> 2 PM to 3 PM &nbsp;
                                <input type="radio" v-model="slot" value="3 PM to 4 PM"  /> 3 PM to 4 PM &nbsp;
                                <input type="radio" v-model="slot" value="4 PM to 5 PM"  /> 4 PM to 5 PM 
                                <p class="text-light">{{ errors[0] }}</p>
                            </ValidationProvider>
                        </div>
                    </div><br/>
                    <div class="col-7" align="center" :style="{ marginRight: '20px' }">
                        <button class="btn btn-success btn-block" :disabled="invalid">Reschedule the appointment</button>
                    </div>
                </form>
            </ValidationObserver>
        </div>

        <div v-if="booked" class="form-container" align="center">
            <h1>Your appointment is rescehduled successfully</h1>
            <button @click="goBack" class="btn btn-primary">Go Back</button>
        </div>
    </div>
</template>

<script>
import { extend } from "vee-validate"
import { required } from "vee-validate/dist/rules"

extend("required", required)

extend("doa_rule", value => {
    const doa = new Date(value)
    const today = new Date()
    const ms7 = 604800000

    const diff = doa.getTime() - today.getTime()
    
    if (diff >= 0 && diff <= ms7)
        return true
    
    return "Date should be any upcoming 7 days"
})

import Header from "./Header"

export default {
    name: "reschedule-appointment",
    components: {
        Header
    },
    data: function() {
        return {
            bookingId: localStorage.getItem("bookingId"),
            booked: "",
            appointmentDate: "",
            slot: ""
        }
    },
    methods: {
        handleSubmit: function() {
            const data = {
                slot: this.slot,
                appointmentDate: this.appointmentDate
            }

            this.$http.put(`http://localhost:4000/booking/${this.bookingId}`, data).then(response => {
                console.log(response.body)
                this.booked = true
            }, err => {
                console.log(err)
            })
        },
        goBack: function() {
            this.$router.push("/userhome")
        }
    }
}
</script>

<style scoped>
button {
    width: 100%;
}
</style>