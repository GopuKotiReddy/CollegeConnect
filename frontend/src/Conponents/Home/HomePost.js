import { Button } from '@material-ui/core'
import React from 'react'
import './Home.css'
import AddIcon from '@material-ui/icons/Add';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { useHistory } from 'react-router';
import {Link} from "react-router-dom";

function HomePost({setopen,post}) {
    const history = useHistory()
    return (
        <div className="ProfilePost" >
            <div className="PostTop"><img alt="" className="PostLogo" src={post.question.user.profilePicture} /><div><span className="PostHeadName"><Link to={{pathname:'/profile',state:post.question.user._id}} style={{textDecoration:"none"}}>{post.question.user.name}</Link></span><span className="PostHeadCollege">{post.question.user.college}</span></div></div>
            <div className="PostAnswer">
                <h2>{post.question.title}</h2>
              {post.question.description&&post.question.description.substring(0,400)}
                <div className="TagsBox">
                {post.question.tags&&post.question.tags.map((t)=><span className="TagSuggest">{t.name}</span>)}
                </div>
                <div className="ShowAnswers" > <span onClick={() => setopen(1)}>Write Answer</span> <span onClick={() => history.push('/answers')}> Show Answers </span></div>
            </div>
        </div>
    )
}

export default HomePost
