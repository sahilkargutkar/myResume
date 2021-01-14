import React,{useState} from 'react'
import {ContactSection,Addressp,Addressemail,ContactContainer,ContactTitle,Span,Form,FormInput,InputText,InputEmail,InputExp,TextArea,InputSubmit,AddressClass, Addressh4} from './contactElements';
import {FaMailBulk} from 'react-icons/fa'
import {db} from '../../firebase'

const Contact = () => {
    const [name,setName] =useState("");
    const [subject,setSubject] =useState("");
    const [email,setEmail] =useState("");
    const [message,setMessage] =useState("");

    const [loader,setLoader] = useState(false);

    



const handleSubmit=(e) =>{

    e.preventDefault();
    setLoader(true)

    db.collection('contacts')
    .add({
        name:name,
        email:email,
        subject:subject,
        message:message,

    })
    .then(() => {alert('Message has been submitted ✌️'); setLoader(false);})
    .catch((error)=> {alert(error.message); setLoader(false); });

    setName('');
    setEmail('');
    setMessage('');
    setSubject('');

    
};



    return (
        <ContactContainer>
        <ContactSection id="contactme" >
            <div class="container">
          <ContactTitle>  <Span> <FaMailBulk />Drop </Span> Me a Line      </ContactTitle>
            <Form action="" onSubmit={handleSubmit}>
                <FormInput>
                    
                    <InputText type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value )}/>
                    <br/>
                    <InputText type="text"  placeholder="E-mail"  value={email} onChange={(e) => setEmail(e.target.value )}/>
                </FormInput>
                
                <InputText type="text" class="sub" placeholder="subject" value={subject} onChange={(e) => setSubject(e.target.value )}/>


                <TextArea cols="30" rows="10" placeholder="Message"  value={message} onChange={(e) => setMessage(e.target.value )}></TextArea>   
                  <InputSubmit type="submit" value="Send Message" disabled={alert} style={{background:loader ? '#ccc' : "dodgerblue" }} />  

                  

                </Form>
              

            </div>
        </ContactSection>

        <AddressClass>           
                            <Addressh4>Address and Phone</Addressh4>
                            <Addressp>Sahil Kargutkar  <br />Mumbai <br/>(91) 9892592559<br/></Addressp><br />
                            

                            <Addressemail to="mailto:sahilkargutkar.sk@gmail.com">sahilkargutkar.sk@gmail.com</Addressemail>

                            

                    </AddressClass>

        
        </ContactContainer>
        
    )
}

export default Contact
