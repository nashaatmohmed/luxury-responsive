import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    	*{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            
        }

        html, body{
            overflow-x: hidden;
            height: 10000px;
            background-color: rgba(255, 253, 209, .3);
            
        }

        .active{
        background-color: rgba(0, 0, 0, .7) !important;
    }
       
`;

export default GlobalStyle;