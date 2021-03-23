import React, { useState } from 'react'
import validateInfo from '../validateInfo'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your message was submitted: ' + this.state.value);

        this.form.validateFields();

        if (!this.form.isValid()) {
            console.log('form is invalid: do not submit');
        } else {
            console.log('form is valid: submit');
        }
        event.preventDefault();
    }

    render() {
        return (
            <main className="bg-gray-300 min-h-screen p-12">
                <section className="container mx-auto">
                    <h1 class="mt-6 text-center text-3xl font-extrabold text-gray-900 p-6">
                        Contact Me
                </h1>
                    <h2 className="text-lg text-gray-600 flex justify-center mb-12">You can contact me directly on my phone +46790738135
                    Or you are welcom to leave a message and
                    I will get back to you as soon as possible.
                    </h2>
                </section>
                <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={this.handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="Full Name" class="sr-only">Full Name</label>
                            <input
                                onChange={this.handleChange}
                                value={this.state.name}
                                id="name"
                                name="name"
                                type="name"
                                autocomplete="nameFull Name" r
                                equired class="appearance-none rounded-none relative block w-full px-2 py-2 
                                border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md 
                                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Full Name"
                            />
                        </div>
                        <br />
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input
                                onChange={this.handleChange}
                                value={this.state.email}
                                id="email-address"
                                name="email"
                                type="email"
                                autocomplete="email"
                                required class="appearance-none rounded-none relative block w-full px-3 py-2 
                            border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none 
                            focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address" />
                        </div>
                        <div class="mt-1">
                            <textarea
                                onChange={this.handleChange}
                                id="message"
                                name="message" rows="10"
                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-10 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Your message"></textarea>
                        </div>
                        <p class="mt-2 text-sm text-gray-500">
                            Write your message here.
                        </p>
                    </div>
                    <div>
                        <button
                            name="action"
                            value={this.state.submit}
                            type="submit"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm 
                            font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            submit
                            </button>
                    </div>
                </form>

            </main >
        )
    }
}
export default Contact;