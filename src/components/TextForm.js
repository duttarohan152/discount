import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setAmount(event.target.value);
    }

    const handlePromoClick = () => {
        let temp = promo.toLocaleLowerCase()
        if(promos.has(temp)){
            setDiscount(promos.get(temp));
            props.displayAlert(["Success:", " Promo code applied"], "success");
        }
        else{
            setDiscount(0);
            props.displayAlert(["Failed:", " Invalid Promo code"], "danger");
        }
        console.log("Promo Code: "+promo);
        
    }
    const handleSeniorClick = () => {
        if(age >= 60){
            let x = (age>=80)?0.8:Math.floor(age/10)/10;
            setDiscount(x);
            props.displayAlert(["Success:", " Senior citizen discount applied"], "success");
        }
        else{
            setDiscount(0);
            props.displayAlert(["Failed:", " Sorry you're not a senior citizen (Age >= 60)"], "danger");
        }
        console.log("Senior citizen discount");
    }
    const handleStudentClick = () => {
        // console.log(studentid[4]+"-"+ studentid[12]);
        if(studentid[4] !== "H" || studentid[12] !== "P"){
            props.displayAlert(["Failed:", " Not a valid BITS Pilani student ID"], "danger");
        }
        else{
            setDiscount(0.4);
            props.displayAlert(["Success:", " Student's discount applied"], "success");
        }
            console.log("Students discount");
    }
    const handleNewuserClick = () => {
        if(users.has(number)){
            setDiscount(0);
            props.displayAlert(["Failed:", " Sorry you're not a new user"], "danger");
        }
        else{
            users.add(number);
            setDiscount(0.3);
            props.displayAlert(["Success:", " New user discount applied"], "success");
        }
            console.log(users);
    }

    // const handleBdayClick = () => {
    //     let temp = bday.split("-")
    //     console.log(date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate());
    //     if(temp[0] === date.getFullYear() && temp[1] === date.getMonth() && temp[2] == date.getDate()){
    //     console.log(date.getUTCDate());
    //     }
    //     setDiscount(0);
    //     props.displayAlert(["Success:", " Removed all the Discounts"], "success")
    // }

    const handleClearClick = () => {
        console.log("No discount");
        setDiscount(0);
        props.displayAlert(["Success:", " Removed all the Discounts"], "success")
    }

    const [amount, setAmount] = useState("");
    const [discount, setDiscount] = useState(0);
    const [promo, setPromo] = useState("");
    const [age, setAge] = useState("")
    const [number, setNumber] = useState("")
    const [studentid, setID] = useState("")
    // const [bday, setBday] = useState("")

    const promos = new Map([
        ["flat50", 0.5],
        ["flat20", 0.2]
    ]);

    const [users] = useState(new Set())
    // const date = new Date();

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <input className="form-control" type="number" style={{ color: props.mode === 'dark' ? '#e9f2f3' : 'black', backgroundColor: props.mode === 'dark' ? '#1c1e1f' : '#e9f2f3' }} value={amount} onChange={handleOnChange} placeholder="Enter an Amount" id="myBox" rows="2"></input>
                </div>
                <div className='col-md-5'>
                    <div className="input-group">
                        <button disabled={amount.length === 0 || promo.length === 0} className={`btn btn-outline-${(props.mode === 'dark') ? 'light' : 'dark'} mx-2`} onClick={handlePromoClick}>Promo Code</button>
                        <input className="form-control" style={{ color: props.mode === 'dark' ? '#e9f2f3' : 'black', backgroundColor: props.mode === 'dark' ? '#1c1e1f' : '#e9f2f3' }} placeholder="Enter a promo code" id="promo" rows="1" value={promo} onChange={(x) => setPromo(x.target.value)}></input>
                    </div>
                    <div className="input-group mx-2">
                        <button disabled={amount.length === 0 || age.length === 0} className={`btn btn-outline-${(props.mode === 'dark') ? 'light' : 'dark'} my-1`} onClick={handleSeniorClick}>Senior Citizen Discount</button>
                        <input className="form-control mx-2" type="number" style={{ color: props.mode === 'dark' ? '#e9f2f3' : 'black', backgroundColor: props.mode === 'dark' ? '#1c1e1f' : '#e9f2f3' }} placeholder="Enter your age" id="senior" rows="1" value={age} onChange={(x) => setAge(x.target.value)}></input>
                    </div>
                    <div className="input-group mx-2">
                        <button disabled={amount.length === 0 || studentid.length !== 13} className={`btn btn-outline-${(props.mode === 'dark') ? 'light' : 'dark'}`} onClick={handleStudentClick}>Student's Discount</button>
                        <input className="form-control mx-2" type="text" style={{ color: props.mode === 'dark' ? '#e9f2f3' : 'black', backgroundColor: props.mode === 'dark' ? '#1c1e1f' : '#e9f2f3' }} placeholder="Enter your student's id" id="student" rows="1" value={studentid} onChange={(x) => setID(x.target.value)}></input>
                    </div>
                    <div className="input-group mx-2">
                        <button disabled={amount.length === 0 || number.length < 10} className={`btn btn-outline-${(props.mode === 'dark') ? 'light' : 'dark'} my-1`} onClick={handleNewuserClick}>New User Discount</button>
                        <input className="form-control mx-2" type="number" style={{ color: props.mode === 'dark' ? '#e9f2f3' : 'black', backgroundColor: props.mode === 'dark' ? '#1c1e1f' : '#e9f2f3' }} placeholder="Enter your phone number" id="newuser" rows="1" value={number} onChange={(x) => setNumber(x.target.value)}></input>
                    </div>
                    {/* <div className="input-group mx-2">
                        <button disabled={amount.length === 0 || bday.length === 0} className={`btn btn-outline-${(props.mode === 'dark') ? 'light' : 'dark'} my-1`} onClick={handleBdayClick}>New User Discount</button>
                        <input className="form-control mx-2" type="date" style={{ color: props.mode === 'dark' ? '#e9f2f3' : 'black', backgroundColor: props.mode === 'dark' ? '#1c1e1f' : '#e9f2f3' }} placeholder="Enter your Birthday" id="birthday" rows="1" value={bday} onChange={(x) => setBday(x.target.value)}></input>
                    </div> */}
                    <button disabled={amount.length === 0} className={`btn btn-outline-${(props.mode === 'dark') ? 'light' : 'dark'} my-1 mx-2`} onClick={handleClearClick}>Remove Discounts</button>
                        
                </div>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? '#e9f2f3' : 'black' }}>
                <h3> Your Discount </h3>
                {/* <p>{text.split(/\s/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters ({(text.length === 0) ? 0 : text.split(" ").filter((element) => { return element.length !== 0 }).length * 0.008} minutes read)</p> */}
                <p>Your amount after ({discount*100}%) discount is : Rs. {(amount - amount*discount).toFixed(2)}</p>
            </div>

        </>
    )
}
