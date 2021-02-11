<template>
    <div>
        <Header />

        <div class="bookings-container" :style="{backgroundColor: 'cadetblue'}">
            <i v-if="data.gender === 'M'" class="fas fa-male" :style="{ fontSize: '200px' }"></i>
            <i v-else class="fas fa-female" :style="{ fontSize: '200px' }"></i>
                
            <div class="booking" :style="{ backgroundColor: 'cadetblue' }">
                <h4>Coach ID: {{ data.coachID }}</h4>
                <h6>Date of Birth: {{ data.dateOfBirth.substr(0, 10) }}</h6>
                <h6>Mobile Number: {{ data.mobileNumber }}</h6>
                <h6>Speciality: {{ data.speciality }}</h6>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./Header"

export default {
    name: "coach-profile",
    components: {
        Header
    },
    data: function() {
        return {
            coachId: localStorage.getItem("coachId"),
            data: null
        }
    },
    mounted: function() {
        this.$http.get(`http://localhost:4000/coaches/${this.coachId}`).then(response => {
            this.data = response.body
        }, err => {
            console.log(err)
        })
    }
}
</script>