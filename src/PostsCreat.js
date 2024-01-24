import React,{useState} from "react";
import axios, {Axios} from "axios";

export default () => {
    const [title,setTitle]=useState('')
    const onsubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts',{
            title
        });

        setTitle('');
    }

    return <div>
        <form className={'form-group'} onSubmit={onsubmit}>
            <div>
                <label>Creat a Posts</label>
                <input className={'form-control'}
                       value={title}
                onChange={e => setTitle(e.target.value)}/>

            </div>
            <button className={'btn btn-primary'}>Submit</button>
        </form>
    </div>

}