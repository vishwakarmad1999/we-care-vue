<template>
    <nav class="navbar navbar-expand-md navbar-light bg-dark">
        <span class="navbar-brand text-light">WeCare</span>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto"></ul>
            <ul class="navbar-nav">
                <li class="nav-item"> 
                    <span class="nav-link text-light cursor" @click="userViewProfile"><i class="fas fa-user"></i>View Profile</span>
                </li>
                <li class="nav-item"> 
                    <span class="nav-link text-light cursor" @click="userAppointments"><i class="fas fa-calendar-alt"></i>My Appointments</span>
                </li>
                <li class="nav-item"> 
                    <span class="nav-link text-light cursor"><i class="fas fa-phone-alt"></i>Call us: 07692:222460</span>
                </li>
                <li class="nav-item"> 
                    <span class="nav-link text-light cursor" @click="logout"><i class="fas fa-sign-out-alt"></i>Logout</span>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "user-header",
    methods: {
        userViewProfile: function() {
            this.$router.push("/userprofile")
        },
        userAppointments: function() {
            this.$router.push("/userappointments")
        },
        logout: function() {
            localStorage.setItem("userId", null)
            localStorage.setItem("coachId", null)
            localStorage.setItem("bookingId", null)
            this.$router.push("/")
        }
    }
}
</script>