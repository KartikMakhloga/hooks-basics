import { useEffect } from "react";
import Form from "./Form";
import Display from "./Display";
import { useState } from "react";

function NewApp() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [theme, setTheme] = useState("light");

  useEffect(()=>{
    alert("theme has been changed")
  },[theme])

  return (
    <div className="my-container">
      <Display name={name} email={email} phone={phone} theme={theme} />
      <Form
        theme={theme}
        handleName={setName}
        handleEmail={setEmail}
        handlePhone={setPhone}
        handleTheme={setTheme}
      />
    </div>
  );
}

export default NewApp;
