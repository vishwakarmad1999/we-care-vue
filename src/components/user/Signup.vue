<template>
    <div>
        <div v-if="!userId">
            <div class="form-container text-light">
                <h1 class="text-center"><i class="fas fa-user" :style="{ fontSize: '100px' }"></i>User Profile</h1>
                <form class="form">
                    <div class="row">
                        <div class="col-6">
                            <label for="name">Name</label>
                            <input type="text" id="name" v-model="name" class="form-control" />
                        </div>
                        <div class="col-6">
                            <label for="password">Password</label>
                            <input type="password" id="password" v-model="password" class="form-control" />
                        </div>
                    </div><br/>
                    <div class="row">
                        <div class="col-6">
                            <label for="mobile">Mobile Number</label>
                            <input type="number" id="mobile" v-model="mobileNumber" class="form-control" />
                        </div>
                        <div class="col-6">
                            <label for="email">Email</label>
                            <input type="email" id="email" v-model="email" class="form-control" />
                        </div>
                    </div><br/>
                    <div class="row">
                        <div class="col-6">
                            <label for="dob">Date of Birth</label>
                            <input type="date" id="dob" class="form-control" v-model="dateOfBirth" />
                        </div>
                        <div class="col-6"><br/>
                            <label for="gender">Gender</label><br/>
                            <input type="radio" value="M" v-model="gender" /> Male&nbsp;
                            <input type="radio" value="F" v-model="gender" /> Female
                        </div>
                    </div><br/>
                    <div class="row">
                        <div class="col-6">
                            <label for="pincode">Pincode</label>
                            <input type="number" id="pincode" class="form-control" v-model="pincode" />
                        </div>
                        <div class="col-6">
                            <label for="city">City</label>
                            <input type="text" id="city" class="form-control" v-model="city" />
                        </div>
                    </div><br/>
                    <div class="row">
                        <div class="col-6">
                            <label for="state">State</label>
                            <input type="text" id="state" class="form-control" v-model="state" />
                        </div>
                        <div class="col-6">
                            <label for="country">Country</label>
                            <input type="text" id="country" class="form-control" v-model="country" />
                        </div>
                    </div><br/>
                    <div align="center">
                        <button class="btn btn-warning">Register</button>
                    </div><br/>
                </form>
            </div>
        </div>

        <div v-if="userId">
            <div class="form-container text-light" align="center">
                <i class="fas fa-user" :style="{ fontSize: '300px' }"></i>
                <h1 class="text-center">Account created successfully</h1>
                <h2 class="text-center">Your User ID: {{ userId }}</h2>
                <button class="btn btn-warning">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style scoped>
button {
    widows: 100%;
}
</style>