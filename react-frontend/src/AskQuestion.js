import styled from "styled-components";
import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./CheckBoxes.css"

export default function AskQuestion(){
    const [userInfo, setuserInfo] = useState({
        title: '',
        description: '',
        information: '',
    });
    
    const ondescription = (value) => {
        setuserInfo({ ...userInfo,
          description:value
        });
    } 
    const oninformation = (value) => {
        setuserInfo({ ...userInfo,
          information:value
        });
    } 

    const [checked1, setChecked1] = React.useState(false);

      const handleChange1 = () => {
        setChecked1(!checked1);
    };
    const [checked2, setChecked2] = React.useState(false);

      const handleChange2 = () => {
        setChecked2(!checked2);
    };
    const [checked3, setChecked3] = React.useState(false);

      const handleChange3 = () => {
        setChecked3(!checked3);
    };
    const [checked4, setChecked4] = React.useState(false);

      const handleChange4 = () => {
        setChecked4(!checked4);
    };
    const [checked5, setChecked5] = React.useState(false);

      const handleChange5 = () => {
        setChecked5(!checked5);
    };
    const [checked6, setChecked6] = React.useState(false);

      const handleChange6 = () => {
        setChecked6(!checked6);
    };
    const [checked7, setChecked7] = React.useState(false);

      const handleChange7 = () => {
        setChecked7(!checked7);
    };
    const [checked8, setChecked8] = React.useState(false);

      const handleChange8 = () => {
        setChecked8(!checked8);
    };

    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [value, setValue] = useState('');
    const api = axios.create({
        baseURL: "http://localhost:8080"
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const question = {
            questionTitle: event.target.elements.title.value,
            questionDescription: event.target.elements.body.value,
        };
        const confirmed = window.confirm("Are you sure you want to submit the form?");
        if(confirmed){
            await axios.post('http://localhost:8080/api/question/postQuestion', question)
                .then(response => {
                    setSuccess(true);
                    window.alert("Your question was posted successfully!");
                })
                .catch(error => {
                    if (error.response && error.response.status === 500) {
                        //setErrorMessage('500 response, some issue with the backend server');
                    }
                    else{
                        console.error(error);
                    }
                });
        }
    };

    return(

        <QuesTitle>
            <StyledHeader>Describe your question</StyledHeader>
            <form onSubmit={handleSubmit}>
                <QuestionTitle type="text" placeholder="Introduce the problem." name="title" />
                <MainQuestion placeholder="Describe any difficulties that have prevented you from solving it yourself." name="body" />
                <br/>
                <AdditionalInfo> Additional information and code </AdditionalInfo>
                <EditorToolbar toolbarId={'t1'}/>
                <ReactQuill
                    theme="snow"
                    value={userInfo.description}
                    onChange={ondescription}
                    placeholder={"Please enter additional information and code"}
                    modules={modules('t1')}
                    formats={formats}
                />
                <br />
                <br />
                <AdditionalInfo> Please select appropriate tags related to the question </AdditionalInfo>
                <label className="checkbox-label">
                    <input type="checkbox" checked={checked1} onChange={handleChange1}/>
                    <span className="checkbox-text">Java</span>
                </label>
                <label className="checkbox-label">
                    <input type="checkbox" checked={checked2} onChange={handleChange2}/>
                    <span className="checkbox-text">Python</span>
                </label>
                <label className="checkbox-label">
                    <input type="checkbox" checked={checked3} onChange={handleChange3}/>
                    <span className="checkbox-text">C++</span>
                </label>
                <label className="checkbox-label">
                    <input type="checkbox" checked={checked4} onChange={handleChange4}/>
                    <span className="checkbox-text">Swift</span>
                </label>
                <label className="checkbox-label">
                    <input type="checkbox" checked={checked5} onChange={handleChange5}/>
                    <span className="checkbox-text">Cloud Computing</span>
                </label>
                <label className="checkbox-label">
                    <input type="checkbox" checked={checked6} onChange={handleChange6}/>
                    <span className="checkbox-text">Database Technologies</span>
                </label>
                <label className="checkbox-label">
                    <input type="checkbox" checked={checked7} onChange={handleChange7}/>
                    <span className="checkbox-text">HTML</span>
                </label>
                <label className="checkbox-label">
                    <input type="checkbox" checked={checked8} onChange={handleChange8}/>
                    <span className="checkbox-text">Springboot</span>
                </label>
                <br/>
                <br/>    
                <SubmitButton type="submit">Submit</SubmitButton>
                
            </form>
        </QuesTitle>
    );
}
