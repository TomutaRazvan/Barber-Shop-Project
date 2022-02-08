import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import "../Home_scss/home_form.scss";
import "../Home_scss/home_main.scss";



export const HomeForm =  forwardRef((props, ref) => {
    // this is another ref local to the component where we actually acces the DOM
    const compRef = useRef();
    // this binds the methods we have defined in the callbask to the ref
    // think of ref as instance varibles
    useImperativeHandle(ref, () => ({
      scrollIntoView: () => {
        compRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }));


// --------FORM VALIDATION

    const [name, setName] = useState("");
    const [phone, setPhone] =useState("");
    const [email, setEmail] =useState("");
    const [check, setCheck] = useState("");
    const [date, setDate] = useState("");
    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [showPayment, setShowPayment] = useState("hideClass");
    const [backgroundPayment, setBackgroundPayment] = useState("hideClass");
    const [submitMessage, setSubmitMessage] = useState("hideClass");
    const [showForm, setShowForm] = useState("showFlex");


    function handleName(e) {
        setName(e.target.value)
    }

    function handlePhone(e) {
        setPhone(e.target.value)
    }
    
    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleCheck(e) {
        setCheck(e.target.value)
    }

    function handleDate(e) {
        setDate(e.target.value)
    }

// ------------------



    let regexLetters = /^[a-zA-Z]+$/;
    let regexNumbers = /^[0-9]+$/;


    function handleSubmit(e) {
        e.preventDefault();

        if(!name.match(regexLetters) || name.length < 3) {
            setNameError("showClass")
        } else {
            setNameError("hideClass")
        }

        if(!phone.match(regexNumbers) || phone.length < 10) {
            setPhoneError("showClass")
        } else {
            setPhoneError("hideClass")
        }

        if(name.match(regexLetters) && phone.match(regexNumbers)) {
            setShowPayment("paymentForm");
            setBackgroundPayment("absoluteDiv");
        } else {
            setShowPayment("hideClass")
        }
    }

// -----FORM VALIDATION



//--------PAYMENT VALIDATION

    const [cardName, setCardName] = useState("");
    const [cardNumber1, setCardNumber1] =useState("");
    const [cardNumber2, setCardNumber2] =useState("");
    const [cardNumber3, setCardNumber3] =useState("");
    const [cardNumber4, setCardNumber4] =useState("");
    const [cardMonth, setCardMonth] =useState("");
    const [cardYear, setCardYear] =useState("");
    const [cardCsc, setCardCsc] = useState("");
    const [paymentNameError, setPaymentNameError] = useState("");
    const [paymentCscError, setPaymentCscError] = useState("");
    const [paymentNumberError, setPaymentNumberError] = useState("");


    function handleCardName(e) {
        setCardName(e.target.value)
    }

    function handleCardNumber1(e) {
        setCardNumber1(e.target.value)
    }

    function handleCardNumber2(e) {
        setCardNumber2(e.target.value)
    }

    function handleCardNumber3(e) {
        setCardNumber3(e.target.value)
    }

    function handleCardNumber4(e) {
        setCardNumber4(e.target.value)
    }
    
    function handleCardMonth(e) {
        setCardMonth(e.target.value)
    }

    function handleCardYear(e) {
        setCardYear(e.target.value)
    }

    function handleCardCsc(e) {
        setCardCsc(e.target.value)
    }


// -----------------


    function handleSubmitPayment(e) {
        e.preventDefault();

        if(!cardName.match(regexLetters) || cardName.length < 3) {
            setPaymentNameError("showClass")
        } else {
            setPaymentNameError("hideClass")
        }

        if(!cardNumber1.match(regexNumbers) ||
            !cardNumber2.match(regexNumbers) ||
            !cardNumber3.match(regexNumbers) ||
            !cardNumber4.match(regexNumbers)) {

            setPaymentNumberError("showClass")

        } else {
            setPaymentNumberError("hideClass")
        }

        if(!cardCsc.match(regexNumbers)) {
            setPaymentCscError("showClass")
        } else {
            setPaymentCscError("hideClass")
        }


        if(cardName.match(regexLetters) &&
             cardNumber1.match(regexNumbers) &&
             cardNumber2.match(regexNumbers) &&
             cardNumber3.match(regexNumbers) &&
             cardNumber4.match(regexNumbers) &&
             cardCsc.match(regexNumbers)) {

            setShowPayment("hideClass");
            setBackgroundPayment("hideClass");
            setShowForm("hideClass");
            setSubmitMessage("showClass")


        } else {
            setShowPayment("paymentForm")
        }
    }

    

//-------PAYMENT VALIDATION
    


    return (
        <section className='form' ref={compRef}>

            <div className='formTitle'>
                <h3>ONLINE BOOK</h3>
                
                <h2 id="scroll">MAKE AN APPOINTMENT</h2>
            </div>

            <form className={showForm} onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleName} placeholder="Your Name" minLength={3} required/>

                <input type="text" value={phone} onChange={handlePhone} placeholder="Phone Number" minLength={10} required/>

                <input type="email" value={email} onChange={handleEmail} placeholder="Email Address" required/>

                <select className='serviceOption' value={check} onChange={handleCheck}>
                    <option value="Classic Cut">Classic Cut - 15$</option>
                    <option value="Buzz Cut">Buzz Cut - 17$</option>
                    <option value="To be a Man">To be a Man - 21$</option>
                    <option value="Classic Shave">Classic Shave - 15$</option>
                    <option value="Deluxe Shave">Deluxe Shave - 17$</option>
                    <option value="Shiner Shave">Shiner Shave - 21$</option>
                    <option value="Modern Shave">Modern Shave - 20$</option>
                    <option value="Brow Wax">Brow Wax - 15$</option>
                    <option value="Colouer Camo">Colouer Camo - 21$</option>
                </select>

                <input type="date" value={date} onChange={handleDate} required/>

                <select className='hours' value={check} onChange={handleCheck}>
                    <option value="11:00 - 11:30">11:00 - 11:30</option>
                    <option value="11:30 - 12:00">11:30 - 12:00</option>
                    <option value="12:00 - 12:30">12:00 - 12:30</option>
                    <option value="12:30 - 13:00">12:30 - 13:00</option>
                    <option value="13:00 - 13:30">13:00 - 13:30</option>
                    <option value="13:30 - 14:00">13:30 - 14:00</option>
                    <option value="15:00 - 15:30">15:00 - 15:30</option>
                    <option value="15:30 - 16:00">15:30 - 16:00</option>
                    <option value="16:00 - 16:30">16:00 - 16:30</option>
                    <option value="16:30 - 17:00">16:30 - 17:00</option>
                    <option value="17:00 - 17:30">17:00 - 17:30</option>
                    <option value="17:30 - 18:00">17:30 - 18:00</option>
                    <option value="18:00 - 18:30">18:00 - 18:30</option>
                    <option value="18:30 - 19:00">18:30 - 19:00</option>
                    <option value="19:00 - 19:30">19:00 - 19:30</option>
                    <option value="19:30 - 20:00">19:30 - 20:00</option>
                </select>


                {/* ----FORM ERRORS----------- */}

                <div className='formErrors'>
                    <p className={nameError}>* Name must contain only letters and have at least 3 characters.</p>
                    <p className={phoneError}>* Phone number must contain only numbers have at least 3 characters.</p>
                </div>

                <input type="submit" value="SUBMIT"/>
            </form>



{/* !!-------------PAYMENT FORM--------------------- */}

            <div className={backgroundPayment}>
                <form className={showPayment} onSubmit={handleSubmitPayment}>
                    <div>
                        <label for="nameCard">Name</label>
                        <input type="text" value={cardName} onChange={handleCardName} placeholder='Tomuta Razvan' minLength={3} required/>
                    </div>
                
                    <div>
                        <label for="numberCard">Card number</label>
                
                        <div  className='numberInputs'>
                            <input id="numberCard" type="text" value={cardNumber1} onChange={handleCardNumber1} placeholder='0000' minLength={4} maxLength={4} required/>
                            <input id="numberCard" type="text" value={cardNumber2} onChange={handleCardNumber2} placeholder='0000' minLength={4} maxLength={4} required/>
                            <input id="numberCard" type="text" value={cardNumber3} onChange={handleCardNumber3} placeholder='0000' minLength={4} maxLength={4} required/>
                            <input id="numberCard" type="text" value={cardNumber4} onChange={handleCardNumber4} placeholder='0000' minLength={4} maxLength={4} required/>
                        </div>
                    </div>
                
                    <div className='paymentFlexDiv'>
                        <div>
                            <label>Expiration date</label>
                
                            <div className='dateInputs'>
                                <select value={cardMonth} onChange={handleCardMonth}>
                                    <option value="0">MM</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <p>/</p>
                                <select value={cardYear} onChange={handleCardYear}>
                                    <option value="2022">22</option>
                                    <option value="2023">23</option>
                                    <option value="2024">24</option>
                                    <option value="2025">25</option>
                                    <option value="2026">26</option>
                                    <option value="2027">27</option>
                                    <option value="2028">28</option>
                                    <option value="2029">29</option>
                                    <option value="2030">30</option>
                                    <option value="2031">31</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label for="cscCard">CSC</label>
                            <input id="cscCard" type="text" value={cardCsc} onChange={handleCardCsc} maxLength={3} minLength={3} required/>
                        </div>
                    </div>
                
                    {/* ----PAYMENT ERRORS----------- */}
                
                    <div className='paymentErrors'>
                            <p className={paymentNameError}>* Name must contain only letters and have at least 3 characters.</p>
                            <p className={paymentNumberError}>* Card number must contain only numbers and 4 digits</p>
                            <p className={paymentCscError}>* CSC must contain only numbers and 3 digits</p>
                        </div>
                
                    <input type="submit" value="PAY" />
                </form>
            </div>

            <div className={submitMessage}>
                <h2 className="request">
                    YOUR REQUEST HAS BEEN SUCCESSFULLY SUBMITTED
                </h2>
            </div>
        </section>
    )
});
