import React,{useState} from 'react';
function Text(props) {
    let [dfault,setText]=useState("");
    let [words,setWords]=useState(0);
    let [char,setChar]=useState(0);
    let handleUpperCase=()=>{
        let x=document.getElementById("Textarea").value.toUpperCase();
        setText(x);
    }
    const handleClear=()=>{
        setWords(0);
        setChar(0);
        setText("");
    }
    const handleCapitalize=()=>{
        var txt=document.getElementById("Textarea").value.toLowerCase().replaceAll("\n"," ")
        let x=txt.split(" ");
        let res="";
        let i;
        for (i of x){
            res=res.concat(i.charAt(0).toUpperCase() + i.slice(1)+" ");
        }
        res=res.slice(0,res.length-1)
        setText(res);
    }
    const handleExtraSpace=()=>{
        let x=document.getElementById("Textarea").value.split(" ");
        let res="";
        let i;
        for (i of x){
            if(i!=""){
                res=res.concat(i+" ");
            }
        }
        res=res.slice(0,res.length-1);
        setText(res);
    }
    const handleChange=(e)=>{
        setText(e.target.value);
        var temp=(e.target.value).replaceAll('\n', ' ')
        var wrd=temp.split(" ")
        var result = wrd.filter((checkspace)=>{
            return checkspace!=""
        });
        setWords(result.length);
        setChar(e.target.value.length);
    }
    const handleLowerCase=()=>{
        let x=document.getElementById("Textarea").value.toLowerCase();
        setText(x);
    }
    return (
        <>
            <div className='container mx-auto' >
                <h2>Enter Text Below</h2>
                <div className="mb-3 justify-content-center">
                    <textarea className="form-control" onChange={handleChange} value={dfault} id="Textarea"  rows="6"></textarea>
                </div>
                <div className="mb-3 justify-content-center">
                        <button className='btn btn-primary mx-3 my-2' onClick={handleUpperCase}>UpperCase</button>
                        <button className='btn btn-primary mx-3 my-2' onClick={handleLowerCase}>LowerCase</button>
                        <button className='btn btn-primary mx-3 my-2' onClick={handleClear}>Clear</button>
                        <button className='btn btn-primary mx-3 my-2' onClick={handleCapitalize}>Capitalize</button>
                        <button className='btn btn-primary mx-3 my-2' onClick={handleExtraSpace}>RemoveExtaSpace</button>
                </div>
                <div className="mb-3 justify-content-center">
                    <p>{words}  No. of words and <br/> {char} No. of characters <br/>{0.008*words} minutes to read</p>
                </div>
            </div>
        </>
    );
}

export default Text;