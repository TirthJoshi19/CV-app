import React, {useState} from "react";
import CVContainer from "./CV";

export default function CVForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [education, setEducation] = useState('');
    const [school, setSchool] = useState('');
    const [studyDate, setStudyDate] = useState('');
    const [job, setJob] = useState('');
    const [company, setCompany] = useState('');
    const [joiningDate, setJoiningDate] = useState('');
    const [leavingDate, setLeavingDate] = useState('');

    const [isEditingPersonal, setIsEditingPersonal] = useState(false);
    const [isEditingEducation, setIsEditingEducation] = useState(false);
    const [isEditingWork, setIsEditingWork] = useState(false);

    const toggleEditingPersonal = () => setIsEditingPersonal(!isEditingPersonal);
    const toggleEditingEducation = () => setIsEditingEducation(!isEditingEducation);
    const toggleEditingWork = () => setIsEditingWork(!isEditingWork);

    return (
        <div className="formDiv">
            <form>
                <h1 className="form-h1">Your Details</h1>
        
                <div className="form-container">
                    <h3>Personal Information</h3>
                    {isEditingPersonal ? (
                        <>
                            <input type="text" placeholder="Enter Your Name" value={name} onChange={e => setName(e.target.value)} />
                            <input type="email" placeholder="Enter Your E-mail Address" value={email} onChange={e => setEmail(e.target.value)} />
                            <input type="number" placeholder="Enter Your Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
                            <input type="text" placeholder="Enter Your LinkedIn Username" value={linkedin} onChange={e => setLinkedin(e.target.value)} />
                            <Button text="Save" onClick={toggleEditingPersonal} />
                        </>
                    ) : (
                        <>
                            
                            <Button text="Edit" onClick={toggleEditingPersonal} />
                        </>
                    )}

                    <h3>Educational Information</h3>
                    {isEditingEducation ? (
                        <>
                            <input type="text" placeholder="Your Educational Background" value={education} onChange={e => setEducation(e.target.value)} />
                            <input type="text" placeholder="School Name" value={school} onChange={e => setSchool(e.target.value)} />
                            <label htmlFor="studyDate">Studied Till:</label>
                            <input type="date" placeholder="Studied Till..." value={studyDate} onChange={e => setStudyDate(e.target.value)} />
                            <Button text="Save" onClick={toggleEditingEducation} />
                        </>
                    ) : (
                        <>
                            
                            <Button text="Edit" onClick={toggleEditingEducation} />
                        </>
                    )}

                    <h3>Work Experience</h3>
                    {isEditingWork ? (
                        <>
                            <input type="text" value={job} onChange={e => setJob(e.target.value)} placeholder="Previous Job Position" />
                            <input type="text" placeholder="Company's Name" value={company} onChange={e => setCompany(e.target.value)} />
                            <label htmlFor="joiningDate">Joining Date:</label>
                            <input type="date" placeholder="Joining Date" value={joiningDate} onChange={e => setJoiningDate(e.target.value)} />
                            <label htmlFor="leavingDate">Leaving Date:</label>
                            <input type="date" placeholder="Leaving Date" value={leavingDate} onChange={e => setLeavingDate(e.target.value)} />
                            <Button text="Save" onClick={toggleEditingWork} />
                        </>
                    ) : (
                        <>
                            
                            <Button text="Edit" onClick={toggleEditingWork} />
                        </>
                    )}
                </div>
            </form>

            <CVContainer 
                name={name}
                phone={phone}
                linkedin={linkedin}
                email={email}
                education={education}
                school={school}
                studyDate={studyDate}
                job={job}
                company={company}
                joiningDate={joiningDate}
                leavingDate={leavingDate}
            />
        </div>
    )
}

export function Button(props) {
    return (
        <button className={props.text} onClick={e => {
            e.preventDefault();
            props.onClick();
        }}>
            {props.text}
        </button>
    );
}
