<template>
<div class="col-lg-6 col-md-8 offset-lg-3 offset-md-2">
    <div class="card">
        <header class="card-header">
            <h4 class="py-0 mb-0">Step {{ formPosition + 1 }} of {{ formGroup.length }}</h4>
        </header>
        <section class="animation card-body">
            <h2 class="step-title">{{ formGroup[formPosition].title }}</h2>
            <div>
                <div class="mb-3" v-for="(field, index) in formGroup[formPosition].fields" :key="'field'+index">
                    <div v-if="field.label === 'Username'">
                        <label class="form-label">{{ field.label }}</label>
                        <div class="input-group">
                            <span class="input-group-text">@</span>
                            <input
                                :type="field.type"
                                :class="field.classes"
                                placeholder="Create a username"
                                v-model="field.value"
                            />
                        </div>
                        <div class="invalid-feedback" v-if="field.error">
                            {{ field.error }}
                        </div>
                    </div>
                    <div v-else>
                        <label class="form-label">{{ field.label }}</label>
                        <input :class="field.classes" :type="field.type" v-model="field.value" :placeholder="field.placeholder" />
                        <div class="invalid-feedback" v-if="field.error">
                            {{ field.error }}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="card-footer">
                <div class="buttons text-center">
                    <button class="btn btn-primary me-lg-2" v-if="formPosition > 0" @click="prevStep">Previous</button>
                    <button class="btn btn-primary me-lg-2" v-if="formPosition  < formGroup.length - 1" @click="nextStep">Next</button>
                    <button class="btn btn-primary" v-if="formPosition  === formGroup.length - 1" @click="createAccount()">Create Account</button>
                </div>
        </footer>
    </div>
</div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    data() {
        return {
            formPosition: 0,
            animation: 'animate-in',
            formGroup: [
                {
                    title: 'Personal Details',
                    fields: [
                        {
                            label: 'Full Name',
                            classes: ['form-control'],
                            value: '',
                            type: 'text',
                            placeholder: 'Enter your full name',
                            error: ''
                        },
                        {
                            label: 'Username',
                            classes: ['form-control'],
                            value: '',
                            type: 'text',
                            placeholder: 'Create a username',
                            error: ''
                        },
                    ],
                },
                {
                    title: "Email Address",
                    fields: [
                        {
                            label: 'Email',
                            classes: ['form-control'],
                            value: '',
                            type: 'email',
                            placeholder: 'Enter your email address',
                            error: ''
                        }
                    ],
                },
                {
                    title: "Create a Password",
                    fields: [
                        {
                            label: 'Password',
                            classes: ['form-control'],
                            value: '',
                            type: 'password',
                            placeholder: 'Enter a password',
                            error: '',
                        },
                        {
                            label: 'Confirm Password',
                            classes: ['form-control'],
                            value: '',
                            type: 'password',
                            placeholder: 'Confirm your password',
                            error: '',
                        }
                    ],
                }
            ],
        }
    },
    methods: {
        ...mapActions('account',[
            'register',
        ]),

        nextStep() {
            if (this.checkForm(this.formPosition)){
                this.animation = 'animate-out';
                setTimeout(() => {
                    this.animation = 'animate-in';
                    this.formPosition+=1;
                }, 500);
            }
        },
        prevStep() {
            this.formPosition-=1;
        },
        checkForm(formPosition){
            var fields = this.formGroup[formPosition].fields;
            // Check if email is valid
            if (fields[0].label === 'Email'){
                if (fields[0].value.indexOf('@') === -1){
                    fields[0].error = 'Please enter a valid email address';
                    fields[0].classes.push('is-invalid');
                    return false;
                }
                else{
                    fields[0].classes = ["form-control", "is-valid"];
                    fields[0].error = '';
                }
            }

            // Check if password is at least 8 characters long, has a number, contains uppercase and lowercase letter  
            if (fields[0].label === 'Password'){
                var password_value = fields[0].value;
                var password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
                if(password_regex.exec(password_value) === null){
                    fields[0].classes.push('is-invalid');
                    if (password_value.length < 8){
                        fields[0].error = 'Must be at least 8 characters long';
                        return false;
                    }
                    if (password_value.search(/[0-9]/) === -1){
                        fields[0].error = 'Must contain at least one number';
                        return false;
                    }
                    if (password_value.toLowerCase() === fields[0].value){
                        fields[0].error = 'Must contain at least one uppercase letter';
                        return false;
                    }
                    if (password_value.toUpperCase() === fields[0].value){
                        fields[0].error = 'Must contain at least one lowercase letter';
                        return false;
                    }
                }
                else{
                    fields[0].classes = ["form-control", "is-valid"];
                    fields[0].error = '';
                }
            }

            // Check that confirm password matches password
            if (fields[0].label === 'Password' && fields[1].label === 'Confirm Password'){
                if (fields[0].value !== fields[1].value){
                    fields[1].error = 'Passwords do not match';
                    fields[1].classes.push('is-invalid');
                    return false;
                }
                else{
                    fields[1].classes = ["form-control", "is-valid"];
                    fields[1].error = '';
                }
            }

            for (var i = 0; i < fields.length; i++) {
                if (fields[i].value === ''){
                    fields[i].error = 'This field is required';
                    fields[i].classes.push('is-invalid');
                    return false;
                }
                else{
                    fields[i].classes = ["form-control", "is-valid"];
                    fields[i].error = '';
                }
            }
            return true;
        },

        createAccount() {
            if (this.checkForm(this.formPosition)){
                const new_user = {
                    username: this.formGroup[0].fields[1].value,
                    email: this.formGroup[1].fields[0].value,
                    password: this.formGroup[2].fields[0].value,
                };
                this.register(new_user);
            }
        }
    },

}
</script>

<style>
    .animation-in {
    transform-origin: left;
    animation: in .6s ease-in-out;
    }
    .animation-out {
    transform-origin: bottom left;
    animation: out .6s ease-in-out;
    }

    .step-title{
        font-family: "Manrope Bold", Helvetica, Arial, sans-serif;
    }
</style>