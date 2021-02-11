<template>
    <div>
        <Header />

        <div class="bookings-container" :style="{ backgroundColor: 'cadetblue' }">
            <i v-if="data.gender === 'M'" class="fas fa-male" :style="{ fontSize: '200px' }"></i>
            <i v-else class="fas fa-female" :style="{ fontSize: '200px' }"></i>
                
            <div class="booking" :style="{ backgroundColor: 'cadetblue' }">
                <h4>{{ data.name }}</h4>
                <h4>User ID: {{ data.userID }}</h4>
                <h6>Date of Birth: {{ data.dateOfBirth.substr(0, 10) }}</h6>
                <h6>Mobile Number: {{ data.mobileNumber }}</h6>
                <h6>Address: {{ data.city + ", " + data.state + ", " + data.country }}</h6>
            </div>
        </div>

        <div align="center">
            <button class="btn btn-success" @click="goBack">Go Back</button>
        </div>
    </div>
</template>

<script>
import Header from "./Header"

export default {
    name: "UserProfile",
    components: {
        Header
    },
    data: function() {
        return {
            data: "",
            userId: localStorage.getItem("userId")
        }
    },
    methods: {
        goBack: function() {
            this.$router.push("/userhome")
        }
    },
    mounted: function() {
        this.$http.get(`http://localhost:4000/users/${this.userId}`).then(response => {
            console.log(response.body)
            this.data = response.body
        }, err => {
            console.log(err)
        })
    }
}
</script>