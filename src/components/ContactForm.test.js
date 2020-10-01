import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm';

describe('Tests ContactForm', () => {
    test('App renders without errors', () => {
        render(<ContactForm/>)
    })

    test('user can fillout and submit form', async () => {
        //Arrange
        render(<ContactForm/>)
        const firstNameInput = screen.getByLabelText(/first name/i)
        const lastNameInput = screen.getByLabelText(/Last Name/i)
        const emailInput = screen.getByLabelText(/Email/i)
        const messageInput = screen.getByLabelText(/Message/i)
        const submitButton = screen.getByRole(/button/i)

        fireEvent.change(firstNameInput, {target: {value: 'Paul'}})
        fireEvent.change(lastNameInput, {target: {value: 'Kim'}})
        fireEvent.change(emailInput, {target: {value: 'paul@paul.com'}})
        fireEvent.change(messageInput, {target: {value: 'Hello World'}})
        fireEvent.change(submitButton)
    })

    //Act
    
})