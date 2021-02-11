<template>
    <div>
        <Header />

        <div v-if="bookings.length" class="bookings-container text-light">
            <div class="booking" v-for="(item, index) of bookings" :key="index">
                <h4>Appointment Date:</h4>
                <h4>{{ item.appointmentDate.substr(0, 10) }}</h4>
                <h3>Slot: {{ item.slot }} </h3><br/>
                <h6>Booking ID: {{ item.bookingID }}</h6>
                <h6>User ID: {{ item.userID }}</h6>
            </div>
        </div>

        <h1 v-else class="text-center text-danger display-4 mt-5">No bookings to show</h1>
    </div>
</template>

<script>
import Header from "./Header"

export default {
    name: "coach-home",
    components: {
        Header
    },
    data: function() {
        return {
            coachId: localStorage.getItem("coachId"),
            bookings: []
        }
    },
    mounted: function() {
        if (this.coachId === "null") {
            this.$router.push("/coachlogin")
        }

        this.$http.get(`http://localhost:4000/coaches/booking/${this.coachId}`).then(response => {
            this.bookings = response.body
        }, err => {
            console.log(err.body)
        })
    }
}
</script>