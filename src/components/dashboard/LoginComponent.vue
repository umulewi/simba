<script>
import { globalVariable } from "@/global";
import axios from 'axios';

export default {
  name: 'LoginPage',
  setup() {
    return { globalVariable };
  },

  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      showPassword: false,  // Add this to control password visibility
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(`${globalVariable}/login`, {
          email: this.email,
          password: this.password,
        });

        if (response.data.token) {
          // Store token in localStorage
          localStorage.setItem('authToken', response.data.token);

          // Redirect to the SelectPage
          this.$router.push('/dashboard/');
        }
      } catch (error) {
        this.errorMessage = error.response?.data?.message || 'Login failed. Please try again.';
      }
    },
  },
};
</script>

<template>
<div class="page-wrapper" id="main-wrapper">
    <div class="container-fluid">
        <div class="logo-img">
          
            <img :src="require('@/assets/img/logo11111.png')"/>
        </div>
        <form @submit.prevent="login">
            <div class="mb-4">
              <p class="alert alert-danger" v-if="errorMessage">{{ errorMessage }}</p>
            
            </div>
            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" v-model="email" class="form-control" id="email" name="email" required>
                
            </div>

            

            <div class="form-group">
                <input class="form-control" v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="" required/>
            </div>
            <div class="form-group">
                <label>
                    
                    <input class="form-check-input primary" style="
                width: 20px;
                height: 20px;
                border: 2px solid #003966;
                background-color: white;
                appearance: none;
                cursor: pointer;
                transition: background-color 0.3s, border-color 0.3s;
                "
                onfocus="this.style.boxShadow='0 0 5px rgba(0, 123, 255, 0.5)'"
                onblur="this.style.boxShadow='none'"
                onchange="this.style.backgroundColor = this.checked ? '#003966' : 'white'; this.style.borderColor = this.checked ? '#003966' : '#003966';" type="checkbox" v-model="showPassword" />
                    Show Password
                </label>
            </div>

            <button type="submit" class="btn-primary" name="submit">Sign In</button><br><br>
            
            

            <div class="d-flex align-items-center justify-content-between mb-4">
                <div class="form-check">
                    <a class="text fw-bold" href="forgot-password" style="color:#003966"><!--Forgot Password?--></a>
                </div>
                <a class="" href="./" style="color:#003966"><i class="ti ti-arrow-back"></i>Go back </a>
            </div>
        </form>
    </div>
</div>
</template>



<style scoped>

        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        .page-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%; /* Full width */
            background-color: #f9f9f9;
        }

        .container-fluid {
            max-width: 500px;
            width: 100%;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
            max-height: 90vh; /* Limits the height to 90% of the viewport */
            overflow-y: auto; /* Makes the container scrollable if needed */
        }

        .logo-img {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }

        .logo-img img {
           
            height: 100px;
        }

        .form-control {
            border: 1px solid #ccc;
            border-radius: 5px;
            transition: border-color 0.3s, box-shadow 0.3s;
            font-size: 16px;
        }

        .form-control:focus {
            border-color: #003966;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
            outline: none;
        }

        .form-label {
            font-weight: bold;
            margin-bottom: 5px;
            display: block;
        }

        .btn-primary {
          /* background-color: #003966 !important;
          color: #FFE338 !important; */
            width: 100%;
            background-color:  #003966; 
            color: white; 
            border: 2px solid  #003966;
            border-radius: 8px; 
            padding: 10px 16px; 
            font-size: 16px; 
            font-weight: 600; 
            text-align: center; 
            cursor: pointer;
            transition: all 0.3s ease; 
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
        }
        .btn-primary:hover {
            background-color: #003966 ; 
            color: #FFE338 ; 
            box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2); 
            transform: translateY(-2px); 
            font-weight: bold;
        }
        .btn-primary:active {
            background-color: #003966; 
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15); 
            transform: translateY(0); 
        }


        .btn-secondary {
            width: 100%;
            background-color: #6c757d;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            font-size: 16px;
            margin-top: 10px;
        }

        .btn-secondary:hover {
            background-color: #5a6268;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-check-label {
            font-size: 14px;
        }

        @media (max-width: 768px) {
            .container-fluid {
                padding: 15px;
                max-height: 100vh; /* Adjusts for smaller screens */
            }
        }
    </style>
