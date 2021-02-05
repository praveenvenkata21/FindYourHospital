import React from "react";
import ChatBot from "react-simple-chatbot";
function CustomChatbot(props) {
    const config = {
        width: "300px",
        height: "400px",
        floating: true
    };
  const steps = [
    {
        id: "Greet",
        message: "Hey How may I help you",
        trigger: "Ask specialization"
     },
     {
        id: "Ask specialization",
        message: "Please type your speciality?",
        trigger: "Waiting user input for name"
     },
     {
        id: "Waiting user input for name",
        user: true,
        trigger: "speciality of user"
     },
     {
        id: "speciality of user",
        message: "Please click on the cities you want",
        trigger: "Further details"
     },

     {
        id: "Further details",
        message: "Select the cities",
        trigger: "cities options"
     },
     {
        id: "cities options",
        options: [
                   {
                     value: "Vizag",
                     label: "Vizag",
                     trigger: "Vizag Hospitals"
                   },
                   { 
                     value: "Kadapa",
                     label: "Kadapa",
                     trigger: "Kadapa Hospitals"
                   }, 
                   { 
                    value: "Kakinada",
                    label: "Kakinada",
                    trigger: "Kakinada Hospitals"
                  },
                  { 
                    value: "Srikakulam",
                    label: "Srikakulam",
                    trigger: "Srikakulam Hospitals"
                  },
                  { 
                    value: "Vijayawada",
                    label: "Vijayawada",
                    trigger: "Vijayawada Hospitals"
                  },
                  { 
                    value: "Kurnool",
                    label: "Kurnool",
                    trigger: "Kurnool Hospitals"
                  },{ 
                    value: "Tirupathi",
                    label: "Tirupathi",
                    trigger: "Tirupathi Hospitals"
                  },{ 
                    value: "Guntur",
                    label: "Guntur",
                    trigger: "Guntur Hospitals"
                  },{ 
                    value: "No query",
                    label: "No query",
                    trigger: "Done"
                  }
                  

                 ]
     },
     {
        id: "Vizag Hospitals",
        message: "->Cardiology ->Apollo Hospital ->For more details visit website",
        trigger: "cities options"
     },
     {
        id: "Kadapa Hospitals",
        message: "->Dentist->sai-srinivasa hospital->For more details visit website",
        trigger: "cities options"
     },
     {
        id: "Kakinada Hospitals",
        message: "->ENT->Apollo hospital Kakinada->For more details visit website",
        trigger: "cities options"
     },
     {
        id: "Srikakulam Hospitals",
        message: "->General Medicine->Kims hospital Srikakulam->For more details visit website",
        trigger: "cities options"
     },
     {
        id: "Vijayawada Hospitals",
        message: "->Pulmonology->Manipal super specialty hospital ->For more details visit website",
        trigger: "cities options"
     },
     {
        id: "Kurnool Hospitals",
        message: "->Opthomology ->OMNI hospital ->For more details visit website",
        trigger: "cities options"
     },
     {
        id: "Tirupathi Hospitals",
        message: "->Dentist->Vallabha hospital ->For more details visit website",
        trigger: "cities options"
     },
     {
        id: "Guntur Hospitals",
        message: "->Gyneacology ->Tulasi Multispeciality hospital Guntur->For more details visit website",
        trigger: "cities options"
     },
     {
         id: "Done",
         message: "Have a great day !!",
         end: true
     }
    ];
  return <ChatBot steps={steps} {...config} />
}
export default CustomChatbot;