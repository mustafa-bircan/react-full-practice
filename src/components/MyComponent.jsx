import React, { useState } from 'react';

function MyComponent() {

    // const [name, setName] = useState("Guest");
    // const [age, setAge] = useState(0);
    // const [isEmployed, setIsEmployed] = useState(false);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setCommment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setCommment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    // const updateName = () => {
    //     setName("Spongebob");
    // }

    // const incrementAge = () => {
    //     //setAge(age + 1);
    //     setAge(age + 3);
    //     // setAge(age + 5);
    // }

    // const toggleEmployedStatus = () => {
    //     setIsEmployed(!isEmployed);
    // }

    return (

        <div>
            {/* <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button> */}

            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number'></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Write something'></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === 'Pick Up'} onChange={handleShippingChange} />
                Pick Up
            </label>

            <label>
                <input type="radio" value="Delivery" checked={shipping === 'Delivery'} onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

        </div>

    )

}
export default MyComponent