<template>
    <div>
        <Header />

        <div class="bookings-container text-light">
            <div class="booking" :style="{ width: '300px' }" v-for="(item, index) of coaches" :key="index">
                <div class="text-center">
                    <i v-if="item.gender === 'M'" class="fas fa-male text-light" :style="{ fontSize: '50px' }"></i>
                    <i v-else class="fas fa-female text-light" :style="{ fontSize: '50px' }"></i>
                </div>
                <h3>{{ item.name }}</h3>
                <h5>Coach ID: {{ item.coachID }}</h5>
                <h5>Cell Number: {{ item.mobileNumber }}</h5>
                <h5>Speciality: {{ item.speciality }}</h5>
                <button class="btn btn-primary" :style="{ marginLeft: '-10px' }" @click="bookAppointment(item.coachID)">Book an appointment</button> 
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./Header"

export default {
    name: "user-home",
    components: {
        Header
    },
    data: function() {
        return {
            coaches: [],
            userId: localStorage.getItem("userId")
        }
    },
    methods: {
        bookAppointment: function(coachId) {
            localStorage.setItem("coachId", coachId)
            this.$router.push("/bookappointment")
        }
    },
    mounted: function() {
        if (this.userId === "null") {
            this.$router.push("/userlogin")
        }

        this.$http.get("http://localhost:4000/coaches/all").then(response => {
            console.log(response.body)
            this.coaches = response.body
        }, err => {
            console.log(err)
        })
    }
}
</script>