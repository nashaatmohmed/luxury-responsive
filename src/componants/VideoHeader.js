import React from 'react';
import styled from 'styled-components';
import Video from '../video/head1.mp4';


const VideoContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 89vh;
    width: 100%;
    padding:0 1rem;
    position: relative;
    margin-top: 80px;
    color: #fff;

    @media screen and (max-width: 1024px){
        height: 50vh;
    }

    @media screen and (max-width: 768px){
        height: 45vh;
        margin-top: 80px;

    }

    @media screen and (max-width: 420px){
        height: 30vh;
        margin-top: 80px;
    }
    

    &:before{
        content:"";
        position:absolute;
        top: 0;
        right:0;
        left:0;
        bottom:0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);

    }
`;

const VideoWrap = styled.div`
     position: absolute;
    top: 0;
    right:0;
    left:0;
    bottom:0;
    width: 100%;
    height:100%;
    overflow: hidden;
`;

const VedioBg = styled.video`
     width: 100%;
    height:100%;
    /* o-object-fit: cover; */
    object-fit: fill;
`;


const VideoHeader = () => {
    return (
        <VideoContainer>
            <VideoWrap>
                <VedioBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
            </VideoWrap>
        </VideoContainer>
    )
}

export default VideoHeader
