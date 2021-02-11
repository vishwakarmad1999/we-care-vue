<template>
    <div>
        <Header />

        <div class="bookings-container text-light">
            <div class="booking" :style="{ width: '300px' }" v-for="(item, index) of data" :key="index">
                <h3 class="text-left">Appointment Date:</h3>
                <h3>{{ item.appointmentDate.substr(0, 10) }}</h3>
                <h3>{{ item.name }}</h3>
                <h5>Slot: {{ item.slot }}</h5><br/>
                <h6>Booking ID: {{ item.bookingID }}</h6>
                <h6>Coach ID: {{ item.coachID }}</h6>
                <h6>User ID: {{ item.userID }}</h6>
                <button class="btn btn-primary" :style="{ marginLeft: '-10px' }" @click="rescheduleAppointment(item.bookingID)">Reschedule the appointment</button>
                <button class="btn btn-danger" :style="{ marginLeft: '-10px' }" @click="deleteAppointment(item.bookingID)">Delete the appointment</button>
            </div>
        </div> 
        <div align="center">
            <h1 v-if="!data" class="text-danger display-4">You haven't made any appointments yet</h1>
            <button class="btn btn-success" @click="goBack">Go Back</button>
        </div>
    </div>
</template>

<script>
import Header from "./Header"

export default {
    name: "user-appointments",
    components: {
        Header
    },
    data: function() {
        return {
            userId: localStorage.getItem("userId"),
            data: ""
        }
    },
    methods: {
        rescheduleAppointment: function(bookingId) {
            localStorage.setItem("bookingId", bookingId)
            this.$router.push("/rescheduleappointment")
        },
        deleteAppointment: function(bookingId) {
            const flag = confirm("Do you want to delete the booking " + bookingId + " ?")
            if (flag) {
                this.$http.delete(`http://localhost:4000/booking/${bookingId}`).then(response => {
                    console.log(response.body)
                    location.reload()
                }, err => {
                    console.log(err)
                })
            }
        },
        goBack: function() {
            this.$router.push("/userhome")
        }
    },
    mounted: function() {
        this.$http.get(`http://localhost:4000/users/booking/${this.userId}`).then(response => {
            this.data = response.body
            console.log(response.body)
        }, err => {
            console.log(err)
        })
    }
}
</script>