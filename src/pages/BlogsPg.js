import React from 'react';
import styled from 'styled-components';
import Head from '../images/blogs.jpg';

const Blogs = styled.section`
  
`;

const BlogsImg = styled.img`
       width: 100%;
    height: 70vh;
    object-fit: cover;
    filter: brightness(.5);
`;
const BlogsPg = () => {
    return (
        <Blogs>
            <BlogsImg src={Head} alt="" />
        </Blogs>
    )
}

export default BlogsPg
